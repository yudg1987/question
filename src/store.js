import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  numbers: [1, 2, 3],
  questions: [],
  dialogShow: false
}

const mutations = {
  ADD_NUMBER(state, payload) {
    state.numbers.push(payload)
  },
  ADD_QUESTIONS(state, payload) {
    state.questions.push(payload)
  },
  CHANGE_DIALOGSHOW(state, payload) {
    state.dialogShow=payload
  }
}

const actions = {
  addNumber(context, number) {
    context.commit('ADD_NUMBER', number)
  },
  addQuestions(context, question) {
    context.commit('ADD_QUESTIONS', question)
  },
  changeDialogShow(context, dialogShow){
    context.commit('CHANGE_DIALOGSHOW', dialogShow)
  }
}

const getters = {
  getNumbers(state) {
    return state.numbers
  },
  getQuestions(state) {
    return state.questions
  },
  getDialogShow(state) {
    return state.dialogShow
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
