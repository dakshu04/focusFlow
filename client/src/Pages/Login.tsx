import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://focusflow-hlez.onrender.com/api/auth/login", {
        email,
        password,
      }, 
    {
      withCredentials: true,
    });
      localStorage.setItem("token", res.data.token);
      toast.success("🎉 Login successful!");
      setEmail("");
      setPassword("");
      setTimeout(() => navigate("/dashboard"), 1500);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.response.data.message || "❌ Login failed");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#0d0d0d] text-white flex justify-center items-center px-4">
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 w-full max-w-md bg-[#1a1a1a] p-8 rounded-2xl shadow-xl"
        >
          <Toaster position="bottom-right" />
          <h1 className="text-3xl font-bold text-center text-white mb-2">
            Login to FocusFlow
          </h1>
          <input
            className="p-3 rounded-xl bg-[#0d0d0d] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-3 rounded-xl bg-[#0d0d0d] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            className="cursor-pointer bg-blue-600 hover:bg-blue-700 transition duration-300 text-white py-2 rounded-xl"
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
