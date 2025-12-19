import { Form, Input, Button, Typography } from "antd";

import OnboardingWrapper from "@shared/components/layout/OnboardingWrapper";
import salesboxTextLogo from "@shared/assets/images/salesboxtextlogo.png";
import helloIcon from "@shared/assets/images/helloicon.png";

const gradientTextStyle = {
  background:
    "linear-gradient(89.89deg, #35A1DA 0.24%, #857BBD 25.46%, #E8584B 50.67%, #584F9E 75.88%, #CE4C9B 101.09%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export default function Login() {
  return (
    <OnboardingWrapper maxWidth={600}>
      {/* Card */}
      <div className="rounded-2xl bg-[var(--white)] py-10">
        {/* Title */}
        <Typography.Title
          level={2}
          className="!m-0 !mb-2 flex flex-wrap items-start justify-center gap-2 text-center lg:flex-nowrap"
        >
          <span className="text-base leading-tight sm:text-lg md:text-xl lg:text-[30px]">
            Welcome back to
          </span>

          <span className="inline-flex items-start" style={gradientTextStyle}>
            <img
              src={salesboxTextLogo}
              alt="Salesbox"
              className="w-[90px] sm:w-[110px] md:w-[125px] lg:w-[150px]"
            />
          </span>

          <img
            src={helloIcon}
            alt="Hello"
            className="mt-1 w-5 sm:w-6 md:w-7 lg:w-8"
          />
        </Typography.Title>

        {/* Form */}
        <Form layout="vertical" className="mt-8">
          <Form.Item
            name="email"
            label={<span className="font-medium">Email Id*</span>}
          >
            <Input
              placeholder="Enter your mail id"
              className="h-11 border-[var(--input-border)]"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label={<span className="font-medium">Password*</span>}
          >
            <Input.Password
              placeholder="Password"
              className="h-11 border-[var(--input-border)]"
            />
          </Form.Item>

          {/* Forgot Password */}
          <div className="mb-4 flex justify-end">
            <span className="cursor-pointer text-sm font-medium text-[var(--text-primary)]">
              Forgot password?
            </span>
          </div>

          {/* Submit Button */}
          <Button
            htmlType="submit"
            block
            className="h-11 rounded-lg border-none"
            variant="solid"
            color="default"
          >
            Login
          </Button>
        </Form>

        {/* Footer */}
        <p className="mt-6 text-center text-base font-medium text-[var(--text-secondary)]">
          Don’t have an account?{" "}
          <span className="cursor-pointer font-semibold text-gradient">
            Sign Up
          </span>
        </p>
      </div>
    </OnboardingWrapper>
  );
}
