import { useAuthUser } from './useAuthUser';

export const useAuth = () => {
  const authUser = useAuthUser();

  const setUser = (user: any) => {
    authUser.value = user;
  };

  const setCookie = (cookie: any) => {
    cookie.value = cookie;
  };

  const login = async (phone: string, password: string, rememberMe: boolean) => {
    console.log('dddd');
    const data = await $fetch('/auth/login', {
      method: 'POST',
      body: {
        phone,
        password,
        rememberMe,
      },
    });

    setUser(data.user);

    return authUser;
  };

  const logout = async () => {
    const data = await $fetch('/auth/logout', {
      method: 'POST',
    });

    setUser(data.user);
  };

  const me = async () => {
    if (!authUser.value) {
      try {
        const data = await $fetch('/auth/me', {
          headers: useRequestHeaders(['cookie']) as HeadersInit,
        });

        setUser(data.user);
      } catch (error) {
        setCookie(null);
      }
    }

    return authUser;
  };

  return {
    login,
    logout,
    me,
  };
};
