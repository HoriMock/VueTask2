<template>
  <div style="padding: 0 100px">
    <p>STEP3</p>
    <h1>ご相談内容をご記入ください</h1>
    <p>-ご相談内容-</p>
    <textarea
      name="consultationContent"
      id="consultationContent"
      cols="100"
      rows="25"
      v-model="consultationContent"
      @change="enterConsultationContent"
    ></textarea>
    <router-link to="/second" class="back">＜ 前へ戻る</router-link>
    <router-link to="/fourth" class="next">次へ進む ＞</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState(["consultationContent"]),
    consultationContent: {
      get() {
        return this.$store.getters.consultationContent;
      },
      set(value) {
        this.$store.dispatch("enterConsultationContent", value);
      },
    },
  },
  methods: {
    enterConsultationContent() {
      this.$store.commit("enterConsultationContent", this.consultationContent);
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
