<template>
  <div class="flex flex-col gap-8">
    <section class="">
      <div class="sm:block hidden">
        <NuxtImg
          alt="Casal feliz com a Most"
          src="/images/top_banner_soluções_most.png"
          class="w-full h-auto rounded cursor-pointer"
          width="1260"
          height="299"
          loading="eager"
          placeholder="none"
          :preload="true"
          @click="goTo('/simulador-coleta-dados')"
        />
      </div>
      <div class="sm:hidden mx-2">
        <NuxtImg
          alt="Casal feliz com a Most"
          src="/images/top_banner_soluções_most_mobile.png"
          class="w-full h-auto rounded cursor-pointer"
          width="420"
          height="781"
          loading="eager"
          placeholder="none"
          :preload="true"
          @click="goTo('/simulador-coleta-dados')"
        />
      </div>
    </section>

    <section
      class="mx-5 sm:mx-10 flex justify-between gap-4 p-5 flex-col sm:flex-row"
    >
      <div
        class="flex gap-5 items-center hover:scale-[105%] transition-all duration-300 ease-in-out"
      >
        <div
          class="bg-white flex items-center justify-center w-12 h-12 rounded-xl border border-[#EAECF0] shadow-2xl"
        >
          <Icon name="custom:phone" size="24" />
        </div>
        <p class="font-normal text-">Operação 100% digital e ágil</p>
      </div>
      <div
        class="flex gap-5 items-center hover:scale-[105%] transition-all duration-300 ease-in-out"
      >
        <div
          class="bg-white flex items-center justify-center w-12 h-12 rounded-xl border border-[#EAECF0] shadow-2xl"
        >
          <Icon name="custom:check" size="20" />
        </div>
        <p class="font-normal text-">Prático e sem burocracia</p>
      </div>
      <div
        class="flex gap-5 items-center hover:scale-[105%] transition-all duration-300 ease-in-out"
      >
        <div
          class="bg-white flex items-center justify-center w-12 h-12 rounded-xl border border-[#EAECF0] shadow-2xl"
        >
          <Icon name="custom:phone2" size="24" />
        </div>
        <p class="font-normal text-">Equipe de prontidão para te auxiliar</p>
      </div>
    </section>

    <section class="mx-5 sm:mx-10">
      <div class="flex flex-col sm:flex-row w-full">
        <div
          class="basis-1/2 order-2 md:order-1 sm:p-12 p-5 bg-[#F8F8F8] sm:rounded-l-2xl rounded-b-2xl flex flex-col gap-8 justify-between"
        >
          <h2 class="text-[#FF4B8B] sm:text-lg text-[21px]">
            Crédito imobiliário
          </h2>
          <div class="flex flex-col gap-4">
            <h3
              class="sm:text-[48px] text-[38px] font-medium leading-tight tracking-tight"
            >
              Precisa de crédito imobiliário?
            </h3>
            <p class="text-base text-[#656565]">
              Quando você pretende fazer um financiamento imobiliário é
              importante escolher um parceiro que acompanhará todo o processo
              junto com você. A MOST te permite realizar seu sonho da casa
              própria. Além de você poder utilizar seu FGTS para diminuir o
              valor do seu financiamento imobiliário, seu pagamento pode ser
              feito em até 420 meses e com as melhores taxas de juros do
              mercado, além de contar com um atendimento personalizado.
            </p>
          </div>
          <button
            class="p-4 text-white bg-[#FF4B8B] sm:w-1/3 rounded-xl hover:rounded-lg cursor-pointer focus:ring-black focus:ring-offset-2 focus:ring-2 font-semibold"
            @click="contact"
          >
            Simule agora
          </button>
        </div>
        <div class="basis-1/2 order-1 md:order-2">
          <NuxtImg
            alt="Familia comemorando"
            src="/images/precisa-de-credito.png"
            class="w-full h-50 sm:h-auto object-cover rounded-t-2xl sm:rounded-none"
            width="660"
            height="645"
          ></NuxtImg>
        </div>
      </div>
    </section>

    <section class="mx-5 sm:mx-10">
      <div class="flex flex-col sm:flex-row w-full">
        <div
          class="basis-1/2 order-2 sm:p-12 p-5 bg-[#F8F8F8] sm:rounded-r-2xl rounded-b-2xl flex flex-col gap-8 justify-between"
        >
          <h2 class="text-[#FF4B8B] sm:text-lg text-[21px]">
            Empréstimo com Garantia de Imóvel
          </h2>
          <div class="flex flex-col gap-4">
            <h3
              class="sm:text-[48px] text-[38px] font-medium leading-tight tracking-tight"
            >
              Tem um imóvel para dar como garantia em empréstimo?
            </h3>
            <p class="text-base text-[#656565]">
              Então você pode contratar um crédito imobiliário e ainda garantir
              e melhor negócio. Através do nosso produto Empréstimo com Garantia
              de Imóvel o seu imóvel fica como garantia de pagamento sem você
              precisar vender ou sair dele. Essa modalidade de crédito
              imobiliário permite que você tenha acesso as menores taxas do que
              as tradicionais de créditos pessoais do mercado.
            </p>
          </div>
          <button
            class="p-4 text-white bg-[#FF4B8B] sm:w-1/3 rounded-xl hover:rounded-lg cursor-pointer focus:ring-black focus:ring-offset-2 focus:ring-2 font-semibold"
            @click="contact"
          >
            Adquira agora
          </button>
        </div>
        <div class="basis-1/2 order-1">
          <NuxtImg
            alt="Familia na sala feliz"
            src="/images/mulher-celular.png"
            class="w-full h-50 sm:h-auto object-cover rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none"
            width="660"
            height="645"
          ></NuxtImg>
        </div>
      </div>
    </section>

    <section class="mx-5 sm:mx-10">
      <div class="flex flex-col sm:flex-row w-full">
        <div
          class="basis-1/2 order-2 md:order-1 sm:p-12 p-5 bg-[#F8F8F8] sm:rounded-l-2xl rounded-b-2xl flex flex-col gap-8 justify-between"
        >
          <h2 class="text-[#FF4B8B] sm:text-lg text-[21px]">Consórcio</h2>
          <div class="flex flex-col gap-4">
            <h3
              class="sm:text-[48px] text-[38px] font-medium leading-tight tracking-tight"
            >
              Como funciona um consórcio?
            </h3>
            <p class="text-base text-[#656565]">
              Primeiro, você escolhe um plano com valor, prazo e parcela que
              mais se encaixam no seu planejamento financeiro. O consórcio para
              imóveis tem a vantagem de não haver a cobrança de pagamento de
              juros, somente a taxa de administração que é dividida por todo o
              prazo. Além destas vantagens o consórcio te permite o Lance
              Embutido que significa que você pode utilizar até 30% da carta de
              crédito para ofertar um lance e tentar ser contemplado mais
              rápido.
            </p>
          </div>
          <button
            class="p-4 text-white bg-[#FF4B8B] sm:w-1/3 rounded-xl hover:rounded-lg cursor-pointer focus:ring-black focus:ring-offset-2 focus:ring-2 font-semibold"
            @click="contact"
          >
            Conheça agora
          </button>
        </div>
        <div class="basis-1/2 order-1 md:order-2">
          <NuxtImg
            alt="Familia na sala feliz"
            src="/images/familia-sala.png"
            class="w-full h-50 sm:h-auto object-cover rounded-t-2xl sm:rounded-r-2xl sm:rounded-t-none"
            width="660"
            height="645"
          ></NuxtImg>
        </div>
      </div>
    </section>

    <section
      class="mx-5 sm:mx-10 flex flex-col gap-10 border-b border-[#D0D5DD]"
    >
      <div class="py-10">
        <h2
          class="sm:text-[126px] text-5xl font-semibold leading-tight tracking-tight"
        >
          A Most já realizou muitos sonhos
        </h2>
        <p class="text-[21px] text-[#656565]">
          Cada sonho realizado é o combustível que nos impulsiona à continuar
          mudando vidas.
        </p>
      </div>
      <div class="flex flex-col sm:flex-row w-full gap-10">
        <div class="basis-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div class="flex flex-col gap-3 justify-center items-center px-3">
            <h3 class="text-[#FF4B8B] text-[56px] font-medium">
              <ClientOnly> +<Countup :end="100" suffix="K" /> </ClientOnly>
            </h3>
            <h4 class="text-lg font-medium">Simulações realizadas</h4>
            <p class="text-[#656565] text-base font-normal text-center">
              Nós só paramos quando encontramos a condição ideal.
            </p>
          </div>
          <div class="flex flex-col gap-3 justify-center items-center px-3">
            <h3 class="text-[#FF4B8B] text-[56px] font-medium">
              <ClientOnly> +<Countup :end="3000" suffix="" /> </ClientOnly>
            </h3>
            <h4 class="text-lg font-medium">Cidades atendidas</h4>
            <p class="text-[#656565] text-base font-normal text-center">
              A Most está presente no país inteiro mudando vidas.
            </p>
          </div>
          <div class="flex flex-col gap-3 justify-center items-center px-3">
            <h3 class="text-[#FF4B8B] text-[56px] font-medium">
              <ClientOnly> +<Countup :end="500" suffix="K" /> </ClientOnly>
            </h3>
            <h4 class="text-lg font-medium">Parceiros ativos</h4>
            <p class="text-[#656565] text-base font-normal text-center">
              Nosso maior ativo são as pessoas que nos cercam.
            </p>
          </div>
          <div class="flex flex-col gap-3 justify-center items-center px-3">
            <h3 class="text-[#FF4B8B] text-[56px] font-medium">
              <ClientOnly> +<Countup :end="50" suffix="K" /> </ClientOnly>
            </h3>
            <h4 class="text-lg font-medium">Sonhos realizados</h4>
            <p class="text-[#656565] text-base font-normal text-center">
              A Most já atendeu diversos clientes e realizou muitos sonhos.
            </p>
          </div>
        </div>
        <div class="basis-1/2">
          <NuxtImg
            alt="Familia na sala feliz"
            src="/images/Most-realiza-sonhos.png"
            class="object-cover"
            width=""
            height="608"
          ></NuxtImg>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Qual o melhor financiamento imobiliário? - Most Br',
  description: 'mostbr.com.br',
})
definePageMeta({
  key: (route) => route.fullPath,
})

const router = useRouter()

function goTo(path: string) {
  router.push(path)
}

function contact() {
  window.open('https://wa.me/5511947271029', '_blank')
}
</script>
