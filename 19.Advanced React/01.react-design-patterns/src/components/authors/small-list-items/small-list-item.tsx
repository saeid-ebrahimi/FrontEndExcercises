import type { TSmallAuthorListItemProps } from "./small-list-item.types"

export const SmallAuthorListItem = ({ author }: TSmallAuthorListItemProps) => {
    const { name, age } = author
    return (
        <p>Name: {name}, Age: {age}</p>
    )
}