import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/components/**/*.{vue,ts,js}',
    './app/layouts/**/*.{vue,ts,js}',
    './app/pages/**/*.{vue,ts,js}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
}

export default config
