import { useFieldArray, useFormContext, useFormState, useWatch } from "react-hook-form";
import type { NewFoodItem, TFood, TOrderedFoodItem, TSelectOption } from "../../../types";
import { TextField } from "../../../components/controls/TextField";
import { getRenderCount } from "../../../lib/getRenderCount";
import { useEffect, useState, type ChangeEvent } from "react";
import { getFoodItems } from "../../../db";
import { SelectField } from "../../../components/controls/SelectField";
import { roundToTwoDecimalPoint } from "../../../utils";

const RenderCount = getRenderCount("Food Items")

export function NewFoodItems() {
    const [foodList, setFoodList] = useState<TFood[]>([])
    const [foodOptions, setFoodOptions] = useState<TSelectOption[]>([])

    const { register, getValues, setValue } = useFormContext<{ newFoodItems: NewFoodItem[] }>()
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

    useWatch<{
        newFoodItems: NewFoodItem[]
    }>({ name: "newFoodItems" })
    function onAppendRow() {
        append({ name: "", quantity: 0 }, {
        })
    }

    function onRemove(index: number) {
        remove(index)
    }

    function onChangeFood(evt: ChangeEvent<HTMLSelectElement>, rowIndex: number) {
        const foodId = parseInt(evt.target.value);
        let price: number = 0;
        if (foodId > 0) {
            price = foodList.find((food) => food.foodId === foodId)?.price || 0
        }
        setValue(`newFoodItems.${rowIndex}.price`, price);
        onChangeQuantity(rowIndex)
    }

    function onChangeQuantity(rowIndex: number, evt?: ChangeEvent<HTMLInputElement>) {
        const { price, quantity } = getValues(`newFoodItems.${rowIndex}`);
        const newQuantity = parseInt(evt?.target?.value ?? "0")
        let totalPrice = 0;
        totalPrice = newQuantity ? newQuantity * price : quantity && quantity > 0 ? price * quantity : 0
        setValue(`newFoodItems.${rowIndex}.totalPrice`, roundToTwoDecimalPoint(totalPrice))
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
                                    min: {
                                        value: 1,
                                        message: "Select A food please"
                                    }
                                })}
                                error={errors.newFoodItems?.[index]?.foodId}
                                onChange={(evt) => onChangeFood(evt, index)}
                            />
                        </td>
                        <td>$ {getValues(`newFoodItems.${index}.price`)}</td>
                        <td>
                            <TextField
                                type={"number"}
                                min={0}
                                {...register(`newFoodItems.${index}.quantity`, {
                                    valueAsNumber: true,
                                    required: {
                                        value: true,
                                        message: " < 1.",
                                    },
                                    min: {
                                        value: 1,
                                        message: "< 1."
                                    }
                                })}
                                onChange={(evt) => onChangeQuantity(index, evt)}
                                error={errors.newFoodItems?.[index]?.quantity}
                            />
                        </td>

                        <td>$ {getValues(`newFoodItems.${index}.totalPrice`)}</td>
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