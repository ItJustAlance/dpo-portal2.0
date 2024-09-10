<script lang="ts" setup>
// const currentUser = useAuthUser();

const sliderMain = reactive({
  data: [
    { id: 1, url: "/img/banner.png" },
    { id: 2, url: "/img/banner.png" },
  ],
});
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
          <div class="search-box">
            <div class="search-box__search">
              <div class="search-form">
                <div class="search-form__input">
                  <input
                    type="text"
                    placeholder="Название курса, шифр, направление, специальность"
                    class="search-input"
                  />
                  <div class="search-clear">
                    <SvgIcon name="xcircle" class="fnone ic24"></SvgIcon>
                  </div>
                </div>
                <div class="search-form__result">
                  <div class="search-form__result-wrapper">
                    <div class="search-group">
                      <div class="search-group__title">Недавние запросы</div>
                      <div class="search-group__body">
                        <ul class="search-list-tags">
                          <li class="search-tag-item">
                            <div class="search-tag-item__wrap">
                              <div class="search-tag-item__title">Воспитатель</div>
                              <div class="search-tag-item__del"><SvgIcon name="xcircle" class="ic12"></SvgIcon></div>
                            </div>
                          </li>
                          <li class="search-tag-item">
                            <div class="search-tag-item__wrap">
                              <div class="search-tag-item__title">Воспитатель</div>
                              <div class="search-tag-item__del">
                                <SvgIcon name="xcircle" class="fill-none ic12"></SvgIcon>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!--end search-group -->
                    <div class="search-group">
                      <div class="search-group__title">Популярные курсы</div>
                      <div class="search-group__body">
                        <ul class="search-list-box">
                          <li class="search-list__item">
                            <div class="search-list__item-wrapper">
                              <div class="img"><img src="/img/img.png" alt="" /></div>
                              <div class="right">
                                <div class="text">
                                  Организация деятельности учащихся, ориентированная на обеспечение информационной
                                  безопасности в сети интернет
                                </div>
                                <div class="bottom">
                                  <div class="small-label-list">
                                    <div class="small-label">
                                      <div class="small-label__icon">
                                        <SvgIcon name="barcode" class="fnone ic12"></SvgIcon>
                                      </div>

                                      <div class="small-label__title">04868-22/23-Б-ЗД</div>
                                    </div>
                                    <div class="small-label">
                                      <div class="small-label__icon">
                                        <SvgIcon name="ic-tag" class="fnone ic12"></SvgIcon>
                                      </div>

                                      <div class="small-label__title">6 450 ₽</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!--end search-group -->
                  </div>
                  <!--end search-form__result-wrapper -->
                </div>
                <!--end search-form__result -->
              </div>
              <!--end search-form -->
            </div>
            <div class="search-box__tags">
              <ul class="list-search-tags">
                <li class="item-tag">
                  <NuxtLink class="item-tag__link" to="/">Воспитательная работа</NuxtLink>
                </li>
                <li class="item-tag">
                  <NuxtLink class="item-tag__link" to="/">Государственная итоговая аттестация (9-11 кл)</NuxtLink>
                </li>
                <li class="item-tag">
                  <NuxtLink class="item-tag__link" to="/">Дошкольное образование</NuxtLink>
                </li>
                <li class="item-tag">
                  <NuxtLink class="item-tag__link" to="/"
                    >Дополнительное образование и внеурочная деятельность детей</NuxtLink
                  >
                </li>
                <li class="item-tag">
                  <NuxtLink class="item-tag__link" to="/">Духовно-нравственное воспитание, ОРКСЭ</NuxtLink>
                </li>
                <li class="item-tag last-item">
                  <NuxtLink class="item-tag__link tag-active" to="/">Духовно-нравственное воспитание, ОРКСЭ</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <!--end search-box-->
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
        <Carousel class="slider-big" :value="sliderMain.data" :num-visible="1" :num-scroll="1" :show-indicators="false">
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
      </div>
      <!--end all-->
    </div>
    <!--end lvl3 -->
    <div class="lvl4">
      <div class="all">
        <div class="main-title h2-title">Популярные курсы</div>
        <div class="popular-list">
          <div class="popular-item">
            <div class="popular-item-wrapper">
              <div class="popular-item__header">
                <div class="img"><img src="/img/populare1.png" alt="" /></div>
                <div class="right">
                  <ul class="info-list">
                    <li>
                      <div class="mini-info">
                        <div class="mini-info__ico">
                          <SvgIcon name="ic-clock" class="fnone ic16"></SvgIcon>
                        </div>
                        <div class="mini-info__text">32 часа</div>
                      </div>
                    </li>
                    <li>
                      <div class="mini-info">
                        <div class="mini-info__ico"><SvgIcon name="ic-tag" class="fnone ic16"></SvgIcon></div>
                        <div class="mini-info__text">6 450 ₽</div>
                      </div>
                    </li>
                    <li>
                      <div class="mini-info">
                        <div class="mini-info__ico"><SvgIcon name="ic-monitor" class="fnone ic16"></SvgIcon></div>
                        <div class="mini-info__text">Очно-заочная с ДОТ</div>
                      </div>
                    </li>
                    <li>
                      <div class="mini-info">
                        <div class="mini-info__ico">
                          <SvgIcon name="ic-calendar-check" class="fnone ic16"></SvgIcon>
                        </div>
                        <div class="mini-info__text">Старт: 1 сентября</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <!--end popular-item__header -->
              <div class="popular-item__content">
                <div class="small-label">
                  <div class="small-label__icon">
                    <SvgIcon name="barcode" class="fnone ic16"></SvgIcon>
                  </div>
                  04868-22/23-Б-ЗД
                </div>
                <div class="title">
                  <NuxtLink class="link-link" to="/">
                    Организация деятельности учащихся, ориентированная на обеспечение информационной безопасности в сети
                    интернет
                  </NuxtLink>
                </div>
                <div class="text">
                  <NuxtLink class="link-link" to="/"
                    >Дополнительное образование и внеурочная деятельность детей</NuxtLink
                  >
                </div>
              </div>
              <!--end popular-item__content -->
            </div>
          </div>
          <div class="popular-item">
            <div class="popular-item-wrapper">
              <div class="popular-item__header">
                <div class="img"><img src="/img/popuelare2.png" alt="" /></div>
                <div class="right">
                  <ul class="info-list">
                    <li>
                      <div class="mini-info">
                        <div class="mini-info__ico">
                          <SvgIcon name="ic-clock" class="fnone ic16"></SvgIcon>
                        </div>
                        <div class="mini-info__text">32 часа</div>
                      </div>
                    </li>
                    <li>
                      <div class="mini-info">
                        <div class="mini-info__ico"><SvgIcon name="ic-tag" class="fnone ic16"></SvgIcon></div>
                        <div class="mini-info__text">6 450 ₽</div>
                      </div>
                    </li>
                    <li>
                      <div class="mini-info">
                        <div class="mini-info__ico"><SvgIcon name="ic-monitor" class="fnone ic16"></SvgIcon></div>
                        <div class="mini-info__text">Очно-заочная с ДОТ</div>
                      </div>
                    </li>
                    <li>
                      <div class="mini-info">
                        <div class="mini-info__ico">
                          <SvgIcon name="ic-calendar-check" class="fnone ic16"></SvgIcon>
                        </div>
                        <div class="mini-info__text">Старт: 1 сентября</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <!--end popular-item__header -->
              <div class="popular-item__content">
                <div class="small-label">
                  <div class="small-label__icon">
                    <SvgIcon name="barcode" class="fnone ic16"></SvgIcon>
                  </div>
                  04868-22/23-Б-ЗД
                </div>
                <div class="title">
                  <NuxtLink class="link-link" to="/">
                    Организация деятельности учащихся, ориентированная на обеспечение информационной безопасности в сети
                    интернет
                  </NuxtLink>
                </div>
                <div class="text">
                  <NuxtLink class="link-link" to="/"
                    >Дополнительное образование и внеурочная деятельность детей</NuxtLink
                  >
                </div>
              </div>
              <!--end popular-item__content -->
            </div>
          </div>
        </div>
        <!--end populars-list -->
      </div>
      <!--end all-->
    </div>
    <!--end lvl4 -->
  </div>
</template>
