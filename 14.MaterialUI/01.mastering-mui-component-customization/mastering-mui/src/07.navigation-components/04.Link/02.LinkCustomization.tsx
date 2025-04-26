import { Link } from '@mui/material'

export default function LinkCustomization() {
    return (
        <div>
            <Link underline="hover" target="_blank" rel="noreferrer" color={"secondary"} variant={"h4"} href="https://www.google.com" sx={{
                color: "darkblue", fontFamily: "Verdana", fontSize: "1.5rem"
            }}>Google Site</Link>
        </div>
    )
}
