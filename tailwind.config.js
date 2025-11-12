import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#228B22',
        'brand-primary-dark': '#15803D',
        'brand-primary-light': '#F7FDF7',
        'brand-text-main': '#111827',
        'brand-text-content': '#374151',
        'brand-text-muted': '#4B5563',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-1': "url('https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/628f/4070/0af83831ba12ce6351ec9c09a5bc5bd0?Expires=1763942400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GpnEfjtJD-2V3OyI5tOyD2voZJ4cwdPTLny6Ib4QZSMiIzs03~GCGnsZ9TDrw3kXz5MdUuw~fd0RZnLANgnOaslG3jVjYtLBctGagtNGzx3tu3F7~OfpioGX0diWX5WWCPe9zKjsN4w1wx6W1ZE4F8h8eFWTMRkr-uVFlG47UJ2ZJsy4fJLKIfWFO-msbmHM3Luf~SIvSHNm80Hk1Ex7DeT5YRABbtXAkvT2UKZ6u~HG4EQIvdoCzIJb323QrpQMO0y-UhPmgw-GHdhoyqTY1egrKVmCca7MJPdNkguu3WoruZ58fvCjPPNMAuDPlogVzNPIsUd0IiQiwiRGM6UlZQ__')",
        'hero-2': "url('https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/dcf9/9395/8f08fa5c8ad170ed6720be566eeaba3e?Expires=1763942400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RApem5vlgaG4ScUmacj03uuyS0HHI0ltiL~1CVygmI~-dYi1W3NOFQlHTFiOgK7tSBU530YF3PizVZHDx1AhyIervF3KqJ3Hna3zJxDoqkwIY0NcQbIGl4~oGttCp5j442jHz-8TAhn3igp-QzOvwxmkRo3x3cyJ9zaXoi29amOZMKVRHxZTv-RKUPQZwVirIPBoCaKC2rN-CF59RWZ63A7JKk8gF7Hy0vxMThaMmsKWn~PKE~EH00PhdRpSUH047EdXtkxE~bg2Ponj8~xIqIJ8Z19TelgMZ1oG2ot2NPt4dHkSe6jQjg7G0gkwhBgGpESELjxfrv~tpo24EyDvGw__')",
      }
    },
  },
  plugins: [
    typography,
  ],
}
