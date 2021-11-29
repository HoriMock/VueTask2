<template>
  <div style="padding: 0 100px">
    <p>STEP4</p>
    <h1>以下の内容をご確認ください</h1>
    <p>-性別-</p>
    <p>{{ gender }}</p>
    <p>-生年月日-</p>
    <p>
      {{ $store.state.year }}年{{ $store.state.month }}月{{
        $store.state.day
      }}日
    </p>
    <p>-現在、生命保険に加入されていますか？-</p>
    <p>{{ insurance }}</p>
    <p>
      -現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-
    </p>
    <p>{{ recommendation }}</p>
    <p>
      -過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-
    </p>
    <p>{{ hospitalization }}</p>
    <p>-ご相談内容-</p>
    <p>{{ consultationContent }}</p>
    <router-link to="/third" class="back">＜ 前へ戻る</router-link>
    <router-link to="/fourth" class="next">送信 ＞</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState([
      "gender",
      "year",
      "month",
      "day",
      "insurance",
      "recommendation",
      "hospitalization",
      "consultationContent",
    ]),
  },
};
</script>

<style></style>

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
