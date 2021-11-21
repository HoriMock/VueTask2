<template>
  <div style="padding: 0 100px">
    <p>STEP3</p>
    <h1>ご相談内容をご記入ください</h1>
    <p>-ご相談内容-</p>
    <textarea name="" id="" cols="100" rows="25"></textarea>
    <router-link to="/second" class="back">＜ 前へ戻る</router-link>
    <router-link to="/result" class="next">次へ進む ＞</router-link>
  </div>
</template>

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
