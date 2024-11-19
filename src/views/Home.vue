<template>
  <div class="home">
    <!-- 內層傳來的 emit 事件名稱 'start' (此為自訂觸發事件名稱)  -->
    <RapidChatInfo @start="startHandler"></RapidChatInfo>
  </div>
</template>

<script>
// @ is an alias to /src
import RapidChatInfo from '@/components/RapidChatInfo.vue';

export default {
  name: 'home',
  components: {
    RapidChatInfo
  },
  methods: {
    startHandler() {
      this.$router.push('/login');
    }
  }
};
</script>
