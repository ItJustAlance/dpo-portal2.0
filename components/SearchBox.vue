<template>
  <div v-click-out-side="hide" class="search-box">
    <div class="search-box__search">
      <div class="search-form">
        <div class="search-form__input">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Название курса, шифр, направление, специальность"
            class="search-input"
            @input="handleInput"
            @focus="handleInput"
          />
          <div v-if="searchQuery" class="search-clear">
            <SvgIcon name="xcircle" class="fnone ic24" @click="clearSearch"></SvgIcon>
          </div>
        </div>

        <!-- Отображаем результаты только если введено 3 и более символов -->
        <div v-if="showResults" class="search-form__result">
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
                          Организация деятельности учащихся, ориентированная на обеспечение информационной безопасности
                          в сети интернет
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
    </div>

    <!-- Отображаем специальные теги только при необходимости -->
    <div class="search-box__tags" :class="{ '--special': props.isSpecial }">
      <div v-if="props.titleTags" class="title h4-title">Специальность</div>
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
          <NuxtLink class="item-tag__link" to="/">Дополнительное образование и внеурочная деятельность детей</NuxtLink>
        </li>
        <li class="item-tag">
          <NuxtLink class="item-tag__link" to="/">Духовно-нравственное воспитание, ОРКСЭ</NuxtLink>
        </li>

        <li class="item-tag last-item">
          <NuxtLink class="item-tag__link tag-active" to="/">Все направления</NuxtLink>
        </li>
      </ul>
      <div v-if="props.isMore" class="search-box__more">
        <button class="btn btn--border-inline">
          <span class="btn-label">Еще 65 специальностей</span>
          <SvgIcon name="caret-circle-down" class="fnone ic24"></SvgIcon>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import clickOutSide from "@mahdikhashan/vue3-click-outside";

import { ref } from "vue";

interface Props {
  isMore: boolean;
  isSpecial?: boolean;
  titleTags: string;
}

const props = withDefaults(defineProps<Props>(), {
  isMore: false,
  isSpecial: false,
  titleTags: null,
});

const vClickOutSide = clickOutSide;

// Реактивная переменная для хранения текста поиска
const searchQuery = ref("");

// Показывать результаты только при вводе 3+ символов
const showResults = ref(false);

const hide = () => {
  showResults.value = false;
};

// Обработчик ввода
const handleInput = () => {
  // Показывать результаты только если введено 3 и более символов
  showResults.value = searchQuery.value.length >= 3;
};

// Очистка поиска
const clearSearch = () => {
  searchQuery.value = "";
  showResults.value = false;
};
</script>

<style scoped>
/* Добавьте необходимые стили для вашего компонента */
</style>
