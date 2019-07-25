<template>
  <div class="about">
      <p>运单号：<a-input id="userinput" v-model="id"></a-input></p>
      <p>取件时间：<a-input id="userinput" v-model="bookinkTime"></a-input></p>
      <a-button>预约</a-button>
      <a-button>取消</a-button>
  </div>
</template>

<s

<style lang="scss">
#userinput {
    width:350px;
    height:30px;
}
</style>