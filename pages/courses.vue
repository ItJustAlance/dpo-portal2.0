<script lang="ts" setup>
import { ref } from "vue";

// const currentUser = useAuthUser();

const filterData = ref([]);
const sliderValue = ref([20, 40]);

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
        <div class="aside-filters">
          <div class="box-filter">
            <div class="filter-list">
              <div class="filter-item">
                <div class="b-checkbox">
                  <Checkbox v-model="filterData" class="" input-id="f1" name="popular" value="true" />
                  <label for="f1">Популярные</label>
                </div>
                <!--end b-checkbox -->
              </div>
              <!--end filter-item-->
              <div class="filter-item">
                <div class="b-checkbox">
                  <Checkbox v-model="filterData" class="" input-id="f2" name="popular" value="true" />
                  <label for="f1">Новые</label>
                </div>
                <!--end b-checkbox -->
              </div>
              <!--end filter-item-->
            </div>
            <!--end filter-list-->
          </div>
          <!--end box-filter -->
          <div class="box-filter">
            <div class="title">Направления</div>
            <div class="box-filter__search">
              <div class="b-input">
                <input type="text" placeholder="Поиск" class="b-input__input" />
              </div>
              <!--end box-filter__input-->
              <div class="filter-list">
                <div class="filter-item">
                  <div class="b-checkbox">
                    <Checkbox v-model="filterData" class="" input-id="f3" name="popular" value="true" />
                    <label for="f3">Воспитательная работа</label>
                  </div>
                  <!--end b-checkbox -->
                </div>
                <!--end filter-item-->
                <div class="filter-item">
                  <div class="b-checkbox">
                    <Checkbox v-model="filterData" class="" input-id="f4" name="popular" value="true" />
                    <label for="f4">Государственная итоговая аттестация (9 и 11 кл.)</label>
                  </div>
                  <!--end b-checkbox -->
                </div>
                <!--end filter-item-->
              </div>
              <!--end filter-list-->
              <div class="row-toggle">
                <button class="btn btn--inline btn-toggle">
                  <span class="btn-label">Еще 47 направлений</span>
                  <SvgIcon name="caret-circle-down" class="fnone ic24"></SvgIcon>
                </button>
              </div>
            </div>
            <!--end box-filter__search -->
          </div>
          <!--end box-filter -->
          <div class="box-filter">
            <div class="title">Стоимость</div>
            <div class="filter-list">
              <div class="filter-item">
                <div class="b-checkbox">
                  <Checkbox v-model="filterData" class="" input-id="f6" name="popular" value="true" />
                  <label for="f6">Бюджетный</label>
                </div>
                <!--end b-checkbox -->
              </div>
              <!--end filter-item-->
              <div class="filter-item">
                <div class="b-checkbox">
                  <Checkbox v-model="filterData" class="" input-id="f7" name="popular" value="true" />
                  <label for="f7">Городская субсидия</label>
                </div>
                <!--end b-checkbox -->
              </div>
              <!--end filter-item-->
              <div class="filter-item">
                <div class="b-checkbox">
                  <Checkbox v-model="filterData" class="" input-id="f8" name="popular" value="true" />
                  <label for="f8">Платный</label>
                </div>
                <!--end b-checkbox -->
              </div>
              <!--end filter-item-->
            </div>
            <!--end filter-list-->
            <div class="filter-slider">
              <div class="filter-row">
                <div class="filter-col1">
                  <div class="slider__slider">
                    <Slider v-model="sliderValue" :min="0" :max="250" range />
                  </div>
                </div>
              </div>
              <div class="filter-row">
                <div class="filter-col2">
                  <div class="title-inp">От</div>
                  <InputText v-model.number="sliderValue[0]" />
                </div>
                <div class="filter-col2">
                  <div class="title-inp">До</div>
                  <InputText v-model.number="sliderValue[1]" />
                </div>
              </div>
            </div>
            <!--end filter-slider-->
          </div>
          <!--end box-filter -->
          <div class="box-filter">
            <div class="title">Длительность, часов</div>
            <div class="filter-list">
              <div class="filter-item">
                <div class="b-checkbox">
                  <Checkbox v-model="filterData" class="" input-id="f9" name="popular" value="true" />
                  <label for="f9">16-32</label>
                </div>
                <!--end b-checkbox -->
              </div>
              <!--end filter-item-->
              <div class="filter-item">
                <div class="b-checkbox">
                  <Checkbox v-model="filterData" class="" input-id="f10" name="popular" value="true" />
                  <label for="f10">32-76</label>
                </div>
                <!--end b-checkbox -->
              </div>
              <!--end filter-item-->
              <div class="filter-item">
                <div class="b-checkbox">
                  <Checkbox v-model="filterData" class="" input-id="f11" name="popular" value="true" />
                  <label for="f11">76-168</label>
                </div>
                <!--end b-checkbox -->
              </div>
              <!--end filter-item-->
            </div>
            <!--end filter-list-->
          </div>
          <!--end box-filter -->
          <div class="box-filter">
            <div class="title">Форма обучения</div>
            <div class="filter-list">
              <div class="filter-item">
                <div class="b-checkbox">
                  <Checkbox v-model="filterData" class="" input-id="f12" name="popular" value="true" />
                  <label for="f12">Очная</label>
                </div>
                <!--end b-checkbox -->
              </div>
              <!--end filter-item-->
              <div class="filter-item">
                <div class="b-checkbox">
                  <Checkbox v-model="filterData" class="" input-id="f13" name="popular" value="true" />
                  <label for="f13">Дистанционная</label>
                </div>
                <!--end b-checkbox -->
              </div>
              <!--end filter-item-->
              <div class="filter-item">
                <div class="b-checkbox">
                  <Checkbox v-model="filterData" class="" input-id="f14" name="popular" value="true" />
                  <label for="f14">Очно-заочная</label>
                </div>
                <!--end b-checkbox -->
              </div>
              <!--end filter-item-->
            </div>
            <!--end filter-list-->
          </div>
          <!--end box-filter -->
          <div class="box-filter">
            <div class="title">Организатор</div>
            <div class="box-filter__search">
              <div class="b-input">
                <input type="text" placeholder="Поиск" class="b-input__input" />
              </div>
              <!--end box-filter__input-->
              <div class="filter-list">
                <div class="filter-item">
                  <div class="b-checkbox">
                    <Checkbox v-model="filterData" class="" input-id="f15" name="popular" value="true" />
                    <label for="f15">ГБУ «Городской психолого-педагогический центр» (ГППЦ)</label>
                  </div>
                  <!--end b-checkbox -->
                </div>
                <!--end filter-item-->
                <div class="filter-item">
                  <div class="b-checkbox">
                    <Checkbox v-model="filterData" class="" input-id="f16" name="popular" value="true" />
                    <label for="f16">ГАОУ ДПО «Московский центр качества образования» (МЦКО)</label>
                  </div>
                  <!--end b-checkbox -->
                </div>
                <!--end filter-item-->
              </div>
              <!--end filter-list-->
              <div class="row-toggle">
                <button class="btn btn--inline btn-toggle">
                  <span class="btn-label">Еще 47 направлений</span>
                  <SvgIcon name="caret-circle-down" class="fnone ic24"></SvgIcon>
                </button>
              </div>
            </div>
            <!--end box-filter__search -->
          </div>
          <!--end box-filter -->
          <!-- div class="box-filter">
          <div class="title"></div>
        
        </div> --><!--end box-filter -->
        </div>
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
