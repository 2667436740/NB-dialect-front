<template>
  <view class="flex-audio">
    <view class="audio">
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
    <image
      class="audio-btn"
      src="../../static/img/begin.png"
      mode="scaleToFill"
      @click="play"
      v-if="!audioPlay"
    />
    <image
      class="audio-btn"
      src="../../static/img/pause.png"
      mode="scaleToFill"
      @click="play"
      v-else
    />
  </view>
</template>

<script>
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
  onLoad(options) {
    this.registerAudioContext();
  },
  methods: {
    registerAudioContext() {
      this.innerAudioContext = uni.createInnerAudioContext();
      this.innerAudioContext.onPlay(() => {
        // 音频开始播放监听
        this.audioPlay = true;
        this.interval = setInterval(() => {
          this.percent++;
        }, this.audio.duration / 100);
      });
      // this.innerAudioContext.onPaused(() => {
      //   // 暂停播放监听
      //   this.audioPlay = false;
      // });
      this.innerAudioContext.onStop(() => {
        // 音频停止监听
        this.audioPlay = false;
        this.percent = 0;
        if (this.interval) clearInterval(this.interval);
      });
      this.innerAudioContext.onEnded(() => {
        // 自然播放完监听
        this.audioPlay = false;
        this.percent = 0;
        if (this.interval) clearInterval(this.interval);
      });
    },
    play() {
      if (!this.audioPlay) {
        console.log(this.audio.src || this.audio.tempFilePath);
        console.log(this.innerAudioContext);
        this.innerAudioContext.src = this.audio.src || this.audio.tempFilePath;
        this.innerAudioContext.play();
      } else {
        this.innerAudioContext.stop();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.flex-audio {
  display: flex;
  align-items: center;
  margin-top: 20upx;
  .audio {
    height: 50upx;
    background-color: $uni-theme3;
    width: 100%;
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
  .audio-btn {
    width: 70upx;
    height: 60upx;
    border-radius: 50%;
    transform: scale(1.2);
    margin-left: 10upx;
  }
}
</style>
