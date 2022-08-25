<template>
  <div class="janghood">
    <a href="https://shuimo.janghood.com/" target="_blank">
      <img class="logo" alt="" src="/svg/logo.svg" />
      <div class="talkings">
        <div>
          <div ref="talkingZhRef" class="janghood-talking">
            <span class="tip" />
          </div>
        </div>
        <div>
          <div ref="talkingEnRef" class="janghood-talking">
            <span class="tip" />
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
<script setup lang="ts">
const talkingZhRef = ref<HTMLElement>(null);
const talkingEnRef = ref<HTMLElement>(null);
const talkingZh = "我们是一个神秘的江湖组织。";
const talkingEn = "We are a mysterious Janghood organization.";

function toSpell() {
  let zhCount = 0;
  let zhTimer: NodeJS.Timeout | null = null;
  let enCount = 0;
  let enTimer: NodeJS.Timeout | null = null;

  zhTimer = setInterval(() => {
    talkingZhRef.value.append(talkingZh.charAt(zhCount));
    if (zhCount++ === talkingZh.length) {
      clearInterval(zhTimer);
      setTimeout(() => {
        talkingZhRef.value.removeChild(talkingZhRef.value.firstChild);
      }, 2000);
    }
  }, 200);

  enTimer = setInterval(() => {
    talkingEnRef.value.append(talkingEn.charAt(enCount));
    if (enCount++ === talkingEn.length) {
      clearInterval(enTimer);
      setTimeout(() => {
        talkingEnRef.value.removeChild(talkingEnRef.value.firstChild);
      }, 2000);
    }
  }, 50);
}

onMounted(() => {
  toSpell();
});
</script>

<style scoped lang="scss">
.janghood {
  a {
    color: unset;
    opacity: 1;
    &:hover {
      color: unset;
      opacity: 1;
    }
  }
  .logo {
    height: 400px;
    width: 400px;
    margin: 0 auto;
    position: absolute;
    right: 0;
    left: 0;
    animation-name: heart-beat; // 动画名称
    animation-direction: alternate; // 动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。
    animation-timing-function: linear; // 动画执行方式，linear：匀速；ease：先慢再快后慢；ease-in：由慢速开始；ease-out：由慢速结束；ease-in-out：由慢速开始和结束；
    animation-delay: 0s; // 动画延迟时间
    animation-iteration-count: infinite; //  动画播放次数，infinite：一直播放
    animation-duration: 1s; // 动画完成时间
  }

  .talkings {
    position: absolute;
    text-align: center;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 550px;

    .janghood-talking {
      display: inline-block;
      line-height: 30px;
      font-size: 24px;
      .tip {
        animation: blink-caret 1s step-end infinite;
        width: 3px;
        height: 24px;
        background-color: #000;
        float: right;
        margin-left: 10px;
      }
    }
  }
}
</style>
