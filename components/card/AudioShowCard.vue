<template>
  <view class="card-container">
    <view class="card-t-line">
      <image :src="data.avatar" mode="scaleToFill" class="avatar" />
      <view class="name">
        {{ data.userName }}
      </view>
      <uni-dateformat :date="data.time" class="time"></uni-dateformat>
    </view>
    <view class="card-b-line">
      <play-audio :audio="data.audio"/>
      <view class="explain-box">
        {{ data.explain }}
      </view>
    </view>
  </view>
</template>

<script>
import PlayAudio from '../audio/PlayAudio.vue';
export default {
  components: { PlayAudio },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.card-container {
  margin-bottom: 30upx;
  background-color: $uni-bg-color;
  border-radius: $uni-border-radius-lg;
  box-shadow: $uni-box-shadow1;
  padding: 20upx;
  .card-t-line {
    width: 100rpx;
    height: 80rpx;
    display: flex;
    width: 100%;
    align-items: center;
    .name {
      margin-left: 20upx;
      flex: 1;
    }
    .avatar {
      width: 80rpx;
      height: 80rpx;
      border-radius: $uni-border-radius-lg;
    }
    .time {
      font-size: $uni-font-size-sm;
    }
  }
  .card-b-line {
    .explain-box {
      min-height: 80upx;
      padding: 14upx;
      background-color: $uni-bg-color;
      border-radius: $uni-border-radius-lg;
      box-shadow: $uni-box-shadow1-inset;
      margin-top: 20upx;
      font-size: $uni-font-size-sm;
      color: $uni-text-color-placeholder;
    }
  }
}
</style>
