<template>
  <div class="bg topbar fs-sm">
    <div class="w-1200 d-flex jc-between">
      <ul class="d-flex">
        <li>
          <a href="/newIndex.do" class="d-flex ai-center"
            ><i class="sprite sprite-1 mr-1"></i><span>钢宝首页</span></a
          >
        </li>
        <li class="mx-2 text-hui6">金陵钢宝网欢迎你！</li>
        <li class="">
          <a
            class="text-red001"
            href="https://bsp.gangbao365.com/bsplatform/login/index.do"
            >请登录</a
          >
        </li>
        <li class="ml-3">
          <a
            class=""
            href="https://bsp.gangbao365.com/bsplatform/bsp/menber/reg/info.do"
            >免费注册</a
          >
        </li>
        <li class="ml-5">
          <span class="text-red000"
            >欢迎来到金陵钢宝网！全国服务热线：400-828-0830</span
          >
        </li>
      </ul>
      <ul class="d-flex">
        <li class="">
          <a href="/exp/hangsource/buy/shopping/list.do"
            >购物车（<span id="indexGwcNum" class="text-red001">0</span>）</a
          >
        </li>
        <li class="mx-2">|</li>
        <li class=""><a href="/me/home/index.do">我的钢宝</a></li>
        <li class="mx-2">|</li>
        <li class="">
          <a href="/exp/hangsource/buy/picksource/validateTd.do">提单验证</a>
        </li>
        <li class="mx-2">|</li>
        <li class="">
          <div id="phoneApp">
            <el-dropdown>
              <span class="fs-sm text-l">
                手机APP
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <img
                    src="https://web.gangbao365.com/webresource/images/gb/anzhuo.png"
                    alt=""
                    srcset=""
                  />
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <!-- <div id="appimg">
              <img
                src="https://web.gangbao365.com/webresource/images/gb/anzhuo.png"
              />
            </div> -->
          </div>
        </li>
        <li class="mx-2">|</li>
        <li class="">
          <a
            href="http://web.gangbao365.com/webresource/helpcenter/helpcenter.html"
            >帮助中心</a
          >
        </li>
        <li class="mx-2">|</li>
        <li class="">
          <a href="/exp/hangsource/buy/picksource/contacts.do">联系我们</a>
        </li>
        <li class="mx-2">|</li>
        <li class="">
          <div id="wzdh">
            <el-dropdown>
              <span class="fs-sm text-l">
                网站导航
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <a href="https://www.gangbao365.cn" target="_blank"
                    >钢宝股份</a
                  >
                </el-dropdown-item>
                <el-dropdown-item>
                  <router-link to="/Gbshop">现货商城</router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <a href="https://bsp.gangbao365.com/bsplatform/shop/index.do"
                    >联营商铺</a
                  >
                </el-dropdown-item>
                <el-dropdown-item>
                  <a href="http://www.gangbao365.net/index.do" target="_blank"
                    >钢宝拍卖</a
                  >
                </el-dropdown-item>
                <el-dropdown-item>
                  <a href="/exp/auction/buy/bout/auction.do">钢材竞价</a>
                </el-dropdown-item>
                <el-dropdown-item>
                  <a href="/exp/tender/buy/bout/auction.do">钢坯竞价</a>
                </el-dropdown-item>
                <el-dropdown-item>
                  <a href="/exp/business/index/index.do">运输招标</a>
                </el-dropdown-item>
                <el-dropdown-item>
                  <a href="http://c2m.gangbao365.com">C2M新智造</a>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <!-- <ul id="wzul">
              <li>
                <a href="https://www.gangbao365.cn" target="_blank">钢宝股份</a>
              </li>
              <li>
                <a href="/exp/hangsource/buy/picksource/list.do">现货商城</a>
              </li>
              <li>
                <a href="https://bsp.gangbao365.com/bsplatform/shop/index.do"
                  >联营商铺</a
                >
              </li>
              <li>
                <a href="http://www.gangbao365.net/index.do" target="_blank"
                  >钢宝拍卖</a
                >
              </li>
              <li><a href="/exp/auction/buy/bout/auction.do">钢材竞价</a></li>
              <li><a href="/exp/tender/buy/bout/auction.do">钢坯竞价</a></li>
              <li><a href="/exp/business/index/index.do">运输招标</a></li>
              <li><a href="http://c2m.gangbao365.com">C2M新智造</a></li>
            </ul> -->
          </div>
        </li>
      </ul>
    </div>
    <div class="w-1200 d-flex jc-between header-1">
      <div class="logo">
        <a title="钢宝网" href="#"></a>
      </div>
      <div class="search topheader">
        <el-input placeholder="请输入您要搜索的关键字" prefix-icon="el-icon-search" v-model="input2">
          <!-- <template slot="prepend" class=""><i class="sprite sprite-search"></i></template> -->
          <template slot="append" class="fs-llg">搜索</template>
          <!-- <template slot="append">搜索</template> -->
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input2: ''
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import "../assets/scss/_variables";
.header-1{
  height: 65px;
  padding: 20px 0;
  .logo{
    a{
      background: url(../assets/image/logo.png);
      width: 500px;
      height: 65px;
      display: inline-block;
    }
  }
  .search.topheader{
    .el-input{
      width: 415px;
    }
    .el-input-group__append{
      background-color: map-get($map: $colors, $key: red001);
      color: #fff;
      border-radius: 0 10px 10px 0;
    }
    // .el-input__inner{
    //   border-radius: 5%;
    // }
  }
}
.topbar {
  width: 100%;
  line-height: 40px;
  height: 40px;
  .w-1200 {
    width: 1200px;
    margin: 0 auto;
    a:link {
      color: map-get($colors, l);
    }
    a:visited {
      color: map-get($map: $colors, $key: l);
    }
    a:hover {
      color: map-get($map: $colors, $key: h);
    }
    a:active {
      color: map-get($map: $colors, $key: l);
    }
  }
}
</style>
