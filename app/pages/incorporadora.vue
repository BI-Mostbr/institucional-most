<template>
  <!-- top_banner_incorporadoras_desktop.png -->
  <div class="flex flex-col gap-8">
    <section class="z-10">
      <div class="sm:block hidden">
        <img
          alt="Casal feliz com a Most"
          src="/images/top_banner_incorporadoras_desktop.png"
          class="w-full h-auto rounded"
          width="1260"
          height="299"
          loading="eager"
        />
      </div>
      <div class="sm:hidden mx-2">
        <img
          alt="Casal feliz com a Most"
          src="/images/top_banner_incorporadoras_most_mobile.png"
          class="w-full h-auto rounded"
          width="420"
          height="781"
          loading="eager"
        />
      </div>
    </section>

    <section
      class="w-screen ml-[calc(50%-50vw)] bg-[#F8F8F8] pb-10 pt-48 -mt-48 sm:pt-32 sm:-mt-32 relative flex gap-12 flex-col"
    >
      <div class="max-w-315 mx-auto px-10">
        <div class="flex flex-col gap-8">
          <h2 class="text-[#FF4B8B] text-[21px] font-semibold">
            Soluções para Incorporadoras
          </h2>
          <h3 class="text-[36px] sm:text-[48px] font-medium leading-10">
            O que a Most pode fazer pela Incorporadora?
          </h3>
          <p class="text-[#656565] font-normal text-[21px]">
            A Most, através de seu sistema integrado de tecnologia, é capaz de
            fornecer um resumo de todos os dados cadastrais logo em seu stand de
            vendas, promovendo maior segurança para seus clientes que desejam um
            crédito imobiliário além da transparência das informações junto a
            incorporadora. Além disso, é feito um acompanhamento durante todo o
            processo da obra, permitindo que a incorporadora tenha ciência do
            perfil de crédito dos clientes atendidos.
          </p>
        </div>
      </div>
      <div
        class="max-w-315 mx-auto px-10 flex flex-col sm:flex-row justify-between"
      >
        <div class="sm:basis-1/3 flex flex-col gap-5 justify-center">
          <h3
            class="text-[36px] sm:text-[48px] font-medium leading-tight tracking-tight"
          >
            E como funciona após a entrega do Habite-se?
          </h3>
          <p class="text-[#656565] font-normal text-base">
            Após a entrega do habite-se fazemos uma nova entrevista com todos os
            clientes e conseguimos indicar a cada um deles os bancos com seu
            perfil. Na emissão do contrato de financiamento imobiliário,
            coletamos assinaturas das partes e levamos a registro, focando na
            velocidade do pagamento ao vendedor.
          </p>
        </div>
        <div class="sm:basis-1/2">
          <img
            alt="Casal feliz com a Most"
            src="/images/casal_andando.png"
            class="w-full h-auto rounded hover:scale-[105%] transition-all duration-300 ease-in-out"
            width="630"
            height="576"
            loading="eager"
          />
        </div>
      </div>
      <div class="max-w-315 mx-auto px-10 mt-10">
        <div class="flex flex-col gap-10">
          <h3 class="text-[36px] sm:text-[48px] font-medium leading-10">
            Quais são as vantagens para a Incorporadora?
          </h3>
          <div class="flex flex-col sm:flex-row gap-15">
            <div
              class="flex flex-col gap-4 sm:basis-1/3 hover:scale-[105%] transition-all duration-300 ease-in-out"
            >
              <div
                class="bg-white flex items-center justify-center w-12 h-12 rounded-xl border border-[#EAECF0] shadow-2xl"
              >
                <Icon name="custom:filechecked" size="24"></Icon>
              </div>
              <div>
                <h4 class="font-medium text-[21px]">Gestão de carteira</h4>
                <p class="text-[#656565] font-normal text-base">
                  Através da MOST permitimos que a Incorporadora faça a gestão
                  da carteira de clientes.
                </p>
              </div>
            </div>
            <div
              class="flex flex-col gap-4 sm:basis-1/3 hover:scale-[105%] transition-all duration-300 ease-in-out"
            >
              <div
                class="bg-white flex items-center justify-center w-12 h-12 rounded-xl border border-[#EAECF0] shadow-2xl"
              >
                <Icon name="custom:cashflow" size="24"></Icon>
              </div>
              <div>
                <h4 class="font-medium text-[21px]">Análise de crédito</h4>
                <p class="text-[#656565] font-normal text-base">
                  Análise de crédito rápida e precisa nos principais bancos
                  privados.
                </p>
              </div>
            </div>
            <div
              class="flex flex-col gap-4 sm:basis-1/3 hover:scale-[105%] transition-all duration-300 ease-in-out"
            >
              <div
                class="bg-white flex items-center justify-center w-12 h-12 rounded-xl border border-[#EAECF0] shadow-2xl"
              >
                <Icon name="custom:checkbox" size="24"></Icon>
              </div>
              <div>
                <h4 class="font-medium text-[21px]">Acompanhamento</h4>
                <p class="text-[#656565] font-normal text-base">
                  Acompanhamento do início ao fim dos contratos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="flex flex-col gap-4 sm:gap-10">
      <div class="mx-10 flex flex-col pt-10">
        <h2
          class="lg:text-[96px] text-5xl font-semibold leading-tight tracking-tight"
        >
          Quer conhecer melhor nossas soluções para Incorporadoras?
        </h2>
        <p class="w-75 self-end text-xs">
          Preencha o formulário e faça parte de nosso ecossistema
        </p>
        <div class="self-end">
          <Icon name="custom:arrow" size="54" />
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 sm:mx-auto gap-8">
        <img
          alt="Quero ser parceiro"
          src="/images/casal_abraco.png"
          class=""
          height="749"
        />
        <div
          class="flex flex-col gap-4 sm:gap-7 items-center sm:items-start justify-end mx-10"
        >
          <div class="flex flex-col gap-2 w-full">
            <label for="nome">Seu da construtora</label>
            <input
              v-model="nameCompany"
              placeholder="Digite..."
              class="w-full pl-2 border border-[#D0D5DD] rounded-lg h-12.5 focus:outline-none focus:ring-black focus:ring-offset-2 focus:ring-2"
            />
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="nome">Seu nome</label>
            <input
              v-model="name"
              placeholder="Digite..."
              class="w-full pl-2 border border-[#D0D5DD] rounded-lg h-12.5 focus:outline-none focus:ring-black focus:ring-offset-2 focus:ring-2"
            />
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="email">Email</label>
            <input
              v-model="email"
              placeholder="Seu melhor e-mail..."
              class="w-full pl-2 border border-[#D0D5DD] rounded-lg h-12.5 focus:outline-none focus:ring-black focus:ring-offset-2 focus:ring-2"
            />
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="nome">Telefone/Celular</label>
            <input
              v-model="phone"
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
              @click="contact"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>

      <div class="border-b border-[#EAECF0] mt-10"></div>
    </section>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Como funciona o crédito imobiliário - Most Br',
  description: 'mostbr.com.br',
})

const optionsSelected = ref<boolean>(false)

function toggleOption(): boolean {
  optionsSelected.value = !optionsSelected.value
  return optionsSelected.value
}

const name = ref('')
const nameCompany = ref('')
const email = ref('')
const phone = ref('')

function contact() {
  const text = `
    Olá!
    Meu nome é ${name.value}
    Email: ${email.value}

    ${nameCompany.value}

    Contato:
    ${phone.value}
  `.trim()

  const url = `https://wa.me/5511947271029?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
}
</script>
