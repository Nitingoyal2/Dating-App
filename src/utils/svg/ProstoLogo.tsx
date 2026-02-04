import type { IconProps } from '@interfaces';

const ProstoLogo = ({ size = 100, color = '#6C5CE7', ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="prostoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color} />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>

    {/* Stylized P with heart */}
    <path
      d="M25 15
         L25 85
         C25 88 27 90 30 90
         C33 90 35 88 35 85
         L35 60
         L55 60
         C70 60 80 50 80 40
         C80 30 70 20 55 20
         L35 20
         L35 15
         C35 12 33 10 30 10
         C27 10 25 12 25 15Z
         M35 30
         L55 30
         C63 30 68 34 68 40
         C68 46 63 50 55 50
         L35 50
         L35 30Z"
      fill="url(#prostoGradient)"
    />

    {/* Heart accent */}
    <path
      d="M75 18
         C75 18 71 12 66 12
         C61 12 57 16 57 20
         C57 26 75 38 75 38
         C75 38 93 26 93 20
         C93 16 89 12 84 12
         C79 12 75 18 75 18Z"
      fill="#ff6b9d"
    />
  </svg>
);

export default ProstoLogo;
