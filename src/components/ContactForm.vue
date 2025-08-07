<script setup lang="ts">
import Card from './Card.vue';
import Icon from './Icon.vue';
import { ref, Transition } from 'vue';
import Textarea from './Textarea.vue';
import Input from './Input.vue';
import Button from './Button.vue';
import type { ContactForm } from '@/types/ContactForm';

defineProps<{ loading: boolean }>();

const emit = defineEmits(['submit'])

const form = ref<ContactForm>({
  name: '',
  lastName: '',
  email: '',
  message: '',
  phone: ''
});

const handleSubmit = () => {
  emit('submit', form.value)
  resetForm();
}

const resetForm = () => {
  form.value = {
    name: '',
    lastName: '',
    email: '',
    message: '',
    phone: ''
  }
}

</script>



<template>
  <Card class="relative p-4!">
    <template #card-title>
      <div class="flex flex-row lg:flex-col items-center lg:items-start gap-6">
        <div class="grid place-items-center min-w-12 min-h-12 rounded-full shadow-lg border border-slate-200">
          <Icon icon="fa-regular fa-paper-plane" class="text-primary" />
        </div>
        <div class="lg:space-y-2">
          <p>Nos envie uma mensagem.</p>
          <p class="text-sm text-text-secondary font-normal">
            Ficaremos felizes em receber sua mensagem e responderemos assim que possível.
          </p>
        </div>
      </div>
    </template>

    <form @submit.prevent="handleSubmit" class="grid gap-6">
      <div class="grid md:grid-cols-2 items-end gap-6">
        <Input id="name" v-model="form.name" type="text" label="Nome" placeholder="Digite seu nome" required />
        <Input id="lastname" v-model="form.lastName" type="text" label="Sobrenome" placeholder="Digite seu sobrenome"
          required />
      </div>
      <div class="grid md:grid-cols-2 items-end gap-6">
        <Input id="email" v-model="form.email" type="email" label="E-mail" placeholder="Digite seu melhor e-mail"
          required />
        <Input id="phone" v-model="form.phone" type="tel" label="Número de telefone (opcional)"
          placeholder="Digite seu melhor número de telefone" />
      </div>

      <Textarea id="message" v-model="form.message" label="Mensagem" placeholder="Escreva sua mensagem aqui" />
      <Button type="submit" class="justify-center">Enviar mensagem</Button>
    </form>

    <Transition>
      <div v-if="loading" class="absolute top-0 bg-white/80 size-full grid place-items-center">
        <Card>
          <p class="animate-pulse">Enviando...</p>
        </Card>
      </div>
    </Transition>
  </Card>
</template>
