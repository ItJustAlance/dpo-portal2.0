<script lang="ts" setup>
import { onMounted } from 'vue'

import { useFiltersStore } from '~/stores/filters'

const filtersStore = useFiltersStore()

onMounted(async () => {
  await onFilterData()
})

const onFilterData = async () => {
  const result = await filtersStore.initFilters()
  console.log('onFilterData', result)
  if (result === 'success') {
    // нужно переделать для обновления в store
    filtersStore.onInitFilter(true)
    // initFilterData.value = true;
  }
}
</script>

<template>
  <div class="all">
    <div class="page-title h2-title">Экспертиза ДПП</div>
    <div class="b-container">
      <main class="content-body">
        <Tabs value="0">
          <TabList>
            <Tab value="0" as="div" class="tab-item">
              <div class="title-tab">
                Экспертиза дополнительных профессиональных программ (ДПП)
              </div>
            </Tab>
            <Tab value="1" as="div" class="tab-item">
              <div class="title-tab">
                Материалы заседаний Экспертного совета по ДПО работников
                образовательных организаций
              </div>
            </Tab>
            <Tab value="2">
              <div class="title-tab">
                Нормативные документы, регламентирующие ДПО
              </div>
            </Tab>
          </TabList>
          <TabPanels class="tabs-box">
            <TabPanel value="0">
              <Accordion value="0">
                <AccordionPanel value="0">
                  <AccordionHeader
                    >Порядок проведения экспертизы</AccordionHeader
                  >
                  <AccordionContent>
                    <p class="m-0">
                      Уважаемые коллеги!<br />
                      С 01.09.2023 прием заявок
                      <a href="#">на проведение экспертизы</a> программ
                      дополнительного профессионального образования
                      осуществляется через личный кабинет слушателя,
                      ответственного за работу с Порталом от образовательной
                      организации.<br />
                      Сроки подачи программ соответствуют плану заседаний
                      Экспертного совета и приема программ на экспертизу на
                      2023/2024 учебный год.Обращаем ваше внимание, что
                      количество программ, принимаемых на заседание Экспертного
                      совета, ограничено.В случае отклонения программы по
                      причинам недостоверности прилагаемых документов,
                      несоответствия протоколу допуска строка записи удаляется
                      из перечня поданных программ, место освобождается для
                      других заявок.
                    </p>
                  </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="1">
                  <AccordionHeader
                    >Рекомендации по проектированию ДПП</AccordionHeader
                  >
                  <AccordionContent>
                    <div class="docs-list --cols2">
                      <div class="item-doc --white">
                        <NuxtLink href="#" class="item-doc__wrapper">
                          <span class="b-icon"
                            ><SvgIcon
                              name="file-pdf"
                              class="fnone ic24"
                            ></SvgIcon
                          ></span>
                          <span class="b-name"
                            >Рекомендации по разработке дополнительных
                            профессиональных программ, включающих модуль с
                            электронными сценариями уроков</span
                          >
                        </NuxtLink>
                      </div>
                      <!--end item-doc -->
                      <div class="item-doc --white">
                        <NuxtLink href="#" class="item-doc__wrapper">
                          <span class="b-icon"
                            ><SvgIcon
                              name="file-pdf"
                              class="fnone ic24"
                            ></SvgIcon
                          ></span>
                          <span class="b-name"
                            >Рекомендации по обеспечению качества дополнительных
                            профессиональных программ</span
                          >
                        </NuxtLink>
                      </div>
                      <!--end item-doc -->
                    </div>
                  </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="2">
                  <AccordionHeader
                    >Форма заявки на проведение экспертизы</AccordionHeader
                  >
                  <AccordionContent>
                    <p class="m-0">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio. Nam libero tempore, cum soluta nobis
                      est eligendi optio cumque nihil impedit quo minus.
                    </p>
                  </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="3">
                  <AccordionHeader
                    >Требования к ДПП, формы документов для экспертизы
                    ДПП</AccordionHeader
                  >
                  <AccordionContent>
                    <p class="m-0">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio. Nam libero tempore, cum soluta nobis
                      est eligendi optio cumque nihil impedit quo minus.
                    </p>
                  </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="4">
                  <AccordionHeader>Эксперты</AccordionHeader>
                  <AccordionContent>
                    <p class="m-0">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio. Nam libero tempore, cum soluta nobis
                      est eligendi optio cumque nihil impedit quo minus.
                    </p>
                  </AccordionContent>
                </AccordionPanel>
                <AccordionPanel value="5">
                  <AccordionHeader
                    >План заседаний Экспертного совета и приема программ на
                    экспертизу на 2023/2024 учебный год</AccordionHeader
                  >
                  <AccordionContent>
                    <p class="m-0">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio. Nam libero tempore, cum soluta nobis
                      est eligendi optio cumque nihil impedit quo minus.
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
