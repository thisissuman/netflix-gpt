import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignin, setisSignin] = useState(false);
  const togglehadler = () => {
    setisSignin(!isSignin);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background"
        />
      </div>
      <div className="absolute bg-black w-3/12 mx-auto right-0 left-0 my-auto">
        <form class="text-white bg-black bg-opacity-80 rounded-lg w-96 absolute left-1/2 transform -translate-x-1/2 p-12 mt-24">
          <h1 class="mb-7 text-2xl">{isSignin ? "Sign In" : "Sign up"}</h1>
          {!isSignin && (
            <div class="form-group relative w-full h-12 mb-4">
              <input
                type="text"
                required
                class="w-full h-full bg-gray-700 border-none rounded-md outline-none text-white px-5 py-0 text-lg"
              />
              <label class="absolute top-1/2 left-5 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-200 ease-in-out  text-lg">
                Full Name
              </label>
            </div>
            
          )}
          <div class="form-group relative w-full h-12 mb-4">
            <input
              type="text"
              required
              class="w-full h-full bg-gray-700 border-none rounded-md outline-none text-white px-5 py-0 text-lg"
            />
            <label class="absolute top-1/2 left-5 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-200 ease-in-out  text-lg">
              Email or phone number
            </label>
          </div>
          <div class="form-group relative w-full h-12 mb-4">
            <input
              type="password"
              required
              class="w-full h-full bg-gray-700 border-none rounded-md outline-none text-white px-5 py-0 text-lg"
            />
            <label class="absolute top-1/2 left-5 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-200 ease-in-out  text-lg">
              Password
            </label>
          </div>
          <button class="w-full h-12 text-lg bg-red-600 text-white font-semibold border-none rounded-md cursor-pointer my-6">
            {isSignin ? "Sign In" : "Sign up"}
          </button>
          <div class="remember flex items-center justify-between">
            <div class="left flex items-center">
              <input type="checkbox" id="remember" class="mr-2" />
              <label for="remember" class="text-sm text-gray-300">
                Remember Me
              </label>
            </div>
            <div class="right">
              <a href="#" class="text-sm text-gray-300 hover:underline">
                Need help?
              </a>
            </div>
          </div>
          <div class="facebook-login mt-12 flex items-center">
            <img
              src="https://www.facebook.com/images/fb_icon_325x325.png"
              class="w-5 h-5 mr-2"
            />
            <a href="#" class="text-sm text-gray-600 hover:underline">
              Login with Facebook
            </a>
          </div>
          <div class="signup mt-4">
            <p class="text-gray-600">
              {isSignin ? "New to Netflix ? " : "Already have an account? "}
              <a
                href="#"
                class="text-white hover:underline"
                onClick={togglehadler}
              >
                {isSignin ? "Sign up now" : "Sign In now"}
              </a>
              .
            </p>
          </div>
          <p class="text-sm text-gray-400 mt-2">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <a href="#" class="text-blue-500 hover:underline">
              Learn more
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
