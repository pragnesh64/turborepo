import { Form, Input, Button } from "antd";

import ForgotPasswordSvg from "@shared/assets/icons/forgot_password.svg";
import OnboardingWrapper from "@shared/components/layout/OnboardingWrapper";

export default function ForgotPassword() {
  return (
    <OnboardingWrapper maxWidth={600}>
      {/* Card */}
      <div className="h-[664px] rounded-2xl bg-[var(--white)] py-10 text-center">
        {/* Illustration */}
        <img
          src={ForgotPasswordSvg}
          alt="Forgot Password"
          className="mx-auto mb-6 h-[240px] w-[340px]"
        />

        {/* Title */}
        <h2 className="mb-2 text-3xl font-bold text-[var(--text-primary)]">
          Forgot Your Password
        </h2>

        {/* Subtitle */}
        <p className="mb-8 text-base font-medium leading-relaxed text-[var(--neutral-500)]">
          Enter your email address, and we&apos;ll send you a one-time password
          (OTP) to reset your password.
        </p>

        {/* Form */}
        <Form layout="vertical">
          <Form.Item
            name="email"
            label={
              <span className="block text-left text-sm font-medium">
                Email Id*
              </span>
            }
          >
            <Input
              placeholder="Enter your mail id"
              className="h-11 border-[var(--input-border)]"
            />
          </Form.Item>

          {/* Submit Button */}
          <Button
            htmlType="submit"
            block
            className="mt-2 h-11 rounded-lg border-none"
            variant="solid"
            color="default"
          >
            Get OTP
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
