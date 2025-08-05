import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
const Dashboard = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/")
    }
    return (
        <>  
        <h1 className="text-6xl flex justify-center items-center">Nishant ki maa ki chu**</h1>
            <Button className="flex justify-center items-center"
            onClick={handleLogout}
            variant="destructive">Logout</Button>
        </>
    )
}
export default Dashboard