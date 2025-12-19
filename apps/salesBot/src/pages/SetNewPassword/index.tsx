import { Form, Input, Button, Modal } from "antd";
import { useState } from "react";

import SetNewPasswordSvg from "@shared/assets/icons/set_new_password.svg";
import SuccessIcon from "@shared/assets/icons/success_check.svg";
import OnboardingWrapper from "@shared/components/layout/OnboardingWrapper";

export default function SetNewPassword() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSubmit = () => {
    // Call API here
    // after success:
    setIsSuccessModalOpen(true);
  };

  return (
    <OnboardingWrapper maxWidth={600}>
      {/* Card */}
      <div className="h-[712px] rounded-2xl bg-[var(--white)] px-8 py-10 text-center">
        {/* Illustration */}
        <img
          src={SetNewPasswordSvg}
          alt="Set New Password"
          className="mx-auto mb-6 h-[240px] w-[340px]"
        />

        {/* Title */}
        <h2 className="mb-2 text-3xl font-bold text-[var(--text-primary)]">
          Set New Password
        </h2>

        {/* Subtitle */}
        <p className="mb-8 text-base font-medium leading-relaxed text-[var(--neutral-500)]">
          Create a strong new password for your account. Make sure it’s at least
          8 characters long and includes letters, numbers, or symbols.
        </p>

        {/* Form */}
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="newPassword"
            label={
              <span className="block text-left text-sm font-medium">
                New Password*
              </span>
            }
          >
            <Input.Password
              placeholder="Enter new password"
              className="h-11 border-[var(--input-border)]"
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label={
              <span className="block text-left text-sm font-medium">
                Confirm Password*
              </span>
            }
          >
            <Input.Password
              placeholder="Enter confirm password"
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
            Submit
          </Button>
        </Form>
      </div>

      {/* Success Modal */}
      <Modal
        open={isSuccessModalOpen}
        footer={null}
        centered
        closable
        width={520}
        onCancel={() => setIsSuccessModalOpen(false)}
      >
        <div className="py-6 text-center">
          {/* Icon */}
          <div className="mb-4 flex justify-center">
            <img
              src={SuccessIcon}
              alt="Success"
              className="h-[80px] w-[80px]"
            />
          </div>

          {/* Title */}
          <h3 className="mb-2 text-3xl font-semibold">
            Password Changed Successfully
          </h3>

          {/* Subtitle */}
          <p className="text-base text-[var(--neutral-500)]">
            You can now log in using your new password
          </p>
        </div>
      </Modal>
    </OnboardingWrapper>
  );
}
