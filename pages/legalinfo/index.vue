<script lang="ts" setup>
import { ref, computed } from 'vue';

interface SubItem {
  title: string;
  content: string;
}

interface MenuItem {
  title: string;
  content?: string;
  subItems?: SubItem[];
}

const activeIndex = ref<number | null>(0);
const activeSubIndex = ref<number | null>(0);
const menuItems = ref<MenuItem[]>([
  {
    title: 'Процесс передачи данных',
    subItems: [
      {
        title: 'Описание процесса передачи данных',
        content: 'Содержимое для описания процесса передачи данных...',
      },
    ],
  },
  {
    title: 'Контактная информация',
    content: 'Содержимое для контактной информации...',
  },
  {
    title: 'Способы оплаты обучения',
    content: 'Содержимое для способов оплаты обучения...',
  },
  {
    title: 'Описание сферы деятельности',
    content: 'Содержимое для описания сферы деятельности...',
    listPdf: [
      {
        link: '/link1',
        title:
          'Рекомендации по разработке дополнительных профессиональных программ, включающих модуль с электронными сценариями уроков',
        icon: 'pdf',
      },
      {
        link: '/link2',
        title: 'Рекомендпрограмм, нариями уроков',
        icon: 'pdf',
      },
      {
        link: '/link3',
        title: 'Рекомевключающих модуль с электронными сценариями уроков',
        icon: 'pdf',
      },
      {
        link: '/link4',
        title:
          'Рекомендации по разработке дополнительных профессиональных программ, включающих модуль с электронными сценариями уроков',
        icon: 'pdf',
      },
    ],
  },
  {
    title: 'Образовательный процесс',
    content: 'Содержимое для образовательного процесса...',
  },
  {
    title: 'Описание возврата услуги',
    subItems: [
      {
        title: 'Описание процесса возврата',
        content: 'Содержимое для описания возврата...',
      },
      {
        title: 'Описание условий возврата',
        content: 'Содержимое для условий возврата...',
      },
    ],
  },
  {
    title: 'Образцы доверенностей',
    content: 'Содержимое для образцов доверенностей...',
  },
]);

const listPdf = computed(() => {
  const activeItem = menuItems.value[activeIndex.value ?? -1];
  const activeSubItem = activeItem?.subItems?.[activeSubIndex.value ?? -1];

  return activeSubItem?.listPdf || activeItem?.listPdf || [];
});
</script>

<template>
  <div class="all">
    <div class="page-title h2-title">Правовая информация</div>
    <div class="b-container">
      <aside class="menu-aside">
        <MenuLegalInfo
          :menu-list="menuItems"
          @update:active-index="activeIndex = $event"
          @update:active-sub-index="activeSubIndex = $event"
        />
      </aside>

      <main class="content-body">
        <!-- Контент для выбранного пункта меню -->
        <div class="content-legal">
          <article v-if="activeIndex !== null" class="content-box">
            <h5 class="h5-title">
              {{ menuItems[activeIndex]?.subItems?.[activeSubIndex]?.title || menuItems[activeIndex]?.title }}
            </h5>
            <div class="b-text">
              <p>
                {{ menuItems[activeIndex]?.subItems?.[activeSubIndex]?.content || menuItems[activeIndex]?.content }}
              </p>
            </div>

            <div class="docs-list --list-small --cols2">
              <div v-for="item in listPdf" class="item-doc --white">
                <NuxtLink :href="item.link" class="item-doc__wrapper">
                  <span class="b-icon"><SvgIcon :name="`file-${item.icon}`" class="fnone ic24"></SvgIcon></span>
                  <span class="b-name">{{ item.title }}</span>
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  </div>
</template>
