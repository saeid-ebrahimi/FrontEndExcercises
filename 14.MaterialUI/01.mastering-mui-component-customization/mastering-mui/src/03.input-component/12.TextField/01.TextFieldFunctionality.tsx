import { useState, useEffect, ChangeEvent } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { PhoneAndroid as PhoneIcon, Visibility as VisibilityIcon, VisibilityOff as VisibilityOffIcon, } from "@mui/icons-material";
export function TextFieldFunctionality() {
    const [textValue, setTextValue] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [visible, setVisible] = useState(true)
    useEffect(() => {
        console.log(textValue);
    }, [textValue, phoneNumber])
    return (
        <>
            <TextField
                value={textValue}
                label={"Full Name"}
                id={"full-name"}
                autoComplete="off"
                sx={{
                    "& input[type=number]::-webkit-inner-spin-button,": {
                        appearance: "none",
                    }
                }}
                multiline
                // rows={5}

                minRows={2}
                maxRows={7}
                // variant={"filled"}
                // variant={"standard"}
                required
                // disabled
                onChange={
                    (event: ChangeEvent<HTMLInputElement>) => { setTextValue(event.target.value) }
                }
            />
            <TextField
                value={phoneNumber}
                label={"Phone Number"}
                autoComplete="off"
                type={visible ? "number" : "password"}
                id={"phone-number"}
                color={"secondary"}
                sx={{
                    "& input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button": {
                        appearance: "none",
                    }
                }}
                // margin={"dense"}
                margin={"normal"}
                // fullWidth
                // size={"small"}
                slotProps={{
                    input: {
                        // readOnly: true,
                        startAdornment:
                            <InputAdornment position={"start"}>
                                <PhoneIcon />
                            </InputAdornment>,
                        endAdornment:
                            <InputAdornment onClick={() => { setVisible(prev => !prev) }} position={"end"}>
                                {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </InputAdornment>
                    }
                }}
                // variant={"filled"}
                // variant={"standard"}
                required
                // disabled
                error={phoneNumber.length !== 11 && phoneNumber.length > 0}
                helperText={phoneNumber.length !== 11 && phoneNumber.length > 0 ? "your phone number should be 11 digits" : "enter your emergency phone number"}

                onChange={
                    (event: ChangeEvent<HTMLInputElement>) => {
                        setPhoneNumber(event.target.value);
                    }
                }
            />
        </>
    )
}
