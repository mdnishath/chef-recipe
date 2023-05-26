import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const [signupError, setSignupError] = useState("");
  const { createUser, setLoading, loading, updateUserInfo, setUser, logOut } =
    useAuth();
  //handle signup
  const handleSignup = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    if (!name) {
      setSignupError("You must provide name");
    } else if (!email) {
      setSignupError("You must provide a valide email");
    } else if (!password) {
      setSignupError("Password can not be empty");
    } else if (!password > 6) {
      setSignupError("Password can not be empty");
    } else if (!photo) {
      setSignupError("Provide a photo url");
    } else {
      try {
        setLoading(true);
        const result = await createUser(email, password);
        await updateUserInfo(name, photo);
        setUser(result.user);
        // await logOut();
        // navigate("/login");
      } catch (error) {
        console.log(error.message);
        if (error.message.includes("auth/email-already-in-use")) {
          console.log("error");
          setSignupError("Email already in use");
          setLoading(false);
        } else if (error.message.includes("auth/weak-password")) {
          console.log("error");
          setSignupError("Password is less than 6 characters");
          setLoading(false);
        }
      }
      // console.log(name, email, password, photo);
    }
  };
  console.log(signupError);
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-5 text-center">
        Create A New Account
      </h2>
      <div className="w-1/2 mx-auto">
        <form onSubmit={handleSignup} className="flex flex-col space-y-5">
          <input
            required
            type="text"
            name="name"
            placeholder="Your name"
            className="input w-full border border-primary"
          />
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
            required
            type="url"
            name="photo"
            placeholder="photo url"
            className="input w-full border border-primary"
          />
          <input
            type="submit"
            value="Signup"
            className="bg-primary py-3 rounded-lg font-semibold text-xl text-white"
          />
        </form>
        <div className="flex flex-col w-full border-opacity-50">
          {/* <div className="divider">OR</div> */}
          {/* <div className='flex justify-center gap-3'>
  <div className='flex items-center space-x-3 border border-primary px-4 py-3 w-1/2 justify-center'>
    <FcGoogle className='text-3xl'/>
    <p className='text-xl'>Login With Google</p>
  </div>
  <div className='flex items-center space-x-3 border border-primary px-4 py-3 w-1/2 justify-center'>
    <AiFillGithub className='text-3xl'/>
    <p className='text-xl'>Login With Github</p>
  </div>
  </div> */}
        </div>
        <p className="text-center mt-4 text-xl">
          Already have an account?{" "}
          <Link to={"/login"} className="font-semibold">
            Login
          </Link>
        </p>
        {signupError && <ErrorMessage message={signupError} />}
      </div>
    </div>
  );
};

export default SignupForm;
