<template>
  <div class="addDialect">
    <view class="record-box">
      <nb-voice-record
        @startRecord="start"
        @endRecord="end"
        @cancelRecord="cancel"
        :recordOptions="recordOptions"
      ></nb-voice-record>
    </view>
    <play-audio :audio="audio" v-if="Object.keys(audio).length > 0"/>
  </div>
</template>

<script>
import PlayAudio from '../../components/audio/PlayAudio.vue';
export default {
  name: "addDialect",
  components: { PlayAudio },
  props: {},
  data() {
    return {
      recordOptions: { duration: 60000 },
      audio: {},
    };
  },
  computed: {},
  methods: {
    start() {
      // 开始录音
    },
    end(event) {
      // 结束录音并处理得到的录音文件
      // event中，app端仅有tempFilePath字段，微信小程序还有duration和fileSize两个字段
      console.log(event);
      this.audio = event;
    },
    cancel() {
      // 用户取消录音
    },
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {},
  // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
};
</script>

<style scoped lang="scss">
.record-box {
  text-align: center;
  height: 300upx;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
