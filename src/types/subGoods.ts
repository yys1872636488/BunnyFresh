export interface resultItem {
	pages: number;
	counts: number;
	pageSize: number;
	page: number;
	items: Array<itemsItem>;
}

export interface itemsItem {
	price: string;
	name: string;
	orderNum: number;
	id: string;
	picture: string;
	desc: string;
}

export interface rootType {
	msg: string;
	result: resultItem;
	code: string;
}

export interface  reqData {
  categoryId: string;
  page: number;
  pageSize: number;
  sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
}

