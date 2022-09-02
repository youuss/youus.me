<script setup lang="ts">
/**
 * @Description
 * @Author youus
 * @Date 20:53
 * @Version v1.0.0ƒ
 *
 * Hello, humor
 */

type ProjectType = {
  name: string;
  github: string;
  desc: string;
  website?: string;
  icon: string;
};
interface Project {
  icon: string;
  items: ProjectType[];
}
defineProps<{ projects: Record<string, Project> }>();
</script>
<template>
  <template v-for="key in Object.keys(projects)" :key="key">
    <h4>{{ key }}</h4>
    <div class="project-grid py-2 -mx-3 gap-2">
      <a
        v-for="item in projects[key].items"
        class="item relative flex items-center"
        target="_blank"
        :href="item.github"
      >
        <div class="pt-2 pr-5">
          <IconsJangHoodIcon
            v-if="item.icon === 'Janghood'"
            class="text-4xl opacity-50"
          />
          <IconsYouusIcon v-else-if="item.icon === 'Youus'" class="text-4xl opacity-50" />
          <IconsTDesignIcon
            v-else-if="item.icon === 'TDesign'"
            class="text-4xl opacity-50"
          />
        </div>
        <div class="flex-auto">
          <div class="text-normal">{{ item.name }}</div>
          <div class="desc text-sm opacity-50 font-normal" v-html="item.desc" />
        </div>
      </a>
    </div>
  </template>
</template>

<style lang="scss" scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  a.item {
    transition: 0.2s all ease-out;
    padding: 0.8em 1em;
    background: transparent;
    font-size: 1.1rem;
    cursor: pointer;
    &:hover {
      background: #88888810;
    }

    .icon {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>
