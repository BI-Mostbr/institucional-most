<template>
  <div
    class="h-20 mx-auto max-w-315 z-50 backdrop-blur-sm fixed left-0 right-0 bg-white/80 w-full top-0"
  >
    <div class="flex justify-between items-center h-full mx-10">
      <Icon name="custom:logo" size="40"></Icon>
      <nav class="hidden md:block">
        <ul class="flex gap-4">
          <li
            v-for="item in menuItems"
            :key="item.to"
            :class="[
              'font-medium cursor-pointer hover:text-[#7D7D7D]',
              route.path === item.to ? 'text-[#FF4B8B]' : 'text-black',
            ]"
            @click="goTo(item.to)"
          >
            {{ item.label }}
          </li>
        </ul>
      </nav>
      <button
        class="bg-[#FF4B8B] text-white px-4 py-2 rounded-xl h-12.75 w-44 hover:rounded-lg cursor-pointer focus:ring-black focus:ring-offset-2 focus:ring-2 hidden md:block"
      >
        Simule agora
      </button>
      <div class="md:hidden">
        <Icon
          name="heroicons:bars-3"
          size="30"
          class="cursor-pointer text-[#FF4B8B]"
          @click="openMenu"
        />
        <div
          v-if="open"
          class="fixed top-20 left-0 w-full flex justify-center shadow-2xl"
        >
          <nav class="bg-white shadow p-5 w-11/12 rounded-xl">
            <ul class="flex flex-col gap-3 text-start">
              <li
                v-for="item in menuItems"
                :key="item.to"
                :class="[
                  'font-medium cursor-pointer hover:text-[#7D7D7D]',
                  route.path === item.to ? 'text-[#FF4B8B]' : 'text-black',
                ]"
                @click="goTo(item.to)"
              >
                <p class="text-sm font-bold h-7">{{ item.label }}</p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const router = useRouter()
const route = useRoute()

const open = ref(false)
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
  if (open.value) {
    open.value = !open.value
  }
}

function openMenu() {
  open.value = !open.value
}
</script>
