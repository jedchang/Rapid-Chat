<template>
  <div class="file-wrap">
    <div class="file">
      <i class="material-icons">description</i>
      <div class="file-info">
        <p class="name">ZippedFile.zip</p>
        <p calss="size">102 kb</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatFile'
};
</script>

<style scoped lang="scss">
.file-wrap {
  display: inline-block;
  padding: 10px 24px;
  border: 1px solid #000;
  border-radius: 20px;
}

.file {
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: 48px;
    margin-right: 6px;
  }

  .name {
    font-weight: 600;
  }

  .file-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    height: 42px;
  }
}
</style>
