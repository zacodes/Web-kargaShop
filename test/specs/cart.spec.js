import { mount, shallowMount } from '@vue/test-utils'
import cart from '../../pages/cart.vue'


describe('cart.vue', () => {

    it('Bileşenimizin class özelliğini kontrol edilmesi1', () => {
        const wrapper = mount(cart)
        expect(wrapper.classes()).toContain('container', 'my-2');
    });

    it('Bileşenimizin class özelliğini kontrol edilmesi2', () => {
        const wrapper = mount(cart)
        expect(wrapper.classes()).toContain('container', 'text-center');
    });

    it('Snapshot özelliği', () => {
        const wrapper = mount(cart)
        expect(wrapper.html()).toMatchSnapshot()
    });

    it('has data', () => {
        const wrapper = mount(cart)
    expect(typeof cart.data).toBe('function')
    });

})


/* 

import { shallowMount, mount, config, RouterLinkStub, createLocalVue } from "@vue/test-utils"
import cart from "../../pages/cart.vue"
import { getters, mutations, actions, state } from "../../store"
import Vuex from "vuex"



describe("cart.vue", () => {

    it('cart.vue Bileşenimizin class özelliğini kontrol edilmesi', () => {
        const wrapper = mount(cart)
        expect(wrapper.classes()).toContain('container');
    });

  describe("Sepet boşken", () => {
    config.mocks["$store"] = {
      state: { ...state },
      getters: {
        ...getters
      },
      mutations: {
        ...mutations
      }
    };
    it("'SEPETİNİZDE ÜRÜN YOK!' yazması", () => {
      let wrapper = shallowMount(cart);
      expect(wrapper.text()).toContain("SEPETİNİZDE ÜRÜN YOK!");
    });
  });

  describe("Sepet Dolu iken", () => {
    let wrapper;
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const store = new Vuex.Store({
      state: {
        inCart: [
          {
            "id": 1,
            "count": 1
          }
        ],

        data: [
          {
            "id": " 1 ",
            "title": "KANAGAWA - UNISEX TSHIRT",
            "price": " 34.9 ",
            "code": "K1867",
            "sizes": " ['S', 'M', 'L', 'XL']  ",
            "images": " nuxt/assets/image/product1.jpg ",
            "category": "Unisex T-Shirt"
          }
        ]
      },

      getters: getters
    })

    wrapper = mount(cart, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
      store,
      localVue,
    })

  });
  
    it('Snapshot özelliği', () => {
        const wrapper = mount(cart)
        expect(wrapper.html()).toMatchSnapshot()
    });

    it('has data', () => {
        const wrapper = mount(cart)
    expect(typeof cart.data).toBe('function')
    });
  
    });

    */



    /*
    describe("cart.vue", () => {

      it("Render", () => {
        let wrapper = shallowMount(cart);
        expect(wrapper.text()).toContain("Sepet Detayı");
      });
  
      it("Render", () => {
        let wrapper = shallowMount(cart);
        expect(wrapper.text()).toContain("Alışverişe Devam Et");
      });
  
      it("Render", () => {
        let wrapper = shallowMount(cart);
        expect(wrapper.text()).toContain("Sepet Özeti");
      });
  
      it("Render", () => {
        let wrapper = shallowMount(cart);
        expect(wrapper.text()).toContain("Ara Toplam");
      });
  
      it("Render", () => {
        let wrapper = shallowMount(cart);
        expect(wrapper.text()).toContain("KDV Dahil");
      });
  
      it("Render", () => {
        let wrapper = shallowMount(cart);
        expect(wrapper.text()).toContain("Toplam");
      });
  
      it("Render", () => {
        let wrapper = shallowMount(cart);
        expect(wrapper.text()).toContain("Alışverişi Tamamla");
      });

      it("Render", () => {
        let wrapper = shallowMount(cart);
        expect(wrapper.text()).toContain("Eşya yok");
      });
    });

    */




/*

import { shallowMount, mount, config, RouterLinkStub, createLocalVue } from "@vue/test-utils";
import sepetim from "../../pages/cart.vue";


describe("cart.vue", () => {

  describe("Sepet boşken", () => {
    config.mocks["$store"] = {
      state: { ...state },
      getters: {
        ...getters
      },
      mutations: {
        ...mutations
      }
    };
    it("'SEPETİNİZDE ÜRÜN YOK!' yazması", () => {
      let wrapper = shallowMount(sepetim);
      expect(wrapper.text()).toContain("SEPETİNİZDE ÜRÜN YOK!");
    });
  });

  describe("Sepet Dolu iken", () => {
    let wrapper;
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const store = new Vuex.Store({
      state: {
        inCart: [
          {
          "id": 1,
          "count": 1
          }
        ],

        data: [
          {
          "id" :" 1 " ,
          "title" : "KANAGAWA - UNISEX TSHIRT" , 
          "price" : " 34.9 " ,
          "code" : "K1867" ,
          "sizes" : " ['S', 'M', 'L', 'XL']  ",
          "images" : " nuxt/assets/image/product1.jpg " ,
          "category" : "Unisex T-Shirt"                     
          }
        ]
      },

      getters: getters
    })

    wrapper = mount(sepetim, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
      store,
      localVue,
    })
    
    describe("Gözükecekler", () => {
      it("Karga T-shirt", () => {
        expect(wrapper.text()).toContain("Karga T-shirt");
      });
    });

  });
});

*/

