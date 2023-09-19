<script setup>
useHead({
    meta: [
      {property: 'og:title'},
      { name: 'description', content: 'Sample description' },
      { property: 'og:description', content: 'Sample description' },
      { property: 'og:url', content: 'https://test.com' }
    ],
    title: `Coding Task UI`,
})

watchEffect(async () => {
  // TODO: Read file/call API and put sample data
  // mailboxesStore.setMailboxes(data?.value)
  console.log("Hi")
})
</script>

<template>
  <main class="email-page">
    <Sidebar />
    <section class="column mail-section">
      <Header />
      <ActionsSection />

      <!-- TODO: Remove these dummy messages -->
      <Message message="Important Important Important Important Important Important Important Important Important Important Important Important" />
      <Message message="Important Important Important Important Important Important Important Important Important Important Important Important" />
      <Message message="Important Important Important Important Important Important Important Important Important Important Important Important" />
      <Message message="Important Important Important Important Important Important Important Important Important Important Important Important" />
      <Message message="Important Important Important Important Important Important Important Important Important Important Important Important" />
      <Message message="Important Important Important Important Important Important Important Important Important Important Important Important" />
      <Message message="Important Important Important Important Important Important Important Important Important Important Important Important" />
      <Message message="Important Important Important Important Important Important Important Important Important Important Important Important" />
      <Message message="Important Important Important Important Important Important Important Important Important Important Important Important" />
      <Message message="Important Important Important Important Important Important Important Important Important Important Important Important" />
      <Message message="Important Important Important Important Important Important Important Important Important Important Important Important" />
      <Message message="Important Important Important Important Important Important Important Important Important Important Important Important" />
      <Message message="Important Important Important Important Important Important Important Important Important Important Important Important" />
      <Message message="Important Important Important Important Important Important Important Important Important Important Important Important" />
      <Message message="Important Important Important Important Important Important Important Important Important Important Important Important" />
      <Message message="Important Important Important Important Important Important Important Important Important Important Important Important" />
      <Message message="Important Important Important Important Important Important Important Important Important Important Important Important" />
      <Message message="Important Important Important Important Important Important Important Important Important Important Important Important" />
      <Message message="Important Important Important Important Important Important Important Important Important Important Important Important" />
      <Message message="Important Important Important Important Important Important Important Important Important Important Important Important" />
      <Message message="Important Important Important Important Important Important Important Important Important Important Important Important" />
    </section>
  </main>
</template>
