import React from 'react'
import { useDispatch } from 'react-redux'

import { deleteContacts } from '../../../action/contactAction'
import { Avatar, TrashCan } from '../../../assets/assets'

import styles from './contactItem.module.scss'

const ContactItem = ({ contact: { id, firstName, lastName, photo } }) => {

  const dispatch = useDispatch()

  const deleteContact = (id) => {
    dispatch(deleteContacts(id))
  }

  return (
    <div className={styles.item}>
      <div className={styles.identity}>
        {
          <img src={photo !== "N/A" ? photo : "./avatar.jpg"} alt="Profile" />
        }

        <p>{`${firstName} ${lastName}`}</p>
      </div>
      <button className={`${styles.button}`} onClick={() => deleteContact(id)}>
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
  )
}

export default ContactItem
