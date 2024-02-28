import { Link } from "react-router-dom"
import "../style/components/logo.css"

export default function Logo() {
  return (
    <Link to="/" className="logo">jaw<span>shop</span></Link>
  )
}
