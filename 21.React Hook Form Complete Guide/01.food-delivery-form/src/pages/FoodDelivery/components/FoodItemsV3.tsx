import { useFieldArray, useFormContext, useFormState } from "react-hook-form";
import type { NewFoodItem, TFood, TOrderedFoodItem, TSelectOption } from "../../../types";
import { TextField } from "../../../components/controls/TextField";
import { getRenderCount } from "../../../lib/getRenderCount";
import { useEffect, useState } from "react";
import { getFoodItems } from "../../../db";
import { SelectField } from "../../../components/controls/SelectField";

const RenderCount = getRenderCount("Food Items")

export function NewFoodItems() {
    const [foodList, setFoodList] = useState<TFood[]>([])
    const [foodOptions, setFoodOptions] = useState<TSelectOption[]>([])

    const { register } = useFormContext<{ newFoodItems: NewFoodItem[] }>()
    const { errors } = useFormState<{ newFoodItems: NewFoodItem[] }>({ name: "newFoodItems" })
    const { fields, append, remove } =
        useFieldArray<{ newFoodItems: TOrderedFoodItem[] }>({
            name: "newFoodItems", rules: {
                required: {
                    value: true,
                    message: "No food in the order."
                },
                minLength: {
                    value: 2,
                    message: "At least 2 Fields is needed!"
                },
            }
        })

    useEffect(() => {
        const tempFoodList = getFoodItems();
        const tempOptions: TSelectOption[] = tempFoodList.map((food) => ({
            value: food.foodId,
            label: food.name
        }))
        setFoodOptions([{ value: 0, label: " Select Food" }, ...tempOptions])
        setFoodList(tempFoodList)
    }, [])

    function onAppendRow() {
        append({ name: "", quantity: 0 }, {
        })
    }

    function onRemove(index: number) {
        remove(index)
    }


    return <>
        <RenderCount />
        <table className={"table table-borderless table-hover"}>
            <tbody>
                <tr>
                    <th>Food</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>
                        <button
                            type={"button"}
                            className={"btn btn-sm btn-secondary"}
                            onClick={onAppendRow}
                        >Append</button>

                    </th>
                </tr>
                {fields.map((field, index) =>
                    <tr key={field.id}>
                        <td>
                            <SelectField
                                options={foodOptions}
                                {...register(`newFoodItems.${index}.foodId`, {
                                    valueAsNumber: true,
                                })}
                            // error={errors.newFoodItems?.[index]?.foodId}
                            />
                        </td>
                        <td>Price</td>
                        <td>
                            <TextField
                                type={"number"}
                                min={0}
                                {...register(`newFoodItems.${index}.quantity`)}
                                error={errors.newFoodItems?.[index]?.quantity}
                            />
                        </td>

                        <td>Total Price</td>
                        <td>
                            <button
                                type={"button"}
                                className={"btn btn-sm btn-outline-danger ms-2"}
                                onClick={() => onRemove(index)}
                            >❌</button>
                        </td>
                    </tr>
                )}
            </tbody>
            {errors.newFoodItems?.root && <tfoot>
                <tr>
                    <td colSpan={3}>
                        <span className={"error-feedback"}>{errors.newFoodItems?.root?.message}</span>
                    </td>
                </tr>
            </tfoot>
            }
        </table>
    </>
}