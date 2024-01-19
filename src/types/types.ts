

export interface IProduct {
    id: number;
    name: string;
    image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/81e4672eaff4a1f03d632d5c6660b5d3/dcec0b39aaf0a2ebd688101c286e683381f433977585d251d36d2bc2079ff2fa.jpg"
    brand: string;
    categoryId: number;
    price: number;
}



export interface IFilterTypes {
    sort: string;
    group: string;
    query: string;
}
