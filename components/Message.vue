<script setup>
import { useEmailsSelectedStore } from "@/stores/emailStore"

const props = defineProps({
  message: String,
  selected: Boolean,
});
const emailsSelectedStore = useEmailsSelectedStore()

const toggleEmailSelection = (event) => {
    if(event.target.checked === true) emailsSelectedStore.incrementSelectedCount()
    else emailsSelectedStore.decrementSelectedCount()
}

</script>

<template>
  <span class="mailbox-message">
    <input type="checkbox" class="mail-checkbox" @change="(e) => toggleEmailSelection(e)" :checked="selected">
    {{ message }}
  </span>
</template>
