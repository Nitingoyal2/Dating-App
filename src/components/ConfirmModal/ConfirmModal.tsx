import type { ReactNode } from 'react';
import { Modal, Space, Typography } from 'antd';
import { CheckCircleFilled, ExclamationCircleFilled, InfoCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import { PrimaryButton } from '@components/Button';
import type { ConfirmModalProps, ModalType } from '@interfaces';
import './ConfirmModal.css';

const { Text } = Typography;

const iconMap: Record<ModalType, { icon: ReactNode; color: string }> = {
  success: { icon: <CheckCircleFilled />, color: '#22c55e' },
  warning: { icon: <ExclamationCircleFilled />, color: '#f59e0b' },
  info: { icon: <InfoCircleFilled />, color: '#3b82f6' },
  error: { icon: <CloseCircleFilled />, color: '#ef4444' },
};

const ConfirmModal = ({
  open,
  onClose,
  onConfirm,
  title,
  description,
  type = 'success',
  icon,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  confirmVariant = 'primary',
  cancelVariant = 'secondary',
  showCancel = true,
  width = 320,
}: ConfirmModalProps) => {
  const { icon: defaultIcon, color } = iconMap[type];
  const displayIcon = icon || defaultIcon;

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      closable={false}
      width={width}
      className="confirm-modal"
    >
      <Space direction="vertical" align="center" className="confirm-modal-content">
        <div className="confirm-modal-icon" style={{ color }}>
          {displayIcon}
        </div>
        
        <h3 className="confirm-modal-title">{title}</h3>
        
        {description && (
          <Text type="secondary" className="confirm-modal-description">
            {description}
          </Text>
        )}

        <Space direction="vertical" className="confirm-modal-actions" size="middle">
          {showCancel && (
            <PrimaryButton variant={cancelVariant} onClick={onClose}>
              {cancelText}
            </PrimaryButton>
          )}
          <PrimaryButton variant={confirmVariant} onClick={onConfirm}>
            {confirmText}
          </PrimaryButton>
        </Space>
      </Space>
    </Modal>
  );
};

export default ConfirmModal;

