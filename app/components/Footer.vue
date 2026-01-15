<template>
  <div class="max-w-315 w-full py-18 p-10 lg:px-0 border-b border-[#EAECF0]">
    <div class="flex flex-col sm:flex-row justify-between lg:mx-0">
      <div class="flex flex-col gap-8">
        <img
          width="198"
          height="63"
          alt="Most logo"
          src="/images/Logo_footer.png"
        />
        <p class="text-[#656565] text-base">
          Most Br. O hub de soluções de crédito.
        </p>
        <div class="sm:flex flex-col hidden sm:flex-row gap-6">
          <div v-for="(i, ix) in menuItems" :key="ix">
            <p
              class="text-black text-base hover:text-[#7D7D7D] cursor-pointer"
              @click="goTo(i.to)"
            >
              {{ i.label }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-[#656565]">Baixe nosso App</p>
        <img
          width="135"
          height="40"
          alt="Most logo"
          src="/images/Mobile_app_store.png"
        />
        <img
          width="135"
          height="40"
          alt="Most logo"
          src="/images/Mobile_app_google.png"
        />
      </div>
    </div>
  </div>
  <div
    class="sm:py-10 p-10 px-10 sm:px-0 flex flex-col sm:flex-row justify-between items-center"
  >
    <div>
      © 2025 MostBr | Glaceon Consultoria Empresarial LTDA-ME. CNPJ:
      21.370.359/0001-20. Todos os direitos reservados. Feito com 💜 por Mostbr.
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
</template>
<script setup>
const router = useRouter()
const menuItems = [
  { label: 'Sobre a Most', to: '/' },
  { label: 'Soluções', to: '/financiamento-imoveis' },
  { label: 'Parceiros', to: '/parceiros' },
  { label: 'Incorporadora', to: '/incorporadora' },
  { label: 'Fale conosco', to: '/fale-conosco' },
  { label: 'Política de privacidade', to: '/politica-de-privacidade' },
]

function redirect(path) {
  window.open(path, '_blank')
}

function goTo(params) {
  router.push(params)
}
</script>
