import type { ContactForm } from '@/types/ContactForm'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useFormspreeStore = defineStore('formspree', () => {
  const state = reactive({ loading: false, error: false, success: false })

  const send = async (body: ContactForm) => {
    request()

    try {
      const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (response.ok) {
        state.success = true
      } else {
        state.error = true
      }
    } catch (error) {
      console.error('Error:', error)
      state.error = true
    } finally {
      state.loading = false
    }
  }

  const resetState = () => {
    state.error = false
    state.loading = false
    state.success = false
  }

  const request = () => {
    state.loading = true
    state.error = false
    state.success = false
  }

  return { state, send, resetState }
})
