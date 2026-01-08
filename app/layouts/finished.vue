<template>
  <div
    class="max-w-315 h-screen flex flex-col mx-auto items-center justify-between"
  >
    <slot></slot>
    <div class="border-b border-[#EAECF0] w-full"></div>
    <div
      class="sm:py-10 sm:pr-10 p-10 flex flex-col sm:flex-row justify-between items-center gap-10"
    >
      <div>
        © 2023 MostBr. Todos os direitos reservados. Feito com 💜 por Mostbr.
      </div>
      <div class="flex gap-5">
        <Icon name="custom:ig" size="20"></Icon>
        <Icon name="custom:in" size="20"></Icon>
        <Icon name="custom:fb" size="20"></Icon>
      </div>
    </div>
    <a
      href="https://wa.me/5511947271029"
      target="_blank"
      class="fixed bottom-10 right-10 z-50 bg-[#25D366] py-3 px-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center gap-3"
    >
      <p class="text-white font-semibold">Fale com consultor</p>
      <Icon name="logos:whatsapp-icon" size="35" />
    </a>
  </div>
</template>
