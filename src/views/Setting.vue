<template>
  <div class="setting">
    <div class="cover"></div>
    <div class="setting-header">
      <div class="title">
        <img
          src="../assets/images/round-question_answer-24px.svg"
          alt=""
        >
        <h6>RAPID CHAT</h6>
      </div>
      <div class="sub animated infinite flash slower">
        <p>Setting up a chatting room for you…</p>
        <i class="material-icons">search</i>
      </div>
    </div>
    <UserPanel></UserPanel>
  </div>
</template>

<script>
// import Vuex from 'vuex';
import UserPanel from '@/components/UserPanel.vue';

export default {
  name: 'setting',
  components: {
    UserPanel
  },
  mounted() {
    // 設定掛載進來時 2 秒 搜尋狀態
    setTimeout(() => {
      this.$router.push('/chatting');
    }, 2000);
  }
};
</script>


<style scoped lang="scss">
.setting {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

// 不讓使用者點選 做一層透明
.cover {
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
}

.setting-header {
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
  .sub {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>