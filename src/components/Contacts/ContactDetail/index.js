import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { updateContacts } from '../../../action/contactAction'
import ContactForm from '../../ContactForm'

import styles from './contactDetail.module.scss'


const ContactDetail = () => {
  const { current, loading } = useSelector(state => state.contact)
  const dispatch = useDispatch()

  const submit = (data) => {
    dispatch(updateContacts(data))
  }

  const [onEdit, setOnEdit] = useState(false)

  useEffect(() => {
    setOnEdit(false)
  }, [current])

  return (
    loading.getDetail ?
      <div style={{ textAlign: "center", margin: "3rem" }}>Getting Detail...</div> :
      current ?
        <div className={styles.detail}>
          <div className={`${styles.detail__head} ${onEdit && styles.detail__head_edit}`}>
            <div style={!onEdit ? { position: "relative", top: "50%", transform: "translateY(-50%)" } : {}}>
              <div className={styles.identity}>
                <img src={current.photo !== 'N/A' ? current.photo : "./avatar.jpg"} alt="profile" />
                <div>
                  <p className={styles.name}>{`${current.firstName} ${current.lastName}`}</p>
                  <div className={styles.age}>
                    <p style={{ margin: "0px", fontSize: "1rem" }}>age</p>
                    <p style={{ marginTop: "0px" }}>{current.age}</p>
                  </div>
                </div>
              </div>
              <button className={styles.editButton} onClick={() => { onEdit ? setOnEdit(false) : setOnEdit(true) }}>
                {onEdit ? "Collapse" : "Edit"}
              </button>
            </div>
          </div>
          <div className={`${styles.detail__body} ${onEdit && styles.detail__body_edit}`}>
            <ContactForm current={current} onSubmit={submit} />
          </div>
        </div>
        :
        <div></div>
  )
}

export default ContactDetail
