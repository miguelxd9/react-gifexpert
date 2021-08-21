import React from 'react';
//import React, {useState, useEffect} from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {
   
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>

            {loading && <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>}

            {
            <div className="card-grid">            
                <ol>
                    {
                        images.map( img => (


                            <GifGridItem 
                                key = {img.id}
                                {...img}
                            />

                        ))
                    }
                    
                </ol>
            </div>
            }

        </>
    )

}


export default GifGrid;