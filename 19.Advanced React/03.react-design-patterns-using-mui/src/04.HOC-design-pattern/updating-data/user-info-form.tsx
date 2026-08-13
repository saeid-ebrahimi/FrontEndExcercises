import { Box, Button, Stack, TextField } from "@mui/material";
import { TUser } from "../logging/user-info";

type IUserInfoFormProps = {
    user: TUser;
    onChangeUser: (updates: Partial<TUser>) => void;
    onUpdateUser: (updates: Partial<TUser>) => Promise<void>;
    onResetUser: () => void;
    disableUpdate: boolean;
};

export default function UserInfoForm(
    {
        user,
        onChangeUser,
        onUpdateUser,
        onResetUser,
        disableUpdate
    }: IUserInfoFormProps) {
    const {
        name,
        age,
        country,
    } = user
    return (
        <Stack gap={4} component={"form"} onSubmit={async (evt) => {
            evt.preventDefault();
            await onUpdateUser(user)
        }} margin={4}>
            <TextField
                label={"name"}
                value={name}
                onChange={(evt) => { onChangeUser({ name: evt.target.value }) }}
            />
            <TextField
                label={"age"}
                value={age?.toString()}
                type={"number"}
                onChange={(evt) => { onChangeUser({ age: parseInt(evt.target.value) }) }}
            />
            <TextField
                label={"country"}
                value={country}
                onChange={(evt) => { onChangeUser({ country: evt.target.value }) }}
            />
            <Box display={"flex"} gap={3} >
                <Button variant={"contained"} type={"submit"} disabled={disableUpdate}>Submit</Button>
                <Button variant={"outlined"} type={"button"} onClick={() => onResetUser()} disabled={disableUpdate}>Reset</Button>
            </Box>
        </Stack>
    )
}
