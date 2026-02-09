import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@store/hooks";
import { Radio, Input, DatePicker } from "antd";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";
import dayjs, { Dayjs } from "dayjs";
import { getAllEditProfileSections } from "@constants";
import { EditProfileSection, EditProfileItem } from "@/types";
import type { EditProfileProps } from "@interfaces";
import "./EditProfile.css";

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

    const [isAboutEditing, setIsAboutEditing] = useState(false);
    const aboutWrapperRef = useRef<HTMLDivElement>(null);
    const [isWorkEditing, setIsWorkEditing] = useState(false);
    const workWrapperRef = useRef<HTMLDivElement>(null);

    const editProfileSections = getAllEditProfileSections();

    // Format birthday from date_of_birth
    const formatBirthday = (dateOfBirth?: string): string => {
        if (!dateOfBirth) return "";
        return dayjs(dateOfBirth).format("MMM D, YYYY");
    };

    useEffect(() => {
        function handleOutside(e: MouseEvent) {
            if (
                aboutWrapperRef.current &&
                !aboutWrapperRef.current.contains(e.target as Node)
            ) {
                setIsAboutEditing(false);
            }
        }

        if (isAboutEditing) {
            document.addEventListener("mousedown", handleOutside);
        }

        return () => document.removeEventListener("mousedown", handleOutside);
    }, [isAboutEditing]);

    useEffect(() => {
        function handleOutside(e: MouseEvent) {
            if (
                workWrapperRef.current &&
                !workWrapperRef.current.contains(e.target as Node)
            ) {
                setIsWorkEditing(false);
            }
        }

        if (isWorkEditing) {
            document.addEventListener("mousedown", handleOutside);
        }

        return () => document.removeEventListener("mousedown", handleOutside);
    }, [isWorkEditing]);

    

    const handlePhotoRemove = (index: number) => {
        setPhotos((prev) => prev.filter((_, i) => i !== index));
    };

    const handlePhotoAdd = () => {
        // TODO: Implement photo upload
        console.log("Add photo");
    };

    const handleItemClick = (item: EditProfileItem) => {
        // TODO: Handle item click - open modal or navigate to edit screen
        console.log("Item clicked:", item);
    };

    const maxPhotos = 9;
    const photoSlots = Array(maxPhotos)
        .fill(null)
        .map((_, index) => ({
            index,
            photo: photos[index] || null,
        }));

    const renderBasicField = (item: EditProfileItem) => {
        switch (item) {
            case EditProfileItem.BIRTHDAY:
                const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
                const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
                    user?.date_of_birth ? dayjs(user.date_of_birth) : null,
                );

                const handleBirthdayClick = () => {
                    setIsDatePickerVisible(true);
                };

                const handleDatePickerChange = (date: Dayjs | null) => {
                    setSelectedDate(date);
                    setIsDatePickerVisible(false);
                };

                return (
                    <div className="edit-profile-field">
                        <label className="edit-profile-field-label">My Birthday</label>
                        <div
                            className="edit-profile-field-value edit-profile-birthday"
                            onClick={handleBirthdayClick}
                        >
                            {isDatePickerVisible ? (
                                <input
                                    type="date"
                                    onChange={(e) =>
                                        handleDatePickerChange(dayjs(e.target.value))
                                    }
                                    value={selectedDate?.format("YYYY-MM-DD")}
                                    autoFocus
                                />
                            ) : (
                                <div>
                                    {formatBirthday(selectedDate?.toString() || "Not set")}
                                </div>
                            )}
                        </div>
                    </div>
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
                    <div className="edit-profile-field" ref={aboutWrapperRef}>
                        <div className="edit-profile-field-header">
                            <label className="edit-profile-field-label">About Me</label>
                            <span>{aboutMe.length}/500</span>
                        </div>

                        {!isAboutEditing ? (
                            <div className="about-view-box">
                                <div className="about-view-text">
                                    {aboutMe || "Enter about me..."}
                                </div>

                                <button
                                    className="edit-profile-edit-icon-about"
                                    onClick={() => setIsAboutEditing(true)}
                                >
                                    <EditOutlined />
                                </button>
                            </div>
                        ) : (
                            <textarea
                                rows={7}
                                maxLength={500}
                                autoFocus
                                value={aboutMe}
                                onChange={(e) => setAboutMe(e.target.value)}
                                className="edit-profile-textarea"
                                placeholder="Enter About me... "
                            />
                        )}
                    </div>
                );
            case EditProfileItem.CURRENT_WORK:
                return (
                    <div className="edit-profile-field" ref={workWrapperRef}>
                        <label className="edit-profile-field-label">Current Work</label>

                        {!isWorkEditing ? (
                            <div className="about-view-box">
                                <div className="about-view-text">
                                    {currentWork || "Enter current work..."}
                                </div>

                                <button
                                    className="edit-profile-edit-icon-about"
                                    onClick={() => setIsWorkEditing(true)}
                                >
                                    <EditOutlined />
                                </button>
                            </div>
                        ) : (
                            <textarea
                                rows={2}
                                maxLength={200}
                                autoFocus
                                value={currentWork}
                                placeholder="Enter current work..."
                                onChange={(e) => setCurrentWork(e.target.value)}
                                className="edit-profile-textarea"
                            />
                        )}
                    </div>
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
                <div className="edit-profile-section">
                    <div className="edit-profile-section-header">
                        <h2 className="edit-profile-section-title">UPLOAD IMAGES</h2>
                        {onPreview && (
                            <button
                                className="edit-profile-preview-link-inline"
                                onClick={onPreview}
                            >
                                Preview
                            </button>
                        )}
                    </div>
                    <div className="edit-profile-photos-grid">
                        {photoSlots.map((slot, index) => (
                            <div key={index} className="edit-profile-photo-slot">
                                {slot.photo ? (
                                    <div className="edit-profile-photo-wrapper">
                                        <img
                                            src={`${import.meta.env.VITE_API_BASE_URL || ""}${slot.photo.url}`}
                                            alt={`Photo ${index + 1}`}
                                            className="edit-profile-photo"
                                        />
                                        <button
                                            className="edit-profile-photo-remove"
                                            onClick={() => handlePhotoRemove(index)}
                                        >
                                            <CloseOutlined />
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        className="edit-profile-photo-add"
                                        onClick={handlePhotoAdd}
                                    >
                                        <span className="edit-profile-photo-add-icon">+</span>
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                    <p className="edit-profile-photos-hint">
                        Drag and drop to reorder Photos
                    </p>
                </div>

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
