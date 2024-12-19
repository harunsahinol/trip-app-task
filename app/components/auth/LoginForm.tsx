"use client";

import { useState } from "react";

export default function LoginForm() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 mt-10">
        <h2 className="text-2xl font-bold text-center text-primary-500 mb-6">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h2>

        <form className="space-y-4">
          {isSignUp && (
            <>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Surname"
                className="w-full p-3 border rounded-lg"
              />
            </>
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-primary-500 text-white p-3 rounded-lg font-semibold hover:bg-primary-600"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-primary-500 font-semibold"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}
