<template>
  <div class="chat-list">
    <div class="chat-list-item message">
      <ChatMessage></ChatMessage>
    </div>
    <div class="chat-list-item file">
      <ChatFile></ChatFile>
    </div>
    <div class="chat-list-item image">
      <ChatImg></ChatImg>
    </div>
  </div>
</template>

<script>
import ChatMessage from '@/components/ChatMessage.vue';
import ChatFile from '@/components/ChatFile.vue';
import ChatImg from '@/components/ChatImg.vue';

export default {
  name: 'chatList',
  components: {
    ChatMessage,
    ChatFile,
    ChatImg
  },
  props: {
    list: Array
  }
};
</script>

<style scoped lang="scss">
.chat-list {
  display: block;
}

.chat-list-item {
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
}
.message {
  text-align: left;
}
.file,
.image {
  text-align: right;
}
</style>
