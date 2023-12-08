import { Box, Heading, Text } from "@chakra-ui/react";

export default function Home() {
    return (
        <Box>

            <Box marginTop={"20px"}>
                <Heading size={"xl"}>This is a home page</Heading>
                <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, iste illum nam, nemo vel tenetur natus voluptates molestias, excepturi autem officiis debitis laboriosam numquam doloremque neque eius tempore at. Fuga!
                </Text>

                <Text marginTop={"20px"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugiat aliquid id quae consequatur asperiores voluptas at culpa, voluptates magnam doloribus enim vitae aliquam, error nam quidem accusamus itaque architecto?
                </Text>

                <Text marginTop={"20px"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, perspiciatis repudiandae similique nemo voluptatem molestias reiciendis aspernatur laboriosam culpa debitis exercitationem, quia totam suscipit vel eligendi consectetur non hic reprehenderit.
                </Text>
            </Box>
        </Box>
    )
}