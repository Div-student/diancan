<template>
  <div>
    <div class="header"> <span class="arrow-left"></span> <span>餐台</span> </div>
    <div class="floors"><div :class="{active:floorsarray[index]}" v-for="(items, index) in floors" :key="index" @click="changefloors(index, items.deskAreaId)">{{items.deskAreaCaption}}</div></div>
    <div class="desks">
      <div v-for="(items, index) in tablesarray" :key="index" >
        <span>{{items.totalAmount | FormatMoney}}</span>
         {{items.deskCaption}}
        <span>{{items.createTime | FormatTime}}</span>
      </div>
    </div>
     <toats v-bind:contents="contents"></toats>
  </div>
</template>
<script>
import urls from '@/commonjs/urls'
export default {
  name: 'Cantai',
  data () {
    return {
      floors: [],
      floorsarray: [],
      tablesarray: [],
      contents: 'ni hao '
    }
  },
  created () {
    this.getfloors()
    this.changefloors(0, 1001)
  },
  methods: {
    getfloors () {
      this.$axios.post(urls.qryDeskArea).then((data) => {
        this.floors = data.data.responseBody.deskAreaList
        for (var i = 0; i < this.floors.length; i++) {
          if (i === 0) {
            this.floorsarray[i] = true
          } else {
            this.floorsarray[i] = false
          }
        }
      }).catch(() => {
        alert('请求错误')
      })
    },
    changefloors (index, Id) {
      for (var h = 0; h < this.floorsarray.length; h++) {
        this.floorsarray[h] = false
      }
      this.$set(this.floorsarray, index, true)
      let params = new URLSearchParams()
      params.append('deskAreaId', Id)
      this.$axios.post(urls.qryDeskTopList, params).then((data) => {
        this.tablesarray = data.data.responseBody.deskTopList
        console.log(this.tablesarray)
      })
    }
  }
}
</script>
<style scoped>
  .header{
    width:100%;
    height:44px;
    background-color: #000;
    color: white;
    line-height: 44px;
    text-align: center;
    position: relative;
  }
  .arrow-left{
    display: inline-block;
    width:14px;
    height:14px;
    border-left:2px solid white;
    border-bottom:2px solid white;
    transform: rotate(45deg);
    position: absolute;
    top:15px;
    left:10px;
  }
  .floors{
    width:100%;
    height:60px;
    color:#fff;
    background-color: #666666;
    display: flex;
  }
  .floors>div{
    flex: 1;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .active{
    background-color: #999999;
  }
  .desks{
    display:flex;
    flex-wrap: wrap;
  }
  .desks>div{
    height: 75px;
    width:95px;
    line-height: 70px;
    background-color: #DADCFF;
    margin: 10px;
    text-align: center;
    position: relative;
    border-radius: 5px;
    border:1px solid #BDBDBD;
  }
  .desks>div>span:first-child{
    color: #D1001B;
    position: absolute;
    top: -23px;
    left: 1px;
  }
   .desks>div>span:last-child{
    color: #000;
    position: absolute;
    bottom: -24px;
    left: 1px;
  }
</style>
