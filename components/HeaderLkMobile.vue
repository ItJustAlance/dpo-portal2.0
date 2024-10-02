<script lang="ts" setup></script>

<template>
  <div class="mobile-menu">
    <ul class="header__nav-menu">
      <li class="nav-menu-item nav-menu-item__submenu --open">
        <div class="submenu open">
          <div class="all">
            <div class="submenu__wrapper">
              <div class="submenu__box">
                <div class="submenu__items">
                  <div class="submenu__item">
                    <div class="submenu__item-up">
                      <div class="submenu__icon"><img src="/img/menu-books.svg" alt="" /></div>
                      <div class="submenu__item-label">Войти</div>
                    </div>
                    <div class="submenu__item-bottom">Для зарегистрированных пользователей</div>
                  </div>
                  <!--end submenu__item -->
                  <div class="submenu__item">
                    <div class="submenu__item-up">
                      <div class="submenu__icon"><img src="/img/menu-chalkboardTeacher.svg" alt="" /></div>
                      <div class="submenu__item-label">Регистрация</div>
                    </div>
                    <div class="submenu__item-bottom">Для пользователей, у которых нет аккаунта в системе</div>
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
