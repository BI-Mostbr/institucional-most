<template>
  <div class="max-w-315 mx-auto flex flex-col pt-20">
    <Header></Header>
    <slot></slot>
    <Footer></Footer>
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
