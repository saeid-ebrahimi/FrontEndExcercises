import mongoose, {Schema} from "mongoose";
import {global} from "styled-jsx/css";
mongoose.connect(process.env.NEXT_PUBLIC_MONGOBD_URI)
mongoose.Promise = global.Promise;

const userSchema = new Schema(
    {
        name:String,
        email:String,
        password:String,
    },
    {
        timestamps:true,
    }
)
const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User;