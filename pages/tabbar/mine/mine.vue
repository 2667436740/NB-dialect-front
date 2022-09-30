<template>
  <view class="content">
    <view class="login-page" v-if="!isLog">
      <image src="../../static/logo.png" mode="scaleToFill" class="logo" />
      <view @click="login" class="login-btn">微信用户一键登录</view>
    </view>
    <view v-else class="info-page">
      <view class="info-box">
        <view class="t-box">
          <view class="name">{{ userInfo.nickName }}</view>
          <img :src="userInfo.avatarUrl" mode="scaleToFill" class="avatar" />
        </view>
        <view class="gap-row"></view>
        <view class="b-box">
          <view class="b-item">我的语音</view>
          <view class="gap-col"></view>
          <view class="b-item">我的收藏</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isLog: false,
      userInfo: {},
    };
  },
  onLoad() {
    this.isLogin();
  },
  methods: {
    getUserInfo() {
      return new Promise((resolve, reject) => {
        uni.getUserProfile({
          lang: "zh_CN",
          desc: "用户登录",
          success: (res) => {
            resolve(res.userInfo);
          },
          fail: (err) => {
            reject(err);
          },
        });
      });
    },
    getLogin() {
      return new Promise((resolve, reject) => {
        uni.login({
          success(res) {
            resolve(res.code);
          },
          fail: (err) => {
            reject(err);
          },
        });
      });
    },
    login() {
      let userInfo = this.getUserInfo();
      let wxCode = this.getLogin();

      Promise.all([userInfo, wxCode])
        .then((res) => {
          //都获取权限成功
          // console.log(res);
          this.userInfo = res[0];
          uni.setStorageSync("userInfo", res[0]);
          this.isLog = true;
          // uni.setStorageSync('id', res[1]);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    isLogin() {
      try {
        const value = uni.getStorageSync("userInfo");
        if (value) {
          this.isLog = true;
          this.userInfo = value;
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 20upx;
  .login-page {
    height: 1000upx;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .logo {
      width: 200upx;
      height: 200upx;
    }
    .login-btn {
      background-color: $uni-theme4;
      color: $uni-text-color-inverse;
      border-radius: $uni-border-radius-lg;
      width: 500upx;
      margin: 0 auto;
      height: 70upx;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 50upx;
    }
  }
  .info-page {
    .info-box {
      // height: 300upx;
      background-color: $uni-theme2;
      border-radius: $uni-border-radius-lg;
      padding: 40upx 50upx;
      .t-box {
        display: flex;
        .name {
          color: $uni-text-color-inverse;
          font-size: 48upx;
          flex: 1;
        }
        .avatar {
          width: 150upx;
          height: 150upx;
          border-radius: 50%;
        }
      }
      .gap-row {
        height: 2upx;
        width: 100%;
        margin: 40upx 0;
        background-color: $uni-text-color-inverse;
      }
      .b-box {
        display: flex;
        .b-item {
          flex: 1;
          text-align: center;
          color: $uni-text-color-inverse;
          font-size: $uni-font-size-lg;
        }
        .gap-col {
          width: 2upx;
          // height: 100%;
          // margin: 50upx 0;
          background-color: $uni-text-color-inverse;
        }
      }
    }
  }
}
</style>
