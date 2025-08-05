// src/pages/Register.tsx

import { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("🙏 Please fill all fields");
      return;
    }
    if (!email.includes("@") || !email.includes(".") || email.length < 5) {
      toast.error("Please enter a valid email address");
      return;
    }
    try {
      await axios.post("https://focusflow-hlez.onrender.com/api/auth/register", {
        name,
        email,
        password,
      },
     { withCredentials: true });

      toast.success("🎉Registration successful!");
      setName("")
      setEmail("")
      setPassword("")
      setTimeout(() => navigate("/login"), 1500);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.response?.data?.message || "❌ Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex justify-center items-center px-4">
      <Toaster position="bottom-right" />
      <div className="w-full max-w-md p-8 rounded-2xl bg-[#1a1a1a] shadow-2xl border border-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center">Create Your Account</h2>

        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 bg-[#111] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          placeholder="Email (required)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-[#111] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 bg-[#111] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleRegister}
          className="cursor-pointer w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition duration-300"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Register;
