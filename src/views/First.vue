<template>
  <div style="padding: 0 100px">
    <p>STEP1</p>
    <h1>お客様の情報を入力してください</h1>
    <p>-性別-</p>
    <input
      type="radio"
      id="male"
      value="男性"
      v-model="gender"
      @change="selectGender"
    />
    <label for="male">男性</label>
    <input
      type="radio"
      id="female"
      value="女性"
      v-model="gender"
      @change="selectGender"
    />
    <label for="male">女性</label>
    <p>-生年月日-</p>
    <select name="year" id="year" v-model="year" @change="selectYear">
      <option v-for="(i, key) in 101" :value="i + 1920" :key="key">
        {{ (i + 1920) | yearNumber }}
      </option>
    </select>
    <label for="year">年</label>
    <select name="month" id="month" v-model="month" @change="selectMonth">
      <option v-for="(i, key) in 12" :value="i" :key="key">
        {{ i }}
      </option>
    </select>
    <label for="month">月</label>
    <select name="day" id="day" v-model="day" @change="selectDay">
      <option v-for="(i, key) in 31" :value="i" :key="key">
        {{ i }}
      </option>
    </select>
    <label for="day">日</label><br /><br /><br /><br />
    <router-link to="/second" class="next">次へ進む ＞</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  filters: {
    yearNumber(y) {
      let result;
      if (y > 2018) {
        result = `${y} (令和${y - 2018}年)`;
      } else if (y > 1988) {
        result = `${y} (平成${y - 1988}年)`;
      } else if (y > 1925) {
        result = `${y} (昭和${y - 1925}年)`;
      } else if (y > 1911) {
        result = `${y} (大正${y - 1911}年)`;
      }
      return result;
    },
  },
  computed: {
    ...mapState(["gender", "year", "month", "day"]),
    gender: {
      get() {
        return this.$store.getters.gender;
      },
      set(value) {
        this.$store.dispatch("selectGender", value);
      },
    },
    year: {
      get() {
        return this.$store.getters.year;
      },
      set(value) {
        this.$store.dispatch("selectYear", value);
      },
    },
    month: {
      get() {
        return this.$store.getters.month;
      },
      set(value) {
        this.$store.dispatch("selectMonth", value);
      },
    },
    day: {
      get() {
        return this.$store.getters.day;
      },
      set(value) {
        this.$store.dispatch("selectDay", value);
      },
    },
  },
  methods: {
    selectGender() {
      this.$store.commit("selectGender", this.gender);
    },
    selectYear() {
      this.$store.dispatch("selectYear", this.year);
    },
    selectMonth() {
      this.$store.dispatch("selectMonth", this.month);
    },
    selectDay() {
      this.$store.dispatch("selectDay", this.day);
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
</style>
