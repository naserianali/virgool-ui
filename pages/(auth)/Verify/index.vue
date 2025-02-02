<script setup lang="ts">
import {toast} from "vue-sonner";
import {ref} from "vue";
import {useField, useForm} from "vee-validate";
import {
  PinInput,
  PinInputGroup,
  PinInputInput,
} from '@/components/ui/pin-input';
import {useAuthStore} from "~/store/auth.store";
import {AuthMethodEnum} from "../../../comons/types/auth.type";

definePageMeta({
  layout: "auth-layout",
})
const authStore = useAuthStore();
const isLoading = ref<boolean>(false);
const router = useRouter();
if (!authStore.username || !authStore.method) router.back()
const {apiBase} = useRuntimeConfig().public;
const {resetForm} = useForm();
const {value: otp} = useField<string[]>("otp")
const verifyCode = async (e: string[]) => {
  isLoading.value = true;
  try {
    const url = apiBase + '/auth/check-code';
    const response = await $fetch(url, {
      method: "POST",
      body: {
        code: otp.value?.join("")
      },
      credentials: 'include'
    })
    if (response) {
      authStore.clearAuthData();
      resetForm()
    }
  } catch (error: any) {
    if (Array.isArray(error.data.message)) {
      error.data.message.map((item: string) => {
        toast.error(item, {
          position: "bottom-left",
        });
      });
    } else {
      toast.error(error.data.message, {
        position: "bottom-left"
      });
    }
  }
}
const routeBack = () => {
  router.back()
}

const initialTime: number = 120;

const endTime = ref<number | null>(null);
const timeLeft = ref<number>(initialTime);
const isRunning = ref<boolean>(false);
let interval: number | null = null;

const formattedTime = computed<string>(() => {
  const minutes: number = Math.floor(timeLeft.value / 60);
  const seconds: number = timeLeft.value % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
});

const startTimer = (): void => {
  if (!isRunning.value) {
    isRunning.value = true;
    endTime.value = new Date().getTime() + initialTime * 1000;
    interval = window.setInterval(() => {
      const now: number = new Date().getTime();
      timeLeft.value = Math.max(0, Math.floor((endTime.value! - now) / 1000));
      if (timeLeft.value === 0) {
        clearInterval(interval!);
        isRunning.value = false;
      }
    }, 100);
  }
};
startTimer();
const resetTimer = (): void => {
  if (interval) {
    clearInterval(interval);
  }
  timeLeft.value = initialTime;
  endTime.value = null;
  isRunning.value = false;
};
onUnmounted(() => {
  if (interval) {
    clearInterval(interval);
  }
});
</script>

<template>
  <div class="flex flex-col justify-center items-center h-full">
    <h1 class="text-sky-600 font-extrabold text-xl">
      کد تائید را وارد کنید
    </h1>
    <p class="text-sm my-3 text-neutral-500">
      کد تائید برای
      {{ authStore.method === AuthMethodEnum.Email ? "ایمیل" : "شماره موبایل" }}
      <span class="underline underline-offset-8">
        {{ authStore.username }}
      </span>
      ارسال گردید
    </p>
    <form class="mx-auto mt-4 w-full">
      <PinInput
          autofocus
          class="mx-auto w-full"
          id="pin-input"
          v-model="otp"
          placeholder=""
          @complete="verifyCode"
      >
        <PinInputGroup class="mx-auto">
          <PinInputInput
              class="!rounded-full mx-3 bg-black/5"
              autofocus
              v-for="(id, index) in 5"
              :key="id"
              :index="index"
          />
        </PinInputGroup>
      </PinInput>
    </form>
    <p class="text-xs mt-8">
      مدت زمان استفاده از کد تا {{ formattedTime }} دیگر
    </p>
    <button v-on:click="routeBack" class="text-sm mt-6 bg-black/5 py-2 px-4 rounded-xl">
      بازگشت به مرحله قبل
    </button>
  </div>
</template>

<style scoped></style>
