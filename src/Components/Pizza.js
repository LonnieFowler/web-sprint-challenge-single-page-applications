import React, {useState, useEffect} from'react';
import {useParams} from "react-router-dom";


const OrderForm = () => {

    const [form, setForm] = useState({
       name:'',
    });

//     const handleSubmit = () => {
//         axios.post('https://reqres.in/api/orders', formValues)
//         .then(res => {
//           setUsers([res.data, ...users])
          
//      })
//         .catch(err => console.error(err));
//      }

//     const handleChange =(name,value) => {
//     validate(name, value);
//     setFormValues({...formValues, [name]:value});
//   }

//     const onChange = (evt) => {
//         const {name, value, checked, type} = evt.target;
//         const newValue = type ==='checkbox' ? checked : value;
//         change(name, newValue)
//     }
    
    return(<article>
    <h1>Pizza Order Form</h1>
    <form id='pizza-form'>
        <label>Enter your name
        <input id='name-input'
        type='text' 
        name=''/>
        </label>
        <label>Select Size
            <select id='size-dropdown'
            type=''
            name=''>
                <option value="12">12"</option>
                <option value="16">16"</option>
                <option value="22">22"</option>
                <option value="42">42"</option>
            </select>
        </label>
        <label>Pepperoni
            <input type='checkbox' name=''/>
        </label>
        <label>Mushroom
            <input type='checkbox' name=''/>
        </label>
        <label>Green Pepper
            <input type='checkbox' name=''/>
        </label>
        <label>Onion
            <input type='checkbox' name=''/>
        </label>
        <label>Extra Cheeze
            <input type='checkbox' name=''/>
        </label>
        <label>
            <input id='special-text' type='text' name=''/>
        </label>
        <button id="order-button" type='submit'>Submit</button>
    </form>
    
    </article>

    )
}

export default OrderForm