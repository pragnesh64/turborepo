import { useCountUp } from "@shared/hooks";

function Login() {
  const count = useCountUp(100);

  return (
    <>
    {count}
    </>
  );
}

export default Login;
