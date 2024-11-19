<template>
  <div class=target-panel>
    <div class="target-panel-main">
      <div class="target-icon">
        <img
          src="../assets/images/thumbnail-5.svg"
          alt=""
        >
      </div>
      <div class="target-info">
        <h5 class="title">Nekoneko</h5>
        <div class="countdown-wrap">
          <!-- <span>08:40</span> -->
          <span class="timer"> {{displayTimer}} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setInterval } from 'timers';
export default {
  name: 'TargetPanel',
  data() {
    return {
      // min: 10,
      // sec: 60,
      totalTime: 600,
      interval: null
    };
  },
  mounted() {
    this.countdown();
  },
  methods: {
    countdown() {
      this.interval = setInterval(() => {
        this.totalTime--;
      }, 1000);

      // parseInt 字串轉整數
      // let sec = parseInt((this.totalTime % 3600) % 60);
      // sec < 10 ? '0' + sec : sec;

      // if (min.length < 2) {
      //   min = '0' + min;
      // }
      // if (sec.length < 2) {
      //   sec = '0' + sec;
      // }
      // return `${min}:${sec}`;
      // return min + ':' + sec;
    }
  },
  computed: {
    // 統整 秒、分
    displayTimer() {
      return this.minutes + ':' + this.seconds;
    },
    // 分別計算秒和分的位數 小於10 前面補上0
    minutes() {
      let min = Math.floor((this.totalTime % 3600) / 60);
      return min < 10 ? '0' + min : min;
    },
    seconds() {
      let sec = parseInt((this.totalTime % 3600) % 60);
      return sec < 10 ? '0' + sec : sec;
    }
  }
};
</script>

<style scoped lang="scss">
.target-panel {
  width: 350px;
  min-height: 104px;
  padding: 16px;
  background-color: #ffd500;
  border-radius: 20px;
  margin-bottom: 16px;
}

.target-panel-main {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .target-icon {
    width: 72px;
    height: 72px;
    background-color: #ffffff;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .target-info {
    color: #000000;
    margin-left: 24px;
    .title {
      font-size: 24px;
      font-weight: 600;
      text-align: left;
    }
    .countdown-wrap {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .timer {
      margin-top: 6px;
      font-weight: 500;
    }
  }
}
</style>
