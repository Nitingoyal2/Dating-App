import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { useAppDispatch } from '@store/hooks';
import { loginSuccess } from '@store/slices';
import { Routes } from '@/types';
import type { ProfileData } from '@interfaces';
import StepEmail from './steps/StepEmail';
import StepName from './steps/StepName';
import StepLocation from './steps/StepLocation';
import StepGender from './steps/StepGender';
import StepSeeking from './steps/StepSeeking';
import StepBirthday from './steps/StepBirthday';
import StepPhotos from './steps/StepPhotos';
import StepWelcome from './steps/StepWelcome';
import StepSuccess from './steps/StepSuccess';

const TOTAL_STEPS = 9;

const ProfileSetup = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [currentStep, setCurrentStep] = useState(1);
    const [profileData, setProfileData] = useState<ProfileData>({
        email: '',
        firstName: '',
        location: null,
        gender: null,
        seeking: null,
        dateOfBirth: '',
        photos: [],
    });

    const handleNext = () => {
        if (currentStep < TOTAL_STEPS) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        } else {
            navigate(Routes.LOGIN);
        }
    };

    const handleComplete = () => {
        console.log('Profile completed:', profileData);

        dispatch(
            loginSuccess({
                user: {
                    id: Date.now().toString(),
                    name: profileData.firstName,
                    email: profileData.email,
                },
                token: 'new-user-token-' + Date.now(),
            })
        );

        message.success('Account created successfully!');
        navigate(Routes.DASHBOARD, { replace: true });
    };

    const updateProfileData = <K extends keyof ProfileData>(key: K, value: ProfileData[K]) => {
        setProfileData((prev) => ({ ...prev, [key]: value }));
    };

    const renderStep = () => {
        const stepProps = { onNext: handleNext, onBack: handleBack };

        switch (currentStep) {
            case 1:
                return (
                    <StepEmail
                        {...stepProps}
                        value={profileData.email}
                        onChange={(v) => updateProfileData('email', v)}
                    />
                );
            case 2:
                return (
                    <StepName
                        {...stepProps}
                        value={profileData.firstName}
                        onChange={(v) => updateProfileData('firstName', v)}
                    />
                );
            case 3:
                return (
                    <StepLocation
                        onBack={handleBack}
                        onAllow={(location) => {
                            updateProfileData('location', location);
                            handleNext();
                        }}
                        onSkip={handleNext}
                    />
                );
            case 4:
                return (
                    <StepGender
                        {...stepProps}
                        value={profileData.gender}
                        onChange={(v) => updateProfileData('gender', v)}
                    />
                );
            case 5:
                return (
                    <StepSeeking
                        {...stepProps}
                        value={profileData.seeking}
                        onChange={(v) => updateProfileData('seeking', v)}
                    />
                );
            case 6:
                return (
                    <StepBirthday
                        {...stepProps}
                        value={profileData.dateOfBirth}
                        onChange={(v) => updateProfileData('dateOfBirth', v)}
                    />
                );
            case 7:
                return (
                    <StepPhotos
                        {...stepProps}
                        value={profileData.photos}
                        onChange={(v) => updateProfileData('photos', v)}
                    />
                );
            case 8:
                return <StepWelcome {...stepProps} />;
            case 9:
                return <StepSuccess onComplete={handleComplete} />;
            default:
                return null;
        }
    };

    return <div style={{ minHeight: '100%' }}>{renderStep()}</div>;
};

export default ProfileSetup;
