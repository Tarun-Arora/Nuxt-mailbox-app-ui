export const useMailboxesStore = defineStore('mailboxesStore', () => {
    const mailboxes = useState('mailboxes', () => [])

    const setMailboxes = (payload) => {
        mailboxes.value = payload
    }

    return {
        mailboxes,
        setMailboxes
    }
})
