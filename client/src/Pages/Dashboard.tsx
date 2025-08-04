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
        <h1>Hi</h1>
            <Button 
            onClick={handleLogout}
            variant="destructive">Logout</Button>
        </>
    )
}
export default Dashboard