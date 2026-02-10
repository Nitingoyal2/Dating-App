import { useState } from "react";
import { useAppSelector } from "@store/hooks";
import { getAllEditProfileSections } from "@constants";
import { EditProfileSection, EditProfileItem } from "@/types";
import type { EditProfileItemConfig, EditProfileProps } from "@interfaces";
import "./EditProfile.css";
import ImageUpload from "@/components/CommonImageUpload/ImageUpload";
import FormField from "@/components/CommonFormField";

const EditProfile = ({ onDone, onPreview }: EditProfileProps) => {
  const { user } = useAppSelector((state) => state.auth);
  const [photos, setPhotos] = useState<string[]>(
    user?.photos?.map((p) => p.url) || [],
  );
  const [gender, setGender] = useState<string>(user?.gender || "man");
  const [aboutMe, setAboutMe] = useState<string>(user?.bio || "");
  const [currentWork, setCurrentWork] = useState<string>(
    user?.current_work as string,
  );
  const [birthday, setBirthday] = useState<string>(user?.date_of_birth ?? "");
  const [school, setSchool] = useState<string>(user?.school as string);
  const editProfileSections = getAllEditProfileSections();

  const handleItemClick = (item: EditProfileItem) => {
    // TODO: Handle item click - open modal or navigate to edit screen
    console.log("Item clicked:", item);
  };

  const handleSubmit = () => {
    const formValues = {
      photos,
      gender,
      aboutMe,
      currentWork,
      birthday,
      school,
    };

    console.log("FORM VALUES", formValues);
    onDone?.();
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
    const displayValue = itemConfig.defaultValue || "Add to your profile...";
    const Icon = itemConfig.icon;
    return (
      <div
        key={itemConfig.item}
        className="edit-profile-option-item"
        onClick={() => handleItemClick(itemConfig.item)}
      >
        <div className="edit-profile-option-left">
          <span className="edit-profile-option-icon">
            <Icon size={18} />
          </span>
          <span className="edit-profile-option-label">{itemConfig.label}</span>
        </div>
        <div className="edit-profile-option-right">
          <span className="edit-profile-option-placeholder">
            {displayValue}
          </span>
          <span className="edit-profile-option-arrow">›</span>
        </div>
      </div>
    );
  };

  return (
    <div className="edit-profile-page">
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
          onPreview={onPreview}
          description="Drag and drop to reorder Photos"
          uploadImage={(_file: File) => Promise.resolve({ url: "" })}
        />

        {/* Render sections dynamically */}
        {editProfileSections?.map(({ section, title, items }) => (
          <div key={section} className="edit-profile-section">
            <h2 className="edit-profile-section-title">{title}</h2>
            {
              section === EditProfileSection.BASIC ?
                // Render BASIC section fields with custom UI
                items.map((itemConfig) => renderBasicField(itemConfig.item))
                // Render other sections as option items
                : items.map((itemConfig) => renderOptionItem(itemConfig))
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditProfile;
