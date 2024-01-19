import {IProduct} from "../types/types";


export function getTotalPageCount(perOnPage: number, totalCount: number) {
    return Math.ceil(totalCount / perOnPage)
}

export function getPageArray(pageCount: number) {
    const pagesArray = []

    for (let i = 0; i < pageCount; i++ ) {
        pagesArray.push(i + 1)
    }

    return pagesArray
}

export  function addRandomPriceToArray(array: IProduct[]) {
    const newArray = []

    for (let key in array){
        const randomInt = Math.floor(Math.random() * (50000 - 20000)) + 20000
        newArray.push({...array[key], price: randomInt})
    }
    return newArray
}

export function addPropertyToAllObjects(array: IProduct[], name: string, value: string) {
    const newArray = []

    for (let key in array) {
        newArray.push({...array[key], [name]: value})
    }

    return newArray
}
