<script lang="ts" setup>
const isSubmenuOpen = ref(false);

function onSubmenu() {
  isSubmenuOpen.value = !isSubmenuOpen.value;
}
</script>

<template>
  <div class="mobile-menu">
    <ul class="header__nav-menu">
      <li class="nav-menu-item">
        <NuxtLink :to="{ name: 'courses' }" class="nav-menu-item__link"> Курсы </NuxtLink>
      </li>
      <li class="nav-menu-item">
        <NuxtLink to="/" class="nav-menu-item__link"> Мероприятия </NuxtLink>
      </li>
      <li class="nav-menu-item">
        <NuxtLink to="/" class="nav-menu-item__link"> Конкурсы </NuxtLink>
      </li>
      <li class="nav-menu-item">
        <NuxtLink to="/" class="nav-menu-item__link"> Новости </NuxtLink>
      </li>
      <li class="nav-menu-item nav-menu-item__submenu" :class="{ '--open': isSubmenuOpen }">
        <span class="nav-menu-item__link --arr" @click="onSubmenu">
          Дополнительно
          <SvgIcon name="menu-arr" class="ic16"></SvgIcon>
        </span>
        <div :class="{ open: isSubmenuOpen }" class="submenu">
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
                    <div class="submenu__item-up">
                      <div class="submenu__icon"><img src="/img/menu-chalkboardTeacher.svg" alt="" /></div>
                      <div class="submenu__item-label">Организации-субъекты ДПО</div>
                    </div>
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
  </div>
</template>
