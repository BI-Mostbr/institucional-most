<template>
  <section class="w-full z-10">
    <div class="hidden sm:block">
      <NuxtImg
        alt="Familia feliz no computador vendo o site da Most"
        src="/images/top banner desktop.png"
        width="1260"
        height="505"
        priority
        loading="eager"
        placeholder="none"
        :preload="true"
        @click="goTo('app')"
        class="cursor-pointer"
      />
    </div>
    <div class="sm:hidden">
      <NuxtImg
        alt="Familia feliz no computador vendo o site da Most"
        src="/images/banner-mobile.png"
        width="420"
        height="962"
        loading="eager"
        placeholder="none"
        :preload="true"
        @click="goTo('app')"
        class="cursor-pointer"
      />
    </div>
  </section>

  <section
    class="w-screen ml-[calc(50%-50vw)] bg-[#F8F8F8] pb-10 pt-48 -mt-48 sm:pt-32 sm:-mt-32"
  >
    <div
      class="py-24 relative max-w-315 flex flex-col gap-8 items-center sm:mx-auto mx-10"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-24 sm:mx-10">
        <div class="flex flex-col gap-14">
          <div class="flex flex-col gap-5">
            <h2 class="text-[#FF4B8B] font-medium text-xl">Sobre a Most</h2>
            <h3 class="font-medium text-[56px] leading-tight tracking-tight">
              Descubra como a Most pode te ajudar
            </h3>
            <p class="text-lg text-[#656565] leading-7.5 tracking-tight">
              Temos como propósito ajudar as imobiliárias e nossos clientes
              finais sendo um facilitador para compradores e vendedores em suas
              jornadas de crédito imobiliário como: financiamento imobiliário,
              consórcio ou empréstimo com garantia de imóvel. Acreditamos que o
              mercado imobiliário deve ser mais acessível e descomplicado para
              todos os envolvidos. Por isso, trabalhamos com soluções
              tecnológicas inovadoras para tornar o processo de crédito
              imobiliário mais ágil e seguro.
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
                class="w-37.5 h-12.5 bg-[#FF4B8B] rounded-xl text-white focus:ring-black focus:ring-offset-2 focus:ring-2 cursor-pointer hover:rounded-lg hover:bg-[#fd4183]"
                @click="goTo('/simulador-coleta-dados')"
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
                Planeje a compra do seu imóvel e garanta as melhores taxas.
                Temos como lhe garantir a melhor ofertas de consórcio que se
                encaixe em seu planejamento financeiro. Através de consultores
                especialistas somos capazes de reunir os maiores players de
                mercado de consórcio e garantir a melhor oportunidade.
              </p>
              <button
                class="w-37.5 h-12.5 bg-[#FF4B8B] rounded-xl hover:rounded-lg hover:bg-[#fd4183] text-white focus:ring-black focus:ring-offset-2 focus:ring-2 cursor-pointer"
                @click="goTo('/simulador-coleta-dados')"
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
                taxas mais baixas. A modalidade de empréstimo com garantia
                permite ao nosso cliente as melhores oportunidades para adquirir
                seu segundo imóvel. É fácil, rápido e conseguimos lhe garantir
                menores juros e melhores taxas.
              </p>
              <button
                class="w-37.5 h-12.5 bg-[#FF4B8B] rounded-xl hover:rounded-lg hover:bg-[#fd4183] text-white focus:ring-black focus:ring-offset-2 focus:ring-2 cursor-pointer z-20"
                @click="goTo('/simulador-coleta-dados')"
              >
                Adquira agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative">
    <div class="hidden sm:block">
      <NuxtImg
        alt="Quero ser parceiro"
        src="/images/quero_ser_parceiro.png"
        class="absolute -top-10 sm:-top-62.5 left-1/2 -translate-x-1/2 w-full max-w-6xl rounded mx-auto z-10 cursor-pointer hover:scale-[105%] transition-all duration-300 ease-in-out"
        @click="goTo('/parceiros')"
      />
    </div>
    <div class="sm:hidden mx-5">
      <div
        class="bg-[#2162A4] rounded-2xl h-175 flex flex-col justify-between px-4 pt-4"
      >
        <h2 class="text-[40px] text-white leading-10 pt-2 font-medium px-2">
          A Most também é parceira de imobiliárias e assessorias
        </h2>
        <button class="bg-[#FF4B8B] rounded-xl h-14 font-medium text-white">
          Quero ser um parceiro Most
        </button>
        <NuxtImg
          alt="Quero ser parceiro"
          src="/images/parceria-imobiliária-mobile.png"
        />
      </div>
    </div>
  </section>

  <section class="pt-15 sm:pt-80">
    <div class="flex flex-col gap-8">
      <h2
        class="sm:text-[126px] text-5xl mx-5 sm:mx-10 font-semibold leading-tight tracking-tight"
      >
        Quer ser um parceiro da Most?
      </h2>
      <p class="w-75 self-end text-xs">
        Preencha o formulário e faça parte de nosso ecossistema
      </p>
    </div>
  </section>

  <div class="self-end">
    <Icon name="custom:arrow" size="54" />
  </div>

  <SendEmail></SendEmail>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

useSeoMeta({
  title: 'Como funciona o crédito imobiliário - Most Br',
  description: 'mostbr.com.br',
})

const router = useRouter()

const optionsSelected = ref<boolean>(false)

function toggleOption(): boolean {
  optionsSelected.value = !optionsSelected.value
  return optionsSelected.value
}

function goTo(path: string) {
  if (path === 'app') {
    window.open('https://app.miracle.mostbr.com.br', '_blank')
  } else {
    router.push(path)
  }
}
</script>
