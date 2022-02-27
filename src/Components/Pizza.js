import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';

const OrderForm = (props) => {

    const formSchema = yup.object().shape({
        name: yup.string().min(2, "name must be at least 2 characters"),
        size: yup.string(),
        topping1: yup.bool(),
        topping2: yup.bool(),
        topping3: yup.bool(),
        topping4: yup.bool(),
        special: yup.string() 
      
    })

    const [error, setError] = useState({
        name: "",
        size: '',
        topping1: '',
        topping2: '',
        topping3: '',
        topping4: '',
        special: '' 
    })

    const [disabled, setDisabled] = useState(true);

    
    const [form, setForm] = useState({
        name:'',
        size: '12',
        topping1: false,
        topping2: false,
        topping3: false,
        topping4: false,
        special: '' 
    });

    const {orderSubmit} = props

    const validate = (evt) => {
        yup.reach(formSchema, evt.target.name)
            .validate(
                evt.target.type ==='checkbox' ? evt.target.checked : evt.target.value
            )
            .then(() => {
                setError({...error, [evt.target.name]: ""})
            })
            .catch((error) => {
                setError({...error, [evt.target.name]: error.errors[0]})
            })
    }
    
      const onChange = (evt) => {
        validate(evt)
        const value = evt.target.type ==='checkbox' ? evt.target.checked : evt.target.value;
        setForm({...form,[evt.target.name]: value});
      }

    const onSubmit = (evt) => {
         evt.preventDefault()
         orderSubmit(form)
         setForm({
             name:'',
             size: '',
             topping1: false,
             topping2: false,
             topping3: false,
             topping4: false,
             special: ''
          })
         axios.post('https://reqres.in/api/orders', form)
             .then(res => {
                console.log(res.data)
             })
             .catch(err => console.log(err))
       
       }

      useEffect(() => {
        formSchema.isValid(form).then((valid) => {
        setDisabled(!valid)
        })
      },[form])
    
    return(
        <article>
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
                <button id="order-button" type='submit' disabled={disabled} >Add to Order</button>
            </form>
            <p>{error.name}</p>
        </article>
    )
}

export default OrderForm