<template>
  <div
    class="sm:max-w-315 w-full mx-auto flex items-center justify-between flex-col pt-10 gap-10"
  >
    <div class="flex flex-col items-center gap-10">
      <Icon
        name="custom:logo"
        size="40"
        @click="goTo('/')"
        class="cursor-pointer"
      ></Icon>
      <h2
        class="sm:text-[56px] text-[36px] font-medium sm:w-200 w-full mx-10 leading-tight tracking-tight text-center"
      >
        A Most agradece o seu contato!
      </h2>
      <img
        alt="Familia feliz no computador vendo o site da Most"
        src="/images/young.png"
        loading="eager"
      />
    </div>
    <div class="w-full flex flex-col items-center gap-5 pb-10">
      <h3 class="w-100 text-center">
        Nossa equipe entrará em contato o mais breve possível. Se preferir, fale
        agora com um de nossos consultores clicando no botão abaixo.
      </h3>
      <button
        class="p-4 text-white bg-[#FF4B8B] rounded-xl hover:rounded-lg cursor-pointer focus:ring-black focus:ring-offset-2 focus:ring-2 font-semibold px-4"
        @click="goTo('whats')"
      >
        Falar com nossos especialistas
      </button>
      <button
        class="text-base text-[#FF4B8B] cursor-pointer hover:scale-[105%]"
        @click="goTo('/')"
      >
        Voltar para o site
      </button>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'finished',
})

useSeoMeta({
  title: 'Obrigado! - Most Br',
  description: 'mostbr.com.br',
})

const router = useRouter()

function goTo(path) {
  if (path === 'whats') {
    window.open('https://wa.me/5511947271029', '_blank')
  } else {
    router.push(path)
  }
}
</script>
