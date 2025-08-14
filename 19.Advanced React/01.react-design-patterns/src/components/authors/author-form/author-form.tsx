import { withUpdateUserInfo } from "../../../hocs/with-update-user-info/with-update-user-info";

import type { TAuthor } from "../large-list-item";
//@ts-ignore
export const AuthorInfoForm = withUpdateUserInfo<TAuthor>(({ data, onChangeData, onPostData, onResetData }) => {
    const { name, age } = data || {};
    return data ? (<>
        <label>
            Name:
            <input value={name} onChange={(e) => onChangeData({ name: e.target.value })} />
        </label>
        <label>
            Age:
            <input value={age} type={"number"} onChange={(e) => onChangeData({ age: Number(e.target.value) })} />
        </label>
        <button onClick={onResetData}>Reset</button>
        <button onClick={onPostData}>Save</button>
    </>) : <h3>Loading...</h3 >
}, "/users/3")