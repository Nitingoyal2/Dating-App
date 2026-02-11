import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EditProfileItem, Routes } from "@/types";
import { getEditProfileSliderPageConfig } from "@constants";
import { ArrowLeftIcon } from "@/utils/svg";
import Spinner from "@/components/Spinner/Spinner";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { updateUser } from "@store/slices";
import { getUserDetails, updateUserProfileWithFormDataApi } from "@/services";
import "./EditProfileHeight.css";

const toFeetInches = (totalInches: number) => {
  const feet = Math.floor(totalInches / 12);
  const inches = totalInches % 12;
  return { feet, inches };
};

const toTotalInches = (feet: number, inches: number) => {
  return feet * 12 + inches;
};

const EditProfileHeight = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const config = useMemo(() => {
    return getEditProfileSliderPageConfig(EditProfileItem.HEIGHT);
  }, []);

  const initialInches = useMemo(() => {
    const parsed = Number((user as Record<string, unknown> | null)?.height);
    if (Number.isFinite(parsed) && parsed > 0) return parsed;
    return config?.min ?? 40;
  }, [config?.min, user]);

  const initial = useMemo(() => toFeetInches(initialInches), [initialInches]);

  const [feet, setFeet] = useState<number>(initial.feet);
  const [inches, setInches] = useState<number>(initial.inches);
  const [isSaving, setIsSaving] = useState(false);

  if (!config) return null;

  const handleDone = async () => {
    if (!user?.id) return;
    const total = toTotalInches(feet, inches);
    try {
      setIsSaving(true);
      
      // Use FormData for consistency
      const formData = new FormData();
      formData.append('height', String(total));
      
      await updateUserProfileWithFormDataApi(user.id, formData);
      dispatch(updateUser({ height: String(total) } as unknown as Partial<typeof user>));
      const refreshed = await getUserDetails(user.id);
      dispatch(updateUser(refreshed.data as unknown as Partial<typeof user>));
      navigate(Routes.EDIT);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="edit-profile-height-page">
      {isSaving && <Spinner fullScreen tip="Saving..." />}
      <div className="edit-profile-height-header">
        <button
          className="edit-profile-height-back"
          onClick={() => navigate(Routes.EDIT)}
        >
          <ArrowLeftIcon size={20} color="#000" />
        </button>
        <div className="edit-profile-height-title">{config.title}</div>
        <button
          className="edit-profile-height-done"
          onClick={handleDone}
        >
          Done
        </button>
      </div>

      <div className="edit-profile-height-slider-wrap">
        <div className="edit-profile-height-value">
          {feet}' {inches}"
        </div>
        <div className="edit-profile-height-sliders">
          <div className="edit-profile-height-slider-block">
            <div className="edit-profile-height-slider-label">Feet</div>
            <input
              className="edit-profile-height-slider"
              type="range"
              min={3}
              max={7}
              step={1}
              value={feet}
              onChange={(e) => setFeet(Number(e.target.value))}
            />
          </div>

          <div className="edit-profile-height-slider-block">
            <div className="edit-profile-height-slider-label">Inches</div>
            <input
              className="edit-profile-height-slider"
              type="range"
              min={0}
              max={11}
              step={1}
              value={inches}
              onChange={(e) => setInches(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileHeight;
