<script setup lang="ts">
import {useSidebarStore} from "~/store/sidebar.store";

const sidebarStore = useSidebarStore()
const isSidebarOpen = ref<boolean>(sidebarStore.isSidebarOpen);
const toggleSidebar = (): void => {
  isSidebarOpen.value = !isSidebarOpen.value;
  sidebarStore.setSidebarData({
    isSidebarOpen : isSidebarOpen.value
  });
}
</script>

<template>
  <aside class="flex bg-gray-800 h-full p-4 text-white flex-col gap-8 transition-all duration-200 ease-in-out"
         :class="!isSidebarOpen ? 'w-1/12' : 'w-2/12'">
    <ul>
      <li>
        <p class="flex items-center justify-between">
          <NuxtLink to="/">
            <img class="size-12" src="https://static.virgool.io/images/app/logo.webp?width=50" alt="virgool">
          </NuxtLink>
          <Icon v-on:click="toggleSidebar"
                class="size-6 cursor-pointer transition duration-200 ease-in-out"
                :class="isSidebarOpen ? 'rotate-180' :'rotate-0'"
                name="mdi:chevron-right"/>
        </p>
      </li>
    </ul>
    <ul class="flex flex-col gap-4">
      <li
          class="relative before:content-[''] before:absolute before:-bottom-2
         before:h-0.5 before:bg-sky-700 before:transition-all before:duration-300 before:ease-in-out
         hover:before:w-full"
          :class="isSidebarOpen
          ? 'before:start-0-0 before:w-1/6'
          : 'before:start-1/2 before:w-4 before:translate-x-1/2 hover:before:w-full'">
        <NuxtLink class="flex items-center gap-1.5" to="/">
          <Icon name="mdi:home-outline"
                class="size-5"
                :class="!isSidebarOpen && 'mx-auto size-8'"/>
          <span v-if="isSidebarOpen">
            صفحه اصلی
          </span>
        </NuxtLink>
      </li>
      <li
          class="relative before:content-[''] before:absolute before:-bottom-2
         before:h-0.5 before:bg-sky-700 before:transition-all before:duration-300 before:ease-in-out
         hover:before:w-full"
          :class="isSidebarOpen
          ? 'before:start-0 before:w-1/6'
          : 'before:start-1/2 before:w-4 before:translate-x-1/2 hover:before:w-full'">
        <NuxtLink class="flex items-center gap-1.5" to="/">
          <Icon name="mdi:playlist-edit"
                class="size-5"
                :class="!isSidebarOpen && 'mx-auto size-8'"/>
          <span v-if="isSidebarOpen">
            صفحه اصلی
          </span>
        </NuxtLink>
      </li>
    </ul>
  </aside>

</template>

<style scoped></style>
