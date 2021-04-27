import { useState, useEffect } from 'react';
import { requestGifs } from '../helpers/GetGifs';
import { IGifMapped } from '../interfaces/gifs';
import { GifGriditem } from './GifGriditem';

import { useFetchGifs } from "../Hooks/useFetchGifs";

interface IGifGrid {
    category: string
}


export const GifGrid = ( props: IGifGrid ) => {

    const { category } = props;
    // const [images, setImages] = useState<IGifMapped[]>([])
    const { data: images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p> }

            <div className="card-grid">
                {
                    images.map( image => {
                        return <GifGriditem
                            key={ image.id }
                            image={ image } />
                    })
                }
            </div>
        </>
    )
}
