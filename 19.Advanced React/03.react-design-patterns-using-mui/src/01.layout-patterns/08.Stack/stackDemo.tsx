import { Stack } from "@mui/material";

import photo1 from "../../assets/229234.jpg";
import photo2 from "../../assets/40051.jpg";
import photo3 from "../../assets/640990.jpg";
import photo4 from "../../assets/640994.jpg";


export function StackDemo() {
    return (
        <Stack direction={"column"} spacing={4}>
            <Stack
                maxWidth={"100%"}
                overflow={"hidden"}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-evenly"}
                spacing={2}
            >
                <img width={"40%"} src={photo1} alt={"first photo"} />
                <img width={"20%"} src={photo2} alt={"first photo"} />
                <img width={"20%"} src={photo3} alt={"first photo"} />
                <img width={"20%"} src={photo4} alt={"first photo"} />
            </Stack>
            <Stack
                height={"500px"}
                direction={"column"}
                alignItems={"center"}
                justifyContent={"space-evenly"}

            >
                <img height={"40%"} src={photo1} alt={"first photo"} />
                <img height={"20%"} src={photo2} alt={"first photo"} />
                <img height={"20%"} src={photo3} alt={"first photo"} />
                <img height={"20%"} src={photo4} alt={"first photo"} />
            </Stack>
        </Stack>

    )

}