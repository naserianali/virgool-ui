export const getToken = (): string | null | undefined => {
  return useCookie('accessToken').value;
}
export const getApiBase = () => {
  return useRuntimeConfig().public.apiBase;
}