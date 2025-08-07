<script setup lang="ts">
import Card from '@/components/Card.vue';
import ContactErrorCard from '@/components/ContactErrorCard.vue';
import ContactForm from '@/components/ContactForm.vue';
import ContactSuccessCard from '@/components/ContactSuccessCard.vue';
import Icon from '@/components/Icon.vue';
import Section from '@/components/Section.vue';
import FadeTransition from '@/components/transitions/FadeTransition.vue';
import { useFormspreeStore } from '@/stores/formspree.store';

const formspreeStore = useFormspreeStore();

const handleSubmit = () => { }

</script>

<template>
  <Section>
    <template #title>Contato</template>
    <template #subtitle>Entre em contato! Ficaremos felizes em ajudar.</template>
    <FadeTransition>
      <ContactSuccessCard v-if="formspreeStore.state.success" />
      <ContactErrorCard v-else-if="formspreeStore.state.error" />

      <div class="grid gap-8 lg:grid-cols-[1fr_2fr] transition-all mb-12" v-else>
        <Card class="p-4! max-h-max">
          <template #card-title>
            <div class="flex flex-row lg:flex-col items-center lg:items-start gap-6">
              <div class="grid place-items-center min-w-12 min-h-12 rounded-full shadow-lg border border-slate-200">
                <Icon icon="question" class="text-primary" />
              </div>
              <div class="lg:space-y-2">
                <p>Tem alguma dúvida ou sugestão?</p>
                <p class="text-sm text-text-secondary font-normal">
                  Estamos aqui para ajudar! Preencha o formulário ou entre em contato por e-mail.
                </p>
              </div>
            </div>
          </template>
          <div class="grid md:grid-cols-2 lg:grid-cols-1 gap-4 *:grow text-text-primary">
            <div class="flex items-center gap-2 p-4 rounded-2xl bg-slate-100 text-sm">
              <Icon icon="fa-regular fa-clock" class="text-primary" />
              <p>08:00h às 18:00h</p>
            </div>
            <div class="flex flex-wrap items-center gap-2 p-4 rounded-2xl bg-slate-100 text-sm text-wrap">
              <Icon icon="fa-regular fa-envelope" class="text-primary" />
              <p class="">support@nwxgroup.com.br</p>
            </div>
          </div>

        </Card>
        <ContactForm :loading="formspreeStore.state.loading" @submit="handleSubmit" />
      </div>
    </FadeTransition>
  </Section>
</template>