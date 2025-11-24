<script setup lang="ts">

</script>

<template>
  <footer class="app-footer">
    <!-- 联系我们 -->
    <div class="contact">
      <div class="container">
        <dl>
          <dt>客房服务</dt>
          <dd><i class="iconfont icon-kefu"></i>在线客服</dd>
          <dd><i class="iconfont icon-question"></i>问题反馈</dd>
        </dl>
        <dl>
          <dt>关注我们</dt>
          <dd><i class="iconfont icon-weixin"></i>公众号</dd>
          <dd><i class="iconfont icon-weibo"></i>微博</dd>
        </dl>
        <dl>
          <dt>下载APP</dt>
          <dd class="qrcode"><img src="@/assets/images/qrcode.jpg" /></dd>
          <dd class="download">
            <span>扫描二维码</span>
            <span>立即下载APP</span>
            <a href="#">下载页面</a>
          </dd>
        </dl>
        <dl>
          <dt>服务热线</dt>
          <dd class="hotline">400-0000-000<small>周一至周日 8:00-18:00</small></dd>
        </dl>
      </div>
    </div>
    <!-- 其他 -->
    <div class="extra">
      <div class="container">
        <!-- slogan -->
        <div class="slogan">
          <a href="#">
            <i class="iconfont icon-footer01"></i>
            <span>价格亲民</span>
          </a>
          <a href="#">
            <i class="iconfont icon-footer02"></i>
            <span>物流快捷</span>
          </a>
          <a href="#">
            <i class="iconfont icon-footer03"></i>
            <span>品质新鲜</span>
          </a>
        </div>
        <!-- 版权信息 -->
        <div class="copyright">
          <p>
            <a href="#">关于我们</a>
            <a href="#">帮助中心</a>
            <a href="#">售后服务</a>
            <a href="#">配送与验收</a>
            <a href="#">商务合作</a>
            <a href="#">搜索推荐</a>
            <a href="#">友情链接</a>
          </p>
          <p>CopyRight © 小兔鲜儿</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.app-footer {
  background-color: #f5f5f5;

  .contact {
    background: #fff;

    .container {
      padding: 60px 0 40px 25px;
      display: flex;
    }

    dl {
      flex: 1;
      height: 190px;
      text-align: center;
      padding: 0 24px;
      border-right: 1px solid #f2f2f2;
      color: #999;

      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: flex-start;


      &:last-child {
        border-right: none;
      }
    }

    dt {
      width: 100%;
      line-height: 1;
      font-size: 18px;
    }

    dd {
      margin: 24px 12px 0 0;
      width: 92px;
      height: 92px;
      padding-top: 10px;
      border: 1px solid #ededed;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .iconfont {
        font-size: 36px;
        display: block;
        color: #666;
      }

      &:hover .iconfont {
        color: $xtxColor;
      }

      &:last-child {
        margin-right: 0;
      }
    }
    .qrcode {
      padding: 7px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .download {
      border: none;
      padding-top: 5px;
      font-size: 14px;
      width: auto;
      height: auto;
      display: flex;
      flex-direction: center;
      align-items: center;

      span {
        display: block;
      }

      a {
        display: block;
        padding: 10px 25px;
        color: #fff;
        margin-top: 5px;
        border-radius: 2px;
        background-color: $xtxColor;
      }
    }
    .hotline {
      border: none;
      padding-top: 20px;
      font-size: 22px;
      color: #666;
      width: 100%;
      height: auto;

      small {
        display: block;
        font-size: 15px;
        color: #999;
      }
    }
  }

  .extra {
    background-color: #333;

    .slogan {
      height: 178px;
      line-height: 58px;
      padding: 60px 100px;
      border-bottom: 1px solid #434343;
      display: flex;
      justify-content: space-between;

      a {
        height: 58px;
        line-height: 58px;
        color: #fff;
        font-size: 28px;

        i {
          font-size: 50px;
          vertical-align: middle;
          margin-right: 10px;
          font-weight: 100;
        }

        span {
          vertical-align: middle;
          text-shadow: 0 0 1px #333;
        }
      }
    }
    .copyright {
      height: 170px;
      padding-top: 40px;
      text-align: center;
      color: #999;
      font-size: 15px;

      p {
        line-height: 1;
        margin-bottom: 20px;
      }

      a {
        color: #999;
        line-height: 1;
        border-right: 1px solid #999;
        padding: 0 10px;

        &:last-child {
          border-right: none;
        }
      }
    }
  }
}
</style>
