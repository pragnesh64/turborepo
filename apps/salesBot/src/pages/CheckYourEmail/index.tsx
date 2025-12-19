import { Button } from "antd";

import CheckEmailSvg from "@shared/assets/icons/password_verification.svg";
import OnboardingWrapper from "@shared/components/layout/OnboardingWrapper";

export default function CheckYourEmail() {
  return (
    <OnboardingWrapper maxWidth={600}>
      {/* Card */}
      <div className="h-[664px] rounded-2xl bg-[var(--white)] px-8 py-10 text-center">
        {/* Illustration */}
        <img
          src={CheckEmailSvg}
          alt="Check Your Email"
          className="mx-auto mb-6 h-[240px] w-[340px]"
        />

        {/* Title */}
        <h2 className="mb-3 text-3xl font-bold text-[var(--text-primary)]">
          Check Your Email
        </h2>

        {/* Subtitle */}
        <p className="mb-10 text-base font-medium leading-relaxed text-[var(--neutral-500)]">
          We&apos;ve sent password reset instructions to{" "}
          <span className="text-[var(--text-primary)]">example@gmail.com</span>.
          Please follow the steps in your email to reset your password.
        </p>

        {/* Action */}
        <Button
          block
          className="h-11 rounded-lg border-none"
          variant="solid"
          color="default"
        >
          Back to Login
        </Button>
      </div>
    </OnboardingWrapper>
  );
}
