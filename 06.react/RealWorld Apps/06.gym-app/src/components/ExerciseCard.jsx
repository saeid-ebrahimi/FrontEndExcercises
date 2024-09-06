import {Link} from "react-router-dom"
import {Button, Stack, Typography} from "@mui/material";

const ExerciseCard = ({exercise}) => {
    return(
        <Link to={`exercises/${exercise.id}`} className={"exercise-card"}>
            <img src={exercise.gifUrl} alt={exercise.name} loading={"lazy"}/>
            <Stack direction={"row"}>
                <Button variant="contained" hover sx={{ml:"21px", color:"#fff", background:"#ffa9a9", fontSize:"14px", borderRadius: "20px", textTransform:"capitalize"}}>{exercise.bodyPart}</Button>
                <Button variant="contained" sx={{ml:"21px", color:"#fff", background:"#fcc757", fontSize:"14px", borderRadius: "20px", textTransform:"capitalize"}}>{exercise.target}</Button>
            </Stack>
            <Typography
                ml={"21px"}
                color={"#000"}
                fontWeight={"bold"}
                mt={"11px"}
                pb={"10px"}
                textTransform={"capitalize"}
                fontSize={"24px"} >{exercise.name}</Typography>
        </Link>
    )
}

export default ExerciseCard;