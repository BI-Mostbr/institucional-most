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
        © 2025 MostBr | Glaceon Consultoria Empresarial LTDA-ME. CNPJ:
        21.370.359/0001-20. Todos os direitos reservados. Feito com 💜 por
        Mostbr.
      </div>
      <div class="flex gap-5">
        <Icon
          name="custom:ig"
          size="20"
          class="hover:scale-[105%] cursor-pointer"
          @click="redirect('https://www.linkedin.com/company/mostbr/')"
        ></Icon>
        <Icon
          name="custom:in"
          size="20"
          class="hover:scale-[105%] cursor-pointer"
          @click="redirect('https://www.instagram.com/mostbr.oficial/')"
        ></Icon>
        <Icon
          name="custom:fb"
          size="20"
          class="hover:scale-[105%] cursor-pointer"
          @click="redirect('https://www.facebook.com/mostbr')"
        ></Icon>
      </div>
    </div>
    <Widget></Widget>
  </div>
</template>
<script setup>
function redirect(path) {
  window.open(path, '_blank')
}
</script>
