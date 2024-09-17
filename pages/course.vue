<script lang="ts" setup>
import { ref } from "vue";
const breadcrumbList = ref([
  { label: "Курсы", route: "/" },
  {
    label: "Изучение основ трёхмерного моделирования и печати для использования в образовательном процессе",
  },
]);
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
        <div class="course-info-header">
          <div class="course-info__art">04868-22/23-Б-ЗД</div>
          <div class="course-info__title">
            <div class="h2-title">
              Изучение основ трёхмерного моделирования и печати для использования в образовательном процессе
            </div>
            <div class="b-btns">
              <a href="#programm-course" class="btn">Программа курса</a>
              <button class="btn">Записаться</button>
            </div>
          </div>
          <div class="course-info__img"></div>
        </div>
        <section class="section">
          <div class="course-info__about">
            <div class="b-item">
              <div class="b-label">ПРОДОЛЖИТЕЛЬНОСТЬ</div>
              <div class="b-text">32 часа</div>
            </div>
            <div class="b-item">
              <div class="b-label">ФИНАНСИРОВАНИЕ</div>
              <div class="b-text">6 450 ₽</div>
            </div>
            <div class="b-item">
              <div class="b-label">ФОРМА</div>
              <div class="b-text">Очно-заочная с ДОТ</div>
            </div>
            <div class="b-item">
              <div class="b-label">СТАРТ</div>
              <div class="b-text">1 сентября 2023</div>
            </div>
          </div>
          <!--end course-info__about-->
        </section>
        <section class="section">
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
      </main>
    </div>
  </div>
</template>
