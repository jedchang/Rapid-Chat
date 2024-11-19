<template>
  <div class="chat-emoji">
    <a
      href="javascript:;"
      class="stickers sticker-ok"
    ></a>
    <a
      href="javascript:;"
      class="stickers sticker-wtf"
    ></a>
    <a
      href="javascript:;"
      class="stickers sticker-lol"
    ></a>
    <a
      href="javascript:;"
      class="stickers sticker-no"
    ></a>
    <a
      href="javascript:;"
      class="stickers sticker-hi"
    ></a>
  </div>
</template>

<script>
export default {
  name: 'ChatEmotion'
};
</script>

<style scoped lang="scss">
.chat-emoji {
  width: 670px;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffeb95;
  border-radius: 20px;
  position: absolute;
  bottom: 104px;
  &:before {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 121px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 15px 10px 0 10px;
    border-color: #ffec95 transparent transparent transparent;
  }

  .stickers {
    width: 120px;
    height: 120px;
    transform: scale(1);
    transition: all 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }
  .sticker-ok {
    background-image: url(../assets/images/sticker-ok.svg);
  }
  .sticker-wtf {
    background-image: url(../assets/images/sticker-wtf.svg);
  }
  .sticker-lol {
    background-image: url(../assets/images/sticker-lol.svg);
  }
  .sticker-no {
    background-image: url(../assets/images/sticker-no.svg);
  }
  .sticker-hi {
    background-image: url(../assets/images/sticker-hi.svg);
  }
}
</style>
