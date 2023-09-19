import { defineStore } from 'pinia';

export const useEmailsSelectedStore = defineStore('emailsSelectedStore', () => {
    const emailsSelected = useState('emailsSelected', () => 0)

    const incrementSelectedCount = () => {
        emailsSelected.value++
    }

    const decrementSelectedCount = () => {
        emailsSelected.value--
    }

    return {
        emailsSelected,
        incrementSelectedCount,
        decrementSelectedCount,
    }
})
