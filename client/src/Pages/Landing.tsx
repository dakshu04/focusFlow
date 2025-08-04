import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen w-full font-sans bg-gradient-to-br from-[#0a0f2c] via-[#111c44] to-[#1d2d63] overflow-hidden relative">
      {/* === NAVBAR === */}
      <nav className="flex justify-between items-center px-10 py-6 absolute top-0 left-0 w-full z-50">
        <h1 className="text-2xl font-bold text-cyan-400">FocusFlow</h1>

        <ul className="hidden sm:flex ml-15 gap-8 text-sm mt-4 text-gray-300">
          <li className="cursor-pointer hover:text-white hover:underline transition">Features</li>
          <li className="cursor-pointer hover:text-white hover:underline transition">How It Works</li>
          <li className="cursor-pointer hover:text-white hover:underline transition">Pricing</li>
          <li className="cursor-pointer hover:text-white hover:underline transition">FAQ</li>
        </ul>

        <div className="flex gap-4 mt-3">
          <Button
            onClick={() => navigate("/register")}
            className="cursor-pointer px-6 py-3 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white shadow"
          >
            Register
          </Button>
          <Button
            onClick={() => navigate("/login")}
            variant="outline"
            className="cursor-pointer px-6 py-3 rounded-full border border-gray-500 text-black hover:bg-gray-800 hover:text-white transition"
          >
            Login
          </Button>
        </div>
      </nav>

      {/* === HERO SECTION === */}
      <div className="flex flex-col items-center justify-center text-center px-4 pt-40 sm:pt-52 z-10 relative">
        <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
          Build Habits. Stay Focused.
        </h1>

        <h2 className="text-2xl sm:text-4xl font-semibold mt-3 text-gray-100">
          One App to Track Everything.
        </h2>

        <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-xl">
          FocusFlow helps students and professionals track habits, manage time,
          and boost daily productivity. Designed for flow, built for results.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 flex gap-4">
          <Button
            onClick={() => navigate("/register")}
            className="cursor-pointer px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white shadow-md"
          >
            Try Free
          </Button>
          <Button
            variant="outline"
            className="cursor-pointer px-6 py-3 rounded-full border border-gray-500 text-black hover:bg-gray-800 hover:text-white transition"
          >
            See Demo
          </Button>
        </div>
      </div>
    </main>
  );
}
