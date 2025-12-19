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
          className="mx-auto mb-6 w-[340px] h-[240px]"
        />

        {/* Title */}
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
          Check Your Email
        </h2>

        {/* Subtitle */}
        <p className="text-base font-medium text-[var(--neutral-500)] mb-10 leading-relaxed">
          We&apos;ve sent password reset instructions to{" "}
          <span className="text-[var(--text-primary)]">example@gmail.com</span>.
          Please follow the steps in your email to reset your password.
        </p>

        {/* Button */}
        <Button
          block
          className="h-11 rounded-lg border-none"
          color="default"
          variant="solid"
        >
          Back to Login
        </Button>
      </div>
    </OnboardingWrapper>
  );
}
