import React from 'react'
import "../styles/RegisterStyle.css";
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import{useDispatch} from 'react-redux'
import { showLoading ,hideLoading} from '../redux/features/alertSlice';


import {Form,Input,message} from 'antd'



 const Registration=() =>{
    const navigate =useNavigate();
    const dispatch =useDispatch()

    


    const onfinishHandler = async(values) => {
        try{
            dispatch(showLoading())
                   const res =await axios.post('/api/v1/user/register' ,values)
                   dispatch(hideLoading())
                   if(res.data.success){
                    message.success('Register Successfully')
                    navigate('/login')
                   }
                   else{
                    message.error(res.data.message)
                   }
        }
        catch(error){
            dispatch(hideLoading());
            console.log(error);
            message.error('Something Went Wrong')
        }
    }
   

    return (
        <>
       
             <div className="form-container">
                <Form layout='vertcal' onFinish={onfinishHandler} className ="register-form">
                    <h3 className ="text-center">Register Form</h3>
                    <Form.Item label="Name" name="name">
                        <Input type ="text" required/>
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input type ="text" required/>
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type ="text" required/>
                    </Form.Item>
                    <Link to="/login" className ="m-2">Already user login here </Link>
                    <button className ="btn btn-primary">Register</button>

                </Form>

             </div>
            
           
        </>

    )
 }
 export default Registration
