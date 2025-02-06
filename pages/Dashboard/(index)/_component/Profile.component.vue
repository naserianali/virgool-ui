<script setup lang="ts">
import ProfileBannerComponent from './ProfileBanner.component.vue';
import ProfileInformationComponent from './ProfileInformation.component.vue'

export interface IProfile {
  id: string;
  nickname: string;
  bio: string;
  image: string;
  bgImage: string;
  birthday: string;
  linkedInProfile: string;

}

export interface IUser {
  id: string;
  username: string;
  phone: string;
  email: string;
  role: string;
  bio: string;
  profile?: IProfile;
}

const {apiBase} = useRuntimeConfig().public;
const profile = ref<IProfile>();
const user = ref<IUser>();
const getProfile = async () => {
  const url = `${apiBase}/user/profile`
  const {data} = await useFetch<IUser>(url, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${useCookie("accessToken").value}`
    }
  });
  if (data.value) {
    if (data.value.profile)
      profile.value = data.value.profile;
    user.value = data.value;
  }
}
await getProfile()
</script>

<template>
  <div class="border p-2 rounded-xl w-9/12 h-3/4 shadow">
    <ProfileBannerComponent :profile="profile"/>
    <ProfileInformationComponent :user="user"/>
  </div>
</template>

<style scoped>

</style>