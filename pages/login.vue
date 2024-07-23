<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'

definePageMeta({
  middleware: ["guest-only"],
  //layout: false,
});

// const { login } = useAuth();

const form = reactive({
  data: {
    email: "admin@gmail.com",
    password: "password",
    rememberMe: false,
  },
  error: "",
  pending: false,
});

//const isAdmin = useAdmin();



const { authenticateUser } = useAuthStore() // use auth store

const { authenticated } = storeToRefs(useAuthStore()) // make authenticated state reactive

const user = ref({
  username: 'kminchelle',
  password: '0lelplR'
})
const router = useRouter()

const onLoginClick = async () => {
  const result = await authenticateUser(form)
  // redirect to homepage if user is authenticated
  if (authenticated) {
    router.push('/')
  }
}

// async function onLoginClick() {
//   try {
//     form.error = "";
//     form.pending = true;
//
//     await login(form.data.email, form.data.password, form.data.rememberMe);
//
//     const redirect = isAdmin.value ? "/admin" : "/private";
//     await navigateTo(redirect);
//   } catch (error: any) {
//     console.error(error);
//    
//     if (error.data.message) form.error = error.data.message;
//   } finally {
//     form.pending = false;
//   }
// }
</script>

<template>
<div class="all ">
  <div class="login">
    <div class="login-img"><img src="/img/teacher.svg" alt=""></div>
    <div class="login-wrapper">
      
      
      <div class="form login-form">
        <div class="login-form__title h2-title">Войти</div>
        <div class="form-row">
          <div class="c-md-1">
            <div class="form-item">
              <label for="" class="form-label">
                <span class="text">Номер телефона</span>
              </label>
            </div>
            <div class="form-input">
              <InputMask id="basic" v-model="form.data.phone" mask="+7(999)999-99-99" placeholder="+7(999)999-99-99" />
              <input v-model="form.data.phone" class="input" type="text">
            </div>
          </div><!--end c-md-1 -->
        </div><!--end form-row -->
        <div class="form-row">
          <div class="c-md-1">
            <div class="form-item">
              <label for="" class="form-label">
                <span class="text">Пароль</span>
              </label>
            </div>
            <div class="form-input">
              <input v-model="form.data.password" class="input" type="text">
            </div>
          </div><!--end c-md-1 -->
        </div><!--end form-row -->
        <div class="form-row">
          <div class="c-md-1">
            <div class="box-checkbox">
              <Checkbox v-model="form.data.rememberMe" inputId="rememberPassword" value="rememberPassword"></Checkbox>
              <label class="" for="rememberPassword">Запомнить меня на этом компьютере</label>
            </div>
            
          </div><!--end c-md-1 -->
        </div><!--end form-row -->
        <div class="form-row">
          <div class="c-md-1">
            <div class="b-btn">
              <button class="btn btn-login">Войти</button>
            </div>
          </div><!--end c-md-1 -->
        </div><!--end form-row -->
        <div class="form-row">
          <div class="c-md-1">
            <div class="login-links">
              <NuxtLink to="/">
                Зарегистрироваться
              </NuxtLink>
              <NuxtLink to="/">
                Забыли пароль?
              </NuxtLink>
            </div>
          </div><!--end c-md-1 -->
        </div><!--end form-row -->
        <div class="form-row">
          <div class="c-md-1">
            <div class="login__using">
              <div class="login__using-title"></div>
              <div class="login__using-btns">
                <NuxtLink to="/" class="btn btn--border link-mos">
                  <SvgIcon name="eye" class="ic32"></SvgIcon>
                  <span class="btn-label">mos.ru</span>
                </NuxtLink>
                <NuxtLink to="/" class="btn btn--border link-myak">
                  <SvgIcon name="eye" class="ic32"></SvgIcon>
                </NuxtLink>
                <span class="btn-label">Маяк</span>
              </div>
            </div>
          </div><!--end c-md-1 -->
        </div><!--end form-row -->
          
      </div>
    </div><!--end login-wrapper -->
  </div><!--end b-login-->
</div><!--end all -->
  <!-- div class="min-h-screen flex flex-col">
    <header>
      <h1 class="my-24 font-bold text-2xl text-center">Login to your account</h1>
    </header>
    <main class="mx-auto max-w-sm w-full">
      <form class="mb-6 p-12 bg-slate-900 rounded shadow" @submit.prevent="onLoginClick">
        <p
          v-if="form.error"
          class="mb-3 px-3 py-1.5 w-full border rounded border-red-400 text-sm text-center text-red-400"
        >
          {{ form.error }}
        </p>
        <div class="mb-3">
          <label for="email" class="mb-1 inline-block font-semibold text-sm text-slate-200">Email address</label>
          <input
            id="email"
            v-model="form.data.email"
            type="email"
            class="px-3 py-1.5 w-full border rounded border-slate-700 bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-slate-700 focus:border-transparent"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="mb-1 inline-block font-semibold text-sm text-slate-200">Password</label>
          <input
            id="password"
            v-model="form.data.password"
            type="password"
            class="px-3 py-1.5 w-full border rounded border-slate-700 bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-slate-700 focus:border-transparent"
            required
          />
        </div>
        <div class="mb-3 flex justify-end items-center">
          <label for="remember-me" class="mr-1 text-sm text-light-100">Remember me</label>
          <input
            id="remember-me"
            v-model="form.data.rememberMe"
            type="checkbox"
            class="w-4 h-4 accent-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:border-transparent"
          />
        </div>
        <div>
          <button
            type="submit"
            :disabled="form.pending"
            class="px-3 py-1.5 w-full rounded bg-light-100 font-semibold text-sm text-slate-950 hover:bg-light-700 focus:outline-none focus:bg-light-700 transition-colors"
          >
            Sign in
          </button>
        </div>
      </form>
      <div class="mb-6 text-center">
        <NuxtLink to="/" class="text-xs text-slate-400 transition-colors hover:text-light-100">Go back home</NuxtLink>
      </div>
      <div>
        <h3 class="mb-1 font-bold">Help</h3>
        <p class="text-sm text-slate-400">
          For demo purpose, this application comes with predefined credentials you can use to login:
        </p>
        <ul class="text-sm text-slate-400">
          <li><code class="text-slate-200">admin@gmail.com</code> with <code class="text-slate-200">password</code></li>
          <li><code class="text-slate-200">user@gmail.com</code> with <code class="text-slate-200">password</code></li>
        </ul>
      </div>
    </main>
    <BaseFooter class="mt-auto" />
  </div -->
</template>
