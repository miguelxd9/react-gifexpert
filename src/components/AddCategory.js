import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const inputHandleChange = (e) => {
        
        setInputValue(e.target.value);

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if(inputValue.trim().length > 0){
            setCategories( cat => [inputValue, ...cat]);
            setInputValue('');
        }
        

    }

    return (
        <form onSubmit = { handleSubmit }>
            <input 
                type="text"
                value={inputValue}
                onChange = { inputHandleChange }
            />
        </form> 
    )

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;