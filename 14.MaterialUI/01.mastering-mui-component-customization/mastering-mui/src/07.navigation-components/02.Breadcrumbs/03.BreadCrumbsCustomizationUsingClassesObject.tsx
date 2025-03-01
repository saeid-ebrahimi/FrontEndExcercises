import { Breadcrumbs, Link, Typography, breadcrumbsClasses, linkClasses } from "@mui/material"
export function BreadCrumbsCustomizationUsingClassesObject() {
    return (
        <>
            <Breadcrumbs aria-label={"current page path"}
                // separator={<ArrowRightIcon />}
                maxItems={2}
                sx={{
                    [`& .${breadcrumbsClasses.separator}`]: {
                        color: "#581C87",
                        fontFamily: "verdana",
                        fontSize: "1.2rem",
                        fontWeight: 900,
                        margin: "0px 15px",
                    },
                    [`& .${linkClasses.root}`]: {
                        color: "#6B21A8",
                        fontFamily: "verdana",
                        fontSize: "1.1rem",
                    },
                    [`& .${breadcrumbsClasses.ol} button[aria-label='Show path']`]: {
                        bgcolor: "#6B21A8",
                        height: "1.5rem",
                        width: "2rem",
                        "& svg": {
                            color: "#E9D5FF",
                            height: "2.5rem"
                        }
                    },
                }}
            >
                <Link underline="hover" href="/shopping">Shopping</Link>
                <Link underline="hover" href="/shopping/apparel">Apparel</Link>
                <Link underline="hover" href="/shopping/apparel/hats">Hats</Link>
                <Typography sx={{
                    color: "#A855F7",
                    fontFamily: "verdana",
                    fontSize: "1.1rem",
                }} variant={"body1"}>All</Typography>
            </Breadcrumbs>
        </>
    )
}
