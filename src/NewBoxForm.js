import React, {useState} from 'react';
import {v4 as uuid} from 'uuid'

// uuid is universally unique identifier

function NewBoxForm({createBox}) {
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
    });

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    // get input values, then clear them after submission
    const gatherInput = evt => {
        evt.preventDefault();
        createBox({ ...formData, id: uuid() })
        setFormData({ height: "", width: "", backgroundColor: ""})
    }

    return (
        <div>
            <form onSubmit = {gatherInput}>
                <div>
                    <label htmlFor='height'>height</label>
                    <input 
                        onChange = {handleChange} 
                        type = "text"
                        name = "height"
                        value = {formData.height}
                        id = "height"
                    />
                </div>
                <div>
                    <label htmlFor='width'>width</label>
                    <input 
                        onChange = {handleChange} 
                        type = "text"
                        name = "width"
                        value = {formData.width}
                        id = "width"
                    />
                </div>
                <div>
                    <label htmlFor='backgroundColor'>background color</label>
                    <input 
                        onChange = {handleChange} 
                        type = "text"
                        name = "backgroundColor"
                        value = {formData.backgroundColor}
                        id = "backgroundColor"
                    />
                </div>
                <button id = 'newBoxButton'>add a new box button!</button>
            </form>
        </div>
    )
}

export default NewBoxForm;