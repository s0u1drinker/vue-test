<template>
  <fragment>
    <Header />
    <main>
      <div class="container">
        <Table :caption='tableCaption' :statistic='statistic'/>
      </div>
    </main>
    <Footer />
  </fragment>
</template>

<script>
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
    statistic() {
      return this.$store.getters.getStatistic
    }
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

@import './assets/css/settings';
@import './assets/css/app';
</style>