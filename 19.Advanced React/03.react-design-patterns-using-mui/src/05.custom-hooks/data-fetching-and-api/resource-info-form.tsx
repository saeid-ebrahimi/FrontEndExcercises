import { Box, Button, Stack, TextField } from "@mui/material";
import { TUserUpdates } from "./update-resource-profile";

export type TUser = {
    name: string; age: number, country: string, books: string[]
}



type IResourceInfoFormProps<T extends TUser> = {
    resource: T;
    onChangeResource: (updates: TUserUpdates) => void;
    onUpdateResource: (updates: Partial<T>) => Promise<void>;
    onResetResource: () => void;
    disableUpdate: boolean;
};

export function ResourceInfoForm<T extends TUser>(
    {
        resource,
        onChangeResource,
        onUpdateResource,
        onResetResource,
        disableUpdate
    }: IResourceInfoFormProps<T>) {
    const {
        name,
        age,
        country,
    } = resource
    return (
        <Stack gap={4} component={"form"} onSubmit={async (evt) => {
            evt.preventDefault();
            await onUpdateResource(resource)
        }} margin={4}>
            <TextField
                label={"name"}
                value={name}
                onChange={(evt) => { onChangeResource({ name: evt.target.value }) }}
            />
            <TextField
                label={"age"}
                value={age?.toString()}
                type={"number"}
                onChange={(evt) => { onChangeResource({ age: parseInt(evt.target.value) }) }}
            />
            <TextField
                label={"country"}
                value={country}
                onChange={(evt) => { onChangeResource({ country: evt.target.value }) }}
            />
            <Box display={"flex"} gap={3} >
                <Button variant={"contained"} type={"submit"} disabled={disableUpdate}>Submit</Button>
                <Button variant={"outlined"} type={"button"} onClick={() => onResetResource()} disabled={disableUpdate}>Reset</Button>
            </Box>
        </Stack>
    )
}
