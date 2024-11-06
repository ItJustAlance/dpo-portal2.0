<script lang="ts" setup>
const currentUser = useAuthUser();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isAdmin = useAdmin();
const { logout } = useAuth();

const form = reactive({
  pending: false,
});

const isMenuOpen = ref(false);

function onMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  isLkOpen.value = false;
  document.body.classList.toggle('lock', isMenuOpen.value);
}

const isLkOpen = ref(false);

function onLk() {
  isLkOpen.value = !isLkOpen.value;
  isMenuOpen.value = false;
  document.body.classList.toggle('lock', isLkOpen.value);
}
function onClose() {
  isLkOpen.value = false;
  isMenuOpen.value = false;
  document.body.classList.toggle('lock', false);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function onLogoutClick() {
  try {
    form.pending = true;

    await logout();

    await navigateTo('/');
  } catch (error) {
    console.error(error);
  } finally {
    form.pending = false;
  }
}
</script>

<template>
  <header class="header" :class="{ '--lk-open': isLkOpen, '--menu-open': isMenuOpen }">
    <div class="all">
      <div class="header__lk">
        <div class="header__lk-ico" @click="onLk">
          <SvgIcon name="user" class="ic42 fnone"></SvgIcon>
        </div>
      </div>
      <!--end header__lk -->
      <div class="header__logo">
        <NuxtLink to="/" class="logo-link">
          <img src="/img/logo-new.svg" alt="" />
        </NuxtLink>
      </div>
      <nav class="header__nav">
        <div class="header__nav-ico">
          <SvgIcon v-show="!(isMenuOpen || isLkOpen)" name="ic-menu" class="ic42" @click="onMenu"></SvgIcon>
          <SvgIcon v-show="isMenuOpen || isLkOpen" name="menu-close" class="ic42" @click="onClose"></SvgIcon>
        </div>
        <ul class="header__nav-menu">
          <li class="nav-menu-item">
            <NuxtLink :to="{ name: 'courses' }" class="nav-menu-item__link"> Курсы </NuxtLink>
          </li>
          <li class="nav-menu-item">
            <NuxtLink :to="{ name: 'events' }" class="nav-menu-item__link"> Мероприятия </NuxtLink>
          </li>
          <li class="nav-menu-item">
            <NuxtLink :to="{ name: 'courses' }" class="nav-menu-item__link"> Конкурсы </NuxtLink>
          </li>
          <li class="nav-menu-item">
            <NuxtLink :to="{ name: 'news' }" class="nav-menu-item__link"> Новости </NuxtLink>
          </li>
          <li class="nav-menu-item nav-menu-item__submenu">
            <div to="/" class="nav-menu-item__link --arr">
              Дополнительно
              <SvgIcon name="menu-arr" class="ic16"></SvgIcon>
            </div>
            <div class="submenu">
              <div class="all">
                <div class="submenu__wrapper">
                  <div class="submenu__box">
                    <div class="submenu__title">НА ПОРТАЛЕ</div>
                    <div class="submenu__items">
                      <div class="submenu__item">
                        <div class="submenu__item-up">
                          <div class="submenu__icon"><img src="/img/menu-books.svg" alt="" /></div>
                          <div class="submenu__item-label">Реестр программ</div>
                        </div>
                        <div class="submenu__item-bottom">Все актуальные программы ДПО прошедшие экспертизу</div>
                      </div>
                      <!--end submenu__item -->
                      <div class="submenu__item">
                        <NuxtLink :to="{ name: 'subjects' }" class="submenu__item-up">
                          <span class="submenu__icon"><img src="/img/menu-chalkboardTeacher.svg" alt="" /></span>
                          <span class="submenu__item-label">Организации-субъекты ДПО</span>
                        </NuxtLink>
                        <div class="submenu__item-bottom">Организации ДПО размещающие программы на портале ДПО</div>
                      </div>
                      <!--end submenu__item -->
                      <div class="submenu__item">
                        <div class="submenu__item-up">
                          <div class="submenu__icon"><img src="/img/menu-and.svg" alt="" /></div>
                          <div class="submenu__item-label">Знакомство с порталом</div>
                        </div>
                        <div class="submenu__item-bottom">Гид по порталу</div>
                      </div>
                      <!--end submenu__item -->
                      <div class="submenu__item">
                        <div class="submenu__item-up">
                          <div class="submenu__icon"><img src="/img/menu-ear.svg" alt="" /></div>
                          <div class="submenu__item-label">Экспертиза ДПП</div>
                        </div>
                        <div class="submenu__item-bottom">
                          Нормативно-правовые акты для проведения экспертизы программ ДПП
                        </div>
                      </div>
                      <!--end submenu__item -->
                      <div class="submenu__item">
                        <div class="submenu__item-up">
                          <div class="submenu__icon"><img src="/img/menu-briefcase.svg" alt="" /></div>
                          <div class="submenu__item-label">Правовая информация</div>
                        </div>
                        <div class="submenu__item-bottom">
                          <ul class="list-submenu3">
                            <li>
                              <NuxtLink to="/"> Договор оферты </NuxtLink>
                            </li>
                            <li>
                              <NuxtLink to="/"> Обработка персональных данных </NuxtLink>
                            </li>
                            <li>
                              <NuxtLink to="/"> Шаблоны договоров </NuxtLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <!--end submenu__item -->
                      <div class="submenu__item">
                        <div class="submenu__item-up">
                          <div class="submenu__icon"><img src="/img/menu-userList.svg" alt="" /></div>
                          <div class="submenu__item-label">Поддержка</div>
                        </div>
                        <div class="submenu__item-bottom">Форма связи с технической поддержкой</div>
                      </div>
                      <!--end submenu__item -->
                    </div>
                  </div>
                  <!--end submenu__box -->
                  <div class="submenu__box">
                    <div class="submenu__title">ВНЕШНИЕ РЕСУРСЫ</div>
                    <div class="submenu__items">
                      <div class="submenu__item">
                        <div class="submenu__item-up">
                          <div class="submenu__icon"><img src="/img/menu-books.svg" alt="" /></div>
                          <div class="submenu__item-label">Банк резюме</div>
                        </div>
                        <div class="submenu__item-bottom">
                          Сервис поиска сотрудников и вакансий в сфере Московского образования
                        </div>
                      </div>
                      <!--end submenu__item -->
                      <div class="submenu__item">
                        <div class="submenu__item-up">
                          <div class="submenu__icon"><img src="/img/menu-chalkboardTeacher.svg" alt="" /></div>
                          <div class="submenu__item-label">БДУР</div>
                        </div>
                        <div class="submenu__item-bottom">База данных управленческих решений</div>
                      </div>
                      <!--end submenu__item -->
                      <div class="submenu__item">
                        <div class="submenu__item-up">
                          <div class="submenu__icon"><img src="/img/menu-and.svg" alt="" /></div>
                          <div class="submenu__item-label">Конструктор</div>
                        </div>
                        <div class="submenu__item-bottom">Создание и экспертиза программ ДПП</div>
                      </div>
                      <!--end submenu__item -->
                      <div class="submenu__item">
                        <div class="submenu__item-up">
                          <div class="submenu__icon"><img src="/img/menu-ear.svg" alt="" /></div>
                          <div class="submenu__item-label">Аттестация</div>
                        </div>
                        <div class="submenu__item-bottom">
                          <ul class="list-submenu3">
                            <li>
                              <NuxtLink to="/"> Руководящих кадров </NuxtLink>
                            </li>
                            <li>
                              <NuxtLink to="/"> Образовательных кадров </NuxtLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <!--end submenu__item -->
                    </div>
                  </div>
                  <!--end submenu__box -->
                </div>
              </div>
            </div>
            <!--end submenu -->
          </li>
        </ul>
      </nav>
      <div class="header__right">
        <div v-if="currentUser" class="b-links-logins">
          <AuthInfo></AuthInfo>
        </div>
        <div v-else class="b-links-logins">
          <NuxtLink to="/" class="btn btn--inline">Регистрация</NuxtLink>
          <NuxtLink to="/login" class="btn">Войти</NuxtLink>
        </div>
        <div class="b-view-low-vision">
          <button color="btn-inline">
            <SvgIcon name="eye" class="ic32"></SvgIcon>
          </button>
        </div>
      </div>
      <!--end header__right -->

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
    </div>
    <!--end all -->
    <HeaderMenuMobile :class="{ open: isMenuOpen }" />
    <HeaderLkMobile :class="{ open: isLkOpen }" />
  </header>
</template>
