import { useFormState } from "react-hook-form";

export default function FormLoader(props: any) {
    const { control } = props;
    const { isLoading } = useFormState({ control })
    return (
        <>
            {isLoading && <div className={"loader"} />}
        </>
    )
}
