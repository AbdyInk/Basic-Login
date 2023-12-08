import { FormControl, Button, Box, Heading, Text, Input } from "@chakra-ui/react";
import NavButton from "../components/navbutton";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../firebase.js";

import GoogleButton from "../components/googlebutton";

export default function Signin() {
    return (
        <FormControl display={"flex"} justifyContent={"center"}>

            <Box textAlign={"center"} marginTop={"20px"}>
                <Heading size={"xl"}>Esta es una pagina de inicio de sesion</Heading>
                <Text>
                    Correo
                </Text>
                <Input type="gmail" width={"40vh"} />

                <Text marginTop={"10px"}>
                    Contraseña
                </Text>
                <Input type="password" width={"40vh"} />
                <br />
                <NavButton link={"/signup"}>Iniciar sesion</NavButton>
                <br />
                <GoogleButton>Google</GoogleButton>
            </Box>
        </FormControl>
    )
}



