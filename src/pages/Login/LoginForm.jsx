import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  // console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";
  const { googleLogin, githubLogin, login, setLoading } = useAuth();

  //handle Google login

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate(from, { replace: true });
    } catch (err) {
      console.log("faild");
      setError(err.message);
    }
  };
  const handleGithubLogin = async () => {
    try {
      await githubLogin();
      navigate(from, { replace: true });
    } catch (err) {
      console.log("faild");
      setError(err.message);
    }
  };

  //handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (!email) {
      setError("Email can not be empty");
    } else if (!password) {
      setError("Password can not be empty");
    } else {
      try {
        await login(email, password);
        navigate(from, { replace: true });
      } catch (error) {
        console.log(error);
        if (error.message.includes("auth/missing-email")) {
          setError("User not found");
          setLoading(false);
        } else if (error.message.includes("auth/wrong-password")) {
          setError("Wrong password");
          setLoading(false);
        }
      }
    }
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-5 text-center">Please Login</h2>
      <div className="w-1/2 mx-auto">
        <form onSubmit={handleLogin} className="flex flex-col space-y-5">
          <input
            required
            type="email"
            name="email"
            placeholder="email address"
            className="input w-full border border-primary"
          />
          <input
            required
            type="password"
            name="password"
            placeholder="password"
            className="input w-full border border-primary"
          />
          <input
            type="submit"
            value="Login"
            className="bg-primary py-3 rounded-lg font-semibold text-xl text-white"
          />
        </form>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
          <div className="flex justify-center gap-3">
            <div
              onClick={handleGoogleLogin}
              className=" cursor-pointer flex items-center space-x-3 border border-primary px-4 py-3 w-1/2 justify-center"
            >
              <FcGoogle className="text-3xl" />
              <p className="text-xl">Login With Google</p>
            </div>
            <div
              onClick={handleGithubLogin}
              className="cursor-pointer flex items-center space-x-3 border border-primary px-4 py-3 w-1/2 justify-center"
            >
              <AiFillGithub className="text-3xl" />
              <p className="text-xl">Login With Github</p>
            </div>
          </div>
        </div>
        <p className="text-center mt-4 text-xl">
          Don't have any account?{" "}
          <Link to={"/signup"} className="font-semibold">
            Signup now
          </Link>
        </p>
        {error && <ErrorMessage message={error} />}
      </div>
    </div>
  );
};

export default LoginForm;
