import React from "react";
import { useSelector } from "react-redux";
import GalleryItem from "./GalleryItem/GalleryItem";
import './GalleryList.css';

export default function GalleryList() {
    const images = useSelector((state) => state.State.images);
    console.log('img', images);


    return (
        <div className='galleryList'>
            {
                images && images.map((item, index) => {
                    return <GalleryItem item={item} key={index} />
                })
            }
        </div>
    )
}