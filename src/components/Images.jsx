import React, { useEffect, useState } from "react";
import axios from "axios";
import ClockLoader from "react-spinners/ClockLoader";
import ImageList from "./ImageList";

import './../App.css'


function Images() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        loadImages();
    }, []);

    const loadImages = async () => {
        try {
            const data = await axios
                .get(`https://cors-anywhere.herokuapp.com/http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0`)
                .then((res) => {
                    console.log(res.data);
                    setImages(res.data);
                });
            setLoading(true);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h3 className="center" style={{ color: 'rgb(153 188 208)' }}> Bill Easy Task</h3>
            {
                loading ?
                    <ImageList image={images} loading={loading} /> :
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ClockLoader
                            color="#9013FE" loading={!loading} size={100} />
                    </div>
            }
        </div>
    );
}

export default Images;
