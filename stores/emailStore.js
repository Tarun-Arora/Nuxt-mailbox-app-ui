import { defineStore } from 'pinia';

export const useEmailsSelectedStore = defineStore('emailsSelectedStore', () => {
    const emailsSelected = useState('emailsSelected', () => 0)

    const incrementSelectedCount = () => {
        emailsSelected.value++
    }

    const decrementSelectedCount = () => {
        emailsSelected.value--
    }

    const setValue = (payload) => {
        emailsSelected.value = payload
    }

    return {
        emailsSelected,
        incrementSelectedCount,
        decrementSelectedCount,
        setValue,
    }
})
