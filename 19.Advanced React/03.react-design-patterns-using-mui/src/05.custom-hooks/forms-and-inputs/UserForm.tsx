import { Button, Stack, TextField } from "@mui/material";
import { useForm } from "./useForm";
import axios from "axios";

type TUserFormValues = {
    name: string;
    age: number;
    country: string;
};

const validate = {
    name: (value: string) => {
        if (!value.trim()) {
            return "Name is required";
        }

        if (value.length < 3) {
            return "Name must be at least 3 characters";
        }

        return undefined;
    },

    age: (value: number) => {
        if (value <= 0) {
            return "Age must be greater than 0";
        }

        return undefined;
    },

    country: (value: string) => {
        if (!value.trim()) {
            return "Country is required";
        }

        return undefined;
    },
};


export function UserForm() {
    const form = useForm<TUserFormValues>({
        initialValues: {
            name: "",
            age: 0,
            country: "",
        },
        validate,
        onSubmit: async (values) => {
            console.log("submitting: ", values);
            axios.post("/api/users", values);
        }
    })
    return (
        <Stack
            component="form"
            gap={2}
            onSubmit={form.handleSubmit}
        >
            <TextField
                label={"name"}
                value={form.values.name}
                onChange={form.handleChange("name")}
                onBlur={() => form.handleBlur("name")}
                error={Boolean(form.touched.name && form.errors.name)}
                helperText={form.touched.name ? form.errors.name : undefined}
            />
            <TextField
                label={"age"}
                value={form.values.age}
                onChange={(event) => form.setValue("age", Number(event.target.value))}
                onBlur={() => form.handleBlur("age")}
                error={Boolean(form.touched.age && form.errors.age)}
                helperText={form.touched.age ? form.errors.age : undefined}
            />
            <TextField
                label={"country"}
                value={form.values.country}
                onChange={form.handleChange("country")}
                onBlur={() => form.handleBlur("country")}
                error={Boolean(form.touched.country && form.errors.country)}
                helperText={form.touched.country ? form.errors.country : undefined}
            />
            <Button
                type="submit"
                variant="contained"
                disabled={form.submitting}
            >
                {form.submitting ? "Submitting..." : "Submit"}
            </Button>
        </Stack>
    )
}
