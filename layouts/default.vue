<template lang="pug">
  v-app
    v-toolbar(
      :clipped-left="clipped"
      fixed
      app
    )
      div(style="max-width:1785px;width:100%;margin:auto;padding:0 24px;")
        h1 Material Icons
        div
          nuxt-link(to="about")
            span about
    v-content
      v-container
        <nuxt />
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
