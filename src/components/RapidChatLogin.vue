<template>
  <div class=info-card>
    <div class="header">
      <div class="title">
        <img
          src="../assets/images/round-question_answer-24px.svg"
          alt=""
        >
        <h6>RAPID CHAT</h6>
      </div>
      <p>We create a private place to chat.</p>
    </div>
    <div class="body">
      <div class="title">
        <p>your contact info</p>
        <i class="material-icons">trending_flat</i>
      </div>
      <div class="group">
        <!-- 須加上 required 後，css:vaild 才有效果 (填寫的內容符合要求的時候觸發) -->
        <input
          type="text"
          id="name"
          v-model="nickName"
          autocomplete="off"
          required
        >
        <span class="hightlight"></span>
        <label for="name">NickName</label>
        <div class="social-btn">
          <a
            :class="{'on': socialName === 'facebook'}"
            @click="socialName = 'facebook'"
            href="javascript:;"
          >
            <font-awesome-icon :icon="['fab', 'facebook']" /></a>
          <a
            :class="{'on': socialName === 'instagram'}"
            @click="socialName = 'instagram'"
            href="javascript:;"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" /></a>
          <a
            :class="{'on': socialName === 'line'}"
            @click="socialName = 'line'"
            href="javascript:;"
          >
            <font-awesome-icon :icon="['fab', 'line']" /></a>
        </div>
      </div>
      <!-- emit 往上層傳遞事件名稱 start -->
      <a
        :class="{'active': nickName !== '' && socialName !== ''}"
        href="javascript:;"
        class="btn btn-start"
        @click="$emit('start', {nickName, socialName})"
      >
        <p>START</p>
        <i class="material-icons">arrow_forward</i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RapidChatLogin',
  props: {
    msg: String
  },
  data() {
    return {
      nickName: '',
      socialName: ''
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/style/_custom.scss';

.info-card {
  width: 350px;
  height: 370px;
  border-radius: 20px;
  background-color: #ffd500;
  padding: 40px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    h6 {
      font-size: 24px;
      font-weight: 800;
      color: #000000;
      margin-left: 8px;
    }
    p {
      font-size: 16px;
      color: #000000;
    }
  }

  .body {
    margin-top: 26px;
    .title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      p {
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 600;
        text-align: left;
      }
      i {
        font-size: 18px;
        color: #000000;
        margin-left: 3px;
      }
    }

    .btn {
      width: 270px;
      height: 40px;
      margin: 0 auto;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
      background-color: #d6b303;
      pointer-events: none; // 滑鼠事件
      color: #a78d09;
      font-size: 16px;
      text-decoration: none;
      user-select: none;
      transition: all 0.4s;
      i {
        margin-left: 12px;
      }
      &.active {
        background-color: #000000;
        color: #ffffff;
        pointer-events: auto;
        &:hover {
          background-color: #ffffff;
          color: #000000;
          box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.16),
            0 3px 12px 0 rgba(0, 0, 0, 0.12);
        }
      }
    }
  }
}
</style>
