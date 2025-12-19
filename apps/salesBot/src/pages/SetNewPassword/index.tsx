import { Form, Input, Button, Modal } from "antd";
import SetNewPasswordSvg from "@shared/assets/icons/set_new_password.svg";
import SuccessIcon from "@shared/assets/icons/success_check.svg";
import { useState } from "react";
import OnboardingWrapper from "@shared/components/layout/OnboardingWrapper";

export default function SetNewPassword() {
  const [open, setOpen] = useState(false);

  const onFinish = () => {
    // 👉 Call API here
    // after success:
    setOpen(true);
  };

  return (
    <OnboardingWrapper maxWidth={600}>
      {/* Card */}
      <div className="h-[712px] rounded-2xl bg-[var(--white)] px-8 py-10 text-center">
        {/* Illustration */}
        <img
          src={SetNewPasswordSvg}
          alt="Set New Password"
          className="mx-auto mb-6 w-[340px] h-[240px]"
        />

        {/* Title */}
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
          Set New Password
        </h2>

        {/* Subtitle */}
        <p className="text-base font-medium text-[var(--neutral-500)] mb-8 leading-relaxed">
          Create a strong new password for your account. Make sure it’s at least
          8 characters long and includes letters, numbers, or symbols.
        </p>

        {/* Form */}
        <Form layout="vertical">
          <Form.Item
            label={
              <span className="font-medium text-sm text-left block">
                New Password*
              </span>
            }
            name="newPassword"
          >
            <Input.Password
              placeholder="Enter new password"
              className="h-11 border-[var(--input-border)]"
            />
          </Form.Item>

          <Form.Item
            label={
              <span className="font-medium text-sm text-left block">
                Confirm Password*
              </span>
            }
            name="confirmPassword"
          >
            <Input.Password
              placeholder="Enter confirm password"
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
            onClick={onFinish}
          >
            Submit
          </Button>
        </Form>
      </div>

      {/* Success Modal */}
      <Modal
        open={open}
        footer={null}
        closable
        centered
        width={520}
        onCancel={() => setOpen(false)}
      >
        <div className="text-center py-6">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <img
              src={SuccessIcon}
              alt="Success"
              className="w-[80px] h-[80px]"
            />
          </div>

          {/* Title */}
          <h3 className="text-3xl font-semibold mb-2">
            Password Changed Successfully
          </h3>

          {/* Subtitle */}
          <p className="text-[var(--neutral-500)] text-base">
            You can now log in using your new password
          </p>
        </div>
      </Modal>
    </OnboardingWrapper>
  );
}
