import React, {useState} from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Goku']);


    return (
        <>  
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>

            <hr/>


            <ol>
                {
                    categories.map( (category, i) =>  (
                        <GifGrid 
                            key = {category}
                            category = {category} 
                        /> 
                    ))
                    
                }
            </ol>
        </>
    )

}

export default GiftExpertApp;