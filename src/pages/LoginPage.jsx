import { useState } from "react";
import '../App.css'
import LoginCard from "../components/LoginCard";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";


export default function Page(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()


   async function handleSubmit(){
        setError("");
        if(!email){
            setError("Email tidak boleh kosong")
            return
        }

        if(!password){
            setError("Password tidak boleh kosong")
            return
        }

        if(!email.includes("@")){
            setError("Format email tidak valid")
            return
        }

         try {
    const result = await loginUser(email, password);

    // nanti: simpan token

    localStorage.setItem("token", result.token);

  } catch (err) {
    setError(err.message);
  }

}
    return(
        
    <LoginCard
  email={email}
  setEmail={setEmail}
  password={password}
  setPassword={setPassword}
  handleSubmit={handleSubmit}
  error={error}
  
/>
    )
  
} 