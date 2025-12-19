import { Form, Input, Button } from "antd";

import OtpVerificationSvg from "@shared/assets/icons/forgot_password.svg";
import OnboardingWrapper from "@shared/components/layout/OnboardingWrapper";

export default function OtpVerification() {
  return (
    <OnboardingWrapper maxWidth={600}>
      {/* Card */}
      <div className="h-[664px] rounded-2xl bg-[var(--white)] px-8 py-10 text-center">
        {/* Illustration */}
        <img
          src={OtpVerificationSvg}
          alt="OTP Verification"
          className="mx-auto mb-6 h-[240px] w-[340px]"
        />

        {/* Title */}
        <h2 className="mb-2 text-3xl font-bold text-[var(--text-primary)]">
          OTP Verification
        </h2>

        {/* Subtitle */}
        <p className="mb-8 text-base font-medium leading-relaxed text-[var(--neutral-500)]">
          Please enter the 4-digit OTP sent to{" "}
          <span className="text-[var(--text-primary)]">example@gmail.com</span>
        </p>

        {/* Form */}
        <Form layout="vertical">
          <Form.Item
            label={
              <span className="block text-left text-sm font-medium">
                Enter OTP*
              </span>
            }
          >
            {/* OTP Inputs */}
            <div className="flex justify-center gap-4">
              {[0, 1, 2, 3].map((index) => (
                <Input
                  key={index}
                  maxLength={1}
                  className="h-[48px] w-[56px] border-[var(--input-border)] text-center text-lg font-medium text-[var(--neutral-500)]"
                />
              ))}
            </div>
          </Form.Item>

          {/* Resend Info */}
          <p className="mb-6 text-sm font-medium text-[var(--neutral-500)]">
            Didn’t receive any code?{" "}
            <span className="text-[var(--text-primary)]">
              Resend OTP in 00:25
            </span>
          </p>

          {/* Submit Button */}
          <Button
            htmlType="submit"
            block
            className="h-11 rounded-lg border-none"
            variant="solid"
            color="default"
          >
            Verify OTP
          </Button>
        </Form>

        {/* Back to Login */}
        <p className="mt-6 cursor-pointer text-sm font-medium text-[var(--neutral-500)]">
          Back to Login
        </p>
      </div>
    </OnboardingWrapper>
  );
}
