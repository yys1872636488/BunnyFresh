import {watch, ref} from "vue";
import type {FirstLevelCategory} from "@/types/topCategory.ts";
import {getTopCategoryApi} from "@/apis/category.ts";
import {useRoute} from "vue-router";

export const useCategory = () => {
  const route = useRoute();
  const categoryData = ref<FirstLevelCategory | null>(null)
  const getCategory = async () => {
    const res = await getTopCategoryApi(route.params.id as string)
    categoryData.value = res.data.result
  }

  watch(() => route.params.id as string, () => {
    if (route.name === 'category') {
      getCategory();
    }
  }, {immediate: true})
  return {categoryData}
}
