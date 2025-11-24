/**
 * 接口名称: 商品信息 (goods)
 */
export interface Goods {
  /** 商品 ID */
  id: string;
  /** 商品名称 */
  name: string;
  /** 商品描述 */
  desc: string;
  /** 商品价格 (注意: 字符串类型，如 "1480.00") */
  price: string;
  /** 商品图片 URL */
  picture: string;
  /** 折扣信息 (示例数据中为 null) */
  discount: null;
  /** 订单数量/销量 */
  orderNum: number;
}

/**
 * 接口名称: 二级分类 (children)
 */
export interface SecondLevelCategory {
  /** 二级分类 id */
  id: string;
  /** 二级分类名字 */
  name: string;
  /** 二级分类图片 URL (示例数据中为 string) */
  picture: string | null;
  /** 二级分类父级分类 id (示例数据中为 null) */
  parentId: string | null;
  /** 二级分类父级分类名字 (示例数据中为 null) */
  parentName: string | null;
  /** 商品列表 */
  goods: Goods[];
  /** 分类集合 (示例数据中为 null) */
  categories: null;
  /** 推荐品牌 (示例数据中为 null) */
  brands: null;
  /** 销售属性 (示例数据中为 null) */
  saleProperties: null;
}

/**
 * 接口名称: 响应结果中的一级分类 (result)
 */
export interface FirstLevelCategory {
  /** 一级分类 id */
  id: string;
  /** 一级分类名字 */
  name: string;
  /** 一级分类图片 URL (示例数据中为 null) */
  picture: string | null;
  /** 下属二级分类数组 */
  children: SecondLevelCategory[];
}

/**
 * 接口名称: API 完整响应结构
 * @template T 泛型，表示 result 字段的具体数据类型
 */
export interface ApiResponse<T> {
  /** 业务状态码 (示例数据中为 "1") */
  code: string;
  /** 响应消息 (示例数据中为 "操作成功") */
  msg: string;
  /** 响应结果 */
  result: T;
}

// -------------------------------------------------------------
// 针对此特定业务的最终接口定义
// -------------------------------------------------------------

/**
 * 接口名称: 完整分类详情 API 响应
 */
export type CategoryDetailResponse = ApiResponse<FirstLevelCategory>;
