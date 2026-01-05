<template>
  <div
    class="h-20 mx-auto max-w-315 z-50 backdrop-blur-sm fixed left-0 right-0 bg-white/80 w-full top-0"
  >
    <div class="flex justify-between items-center h-full mx-10">
      <NuxtImg
        height="41"
        width="41"
        alt="Most logo"
        src="/images/logo.svg"
      ></NuxtImg>
      <nav>
        <ul class="flex gap-4">
          <li
            v-for="item in menuItems"
            :key="item.to"
            :class="[
              'font-medium cursor-pointer hover:text-[#7D7D7D]',
              route.path === item.to ? 'text-[#FF4B8B]' : 'text-black',
            ]"
            @click="navigateTo(item.to)"
          >
            {{ item.label }}
          </li>
        </ul>
      </nav>
      <button
        class="bg-[#FF4B8B] text-white px-4 py-2 rounded-xl h-12.75 w-44 hover:rounded-lg cursor-pointer focus:ring-black focus:ring-offset-2 focus:ring-2"
      >
        Simule agora
      </button>
    </div>
  </div>
</template>
<script setup>
const router = useRouter()
const route = useRoute()

const menuItems = [
  { label: 'Início', to: '/' },
  { label: 'Soluções', to: '/financiamento-imoveis' },
  { label: 'Parceiros', to: '/parceiros' },
  { label: 'Incorporadora', to: '/Incorporadora' },
  { label: 'Fale conosco', to: '/fale-conosco' },
  { label: 'Política de Privacidade', to: '/politica-de-privacidade' },
]

function goTo(path) {
  router.push(path)
}
</script>
