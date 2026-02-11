import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommonSelector from "@/components/CommonSelector/CommonSelector";
import { EditProfileItem, Routes } from "@/types";
import { getEditProfileSelectorPageConfig } from "@constants";
import { ArrowLeftIcon } from "@/utils/svg";
import Spinner from "@/components/Spinner/Spinner";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { updateUser } from "@store/slices";
import { getUserDetails, updateUserProfileWithFormDataApi } from "@/services";
import type { ProfileUpdateRequest } from "@interfaces";
import "./EditProfileItemSelector.css";

type RouteParams = {
  item?: string;
};

const EditProfileItemSelector = () => {
  const navigate = useNavigate();
  const params = useParams<RouteParams>();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const itemParam = params.item as EditProfileItem | undefined;

  const config = useMemo(() => {
    if (!itemParam) return undefined;
    return getEditProfileSelectorPageConfig(itemParam);
  }, [itemParam]);

  const [value, setValue] = useState<string | string[] | undefined>(undefined);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!itemParam) return;
    const dynamicValue = (user as Record<string, unknown> | null)?.[itemParam];

    if (Array.isArray(dynamicValue)) {
      setValue(dynamicValue.map((v) => String(v)));
      return;
    }

    if (typeof dynamicValue === "string") {
      setValue(dynamicValue);
      return;
    }

    setValue(undefined);
  }, [itemParam, user]);

  const optionData = useMemo(() => {
    return config?.options ?? [];
  }, [config]);

  if (!config) {
    return null;
  }

  const handleDone = async () => {
    if (!user?.id) return;

    const patchMap: Partial<Record<EditProfileItem, keyof ProfileUpdateRequest>> = {
      [EditProfileItem.RELIGION]: "religion",
      [EditProfileItem.EDUCATION]: "education",
      [EditProfileItem.SMOKER]: "smoker",
      [EditProfileItem.DRINK]: "drink",
      [EditProfileItem.MARIJUANA]: "marijuana",
      [EditProfileItem.EXERCISE]: "exercise",
      [EditProfileItem.BODY_TYPE]: "body_type",
      [EditProfileItem.ASTROLOGICAL_SIGN]: "astrological_sign",
      [EditProfileItem.CHILDREN]: "children",
      [EditProfileItem.PETS]: "pets",
      [EditProfileItem.LOOKING_FOR]: "looking_for",
    };

    const field = itemParam ? patchMap[itemParam] : undefined;
    if (!itemParam || !field) {
      navigate(Routes.EDIT);
      return;
    }

    const payload: ProfileUpdateRequest = {
      [field]: value as never,
    };

    try {
      setIsSaving(true);
      
      // Use FormData for consistency
      const formData = new FormData();
      if (value !== undefined) {
        if (Array.isArray(value)) {
          value.forEach((val) => formData.append(field, val));
        } else {
          formData.append(field, String(value));
        }
      }
      
      await updateUserProfileWithFormDataApi(user.id, formData);
      dispatch(updateUser(payload as unknown as Partial<typeof user>));
      const refreshed = await getUserDetails(user.id);
      dispatch(updateUser(refreshed.data as unknown as Partial<typeof user>));
      navigate(Routes.EDIT);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="edit-profile-item-selector-page">
      {isSaving && <Spinner fullScreen tip="Saving..." />}
      <div className="edit-profile-item-selector-header">
        <button
          className="edit-profile-item-selector-back"
          onClick={() => navigate(Routes.EDIT)}
        >
          <ArrowLeftIcon size={20} color="#000" />
        </button>
        <div className="edit-profile-item-selector-title">{config.title}</div>
        <button
          className="edit-profile-item-selector-done"
          onClick={handleDone}
        >
          Done
        </button>
      </div>

      <div className="edit-profile-item-selector-subtitle">
        {config.selectorType === "checkbox"
          ? "SELECT ONE OR MORE"
          : "SELECT ONE OPTION"}
      </div>

      <CommonSelector<string>
        data={optionData}
        type={config.selectorType}
        value={value}
        onChange={(val) => setValue(val as string | string[])}
      />
    </div>
  );
};

export default EditProfileItemSelector;
