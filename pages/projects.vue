// TODO md改造 issues https://github.com/antfu/vite-plugin-md/issues/112 // --- // title:
Projects // zh: 我的项目 // projects: // Lasting: // icon: '' // items: // - name:
'youus.me' // github: 'https://github.com/youuss/youus.me' // Janghood: // icon: '' //
items: // - name: 'shuimo-ui' // github: 'https://github.com/janghood/shuimo-ui' //
website: 'https://shuimo.janghood.com/' // ---

<template>
  <article>
    <div class="youus m-auto mb-8">
      <h1 class="mb-0">Projects</h1>
      <p class="opacity-50 !-mt-6 italic">
        我正在做的那点事..
      </p>
    </div>
    <div class="youus m-auto">
      <ListProjects :projects="projects" />
    </div>
  </article>
</template>

<script setup>
const projects = ref({
  Lasting: {
    icon: "Youus",
    items: [
      {
        name: "youus.me",
        github: "https://github.com/youuss/youus.me",
        desc: "🌈 开张记",
        icon: "Youus",
      },
      {
        name: "tdesign-vue-next",
        github: "https://github.com/Tencent/tdesign-vue-next",
        desc: "参与tdesign-vue-next组件库开发",
        icon: "TDesign",
      },
    ],
  },
  Janghood: {
    icon: "Janghood",
    items: [
      {
        name: "shuimo-ui",
        github: "https://github.com/janghood/shuimo-ui",
        website: "https://shuimo.janghood.com/",
        desc: "一套水墨风格的组件库",
        icon: "Janghood",
      },
    ],
  },
});
</script>
