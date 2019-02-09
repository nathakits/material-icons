<template lang="pug">
  div
    h1 Material icons


    div(v-for="(iconarray, index) in arrIcons" )
      h1 {{ iconarray.title }}
      div(v-for="(svgs, index) in iconarray.svgs")
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
