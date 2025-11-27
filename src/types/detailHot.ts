export interface resultItem {
	price: string;
	name: string;
	orderNum: number;
	id: string;
	picture: string;
	desc: string;
}

export interface rootType {
	msg: string;
  code: string;
  result: Array<resultItem>;
}

export interface reqDetailHot {
  id: number | string;
  type: number;
  limit?: number;
}

