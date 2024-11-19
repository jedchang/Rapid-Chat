<template>
  <div class="chatting">
    <div class="chat-item">
      <div class="chat-wrap">
        <TargetPanel></TargetPanel>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <UserPanel></UserPanel>
      </div>
      <div class="logo"><img
          src="../assets/images/logo-rapid-chat.svg"
          alt=""
        ></div>
    </div>
    <div class="chat-info">
      <ChatList></ChatList>
      <ChatEmotion v-show="showEmoticon"></ChatEmotion>
      <!-- 下層傳來 emit 自訂事件名稱 @displayEmoticon -->
      <ChatControl @displayEmoticon="insertEmoticon"></ChatControl>
    </div>
  </div>
</template>

<script>
import TargetPanel from '@/components/TargetPanel.vue';
import UserPanel from '@/components/UserPanel.vue';
import ChatList from '@/components/ChatList.vue';
import ChatEmotion from '@/components/ChatEmotion.vue';
import ChatControl from '@/components/ChatControl.vue';

export default {
  name: 'chatting',
  components: {
    TargetPanel,
    UserPanel,
    ChatList,
    ChatEmotion,
    ChatControl
  },
  data() {
    return {
      showEmoticon: false
    };
  },
  methods: {
    // 下層 ChatControl 發送上來的事件
    insertEmoticon() {
      this.showEmoticon = !this.showEmoticon;
    }
  }
};
</script>

<style scoped lang="scss">
.chatting {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1110px;
}

.chat-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  height: 698px;
  margin-right: 14px;

  .dots {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 4px;
    height: 28px;
    margin: 0 auto 0 50px;
    span {
      width: 4px;
      height: 4px;
      background-color: #000000;
      border-radius: 50%;
    }
  }
  .logo {
    width: 210px;
    height: 36px;
  }
}

.chat-info {
  width: 730px;
  height: 698px;
  padding: 50px 30px;
  background-color: #ffd500;
  border-radius: 20px;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  &:before {
    content: '';
    position: absolute;
    top: 45px;
    left: -17px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 17.3px 10px 0;
    border-color: transparent #ffd500 transparent transparent;
  }
}
</style>