<template>
  <div class="message">
    The quick, brown fox jumps over a lazy dog. DJs.
    <!-- <slot>The quick, brown fox jumps over a lazy dog. DJs.</slot> -->
  </div>

</template>

<script>
export default {
  name: 'ChatMessage',

  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
.message {
  display: inline-block;
  padding: 10px 24px;
  border: 1px solid #000;
  border-radius: 20px;
}
</style>
