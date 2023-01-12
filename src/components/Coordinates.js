import React, {useState, useEffect} from 'react';

const Coordinates = () => {
    const [coordinates, setCoordinates] = useState(null);
    const [loading , setLoading] = useState(true);


    // use geolocation API to get coordinates

    const getCoordinates = async () => {
        try{
            setLoading(true);
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });
            const {latitude, longitude} = position.coords;
            console.log (latitude, longitude);
            setCoordinates({latitude, longitude});
            setLoading(false);
        } catch (error) {
            console.log(error);
            throw error;
        }
    };


    useEffect (() => {
        getCoordinates();
    }, []);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {coordinates && (
                <>
                    <p>Latitude: {coordinates.latitude}</p>
                    <p>Longitude: {coordinates.longitude}</p>
                </>
            )
            }
        </div>
    );
};
    
export default Coordinates;