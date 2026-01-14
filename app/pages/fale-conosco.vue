<template>
  <div class="flex flex-col gap-8">
    <section
      class="w-screen ml-[calc(50%-50vw)] bg-[#F8F8F8] flex gap-12 flex-col items-center"
    >
      <div class="max-w-300 py-14 flex flex-col gap-3 font-medium mx-10">
        <h2 class="text-[#FF4B8B]">Fale conosco</h2>
        <h3 class="text-[36px] sm:text-[96px] leading-tight tracking-tight">
          Olá como nós podemos te ajudar hoje?
        </h3>
        <p class="text-[#656565] text-base">
          Sempre alguém de prontidão para te atender.
        </p>
      </div>
    </section>
    <section>
      <FormsContact hasTitle></FormsContact>
    </section>
  </div>
</template>
<script setup>
useSeoMeta({
  title: 'Fale com a Most Br - Most Br',
  description: 'mostbr.com.br',
})
</script>
