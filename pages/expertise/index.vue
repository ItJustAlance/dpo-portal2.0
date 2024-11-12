<script lang="ts" setup>
import { ref, onMounted } from 'vue';

import { useFiltersStore } from '~/stores/filters';

// const filtersStore = useFiltersStore();

onMounted(async () => {
  // await onFilterData();
});

const tabIndex = ref('0');

const tabList = ref([
  { index: '0', name: 'Экспертиза дополнительных профессиональных программ (ДПП)' },
  { index: '1', name: 'Материалы заседаний Экспертного совета по ДПО работников образовательных организаций' },
  { index: '2', name: 'Нормативные документы, регламентирующие ДПО' },

]);


</script>

<template>
  <div class="all">
    <div class="page-title h2-title">Экспертиза ДПП</div>
    <div class="b-container">
      <main class="content-body">
        <div class="tab-select visible-lg">
          <Select v-model="tabIndex" :options="tabList" optionValue="index" optionLabel="name" />
        </div>
        <Tabs :value="tabIndex">
          <TabList class="hidden-lg">
            <Tab :value="item.index" as="div" class="tab-item" v-for="item in tabList" :key="item.index">
              <div class="title-tab">{{ item.name }}</div>
            </Tab>
          </TabList>
          <TabPanels class="tabs-box">
            <TabPanel value="0">
              <Accordion expand-icon="arr-expand-icon" collapse-icon="arr-collapse-icon">
                <AccordionPanel value="0">
                  <AccordionHeader><span class="tab-label">Порядок проведения экспертизы</span></AccordionHeader>
                  <AccordionContent>
                    <p class="m-0">
                      Уважаемые коллеги!<br />
                      С 01.09.2023 прием заявок
                      <a href="#">на проведение экспертизы</a> программ дополнительного профессионального образования
                      осуществляется через личный кабинет слушателя, ответственного за работу с Порталом от
                      образовательной организации.<br />
                      Сроки подачи программ соответствуют плану заседаний Экспертного совета и приема программ на
                      экспертизу на 2023/2024 учебный год.Обращаем ваше внимание, что количество программ, принимаемых
                      на заседание Экспертного совета, ограничено.В случае отклонения программы по причинам
                      недостоверности прилагаемых документов, несоответствия протоколу допуска строка записи удаляется
                      из перечня поданных программ, место освобождается для других заявок.
                    </p>
                  </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="1">
                  <AccordionHeader><span class="tab-label">Рекомендации по проектированию ДПП</span></AccordionHeader>
                  <AccordionContent>
                    <div class="docs-list --cols2">
                      <div class="item-doc --white">
                        <NuxtLink href="#" class="item-doc__wrapper">
                          <span class="b-icon"><SvgIcon name="file-pdf" class="fnone ic24"></SvgIcon></span>
                          <span class="b-name"
                            >Рекомендации по разработке дополнительных профессиональных программ, включающих модуль с
                            электронными сценариями уроков</span
                          >
                        </NuxtLink>
                      </div>
                      <!--end item-doc -->
                      <div class="item-doc --white">
                        <NuxtLink href="#" class="item-doc__wrapper">
                          <span class="b-icon"><SvgIcon name="file-pdf" class="fnone ic24"></SvgIcon></span>
                          <span class="b-name"
                            >Рекомендации по обеспечению качества дополнительных профессиональных программ</span
                          >
                        </NuxtLink>
                      </div>
                      <!--end item-doc -->
                    </div>
                  </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="2">
                  <AccordionHeader><span class="tab-label">Форма заявки на проведение экспертизы</span></AccordionHeader>
                  <AccordionContent>
                    <p class="m-0">
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                      deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                      provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                      fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta
                      nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                  </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="3">
                  <AccordionHeader><span class="tab-label">Требования к ДПП, формы документов для экспертизы ДПП</span></AccordionHeader>
                  <AccordionContent>
                    <p class="m-0">
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                      deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                      provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                      fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta
                      nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                  </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="4">
                  <AccordionHeader><span class="tab-label">Эксперты</span></AccordionHeader>
                  <AccordionContent>
                    <p class="m-0">
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                      deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                      provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                      fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta
                      nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                  </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="5">
                  <AccordionHeader
                    ><span class="tab-label">План заседаний Экспертного совета и приема программ на экспертизу на 2023/2024 учебный год</span>
                  </AccordionHeader>
                  <AccordionContent>
                    <p class="m-0">
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                      deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                      provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                      fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta
                      nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>
            </TabPanel>
            <TabPanel value="1"> 222 </TabPanel>
            <TabPanel value="2"> 333 </TabPanel>
          </TabPanels>
        </Tabs>
      </main>
      <!--end content-body -->
    </div>
  </div>
  <!-- /.all -->
</template>
