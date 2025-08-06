import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white space-y-6">
      <h1 className="text-4xl font-bold text-center">
        🫵🫃🗝️ chu**
      </h1>

      <img
        src="https://i.pinimg.com/1200x/11/93/b0/1193b05f08ff7894b8b144270e5ba525.jpg"
        alt="Centered"
        className="max-w-xs rounded-lg shadow-lg"
      />

      <Button
        onClick={handleLogout}
        variant="destructive"
        className="px-6 py-3 text-lg"
      >
        Logout
      </Button>
    </div>
  )
}

export default Dashboard
