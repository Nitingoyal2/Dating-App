import { Button } from 'antd';
import type { ButtonProps } from 'antd';
import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface PrimaryButtonProps extends Omit<ButtonProps, 'size'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  rounded?: boolean;
}

const PrimaryButton = ({
  children,
  variant = 'primary',
  size = 'large',
  fullWidth = true,
  rounded = true,
  className = '',
  disabled,
  loading,
  ...props
}: PrimaryButtonProps) => {
  const sizeClass = `btn-${size}`;
  const variantClass = `btn-${variant}`;
  const widthClass = fullWidth ? 'btn-full-width' : '';
  const roundedClass = rounded ? 'btn-rounded' : '';

  return (
    <Button
      type={variant === 'primary' ? 'primary' : variant === 'text' ? 'text' : 'default'}
      disabled={disabled}
      loading={loading}
      className={`custom-btn ${variantClass} ${sizeClass} ${widthClass} ${roundedClass} ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;

