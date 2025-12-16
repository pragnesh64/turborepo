import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Container } from "@mui/material";
import { Button } from "@shared/components";
import { useCountUp } from "@shared/hooks";

interface LoginFormData {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const { handleSubmit } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log("Login data:", data);
    // Simulate login
    navigate("/dashboard");
  };

  const count = useCountUp(100);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4" gutterBottom>
          SalesBot Login {count}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3, width: "100%" }}
        >
          <Button type="submit">Sign In</Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
