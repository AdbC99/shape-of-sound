import React, {useEffect, useState} from 'react';
import ImageGrid from './ImageGrid';

// This extension of an image grid goes to an endpoint and fetches a list
// of images to display in an ordinary image grid
const DynamicImageGrid = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(props.url)
            .then((resp)=>{
                return resp.json();
            })
            .then((json)=>{
                setData(json);
            })
            .catch((err)=>{
                // TODO: Show an error screen
                setData([]);
            });

        return () => {
            // DO NO CLEANUP
        };
    });

    return (
        <ImageGrid rows={data}/>
    );
}

export default DynamicImageGrid;