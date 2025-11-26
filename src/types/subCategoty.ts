export interface resultItem {
	parentName: string;
	brands: Array<brandsItem>;
	name: string;
	saleProperties: Array<salePropertiesItem>;
	goods: Array<goodsItem>;
	id: string;
	categories: Array<categoriesItem>;
	picture: string | null;
	parentId: string;
}

export interface brandsItem {
	name: string;
	logo: string;
	id: string;
	nameEn: string;
	place: string;
	type: string | null;
	picture: string;
	desc: string;
}

export interface salePropertiesItem {
	name: string;
	id: string;
	properties: Array<propertiesItem>;
}

export interface goodsItem {
	price: string;
	name: string;
	orderNum: number;
	id: string;
	picture: string;
	desc: string;
}

export interface categoriesItem {
	parent: string | null;
	name: string;
	id: string;
	layer: number;
}

export interface propertiesItem {
	name: string;
	id: string;
}

export interface rootType {
	msg: string;
	result: resultItem;
  code: string;
}

