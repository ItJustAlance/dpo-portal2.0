<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth";
import { useFiltersStore } from "~/stores/filters";

// const currentUser = useAuthUser();

// const initFilterData = ref(false);
const selectedCity = ref();
const filterPopular = ref(false);
const filterNew = ref(false);
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);

const filtersStore = useFiltersStore();
const { initFilterData, showFilters } = storeToRefs(filtersStore); // make filters state reactive

// const { authenticated } = storeToRefs(useFiltersStore()); // make authenticated state reactive

onMounted(async () => {
  await onFilterData();
});

const onFilterData = async () => {
  const result = await filtersStore.initFilters();
  console.log("onFilterData", result);
  if (result == "success") {
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
    <div class="page-title h2-title">Новости</div>
    <div class="b-container">
      <main class="content-body">
        <div class="result-content">
          <div class="result-content__header">
            <div class="result-filters">
              <div class="result-filters__left --w-md-50">
                <div class="result-filters__item --w-100 --search">
                  <SearchNews placeholder="Поиск новости" />
                </div>
              </div>
              <div class="result-filters__right --w-md-50">
                <div class="result-filters__item">
                  <Select
                    v-model="selectedCity"
                    :options="cities"
                    option-label="name"
                    placeholder="Дата"
                    class="select-filter"
                  >
                    <template #dropdownicon>
                      <!-- Используем любую иконку, например, FontAwesome -->
                      <SvgIcon name="caret-down" class="fnone ic24"></SvgIcon>
                    </template>
                  </Select>
                </div>
                <!--end result-filter__item -->
                <div class="result-filters__item --select">
                  <Select
                    v-model="selectedCity"
                    :options="cities"
                    option-label="name"
                    placeholder="Тема"
                    class="select-filter"
                  >
                    <template #dropdownicon>
                      <!-- Используем любую иконку, например, FontAwesome -->
                      <SvgIcon name="caret-down" class="fnone ic24"></SvgIcon>
                    </template>
                  </Select>
                </div>
                <!--end result-filter__item -->
              </div>

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
            <div class="news-list">
              <NewsBox v-for="item in 10" />
            </div>
            <!--end news-list -->
            <div class="more-load --align-center">
              <button class="btn btn--second">
                <span class="btn-label">Еще 12 новостей</span>
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
