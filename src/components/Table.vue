<template>
  <table>
    <caption>Table &laquo;{{ caption }}&raquo;</caption>
    <thead>
      <tr>
        <th :class="[{sorting: value.sort}, (key === selectedTh) ? sortingClass : false]" @click="sort($event.target, value.name)" v-for="(value, key) in th" :key="key">{{ value.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(day, index) in statistic" :key="index">
        <td v-for="(value, key) in day" :key="key">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Table',
  props: ['caption', 'th', 'statistic'],
  data: function () {
    return {
      sortingClass: false,
      selectedTh: false
    }
  },
  computed: {
    ...mapGetters({
      sortingDirection: 'getSortingDirection'
    })
  },
  methods: {
    sort: function (target, name) {
      this.$store.commit('changeDirection', name)
      this.$store.commit('sortStatistic')

      this.sortingClass = `sorting_${this.sortingDirection}`
      this.selectedTh = target.cellIndex
    }
  }
}
</script>

<style lang="postcss" scoped>
@import '../assets/css/table.postcss';
</style>