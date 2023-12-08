import { FormControl, Button, Box, Heading, Text, Input } from "@chakra-ui/react";
import NavButton from "../components/navbutton";

export default function Signup() {
    return (
        <FormControl display={"flex"} justifyContent={"center"}>

            <Box textAlign={"center"} marginTop={"20px"}>
                <Heading size={"xl"}>Esta es una pagina de registro</Heading>
                <Text>
                    Correo
                </Text>
                <Input type="gmail" width={"40vh"} />

                <Text marginTop={"10px"}>
                    Contraseña
                </Text>
                <Input type="password" width={"40vh"} />
                <br />
                <NavButton link={"/"} >Registrarse</NavButton>
            </Box>
        </FormControl>
    )
}