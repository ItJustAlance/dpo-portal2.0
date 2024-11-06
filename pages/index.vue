<script lang="ts" setup>
// const currentUser = useAuthUser();

const sliderMain = reactive({
  data: [
    { id: 1, url: '/img/banner.png' },
    { id: 2, url: '/img/banner.png' },
    { id: 3, url: '/img/banner.png' },
    { id: 4, url: '/img/banner.png' },
  ],
});

const totalSlides = computed(() => sliderMain.data?.length || 0);
const currentSlide = ref(1);

function onCurrentSlide(event) {
  currentSlide.value = +event + 1;
}
</script>

<template>
  <div class="content">
    <div class="lvl1">
      <div class="all">
        <div class="lvl1-content">
          <div class="lvl-title">
            <h1 class="h1-title">Маркетплейс ДПО</h1>
            <div class="subtitle">
              Дополнительное профессиональное образование педагогических работников города Москвы
            </div>
          </div>
          <div class="lvl1-img --mobile"><img src="/img/studying.svg" alt="" /></div>
          <SearchBox class="--main" />
        </div>
        <!--end lvl1-content -->
        <div class="lvl1-circ"></div>
        <div class="lvl1-img"><img src="/img/studying.svg" alt="" /></div>
      </div>
      <!--end all -->
    </div>
    <!--end lvl1 -->
    <div class="lvl2">
      <div class="all">
        <div class="boxinfo-list">
          <div class="boxinfo box-1">
            <div class="boxinfo-wrapper">
              <div class="title">
                <NuxtLink to="/" class="title-link">
                  <div class="title-link__text">Курсы для вас</div>
                  <div class="title-link__ic"><SvgIcon name="ic-arrow-circle-right" class="ic24"></SvgIcon></div>
                </NuxtLink>
              </div>
              <ul class="curse-list">
                <li class="curse-item">
                  <NuxtLink to="/" class="curse-item__link">Воспитательная работа</NuxtLink>
                </li>
                <li class="curse-item">
                  <NuxtLink to="/" class="curse-item__link">Государственная итоговая аттестация (9-11 кл)</NuxtLink>
                </li>
                <li class="curse-item">
                  <NuxtLink to="/" class="curse-item__link">Дошкольное образование</NuxtLink>
                </li>
                <li class="curse-item">
                  <NuxtLink to="/" class="curse-item__link">Духовно-нравственное воспитание, ОРКСЭ</NuxtLink>
                </li>
                <li class="curse-item-wrapper">
                  <NuxtLink to="/" class="curse-item__link tag-active">Все направления</NuxtLink>
                </li>
              </ul>
              <div class="boxinfo-img">
                <img src="/img/education.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="boxs-mini">
            <div class="boxinfo box-2">
              <div class="boxinfo-wrapper">
                <div class="title">
                  <NuxtLink to="/" class="title-link">
                    <div class="title-link__text">Мероприятия</div>
                    <div class="title-link__ic"><SvgIcon name="ic-arrow-circle-right" class="ic32"></SvgIcon></div>
                  </NuxtLink>
                </div>
                <div class="boxinfo-img">
                  <img src="/img/events.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="boxinfo box-3">
              <div class="boxinfo-wrapper">
                <div class="title">
                  <NuxtLink to="/" class="title-link">
                    <div class="title-link__text">Конкурсы</div>
                    <div class="title-link__ic"><SvgIcon name="ic-arrow-circle-right" class="ic32"></SvgIcon></div>
                  </NuxtLink>
                </div>
                <div class="boxinfo-img">
                  <img src="/img/winners.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="boxinfo box-4">
              <div class="boxinfo-wrapper">
                <div class="title">
                  <NuxtLink to="/" class="title-link">
                    <div class="title-link__text">Новости</div>
                    <div class="title-link__ic"><SvgIcon name="ic-arrow-circle-right" class="ic32"></SvgIcon></div>
                  </NuxtLink>
                </div>
                <div class="boxinfo-img">
                  <img src="/img/happy_news.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end all-->
    </div>
    <!--end lvl2 -->
    <div class="lvl3">
      <div class="all">
        <div class="slider-big-wrapper">
          <Carousel
            class="slider-big"
            :value="sliderMain.data"
            :num-visible="1"
            :num-scroll="1"
            :show-indicators="false"
            @update:page="onCurrentSlide"
          >
            <template #item="slotProps">
              <div class="banner-big">
                <img :src="slotProps.data.url" :alt="slotProps.data.id" class="w-full rounded" />
              </div>
            </template>
            <template #previcon>
              <SvgIcon name="ic-arrow-circle-left" class="fnone ic48"></SvgIcon>
            </template>
            <template #nexticon>
              <SvgIcon name="ic-arrow-circle-right" class="fnone ic48"></SvgIcon>
            </template>
          </Carousel>
          <div class="indicator">
            <strong>{{ currentSlide }}</strong> / {{ totalSlides }}
          </div>
        </div>
      </div>
      <!--end all-->
    </div>
    <!--end lvl3 -->
    <div class="lvl4">
      <div class="all">
        <div class="main-title h2-title">Популярные курсы</div>
        <div class="popular-list">
          <div class="popular-item">
            <CourseBox />
          </div>
          <div class="popular-item">
            <CourseBox />
          </div>
        </div>
        <section class="section">
          <div class="visible-md b-row-center --align-center">
            <button class="btn btn--second btn--md-full">
              <span class="btn-label">Все курсы</span>
              <SvgIcon name="ic-arrow-circle-right" class="fnone ic24"></SvgIcon>
            </button>
          </div>
        </section>
      </div>
      <!--end all-->
    </div>
    <!--end lvl4 -->
  </div>
</template>
