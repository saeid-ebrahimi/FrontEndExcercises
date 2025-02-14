import { Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from "@mui/material"
import { useState, MouseEvent, ChangeEvent } from "react"


export function TableCustomization() {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const handleChangePage = (_event: MouseEvent<HTMLButtonElement> | null, newPage: number) => setPage(newPage)

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value)
        setPage(1)
    }

    const createData = (date: Date, total: number, status: string) => {
        return { date, total, status }
    }
    const rows = [
        createData(new Date(), 9.99, "processing"),
        createData(new Date("February 12 2025"), 10.90, "shipped"),
        createData(new Date("February 8 2025"), 20.98, "shipped"),
        createData(new Date("December 19 2025"), 22.15, "delivered"),
        createData(new Date(), 9.99, "processing"),
        createData(new Date("February 12 2025"), 10.90, "shipped"),
        createData(new Date("February 8 2025"), 20.98, "shipped"),
        createData(new Date("December 19 2025"), 22.15, "delivered"),
        createData(new Date(), 9.99, "processing"),
        createData(new Date("February 12 2025"), 10.90, "shipped"),
        createData(new Date("February 8 2025"), 20.98, "shipped"),
        createData(new Date("December 19 2025"), 22.15, "delivered"),
        createData(new Date(), 9.99, "processing"),
        createData(new Date("February 12 2025"), 10.90, "shipped"),
        createData(new Date("February 8 2025"), 20.98, "shipped"),
        createData(new Date("December 19 2025"), 22.15, "delivered"),
        createData(new Date(), 9.99, "processing"),
        createData(new Date("February 12 2025"), 10.90, "shipped"),
        createData(new Date("February 8 2025"), 20.98, "shipped"),
        createData(new Date("December 19 2025"), 22.15, "delivered"),
        createData(new Date(), 9.99, "processing"),
        createData(new Date("February 12 2025"), 10.90, "shipped"),
        createData(new Date("February 8 2025"), 20.98, "shipped"),
        createData(new Date("December 19 2025"), 22.15, "delivered"),
        createData(new Date("February 12 2025"), 10.90, "shipped"),
        createData(new Date("February 8 2025"), 20.98, "shipped"),
        createData(new Date("December 19 2025"), 22.15, "delivered"),
        createData(new Date("February 12 2025"), 10.90, "shipped"),
        createData(new Date("February 8 2025"), 20.98, "shipped"),
        createData(new Date("December 19 2025"), 22.15, "delivered"),
        createData(new Date("February 12 2025"), 10.90, "shipped"),
        createData(new Date("February 8 2025"), 20.98, "shipped"),
        createData(new Date("December 19 2025"), 22.15, "delivered"),
    ]

    return (
        <>
            <TableContainer sx={{
                maxHeight: 450
            }}>
                <Table
                    stickyHeader
                    sx={{
                        "& th": {
                            bgcolor: "#0F172A",
                            color: "#F1F5F9",
                            fontFamily: "verdana",
                            fontSize: "1.1rem",
                            borderColor: "#334155",
                            padding: "16px 24px"
                        },
                        "& td": {
                            // bgcolor: "#0F172A",
                            color: "#CBD5E1",
                            fontFamily: "verdana",
                            borderColor: "#334155",
                        },
                        "& tr:nth-of-type(even)": {
                            bgcolor: "#1E293B"
                        },
                        "& tr:nth-of-type(odd)": {
                            bgcolor: "#0F172A",
                        }
                    }}
                // size={"small"}
                >
                    <TableHead>
                        <TableRow sx={{
                            "& > th": {
                                fontSize: "1.5rem",
                                borderWidth: "2px"
                            }
                        }}>
                            <TableCell align={"center"} colSpan={Object.keys(rows[0]).length}>Order History</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{
                        "& .MuiTableCell-root": {
                            borderColor: "wheat",
                            padding: "16px 24px"
                        }
                    }}>
                        {rows.slice((page) * rowsPerPage, (page + 1) * rowsPerPage).map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.date.toDateString()}</TableCell>
                                <TableCell>${item.total.toString()}</TableCell>
                                <TableCell>{item.status.toString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter sx={{
                        "& td": {
                            color: "#CBD5E1"
                        }
                    }}>
                        <TableRow>
                            <TableCell rowSpan={5} />
                            <TableCell>Total Orders</TableCell>
                            <TableCell>{rows.length}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Costs</TableCell>
                            <TableCell>{(rows.reduce((total, row) => total + row.total, 0)).toFixed(3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Delivered</TableCell>
                            <TableCell>{(rows.reduce((total, row) => row.status === "delivered" ? total + 1 : total, 0)).toFixed(3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Shipped</TableCell>
                            <TableCell>{(rows.reduce((total, row) => row.status === "shipped" ? total + 1 : total, 0)).toFixed(3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Processing</TableCell>
                            <TableCell>{(rows.reduce((total, row) => row.status === "processing" ? total + 1 : total, 0)).toFixed(3)}</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
            <TablePagination
                component={"div"}
                sx={{
                    height: "200px",
                    // color: "green",
                    "& .MuiTablePagination-selectLabel": {
                        color: "#3730A3",
                        fontFamily: "verdana",
                        fontSize: "0.8rem"
                    },
                    "& .MuiTablePagination-select": {
                        color: "#3730A3",
                        fontFamily: "verdana",
                        fontSize: "0.8rem",
                        "& > svg": {
                            color: "#3730A3",
                        },
                    },
                    "& .MuiTablePagination-displayedRows": {
                        color: "#3730A3",
                        fontFamily: "verdana",
                        fontSize: "0.8rem",
                    },
                    "& .MuiTablePagination-actions": {
                        color: "#3730A3",
                        "& .Mui-disabled": {
                            color: "#C7D2FE"
                        },
                        "& > button > svg": {
                            fontSize: "1.2rem"
                        }
                    },
                }}
                rowsPerPageOptions={[10, 25, 100]}
                rowsPerPage={rowsPerPage}
                page={page}

                count={rows.length}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage} />

        </>
    )
}
