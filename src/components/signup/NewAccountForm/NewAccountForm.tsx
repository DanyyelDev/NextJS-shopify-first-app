"use client";
import { useState } from "react";
import styles from "./NewAccountForm.module.sass";
import { handleCreateUser } from "app/actions";
import { Toaster, toast } from 'sonner'
import { notify } from "app/toast-sonner/notify";

export const NewAccountForm = () => {

  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const hadleSubmit = async (event:any) => {

    event.preventDefault()
    const formData = new FormData(event.target)
    if (formData.get('password') !== formData.get('password_confirmation')) {
      notify("Passwords do not match!")
      return
    }
    await handleCreateUser(formData)
    notify("User successfully created!")
  }

  return (
    <div className={styles.NewAccountForm}  >
      <h1 className={styles.NewAccountForm__title}>New Account</h1>
      <Toaster />
      <form className={styles.NewAccountForm__form} onSubmit={hadleSubmit}>
        <input type="text" name="firstName" placeholder="Name" disabled={loading} required/>
        <input type="text" name="lastName" placeholder="Lastname" disabled={loading} required/>
        <input type="text" name="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" disabled={loading} required/>
        <input type="text" name="phone" placeholder="phone number" pattern="^[0-9]*$" disabled={loading} required/>
        <input type="password" name="password" placeholder="password" disabled={loading} required/>
        <input type="password" name="password_confirmation" placeholder="re-type password" disabled={loading} required/>
        <input type="submit" name="submit" value="Crear cuenta" disabled={loading} />
      </form>
      {errors.length > 0 && 
        <div>
          {errors.map((error, index) => {
            return <p key={index} className={styles.NewAccountForm__error}>{error}</p>
          })}
        </div>
      }
    </div>
  );
}