import {getters} from "../../store"

describe("products",()=>{
    it('IDsi verilen ürün geliyor mu?', () => {
        const state = {
            products:
                [
                    {
                        "id": 1,
                        "title": "KANAGAWA -UNISEX TSHIRT",
                        "price": 34.9,
                        "code": "K1867",
                        "image": "_nuxt/assets/image/product1.jpg",
                        "sizes": ["S", "M", "L", "XL"],
                        "category": "Giyim",
                    },
                ]
        }

        const { getSite } = getters;
        const id = 1
        const result = getSite(state)(id)
        const expected = {
            "id": 1,
            "title": "KANAGAWA -UNISEX TSHIRT",
            "price": 34.9,
            "code": "K1867",
            "image": "_nuxt/assets/image/product1.jpg",
            "sizes": ["S", "M", "L", "XL"],
            "category": "Giyim",
        };
        expect(result).toEqual(expected)
    });

})


