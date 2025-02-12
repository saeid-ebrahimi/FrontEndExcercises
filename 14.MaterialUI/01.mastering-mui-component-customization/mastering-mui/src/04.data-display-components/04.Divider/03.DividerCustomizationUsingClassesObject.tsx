
import { Box, Divider, dividerClasses } from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon, AcUnitTwoTone } from "@mui/icons-material";

export function DividerCustomizationUsingClassesObject() {
    return (
        <div style={{
            width: "100%",
        }}>
            <Divider textAlign={"right"}
                variant={"middle"}
                // variant={"fullWidth"}
                // variant={"inset"}
                sx={{
                    ml: 15,
                    mr: 0,
                    [`& .${dividerClasses.wrapper}`]: {
                        color: "#155E75",
                        fontSize: "2rem",
                        fontFamily: "verdana",
                        px: 5,
                    },
                    "&:before": {
                        borderTop: "2px dotted #155E75",
                    },
                    "&:after": {
                        borderTop: "2px dotted #155E75",
                    }

                }}
            ><AcUnitTwoTone /> My Divider <AcUnitTwoTone /> </Divider>
            <Divider textAlign={"right"}
                variant={"middle"}
                sx={{
                    my: 5,
                    border: "#155E75 dashed 2px",

                }}
            />
            <br />
            <Box sx={{
                width: "100px",
                height: "100px",
                bgcolor: "#ECFEFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <AddIcon />
                <Divider flexItem sx={{
                    "&:before": {
                        height: "1rem",
                        borderColor: "#E11D48"
                    },
                    "&:after": {
                        height: "1rem",
                        borderColor: "#E11D48"
                    },
                    [`& .${dividerClasses.wrapper}`]: {
                        color: "#E11D48",
                        fontSize: "1.2rem",
                        fontFamily: "verdana",
                        py: "16px",
                        px: "10px"
                    }
                }} variant={"middle"} orientation={"vertical"}>A</Divider>
                <RemoveIcon />
            </Box>
            <Box sx={{
                mt: 5,
                width: "100px",
                height: "100px",
                bgcolor: "#ECFEFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <AddIcon />
                <Divider flexItem sx={{
                    height: "auto",
                    mx: 2,
                    my: 2,
                    borderColor: "#E11D48",
                    borderStyle: "dotted",
                    borderWidth: "1.5px",
                }} variant={"middle"} orientation={"vertical"} />
                <RemoveIcon />
            </Box>
        </div>
    )
}
