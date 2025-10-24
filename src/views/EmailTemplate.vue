<template>
  <div>
    
    <div id="editor_container" style="height: 600px;"></div>
    
    <!-- Gallery Modal -->
    <GalleryModal
    :isOpen="isOpen"
    :photoFiles="photoFiles"
      :toggleModal="toggleModal"
      :handleFileUpload="handleFileUpload"
      :handleFileInputChange="handleFileInputChange"
      :rawFiles="rawFiles"
      :loading="loading"
    />

    <!-- Send Mail Modal -->
    <SendMailModal
      :toggleMailModal="toggleMailModal"
      :mailContent="mailContent"
      :isOpenMailModal="isOpenMailModal"
    />
  </div>
<div class="export_button">
  <MDBBtn color="primary" @click="exportHtml">Send Newsletter</MDBBtn>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { MDBBtn } from 'mdb-vue-ui-kit'
import GalleryModal from './GalleryModal.vue'
import SendMailModal from './SendMailModal.vue'
import { getPhotoFiles, uploadPhotoFiles, getImageDimensions } from '../lib'

// --- State (useState equivalents) ---
const isOpen = ref(false)
const isOpenMailModal = ref(false)
const photoFiles = ref([])
const rawFiles = ref([])
const loading = ref(false)
const mailContent = ref('')
const photosRef = ref([])

let emailEditor = null

// --- Modal toggles ---
const toggleModal = () => {
  isOpen.value = !isOpen.value
}
const toggleMailModal = () => {
  isOpenMailModal.value = !isOpenMailModal.value
}

// --- Fetch gallery images on mount ---
onMounted(async () => {
  const res = await getPhotoFiles()
  photosRef.value = res.data
  photoFiles.value = res.data

  // Initialize Unlayer editor
  window.unlayer.init({
    id: 'editor_container',
    projectId: 1234,
    displayMode: 'email',
  })

  // Store editor instance
  emailEditor = window.unlayer

  // Register image selector callback
  emailEditor.registerCallback('selectImage', (_data, done) => {
    isOpen.value = true
    done({
      height: 20,
      width: 10,
      size: 400,
      url: 'https://cdn.tools.unlayer.com/image/placeholder.png',
    })
  })
})

// --- Export HTML and open email modal ---
const exportHtml = () => {
  if (emailEditor) {
    emailEditor.exportHtml((data) => {
      localStorage.setItem('newsletter', JSON.stringify(data))
      if (data.html) {
        mailContent.value = data.html
        toggleMailModal()
      }
    })
  }
}

// --- Handle file uploads ---
const handleFileInputChange = async (e) => {
  const files = Array.from(e.target.files)
  const results = []
  for (const file of files) {
    const result = await getImageDimensions(file)
    results.push(result)
  }
  rawFiles.value = results
}

const handleFileUpload = async (e) => {
  e.preventDefault()
  if (rawFiles.value.length < 1) return
  try {
    loading.value = true
    const formData = new FormData()
    let i = 0
    for (const item of rawFiles.value) {
      const file = item.file
      const width = item.width
      const height = item.height
      formData.append(`info_${i}`, JSON.stringify({ width, height }))
      formData.append('mediaFile', file)
      i++
    }
    const res = await uploadPhotoFiles(formData)
    loading.value = false
    if (res.error) {
      toggleModal()
      alert(res.message)
      return
    }
    rawFiles.value = []
    photosRef.value = [...res.data, ...photoFiles.value]
    photoFiles.value = [...res.data, ...photoFiles.value]
  } catch (error) {
    loading.value = false
  }
}
</script>

<style scoped>
.export_button {
  margin-bottom: 1rem;
}
</style>
