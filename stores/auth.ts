import { defineStore } from 'pinia'
import type { UnwrapNestedRefs } from "@vue/reactivity";

interface UserPayloadInterface {
  payload: object;
}



export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
    userData: {}
  }),
  actions: {
    async authenticateUser(payload: UnwrapNestedRefs<{
        data: { password: string; rememberMe: boolean; phone: string };
        pending: boolean;
        error: string
    }> & {}) {
      const { login } = useAuth();
      console.log('payload', payload)
      // useFetch from nuxt 3
      const result: any = await login(payload.data.phone, payload.data.password, payload.data.rememberMe);
      
      // const { data, pending }: any = await useFetch('https://dummyjson.com/auth/login', {
      //   method: 'post',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: {
      //     username,
      //     password
      //   }
      // })
      //this.loading = pending; 
      console.log('data', result.value)
      if (result.value) {
        const token = useCookie('token') // useCookie new hook in nuxt 3
        token.value = result?.value?.token // set token to cookie
        this.authenticated = true // set authenticated  state value to true
        this.userData = result.value;
      }
    },
    logUserOut () {
      const token = useCookie('token') // useCookie new hook in nuxt 3
      this.authenticated = false // set authenticated  state value to false
      token.value = null // clear the token cookie
      this.userData = {} // clear the token cookie
    }
  }
})
