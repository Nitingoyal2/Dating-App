import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { useAppDispatch } from '@store/hooks';
import { loginSuccess } from '@store/slices';
import { Routes } from '@/types';
import type { ProfileData, ProfileUpdateRequest } from '@interfaces';
import {
    registrationDraftApi,
    registrationCompleteApi,
    profileStepPatchApi,
} from '@services';
import { ValidationMessages } from '@constants';
import StepEmail from './steps/StepEmail';
import StepName from './steps/StepName';
import StepLocation from './steps/StepLocation';
import StepGender from './steps/StepGender';
import StepSeeking from './steps/StepSeeking';
import StepBirthday from './steps/StepBirthday';
import StepPhotos from './steps/StepPhotos';
import StepWelcome from './steps/StepWelcome';
import StepSuccess from './steps/StepSuccess';

const ProfileSetup = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [currentStep, setCurrentStep] = useState(1);
    const [userId, setUserId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [profileData, setProfileData] = useState<ProfileData>({
        email: '',
        firstName: '',
        location: null,
        gender: null,
        seeking: null,
        dateOfBirth: '',
        photos: [],
    });

    const updateProfileData = <K extends keyof ProfileData>(key: K, value: ProfileData[K]) => {
        setProfileData((prev) => ({ ...prev, [key]: value }));
    };

    // Get API payload based on step (object map approach)
    const getStepPayload = (
        step: number,
        extraData?: { location?: { lat: number; lng: number }; locationSkipped?: boolean; password?: string }
    ): ProfileUpdateRequest | null => {
        const payloadMap: Record<number, () => ProfileUpdateRequest | null> = {
            2: () => ({ first_name: profileData.firstName }),
            3: () => {
                if (extraData?.locationSkipped) return { location_skipped: true };
                if (extraData?.location) return { latitude: extraData.location.lat, longitude: extraData.location.lng };
                return null;
            },
            4: () => (profileData.gender ? { gender: profileData.gender } : null),
            5: () => (profileData.seeking ? { seeking: profileData.seeking } : null),
            6: () => ({ date_of_birth: profileData.dateOfBirth }),
            8: () => ({ rules_accepted: true }),
        };

        return payloadMap[step]?.() ?? null;
    };

    // Unified step submit handler
    const handleStepSubmit = async (
        step: number,
        extraData?: { location?: { lat: number; lng: number }; locationSkipped?: boolean; password?: string }
    ) => {
        // Step 7 (Photos): Just move to next step, photos are handled in component
        if (step === 7) {
            setCurrentStep(8);
            return;
        }

        setIsLoading(true);
        try {
            // Step 1: Create draft
            if (step === 1) {
                if (!profileData.email) return;
                const response = await registrationDraftApi({ email: profileData.email });
                setUserId(response.user_id);
                setCurrentStep(2);
                return;
            }

            // Step 9: Complete profile
            if (step === 9) {
                if (!userId || !extraData?.password) return;
                const response = await registrationCompleteApi(userId, {
                    password: extraData.password,
                    confirm_password: extraData.password,
                });

                dispatch(
                    loginSuccess({
                        user: {
                            id: response.user.id,
                            name: response.user.first_name,
                            email: response.user.email,
                        },
                        token: response.tokens.access_token,
                    })
                );

                message.success(ValidationMessages.ACCOUNT_CREATED);
                navigate(Routes.DASHBOARD, { replace: true });
                return;
            }

            // Steps 2-6, 8: PATCH profile
            if (!userId) return;
            const payload = getStepPayload(step, extraData);
            if (!payload) return;

            await profileStepPatchApi(userId, payload);

            // Update local state for location
            if (step === 3 && extraData?.location) {
                updateProfileData('location', extraData.location);
            }

            setCurrentStep(step + 1);
        } catch (error) {
            const err = error as Error;
            message.error(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        } else {
            navigate(Routes.LOGIN);
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <StepEmail
                        onNext={() => handleStepSubmit(1)}
                        onBack={handleBack}
                        value={profileData.email}
                        onChange={(v) => updateProfileData('email', v)}
                        isLoading={isLoading}
                    />
                );
            case 2:
                return (
                    <StepName
                        onNext={() => handleStepSubmit(2)}
                        onBack={handleBack}
                        value={profileData.firstName}
                        onChange={(v) => updateProfileData('firstName', v)}
                        isLoading={isLoading}
                    />
                );
            case 3:
                return (
                    <StepLocation
                        onBack={handleBack}
                        onAllow={(location) => handleStepSubmit(3, { location })}
                        onSkip={() => handleStepSubmit(3, { locationSkipped: true })}
                        isLoading={isLoading}
                    />
                );
            case 4:
                return (
                    <StepGender
                        onNext={() => handleStepSubmit(4)}
                        onBack={handleBack}
                        value={profileData.gender}
                        onChange={(v) => updateProfileData('gender', v)}
                        isLoading={isLoading}
                    />
                );
            case 5:
                return (
                    <StepSeeking
                        onNext={() => handleStepSubmit(5)}
                        onBack={handleBack}
                        value={profileData.seeking}
                        onChange={(v) => updateProfileData('seeking', v)}
                        isLoading={isLoading}
                    />
                );
            case 6:
                return (
                    <StepBirthday
                        onNext={() => handleStepSubmit(6)}
                        onBack={handleBack}
                        value={profileData.dateOfBirth}
                        onChange={(v) => updateProfileData('dateOfBirth', v)}
                        isLoading={isLoading}
                    />
                );
            case 7:
                return (
                    <StepPhotos
                        onNext={() => handleStepSubmit(7)}
                        onBack={handleBack}
                        value={profileData.photos}
                        onChange={(v) => updateProfileData('photos', v)}
                        isLoading={isLoading}
                        userId={userId}
                    />
                );
            case 8:
                return (
                    <StepWelcome
                        onNext={() => handleStepSubmit(8)}
                        onBack={handleBack}
                        isLoading={isLoading}
                    />
                );
            case 9:
                return (
                    <StepSuccess
                        onComplete={(password) => handleStepSubmit(9, { password })}
                        isLoading={isLoading}
                    />
                );
            default:
                return null;
        }
    };

    return <div style={{ minHeight: '100%' }}>{renderStep()}</div>;
};

export default ProfileSetup;
