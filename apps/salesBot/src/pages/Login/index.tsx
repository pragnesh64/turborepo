import { Form, Input, Button, Typography } from "antd";
import OnboardingWrapper from "@shared/components/layout/OnboardingWrapper";
import salesboxtextlogo from "@shared/assets/images/salesboxtextlogo.png";
import helloicon from "@shared/assets/images/helloicon.png";

export default function Login() {
  const { Title } = Typography;
  const gradient =
    "linear-gradient(89.89deg, #35A1DA 0.24%, #857BBD 25.46%, #E8584B 50.67%, #584F9E 75.88%, #CE4C9B 101.09%)";
  return (
    <OnboardingWrapper maxWidth={600}>
      {/* Card */}
      <div className=" rounded-2xl bg-white bg-[var(--white)]">
        {/* Title */}
        <Title
          level={2}
          className="!m-0 !mb-2 flex items-start justify-center gap-2 text-center flex-wrap lg:flex-nowrap"
        >
          <span className="text-base sm:text-lg md:text-xl lg:text-[30px] leading-tight">
            Welcome back to{" "}
          </span>

          <span
            className="inline-flex items-start"
            style={{
              background: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <img
              src={salesboxtextlogo}
              alt="Salesbot"
              className="w-[90px] sm:w-[110px] md:w-[125px] lg:w-[150px] "
            />
          </span>

          <img
            src={helloicon}
            alt="Hello"
            className="w-5 sm:w-6 md:w-7 lg:w-8 mt-1"
          />
        </Title>

        {/* Form */}
        <Form layout="vertical" className="mt-8">
          <Form.Item
            label={<span className="font-medium">Email Id*</span>}
            name="email"
          >
            <Input
              placeholder="Enter your mail id"
              className="h-11 border-[var(--input-border)]"
            />
          </Form.Item>

          <Form.Item
            label={<span className="font-medium">Password*</span>}
            name="password"
          >
            <Input.Password
              placeholder="Password"
              className="h-11 border-[var(--input-border)]"
            />
          </Form.Item>

          {/* Forgot Password */}
          <div className="flex justify-end mb-4">
            <span className="text-sm font-medium cursor-pointer text-[var(--text-primary)]">
              Forgot password?
            </span>
          </div>

          {/* Button */}
          <Button
            htmlType="submit"
            block
            className="h-11 rounded-lg border-none"
            color="default"
            variant="solid"
          >
            Login
          </Button>
        </Form>

        {/* Footer */}
        <p className="mt-6 text-center text-base text-[var(--text-secondary)] font-medium">
          Don’t have an account?{" "}
          <span className="font-semibold cursor-pointer text-gradient font-medium">
            Sign Up
          </span>
        </p>
      </div>
    </OnboardingWrapper>
  );
}
