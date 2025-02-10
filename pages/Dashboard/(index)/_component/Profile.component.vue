<script setup lang="ts">
import ProfileBannerComponent from './ProfileBanner.component.vue';
import ProfileInformationComponent from './ProfileInformation.component.vue';
import ProfileImageComponent from './ProfileImage.component.vue';
import ProfileStatsComponent from './ProfileStats.component.vue';
import PostsComponent from "@/pages/Dashboard/Post/_components/Posts.component.vue"

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
  followers: number;
  following: number;
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
  <div class="h-screen w-full mx-auto self-center">
    <div  class="border p-2 rounded-xl w-9/12 mx-auto h-3/4 shadow">
      <ProfileBannerComponent :profile="profile"/>
      <div class="flex w-full justify-between">
        <ProfileStatsComponent v-if="user" title="دنبال کننده ها" :amount="user.followers"/>
        <ProfileImageComponent :profile="profile"/>
        <ProfileStatsComponent v-if="user" title="دنبال شونده ها" :amount="user.following"/>
      </div>
      <ProfileInformationComponent :user="user"/>
      <button class="bg-sky-700 py-1 px-4 rounded-xl text-white text-sm hover:bg-sky-800">
      <span>
        دنبال کردن
      </span>
        <!--      <span>
                دنبال میکنید
              </span>-->
      </button>
    </div>
    <div class="overflow-hidden w-9/12 mx-auto mt-8 rounded-xl">
      <PostsComponent/>
    </div>
  </div>
</template>

<style scoped>

</style>