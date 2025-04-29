import { Pagination, PaginationItem } from "@mui/material";
import { useState } from "react";

import { ArrowBack, ArrowForward, ArrowUpward, ArrowDownward } from "@mui/icons-material";

export default function PaginationCustomization() {
    const [page, setPage] = useState(4)
    const data = [
        "Article 1",
        "Article 2",
        "Article 3",
        "Article 4",
        "Article 5",
        "Article 6",
        "Article 7",
        "Article 8",
        "Article 9",
        "Article 10",
        "Article 11",
        "Article 12",
        "Article 13",
        "Article 14",
    ]
    return (
        <div>
            {data[page - 1]}
            <Pagination
                renderItem={(item) => <PaginationItem {...item}
                    components={{
                        previous: ArrowBack,
                        next: ArrowForward,
                        first: ArrowUpward,
                        last: ArrowDownward
                    }} />}
                page={page}
                onChange={(_event: React.ChangeEvent<unknown>, newPage: number) => { setPage(newPage) }}
                count={14}
                defaultPage={4}
                // color={"primary"}
                sx={{
                    "& .MuiPaginationItem-page": {
                        "&.Mui-selected": {
                            bgcolor: "orange",
                            borderColor: "#000",
                            borderWidth: 2,
                            color: "#fff",
                            fontSize: "1.2rem",
                            fontFamily: "Verdana",

                            "&:hover": {
                                opacity: 0.85,
                            },
                            "&.Mui-disabled": {
                                opacity: 0.3,
                            }
                        },
                        "&:not(.Mui-selected)": {
                            bgcolor: "purple",
                            borderColor: "#000",
                            borderWidth: 2,
                            color: "#fff",
                            fontSize: "1.2rem",
                            fontFamily: "Verdana",
                            borderRadius: "100%",
                            "&:hover": {
                                opacity: 0.85,
                            },
                            "&.Mui-disabled": {
                                opacity: 0.4,
                            }
                        }
                    },
                    "& .MuiPaginationItem-previousNext": {
                        bgcolor: "purple",
                        borderColor: "#000",
                        borderWidth: 2,
                        color: "#fff",
                        fontSize: "1.2rem",
                        fontFamily: "Verdana",
                        "&.Mui-disabled": {
                            bgcolor: "gray",
                            color: "white"
                        },
                        "& > svg": {
                            fontSize: "1.5rem"
                        }

                    },
                    "& .MuiPaginationItem-firstLast": {
                        bgcolor: "purple",
                        borderColor: "#000",
                        borderWidth: 2,
                        color: "#fff",
                        fontSize: "1.2rem",
                        fontFamily: "Verdana",
                        "&.Mui-disabled": {
                            bgcolor: "gray",
                            color: "white"
                        },
                        "& > svg": {
                            fontSize: "1.5rem"
                        }
                    },
                    "& .MuiPaginationItem-root": {
                        width: "2.7rem",
                        height: "2.7rem",
                        borderRadius: "100%",
                    },
                    "& .MuiPaginationItem-ellipsis": {
                        color: "purple",
                        fontSize: "1.5rem"
                    }
                }}
                variant={"outlined"}
                shape={"circular"}
                // size={"small"}
                // disabled
                showFirstButton
                showLastButton
            // hidePrevButton
            // hideNextButton
            // siblingCount={2}
            // boundaryCount={2}
            />
        </div>
    )
}
