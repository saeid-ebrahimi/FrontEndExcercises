import { useFieldArray, useFormContext, useFormState } from "react-hook-form";
import { getRenderCount } from "../../../lib/getRenderCount";
import { TextField } from "../../../components/controls/TextField";


export type TFoodItem = {
    name: string;
    quantity: number;
}

export const DEFAULT_FOOD_ITEM = { name: "", quantity: 0 };

const RenderCount = getRenderCount("Food Items")

export function FoodItemsTest() {
    const { control, formState: { errors, isLoading } } = useFormContext<{ foodItems: TFoodItem[] }>()
    const fieldArray = useFieldArray({
        control,
        name: "foodItems",
        rules: {
            required: {
                value: true,
                message: "No food in the order."
            },
            minLength: {
                value: 2,
                message: "At least 2 Food Item is needed!"
            },
        }
    })

    const { fields, append, prepend, replace, remove, move, update, insert } = fieldArray

    const onAppendRow = () => {
        append({ ...DEFAULT_FOOD_ITEM }, {
            shouldFocus: true,
            focusIndex: fields.length,
            focusName: `foodItems.${fields.length}.name`,
        })
    }

    const onPrependRow = () => {
        prepend(DEFAULT_FOOD_ITEM, {
            shouldFocus: true,
            focusIndex: 0,
            focusName: `foodItems.0.name`
        },)
    }

    const onResetFields = () => {
        replace([DEFAULT_FOOD_ITEM])
    }
    const onRemoveRow = (indexToRemove: number) => {
        remove(indexToRemove)
    }

    const OnResetField = (index: number) => {
        update(index, DEFAULT_FOOD_ITEM)
    }
    const onMoveDown = (index: number) => {
        if (index < fields.length - 1)
            move(index, index + 1)
    }
    const onMoveUp = (index: number) => {
        if (index > 0) {
            move(index, index - 1)
        }
    }

    const onInsertRowBelow = (index: number) => {
        insert(index + 1, DEFAULT_FOOD_ITEM, {
            shouldFocus: true,
            focusIndex: index + 1,
        })
    }


    return <>
        <RenderCount />
        <table className={"table table-borderless table-hover"}>
            <TableHeader onAppendRow={onAppendRow} onPrependRow={onPrependRow} onResetFields={onResetFields} />
            <tbody>
                {fields.map((field, index) =>
                    <OrderItemRow
                        key={field.id}
                        OnReset={OnResetField}
                        onRemove={onRemoveRow}
                        onMoveDown={onMoveDown}
                        onMoveUp={onMoveUp}
                        field={field}
                        index={index}
                        lastIndex={fields.length}
                        onInsertRowBelow={onInsertRowBelow}

                    />)}
            </tbody>
            {errors.foodItems?.root?.message &&
                <tfoot>
                    <tr>
                        <td colSpan={3}>

                        </td>
                        <span className={"text-danger"}>{errors.foodItems?.root?.message}</span>
                    </tr>
                </tfoot>
            }
        </table>
    </>
}

interface IOrderItemRowProps {
    field: { id: string; };
    index: number; // Type the errors object
    lastIndex: number;
    onInsertRowBelow: (index: number) => void;
    onMoveUp: (index: number) => void;
    onMoveDown: (index: number) => void;
    onRemove: (index: number) => void;
    OnReset: (index: number) => void;
}

export function OrderItemRow({
    field,
    index,
    lastIndex,
    onInsertRowBelow,
    onMoveDown,
    onMoveUp,
    onRemove,
    OnReset
}: IOrderItemRowProps) {
    const { register, formState: { errors } } = useFormContext<{ foodItems: TFoodItem[] }>()
    const { ref: nameRef, ...nameRest } = register(`foodItems.${index}.name`, {
        required: "entering food name is required",
    })
    const { ref: quantityRef, ...quantityRest } = register(`foodItems.${index}.quantity`, {
        required: "The quantity is required!",
        min: {
            value: 1,
            message: "minimum value is 1"
        }
    })
    const currentRowError = errors?.foodItems?.[index]

    return <>
        <tr key={field.id}>
            <td colSpan={2}>
                <TextField label={`Food #${index}`} ref={nameRef} {...nameRest} error={currentRowError?.name} />
            </td>
            <td colSpan={1}>
                <TextField type={"number"} label={`Quantity #${index}`} ref={quantityRef} {...quantityRest} error={currentRowError?.quantity} />
            </td>
            <td colSpan={3}>
                <button
                    type={"button"}
                    className={"btn btn-sm btn-secondary ms-2"}
                    onClick={() => onInsertRowBelow(index + 1)}
                >Insert</button>
                <button
                    type={"button"}
                    className={"btn btn-sm btn-light ms-2"}
                    onClick={() => onMoveUp(index)}
                    disabled={index === 0}
                >🔼</button>
                <button
                    type={"button"}
                    className={"btn btn-sm btn-light ms-2"}
                    onClick={() => onMoveDown(index)}
                    disabled={index === lastIndex}
                >🔽</button>
                <button
                    type={"button"}
                    className={"btn btn-sm btn-outline-danger ms-2"}
                    onClick={() => onRemove(index)}
                >❌</button>
                <button
                    type={"button"}
                    className={"btn btn-sm ms-2"}
                    onClick={() => OnReset(index)}
                >reset</button>
            </td>

        </tr>
    </>
}

interface ITableHeaderProps {
    onAppendRow: () => void;
    onPrependRow: () => void;
    onResetFields: () => void;
}
export function TableHeader({
    onAppendRow,
    onPrependRow,
    onResetFields,
}: ITableHeaderProps) {

    return <>
        <thead>
            <tr>
                <th rowSpan={2} colSpan={2}>Food Name</th>
                <th rowSpan={2} colSpan={1}>Quantity</th>
                <th rowSpan={1} colSpan={3}>
                    Actions:
                </th>
            </tr>
            <tr>
                <th rowSpan={1} colSpan={3}>
                    <button
                        type={"button"}
                        className={"btn btn-sm btn-secondary ms-2"}
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
        </thead>
    </>
}