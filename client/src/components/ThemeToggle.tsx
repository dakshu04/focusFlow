import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark"
  })

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [dark])

  return (
    <button onClick={() => setDark(!dark)} className="p-2 rounded bg-primary text-white hover:bg-sky-500 transition">
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
