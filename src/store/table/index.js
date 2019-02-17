const state = {
  statistic: [
    {
      date: '29.01.2019',
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

const mutations = {}

const actions = {}

const getters = {
  getStatistic(state) {
    return state.statistic
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}