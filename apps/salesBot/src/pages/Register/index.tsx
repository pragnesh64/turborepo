import { useState } from "react";
import { Form, Input, Select, Typography, Row, Col } from "antd";
import onboardbg from "@shared/assets/images/onboardbg.png";
import salesboxtextlogo from "@shared/assets/images/salesboxtextlogo.png";
import helloicon from "@shared/assets/images/helloicon.png";
import { RegisterStepCompleteIcon } from "@shared/assets/icons/RegisterStepCompleteIcon";
import Button from "@shared/components/primitives/Button";
import OnboardingWrapper from "../../../../../packages/shared/src/components/layout/OnboardingWrapper";

const { Title, Text, Link } = Typography;

const gradient =
  "linear-gradient(89.89deg, #35A1DA 0.24%, #857BBD 25.46%, #E8584B 50.67%, #584F9E 75.88%, #CE4C9B 101.09%)";

const Register = () => {
  const [step, setStep] = useState(1);

  const StepBadge = ({
    value,
    state,
  }: {
    value: "01" | "02";
    state: "active" | "inactive" | "completed";
  }) => {
    if (state === "active") {
      return (
        <div style={{ width: 40, height: 40 }}>
          <RegisterStepCompleteIcon />
        </div>
      );
    }

    const isCompleted = state === "completed";
    return (
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 14,
          border: `2px solid ${isCompleted ? "rgba(9,179,0,1)" : "#E5E7EB"}`,
          color: isCompleted ? "rgba(9,179,0,1)" : "#9CA3AF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 600,
          fontSize: 18,
          background: "#fff",
        }}
      >
        {value}
      </div>
    );
  };

  return (
    <OnboardingWrapper>
      {/* ================= HEADER ================= */}
      <div className="text-center mb-4 sm:mb-5">
        <Title
          level={2}
          className="!m-0 !mb-2 flex items-start justify-center gap-2 text-center flex-wrap lg:flex-nowrap"
        >
          <span className="text-base sm:text-lg md:text-xl lg:text-[30px] leading-tight">
            Create account to
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
              className="w-[90px] sm:w-[110px] md:w-[125px] lg:w-[150px]"
            />
          </span>

          <img
            src={helloicon}
            alt="Hello"
            className="w-5 sm:w-6 md:w-7 lg:w-8"
          />
        </Title>
      </div>

      <div
        className="mx-auto w-full max-w-[620px] flex flex-col items-center gap-4 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6"
        style={{
          marginBottom: 28,
          marginTop: 8,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <StepBadge value="01" state={step === 1 ? "active" : "completed"} />
          </div>
          <div style={{ marginTop: 10 }}>
            <Text
              strong
              style={{
                color: step === 1 ? "#0B0B0B" : "rgba(9,179,0,1)",
                fontSize: 20,
                lineHeight: "26px",
              }}
            >
              Personal Information
            </Text>
          </div>
        </div>

        <div
          aria-hidden
          className="hidden sm:block"
          style={{
            height: 3,
            borderRadius: 999,
            background: "#E5E7EB",
          }}
        />

        <div style={{ textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <StepBadge value="02" state={step === 2 ? "active" : "inactive"} />
          </div>
          <div style={{ marginTop: 10 }}>
            <Text
              strong
              style={{
                color: step === 2 ? "#0B0B0B" : "#9CA3AF",
                fontSize: 20,
                lineHeight: "26px",
              }}
            >
              Business Information
            </Text>
          </div>
        </div>
      </div>

      {step === 1 && (
        <Form layout="vertical">
          <Row gutter={24}>
            <Col xs={24} md={12}>
              <Form.Item label="First Name *">
                <Input placeholder="Enter First Name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Last Name *">
                <Input placeholder="Enter Last Name" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col xs={24} md={12}>
              <Form.Item label="Email ID *">
                <Input placeholder="Enter Email" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Phone Number *">
                <Input placeholder="+1 Enter Number" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col xs={24} md={12}>
              <Form.Item label="Password *">
                <Input.Password placeholder="Enter Password" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Confirm Password *">
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>
            </Col>
          </Row>

          <div className="mt-6 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Left text */}
            <Text className="text-[14px] sm:text-[15px] md:text-[16px] text-center sm:text-left">
              Already have an account?{" "}
              <Link
                className="font-medium"
                style={{
                  background:
                    "linear-gradient(91.11deg, #9673E9 0.3%, #C558E5 29.11%, #EC9C75 57.17%, #EC7B5C 76.66%, #E9AE89 98.87%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Log In
              </Link>
            </Text>

            {/* Right button */}
            <Button
              variantType="primary"
              className="w-full sm:w-auto"
              onClick={() => setStep(2)}
            >
              Next
            </Button>
          </div>
        </Form>
      )}

      {step === 2 && (
        <Form layout="vertical">
          <Row gutter={24}>
            <Col xs={24} md={12}>
              <Form.Item label="Business Name *">
                <Input placeholder="Enter Business Name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Business Strength *">
                <Select placeholder="Select Business Strength" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col xs={24} md={12}>
              <Form.Item label="Business Type *">
                <Select placeholder="Select Business Type" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Category *">
                <Select placeholder="Select Category" />
              </Form.Item>
            </Col>
          </Row>

          <div className="mt-6 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Left text */}
            <Text className="text-[14px] sm:text-[15px] md:text-[16px] text-center sm:text-left">
              Already have an account?{" "}
              <Link
                className="font-medium"
                style={{
                  background:
                    "linear-gradient(91.11deg, #9673E9 0.3%, #C558E5 29.11%, #EC9C75 57.17%, #EC7B5C 76.66%, #E9AE89 98.87%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Log In
              </Link>
            </Text>

            {/* Right button */}
            <Button
              variantType="primary"
              className="w-full sm:w-auto"
              onClick={() => setStep(2)}
            >
              Next
            </Button>
          </div>
        </Form>
      )}
    </OnboardingWrapper>
  );
};

export default Register;
