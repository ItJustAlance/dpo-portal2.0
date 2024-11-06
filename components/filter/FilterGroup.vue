<template>
  <div class="box-filter">
    <div class="title">
      {{ title }}
    </div>
    <div class="title --mobile" @click="onShow">
      {{ title }}
      <SvgIcon name="menu-arr" class="ic16"></SvgIcon>
    </div>
    <div class="box-filter-body" :class="{ active: isShow }">
      <div v-if="searchable" class="box-filter__search">
        <div v-if="filters.length > 4" class="b-input">
          <input v-model="searchQuery" type="text" placeholder="Поиск" class="b-input__input" />
        </div>
      </div>
      <div class="filter-list">
        <div v-for="filter in displayedFilters" :key="filter.id" class="filter-item">
          <div v-if="filter.type !== 'slider'" class="b-checkbox">
            <Checkbox
              v-model="filter.value"
              :value="filter.value"
              :binary="true"
              :input-id="filter.id"
              :name="filter.name"
              @change="updateFilterData(filter.id, $event.target.checked)"
            />
            <label :for="filter.id">{{ filter.name }} {{ filter.id }}</label>
          </div>
        </div>
      </div>
      <div v-if="showToggle && filters.length > 4 && searchQuery === ''" class="row-toggle">
        <button class="btn btn--inline btn-toggle" @click="showAllFilters = !showAllFilters">
          <span class="btn-label">{{ showAllFilters ? 'Скрыть' : `Еще ${filters.length} направлений` }}</span>
          <SvgIcon name="caret-circle-down" class="fnone ic24"></SvgIcon>
        </button>
      </div>
      <div v-if="sliderData" class="filter-slider">
        <div class="filter-row">
          <div class="filter-col1">
            <div class="slider__slider">
              <Slider v-model="sliderDataResult" :min="0" :max="250" range />
            </div>
          </div>
        </div>
        <div class="filter-row">
          <div class="filter-col2">
            <div class="title-inp">От</div>
            <InputText v-model.number="sliderDataResult[0]" />
          </div>
          <div class="filter-col2">
            <div class="title-inp">До</div>
            <InputText v-model.number="sliderDataResult[1]" />
          </div>
        </div>
      </div>
    </div>

    <!--end filter-slider-->
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    filterName: {
      type: String,
      default: '',
    },
    filters: {
      type: Array,
      default: () => [],
    },
    searchable: {
      type: Boolean,
      default: false,
    },
    showToggle: {
      type: Boolean,
      default: false,
    },
    sliderData: {
      type: Boolean,
      default: false,
    },
    filterResultData: {
      type: Array,
      default: () => [],
    },
    showFull: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['update-filter-data', 'init-filter-update'],
  setup(props, { emit }) {
    const isShow = ref(false);
    const sliderDataResult = ref([2, 400]);
    const searchQuery = ref('');
    const showAllFilters = ref(false);
    const initFilterResultData = () => {
      console.log('props.filters', props.filters);
      props.filters.forEach((filter) => {
        if (filter.value) {
          emit('init-filter-update', filter);
        }
      });
      console.log('props.sliderData', props.sliderData);
      // передача данных слайдеру
      if (props.sliderData) {
        const sliderTo = props.filters.find((el) => el.pos === 'to');
        const sliderFrom = props.filters.find((el) => el.pos === 'from');
        console.log('sliderTo', sliderTo);
        sliderDataResult.value = [sliderTo.value, sliderFrom.value];
        console.log('sliderDataResult', sliderDataResult.value);
      } else {
        sliderDataResult.value = [2, 400]; // default value
      }
    };

    const filteredFilters = computed(() => {
      return props.filters.filter((filter) => filter.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
    });

    const displayedFilters = computed(() => {
      if (showAllFilters.value) {
        return filteredFilters.value;
      } else {
        return filteredFilters.value.slice(0, 4);
      }
    });

    onMounted(() => {
      initFilterResultData();
    });

    const updateFilterData = (id, value) => {
      const filter = props.filters.find((filter) => filter.id === id);
      if (filter) {
        filter.value = value;
        emit('update-filter-data', props.filterResultData, props.filterName, filter);
      }
    };

    const onShow = () => {
      console.log('onShow');
      isShow.value = !isShow.value;
    };

    watch(sliderDataResult, (newValue) => {
      const sliderTo = props.filters.find((el) => el.pos === 'to');
      const sliderFrom = props.filters.find((el) => el.pos === 'from');
      console.log('watch sliderTo', sliderTo, sliderFrom);
      // const sliderDataObject = {
      //   id: sliderTo?.id,
      //   name: sliderTo?.name,
      //   value: sliderTo?.value,
      // };
      if (props.sliderData) {
        updateFilterData(sliderTo.id, newValue[0]);
        updateFilterData(sliderFrom.id, newValue[1]);
      }
    });
    return {
      searchQuery,
      showAllFilters,
      displayedFilters,
      updateFilterData,
      sliderDataResult,
      isShow,
      onShow,
      // filterResultData, // Return filterResultData
    };
  },
};
</script>
