<template>
  <div style="padding: 0 100px">
    <p>STEP2</p>
    <h1>以下にお答えください</h1>
    <p>現在、生命保険に加入されていますか？</p>
    <input
      type="radio"
      id="yes"
      value="はい"
      v-model="insurance"
      @click="question2 = true"
      @change="selectInsurance"
    />
    <label for="yes">はい</label>
    <input
      type="radio"
      id="no"
      value="いいえ"
      v-model="insurance"
      @click="question2 = true"
      @change="selectInsurance"
    />
    <label for="no">いいえ</label>
    <p v-if="question2">
      現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？
    </p>
    <input
      type="radio"
      id="yes"
      value="はい"
      v-model="recommendation"
      v-if="question2"
      @click="question3 = true"
      @change="selectRecommendation"
    />
    <label for="yes" v-if="question2">はい</label>
    <input
      type="radio"
      id="no"
      value="いいえ"
      v-model="recommendation"
      v-if="question2"
      @click="question3 = true"
      @change="selectRecommendation"
    />
    <label for="no" v-if="question2">いいえ</label>
    <p v-if="question3">
      過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？
    </p>
    <input
      type="radio"
      id="yes"
      value="はい"
      v-model="hospitalization"
      v-if="question3"
      @change="selectHospitalization"
    />
    <label for="yes" v-if="question3">はい</label>
    <input
      type="radio"
      id="no"
      value="いいえ"
      v-model="hospitalization"
      v-if="question3"
      @change="selectHospitalization"
    />
    <label for="no" v-if="question3">いいえ</label><br /><br />
    <router-link to="/" class="back">＜ 前へ戻る</router-link>
    <router-link to="/third" class="next">次へ進む ＞</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {
      question2: false,
      question3: false,
    };
  },
  computed: {
    ...mapState(["insurance", "recommendation", "hospitalization"]),
    insurance: {
      get() {
        return this.$store.getters.insurance;
      },
      set(value) {
        this.$store.dispatch("selectInsurance", value);
      },
    },
    recommendation: {
      get() {
        return this.$store.getters.recommendation;
      },
      set(value) {
        this.$store.dispatch("selectRecommendation", value);
      },
    },
    hospitalization: {
      get() {
        return this.$store.getters.hospitalization;
      },
      set(value) {
        this.$store.dispatch("selectHospitalization", value);
      },
    },
  },
  methods: {
    selectInsurance() {
      this.$store.commit("selectInsurance", this.insurance);
    },
    selectRecommendation() {
      this.$store.commit("selectRecommendation", this.recommendation);
    },
    selectHospitalization() {
      this.$store.commit("selectHospitalization", this.hospitalization);
    },
  },
};
</script>

<style scoped>
.next {
  background: rgb(8, 211, 86);
  color: #fff;
  padding: 16px 40px;
  text-decoration: none;
  border-radius: 5px;
}
.back {
  background: rgb(8, 211, 86);
  color: #fff;
  padding: 16px 40px;
  text-decoration: none;
  border-radius: 5px;
  margin-right: 30px;
}
</style>
