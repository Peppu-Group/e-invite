<template>
    <MDBModal v-model="showModal" size="md" staticBackdrop tabIndex="-1">
      <!-- Bootstrap modal structure inside -->
      <div class="modal-header">
        <h5 class="modal-title">Send Mail</h5>
        <MDBBtn class="btn-close" color="none" @click="closeModal" />
      </div>
  
      <div class="modal-body">
        <form @submit.prevent="handleSubmit">
          <label for="formSubject" class="form-label">Enter Mail Subject</label>
          <input
            class="form-control form-control-sm"
            id="formSubject"
            placeholder="Enter mail subject"
            v-model="subject"
          />
  
          <div class="mt-2 mb-2">
            <label for="formEmail" class="form-label">
              Enter Email Address(s)
            </label>
            <br />
            <small>You can enter more than one email address separated by comma</small>
            <textarea
              id="formEmail"
              placeholder="Enter Email Address(s)"
              v-model="emails"
              class="form-control"
            ></textarea>
          </div>
  
          <div class="d-block text-center mt-3">
            <MDBSpinner v-if="loading" class="mx-2" color="info">
              <span class="visually-hidden">Loading...</span>
            </MDBSpinner>
            <MDBBtn :disabled="loading" color="info" type="submit">
              Send Mail
            </MDBBtn>
          </div>
        </form>
        <hr />
      </div>
  
      <div class="modal-footer">
        <MDBBtn color="danger" @click="closeModal">Close</MDBBtn>
      </div>
    </MDBModal>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import { MDBModal, MDBBtn, MDBSpinner } from 'mdb-vue-ui-kit'
  import { sendNewsletter, validateEmail } from '../lib'
  
  // Props from parent
  const props = defineProps({
    isOpenMailModal: Boolean,
    toggleMailModal: Function,
    mailContent: String
  })
  
  // Local state
  const showModal = ref(props.isOpenMailModal)
  const loading = ref(false)
  const subject = ref('')
  const emails = ref('')
  
  // Sync with parent
  watch(
    () => props.isOpenMailModal,
    (val) => (showModal.value = val)
  )
  
  // Close modal
  const closeModal = () => props.toggleMailModal()
  
  // Email validation
  const verifyEmails = (emailsString) => {
    const list = emailsString.split(',').map((e) => e.trim())
    return list.every((email) => validateEmail(email))
  }
  
  // Submit handler
  const handleSubmit = async () => {
    try {
      if (subject.value.trim().length < 10) return alert('Enter Email Subject')
      if (emails.value.trim().length < 10)
        return alert('Enter a valid email or emails separated by comma')
      if (!verifyEmails(emails.value))
        return alert('Please, enter only valid email addresses')
      if (!props.mailContent) return alert("You can't send empty content")
  
      loading.value = true
      const res = await sendNewsletter({
        subject: subject.value,
        mailContent: props.mailContent,
        emails: emails.value
      })
      subject.value = ''
      emails.value = ''
      loading.value = false
      alert(res.message)
    } catch (err) {
      console.error('Send mail failed:', err)
      loading.value = false
    }
  }
  </script>
  