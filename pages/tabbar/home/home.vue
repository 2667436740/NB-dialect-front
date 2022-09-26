<template>
  <view class="content">
    <audio-show-card v-for="item in cardList" :key="item.id" :data="item" />

    <image
      src="../../static/img/add.png"
      mode="scaleToFill"
      class="suspend-btn"
      @click="goToPage"
    />
  </view>
</template>

<script>
import AudioShowCard from "../../../components/card/AudioShowCard.vue";

export default {
  components: { AudioShowCard },
  data() {
    return {
      title: "Hello",
      cardList: [
        {
          id: 1,
          audio: {
						duration: 30000,
						src: 'http://www.ytmp3.cn/down/78267.mp3'
					},
          avatar:
            "https://img1.baidu.com/it/u=707277512,3397525217&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          userName: "a1",
          explain: "晚上好。",
					time: 1664106501
        },
        {
          id: 2,
          audio: {
						duration: 1000,
						src: 'http://www.ytmp3.cn/down/78267.mp3'
					},
          avatar:
            "https://img0.baidu.com/it/u=3151595625,804030088&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          userName: "a2",
          explain:
            "晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。",
					time: 1664107211
				},
        {
          id: 3,
          audioPath: "",
          avatar:
            "https://img0.baidu.com/it/u=3151595625,804030088&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          userName: "a2",
          explain:
            "晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。晚上好。",
					time: new Date().getTime()
				},
        {
          id: 1,
          audioPath: "",
          user: {},
        },
        {
          id: 1,
          audioPath: "",
          user: {},
        },
        {
          id: 1,
          audioPath: "",
          user: {},
        },
      ],
    };
  },
  onLoad() {},
  methods: {
    goToPage() {
      uni.navigateTo({ url: "/pages/addDialect/addDialect" });
    },
  },
};
</script>

<style lang="scss">
.content {
  height: 400upx;
  padding: 20upx;
  position: relative;
  .suspend-btn {
    width: 100upx;
    height: 100upx;
    border-radius: 50%;
    position: fixed;
    bottom: 50upx;
    right: 50upx;
    background-color: $uni-theme4;
    box-shadow: $uni-box-shadow1;
  }
}
</style>
