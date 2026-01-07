<template>
  <section class="w-full">
    <div>
      <NuxtImg
        alt="Top banner"
        src="/images/top banner desktop.png"
        class="w-full h-auto rounded"
        width="1260"
        height="505"
      />
    </div>
    <div>
       <NuxtImg
        alt="Top banner"
        src="/images/top_banner_desktop.png"
        class="w-full h-auto rounded"
        width="1260"
        height="505"
      />
    </div>
  </section>

  <section class="mx-10 py-24 relative">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-24">
      <div class="flex flex-col gap-14">
        <div class="flex flex-col gap-5">
          <h2 class="text-[#FF4B8B] font-medium text-xl">Sobre a Most</h2>
          <h3 class="font-medium text-[56px] leading-tight tracking-tight">
            Descubra como a Most pode te ajudar
          </h3>
          <p class="text-lg text-[#656565] leading-7.5 tracking-tight">
            Temos como propósito ajudar as imobiliárias e nossos clientes finais
            sendo um facilitador para compradores e vendedores em suas jornadas
            de crédito imobiliário como: financiamento imobiliário, consórcio ou
            empréstimo com garantia de imóvel. Acreditamos que o mercado
            imobiliário deve ser mais acessível e descomplicado para todos os
            envolvidos. Por isso, trabalhamos com soluções tecnológicas
            inovadoras para tornar o processo de crédito imobiliário mais ágil e
            seguro.
          </p>
        </div>
        <div class="flex flex-col gap-11.25">
          <div class="flex gap-5 items-center">
            <div
              class="bg-white flex items-center justify-center w-12 h-12 rounded-xl border border-[#EAECF0] shadow-2xl"
            >
              <Icon name="custom:phone" size="24" />
            </div>
            <p class="font-medium text-xl">Operação 100% digital e ágil</p>
          </div>
          <div class="flex gap-5 items-center">
            <div
              class="bg-white flex items-center justify-center w-12 h-12 rounded-xl border border-[#EAECF0] shadow-2xl"
            >
              <Icon name="custom:check" size="20" />
            </div>
            <p class="font-medium text-xl">Prático e sem burocracia</p>
          </div>
          <div class="flex gap-5 items-center">
            <div
              class="bg-white flex items-center justify-center w-12 h-12 rounded-xl border border-[#EAECF0] shadow-2xl"
            >
              <Icon name="custom:phone2" size="24" />
            </div>
            <p class="font-medium text-xl">
              Equipe de prontidão para te auxiliar
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-12">
        <div class="flex gap-4">
          <div
            class="bg-white flex items-center justify-center min-w-10 h-10 rounded-xl border border-[#EAECF0] shadow-2xl"
          >
            <Icon name="custom:cashflow" size="20" />
          </div>
          <div class="flex flex-col gap-6">
            <div class="flex gap-4 items-center text-xl text-[#101828]">
              <h2>Crédito Imobiliário</h2>
            </div>
            <p class="text-[#656565] leading-7.5 tracking-tight text-base">
              Simule seu crédito imobiliário e realize seu sonho da casa
              própria. A Most conecta você ou seu cliente com os principais
              bancos do país. Desta conexão surgem as melhores condições de
              financiamento imobiliário para quem pretende adquirir um imóvel
              novo ou usado.
            </p>
            <button
              class="w-37.5 h-12.5 bg-[#FF4B8B] rounded-xl text-white focus:ring-black focus:ring-offset-2 focus:ring-2"
            >
              Simule agora
            </button>
          </div>
        </div>
        <div class="flex gap-4">
          <div
            class="bg-white flex items-center justify-center min-w-10 h-10 rounded-xl border border-[#EAECF0] shadow-2xl"
          >
            <Icon name="custom:checkbox" size="18" />
          </div>
          <div class="flex flex-col gap-6">
            <div class="flex gap-4 items-center text-xl text-[#101828]">
              <h2>Consórcio</h2>
            </div>
            <p class="text-[#656565] leading-7.5 tracking-tight text-base">
              Planeje a compra do seu imóvel e garanta as melhores taxas. Temos
              como lhe garantir a melhor ofertas de consórcio que se encaixe em
              seu planejamento financeiro. Através de consultores especialistas
              somos capazes de reunir os maiores players de mercado de consórcio
              e garantir a melhor oportunidade.
            </p>
            <button
              class="w-37.5 h-12.5 bg-[#FF4B8B] rounded-xl text-white focus:ring-black focus:ring-offset-2 focus:ring-2"
            >
              Conheça
            </button>
          </div>
        </div>
        <div class="flex gap-4">
          <div
            class="bg-white flex items-center justify-center min-w-10 h-10 rounded-xl border border-[#EAECF0] shadow-2xl"
          >
            <Icon name="custom:mail1" size="20" />
          </div>
          <div class="flex flex-col gap-6">
            <div class="flex gap-4 items-center text-xl text-[#101828]">
              <h2>Empréstimo com Garantia de Imóvel</h2>
            </div>
            <p class="text-[#656565] leading-7.5 tracking-tight text-base">
              Utilize seu imóvel próprio como garantia de empréstimo e pague
              taxas mais baixas. A modalidade de empréstimo com garantia permite
              ao nosso cliente as melhores oportunidades para adquirir seu
              segundo imóvel. É fácil, rápido e conseguimos lhe garantir menores
              juros e melhores taxas.
            </p>
            <button
              class="w-37.5 h-12.5 bg-[#FF4B8B] rounded-xl text-white focus:ring-black focus:ring-offset-2 focus:ring-2"
            >
              Adquira agora
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative">
    <NuxtImg
      alt="Quero ser parceiro"
      src="/images/quero_ser_parceiro.png"
      class="absolute -top-50 sm:-top-62.5 left-1/2 -translate-x-1/2 w-full max-w-6xl rounded mx-auto z-10"
      width="1260"
      height="600"
    />
  </section>

  <section class="pt-40 sm:pt-80">
    <div class="flex flex-col gap-8">
      <h2 class="text-[126px] mx-10">Quer ser um parceiro da Most?</h2>
      <p class="w-75 lg:self-end">
        Preencha o formulário e faça parte de nosso ecossistema
      </p>
    </div>
  </section>

  <div class="lg:self-end">
    <Icon name="custom:arrow" size="54" />
  </div>

  <section
    class="grid grid-cols-1 sm:grid-cols-2 border-b border-[#EAECF0] mx-auto gap-8"
  >
    <NuxtImg
      alt="Quero ser parceiro"
      src="/images/formulario_parceiro.png"
      class=""
      width="798"
      height="800"
    />

    <div
      class="flex flex-col gap-8 items-center sm:items-start justify-center w-full"
    >
      <div class="flex flex-col gap-2 w-full">
        <label for="nome">Seu nome</label>
        <input
          placeholder="Digite..."
          class="pl-2 border border-[#D0D5DD] rounded-lg h-12.5 focus:outline-none focus:ring-black focus:ring-offset-2 focus:ring-2"
        />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <label for="email">Email</label>
        <input
          placeholder="Seu melhor e-mail..."
          class="pl-2 border border-[#D0D5DD] rounded-lg h-12.5 focus:outline-none focus:ring-black focus:ring-offset-2 focus:ring-2"
        />
      </div>
      <div class="flex flex-col gap-2 w-full">
        <label for="nome">Telefone/Celular</label>
        <input
          placeholder="Digite..."
          class="pl-2 border border-[#D0D5DD] rounded-lg h-12.5 focus:outline-none focus:ring-black focus:ring-offset-2 focus:ring-2"
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
