import { stat } from "fs";

const state = {
  th: [
    {
      title: 'Date',
      name: 'date',
      sort: true
    },
    {
      title: 'Weight before',
      name: 'weight_before',
      sort: true
    },
    {
      title: 'Distance',
      name: 'distance',
      sort: true
    },
    {
      title: 'Weight after',
      name: 'weight_after',
      sort: true
    },
    {
      title: 'Temperature',
      name: 'temperature',
      sort: true
    }
  ],
  sorting: {
    field: false,
    direction: false
  },
  statistic: [
    {
      date: '28.01.2019',
      weight_before: 108.9,
      distance: 2,
      weight_after: 108.5,
      temperature: -2
    },
    {
      date: '29.01.2019',
      weight_before: 108.8,
      distance: 4.5,
      weight_after: 107.5,
      temperature: -4
    },
    {
      date: '30.01.2019',
      weight_before: 108.5,
      distance: 4.5,
      weight_after: 107.3,
      temperature: -5
    },
    {
      date: '31.01.2019',
      weight_before: 108.5,
      distance: 2,
      weight_after: 108.1,
      temperature: -10
    },
    {
      date: '01.02.2019',
      weight_before: 109.1,
      distance: 2,
      weight_after: 108.7,
      temperature: -11
    },
    {
      date: '02.02.2019',
      weight_before: 109.8,
      distance: 5.5,
      weight_after: 108.4,
      temperature: -8
    },
    {
      date: '03.02.2019',
      weight_before: 109.7,
      distance: 2.5,
      weight_after: 108.7,
      temperature: -8
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