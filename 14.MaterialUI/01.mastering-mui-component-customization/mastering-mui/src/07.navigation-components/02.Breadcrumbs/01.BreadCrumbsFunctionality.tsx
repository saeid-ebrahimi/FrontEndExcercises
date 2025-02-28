
import { ArrowRight as ArrowRightIcon } from "@mui/icons-material"
import { Breadcrumbs, Link, Typography } from "@mui/material"
export function BreadCrumbsFunctionality() {
    return (
        <>
            <Breadcrumbs aria-label={"current page path"} separator={<ArrowRightIcon />}>
                <Link underline="hover" href="/shopping">Shopping</Link>
                <Link underline="hover" href="/shopping/apparel">Apparel</Link>
                <Link underline="hover" href="/shopping/apparel/hats">Hats</Link>
                <Typography variant={"body1"}>All</Typography>
            </Breadcrumbs>
        </>
    )
}
