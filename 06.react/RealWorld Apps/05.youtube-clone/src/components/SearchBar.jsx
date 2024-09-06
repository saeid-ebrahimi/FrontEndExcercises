import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Paper, IconButton} from "@mui/material";
import {Search} from "@mui/icons-material"
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate()
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(searchTerm){
            navigate(`search/${searchTerm}`)
        }
    }
    return (
        <Paper
            component={"form"}
            onSubmit={handleSubmit}
            sx={{
                borderRadius:20,
                border:`1px solid #e3e3e3`,
                pl:2,
                boxShadow:"none",
                mr:{sx:5}
        }}>
            <input type="text" className={"search-bar"} placeholder={"Search..."}  onChange={(evt)=> setSearchTerm(evt.target.value)}/>
            <IconButton type={"submit"} sx={{p:"10px", color:"red",}}>
                <Search/>
            </IconButton>
        </Paper>
    )
}
export default SearchBar;