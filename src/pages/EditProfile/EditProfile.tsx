import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  buildEditProfileItemRoute,
  getAllEditProfileSections,
  getEditProfileSelectorPageConfig,
  getEditProfileSliderPageConfig,
} from "@constants";
import { EditProfileSection, EditProfileItem } from "@/types";
import {
  type EditProfileItemConfig,
  type EditProfileProps,
  type ProfileUpdateRequest,
} from "@interfaces";
import type { UploadedPhoto } from "@/interfaces/imageUpload.interface";
import "./EditProfile.css";
import ImageUpload from "@/components/CommonImageUpload/ImageUpload";
import FormField from "@/components/CommonFormField";
import Spinner from "@/components/Spinner/Spinner";
import { updateUser } from "@store/slices";
import { getUserDetails, updateUserProfileApi, userPhotoDeleteApi, updateUserProfileWithFormDataApi } from "@/services";
import { ArrowRightIcon } from "@/utils/svg";
import { message } from "antd";

const EditProfile = ({ onDone }: EditProfileProps) => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  const [isInitialLoading, setIsInitialLoading] = useState(true);
  // Initialize photos with existing user photos
  const [photos, setPhotos] = useState<UploadedPhoto[]>(
    user?.photos?.map((p) => ({
      url: p.url,
      id: p.id,
    })) || [],
  );
  const [gender, setGender] = useState<string>("");
  const [aboutMe, setAboutMe] = useState<string>("");
  const [currentWork, setCurrentWork] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [school, setSchool] = useState<string>("");
  const [isSaving, setIsSaving] = useState(false);
  const [originalPhotos, setOriginalPhotos] = useState<UploadedPhoto[]>([]);

  const editProfileSections = getAllEditProfileSections();

  const fetchUserDetails = async () => {
    if (!user?.id) return;
    try {
      const response = await getUserDetails(user?.id as string);
      const userData = response.data;

      // Populate form fields with fetched data
      if (userData) {
        setGender(userData.gender ?? "");
        setAboutMe(userData.about_me ?? "");
        setCurrentWork(userData.current_work ?? "");
        setSchool(userData.school ?? "");
        if (userData.date_of_birth) {
          setBirthday(String(userData.date_of_birth).split("T")[0]);
        } else {
          setBirthday("");
        }

        if (userData.photos?.length) {
          const userPhotos = userData.photos.map((p) => ({
            id: p.id,
            url: p.url,
          }));
          setPhotos(userPhotos);
          setOriginalPhotos(userPhotos);
        }
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setIsInitialLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, [user?.id]);

  const handleItemClick = (item: EditProfileItem) => {
    const selectorConfig = getEditProfileSelectorPageConfig(item);
    if (selectorConfig) {
      navigate(buildEditProfileItemRoute(item));
      return;
    }

    const sliderConfig = getEditProfileSliderPageConfig(item);
    if (sliderConfig) {
      navigate(buildEditProfileItemRoute(item));
      return;
    }
  };

  const handleSubmit = async () => {
    if (!user?.id) {
      onDone?.();
      return;
    }

    const validPhotos = photos.filter((p) => Boolean(p?.url));
    if (validPhotos.length < 3) {
      message.error("Please upload at least 3 photos.");
      return;
    }

    try {
      setIsSaving(true);

      // Step 1: Find photos that were removed (exist in originalPhotos but not in current photos)
      const removedPhotos = originalPhotos.filter(
        (originalPhoto) => 
          originalPhoto.id && 
          !photos.some((currentPhoto) => currentPhoto.id === originalPhoto.id)
      );

      // Step 2: Delete removed photos
      for (const removedPhoto of removedPhotos) {
        if (removedPhoto.id) {
          await userPhotoDeleteApi(user.id, removedPhoto.id);
        }
      }

      // Step 3: Find new photos (have file property)
      const newPhotos = photos.filter((p) => p.file);
      
      // Step 4: Prepare form data
      const formData = new FormData();
      
      // Add new photo files
      newPhotos.forEach((photo) => {
        if (photo.file) {
          formData.append(`photos`, photo.file);
        }
      });

      // Add other profile fields
      const genderValue = gender === "man" || gender === "woman" ? gender : undefined;
      
      if (genderValue) formData.append('gender', genderValue);
      if (currentWork) formData.append('current_work', currentWork);
      if (school) formData.append('school', school);
      if (birthday) formData.append('date_of_birth', birthday);
      if (aboutMe) formData.append('about_me', aboutMe);

      // Step 5: Update profile with FormData if there are new photos, otherwise use regular API
      if (newPhotos.length > 0) {
        await updateUserProfileWithFormDataApi(user.id, formData);
      } else {
        // Use regular API for non-photo updates
        const payload: ProfileUpdateRequest = {
          gender: genderValue,
          current_work: currentWork || undefined,
          school: school || undefined,
          date_of_birth: birthday || undefined,
        };

        const fullPayload = {
          ...payload,
          about_me: aboutMe || undefined,
          photos: validPhotos?.map((p, index) => ({
            url: p.url,
            order: index,
          })),
        };

        await updateUserProfileApi(user.id, fullPayload);
      }

      // Step 6: Refresh user data
      const refreshed = await getUserDetails(user.id);
      dispatch(updateUser(refreshed.data as unknown as Partial<typeof user>));
      
      onDone?.();
    } catch (error) {
      console.error("Error updating profile:", error);
      message.error("Failed to update profile. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const renderBasicField = (item: EditProfileItem) => {
    switch (item) {
      case EditProfileItem.BIRTHDAY:
        return (
          <FormField
            name="dob"
            type="input"
            inputType="date"
            label="My Birthday"
            value={birthday}
            onChange={setBirthday}
            placeholder="Add your birthday"
          />
        );
      case EditProfileItem.GENDER:
        return (
          <FormField
            name="gender"
            type="radio"
            label="Gender"
            radioValue={["man", "woman"]}
            value={gender}
            onChange={setGender}
          />
        );
      case EditProfileItem.ABOUT_ME:
        return (
          <FormField
            name="aboutMe"
            type="textarea"
            label="About Me"
            value={aboutMe}
            onChange={setAboutMe}
            placeholder="Enter About me... "
          />
        );
      case EditProfileItem.CURRENT_WORK:
        return (
          <FormField
            name="currentWork"
            type="textarea"
            label="Current Work"
            value={currentWork}
            onChange={setCurrentWork}
            placeholder="Enter current work..."
          />
        );
      case EditProfileItem.SCHOOL:
        return (
          <FormField
            name="school"
            type="textarea"
            label="School"
            value={school}
            onChange={setSchool}
            placeholder="Enter school me... "
          />
        );
      default:
        return null;
    }
  };

  const renderOptionItem = (itemConfig: EditProfileItemConfig) => {
    const dynamicValue = (user as Record<string, unknown> | null)?.[
      itemConfig.item
    ];
    const selectorConfig = getEditProfileSelectorPageConfig(itemConfig.item);
    const optionsById = selectorConfig
      ? new Map(selectorConfig.options.map((o) => [o.id, o.label]))
      : null;

    const displayValue = (() => {

      if (Array.isArray(dynamicValue)) {
        const labels = dynamicValue
          .map((v) => String(v))
          .map((id) => optionsById?.get(id) ?? id);
        return labels.join(", ");
      }

      if (typeof dynamicValue === "string") {
        return (optionsById?.get(dynamicValue) ?? dynamicValue)
      }

      return "";
    })();

    const finalDisplayValue =
      displayValue || itemConfig.defaultValue || "Add to your profile...";
    const Icon = itemConfig.icon;
    return (
      <div
        key={itemConfig.item}
        className="edit-profile-option-item"
        onClick={() => handleItemClick(itemConfig.item)}
      >
        <div>
          <div className="edit-profile-option-left">
            <span className="edit-profile-option-icon">
              <Icon size={18} />
            </span>
            <span className="edit-profile-option-label">
              {itemConfig.label}
            </span>
          </div>
          <div className="edit-profile-option-right">
            <span className="edit-profile-option-placeholder">
              {finalDisplayValue}
            </span>
          </div>
        </div>
        <span className="edit-profile-option-arrow">
          <ArrowRightIcon size={20} />
        </span>
      </div>
    );
  };

  return (
    <div className="edit-profile-page">
      {isInitialLoading && <Spinner fullScreen tip="Loading..." />}
      {isSaving && <Spinner fullScreen tip="Saving..." />}
      {/* Header */}
      <div className="edit-profile-header">
        <div className="edit-profile-header-left"></div>
        <div className="edit-profile-header-center"></div>
        <div className="edit-profile-header-right">
          <button className="edit-profile-done-btn" onClick={handleSubmit}>
            Done
          </button>
        </div>
      </div>

      <div className="edit-profile-content">
        {/* UPLOAD IMAGES Section */}
        <ImageUpload
          label="UPLOAD IMAGES"
          photos={photos}
          onChange={setPhotos}
          description="Drag and drop to reorder Photos"
          maxPhotos={6}
        />

        {/* Render sections dynamically */}
        {editProfileSections?.map(({ section, title, items }) => (
          <div key={section} className="edit-profile-section">
            <h2 className="edit-profile-section-title">{title}</h2>
            {section === EditProfileSection.BASIC
              ? // Render BASIC section fields with custom UI
              items.map((itemConfig) => renderBasicField(itemConfig.item))
              : // Render other sections as option items
              items.map((itemConfig) => renderOptionItem(itemConfig))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditProfile;
