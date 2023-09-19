<script setup>
const props = defineProps({
  message: String,
});
</script>

<template>
  <span class="mailbox-message">
    <input type="checkbox" class="mail-checkbox">
    {{ message }}
  </span>
</template>
