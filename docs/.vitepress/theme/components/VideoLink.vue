<script setup lang="ts">
const props = defineProps<{
  youtubeId: string
}>()
const link = `https://www.youtube.com/watch?v=${props.youtubeId}/`
</script>

<template>
  <div class="video_link">
    <a :href="link" target="_blank" bg-blue:10 px4 py3 rounded block mt2 flex items-center gap2>
      <div i-carbon:play-filled flex-none text-lg />
      <slot />
    </a>
  </div>
</template>
