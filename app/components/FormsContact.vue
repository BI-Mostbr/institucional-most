<template>
  <section class="flex flex-col gap-4 sm:gap-10 w-full">
    <h2 v-if="hasTitle" class="text-[28px] font-medium">
      Deixe sua mensagem. Nosso time retornará em breve
    </h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col gap-2 w-full">
        <label for="nome">Seu nome</label>
        <input
          v-model="name"
          placeholder="Digite..."
          class="w-full pl-2 border border-[#D0D5DD] rounded-lg h-12.5 focus:outline-none focus:ring-black focus:ring-offset-2 focus:ring-2"
        />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <label for="email">Email</label>
        <input
          v-model="email"
          placeholder="Seu melhor e-mail..."
          class="w-full pl-2 border border-[#D0D5DD] rounded-lg h-12.5 focus:outline-none focus:ring-black focus:ring-offset-2 focus:ring-2"
        />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <label for="email">Telefone/Celular</label>
        <input
          v-model="phone"
          placeholder="Seu melhor e-mail..."
          class="w-full pl-2 border border-[#D0D5DD] rounded-lg h-12.5 focus:outline-none focus:ring-black focus:ring-offset-2 focus:ring-2"
        />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <label for="phone">Digite uma mensagem</label>
        <textarea
          v-model="message"
          placeholder="Digite..."
          class="w-full pl-2 border border-[#D0D5DD] rounded-lg h-12.5 focus:outline-none focus:ring-black focus:ring-offset-2 focus:ring-2 min-h-37.5"
        />
      </div>
      <div
        class="w-full bg-[#FF4B8B] rounded-xl h-12.5 flex items-center justify-center text-white cursor-pointer font-medium hover:rounded-lg"
      >
        <button @click="contact">Enviar</button>
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps({
  hasTitle: {
    type: Boolean,
    default: false,
  },
})

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')

function contact() {
  const text = `
    Olá!
    Meu nome é ${name.value}
    Email: ${email.value}
    Contato: ${phone.value}
    
    ${message.value}
  `.trim()

  const url = `https://wa.me/5511947271029?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
}
</script>
