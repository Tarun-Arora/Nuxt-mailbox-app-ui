<script setup>
import {useEmailsSelectedStore} from "@/stores/emailStore"
import { useMailboxesStore } from "~/stores/mailboxes";
useHead({
    meta: [
      {property: 'og:title'},
      { name: 'description', content: 'Sample description' },
      { property: 'og:description', content: 'Sample description' },
      { property: 'og:url', content: 'https://test.com' }
    ],
    title: `Coding Task UI`,
})

const emailStore = useEmailsSelectedStore()
const mailboxesStore = useMailboxesStore()

let emails = [
  {message: "Important Important Important Important", selected: true},
  {message: "Important Important Important Important", selected: false},
  {message: "Important Important Important Important", selected: false},
  {message: "Important Important Important Important", selected: false},
  {message: "Important Important Important Important", selected: false},
  {message: "Important Important Important Important", selected: false},
  {message: "Important Important Important Important", selected: false},
  {message: "Important Important Important Important", selected: false},
]

watchEffect(async () => {
  // TODO: Read file/call API and put sample data
  mailboxesStore.setMailboxes(emails)
  const selectedEmailCount = emails.filter((email) => email.selected === true).length
  emailStore.setValue(selectedEmailCount)
})

const handleToggleSelectAll = (isSelectAllChecked) => {
  if(isSelectAllChecked){
    emails = mailboxesStore.mailboxes
    emailStore.setValue(emails.length)
    for(let i=0; i<emails.length; i++){
      emails[i].selected = true
    }
    mailboxesStore.setValue(emails)
  }
  else{
    emailStore.setValue(0)
    for(let i=0; i<emails.length; i++){
      emails[i].selected = false
    }
    mailboxesStore.setValue(emails)
  }
}
</script>

<template>
  <main class="email-page">
    <Sidebar />
    <section class="column mail-section">
      <Header />
      <ActionsSection @toggleSelectAll="handleToggleSelectAll" />

      <!-- TODO: Remove these dummy messages -->
      <Message v-for="(email, index) in mailboxesStore.mailboxes" :key="email.id || index" :message="email.message" :selected="email.selected" />
    </section>
  </main>
</template>
