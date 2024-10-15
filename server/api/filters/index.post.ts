import { getFilters } from "~~/server/models/filters";

export default defineEventHandler(async (event) => {


  const fetchFilters = await getFilters();
  return {data: fetchFilters, status: 'success'};
});
