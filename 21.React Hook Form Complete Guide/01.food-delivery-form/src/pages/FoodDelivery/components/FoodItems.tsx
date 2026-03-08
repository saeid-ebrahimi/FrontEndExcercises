import { useFormContext, useFormState } from "react-hook-form";
import type { TFoodItem } from "../../../types";
import { TextField } from "../../../components/controls/TextField";
import { getRenderCount } from "../../../lib/getRenderCount";

const RenderCount = getRenderCount("Food Items")

export function FoodItems() {
    const { register } = useFormContext<{ foodItems: TFoodItem[] }>()
    const { errors } = useFormState<{ foodItems: TFoodItem[] }>({ name: "foodItems" })
    return <>
        <RenderCount />
        <table className={"table table-borderless table-hover"}>
            <tbody>
                <tr>
                    <td>
                        <TextField label="Food #1"
                            {...register("foodItems.0.name", {
                                required: "Food #1 Item is required."
                            })
                            }
                            error={errors?.foodItems?.[0]?.name} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <TextField label={"Food #2"} {...register("foodItems.1.name")} />
                    </td>
                </tr>
            </tbody>
        </table>
    </>
}