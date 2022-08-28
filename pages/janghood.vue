<template>
  <div class="janghood">
    <a href="https://shuimo.janghood.com/" target="_blank">
      <img class="janghood-logo" alt="" src="/svg/janghood.svg" />
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
