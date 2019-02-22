<template>
  <table class="table">
    <caption>Table &laquo;{{ caption }}&raquo;</caption>
    <thead>
      <tr>
        <th :class="[{sorting: value.sort}, (key === selectedTh) ? sortingClass : false]"
            @click="sort($event.target, value.name)"
            v-for="(value, key) in th" :key="key">
          {{ value.title }}
          <input type="text" class="table__filter" v-if="value.filter.show" @keyup="filter(event)">
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(day, index) in statistic" :key="index">
        <td v-for="(value, key) in day" :key="key">{{ (key === 'date') ? getBeautifulDate(value) : value }}</td>
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
      if(target.classList.contains('sorting')) {
        this.$store.commit('changeDirection', name)
        this.$store.commit('sortStatistic')

        this.sortingClass = `sorting_${this.sortingDirection}`
        this.selectedTh = target.cellIndex
      }
    },
    getBeautifulDate: (timestamp) => {
      const date = new Date(timestamp * 1000)
      const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
      const day = (date.getDate() < 10) ? `0${date.getDate()}` : date.getDate()

      return `${day}.${months[date.getMonth()]}.${date.getFullYear()}`
    }
  }
}
</script>

<style lang="postcss" scoped>
@import '../assets/css/table.postcss';
</style>