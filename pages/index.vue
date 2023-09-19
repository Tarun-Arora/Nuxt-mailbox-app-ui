<script setup lang="ts">
definePageMeta({
  // middleware: 'authentication',
  title: 'Emails'
})
</script>

<template>
  <section>
    <LazyLabelsWrapper />
    <div>
      <LazyMessage />
    </div>
  </section>
</template>
