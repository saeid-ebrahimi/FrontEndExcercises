import { useFieldArray, useFormContext, useFormState } from "react-hook-form";
import type { TOrderedFoodItem } from "../../../types";
import { TextField } from "../../../components/controls/TextField";
import { getRenderCount } from "../../../lib/getRenderCount";

const RenderCount = getRenderCount("Food Items")

export function OrderedFoodItems() {
    const { register } = useFormContext<{ orderedFoodItems: TOrderedFoodItem[] }>()
    const { errors } = useFormState<{ orderedFoodItems: TOrderedFoodItem[] }>({ name: "orderedFoodItems" })
    const { fields, append, prepend, insert, swap, move, replace, update, remove } = useFieldArray<{ orderedFoodItems: TOrderedFoodItem[] }>({ name: "orderedFoodItems" })

    function onAppendRow() {
        append({ name: "", quantity: 0 }, {
            // shouldFocus: true,
            // focusIndex: 0,
            // focusName: "orderedFoodItems.0.quantity"
        })
    }

    function onMoveUp(index: number) {
        if (index > 0) {
            swap(index, index - 1)
        }
    }

    function onMoveDown(index: number) {
        if (index < fields.length - 1) {
            move(index, index + 1)
        }
    }

    function onPrependRow() {
        prepend({ name: "", quantity: 0 })
    }

    function onInsertRow(index: number) {
        insert(index, { name: "", quantity: 0 })
    }

    function OnResetField(index: number) {
        update(index, { name: "", quantity: 0 })
    }

    function onResetFields() {
        replace([{ name: "", quantity: 0 }])
    }

    function onRemove(index: number) {
        remove(index)
    }

    return <>
        <RenderCount />
        <table className={"table table-borderless table-hover"}>
            <tbody>
                <tr>
                    <th>Food Name</th>
                    <th>Quantity</th>
                    <th>
                        <button
                            type={"button"}
                            className={"btn btn-sm btn-secondary"}
                            onClick={onAppendRow}
                        >Append</button>
                        <button
                            type={"button"}
                            className={"btn btn-sm btn-secondary ms-2"}
                            onClick={onPrependRow}
                        >Prepend</button>
                        <button
                            type={"button"}
                            className={"btn btn-sm btn-secondary ms-2"}
                            onClick={onResetFields}
                        >Reset Fields</button>
                    </th>
                </tr>
                {fields.map((field, index) =>
                    <tr key={field.id}>
                        <td>
                            <TextField
                                {...register(`orderedFoodItems.${index}.name`)}
                                error={errors.orderedFoodItems?.[index]?.name}
                            />
                        </td>
                        <td>
                            <TextField
                                type={"number"}
                                min={0}
                                {...register(`orderedFoodItems.${index}.quantity`)}
                                error={errors.orderedFoodItems?.[index]?.quantity}
                            />
                        </td>
                        <td>
                            {/* <button
                                type={"button"}
                                className={"btn btn-sm btn-secondary ms-2"}
                                onClick={() => onInsertRow(index + 1)}
                            >Insert Row Below</button> */}
                            <button
                                type={"button"}
                                className={"btn btn-sm btn-light ms-2"}
                                onClick={() => onMoveUp(index)}
                            >🔼</button>
                            <button
                                type={"button"}
                                className={"btn btn-sm btn-light ms-2"}
                                onClick={() => onMoveDown(index)}
                            >🔽</button>
                            <button
                                type={"button"}
                                className={"btn btn-sm btn-outline-danger ms-2"}
                                onClick={() => onRemove(index)}
                            >❌</button>
                            <button
                                type={"button"}
                                className={"btn btn-sm ms-2"}
                                onClick={() => OnResetField(index)}
                            >reset</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </>
}