<script setup lang="ts">

</script>

<template>
  <div class="w-full h-80 bg-charcoal-100">
    <div class="flex w-full items-center justify-around h-full max-w-5xl mx-auto">
      <div class="text-4xl leading-loose text-white font-bold">
        <p>به ویرگول،</p>
        <p>دنیای کلمات خوش آمدید.</p>
        <p class="mt-8 text-sm w-4/6 leading-loose">
          ویرگول بستری برای خواندن، گفت‌وگو درباره‌ی موضوعات مورد علاقه و به اشتراک‌گذاری ایده‌های اصیل و عمیق در زندگی
          شخصی، حرفه‌ای و اجتماعی است.
        </p>
      </div>
      <div class="flex flex-col justify-around h-full">
        <img src="https://static.virgool.io/images/app/virgool-logo-1.svg?width=256" alt="">
        <NuxtLink to="/" class="text-sm text-white flex items-center gap-1 bg-sky-700 w-fit py-1 px-4 rounded-xl">
          <span class="block">
            شروع به نوشتن
          </span>
          <Icon class="size-4 mt-1.5" name="material-symbols:arrow-back-ios-new"/>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>