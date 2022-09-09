<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  remark: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="youus m-auto mb-8">
    <h1 class="mb-0">{{ title }}</h1>
    <p class="opacity-50 !-mt-6 italic">
      {{ remark }}
    </p>
  </div>
</template>
