<script lang="ts" setup>
import { ref } from "vue";

// const route = useRoute();
// const id = route.params.course;

const breadcrumbList = ref([
  { label: "Конкурсы", route: "/" },
  {
    label:
      "Конкурс на присуждение премий лучшим учителям за достижения в педагогической деятельности в городе Москве в 2023 году",
  },
]);
</script>

<template>
  <div class="all">
    <Breadcrumb :model="breadcrumbList">
      <template #item="{ item, props }">
        <NuxtLink v-if="item.route" v-slot="{ navigate }" :to="item.route" custom>
          <a class="bread-item" :href="item.route" v-bind="props.action" @click="navigate">
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
        <section class="section section-event-info">
          <div class="event-header">
            <div class="img"><img src="/img/competition.png" alt="" /></div>
            <div class="event-info">
              <h1 class="h1-title">
                Конкурс на присуждение премий лучшим учителям за достижения в педагогической деятельности в городе
                Москве в 2023 году
              </h1>
            </div>
            <!-- end event-info -->
          </div>
          <!-- end event-header -->
        </section>
        <section class="section-big">
          <div class="competition-progress">
            <div class="progress-scroll" style="width: 35%"></div>
            <div class="progress-list">
              <div class="progress-circ active">
                <div class="icon rocket"><SvgIcon name="rocket-launch" class="fnone ic24" /></div>
                <div class="date"><div class="txt">10.07.2023</div></div>
                <div class="text">
                  <div class="txt">
                    <div class="titl">Старт приема заявок</div>
                    118 заявок
                  </div>
                </div>
              </div>
              <!--end progress-circ -->
              <div class="progress-circ active">
                <div class="icon"><SvgIcon name="check-circle" class="fnone ic24" /></div>
                <div class="date"><div class="txt">18.07.2023</div></div>
                <div class="text">
                  <div class="txt">
                    <div class="titl">Проверка конкурсных материалов</div>
                    118 заявок
                  </div>
                </div>
              </div>
              <!--end progress-circ -->
              <div class="progress-circ">
                <div class="icon"><SvgIcon name="check-circle" class="fnone ic24" /></div>
                <div class="date"><div class="txt">30.07.2023</div></div>
                <div class="text">
                  <div class="txt">
                    <div class="titl">Проверка конкурсных материалов</div>
                  </div>
                </div>
              </div>
              <!--end progress-circ -->
              <div class="progress-circ">
                <div class="icon"><SvgIcon name="flag-checkered" class="fnone ic24" /></div>
                <div class="date"><div class="txt">31.07.2023</div></div>
                <div class="text">
                  <div class="txt">
                    <div class="titl">Итоги</div>
                  </div>
                </div>
              </div>
              <!--end progress-circ -->
            </div>
            <!--end progress-list -->
          </div>
          <!--end competition-progress -->
        </section>
        <section class="section-big">
          <div class="course-nav-box">
            <div class="course-nav__text article">
              <div class="competition-card">
                <div class="img"><img src="/img/org-img.png" alt="" /></div>
                <div class="text">ФГАОУ ВО «Национальный исследовательский технологический университет «МИСиС»</div>
              </div>
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
                <div class="title">Прием заявок</div>
                <ul class="course-nav__list">
                  <li class="course-nav__list-item">
                    <span class="course-nav__list-item-wrap">Учитель физики</span>
                  </li>
                </ul>
              </div>
              <div class="course-nav__menu-box">
                <div class="title">Для кого конкурс</div>
                <ul class="course-nav__list">
                  <li class="course-nav__list-item">
                    <span class="course-nav__list-item-wrap">Классные руководители</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--end course-nav -->
        </section>
        <section class="section-big">
          <h2 class="h2-title">Условия участия</h2>
          <div class="nums-list --cols3">
            <div class="item-num">
              <NuxtLink href="#" class="item-num__wrapper">
                <span class="b-num">01</span>
                <span class="b-name">Не старше 35 лет</span>
              </NuxtLink>
            </div>
            <!--end item-doc -->
            <div class="item-num">
              <NuxtLink href="#" class="item-num__wrapper">
                <span class="b-num">02</span>
                <span class="b-name">Только для дефектологов</span>
              </NuxtLink>
            </div>
            <!--end item-doc -->
            <div class="item-num">
              <NuxtLink href="#" class="item-num__wrapper">
                <span class="b-num">03</span>
                <span class="b-name">Опыт до 3-х лет</span>
              </NuxtLink>
            </div>
            <!--end item-doc -->
          </div>
        </section>

        <section class="section">
          <h2 class="h2-title section-title">Вас может заинтересовать</h2>
          <div class="event-list --cols4 --mb0">
            <div v-for="(item, index) in 4" :key="index" class="event-item --mini-img">
              <CompetentionBox url="a1" />
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
