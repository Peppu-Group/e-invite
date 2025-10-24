<template>
    <MDBRow v-if="files.length" class="mt-3">
      <MDBCol
        v-for="f in files"
        :key="f.url"
        lg="2"
        sm="6"
        class="mt-2"
      >
        <img
          :src="f.url"
          class="img-fluid hover-shadow"
          :alt="f.url"
          style="width: 100%; height: 100px; object-fit: cover; border-radius: 5px;"
        />
      </MDBCol>
    </MDBRow>
  </template>
  
  <script setup>
  import { MDBRow, MDBCol } from 'mdb-vue-ui-kit'
  
  // Props from parent
  const props = defineProps({
    files: {
      type: Array,
      default: () => []
    }
  })
  </script>
  