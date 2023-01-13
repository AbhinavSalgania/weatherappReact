import React, { useState, useEffect } from 'react';

const ImageApi = process.env.REACT_APP_PEXELS_API_KEY;

// using weather.city to get the city name and pass it to the image api
// to get images of that city

const Image = (props) => {
    const {city} = props;
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        if(city && city.length > 0) {
            getImageData(city);
        }
    }, [city]);

    const getImageData = async (city) => {
        const response = await fetch(`https://api.pexels.com/v1/search?query=${city}&per_page=1`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: ImageApi
            }
        });
        const data = await response.json();
        const image = data.photos[0].src.large;
        setImageData(image);
    };


    return (
        <div className='cityimg'>
            {imageData && <img src={imageData} alt={city} />}
        </div>
    )
}

export default Image;



