import { Skeleton } from "@mui/material"
import { useEffect, useState } from "react"

export function SkeletonFunctionality() {
    const div = <div style={{ width: "8rem", height: "8rem", backgroundColor: "#334155" }}></div>
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => { setLoading(false) }, 3000)
    }, [])
    return (
        <>
            <Skeleton />
            <Skeleton animation={"wave"} variant={"circular"} width={50} height={50} />
            <Skeleton variant={"rounded"} >{div}</Skeleton>
            {loading ? <Skeleton variant={"rectangular"} >{div}</Skeleton> : div}
        </>
    )
}
