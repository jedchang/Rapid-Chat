<template>
  <div class="chat-control">
    <a
      href="javascript:;"
      class="btn-file btn"
    >
      <i class="material-icons">attach_file</i>
    </a>
    <a
      href="javascript:;"
      class="btn-image btn"
    >
      <i class="material-icons">insert_photo</i>
    </a>
    <!-- ChatControl 往上層 Chatting 用 emit 傳遞自定義名稱事件 -->
    <a
      href="javascript:;"
      class="btn-emoji btn"
      @click="$emit('displayEmoticon')"
    >
      <i class="material-icons">insert_emoticon</i>
    </a>

    <!-- 這邊要綁定 v-model="input" 下面 a 的 disable 判斷才會成功 -->
    <input
      type="text"
      v-model="inputTxt"
    >
    <a
      href="javascript:;"
      class="btn-send btn"
      :class="{'disable': inputTxt === ''}"
      @click="send"
    ><i class="material-icons">send</i></a>
  </div>
</template>

<script>
export default {
  name: 'ChatControl',
  data() {
    return {
      inputTxt: ''
    };
  },
  methods: {
    send() {
      this.inputTxt = '';
    }
  }
};
</script>

<style scoped lang="scss">
.chat-control {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .btn {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: transparent;
    text-decoration: none;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s;
    &:hover {
      color: #000000;
      background-color: #ffeb95;
    }
    &.btn-send {
      position: absolute;
      right: 10px;
      color: #000000;
      &:hover {
        color: #000000;
        background-color: transparent;
      }
      &.disable {
        color: #818181;
      }
    }
  }

  input {
    width: 498px;
    height: 40px;
    padding: 10px 50px 10px 25px;
    border-radius: 35px;
    background-color: #fff;
    border: 0;
    font-size: 16px;
    &:focus {
      outline: 0;
    }
  }
}
</style>
