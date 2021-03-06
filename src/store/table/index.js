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
  initialData: false,
  filter: {
    multifilter: false,
    query: {}
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
  },
  copyInitialData(state) {
    state.initialData = state.statistic
  },
  setInitialData(state) {
    state.statistic = state.initialData
  },
  filterStatistic(state, params) {
    let [key, actionType] = params

    state.statistic = state.statistic.filter(function(num) {
      switch(actionType) {
        case "!":
          return num[ state.th[key].name ] !== parseFloat(state.th[key].filter.text.slice(1))
        case "=":
          return num[ state.th[key].name ] === parseFloat(state.th[key].filter.text.slice(1))
        case ">":
          return num[ state.th[key].name ] > parseFloat(state.th[key].filter.text.slice(1))
        case "<":
          return num[ state.th[key].name ] < parseFloat(state.th[key].filter.text.slice(1))
        case ">=":
          return num[ state.th[key].name ] >= parseFloat(state.th[key].filter.text.slice(2))
        case "<=":
          return num[ state.th[key].name ] <= parseFloat(state.th[key].filter.text.slice(2))
        default:
          break;
      }
    })
  },
  addToFilterQuery(state, id) {
    if(!state.filter.query[id]) {
      state.filter.query[id] = true
    }
  },
  removeFromFilterQuery(state, id) {
    delete state.filter.query[id]
  }
}

const actions = {
  setFilters({commit, state, getters, dispatch}, key = false) {
    if(key) {
      const actionType = getters.getActionType(key)
  
      if(actionType) {
        commit('addToFilterQuery', key)
      } else {
        commit('removeFromFilterQuery', key)
      }
      dispatch('filterData')
    } else {
      for(let i in state.filter.query) {
        const actionType = getters.getActionType(i)

        if(!actionType) {
          commit('removeFromFilterQuery', i)
        }
      }
      dispatch('filterData')
    }
  },
  filterData({commit, state, getters}) {
    for(let key in state.filter.query) {
      if(state.statistic.length < 1) {
        commit('setInitialData')
      }
      commit('filterStatistic', [key, getters.getActionType(key)])
    }
  }
}

const getters = {
  getTableHeader(state) {
    return state.th
  },
  getStatistic(state) {
    return state.statistic
  },
  getSortingDirection(state) {
    return state.sorting.direction
  },
  getActionType: state => key => {
    const text = state.th[key].filter.text

    if((text.length > 1) && (text[1] != '=') || (text.length > 2) && (text[1] == '=')) {
      switch(text[0]) {
        case '!':
        case '=':
          return text[0]
        case '>':
        case '<':
          return (text[1] === '=') ? `${text[0]}${text[1]}` : text[0]
        default:
          return false
      }
    }
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}