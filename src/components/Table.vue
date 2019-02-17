<template>
  <table>
    <caption>Table &laquo;{{ caption }}&raquo;</caption>
    <thead>
      <tr>
        <th>Date</th>
        <th>Weight before</th>
        <th>Distance</th>
        <th>Weight after</th>
        <th>Temperature</th>
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
  props: ['caption', 'statistic'],
}
</script>

<style lang="postcss" scoped>
@import '../assets/css/settings';
@import '../assets/css/table';
</style>