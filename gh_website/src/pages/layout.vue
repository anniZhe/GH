<template>
  <div class="home">
      <div class="header">
       <div class="header-item">
         <i>大连国昊电力工程建设有限公司</i>
       </div>
       <div class="header-item">
         二维码
       </div>
      </div>
       <div class="nav">
        <ul>
          <li v-for="(item, index) in headerAry" :key="index" @click="pageTo(item.path)"> {{item.name}} </li>
        </ul>
      </div>
      <div>
        <router-view></router-view>
      </div>
      <div class="footer">
        <div class="footer-item">
          <div>项目单位</div>
          <div class="footer-item-text">大连国昊电力工程建设有限公司</div>
          <div>地址</div>
          <div class="footer-item-text">大连市甘井子区汇仁街41号1-7-1</div>
        </div>
        <div class="footer-item">
          <div>电话</div>
          <div class="footer-item-text">13940884482</div>
          <div>固定电话</div>
          <div class="footer-item-text">0411-39513163</div>
        </div>
        <div class="footer-item">
          <div>二维码</div>
          <div class="footer-item-text">13940884482</div>
          <div>固定电话</div>
          <div class="footer-item-text">0411-39513163</div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      headerAry: [
        {
          name: '首页',
          path: '/'
        },
        {
          name: '核心业务',
          path: '/coreBusiness'
        },
        {
          name: '行业应用',
          path: '/'
        },
        {
          name: '典型案例',
          path: '/'
        },
        {
          name: '关于国昊',
          path: '/aboutUs'
        }
      ]
    }
  },
  methods: {
    pageTo (pathName) {
      this.$router.push({
        path: pathName
      })
    }
  }
}
</script>
<style>
  .home{
    width: 100%;
  }
  .header{
    display: flex;
    justify-content: space-between;
    height: 80px;
    line-height: 80px;
    padding: 20px 200px;
    box-sizing: border-box;
  }
  .header-item{
    text-align: center;
  }
  .header-item:nth-of-type(1){
    font-size: 40px;
  }
  .nav{
    margin: 0 auto;
    margin-top: 30px;
  }
  .nav ul{
    width: 100%;
    padding: 0px 220px;
    box-sizing: border-box;
    height: 80px;
    line-height: 80px;
    font-size: 20px;
    color: #ffffff;
    display: flex;
    justify-content:start;
    background-color: #32CD32;
  }
  .nav ul li{
    width: calc(100% / 5);
    text-align: center;
  }
  .footer{
    display: flex;
    padding: 50px 100px;
    box-sizing: border-box;
    margin-top: 50px;
    width: 100%;
    min-height: 400px;
    background-color: #000000;
    color: #ffffff;
  }
  .footer-item{
    margin-left: 50px;
    margin-right: 250px;
    max-width: 300px;
    font-size: 18px;
    line-height: 40px;

  }
  .footer-item-text{
    padding-left: 20px;
    margin-bottom: 40px;
  }
</style>
