<script lang="ts" setup>
import { ref } from "vue";

// const currentUser = useAuthUser();

const selectedCity = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);
</script>

<template>
  <div class="all">
    <div class="page-title h2-title">Курсы для вас</div>
    <div class="b-container">
      <aside class="aside">
        <FilterComp />
      </aside>
      <main class="content-body">
        <section class="section">
          <SearchBox :is-more="true" title-tags="Специальность" :is-special="true" />
        </section>
        <section class="section">
          <div class="search-no-result">
            <div class="img">
              <img src="/img/file_searching.svg" alt="" />
            </div>
            <div class="text h5-title">По вашим параметрам поиска курсов не найдено. Попробуйте изменить фильтры</div>
          </div>
        </section>
        <section class="section">
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
        </section>
        <section class="section">
          <div class="b-row-center --align-center">
            <button class="btn btn--second">
              <span class="btn-label">Сбросить все фильтры</span>
              <SvgIcon name="xcircle" class="fnone ic24"></SvgIcon>
            </button>
          </div>
        </section>

        <div class="result-content">
          <div class="result-content__header">
            <div class="result-filters">
              <div class="result-filter__item">
                <Select
                  v-model="selectedCity"
                  :options="cities"
                  option-label="name"
                  placeholder="Select a City"
                  class="select-filter-sort"
                >
                  <template #dropdownicon>
                    <!-- Используем любую иконку, например, FontAwesome -->
                    <SvgIcon name="caret-down" class="fnone ic24"></SvgIcon>
                  </template>
                </Select>
              </div>
              <!--end result-filter__item -->
            </div>
            <!--end result-filters -->
          </div>
          <div class="result-content__body">
            <div class="popular-list">
              <CourseBox />
              <CourseBox />
            </div>
            <!--end populars-list -->
            <div class="more-load --align-center">
              <button class="btn btn--second">
                <span class="btn-label">Еще 10 курсов из 150</span>
                <SvgIcon name="caret-circle-down" class="fnone ic24"></SvgIcon>
              </button>
            </div>
          </div>
        </div>
        <!--end result-content -->
      </main>
      <!--end content-body -->
    </div>
  </div>
  <!-- /.all -->
</template>
