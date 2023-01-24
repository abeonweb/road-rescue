import React from "react"
import {useFormik} from "formik"
import * as Yup from "yup"
import "animate.css"
import "../css/Form.css"
import Link from "next/link"


function Form(){
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            policyChecked: false
        },
        onSubmit: values=>{
            alert(JSON.stringify(values, null, 2))
        },

        validationSchema: Yup.object({
            firstname: Yup.string()
                         .max(20, "Maximum 20 characters")
                        .required("Required"),
            lastname: Yup.string()
                         .max(20, "Maximum 20 characters")
                        .required("Required"),
            email: Yup.string()
                        .email("Not a valid email")
                        .required("Required"),
            policyChecked: Yup.boolean().oneOf([true], "Please accept the Privacy policy.").required()
        })
    })
    
    return (
        <section id="form" className="section__form">
            <h2 className="section__form--title animate__animated animate__zoomIn">Get your detailed quote.</h2>
            <form onSubmit={formik.handleSubmit} className="form shadow">
                <h3 className="form--action">Solve road issues today</h3>
                <p className="form__info">With your permission, we will contact you to provide assessment.</p>
                <p className="form__info"> Please provide your name and email.</p>
                <div className="input-container">
                    <input 
                    className="form__input"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}  
                    value={formik.values.firstname} 
                    type="text" 
                    name="firstname" 
                    id="" 
                    aria-label="firstname"
                    placeholder="First Name"
                    />
                    {formik.touched.firstname&&formik.errors.firstname? 
                        <p className="error-message">{formik.errors.firstname}</p>
                        : 
                        null
                    }
                </div>

                <div className="input-container">
                    <input 
                    className="form__input" 
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange} 
                    value={formik.values.lastname} 
                    type="text" 
                    name="lastname" 
                    id="" 
                    aria-label="lastname"
                    placeholder="Last Name"
                    />
                    {formik.touched.lastname&&formik.errors.lastname? 
                        <p className="error-message">{formik.errors.lastname}</p>
                        : 
                        null
                    }
                </div>

                <div className="input-container">
                    <input 
                    className="form__input" 
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange} 
                    value={formik.values.email} 
                    type="email" 
                    name="email" 
                    id="" 
                    aria-label="email"
                    placeholder="email"
                    />
                    {formik.touched.email&&formik.errors.email? 
                        <p className="error-message">{formik.errors.email}</p>
                        : 
                        null
                    }
                </div>

                <div className="input-container">
                    <div className="privacy-policy-container">
                        <input 
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange} 
                            checked={formik.values.policyChecked} 
                            type="checkbox" 
                            name="policyChecked" 
                            className="privacy-policy-checkbox" 
                            aria-label="privacy policy checkbox"
                            />
                        <p className="privacy-policy-statement">I have read and understand the <Link href="privacy">privacy policy</Link></p>
                    </div>
                        {formik.touched.policyChecked&&formik.errors.policyChecked? 
                            <p className="error-message">{formik.errors.policyChecked}</p>
                            : 
                            null
                        }
                </div>

                <button 
                    type="submit" 
                    className="form__btn--submit" 
                    aria-label="submit button">
                        Get a quote
                </button>
                <p className="privacy-policy-statement">We respect your right to privacy.</p>
            </form>
        </section>
    )
}

export default Form