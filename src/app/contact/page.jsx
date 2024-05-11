"use client"

import Image from 'next/image';
import styles from './Contact.module.css';
import { useFormState } from "react-dom";
import { contactForm } from '@/lib/actions';

const Contact = () => {
  const[state,contactFormState]=useFormState(contactForm,{
    email:"",
    errors:{
      text:undefined
    }
  })
    return (
        <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action={contactFormState} className={styles.form}>
        <input defaultValue={state.email} type="text" placeholder="Email Address" name='email' />
          {/* <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Phone Number (Optional)" /> */}
          {/* <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea> */}
          <button>Send</button>
          {state?.errors.text}
        </form>
      </div>
    </div>
    );
};

export default Contact;