<template>
  <div class="login">
    <!-- 下層傳來的 emit 事件名稱 start  -->
    <RapidChatLogin
      @start="startHandler"
      @keydown.enter="startHandler"
    ></RapidChatLogin>
  </div>
</template>


<script>
import Vuex from 'vuex';
import RapidChatLogin from '@/components/RapidChatLogin.vue';

export default {
  name: 'login',
  components: {
    RapidChatLogin
  },
  methods: {
    ...Vuex.mapMutations(['setNickName', 'setSocialName']),

    startHandler({ nickName, socialName }) {
      this.setNickName(nickName);
      this.setSocialName(socialName);
      this.$router.push('/setting');
    }
  }
};
</script>