<script setup lang="ts">
import { formatDate } from "@/logics";

defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <div v-if="frontmatter.display ?? frontmatter.title" class="youus m-auto mb-8">
      <h1 class="mb-0">
        {{ frontmatter.display ?? frontmatter.title }}
      </h1>
      <p v-if="frontmatter.date" class="opacity-50 !-mt-2">
        {{ formatDate(frontmatter.date) }}
        <span v-if="frontmatter.duration">· {{ frontmatter.duration }}</span>
      </p>
      <p v-if="frontmatter.subtitle" class="opacity-50 !-mt-6 italic">
        {{ frontmatter.subtitle }}
      </p>
    </div>
    <article ref="content">
      <slot />
    </article>
  </div>
</template>
