import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gender: "",
    year: "1990",
    month: "1",
    day: "1",
    insurance: "",
    recommendation: "",
    hospitalization: "",
    consultationContent: "",
  },
  getters: {
    gender: (state) => state.gender,
    year: (state) => state.year,
    month: (state) => state.month,
    day: (state) => state.day,
    insurance: (state) => state.insurance,
    recommendation: (state) => state.recommendation,
    hospitalization: (state) => state.hospitalization,
    consultationContent: (state) => state.consultationContent,
  },
  mutations: {
    selectGender(state, gender) {
      state.gender = gender;
    },
    selectYear(state, year) {
      state.year = year;
    },
    selectMonth(state, month) {
      state.month = month;
    },
    selectDay(state, day) {
      state.day = day;
    },
    selectInsurance(state, Insurance) {
      state.insurance = Insurance;
    },
    selectRecommendation(state, recommendation) {
      state.recommendation = recommendation;
    },
    selectHospitalization(state, hospitalization) {
      state.hospitalization = hospitalization;
    },
    enterConsultationContent(state, consultationContent) {
      state.consultationContent = consultationContent;
    },
  },
  actions: {
    selectGender({ commit }, gender) {
      commit("selectGender", gender);
    },
    selectYear({ commit }, year) {
      commit("selectYear", year);
    },
    selectMonth({ commit }, month) {
      commit("selectMonth", month);
    },
    selectDay({ commit }, day) {
      commit("selectDay", day);
    },
    selectInsurance({ commit }, insurance) {
      commit("selectInsurance", insurance);
    },
    selectRecommendation({ commit }, recommendation) {
      commit("selectRecommendation", recommendation);
    },
    selectHospitalization({ commit }, hospitalization) {
      commit("selectHospitalization", hospitalization);
    },
    enterConsultationContent({ commit }, consultationContent) {
      commit("enterConsultationContent", consultationContent);
    },
  },
});
