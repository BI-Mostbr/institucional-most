<template>
  <div :id="elementId" role="main"></div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'

interface Props {
  elementId: string
}

const props = defineProps<Props>()

onMounted(() => {
  loadAndInitializeForm()
})

watch(
  () => props.elementId,
  () => {
    loadAndInitializeForm()
  }
)

const loadAndInitializeForm = () => {
  if (typeof window !== 'undefined') {
    if ((window as any).RDStationForms) {
      initializeForm()
    } else {
      const script = document.createElement('script')
      script.src =
        'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js'
      script.type = 'text/javascript'
      script.async = true
      script.onload = () => {
        initializeForm()
      }
      document.body.appendChild(script)
    }
  }
}

const initializeForm = () => {
  if ((window as any).RDStationForms) {
    new (window as any).RDStationForms(props.elementId, 'null').createForm()
  }
}
</script>
<style>
.select2-choice {
  display: none !important;
}
</style>
