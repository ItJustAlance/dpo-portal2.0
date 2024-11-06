export default defineNuxtRouteMiddleware( () => {
  const user = useAuthUser();

  if (user.value) {
    if (process.server) return navigateTo({ name: 'index' });

    return abortNavigation();
  }
});
