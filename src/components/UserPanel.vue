<template>
  <div class=user-panel>
    <div class="user-panel-main">
      <div class="user-icon">
        <img
          v-if="thumbIndex === 0"
          src="../assets/images/thumbnail-1.svg"
          alt=""
        >
        <img
          v-if="thumbIndex === 1"
          src="../assets/images/thumbnail-2.svg"
          alt=""
        >
        <img
          v-if="thumbIndex === 2"
          src="../assets/images/thumbnail-3.svg"
          alt=""
        >
        <img
          v-if="thumbIndex === 3"
          src="../assets/images/thumbnail-4.svg"
          alt=""
        >
        <img
          v-if="thumbIndex === 4"
          src="../assets/images/thumbnail-5.svg"
          alt=""
        >
        <img
          v-if="thumbIndex === 5"
          src="../assets/images/thumbnail-6.svg"
          alt=""
        >
      </div>
      <div class="user-info">
        <h5 class="title">Nickname</h5>
        <div class="social-wrap">
          <div class="social-name">
            <!--  取得 vuex 內的值來做判斷顯是哪一種 -->
            <div v-if="getSocialName === 'facebook'">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </div>
            <div v-if="getSocialName === 'instagram'">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </div>
            <div v-if="getSocialName === 'line'">
              <font-awesome-icon :icon="['fab', 'line']" />
            </div>
          </div>

          <!-- 兩種用法取得 vuex 內的值，好像都可以 -->
          <div class="nick-name"> {{ getNickName }} </div>
          <!-- <div class="nick-name"> {{ this.$store.state.nickName }} </div> -->
        </div>
      </div>
      <!-- moreMode 開關切換 -->
      <a
        href="javascript:;"
        class="user-more"
        @click="moreMode = !moreMode"
      >
        <i class="material-icons">more_vert</i>
      </a>
    </div>

    <!-- more Content -->
    <!-- 綁定 style 動態屬性 -->
    <div
      class="user-panel-more"
      :style="moreContentStyle"
    >
      <div class="item">
        <div class="title">
          <p>portrait</p>
          <i class="material-icons">trending_flat</i>
        </div>
        <div class="thumbnail">
          <a
            :class="{'active': thumbIndex === 0}"
            @click="thumbIndex = 0"
            href="javascript:;"
          >
            <img
              src="../assets/images/thumbnail-1.svg"
              alt=""
            >
          </a>
          <a
            :class="{'active': thumbIndex === 1}"
            @click="thumbIndex = 1"
            href="javascript:;"
          >
            <img
              src="../assets/images/thumbnail-2.svg"
              alt=""
            >
          </a>
          <a
            :class="{'active': thumbIndex === 2}"
            @click="thumbIndex = 2"
            href="javascript:;"
          >
            <img
              src="../assets/images/thumbnail-3.svg"
              alt=""
            >
          </a>
          <a
            :class="{'active': thumbIndex === 3}"
            @click="thumbIndex = 3"
            href="javascript:;"
          >
            <img
              src="../assets/images/thumbnail-4.svg"
              alt=""
            >
          </a>
          <a
            :class="{'active': thumbIndex === 4}"
            @click="thumbIndex = 4"
            href="javascript:;"
          >
            <img
              src="../assets/images/thumbnail-5.svg"
              alt=""
            >
          </a>
          <a
            :class="{'active': thumbIndex === 5}"
            @click="thumbIndex = 5"
            href="javascript:;"
          >
            <img
              src="../assets/images/thumbnail-6.svg"
              alt=""
            >
          </a>
        </div>
      </div>
      <div class="item">
        <div class="title">
          <p>nickname</p>
          <i class="material-icons">trending_flat</i>
        </div>
        <div class="group">
          <input
            type="text"
            id="name"
            v-model="getNickName"
            autocomplete="off"
            required
          >
          <span class="hightlight"></span>
        </div>
      </div>
      <div class="item">
        <div class="title">
          <p>contact</p>
          <i class="material-icons">trending_flat</i>
        </div>
        <div class="group">
          <input
            type="text"
            id="name"
            v-model="contactName"
            autocomplete="off"
            required
          >
          <span class="hightlight"></span>
          <div class="social-btn">
            <a
              :class="{'on': getSocialName === 'facebook'}"
              @click="socialName = 'facebook'"
              href="javascript:;"
            >
              <font-awesome-icon :icon="['fab', 'facebook']" /></a>
            <a
              :class="{'on': getSocialName === 'instagram'}"
              @click="socialName = 'instagram'"
              href="javascript:;"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" /></a>
            <a
              :class="{'on': getSocialName === 'line'}"
              @click="socialName = 'line'"
              href="javascript:;"
            >
              <font-awesome-icon :icon="['fab', 'line']" /></a>
          </div>
        </div>
      </div>
      <a
        href="javascript:;"
        class="btn btn-save"
      >
        <p>SAVE</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserPanel',
  // 父組件的數據需要透過 props 才能下發到子組件中。
  // 從 RapidChatLogin 傳到 UserPanel
  props: {
    nickName: {
      type: String,
      default: 'Nickname'
    },
    socialName: {
      type: String,
      default: ''
    },
    contactName: {
      type: String,
      default: 'Contactname'
    }
    // thumbIndex: Number
  },
  data() {
    return {
      moreMode: false, // 展開模式
      thumbIndex: Math.floor(Math.random() * 6) // 6 個 icon 亂數排列，但是 setting 和 chatting 圖像不一致，好像又 random 一次
    };
  },
  methods: {
    // saveClickHandler() {
    //   this.$store.commit('setNickName');
    // }
  },
  computed: {
    moreContentStyle() {
      return {
        opacity: this.moreMode ? 1 : 0,
        'max-height': this.moreMode ? '300px' : 0
        // 'max-height': this.show ? `${this.$refs.moreContent}px` : 0
      };
    },
    // 取得 store 中的 nickName 數值
    getNickName() {
      return this.$store.state.nickName;
    },
    getSocialName() {
      return this.$store.state.socialName;
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/style/_custom.scss';

.user-panel {
  width: 350px;
  min-height: 104px;
  padding: 16px;
  background-color: #000;
  border-radius: 20px;
  margin-top: 12px;
  overflow: hidden; // 一定要設定 不然動態展開會怪
}

// main
.user-panel-main {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .user-icon {
    width: 72px;
    height: 72px;
    background-color: #fff;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .user-info {
    color: #fff;
    margin-left: -60px;
    .title {
      font-size: 24px;
      font-weight: 600;
      text-align: left;
    }
    .social-wrap {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .social-name {
      font-size: 22px;
      line-height: 22px;
      margin-right: 5px;
    }
  }

  .user-more {
    color: #fff;
    transition: all 0.4s;
    &:hover {
      color: #3494e2;
    }
  }
}

// more
.user-panel-more {
  transition: all 0.4s;
  .item {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 14px;
    &:first-child {
      padding-top: 16px;
    }
    &:last-child {
      margin-bottom: 0;
    }

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    p {
      color: #fff;
      text-transform: uppercase;
      font-size: 16px;
    }
    i {
      font-size: 18px;
      color: #fff;
      margin-left: 3px;
    }
  }
  .thumbnail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(350px - 16px * 2);
    margin-top: 10px;
  }
  a {
    width: 40px;
    height: 40px;
    display: block;
    opacity: 0.5;
    transition: all 0.4s;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid #fff;
    }
    &.active {
      opacity: 1;
    }
  }

  .btn-save {
    width: 350px;
    height: 40px;
    opacity: 1;
    color: #000000;
    background-color: #fff;
    margin-left: -16px;
    margin-bottom: -16px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
