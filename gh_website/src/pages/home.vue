<template>
  <div class="home">
      <div class="header">
       <div class="header-item">
         <i>大连国昊电力有限公司</i>
       </div>
       <div class="header-item">
         二维码
       </div>
      </div>
      <div class="nav">
         <ul>
          <li v-for="(item, index) in header" :key="index"> {{item}} </li>
        </ul>
      </div>
      <div class="main">
        <el-carousel :interval="5000" arrow="always" height="500px">
          <el-carousel-item v-for="item in carousel" :key="item">
            <div class="carousel-test">{{ item }}</div>
          </el-carousel-item>
        </el-carousel>
        <div class="core-business">
            <div class="core-business-header">N大核心业务</div>
            <div class="core-business-box">
              <div  class="core-business-item" v-for="(item, index) in  coreBusiness" :key="index">
                 <div class="core-business-item-horver display-block" >{{item}}</div>
               </div>
            </div>
        </div>
        <div class="our-server">
            <div class="core-business-header">Why choose us</div>
            <div class="our-server-main">

            </div>
        </div>
      </div>
      <div class="footer">

      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      header: ['首页', '核心业务', '行业应用', '典型案例', '关于国昊'],
      carousel: ['一站式服务，多元化发展', '绿色电网，绿色能源', '选择我们，值得拥有', '期待您的加入'],
      coreBusiness: [' 电能优化方案', '电力承包', '调试业务', '运维业务']
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
    font-size: 45px;
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .carousel-test{
    text-align: center;
    font-size: 38px;
    color: #ffffff;
    margin-top: 250px;
  }
  .core-business-header{
    margin-top: 30px;
    width: 100%;
    text-align: center;
    font-size: 40px;
    color: #3CB371;
  }
  .core-business-box{
    width: 100%;
    padding: 0 100px;
    box-sizing: border-box;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
  }
  .core-business-item{
    width: 260px;
    height: 260px;
    text-align: center;
    line-height: 260px;
    border-radius: 260px;
    font-size: 20px;
    border: 1px solid #32CD32;
    position: relative;
  }
  .core-business-item-horver{
    position: absolute;
    top: 0;
    left: 0;
    width: 260px;
    height: 260px;
    text-align: center;
    line-height: 260px;
    border-radius: 260px;
    font-size: 20px;
    border: 1px solid #32CD32;
    background-color: #333333;
    opacity: 0.7;
    color: #ffffff;
  }
  .display-none{
    display: none;
  }
  .display-block{
    display: block;
  }
  .our-server-main{
    width: calc(100% - 200px);
    margin: 0 100px;
    margin-top: 50px;
    min-height: 400px;
    box-shadow: 1px 5px 10px #C0C0C0;
    border-radius: 25px;
  }
  .footer{
    margin-top: 50px;
    width: 100%;
    min-height: 400px;
    background-color: #000000;
  }
</style>
