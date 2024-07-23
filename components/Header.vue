<script lang="ts" setup>
const currentUser = useAuthUser();
const isAdmin = useAdmin();
const { logout } = useAuth();

const form = reactive({
  pending: false,
});

async function onLogoutClick() {
  try {
    form.pending = true;

    await logout();

    await navigateTo("/");
  } catch (error) {
    console.error(error);
  } finally {
    form.pending = false;
  }
}
</script>

<template>
  <header class="header">
    <div class="all">
    <div class="header__logo">
      <NuxtLink to="/" class="logo-link">
        <img src="/img/logo.svg" alt="">
      </NuxtLink>
    </div>
    <nav class="header__nav">
      <ul class="header__nav-menu">
        <li class="nav-menu-item">
          <NuxtLink to="/" class="nav-menu-item__link">
            Курсы
          </NuxtLink>
        </li>
        <li class="nav-menu-item">
          <NuxtLink to="/" class="nav-menu-item__link">
            Мероприятия
          </NuxtLink>
        </li>
        <li class="nav-menu-item">
          <NuxtLink to="/" class="nav-menu-item__link">
            Конкурсы
          </NuxtLink>
        </li>
        <li class="nav-menu-item">
          <NuxtLink to="/" class="nav-menu-item__link">
            Новости
          </NuxtLink>
        </li>
        <li class="nav-menu-item">
          <NuxtLink to="/" class="nav-menu-item__link">
            Дополнительно
          </NuxtLink>
          <ul class="submenu">
            <li class="nav-menu-item">
              <NuxtLink to="/" class="nav-menu-item__link">
                Дополнительно
              </NuxtLink>
            </li>
            <li class="nav-menu-item">
              <NuxtLink to="/" class="nav-menu-item__link">
                Дополнительно
              </NuxtLink>
            </li>
            <li class="nav-menu-item">
              <NuxtLink to="/" class="nav-menu-item__link">
                Дополнительно
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <div class="header__right">
      <div class="b-links-logins">
        <NuxtLink to="/" class="btn btn--inline">Регистрация</NuxtLink>
        <NuxtLink to="/" class="btn">Войти</NuxtLink>
      </div>
      <div class="b-view-low-vision">
        <button color="btn-inline">
          <SvgIcon name="eye" class="ic32"></SvgIcon>
        </button>
      </div>
    </div><!--end header__right -->
    




    <!-- div class="p-3 mx-auto w-full max-w-4xl">
      <nav class="flex gap-3">
        <NuxtLink to="/" class="flex flex-col text-center">
          <span class="font-bold text-lg uppercase leading-none">Auth</span>
          <span class="text-sm leading-none text-slate-400">example</span>
        </NuxtLink>
        <SvgIcon name="filter"></SvgIcon>
        <div class="ml-auto flex items-center gap-3">
          <template v-if="currentUser">
            <NuxtLink to="/private" class="px-3 font-semibold">Private</NuxtLink>
            <NuxtLink v-if="isAdmin" to="/admin" class="px-3 font-semibold">Admin</NuxtLink>
            <button
              class="py-1.5 px-3 rounded bg-light-100 font-semibold text-sm text-slate-950 hover:bg-light-700 transition-colors"
              :disabled="form.pending"
              @click="onLogoutClick"
            >
              Logout
            </button>
          </template>
          <template v-else>
            <NuxtLink to="/guest" class="px-3 font-semibold">Public</NuxtLink>
            <NuxtLink to="/login" class="px-3 font-semibold">Login</NuxtLink>
          </template>
        </div>
      </nav>
    </div -->
    </div><!--end all -->
  </header>
</template>
