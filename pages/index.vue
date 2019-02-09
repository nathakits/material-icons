<template lang="pug">
  div
    h1 Material icons

    v-layout(column wrap)
      div.py-3.fullWidth(
        v-for="(iconarray, index) in arrIcons"
        :id="iconarray.title"
      )
        h2 {{ iconarray.title.charAt(0).toUpperCase() + iconarray.title.slice(1) }}
        v-layout(row wrap)
          template(v-for="(svgs, index) in iconarray.svgs")
            template(v-if="!svgs.match(/_48px.svg|_12px.svg|_18px.svg|_36px.svg|battery|signal/g, '')")
              v-flex(xs3 sm3)
                v-btn.mx-2
                  v-icon {{ svgs.replace(/_24px.svg/g, '').replace(/\bic_/g, '') }}
                  span {{ svgs.replace(/_24px.svg/g, '').replace(/\bic_/g, '') }}


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
  },
}

</script>

<style lang="stylus" scoped>
.fullWidth
 width 100%
</style>

