import React, {useState, useEffect} from'react';
import axios from 'axios';

const OrderForm = () => {

    const [form, setForm] = useState({
       name:'',
       size: '',
       topping1: false,
       topping2: false,
       topping3: false,
       topping4: false,
       special: ''
    });

    const onSubmit = () => {
        axios.post('https://reqres.in/api/orders', form)
            .then(res => {
            console.log;
          
      }).catch(err => console.error(err))
      }

      const onChange = (evt) => {
        const value = evt.target.type ==='checkbox' ? evt.target.checked : evt.target.value;
        setForm({
            ...form,
        [evt.target.name]: value
  });
      }
    
    return(<article>
    <h1>Pizza Order Form</h1>
    <form id='pizza-form' onSubmit={onSubmit}>
        <label>Enter your name
        <input id='name-input'
        type='text' 
        name='name'
        value={form.name.value}
        onChange={onChange}
        />
        </label>
        <label>Select Size
            <select id='size-dropdown'
            type=''
            name='size'
            value={form.size.value}
            onChange={onChange}
            >
                <option value="12">12"</option>
                <option value="16">16"</option>
                <option value="22">22"</option>
                <option value="42">42"</option>
            </select>
        </label>
        <label>Pepperoni
            <input type='checkbox' 
            name='topping1'
            onChange={onChange}
            checked={form.topping1}
            />
        </label>
        <label>Mushroom
            <input type='checkbox' 
            name='topping2'
            onChange={onChange}
            checked={form.topping2}
            />
        </label>
        <label>Green Pepper
            <input type='checkbox' 
            name='topping3'
            onChange={onChange}
            checked={form.topping3}
            />
        </label>
        <label>Onion
            <input type='checkbox' 
            name='topping4'
            onChange={onChange}
            checked={form.topping4}
            />
        </label>
        <label>
            <input id='special-text' 
            type='text' 
            name='special'
            value={form.special.value}
            onChange={onChange}
            />
        </label>
        <button id="order-button" type='submit'>Submit</button>
    </form>
    
    </article>

    )
}

export default OrderForm