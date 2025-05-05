import { IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

import { AddShoppingCart as AddShoppingCartIcon } from "@mui/icons-material";

const images = [...new Array(15)].map((_item, index) => <img src={`https://picsum.photos/id/${index + 500}/200`} />)

function getSize(index: number) {
    if (!Boolean(index % 3)) {
        return { rows: 2, cols: 2 }
    } else if (!Boolean(index % 4)) {
        return { rows: 2, cols: 1 }
    }
    return { rows: 1, cols: 1 }
}


export default function ImageListCustomization() {
    return (
        <div>
            <ImageList
                cols={3} gap={0} rowHeight={400}>
                {images.map((image, index) => {
                    const { rows, cols } = getSize(index)
                    return (
                        <ImageListItem rows={rows} cols={cols} key={index} >
                            {image}
                            <ImageListItemBar
                                sx={{
                                    bgcolor: "rgb(255, 228, 230,0.7)",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    width: "10rem",
                                    height: "30%",
                                    borderRadius: "1rem",
                                    "& .MuiImageListItemBar-title": {
                                        fontSize: "1.2rem",
                                        fontFamily: "Verdana",
                                    },
                                    "& .MuiImageListItemBar-subtitle": {
                                        fontSize: "0.8rem",
                                        fontFamily: "Verdana",
                                    },
                                    "& .MuiImageListItemBar-titleWrap": {
                                        textAlign: "center",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 1,
                                    },
                                    "& .MuiImageListItemBar-actionIcon": {
                                        alignSelf: "flex-start"
                                    },
                                    "& > *": {
                                        color: "rgb(15, 23, 43)"
                                    }
                                }}
                                title={"Example Title"}
                                subtitle={"Example Subtitle"}
                                actionPosition={"left"}
                                actionIcon={
                                    <IconButton>
                                        <AddShoppingCartIcon sx={{ color: "rgb(15, 23, 43)" }} />
                                    </IconButton>
                                } />
                        </ImageListItem>
                    )
                })}
            </ImageList>
        </div>
    )
}
