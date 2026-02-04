import { Button } from 'antd';
import type { PrimaryButtonProps } from '@interfaces';
import './Button.css';

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

