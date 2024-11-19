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
      <ul>
        <li data-num='①'>Randomly pick a person for you.</li>
        <li data-num='②'>Chat anything in ten minutes.</li>
        <li data-num='③'>Choose to exchange your contact info or not.</li>
        <li data-num='④'>Get the contact info if both of you choose to exchange at the same time.</li>
      </ul>
      <!-- 向外層傳遞 emit 事件名稱 'start' -->
      <a
        href="javascript:;"
        class="btn btn-start"
        @click="$emit('start')"
      >
        <p>START</p>
        <i class="material-icons">arrow_forward</i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RapidChatInfo',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
    ul {
      list-style: none;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
      color: #000000;
      margin-bottom: 25px;
    }
    li {
      position: relative;
      padding-left: 20px;
      &:before {
        position: absolute;
        left: 0;
        top: 0;
        content: attr(data-num);
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
      background-color: #000000;
      color: #ffffff;
      font-size: 16px;
      text-decoration: none;
      user-select: none;
      transition: all 0.4s;
      i {
        margin-left: 12px;
      }
      &:hover {
        background-color: #ffffff;
        color: #000000;
        box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.16),
          0 3px 12px 0 rgba(0, 0, 0, 0.12);
      }
    }
  }
}
</style>
