import { Checkbox, FormControl, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";
import { Battery20 as Battery20Icon, Battery50, BatteryFull as BatteryFullIcon } from "@mui/icons-material";

export function CheckboxFunctionality() {
    const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false])
    return (<>
        <Checkbox
            // defaultChecked={true}
            // disabled={true}
            // indeterminate
            // indeterminateIcon={<Battery50 />}
            icon={<Battery20Icon />}
            checkedIcon={<BatteryFullIcon />}
            color={"secondary"}

        />
        <FormControl
        // disabled
        >
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            // disableRipple
                            checked={checkedItems[0]}
                            onChange={(event) => setCheckedItems(prevState => [event.target.checked, prevState[1], prevState[2]])}
                        />
                    }
                    label={"My Value 1"}
                    // labelPlacement={"bottom"}
                    //@ts-ignore
                    inputProps={{ "aria-label": "Checkbox 1" }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            // disableRipple
                            checked={checkedItems[1]}
                            onChange={(event) => setCheckedItems(prevState => [prevState[0], event.target.checked, prevState[2]])}
                        />
                    }
                    label={"My Value 2"}
                    //@ts-ignore
                    inputProps={{ "aria-label": "Checkbox 1" }}
                // labelPlacement={"bottom"}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            // disableRipple
                            checked={checkedItems[3]}
                            onChange={(event) => setCheckedItems(prevState => [prevState[0], prevState[1], event.target.checked])}
                        />
                    }
                    label={"My Value 3"}
                    // labelPlacement={"bottom"}
                    //@ts-ignore
                    inputProps={{ "aria-label": "Checkbox 1" }}
                />
            </FormGroup>
        </FormControl>
    </>)
}