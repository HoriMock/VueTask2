<template>
  <div style="padding: 0 100px">
    <p>STEP1</p>
    <h1>お客様の情報を入力してください</h1>
    <p>-性別-</p>
    <input type="radio" id="male" value="男性" v-model="gender" />
    <label for="male">男性</label>
    <input type="radio" id="female" value="女性" v-model="gender" />
    <label for="male">女性</label>
    <p>-生年月日-</p>
    <select id="year" v-model="year">
      <option v-for="i in 101" :value="i + 1920" :key="i">
        {{ (i + 1920) | yearNumber }}
      </option>
    </select>
    <label for="year">年</label>
    <select id="month" v-model="month">
      <option v-for="i in 12" :value="i" :key="i">
        {{ i }}
      </option>
    </select>
    <label for="month">月</label>
    <select id="day" v-model="day">
      <option v-for="i in 31" :value="i" :key="i">
        {{ i }}
      </option>
    </select>
    <label for="year">日</label><br /><br /><br /><br />
    <router-link to="/second" class="next">次へ進む</router-link>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      gender: "男性",
      year: 1990,
      month: 1,
      day: 1,
    };
  },
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
