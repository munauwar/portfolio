import React, { useState } from 'react'

import Footer from '../Footer';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from 'react-toastify';

import '../../App.css'
import './Contact.css'

const Contact = ()  => {
    const { reset, register, handleSubmit, formState: {errors, isSubmitSuccessful}} = useForm();
    const [disabled, setDisabled] = useState(false);

    const toastifySucces = () => {
        toast.success("Form sent.", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const toastifyError =  () => {
        toast.error("Something went wrong..", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    const onSubmit = async (formdata) => {
        try {
            setDisabled(true);
            
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID, 
                process.env.REACT_APP_TEMPLATE_ID, 
                formdata, 
                process.env.REACT_APP_USER_ID
            );

            reset();
            toastifySucces();
            setDisabled(false);
        } catch(e) {
            toastifyError();
        }
    }

    return (
        <>
        <div className="container">
            <div className="split left">
                <div className="content-form">
                    <h2 className="header-contact">Contact.</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <input 
                            {...register("name", { required: true })}
                            name="name"
                            type="text"
                            className="name" 
                            placeholder="Name" 
                        />
                        {errors.name && (
                            <div className="errors" style={{color: "red"}}>
                                Please fill in your name!
                            </div>
                        )}
                        <input
                            {...register("email", { required: true })}
                            name="email"
                            type="text" 
                            className="email" 
                            placeholder="Email" 
                        />
                        {errors.email && (
                            <div className="errors" style={{color: "red"}}>
                                Please fill in your email!
                            </div>
                        )}
                        <input 
                            type="text" 
                            className="subject" 
                            name="subject" 
                            placeholder="Subject"
                        />
                        <textarea 
                            {...register("message", { required: true })}
                            type="text"
                            className="message" 
                            name="message" 
                            placeholder="Message"
                        />
                        {errors.message && (
                            <div className="errors" style={{color: "red"}}>
                                Please leave message behind.
                            </div>
                        )}
                        <button type="submit" className="submit-btn" disabled={disabled} >Submit</button>
                        {isSubmitSuccessful && (
                            <div className="showpopup">
                                <ToastContainer 
                                    position="bottom-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                />
                            </div>
                        )}
                    </form>
                </div>
            </div>

            <div className="split right contact">
                <img src="images/maps.jpeg" alt="" className='image-contact'></img>
            </div>

        </div>
        <Footer />
        </>
    )
}

export default Contact;
