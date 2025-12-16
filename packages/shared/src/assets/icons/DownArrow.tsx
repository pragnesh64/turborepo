import * as React from "react";

interface DownArrowProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const DownArrow: React.FC<DownArrowProps> = ({
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
        d="M15 7.5L10 12.5L5 7.5"
        stroke="#696E7B"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DownArrow;
