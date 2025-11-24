import { ref, watch } from "vue";
import type { BannerImg } from "@/types/banner.ts";
import { getBannerApi } from "@/apis/home.ts";
import type { Ref } from "vue"; // 👈 修正：从 Vue 导入 Ref 类型

/**
 * 封装获取 Banner 轮播图数据的 Composable
 * @param distributionSiteSource - 接收一个响应式源（Prop），类型为 Ref<string | undefined>。
 */
export const useBanner = (distributionSiteSource: Ref<string | undefined>) => {
  // 修正：使用 Ref<T> 类型
  // 注意：此 Hook 假设调用方已使用 toRef 确保传入的是一个 Ref 对象。

  const bannerList = ref<BannerImg[]>([]);

  const getBanner = async (siteId: string | undefined) => {
    // 安全处理：如果 siteId 为空，使用默认值 '1'
    const finalId = siteId || '1';

    try {
      const res = await getBannerApi(finalId);
      bannerList.value = res.data.result;
    } catch (error) {
      console.error("Failed to fetch banner data:", error);
    }
  };

  // 使用 watch 替代 onMounted，并监听传入的参数
  watch(
    // 监听源：直接传入 Ref 对象，这是正确的用法
    distributionSiteSource,
    (newSiteId) => {
      // newSiteId 的类型被正确推断为 string | undefined
      getBanner(newSiteId);
    },
    // 立即执行一次，覆盖了 onMounted 的功能
    { immediate: true }
  );

  // onMounted 已经被 watch 替代，无需保留

  return { bannerList };
};
