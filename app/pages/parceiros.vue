<template>
  <div class="flex flex-col">
    <section class="">
      <div class="sm:block hidden">
        <NuxtImg
          alt="Casal feliz com a Most"
          src="/images/top_banner_parceiros_most_desktop.png"
          width="1260"
          height="299"
          loading="eager"
          placeholder="none"
          :preload="true"
        />
      </div>
      <div class="sm:hidden mx-2">
        <NuxtImg
          alt="Casal feliz com a Most"
          src="/images/top_banner_parceiros_most_mobile.png"
          height="781"
          loading="eager"
          placeholder="none"
          :preload="true"
          class="w-full"
        />
      </div>
    </section>

    <section
      class="grid sm:grid-cols-4 grid-cols-1 gap-6 sm:w-full mx-10 mt-21.75"
    >
      <div class="flex flex-col gap-2">
        <label for="nome">Seu nome</label>
        <input
          placeholder="Digite..."
          class="pl-2 border border-[#D0D5DD] rounded-lg h-12.5 focus:outline-none focus:ring-black focus:ring-offset-2 focus:ring-2"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="email">Email</label>
        <input
          placeholder="Digite seu melhor e-mail..."
          class="pl-2 border border-[#D0D5DD] rounded-lg h-12.5 focus:outline-none focus:ring-black focus:ring-offset-2 focus:ring-2"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="phone">Telefone/Celular</label>
        <input
          placeholder="Digite..."
          class="pl-2 border border-[#D0D5DD] rounded-lg h-12.5 focus:outline-none focus:ring-black focus:ring-offset-2 focus:ring-2"
        />
      </div>
      <div class="flex flex-col justify-end gap-2">
        <button
          class="sm:w-42.5 w-full p-3 rounded-xl text-lg font-medium hover:rounded-lg bg-[#FF4B8B] cursor-pointer text-white focus:ring-black focus:ring-offset-2 focus:ring-2"
        >
          Enviar
        </button>
      </div>
    </section>

    <section class="mx-10 grid grid-cols-1 sm:grid-cols-2 gap-12 mt-21.75">
      <div class="flex flex-col gap-12 basis-2/3">
        <div class="flex flex-col gap-5">
          <h2 class="text-[21px] font-semibold text-[#FF4B8B]">
            O parceiro que você precisava
          </h2>
          <h3
            class="text-[36px] sm:text-[48px] font-medium leading-tight tracking-tight sm:w-195"
          >
            Está buscando um parceiro estratégico para suas operações de crédito
            imobiliário?
          </h3>
        </div>
        <div class="flex flex-col gap-8">
          <div class="flex flex-col sm:flex-row gap-4">
            <div
              class="w-12 h-12 p-3 rounded-xl border border-[#EAECF0] flex items-center justify-center transition-color"
            >
              <Icon name="custom:clock" size="24" />
            </div>
            <div>
              <h3 class="font-medium text-[21px] py-2">
                Agilidade e Transparência
              </h3>
              <p class="text-[#656565]">
                Ao se tornar um parceiro da Most, você terá todos os seus
                processos em um único lugar e de forma totalmente digital.
              </p>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-4">
            <div
              class="w-12 h-12 p-3 rounded-xl border border-[#EAECF0] flex items-center justify-center transition-color"
            >
              <Icon name="custom:filechecked" size="24" />
            </div>
            <div>
              <h3 class="font-medium text-[21px] py-2">Serviços</h3>
              <p class="text-[#656565]">
                Uma vez que o seu cliente precisar de uma simulação de crédito
                imobiliário, Empréstimo com Garantia de Imóvel ou Consórcio
                nosso sistema cotará em vários bancos e seguradoras de uma única
                vez, buscando a melhor taxa.
              </p>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-4">
            <div
              class="w-12 h-12 p-3 rounded-xl border border-[#EAECF0] flex items-center justify-center transition-color"
            >
              <Icon name="custom:checkbox" size="24" />
            </div>
            <div>
              <h3 class="font-medium text-[21px] py-2">Vantagens</h3>
              <p class="text-[#656565]">
                Para imobiliárias, assessorias e incorporadoras a Most é a
                parceira capaz de aumentar a média de vendas e locações de
                imóveis já que permite cotar e fechar negócios rapidamente.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex relative">
        <div class="z-10 absolute right-11 top-40 float-y-r">
          <NuxtImg
            alt="Casal feliz com a Most"
            src="/images/setas.png"
            loading="eager"
            height="173"
            placeholder="none"
            :preload="true"
            width="91"
            class="w-14 sm:w-auto h-auto"
          ></NuxtImg>
        </div>
        <NuxtImg
          alt="Casal feliz com a Most"
          src="/images/senhor.png"
          loading="eager"
          height="781"
          placeholder="none"
          :preload="true"
          class="float-x"
        ></NuxtImg>
        <div class="z-10 absolute left-6 bottom-55 float-y-t">
          <NuxtImg
            alt="Casal feliz com a Most"
            src="/images/setas.png"
            loading="eager"
            height="173"
            placeholder="none"
            :preload="true"
            width="91"
            class="w-14 sm:w-auto h-auto"
          ></NuxtImg>
        </div>
      </div>
    </section>

    <section
      class="w-screen ml-[calc(50%-50vw)] bg-[#F8F8F8] py-12 sm:py-21.75"
    >
      <div class="flex gap-12 sm:gap-21 flex-col items-center mx-auto w-full">
        <div class="flex justify-center items-center">
          <h2
            class="text-[29px] mx-10 sm:mx-0 sm:text-[40px] text-center font-semibold sm:max-w-220 leading-tight tracking-tight"
          >
            Produtos para nossos parceiros venderem em alto volume e com mais
            agilidade
          </h2>
        </div>
        <div class="flex flex-col sm:flex-row gap-8 sm:max-w-300 mx-10">
          <div
            class="flex flex-col gap-5 w-full hover:scale-[105%] transition-all duration-300 ease-in-out"
          >
            <NuxtImg
              alt="Casal feliz com a Most"
              src="/images/analise_de_credito.png"
              loading="eager"
              placeholder="none"
              class="h-61.25 object-contain"
            ></NuxtImg>
            <h4 class="text-[28px] font-medium">Análise de Crédito</h4>
            <p class="text-base text-[#656565]">
              Através da análise de crédito que oferecemos aos nossos parceiros
              somos capazes de entregar informações de seus clientes finais que
              são de suma importância para que façam negócios assertivos, sem
              risco e com alta confiabilidade.
            </p>
          </div>
          <div
            class="flex flex-col gap-5 w-full hover:scale-[105%] transition-all duration-300 ease-in-out"
          >
            <NuxtImg
              alt="Casal feliz entrando em um comodo vazio"
              src="/images/credito_imobiliario.png"
              loading="eager"
              placeholder="none"
              class="h-61.25 object-contain"
            ></NuxtImg>
            <h4 class="text-[28px] font-medium">Crédito Imobiliário</h4>
            <p class="text-base text-[#656565]">
              Através de nosso sistema que unifica os principais fornecedores de
              crédito, sua venda se torna mais rápida, transparente e com taxas
              menores para seu cliente final, permitindo que você tenha uma
              melhor negociação e todo respaldo técnico de nossos consultores
              especializados.
            </p>
          </div>
          <div
            class="flex flex-col gap-5 w-full hover:scale-[105%] transition-all duration-300 ease-in-out"
          >
            <NuxtImg
              alt="Casal feliz sentado na sala"
              src="/images/emprestimo_com_garantia_de_imovel.png"
              loading="eager"
              placeholder="none"
              class="h-61.25 object-contain"
            ></NuxtImg>
            <h4 class="text-[28px] font-medium">
              Empréstimo com Garantia de Imóvel
            </h4>
            <p class="text-base text-[#656565]">
              Através deste produto conseguimos encaixar seu cliente final em
              uma das negociações mais rápidas e eficientes de empréstimo, sem
              risco e com possibilidade de gerar melhores negócios. O empréstimo
              com garantia de imóvel é uma dos produtos que mais beneficiam seu
              cliente final na hora da negociação com banco.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="pt-12 sm:pt-21.75">
      <SendEmail></SendEmail>
    </div>
  </div>
</template>
<script setup>
useSeoMeta({
  title: 'Parceiro para crédito imobiliário - Most Br',
  description: 'mostbr.com.br',
})
</script>
<style scoped>
.float-x {
  animation: floatX 4s ease-in-out infinite;
}

@keyframes floatX {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(24px);
  }
}

.float-y-r {
  animation: floatYR 4s ease-in-out infinite;
}

@keyframes floatYR {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(24px);
  }
}

.float-y-t {
  animation: floatYT 4s ease-in-out infinite;
}

@keyframes floatYT {
  0%,
  100% {
    transform: translateY(24px);
  }
  50% {
    transform: translateY(0);
  }
}
</style>
