import * as React from "react";

interface AvailableCreditsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const AvailableCreditsIcon: React.FC<AvailableCreditsIconProps> = ({
  size = 20,
  className,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M8.11816 17.5659C8.2305 17.5918 8.33166 17.5622 8.41504 17.4888C8.50297 17.4113 8.56836 17.2851 8.56836 17.1343C8.5682 16.8948 8.37532 16.6279 8.03223 16.5308C5.27859 15.7516 3.25781 13.228 3.25781 10.231C3.25785 9.092 3.55099 8.01952 4.06543 7.08545C4.23801 6.77214 4.18431 6.44601 4.01367 6.27588C3.9058 6.16846 3.76919 6.1245 3.65137 6.13232C3.53972 6.13975 3.44693 6.1916 3.38574 6.29053C2.67695 7.43656 2.26762 8.7853 2.26758 10.231C2.26758 13.8003 4.7644 16.7932 8.11816 17.5659Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.1348 8.56738C17.2855 8.56728 17.4118 8.50194 17.4893 8.41406C17.5625 8.33074 17.5923 8.22939 17.5664 8.11719C16.7937 4.76349 13.8007 2.2668 10.2314 2.2666C8.78561 2.2666 7.43618 2.67585 6.29004 3.38477C6.19114 3.44595 6.14025 3.53877 6.13281 3.65039C6.12499 3.76821 6.16798 3.90482 6.27539 4.0127C6.44548 4.18346 6.77155 4.23709 7.08496 4.06445C8.01916 3.54989 9.0923 3.25684 10.2314 3.25684C13.2283 3.25702 15.7511 5.27774 16.5303 8.03125C16.6274 8.37453 16.8951 8.56738 17.1348 8.56738Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8936 17.564C14.702 16.9123 16.9147 14.6995 17.5664 11.8911C17.5928 11.7768 17.563 11.6733 17.4883 11.5884C17.4094 11.4988 17.2803 11.4331 17.127 11.4331C16.883 11.4332 16.6118 11.6292 16.5127 11.9771C15.8896 14.1648 14.1672 15.8872 11.9795 16.5103C11.6317 16.6093 11.4357 16.8806 11.4355 17.1245C11.4355 17.2778 11.5013 17.407 11.5908 17.4858C11.6757 17.5606 11.7792 17.5903 11.8936 17.564Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AvailableCreditsIcon;
