<template>
  <fragment>
    <Header />
    <main>
      <div class="container">
        <Table :caption='tableCaption' :th='th' :statistic='statistic' />
      </div>
    </main>
    <Footer />
  </fragment>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Table from './Components/Table'

export default {
  data() {
    return {
      tableCaption: 'Run statistic'
    }
  },
  computed: {
    ...mapGetters({
      th: 'getTableHeader',
      statistic: 'getStatistic'
    })
  },
  components: {
    Header,
    Footer,
    Table
  }
}
</script>

<style lang="postcss">
@import './assets/css/normalize';

@import './assets/css/settings.postcss';
@import './assets/css/app.postcss';
</style>