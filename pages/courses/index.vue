<script lang="ts" setup>
import { ref, onMounted } from 'vue';
// import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from 'pinia';
import { useFiltersStore } from '~/stores/filters';

// const currentUser = useAuthUser();

// const initFilterData = ref(false);
const selectedCity = ref();
const filterPopular = ref(false);
const filterNew = ref(false);
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
]);

const filtersStore = useFiltersStore();
const { initFilterData, showFilters } = storeToRefs(filtersStore); // make filters state reactive

// const { authenticated } = storeToRefs(useFiltersStore()); // make authenticated state reactive

onMounted(async () => {
  await onFilterData();
});

const onFilterData = async () => {
  const result = await filtersStore.initFilters();
  console.log('onFilterData', result);
  if (result === 'success') {
    // нужно переделать для обновления в store
    filtersStore.onInitFilter(true);
    // initFilterData.value = true;
  }
};

const onFilterShow = async (value) => {
  filtersStore.onShowFilter(value);
};
</script>

<template>
  <div class="all">
    <div class="page-title h2-title">Курсы для вас {{ initFilterData }}</div>
    <div class="b-container">
      <aside class="aside hidden-lg">
        <FilterComp v-if="initFilterData" />
      </aside>
      <main class="content-body">
        <section class="section">
          <SearchBox :is-more="true" title-tags="Специальность" :is-special="true" />
        </section>
        <section class="section">
          <ul class="search-list-tags filter-active-list">
            <li class="search-tag-item">
              <div class="search-tag-item__wrap">
                <div class="search-tag-item__title">Воспитатель</div>
                <div class="search-tag-item__del"><SvgIcon name="xcircle" class="ic12"></SvgIcon></div>
              </div>
            </li>
            <li class="search-tag-item">
              <div class="search-tag-item__wrap">
                <div class="search-tag-item__title">Стоимость: 120р –120 000р</div>
                <div class="search-tag-item__del">
                  <SvgIcon name="xcircle" class="fill-none ic12"></SvgIcon>
                </div>
              </div>
            </li>
            <li class="search-tag-item">
              <div class="search-tag-item__wrap">
                <div class="search-tag-item__title">Длительность: 168-320 часов</div>
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
        <section class="section">
          <div class="search-no-result">
            <div class="img">
              <img src="/img/file_searching.svg" alt="" />
            </div>
            <div class="text h5-title">По вашим параметрам поиска курсов не найдено. Попробуйте изменить фильтры</div>
          </div>
        </section>

        <div class="result-content">
          <div class="result-content__header">
            <div class="result-filters">
              <div class="result-filters__item --select">
                <Select
                  v-model="selectedCity"
                  :options="cities"
                  option-label="name"
                  placeholder="Все специальности"
                  class="select-filter-sort"
                >
                  <template #dropdownicon>
                    <!-- Используем любую иконку, например, FontAwesome -->
                    <SvgIcon name="caret-down" class="fnone ic24"></SvgIcon>
                  </template>
                </Select>
              </div>
              <!--end result-filter__item -->
              <div class="result-filters__item visible-lg">
                <button class="btn-filter btn-filter-show" @click="onFilterShow(true)">
                  <SvgIcon name="faders-horizontal" class="fnone ic24"></SvgIcon>
                </button>
              </div>
            </div>
            <!--end result-filters -->
            <div class="filter-list-first">
              <div class="b-checkbox">
                <Checkbox v-model="filterPopular" :binary="true" input-id="popular" name="filterPopular" />
                <label for="popular">Популярные</label>
              </div>
              <div class="b-checkbox">
                <Checkbox v-model="filterNew" :binary="true" input-id="filterNew" name="filterNew" />
                <label for="filterNew">Новые</label>
              </div>
            </div>
            <!--end filter-list-first -->
          </div>
          <div class="result-content__body">
            <div class="popular-list">
              <div class="popular-item">
                <CourseBox url="a1" />
              </div>
              <div class="popular-item">
                <CourseBox url="a22" />
              </div>
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
    <div v-if="showFilters" class="filter-mobile">
      <FilterMobile v-if="initFilterData" />
    </div>
    <!-- end filter-mobile-->
    <div class="filter-mobile --single">
      <!-- FilterMobileFull v-if="initFilterData" / -->
    </div>
    <!-- end filter-mobile-->
  </div>
  <!-- /.all -->
</template>
