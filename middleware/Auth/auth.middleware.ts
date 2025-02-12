import {getApiBase, getToken} from "~/composables/Api";

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!to.path.startsWith("dashboard")) return;
  try {
    const {data, status} = await useFetch(`${getApiBase()}/auth/check-token`, {
      method: 'POST',
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (!data.value)
      return navigateTo("/login");
  } catch (e) {
    console.log(e)
    return navigateTo("/login");
  }
})
