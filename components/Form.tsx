import {useFormik} from "formik"
import * as Yup from "yup"
import "animate.css"
import styles from "@/styles/Form.module.css"
import Link from "next/link"


function Form(){
    const formik = useFormik({
        initialValues: {
            firstname: "",
            // lastname: "",
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
            // lastname: Yup.string()
            //              .max(20, "Maximum 20 characters")
            //             .required("Required"),
            email: Yup.string()
                        .email("Not a valid email")
                        .required("Required"),
            policyChecked: Yup.boolean().oneOf([true], "Please accept the Privacy policy.").required()
        })
    })
    
    return (
        <section id="form" className={styles.sectionForm}>
            <h2 className={`${styles.sectionFormTitle} animate__animated animate__zoomIn`}>Get your detailed quote.</h2>
            <form onSubmit={formik.handleSubmit} className={`${styles.form} shadow`}>
                <h3 className={styles.formAction}>Solve road issues today</h3>
                <p className={styles.formInfo}>With your permission, we will contact you to provide assessment.</p>
                <p className={styles.formInfo}> Please provide your name and email.</p>
                <div className={styles.inputContainer}>
                    <input 
                    className={styles.formInput}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}  
                    value={formik.values.firstname} 
                    type="text" 
                    name="firstname" 
                    id="" 
                    aria-label="firstname"
                    placeholder="Name"
                    />
                    {formik.touched.firstname&&formik.errors.firstname? 
                        <p className={styles.errorMessage}>{formik.errors.firstname}</p>
                        : 
                        <p className={styles.errorMessage}>{" "}</p>
                    }
                </div>

                {/* <div className={styles.inputContainer}>
                    <input 
                    className={styles.formInput} 
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
                        <p className={styles.errorMessage}>{formik.errors.lastname}</p>
                        : 
                        <p> </p>
                    }
                </div> */}

                <div className={styles.inputContainer}>
                    <input 
                    className={styles.formInput} 
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange} 
                    value={formik.values.email} 
                    type="email" 
                    name="email" 
                    id="" 
                    aria-label="Email"
                    placeholder="Email"
                    />
                    {formik.touched.email&&formik.errors.email? 
                        <p className={styles.errorMessage}>{formik.errors.email}</p>
                        : 
                        <p> </p>
                    }
                </div>

                <div className={styles.inputContainer}>
                    <div className={styles.privacyPolicyContainer}>
                        <input 
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange} 
                            checked={formik.values.policyChecked} 
                            type="checkbox" 
                            name="policyChecked" 
                            className={styles.privacyPolicyCheckbox} 
                            aria-label="privacy policy checkbox"
                            />
                        <p className={styles.privacyPolicyStatement}>I have read and understand the <Link href="privacy">privacy policy</Link></p>
                    </div>
                        {formik.touched.policyChecked&&formik.errors.policyChecked? 
                            <p className={styles.errorMessage}>{formik.errors.policyChecked}</p>
                            : 
                            <p> </p>
                        }
                </div>

                <button 
                    type="submit" 
                    className={styles.formBtnSubmit}
                    aria-label="submit button">
                        Get a quote
                </button>
                <p className={styles.privacyPolicyStatement}>We respect your right to privacy.</p>
            </form>
        </section>
    )
}

export default Form