<template>
    <MDBModal v-model="showModal" size="xl" staticBackdrop tabIndex="-1">
      <div class="modal-header">
        <h5 class="modal-title">Media Gallery</h5>
        <MDBBtn class="btn-close" color="none" @click="closeModal"></MDBBtn>
      </div>
  
      <div class="modal-body">
        <!-- File upload form -->
        <form @submit.prevent>
          <label for="formFileSm" class="form-label">Select File(s)</label>
          <input
            class="form-control form-control-sm"
            id="formFileSm"
            type="file"
            multiple
            @change="handleFileInputChange"
          />
  
          <!-- Preview files -->
          <PreviewFiles :files="rawFiles" />
  
          <div class="d-block text-center mt-3">
            <MDBSpinner v-if="loading" class="mx-2" color="info">
              <span class="visually-hidden">Loading...</span>
            </MDBSpinner>
            <MDBBtn :disabled="loading" color="info" @click="handleFileUpload">
              Upload
            </MDBBtn>
          </div>
        </form>
  
        <hr />
  
        <!-- Media gallery -->
        <MDBRow id="mediaLibrary">
          <MDBCol
            v-for="f in photoFiles"
            :key="f.id"
            lg="4"
            class="images mb-2"
          >
            <img
              :src="f.url"
              :id="f.id"
              class="img-fluid hover-shadow"
              :alt="f.filename"
              style="width: 100%; height: 200px; object-fit: cover; cursor: pointer; z-index: 2; border-radius: 5px;"
            />
            <div class="d-block text-center mt-2">
              <MDBBtn rounded color="secondary" @click="copyToClipboard(f.url)">
                Copy
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
  
      <div class="modal-footer">
        <MDBBtn color="danger" @click="closeModal">Close</MDBBtn>
      </div>
    </MDBModal>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import { MDBModal, MDBBtn, MDBSpinner, MDBRow, MDBCol } from 'mdb-vue-ui-kit'
  import PreviewFiles from './PreviewFiles.vue'
  
  const props = defineProps({
    isOpen: Boolean,
    toggleModal: Function,
    photoFiles: Array,
    handleFileUpload: Function,
    handleFileInputChange: Function,
    rawFiles: Array,
    loading: Boolean
  })
  
  const showModal = ref(props.isOpen)
  
  watch(
    () => props.isOpen,
    (val) => (showModal.value = val)
  )
  
  const closeModal = () => {
    props.toggleModal()
  }
  
  const copyToClipboard = async (url) => {
    try {
      await navigator.clipboard.writeText(url)
      alert('Copied to clipboard!')
    } catch (err) {
      console.error('Copy failed', err)
    }
  }
  </script>
  