import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { getRenderCount } from "../../../lib/getRenderCount";
import { TextField } from "../../../components/controls/TextField";
import { useEffect, useState, type ChangeEvent } from "react";
import { IDBManager } from "../../../db/indexeddb";
import { SelectField } from "../../../components/controls/SelectField";
import type { TSelectOption } from "../../../types";

export const roundToTwoDecimalPoint = (
    value: number
) =>
    Math.round((value + Number.EPSILON) * 100) /
    100;


export type TFoodDBItem = {
    id: number;
    name: string;
    price: number;
}

export type TFoodItem = { id: number, quantity: number, price: number, totalPrice: number };
export const DEFAULT_FOOD_ITEM = { id: 0, quantity: 0, price: 0, totalPrice: 0 };

const RenderCount = getRenderCount("Food Items")

export function FoodItemsTest() {
    const [foodList, setFoodList] = useState<TFoodDBItem[]>([])
    const [foodOptions, setFoodOptions] = useState<TSelectOption[]>([])

    const { control, formState: { errors } } = useFormContext<{ foodItems: TFoodItem[] }>()
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
    useEffect(() => {
        async function getFoodItems() {
            const foodDatabaseManager = new IDBManager("foodDB", 3, "foods")
            try {
                await foodDatabaseManager.openDB()
                const result = await foodDatabaseManager.getAllItems<TFoodDBItem>()
                setFoodList(result)
                setFoodOptions([{ value: 0, label: " Select Food" }, ...result.map(food => ({ label: food.name, value: food.id }))])
            } catch {
                setFoodList([])
            } finally {
                await foodDatabaseManager.closeDB()
            }
        }
        getFoodItems()
    }, [])
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
                        foodItems={foodList}
                        foodOptions={foodOptions}
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
    foodItems: TFoodDBItem[];
    foodOptions: TSelectOption[];
    onInsertRowBelow: (index: number) => void;
    onMoveUp: (index: number) => void;
    onMoveDown: (index: number) => void;
    onRemove: (index: number) => void;
    OnReset: (index: number) => void;
}

export function OrderItemRow({
    foodItems,
    foodOptions,
    field,
    index,
    lastIndex,
    onInsertRowBelow,
    onMoveDown,
    onMoveUp,
    onRemove,
    OnReset
}: IOrderItemRowProps) {
    const { register, formState: { errors }, getValues, setValue } = useFormContext<{ foodItems: TFoodItem[] }>()
    const { ref: idRef, ...idRest } = register(`foodItems.${index}.id`, {
        required: "selecting food is required",
    })
    const totalPrice = useWatch({ name: `foodItems.${index}.totalPrice` })
    const { ref: quantityRef, ...quantityRest } = register(`foodItems.${index}.quantity`, {
        valueAsNumber: true,
        required: "The quantity is required!",
        min: {
            value: 1,
            message: "minimum value is 1"
        },
        // validate: {
        //     isMoreThanStock: async (value: number) => {
        //         await new Promise((resolve) => setTimeout(resolve, 1000));
        //         if (value && value > 9) return "Out of Stock"
        //         else return true;

        //     }
        // },
    })
    const currentRowError = errors?.foodItems?.[index]

    function onChangeFood(evt: ChangeEvent<HTMLSelectElement>, rowIndex: number) {
        const foodId = parseInt(evt.target.value);

        let price: number = 0;
        if (foodId > 0) {
            price = foodItems.find((food) => food.id === foodId)?.price || 0
        }
        setValue(`foodItems.${rowIndex}.price`, price);
        onChangeQuantity(rowIndex)
    }

    function onChangeQuantity(rowIndex: number, evt?: ChangeEvent<HTMLInputElement>) {
        const { price, quantity } = getValues(`foodItems.${rowIndex}`);
        console.log(price);

        const newQuantity = parseInt(evt?.target?.value ?? "0")
        let totalPrice = 0;
        totalPrice = newQuantity ? newQuantity * price : quantity && quantity > 0 ? price * quantity : 0
        setValue(`foodItems.${rowIndex}.totalPrice`, roundToTwoDecimalPoint(totalPrice))
    }
    return <>
        <tr key={field.id}>
            <td colSpan={2}>
                <SelectField
                    label={`Food #${index}`}
                    options={foodOptions}
                    ref={idRef}
                    {...idRest}
                    error={currentRowError?.id}
                    onChange={(evt) => {
                        onChangeFood(evt, index);
                        // trigger(`newFoodItems.${index}.quantity`)
                    }}
                />
                {/* <TextField label={`Food #${index}`} ref={nameRef} {...nameRest} error={currentRowError?.name} /> */}
            </td>
            <td colSpan={1}>
                <TextField
                    type={"number"}
                    label={`Quantity #${index}`}
                    ref={quantityRef}
                    {...quantityRest}
                    error={currentRowError?.quantity}
                    onChange={(evt) => {
                        onChangeQuantity(index, evt)
                        // trigger(`newFoodItems.${index}.quantity`)
                    }}
                />
            </td>
            <th colSpan={1}>$ {totalPrice}</th>
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
                <th rowSpan={2} colSpan={1}>totalPrice</th>
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