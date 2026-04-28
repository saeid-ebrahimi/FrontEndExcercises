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

export default function ImageListFunctionality() {
    return (
        <div>
            <ImageList variant={"woven"} cols={3} gap={0} rowHeight={400}>
                {images.map((image, index) => <ImageListItem key={index} >{image}</ImageListItem>)}
            </ImageList>
            <hr />
            <ImageList
                // variant={"quilted"}
                variant={"masonry"}
                cols={3} gap={0} rowHeight={400}>
                {images.map((image, index) => {
                    const { rows, cols } = getSize(index)
                    return (
                        <ImageListItem rows={rows} cols={cols} key={index} >
                            {image}
                            <ImageListItemBar
                                position={"top"}
                                title={"Example Title"}
                                subtitle={"Example Subtitle"}
                                actionPosition={"left"}
                                actionIcon={<IconButton> <AddShoppingCartIcon sx={{ color: "white" }} /></IconButton>} />
                        </ImageListItem>
                    )
                })}
            </ImageList>
        </div>
    )
}
