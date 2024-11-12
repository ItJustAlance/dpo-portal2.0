<script lang="ts" setup>
import { ref, onMounted, defineEmits } from 'vue';
const emit = defineEmits(['update:activeIndex', 'update:activeSubIndex']);
const props = defineProps({
  menuList: {
    type: Array,
    required: true,
  },
});
const menuItems = ref([]);
const isShow = ref(false);
const activeIndex = ref<number | null>(0);
const activeSubIndex = ref<number | null>(0);
const toggleItem = (index: number) => {
  if (activeIndex.value === index) {
    return;
  }
  activeIndex.value = activeIndex.value === index ? null : index;
  activeSubIndex.value = activeIndex.value !== null && menuItems.value[activeIndex.value]?.subItems ? 0 : null;
  emit('update:activeIndex', activeIndex.value);
  emit('update:activeSubIndex', activeSubIndex.value);
};
const selectSubItem = (mainIndex: number, subIndex: number) => {
  activeIndex.value = mainIndex;
  activeSubIndex.value = subIndex;
  emit('update:activeIndex', activeIndex.value);
  emit('update:activeSubIndex', activeSubIndex.value);
};
onMounted(() => {
  menuItems.value = props.menuList;
});
</script>

<template>
  <div class="menu-legal-info">
    <div class="menu-box-toggle visible-lg">
      <button class="btn btn--border-inline btn--full" @click="isShow = !isShow">
        <span class="btn-label">Меню</span>
        <SvgIcon name="list" class="fnone ic24"></SvgIcon>
      </button>
    </div>
    <div class="menu-legal-info__wrapper" :class="{ open: isShow }">
      <div v-for="(item, index) in menuItems" :key="item.id" class="menu-item">
        <div class="menu-item__title" :class="{ active: activeIndex === index }" @click="toggleItem(index)">
          {{ item.title }}
          <SvgIcon
            v-if="item.subItems?.length"
            name="caret-down"
            class="fnone ic16 arr"
            :class="{ 'caret-up': activeIndex === index }"
          />
        </div>
        <!-- Подменю -->
        <ul v-if="activeIndex === index && item.subItems" class="submenu">
          <li
            v-for="(subItem, subIndex) in item.subItems"
            :key="subIndex"
            class="submenu__item"
            :class="{ 'active-sub': activeSubIndex === subIndex }"
            @click="selectSubItem(index, subIndex)"
          >
            {{ subItem.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!--end menu-legal-info -->
</template>
