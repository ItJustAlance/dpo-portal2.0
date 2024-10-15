import type { Filters } from "~~/types";

// Fake users data
const filters: Filters[] = [
  {
    title: "Дата",
    name: "dataFilters",
    filters: [
      { id: "fzxc1", type: "checkbox", name: "Популярные", value: false },
      { id: "fzxcd2", type: "checkbox", name: "Новые", value: false },
    ],
  },
  {
    title: "Популярные",
    name: "popularFilters",
    filters: [
      { id: "f1", type: "checkbox", name: "Популярные", value: false },
      { id: "f2", type: "checkbox", name: "Новые", value: false },
    ],
  },
  {
    title: "Направления",
    name: "directionFilters",
    filters: [
      { id: "f223", type: "checkbox", name: "Воспитательная работа", value: false },
      { id: "f224", type: "checkbox", name: "Государственная итоговая аттестация (9 и 11 кл.)", value: true },
      { id: "f225", type: "checkbox", name: "Математика", value: false },
      { id: "f226", type: "checkbox", name: "Русский язык", value: false },
      { id: "f227", type: "checkbox", name: "Литература", value: false },
      { id: "f228", type: "checkbox", name: "История", value: false },
      { id: "f229", type: "checkbox", name: "Обществознание", value: false },
      { id: "f230", type: "checkbox", name: "Физика", value: false },
      { id: "f231", type: "checkbox", name: "Химия", value: false },
      { id: "f232", type: "checkbox", name: "Биология", value: false },
      { id: "f233", type: "checkbox", name: "География", value: false },
    ],
  },
  {
    title: "Стоимость",
    name: "costFilters",
    sliderData: true,
    filters: [
      { id: "f116", type: "checkbox", name: "Бюджетный", value: false },
      { id: "f117", type: "checkbox", name: "Городская субсидия", value: false },
      { id: "fafda1", type: "slider", pos: "to", name: "от", value: 20 },
      { id: "fafda2", type: "slider", pos: "from", name: "от", value: 40 },
    ],
  },
  {
    title: "Длительность, часов",
    name: "durationFilters",
    filters: [
      { id: "d1", type: "checkbox", name: "1 час", value: false },
      { id: "d2", type: "checkbox", name: "2 часа", value: false },
      { id: "d3", type: "checkbox", name: "3 часа", value: false },
      { id: "d4", type: "checkbox", name: "4 часа", value: false },
      { id: "d5", type: "checkbox", name: "5 часов", value: false },
      { id: "d6", type: "checkbox", name: "6 часов", value: false },
      { id: "d7", type: "checkbox", name: "7 часов", value: false },
      { id: "d8", type: "checkbox", name: "8 часов", value: false },
      { id: "d9", type: "checkbox", name: "9 часов", value: false },
      { id: "d10", type: "checkbox", name: "10 часов", value: false },
    ],
  },
  {
    title: "Форма обучения",
    name: "educationFormFilters",
    filters: [
      { id: "ef1", type: "checkbox", name: "Очная", value: false },
      { id: "ef2", type: "checkbox", name: "Заочная", value: false },
      { id: "ef3", type: "checkbox", name: "Дистанционная", value: false },
      { id: "ef4", type: "checkbox", name: "Очно-заочная", value: false },
      { id: "ef5", type: "checkbox", name: "Семейное образование", value: false },
      { id: "ef6", type: "checkbox", name: "Индивидуальное обучение", value: false },
      { id: "ef7", type: "checkbox", name: "Групповое обучение", value: false },
      { id: "ef8", type: "checkbox", name: "Колледж", value: false },
      { id: "ef9", type: "checkbox", name: "Университет", value: false },
      { id: "ef10", type: "checkbox", name: "Другое", value: false },
    ],
  },
  {
    title: "Организатор",
    name: "organizerFilters",
    filters: [
      { id: "o1", type: "checkbox", name: "Учебное заведение", value: false },
      { id: "o2", type: "checkbox", name: "Тренинг-центр", value: false },
      { id: "o3", type: "checkbox", name: "Курсы", value: false },
      { id: "o4", type: "checkbox", name: "Консалтинговая компания", value: false },
      { id: "o5", type: "checkbox", name: "Бизнес-школа", value: false },
      { id: "o6", type: "checkbox", name: "Онлайн-платформа", value: false },
      { id: "o7", type: "checkbox", name: "Общественная организация", value: false },
      { id: "o8", type: "checkbox", name: "Частное лицо", value: false },
      { id: "o9", type: "checkbox", name: "Государственная организация", value: false },
      { id: "o10", type: "checkbox", name: "Другое", value: false },
    ],
  },
];

export function getFilters() {
  return filters;
}
