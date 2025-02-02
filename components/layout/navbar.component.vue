<script setup lang="ts">
</script>

<template>
  <nav class="shadow p-2.5 font-vazir">
    <div class="container flex justify-between items-center">
      <ul>
        <li>
          <NuxtLink to="/">
            <img src="https://static.virgool.io/images/app/logo.webp?width=50" alt="virgool">
          </NuxtLink>
        </li>
      </ul>
      <div class="flex bg-green-50 w-3/12">
        <label class="border rounded-xl bg-neutral-200 px-4 py-2 w-full flex items-center">
          <Icon name="ic:baseline-search" class="size-5 me-2"/>
          <input placeholder="جستوجو در ویرگول..." type="search"
                 class="bg-transparent focus:outline-none placeholder:text-xs placeholder:font-bold text-sm">
        </label>
      </div>
      <div class="flex items-center justify-between gap-4">
        <button class="bg-black/5 p-1 rounded-full flex items-center w-fit">
          <Icon name="uit:exclamation-circle" class="size-6 font-extrabold"/>
        </button>
        <button class="text-sm">
          <NuxtLink to="/login">
            ورود
          </NuxtLink>
        </button>
        <button class="text-sm bg-blue-500 rounded-xl w-fit px-4 py-1 text-white font-extrabold">
          <NuxtLink to="/register">
            ثبت نام
          </NuxtLink>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
