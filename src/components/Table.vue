<template>
  <table>
    <caption>Table &laquo;{{ caption }}&raquo;</caption>
    <thead>
      <tr>
        <th :class="{sorting: value.sort}" @click="sort(value.direction)" v-for="(value, key) in th" :key="key">{{ value.title }}</th>
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
export default {
  name: 'Table',
  props: ['caption', 'th', 'statistic'],
  data: function () {
    return {
      //
    }
  },
  methods: {
    sort: function (direction) {
      //
    }
  }
}
</script>

<style lang="postcss" scoped>
@import '../assets/css/table.postcss';
</style>