import { stat } from "fs";

const state = {
  th: [
    {
      title: 'Date',
      name: 'date',
      sort: true,
      filter: {
        show: true,
        text: ''
      }
    },
    {
      title: 'Weight before',
      name: 'weight_before',
      sort: true,
      filter: {
        show: true,
        text: ''
      }
    },
    {
      title: 'Distance',
      name: 'distance',
      sort: true,
      filter: {
        show: true,
        text: ''
      }
    },
    {
      title: 'Weight after',
      name: 'weight_after',
      sort: true,
      filter: {
        show: true,
        text: ''
      }
    },
    {
      title: 'Temperature',
      name: 'temperature',
      sort: true,
      filter: {
        show: true,
        text: ''
      }
    },
    {
      title: 'Difference',
      name: 'difference',
      sort: true,
      filter: {
        show: true,
        text: ''
      }
    }
  ],
  sorting: {
    field: false,
    direction: false
  },
  statistic: [
    {
      date: 1548712800,
      weight_before: 108.9,
      distance: 2,
      weight_after: 108.5,
      temperature: -2,
      get difference() {
        return (this.weight_before - this.weight_after).toFixed(1)
      }
    },
    {
      date: 1548799200,
      weight_before: 108.8,
      distance: 4.5,
      weight_after: 107.5,
      temperature: -4,
      get difference() {
        return (this.weight_before - this.weight_after).toFixed(1)
      }
    },
    {
      date: 1548885600,
      weight_before: 108.5,
      distance: 4.5,
      weight_after: 107.3,
      temperature: -5,
      get difference() {
        return (this.weight_before - this.weight_after).toFixed(1)
      }
    },
    {
      date: 1548972000,
      weight_before: 108.5,
      distance: 2,
      weight_after: 108.1,
      temperature: -10,
      get difference() {
        return (this.weight_before - this.weight_after).toFixed(1)
      }
    },
    {
      date: 1549058400,
      weight_before: 109.1,
      distance: 2,
      weight_after: 108.7,
      temperature: -11,
      get difference() {
        return (this.weight_before - this.weight_after).toFixed(1)
      }
    },
    {
      date: 1549144800,
      weight_before: 109.8,
      distance: 5.5,
      weight_after: 108.4,
      temperature: -8,
      get difference() {
        return (this.weight_before - this.weight_after).toFixed(1)
      }
    },
    {
      date: 1549231200,
      weight_before: 109.7,
      distance: 2.5,
      weight_after: 108.7,
      temperature: -8,
      get difference() {
        return (this.weight_before - this.weight_after).toFixed(1)
      }
    }
  ]
}

const mutations = {
  changeDirection(state, name) {
    if(state.sorting.field !== name) {
      state.sorting.field = name
      state.sorting.direction = 'asc'
    } else {
      state.sorting.direction = (state.sorting.direction === 'asc') ? 'desc' : 'asc'
    }
  },
  sortStatistic(state) {
    state.statistic.sort(function (a, b) {
      if(state.sorting.direction === 'asc') {
        return (a[state.sorting.field] > b[state.sorting.field]) ? 1 : (a[state.sorting.field] < b[state.sorting.field]) ? -1 : 0
      } else {
        return (a[state.sorting.field] < b[state.sorting.field]) ? 1 : (a[state.sorting.field] > b[state.sorting.field]) ? -1 : 0
      }
    })
  }
}

const actions = {}

const getters = {
  getTableHeader(state) {
    return state.th
  },
  getStatistic(state) {
    return state.statistic
  },
  getSortingDirection(state) {
    return state.sorting.direction
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}