<template>
  <view class="audio" @click="play">
    <view class="sound-play">
      <view
        v-for="i in 10"
        :key="i"
        class="item"
        :class="{ active: audioPlay }"
      ></view>
    </view>
		<progress :percent="percent" stroke-width="3" />
  </view>
</template>

<script>
const innerAudioContext = uni.createInnerAudioContext();
export default {
  props: {
    audio: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      audioPlay: false,
			percent: 0,
    };
  },
  onLoad(options) {},
  methods: {
    play() {
      // innerAudioContext.onPlay(() => {
      //   // 开始播放监听
      //   this.audioPlay = true;
      // });
      // innerAudioContext.onPaused(() => {
      //   // 暂停播放监听
      //   this.audioPlay = false;
      // });
      innerAudioContext.onEnded(() => {
        // 结束播放监听
        this.audioPlay = false;
				this.percent = 0
				if(interval) clearInterval(interval)
      });
      if (!this.audioPlay) {
        innerAudioContext.src = this.audio.src || this.audio.tempFilePath;
        innerAudioContext.play();
        this.audioPlay = true;
				let interval = setInterval(() => { 
					this.percent ++
				}, this.audio.duration / 100)
      } else {
        innerAudioContext.stop();
        this.audioPlay = false;
				this.percent = 0
      }
    },
  },
};
</script>

<style scoped lang="scss">
.audio {
  height: 60upx;
  background-color: $uni-theme3;
  width: 100%;
  margin-top: 20upx;
  border-radius: $uni-border-radius-lg;
  position: relative;
  .sound-play {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .item {
      list-style: none;
      width: 6upx;
      height: 20upx;
      background: #ffffff;
      margin: 0 8upx;
    }
    .active {
      animation: animate 0.7s infinite alternate;
      @for $i from 0 through 10 {
        &:nth-child(#{$i + 1}) {
          animation-delay: 0.1s * $i;
        }
      }
    }
    @keyframes animate {
      0% {
        transform: scaleY(1);
      }
      25% {
        transform: scaleY(1);
      }
      50% {
        transform: scaleY(1);
      }
      75% {
        transform: scaleY(1);
      }
      100% {
        transform: scaleY(3);
      }
    }
  }
}
</style>
