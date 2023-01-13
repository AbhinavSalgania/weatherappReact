import React, { useState, useEffect } from 'react';

const TimeApi = process.env.REACT_APP_TIMEZONE_API_KEY;

// Time API needs coordinates to work

const Time = (props) => {
    const {coordinates} = props;
    const [timeData, setTimeData] = useState(null);

    useEffect(() => {
        if(coordinates && coordinates.latitude && coordinates.longitude) {
            getTimeData(coordinates.latitude, coordinates.longitude);
        }
    }, [coordinates]);

    const getTimeData = async (lat, lon) => {
        const response = await fetch('https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lon}&timestamp=1331161200&key=${TimeApi}');
        const timeData = await response.json();
        const timeString = new Date().toLocaleString('en-US',{
            timeZone: timeData.timeZoneId,
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
        setTimeData({formatted: timeString});

    };

    // create a new element with classname time

    return (
        <div className="time">
            {timeData && timeData.formatted}
        </div>
    )
};

export default Time;

