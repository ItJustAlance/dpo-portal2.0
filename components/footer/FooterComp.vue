<script setup>
const footerNavData = reactive([
  {
    title: 'Меню',
    items: [
      { text: 'Курсы', link: '' },
      { text: 'Мероприятия', link: '' },
      { text: 'Конкурсы', link: '' },
      { text: 'Новости', link: '' },
      { text: 'Поддержка', link: '' },
    ],
  },
  {
    title: 'На портале',
    items: [
      { text: 'Реестр программ', link: '' },
      { text: 'Субъекты', link: '' },
      { text: 'Знакомство с порталом', link: '' },
      { text: 'Экспертиза ДПП', link: '' },
      { text: 'Правовая информация', link: '' },
    ],
  },
  {
    title: 'Внешние ресурсы',
    items: [
      { text: 'Банк резюме', link: '' },
      { text: 'БДУР', link: '' },
      { text: 'Конструктор', link: '' },
      { text: 'Аттестация', link: '' },
    ],
  },
]);
</script>
<template>
  <footer class="footer">
    <div class="all">
      <div class="box-info-banner">
        <div class="box-info-banner__header">
          <div class="img"><img src="/img/footer-warning.svg" alt="" /></div>
          <div class="b-text">Возникли сложности с работой на сайте? Пишите нам</div>
        </div>

        <div class="b-right">
          <NuxtLink to="/" class="btn btn--second">
            <span class="btn-label">Техническая поддержка</span>
            <SvgIcon name="ic-support" class="ic-clr ic24" />
          </NuxtLink>
        </div>
      </div>
      <!--end box-info-banner -->
      <div class="footer-up">
        <div class="footer-cols">
          <div class="footer-col-info">
            <div class="text">Дополнительное профессиональное образование работников образовательных организаций</div>
            <div class="b-btn-support">
              <NuxtLink to="/" class="btn btn--second">
                <span class="btn-label">Техническая поддержка</span>
                <SvgIcon name="ic-support" class="ic-clr ic24"></SvgIcon>
              </NuxtLink>
            </div>
            <!--end b-btn-support -->
          </div>
          <!--end footer-col-info -->
          <div class="footer-nav">
            <div v-for="(item, index) in footerNavData" :key="index" class="footer-nav__col">
              <FooterNav :item="item" />
            </div>
          </div>
          <!--end footer-nav -->
        </div>
        <!--end footer-cols-->
      </div>
      <!--end footer-up -->
      <div class="footer-bottom">
        <div class="copy">© 2022 Департамент образования и науки города Москвы</div>
      </div>
    </div>
  </footer>
</template>
