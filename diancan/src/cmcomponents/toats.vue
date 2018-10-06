<template>
  <div>
    <div class="toats1">{{contents}}</div>
  </div>
</template>
<script>
export default {
  name: 'Toats',
  data () {
    return {
    }
  },
  props: ['contents']
}
</script>
<style scoped>
  .toats1{
    width:60%;
    height:80px;
    background-color: rgb(0, 0, 0);
    text-align: center;
    color: white;
    line-height: 80px;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: 1px 1px 8px #000
  }
</style>
