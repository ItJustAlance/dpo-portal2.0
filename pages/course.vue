<script lang="ts" setup>
import { ref } from "vue";
const breadcrumbList = ref([
  { label: "Курсы", route: "/" },
  {
    label: "Изучение основ трёхмерного моделирования и печати для использования в образовательном процессе",
  },
]);

const sliderTeach = reactive({
  data: [
    { id: 1, url: "/img/teach1.png", title: "Мацаль И.И", text: "гл.инженер ООО Экзамен-Технолаб" },
    { id: 2, url: "/img/teach2.png", title: "Мацаль И.И", text: "гл.инженер ООО Экзамен-Технолаб" },
    { id: 3, url: "/img/teach-default.png", title: "Мацаль И.И", text: "гл.инженер ООО Экзамен-Технолаб" },
    { id: 4, url: "/img/teach2.png", title: "Мацаль И.И", text: "гл.инженер ООО Экзамен-Технолаб" },
    { id: 5, url: "/img/teach-default.png", title: "Мацаль И.И", text: "гл.инженер ООО Экзамен-Технолаб" },
    { id: 6, url: "/img/teach1.png", title: "Мацаль И.И", text: "гл.инженер ООО Экзамен-Технолаб" },
  ],
  options: [
    {
      breakpoint: "1200px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "1023px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "560px",
      numVisible: 2,
      numScroll: 1,
    },
  ],
});
</script>

<template>
  <div class="all">
    <Breadcrumb :model="breadcrumbList">
      <template #item="{ item, props }">
        <NuxtLink v-if="item.route" v-slot="{ href, navigate }" class="bread-item" :to="item.route" custom>
          <a :href="href" v-bind="props.action" @click="navigate">
            <span>{{ item.label }}</span>
          </a>
        </NuxtLink>
        <span v-else class="bread-item">
          <span>{{ item.label }}</span>
        </span>
      </template>
      <template #separator> <span class="f-700">/</span> </template>
    </Breadcrumb>
    <div class="b-container">
      <main class="content-body">
        <div class="section-big course-info-header">
          <div class="course-info-header__content">
            <div class="course-info__art">
              <SvgIcon name="barcode" class="fnone ic12"></SvgIcon>
              04868-22/23-Б-ЗД
            </div>
            <div class="course-info__title">
              <div class="h2-title">
                Изучение основ трёхмерного моделирования и печати для использования в образовательном процессе
              </div>
              <div class="b-btns">
                <a href="#programm-course" class="btn btn--second">Программа курса</a>
                <button class="btn">Записаться</button>
              </div>
            </div>
          </div>

          <div class="course-info-header__img"></div>
        </div>
        <section class="section-big">
          <div class="course-info__about">
            <div class="b-item">
              <div class="b-label">ПРОДОЛЖИТЕЛЬНОСТЬ</div>
              <div class="b-text">
                <SvgIcon name="ic-clock" class="fnone ic12"></SvgIcon>
                32 часа
              </div>
            </div>
            <div class="b-item">
              <div class="b-label">ФИНАНСИРОВАНИЕ</div>
              <div class="b-text">
                <SvgIcon name="ic-tag" class="fnone ic12"></SvgIcon>
                6 450 ₽
              </div>
            </div>
            <div class="b-item">
              <div class="b-label">ФОРМА</div>
              <div class="b-text">
                <SvgIcon name="ic-monitor" class="fnone ic12"></SvgIcon>
                Очно-заочная с ДОТ
              </div>
            </div>
            <div class="b-item">
              <div class="b-label">СТАРТ</div>
              <div class="b-text">
                <SvgIcon name="calendar-check" class="fnone ic12"></SvgIcon>
                1 сентября 2023
              </div>
            </div>
          </div>
          <!--end course-info__about-->
        </section>
        <section class="section-big">
          <div class="course-nav-box">
            <div class="course-nav__text article">
              <p>
                Курс направлен на совершенствование профессиональных компетенций обучающихся в области изучения основ
                трёхмерного моделирования и печати для использования в образовательном процессе. В программу входят
                следующие разделы:
              </p>
              <p>
                Курс направлен на совершенствование профессиональных компетенций обучающихся в области изучения основ
                трёхмерного моделирования и печати для использования в образовательном процессе. В программу входят
                следующие разделы:
              </p>
              <p>В программу входят следующие разделы:</p>
              <ol>
                <li>Моделирование конструкций с использованием технологии SnapCad.</li>
                <li>
                  Знакомство с современными научными знаниями по созданию деталей и сборок в среде моделирования
                  Autodesk Inventor
                </li>
                <li>Создание сборки в программе Autodesk Inventor</li>
                <li>Настройка вывода трёхмерных объектов в формат для трёхмерной печати</li>
              </ol>
              <p>
                Итоговая аттестация – зачет на основании совокупности выполненных работ, результатов тестирования и
                итоговой практической работы.
              </p>
            </div>
            <div class="course-nav__menu">
              <div class="course-nav__menu-box">
                <div class="title">Направление</div>
                <ul class="course-nav__list">
                  <li class="course-nav__list-item">
                    <span class="course-nav__list-item-wrap">Учитель физики</span>
                  </li>
                </ul>
              </div>
              <div class="course-nav__menu-box">
                <div class="title">Направление</div>
                <ul class="course-nav__list">
                  <li class="course-nav__list-item">
                    <span class="course-nav__list-item-wrap">Учитель физики</span>
                  </li>
                  <li class="course-nav__list-item">
                    <span class="course-nav__list-item-wrap">Педагог дополнительного образования</span>
                  </li>
                  <li class="course-nav__list-item">
                    <span class="course-nav__list-item-wrap">Учитель информатики</span>
                  </li>
                  <li class="course-nav__list-item">
                    <span class="course-nav__list-item-wrap">Учитель технологии</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--end course-nav -->
        </section>
        <section class="section-big">
          <h2 class="h2-title section-title">Преподаватели</h2>
          <Carousel
            class="slider-teacher"
            :value="sliderTeach.data"
            :num-visible="4"
            :num-scroll="1"
            :show-indicators="false"
            :responsive-options="sliderTeach.options"
          >
            <template #item="slotProps">
              <div class="slide-teach">
                <div class="img"><img :src="slotProps.data.url" :alt="slotProps.data.id" class="w-full rounded" /></div>
                <div class="title">{{ slotProps.data.title }}</div>
                <div class="text">{{ slotProps.data.text }}</div>
              </div>
            </template>
            <template #previcon>
              <SvgIcon name="ic-arrow-circle-left" class="fnone ic48"></SvgIcon>
            </template>
            <template #nexticon>
              <SvgIcon name="ic-arrow-circle-right" class="fnone ic48"></SvgIcon>
            </template>
          </Carousel>
        </section>
        <section class="section-big --align-center">
          <NuxtLink class="btn">Записаться на курс</NuxtLink>
        </section>
        <section class="section-big">
          <h2 class="h2-title section-title">Программа курса</h2>
          <div class="course-program-list">
            <div class="b-item">
              <div class="b-item__wrapper">
                <div class="num">01</div>
                <div class="text">
                  Моделирование конструкций с использованием технологии SnapCad Моделирование конструкций с
                  использованием технологии SnapCad
                </div>
              </div>
            </div>
            <div class="b-item">
              <div class="b-item__wrapper">
                <div class="num">02</div>
                <div class="text">
                  Знакомство с современными научными знаниями по созданию деталей и сборок в среде моделирования
                  Autodesk Inventor
                </div>
              </div>
            </div>
            <div class="b-item">
              <div class="b-item__wrapper">
                <div class="num">03</div>
                <div class="text">Создание сборки в программе Autodesk Inventor</div>
              </div>
            </div>
            <div class="b-item">
              <div class="b-item__wrapper">
                <div class="num">04</div>
                <div class="text">Настройка вывода трёхмерных объектов в формат для трёхмерной печати</div>
              </div>
            </div>
            <div class="b-item">
              <div class="b-item__wrapper">
                <div class="num">05</div>
                <div class="text">Обучение 3 D моделированию и печати</div>
              </div>
            </div>
            <div class="b-item">
              <div class="b-item__wrapper">
                <div class="num">06</div>
                <div class="text">Итоговая аттестация</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
