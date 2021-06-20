import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { getContacts, getContactsDetails, addContacts } from '../../action/contactAction'
import ContactItem from './ContactsList/ContactItem'
import ContactDetail from './ContactDetail'
import ContactForm from '../ContactForm'
import Modal from '../Modal'

import styles from './contacts.module.scss'

const Contacts = ({ getContacts, getContactsDetails, addContacts, contact: { contacts, loading } }) => {
  // const dispatch = useDispatch()
  // const { contacts, loading } = useSelector(state => state.contact)

  const [selectedItem, setSelectedItem] = useState();
  const [addModalOpen, setModalOpen] = useState(false);

  const getSelectedItem = (id) => {
    setSelectedItem(id)
    getContactsDetails(id)
  }

  const postContacts = (data) => {
    addContacts(data)
  }

  useEffect(() => {
    getContacts()
    // eslint-disable-next-line
  }, [loading.addData])

  useEffect(() => {
    if (!loading.addData) {
      setModalOpen(false)
    }
  }, [loading.addData])


  return (
    <>
      <section className={styles.contacts}>
        <div className={styles.contacts__list}>
          <div className={styles.contacts__list_head}>
            <p>Contacts</p>
            {/* <input type="text" placeholder="Search..." /> */}
          </div>
          <div className={styles.contacts__list_body}>
            {
              loading.getData ?
                <div style={{ fontSize: "2rem", margin: "2rem" }}>Loading contacts...</div> :
                contacts ?
                  contacts.map((contact, i) => (
                    <div
                      className={`${styles.contactItem} ${selectedItem === contact.id ? styles.ContactItem__active : ''}`}
                      key={contact.id}
                      onClick={() => getSelectedItem(contact.id)}
                    >
                      <ContactItem contact={contact} />
                    </div>
                  ))

                  :

                  <div>No Contacts Available</div>
            }
            <button className={styles.button__Add} onClick={() => setModalOpen(true)}>
              <i class="fas fa-user-plus"></i>
            </button>
          </div>
        </div>
        <ContactDetail />


      </section>

      <Modal open={addModalOpen}>
        <ContactForm onSubmit={postContacts} loading={loading.addData} />
        <br />
        <div style={{ textAlign: 'center' }}>
          <button onClick={() => setModalOpen(false)}>
            Close
          </button>
        </div>
      </Modal>

    </>

  )
}

const mapStateToProps = (state) => ({
  contact: state.contact
})

export default connect(mapStateToProps, { getContacts, getContactsDetails, addContacts })(Contacts);
