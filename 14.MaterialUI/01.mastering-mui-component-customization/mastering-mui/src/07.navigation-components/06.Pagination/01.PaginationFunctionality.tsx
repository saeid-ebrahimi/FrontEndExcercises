import { Pagination } from "@mui/material";
import { useState } from "react";

export default function PaginationFunctionality() {
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
                page={page}
                onChange={(_event: React.ChangeEvent<unknown>, newPage: number) => { setPage(newPage) }}
                count={14}
                defaultPage={4}
                color={"primary"}
                variant={"outlined"}
                shape={"circular"}
                size={"small"}
                // disabled
                showFirstButton
                showLastButton
                // hidePrevButton
                // hideNextButton
                siblingCount={2}
                boundaryCount={2}
            />
        </div>
    )
}
