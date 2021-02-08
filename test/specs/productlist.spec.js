import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils"
import ProductList from "../../pages/product.vue"
import Vuex from "vuex"
import { getters } from "../../store";


describe("Verilen ürünlerin listelenmesi", () => {
    let wrapper;
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const store = new Vuex.Store({
        state:{
            products:[
                
                {
                    "id": 1,
                    "title": "KANAGAWA -UNISEX TSHIRT",
                    "price": 34.9,
                    "code": "K1867",
                    "image": "_nuxt/assets/image/product1.jpg",
                    "sizes": ["S", "M", "L", "XL"],
                    "category": "Giyim",
                }   
            ]
        },
        
        getters:getters
    })

    wrapper = mount(ProductList, {
        stubs: {
            NuxtLink: RouterLinkStub
        },
        store,
        localVue
    })

    describe("Liste Kontrolü", () => {

        it("KANAGAWA -UNISEX TSHIRT", () => {
            expect(wrapper.text()).toContain("KANAGAWA -UNISEX TSHIRT");
        });

        it('has data', () => {
            const wrapper = mount(ProductList)
            expect(typeof ProductList.data).toBe('function')
        });

    });
});