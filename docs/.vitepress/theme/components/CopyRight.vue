<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'

const defaultAuthor = 'Kiyora'
const { frontmatter } = useData()

const author = ref(defaultAuthor)

if (frontmatter.value?.author)
  author.value = frontmatter.value?.author

function reName(name: string) {
  return name === 'Kiyora' ? 'ItsMyEyes' : name
}

const pageHref = location.href

function getGithubLink(name: string) {
  return `https://github.com/${reName(name)}`
}
</script>

<template>
  <div
    class="px-[1.2rem] relative py-[1rem] border-1 border-[var(--vp-c-border)]/[.55] w-full min-h-[32px] border-solid mt-[32px] leading-[24px] rounded-[4px]"
  >
    <fa6-solid:copyright class="absolute top-[1rem] right-[1.2rem] " />
    <section class="flex flex-col gap-y-[8px] overflow-hidden">
      <div>
        <span class="font-bold">Article author: </span>
        <span>
          <a :href="getGithubLink(author)" rel="noreferrer" target="_blank">
            {{ author }}
          </a>
        </span>
      </div>
      <div>
        <span class="font-bold">Article link: </span>
        <span>
          <a :href="pageHref" rel="noreferrer" target="_blank">
            {{ pageHref }}
          </a>
        </span>
      </div>
      <div>
        <span class="font-bold">Copyright Notice: </span>
        <span>
          <a href="https://kiyora.is-a.dev/" rel="noreferrer" target="_blank">Kiyora</a></span>！
      </div>
    </section>
  </div>
</template>
