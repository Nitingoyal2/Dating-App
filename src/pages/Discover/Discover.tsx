import { useEffect, useState } from "react";
import {
  VerifiedIcon,
  LocationSymbol,
  StartIcon,
  HeartIcon,
  CloseIcon,
} from "@svg";
import "./Discover.css";
import type { UserData } from "@/interfaces";
import { getUserList } from "@/services";
import { message } from "antd";
import { Spinner } from "@/components/Spinner";

const Discover = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [profiles, setProfiles] = useState<UserData[]>([]);

  async function getProfileListing() {
    setLoading(true);
    try {
      const response = await getUserList();
      if (response?.success) {
        setProfiles(response?.data);
      }
    } catch (error) {
      console.error(error);
      message.error("Failed to get user list");
    } finally {
      setLoading(false);
    }
  }

  const currentProfile = profiles[currentProfileIndex] || profiles[0];

  const handleLike = () => {
    // Handle like action
    console.log("Like");
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    }
  };

  const handleSuperLike = () => {
    // Handle super like action
    console.log("Super Like");
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    }
  };

  const handleDislike = () => {
    // Handle dislike action
    console.log("Dislike");
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    }
  };

  useEffect(() => {
    getProfileListing();
  }, []);

  return (
    <div className="discover-screen">
      {loading && <Spinner fullScreen tip="Loading..." />}
      <div className="discover-content">
        <div className="profile-card">
          <div className="profile-card-image">
            <img
              src={currentProfile?.avatarUrl}
              alt={currentProfile?.firstName}
            />
            <div className="profile-card-overlay">
              <div className="profile-card-info">
                <div className="profile-card-name">
                  <h2>
                    {currentProfile?.fullName}, {currentProfile?.age}
                  </h2>
                  <VerifiedIcon size={20} />
                </div>
                <div className="profile-card-distance">
                  <LocationSymbol size={16} color="#fff" />
                  <span>1 miles away</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="discover-actions">
          <button className="action-btn dislike-btn" onClick={handleDislike}>
            <CloseIcon size={24} color="#FF9500" />
          </button>
          <button
            className="action-btn superlike-btn"
            onClick={handleSuperLike}
          >
            <StartIcon size={36} color="#fff" />
          </button>
          <button className="action-btn like-btn" onClick={handleLike}>
            <HeartIcon size={24} color="#FF6B9D" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discover;
