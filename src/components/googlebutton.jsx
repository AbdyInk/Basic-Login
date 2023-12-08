// import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../firebase.js";
import { Button } from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";

export default function GoogleButton({children}) {
    const navigate = useNavigate();
    return(
        <Button 
        onClick={goButton} 
        id="googleLogin" 
        colorScheme={"blue"} 
        margin={"10px"} 
        marginTop={0}
        >{children}
        </Button>
    )
    async function goButton()
    {
    const provider = new GoogleAuthProvider();
    try {
            const credentials = await signInWithPopup(auth, provider)
            console.log(credentials);
            console.log("google sign in");


            navigate("/home") 
          } catch (error) {
            console.log(error);
          }
          
    }
    
}

