<template lang="pug">
  div
    h1 Material icons

    v-layout(column wrap)
      div.py-3(v-for="(iconarray, index) in arrIcons" :id="iconarray.title")
        h2 {{ iconarray.title.charAt(0).toUpperCase() + iconarray.title.slice(1) }}
        v-layout(row wrap)
          template(v-for="(svgs, index) in iconarray.svgs")
            v-flex(xs4 sm4)
              p {{ svgs }}


</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import arrIcons from '~/assets/material-icons.json'


export default {
  data: () => {
    return {
      arrIcons,
    }
  },
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
