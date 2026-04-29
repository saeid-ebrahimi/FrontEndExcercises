import { Box, Divider, IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material"

import photo1 from "../../assets/229234.jpg";
import photo2 from "../../assets/40051.jpg";
import photo3 from "../../assets/640990.jpg";
import photo4 from "../../assets/640994.jpg";
import photo5 from "../../assets/641048.jpg";
import { AddShoppingCart } from "@mui/icons-material";

const photos = [photo1, photo2, photo3, photo4, photo5]
const images = [...new Array(15)].map((_item, index) => <img src={photos[index % photos.length]} />)

function getSize(index: number) {
    if (!Boolean(index % 3)) {
        return { rows: 2, cols: 2 }
    } else if (!Boolean(index % 4)) {
        return { rows: 2, cols: 1 }
    }
    return { rows: 1, cols: 1 }
}

export function ImageListDemo() {
    return <Box>
        {/* <ImageList variant={"woven"} cols={3} rowHeight={400} >
            {images.map((image, index) => <ImageListItem key={index}>{image}</ImageListItem>)}
        </ImageList> */}
        {/* <Divider className={"w-full"} /> */}
        <ImageList variant={"quilted"} cols={3} rowHeight={400} >
            {images.map((image, index) => <ImageListItem rows={getSize(index).rows} cols={getSize(index).cols} key={index}>{image}</ImageListItem>)}
        </ImageList>
        <Divider className={"w-full"} />
        <ImageList variant={"masonry"} cols={3} rowHeight={400} >
            {images.map((image, index) => {
                const { rows, cols } = getSize(index)
                return (<ImageListItem rows={rows} cols={cols} key={index}>
                    {image}
                    <ImageListItemBar
                        position={"top"}
                        title={"Example Title"}
                        subtitle={"Example Subtitle"}
                        actionPosition={"left"}
                        actionIcon={
                            <IconButton>
                                <AddShoppingCart sx={{ color: "white" }} />
                            </IconButton>} />
                </ImageListItem>)
            })
            }
        </ImageList>
    </Box>
}