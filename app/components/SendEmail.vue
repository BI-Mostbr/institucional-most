<template>
  <section
    class="grid grid-cols-1 sm:grid-cols-2 border-b border-[#EAECF0] gap-8"
  >
    <NuxtImg
      alt="Quero ser parceiro"
      loading="eager"
      placeholder="none"
      :preload="true"
      src="/images/formulario_parceiro.png"
    />

    <div
      class="flex flex-col gap-4 sm:gap-8 items-center sm:items-start justify-center mx-5 sm:mx-0"
    >
      <div class="flex flex-col gap-2 w-full">
        <label for="nome">Seu nome</label>
        <input
          placeholder="Digite..."
          class="w-full pl-2 border border-[#D0D5DD] rounded-lg h-12.5 focus:outline-none focus:ring-black focus:ring-offset-2 focus:ring-2"
        />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <label for="email">Email</label>
        <input
          placeholder="Seu melhor e-mail..."
          class="w-full pl-2 border border-[#D0D5DD] rounded-lg h-12.5 focus:outline-none focus:ring-black focus:ring-offset-2 focus:ring-2"
        />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <label for="phone">Telefone/Celular</label>
        <input
          placeholder="Digite..."
          class="w-full pl-2 border border-[#D0D5DD] rounded-lg h-12.5 focus:outline-none focus:ring-black focus:ring-offset-2 focus:ring-2"
        />
      </div>
      <div class="rounded-xl p-1 w-auto cursor-pointer">
        <label class="flex items-start cursor-pointer relative gap-x-2">
          <input
            type="checkbox"
            class="sr-only"
            :checked="optionsSelected"
            @change="toggleOption"
          />
          <div
            class="w-5 h-5 rounded border border-[#D0D5DD] flex items-center justify-center transition-color"
            :class="optionsSelected ? 'bg-most-primary border-none' : ''"
          >
            <Icon v-if="optionsSelected" name="custom:selected" size="30" />
          </div>
          <p>Aceito os Termos e Condições da Most Br</p>
        </label>
      </div>
      <div class="w-full">
        <button
          class="w-full h-14 rounded-xl text-xl font-semibold hover:rounded-lg bg-[#FF4B8B] cursor-pointer text-white focus:ring-black focus:ring-offset-2 focus:ring-2"
        >
          Enviar
        </button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const optionsSelected = ref<boolean>(false)

function toggleOption(): boolean {
  optionsSelected.value = !optionsSelected.value
  return optionsSelected.value
}
</script>
