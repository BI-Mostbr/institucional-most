<template>
  <span ref="el">{{ current }}{{ suffix }}</span>
</template>
<script setup>
const props = defineProps({
  end: { type: Number, required: true },
  duration: { type: Number, default: 1200 },
  suffix: { type: String, default: '' },
})

const current = ref(0)
const started = ref(false)
const el = ref(null)

const animate = () => {
  const start = performance.now()

  const frame = (now) => {
    const progress = Math.min((now - start) / props.duration, 1)
    current.value = Math.round(props.end * progress)
    if (progress < 1) requestAnimationFrame(frame)
  }

  requestAnimationFrame(frame)
}

onMounted(() => {
  requestAnimationFrame(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.value) return

      started.value = true
      animate()
      observer.disconnect()
    })

    observer.observe(el.value)
  })
})
</script>
