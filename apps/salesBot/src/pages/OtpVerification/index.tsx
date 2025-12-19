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
          className="mx-auto mb-6 w-[340px] h-[240px]"
        />

        {/* Title */}
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
          OTP Verification
        </h2>

        {/* Subtitle */}
        <p className="text-base font-medium text-[var(--neutral-500)] mb-8 leading-relaxed">
          Please enter the 4-digit OTP sent to{" "}
          <span className="text-[var(--text-primary)]">example@gmail.com</span>
        </p>

        {/* Form */}
        <Form layout="vertical">
          <Form.Item
            label={
              <span className="font-medium text-sm text-left block">
                Enter OTP*
              </span>
            }
          >
            {/* OTP Boxes */}
            <div className="flex justify-center gap-4">
              {[0, 1, 2, 3, 4].map((i) => (
                <Input
                  key={i}
                  maxLength={1}
                  className="
                      w-[56px]
                      h-[48px]
                      text-center
                      text-lg
                      text-[var(--neutral-500)]
                      font-medium
                      border-[var(--input-border)]
                    "
                />
              ))}
            </div>
          </Form.Item>

          {/* Resend */}
          <p className="text-sm font-medium text-[var(--neutral-500)] mb-6">
            Didn’t receive any code?{" "}
            <span className="text-[var(--text-primary)]">
              Resend OTP in 00:25
            </span>
          </p>

          {/* Button */}
          <Button
            htmlType="submit"
            block
            className="h-11 rounded-lg border-none"
            color="default"
            variant="solid"
          >
            Verify OTP
          </Button>
        </Form>

        {/* Back to login */}
        <p className="mt-6 text-[var(--neutral-500)] text-sm font-medium cursor-pointer">
          Back to Login
        </p>
      </div>
    </OnboardingWrapper>
  );
}
