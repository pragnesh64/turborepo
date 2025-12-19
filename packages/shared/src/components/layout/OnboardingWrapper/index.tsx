import React from "react";
import onboardbg from "../../../assets/images/onboardbg.png";

const gradient =
  "linear-gradient(89.89deg, #35A1DA 0.24%, #857BBD 25.46%, #E8584B 50.67%, #584F9E 75.88%, #CE4C9B 101.09%)";

interface OnboardingWrapperProps {
  children: React.ReactNode;
  maxWidth?: number;
}

const OnboardingWrapper = ({
  children,
  maxWidth = 900,
}: OnboardingWrapperProps) => {
  return (
    <div
      className="min-h-screen w-full flex justify-center bg-cover bg-center px-4 py-6 sm:px-6 sm:py-10 md:items-center md:py-12"
      style={{
        backgroundImage: `url(${onboardbg})`,
      }}
    >
      {/* Gradient Border */}
      <div
        className="w-full rounded-[30px] p-[2px] flex"
        style={{
          maxWidth,
          background: gradient,
        }}
      >
        {/* White Card */}
        <div className="w-full flex-1 rounded-[28px] bg-white px-5 py-8 sm:px-8 sm:py-10 md:px-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default OnboardingWrapper;
