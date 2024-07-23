<template>
<footer class="footer">
  <div class="all">
    <div class="box-info-banner">
      <div class="img"></div>
      <div class="b-text">
        Возникли сложности с работой на сайте? Пишите нам
      </div>
      <div class="b-right">
        <NuxtLink to="/" class="btn btn--second">
          <span class="btn-label">Техническая поддержка</span>
          <SvgIcon name="ic-support" class="ic-clr ic24" />
        </NuxtLink>
      </div>
    </div><!--end box-info-banner -->
    <div class="footer-up">
      <div class="footer-cols">
        <div class="footer-col-info">
          <div class="text">
            Дополнительное профессиональное образование работников образовательных организаций
          </div>
          <div class="b-btn-support">
            <NuxtLink to="/" class="btn btn--second">
              <span class="btn-label">Техническая поддержка</span>
              <SvgIcon name="ic-support" class="ic-clr ic24"></SvgIcon>
            </NuxtLink>
            
          </div><!--end b-btn-support -->
        </div><!--end footer-col-info -->
        <div class="footer-nav">
          <div class="footer-nav__col">
            <div class="footer-nav__title">МЕНЮ</div>
            <ul class="foot-menu">
              <li>
                <NuxtLink>Курсы</NuxtLink>
              </li>
              <li>
                <NuxtLink>Мероприятия</NuxtLink>
              </li>
                  <li>
                    <NuxtLink>Конкурсы</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink>Новости</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink>Поддержка</NuxtLink>
                  </li>
            </ul>
          </div>
          <div class="footer-nav__col">
            <div class="footer-nav__title">НА ПОРТАЛЕ</div>
            <ul class="foot-menu">
              <li>
                <NuxtLink>Реестр программ</NuxtLink>
              </li>
              <li>
                <NuxtLink>Субъекты</NuxtLink>
              </li>
              <li>
                <NuxtLink>Знакомство с порталом</NuxtLink>
              </li>
              <li>
                <NuxtLink>Экспертиза ДПП</NuxtLink>
              </li>
              <li>
                <NuxtLink>Правовая информация</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="footer-nav__col">
            <div class="footer-nav__title">ВНЕШНИЕ РЕСУРСЫ</div>
            <ul class="foot-menu">
              <li>
                <NuxtLink>Банк резюме</NuxtLink>
              </li>
              <li>
                <NuxtLink>БДУР</NuxtLink>
              </li>
              <li>
                <NuxtLink>Конструктор</NuxtLink>
              </li>
              <li>
                <NuxtLink>Аттестация</NuxtLink>
              </li>
            </ul>
          </div>
        </div><!--end footer-nav -->
      </div><!--end footer-cols-->
    </div><!--end footer-up -->
    <div class="footer-bottom">
      <div class="copy">© 2022 Департамент образования и науки города Москвы</div>
    </div>
  </div>
</footer>
</template>
<script setup>
</script>
