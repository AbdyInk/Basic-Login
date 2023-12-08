import { Button } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";



export default function NavButton({link, children, Icon}) {
    const { pathname } = useLocation();
    return (
        <Link to={link}>
            <Button
                width="40vh"
                margin={"10px"}
                as="span"
                colorScheme={"whiteAlpha"}
                color={pathname === link ? "blue" : "#ddd"}
            >
                <span>{ children }</span>
            </Button>
        </Link>
    )
}