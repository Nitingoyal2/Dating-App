import { useState } from "react";
import { useAppSelector } from "@store/hooks";
import { Radio } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { getAllEditProfileSections } from "@constants";
import { EditProfileSection, EditProfileItem } from "@/types";
import type { EditProfileProps } from "@interfaces";
import "./EditProfile.css";
import CommonTextarea from "@/components/CommonTextArea";
import ImageUpload from "@/components/CommonImageUpload/ImageUpload";
import CommonDatePicker from "@/components/CommonDatePicker/CommonDatePicker";

const EditProfile = ({ onDone, onPreview }: EditProfileProps) => {
  const { user } = useAppSelector((state) => state.auth);
  const [photos, setPhotos] = useState<
    Array<{ id?: string; url: string; is_primary?: boolean }>
  >(user?.photos || []);
  const [gender, setGender] = useState<"man" | "woman">(user?.gender || "man");
  const [aboutMe, setAboutMe] = useState<string>(user?.bio || "");
  const [currentWork, setCurrentWork] = useState<string>(
    user?.current_work as string,
  );
  const [birthday, setBirthday] = useState<Dayjs | null>(
    user?.date_of_birth ? dayjs(user.date_of_birth) : null,
  );
  const [school, setSchool] = useState<string>(user?.school as string);
  const editProfileSections = getAllEditProfileSections();

  const handleItemClick = (item: EditProfileItem) => {
    // TODO: Handle item click - open modal or navigate to edit screen
    console.log("Item clicked:", item);
  };

  const renderBasicField = (item: EditProfileItem) => {
    switch (item) {
      case EditProfileItem.BIRTHDAY:
        return (
          <CommonDatePicker
            label="My Birthday"
            value={birthday}
            onChange={setBirthday}
            placeholder="Add your birthday"
          />
        );
      case EditProfileItem.GENDER:
        return (
          <div className="edit-profile-field">
            <label className="edit-profile-field-label">My Gender</label>
            <Radio.Group
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="edit-profile-gender-group"
            >
              <Radio value="man" className="edit-profile-radio">
                Man
              </Radio>
              <Radio value="woman" className="edit-profile-radio">
                Woman
              </Radio>
            </Radio.Group>
          </div>
        );
      case EditProfileItem.ABOUT_ME:
        return (
          <CommonTextarea
            label="About Me"
            value={aboutMe}
            onChange={setAboutMe}
            placeholder="Enter About me... "
          />
        );
      case EditProfileItem.CURRENT_WORK:
        return (
          <CommonTextarea
            label="Current Work"
            value={currentWork}
            onChange={setCurrentWork}
            placeholder="Enter current work..."
          />
        );
      case EditProfileItem.SCHOOL:
        return (
          <CommonTextarea
            label="School"
            value={school}
            onChange={setSchool}
            placeholder="Enter school..."
          />
        );
      default:
        return null;
    }
  };

  const renderOptionItem = (itemConfig: {
    item: EditProfileItem;
    label: string;
    icon: string;
    defaultValue: string | null;
  }) => {
    const displayValue = itemConfig.defaultValue || "Add to your profile...";
    return (
      <div
        key={itemConfig.item}
        className="edit-profile-option-item"
        onClick={() => handleItemClick(itemConfig.item)}
      >
        <div className="edit-profile-option-left">
          <span className="edit-profile-option-icon">{itemConfig.icon}</span>
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
          <button className="edit-profile-done-btn" onClick={onDone}>
            Done
          </button>
        </div>
      </div>

      <div className="edit-profile-content">
        {/* UPLOAD IMAGES Section */}
        <ImageUpload
          photos={photos}
          onChange={setPhotos}
          onPreview={onPreview}
          uploadImage={(file) => Promise.resolve({ url: "" })}
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
