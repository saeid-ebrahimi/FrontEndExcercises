"use client"
import classes from "./image-picker.module.css";
import {useRef, useState} from "react";
import Image from "next/image";
export default function ImagePicker({label, name}){
    const [pickedImage, setPickedImage] = useState();
    const imageInput = useRef();
    const handlePickClick = (evt) => {
        imageInput.current.click();
    }
    const handleImageChange = (evt) => {
        const file = evt.target.files[0];
        if (!file){
            setPickedImage(null)
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    }
    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet.</p>}
                {pickedImage && <Image src={pickedImage} alt={"the image selected by user"} fill/>}
            </div>
            <input className={classes.input} type={"file"} id={name} accept={"image/png, image/jpeg"} name={name} ref={imageInput} onChange={handleImageChange} />
            <button className={classes.button} type={"button"} onClick={handlePickClick} >
                Pick an Image
            </button>
        </div>
    </div>
}