import { Form, Input, Button } from "antd";
import ForgotPasswordSvg from "@shared/assets/icons/forgot_password.svg";
import OnboardingWrapper from "@shared/components/layout/OnboardingWrapper";

export default function ForgotPassword() {
  return (
    <OnboardingWrapper maxWidth={600}>
      {/* Card */}
      <div className="h-[664px] rounded-2xl bg-[var(--white)] text-center">
        {/* Illustration */}
        <img
          src={ForgotPasswordSvg}
          alt="Forgot Password"
          className="mx-auto mb-6 w-[340px] h-[240px]"
        />

        {/* Title */}
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
          Forgot Your Password
        </h2>

        {/* Subtitle */}
        <p className="text-base font-medium text-[var(--neutral-500)] mb-8 leading-relaxed">
          Enter your email address, and we&apos;ll send you a one-time password
          (OTP) to reset your password.
        </p>

        {/* Form */}
        <Form layout="vertical">
          <Form.Item
            label={
              <span className="font-medium text-sm text-left block">
                Email Id*
              </span>
            }
            name="email"
          >
            <Input
              placeholder="Enter your mail id"
              className="h-11 border-[var(--input-border)]"
            />
          </Form.Item>

          {/* Button */}
          <Button
            htmlType="submit"
            block
            className="h-11 rounded-lg border-none mt-2"
            color="default"
            variant="solid"
          >
            Get OTP
          </Button>
        </Form>

        {/* Back to login */}
        <p className="mt-6 text-[var(--neutral-500)] text-sm font-medium  cursor-pointer">
          Back to Login
        </p>
      </div>
    </OnboardingWrapper>
  );
}
