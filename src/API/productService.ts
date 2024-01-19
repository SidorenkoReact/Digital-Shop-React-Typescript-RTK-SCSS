import axios from "axios";

export class ProductService {
    static async getAllProducts(page?: number, limit?: number) {
        return await axios.get('http://localhost:3001/products', {
            params: {
                _page: page,
                _limit: limit
            }
        })
    }
}
