<template>
  <div class="mx-auto max-w-315 w-full sm:py-18 p-10 border-b border-[#EAECF0]">
    <div class="flex flex-col sm:flex-row justify-between">
      <div class="flex flex-col gap-8">
        <NuxtImg
          width="198"
          height="63"
          alt="Most logo"
          src="/images/Logo_footer.png"></NuxtImg>
        <p class="text-[#656565] text-base">Most Br. O hub de soluções de crédito.</p>
        <div class="flex flex-col hidden sm:flex-row gap-6">
          <div v-for="(i, ix) in menuItems" :key="ix">
           <p class="text-black text-base">{{ i.label }}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row gap-2">
        <p class="text-[#656565]">Baixe nosso App</p>
        <NuxtImg
          width="135"
          height="40"
          alt="Most logo"
          src="/images/Mobile_app_store.png"></NuxtImg>
        <NuxtImg
          width="135"
          height="40"
          alt="Most logo"
          src="/images/Mobile_app_google.png"></NuxtImg>
      </div>
    </div>
  </div>
  <div class="sm:py-10 sm:pr-10 p-10 flex flex-col sm:flex-row justify-between items-center">
    <div>
      © 2023 MostBr. Todos os direitos reservados. Feito com 💜 por Mostbr.
    </div>
    <div class="flex gap-5">
      <Icon name="custom:ig" size="20"></Icon>
      <Icon name="custom:in" size="20"></Icon>
      <Icon name="custom:fb" size="20"></Icon>
    </div>
  </div>
</template>
<script setup>
  const menuItems = [
    { label: 'Sobre a Most', to: '/' },
    { label: 'Soluções', to: '/' },
    { label: 'Parceiro', to: '/' },
    { label: 'Incorporadora', to: '/' },
    { label: 'Fale conosco', to: '/' },
    { label: 'Política de privacidade', to: '/' },
  ]
</script>