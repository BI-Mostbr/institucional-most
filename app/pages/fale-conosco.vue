<template>
  <div class="flex flex-col gap-8">
    <section
      class="w-screen ml-[calc(50%-50vw)] bg-[#F8F8F8] flex gap-12 flex-col items-center"
    >
      <div class="max-w-300 py-14 flex flex-col gap-3 font-medium mx-10">
        <h2 class="text-[#FF4B8B]">Fale conosco</h2>
        <h3 class="text-[36px] sm:text-[96px] leading-tight tracking-tight">
          Olá como nós podemos te ajudar hoje?
        </h3>
        <p class="text-[#656565] text-base">
          Sempre alguém de prontidão para te atender.
        </p>
      </div>
    </section>
    <section class="flex flex-col gap-4 sm:gap-10 mx-10">
      <h2 class="text-[28px] font-medium">
        Deixe sua mensagem. Nosso time retornará em breve
      </h2>
      <div class="flex flex-col gap-5">
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
          <label for="email">Telefone/Celular</label>
          <input
            placeholder="Seu melhor e-mail..."
            class="w-full pl-2 border border-[#D0D5DD] rounded-lg h-12.5 focus:outline-none focus:ring-black focus:ring-offset-2 focus:ring-2"
          />
        </div>
        <div class="flex flex-col gap-2 w-full">
          <label for="phone">Digite uma mensagem</label>
          <textarea
            placeholder="Digite..."
            class="w-full pl-2 border border-[#D0D5DD] rounded-lg h-12.5 focus:outline-none focus:ring-black focus:ring-offset-2 focus:ring-2 min-h-37.5"
          />
        </div>
        <div
          class="w-full bg-[#FF4B8B] rounded-xl h-12.5 flex items-center justify-center text-white cursor-pointer font-medium hover:rounded-lg"
        >
          <button>Enviar</button>
        </div>
      </div>
    </section>
  </div>
</template>
