import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

import styles from './contactForm.module.scss'

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().nullable(true),
  age: yup.string().nullable(true),
  photo: yup.string().nullable(true)
})

const ContactForm = ({ current, loading = false, onSubmit }) => {

  const { formState: { errors }, register, handleSubmit, reset } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    reset(current)
  }, [current, reset])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__group}>
        <label>First Name</label>
        <input
          type="text"
          placeholder="first name"
          defaultValue={current ? current.firstName : ''}
          {...register('firstName')}
        />
      </div>
      <div className={styles.form__group}>
        <label>Last Name</label>
        <input
          type="text"
          placeholder="last name"
          defaultValue={current ? current.lastName : ''}
          {...register('lastName')}
        />
      </div>
      <div className={styles.form__group}>
        <label>Age</label>
        <input
          type="text"
          placeholder="Age"
          defaultValue={current ? current.age : ''}
          {...register('age')}
        />
      </div>
      <div className={styles.form__group}>
        <label>Photo</label>
        <input
          type="text"
          placeholder="Photo"
          defaultValue={current ? current.photo : 'N/A'}
          {...register('photo')}
        />
      </div>
      <button disabled={loading}>
        SUBMIT
      </button>
    </form>
  )
}

export default ContactForm
