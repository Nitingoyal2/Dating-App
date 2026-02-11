import React from "react";
import {
  ArrowLeftIcon,
  CloseIcon,
  HeartIcon,
  LocationSymbol,
  StartIcon,
} from "@/utils/svg";
import { CheckOutlined } from "@ant-design/icons";
import "./UserProfileView.css";

export interface BasicInfoItem {
  label: string;
  value: string;
}

export interface UserProfile {
  id: string;
  name: string;
  age: number;
  location: string;
  distanceKm?: number;
  about?: string;
  interests: string[];
  work?: string;
  school?: string;
  gallery: string[];
  details: BasicInfoItem[];
}

const profileData: UserProfile = {
  id: "1",
  name: "Jessica Parker",
  age: 23,
  location: "New York, USA",
  distanceKm: 1,
  about: "I enjoy meeting new people and creating uplifting experiences.",
  interests: ["Travelling", "Music", "Fitness", "Reading"],
  work: "Developer",
  school: "New York University",
  gallery: [
    "https://picsum.photos/400/600?random=1",
    "https://picsum.photos/400/600?random=2",
    "https://picsum.photos/400/600?random=3",
    "https://picsum.photos/400/600?random=4",
    "https://picsum.photos/400/600?random=5",
    "https://picsum.photos/400/600?random=6",
  ],
  details: [
    { label: "Looking For", value: "Man" },
    { label: "Pets", value: "Cats" },
    { label: "Children", value: "Don’t want" },
    { label: "Astrological Sign", value: "Capricorn" },
    { label: "Religion", value: "Christian/Catholic" },
    { label: "Education", value: "Bachelor’s degree" },
    { label: "Height", value: "5’8’’" },
    { label: "Body Type", value: "Average" },
    { label: "Exercise", value: "Sometimes" },
    { label: "Drink", value: "Never" },
  ],
};

const InfoSection: React.FC<{ items: { label: string; value: string }[] }> = ({
  items,
}) => (
  <div className="profile-info">
    {items.map((item) => (
      <div className="info-container" key={item.label}>
        <h1>{item.label}</h1>
        <p>{item.value}</p>
      </div>
    ))}
  </div>
);

const onBack = () => {};
const onLike = () => {};
const onDislike = () => {};
const onSuperLike = () => {};

const UserProfileView = () => {
  const {
    name,
    age,
    location,
    distanceKm,
    about,
    interests,
    work,
    school,
    gallery,
    details,
  } = profileData;

  return (
    <div className="profile-container">
      {/* IMAGE */}
      <div
        className="profile-image-container"
        style={{ backgroundImage: `url(${gallery[0]})` }}
      >
        <button type="button" className="back-button" onClick={onBack}>
          <ArrowLeftIcon size={24} />
        </button>
      </div>

      <div className="profile-content">
        {/* NAME */}
        <div className="profile-name">
          <h1>
            {name}, {age}
          </h1>
          <p>{location}</p>
        </div>

        {/* LOCATION + ABOUT + INTERESTS */}
        <div className="profile-info">
          <div className="location-info">
            <div>
              <h1>Location</h1>
              <p>{location}</p>
            </div>
            {distanceKm && (
              <div className="distance-card">
                <LocationSymbol size={16} color="#e94057" /> {distanceKm} KM
              </div>
            )}
          </div>

          {about && (
            <div className="about-text">
              <h1>About</h1>
              <p>{about}</p>
            </div>
          )}

          {interests.length > 0 && (
            <div className="interest-info">
              <h1>Interests</h1>
              <div className="interest-card-container">
                {interests.map((interest) => (
                  <div className="interest-card" key={interest}>
                    <CheckOutlined /> {interest}
                  </div>
                ))}
              </div>
            </div>
          )}

          {work && (
            <div className="info-container">
              <h1>Current Work</h1>
              <p>{work}</p>
            </div>
          )}

          {school && (
            <div className="info-container">
              <h1>School</h1>
              <p>{school}</p>
            </div>
          )}
        </div>

        {/* OTHER DETAILS */}
        <InfoSection items={details} />

        {/* GALLERY */}
        {gallery.length > 1 && (
          <div className="gallery-container">
            <h1>Gallery</h1>
            <div className="gallery-image-container">
              {gallery?.map((img, i) => (
                <img key={i} src={img} alt={`Gallery ${i}`} loading="lazy" />
              ))}
            </div>
          </div>
        )}

        {/* ACTIONS */}
        <div className="discover-actions">
          <button className="action-btn dislike-btn" onClick={onDislike}>
            <CloseIcon size={24} color="#FF9500" />
          </button>

          <button className="action-btn superlike-btn" onClick={onSuperLike}>
            <StartIcon size={36} color="#fff" />
          </button>

          <button className="action-btn like-btn" onClick={onLike}>
            <HeartIcon size={24} color="#E94057" filled />
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(UserProfileView);
