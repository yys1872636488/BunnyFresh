/**
 * API 通用响应接口
 * 用于包裹业务数据
 */
export interface GoodsDetailResponse {
  /** 业务状态码，例如 "1" 表示成功 */
  code: string
  /** 响应消息，例如 "操作成功" */
  msg: string
  /** 核心业务数据对象 */
  result: GoodsDetail
}

/**
 * 商品详情主体信息
 * 包含商品的基本信息、规格、SKU、详情图文、关联推荐等
 */
export interface GoodsDetail {
  /** 商品 ID */
  id: string
  /** 商品名称 */
  name: string
  /** SPU 编码 (Standard Product Unit) */
  spuCode: string
  /** 商品简述/卖点，例如 "宝贝上脚活力出街" */
  desc: string
  /** 当前售价（字符串格式，保留两位小数） */
  price: string
  /** 原价（字符串格式，保留两位小数） */
  oldPrice: string
  /** 折扣力度，例如 0.x 或 1 (不打折) */
  discount: number
  /** 总库存量 */
  inventory: number
  /** 品牌信息对象 */
  brand: Brand
  /** 销量 */
  salesCount: number
  /** 评论数量 */
  commentCount: number
  /** 收藏数量 */
  collectCount: number
  /** 主视频列表，通常是 URL 字符串数组 */
  mainVideos: string[]
  /** 视频比例，例如 1 表示 1:1 */
  videoScale: number
  /** 主图列表（轮播图），URL 字符串数组 */
  mainPictures: string[]
  /** 商品规格集合（如颜色、尺码等维度） */
  specs: Spec[]
  /** 商品 SKU 列表（具体的销售库存单元） */
  skus: Sku[]
  /** 商品所属分类路径 */
  categories: Category[]
  /** 商品详情页数据（长图、属性参数） */
  details: Details
  /** 是否为预售商品 */
  isPreSale: boolean
  /** 用户是否已收藏，未登录或未收藏可能为 null */
  isCollect: boolean | null
  /** 推荐数据，当前数据为 null，预留字段 */
  recommends: unknown[] | null
  /** 用户地址列表，当前数据为 null，预留字段 */
  userAddresses: unknown[] | null
  /** 相似商品推荐列表 */
  similarProducts: SimpleProduct[]
  /** 24小时热销/每日热榜商品列表 */
  hotByDay: SimpleProduct[]
  /** 单条精选评价信息 */
  evaluationInfo: EvaluationInfo
}

/**
 * 品牌详细信息
 */
export interface Brand {
  /** 品牌 ID */
  id: string
  /** 品牌中文名称 */
  name: string
  /** 品牌英文名称 */
  nameEn: string
  /** 品牌 Logo 图片 URL */
  logo: string
  /** 品牌形象图 URL */
  picture: string
  /** 品牌类型，可能为 null */
  type: string | null
  /** 品牌描述，可能为 null */
  desc: string | null
  /** 产地/发源地，可能为 null */
  place: string | null
}

/**
 * 商品规格维度
 * 例如：颜色、尺码
 */
export interface Spec {
  /** 规格名称，如 "颜色" */
  name: string
  /** 规格 ID */
  id: string
  /** 该规格下的可选值列表 */
  values: SpecValue[]
}

/**
 * 规格的具体选项值
 * 例如：颜色下的 "粉黑色"、尺码下的 "26"
 */
export interface SpecValue {
  /** 选项名称 */
  name: string
  /** 选项对应的图片（通常用于颜色），可能为 null */
  picture: string | null
  /** 选项描述信息 */
  desc: string
}

/**
 * SKU 内部的具体规格组合
 * 用于描述该 SKU 是什么颜色、什么尺码
 */
export interface SkuSpec {
  /** 规格名称，如 "颜色" */
  name: string
  /** 选定的值名称，如 "粉黑色(LXJ017)" */
  valueName: string
}

/**
 * SKU (Stock Keeping Unit) 库存单元
 * 代表具体的某一款商品（特定颜色+特定尺码）
 */
export interface Sku {
  /** SKU ID */
  id: string
  /** SKU 编码 */
  skuCode: string
  /** 该 SKU 的售价 */
  price: string
  /** 该 SKU 的原价 */
  oldPrice: string
  /** 该 SKU 的库存数量 */
  inventory: number
  /** 该 SKU 对应的图片 URL */
  picture: string
  /** 该 SKU 对应的规格组合列表 */
  specs: SkuSpec[]
}

/**
 * 商品分类结构
 */
export interface Category {
  /** 分类 ID */
  id: string
  /** 分类名称 */
  name: string
  /** 层级，例如 2 */
  layer: number
  /** 父级分类对象，顶级分类的 parent 为 null */
  parent: CategoryParent | null
}

/**
 * 父级分类结构
 * 为了避免无限递归类型过深，单独定义 Parent 结构
 */
export interface CategoryParent {
  /** 父分类 ID */
  id: string
  /** 父分类名称 */
  name: string
  /** 父分类层级 */
  layer: number
  /** 更上一级的父类，此处数据中为 null */
  parent: null
}

/**
 * 商品详情页内容
 * 包括详情长图和详细属性表
 */
export interface Details {
  /** 详情图片 URL 列表 */
  pictures: string[]
  /** 商品详细属性列表（如材质、季节、适用年龄等） */
  properties: DetailProperty[]
}

/**
 * 详情中的单个属性键值对
 */
export interface DetailProperty {
  /** 属性名，如 "适用季节" */
  name: string
  /** 属性值，如 "春、冬、秋" */
  value: string
}

/**
 * 简易商品对象
 * 用于 "相似商品" 和 "热销榜" 列表
 */
export interface SimpleProduct {
  /** 商品 ID */
  id: string
  /** 商品名称 */
  name: string
  /** 商品简述 */
  desc: string
  /** 商品价格 */
  price: string
  /** 商品封面图 URL */
  picture: string
  /** 订单数/销量 */
  orderNum: number
}

/**
 * 评价/评论信息
 */
export interface EvaluationInfo {
  /** 评价 ID */
  id: string
  /** 评价对应的订单简要信息 */
  orderInfo: OrderInfo
  /** 评价人信息，可能为 null */
  member: unknown | null
  /** 评分，例如 5 分 */
  score: number
  /** 评价标签，可能为 null */
  tags: unknown | null
  /** 评价内容文本 */
  content: string
  /** 晒单图片列表，可能为 null */
  pictures: string[] | null
  /** 官方回复内容，可能为 null */
  officialReply: string | null
  /** 点赞数 */
  praiseCount: number
  /** 评价创建时间 */
  createTime: string
  /** 好评率/点赞率 */
  praisePercent: number
}

/**
 * 评价中的订单快照信息
 */
export interface OrderInfo {
  /** 购买时的规格信息 */
  specs: SkuSpec[]
  /** 购买数量 */
  quantity: number
  /** 订单创建时间，可能为 null */
  createTime: string | null
}
