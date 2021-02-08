import Vuex from 'vuex'
import Vue from 'vue'
import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import { getters, createStore } from "../../store"
import headermenü from "../../layouts/default.vue"


describe("Kategorileri listele", () => {
    let wrapper;
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const store = new Vuex.Store({
        state: {
            "categories": [

                {
                    "id": 1,
                    "title": "Giyim",
                    "category_child": [
                        { "sub_categori_id": 1, "sub_categori_title": "Unisex T-shirt", },
                        { "sub_categori_id": 2, "sub_categori_title": "Oversize T-Shirt", },
                        { "sub_categori_id": 3, "sub_categori_title": "Kapüşonlu T-Shirt", },
                        { "sub_categori_id": 4, "sub_categori_title": "Kapüşonsuz Sweat", },
                        { "sub_categori_id": 5, "sub_categori_title": "Atkı", },
                        { "sub_categori_id": 6, "sub_categori_title": "Buff", },
                        { "sub_categori_id": 7, "sub_categori_title": "Sırt Çantası", },
                        { "sub_categori_id": 8, "sub_categori_title": "Bere", },
                        { "sub_categori_id": 9, "sub_categori_title": "Budget Şapka", },
                        { "sub_categori_id": 10,"sub_categori_title": "Çorap (Unisex)", },
                    ]
                },

                {
                    "id": 2,
                    "title": "Aksesuar",
                    "category_child": [
                        { "sub_categori_id": 11, "sub_categori_title": "Küpe", },
                        { "sub_categori_id": 12, "sub_categori_title": "Kolye", },
                        { "sub_categori_id": 13, "sub_categori_title": "Kol Saati",},
                    ]
                },

                {
                    "id": 3,
                    "title": "Hediyelik",
                    "category_child": [
                        { "sub_categori_id": 14, "sub_categori_title": "Duvar Saati", },
                        { "sub_categori_id": 15, "sub_categori_title": "Not Defteri", },
                        { "sub_categori_id": 16, "sub_categori_title": "Işıklandırma", },
                        { "sub_categori_id": 17, "sub_categori_title": "Çakmak", },
                        { "sub_categori_id": 18, "sub_categori_title": "Patch", },
                        { "sub_categori_id": 19, "sub_categori_title": "Matara", },
                        { "sub_categori_id": 20, "sub_categori_title": "Yastık", },
                        { "sub_categori_id": 21, "sub_categori_title": "Kar Küresi", },
                        { "sub_categori_id": 22, "sub_categori_title": "Fotoğraf Albümü", },
                        { "sub_categori_id": 23, "sub_categori_title": "Figür", },
                        { "sub_categori_id": 24, "sub_categori_title": "Metal Plaka", },
                        { "sub_categori_id": 25, "sub_categori_title": "Asa", },
                        { "sub_categori_id": 26, "sub_categori_title": "USB Flash Bellek", },
                        { "sub_categori_id": 27, "sub_categori_title": "Anahtarlık", },
                    ]
                },

                {
                    "id": 4,
                    "title": "Kupa ve Termos",
                    "category_child": [

                        { "sub_categori_id": 28, "sub_categori_title": "Termos", },
                        { "sub_categori_id": 29, "sub_categori_title": "Kupa", },
                    ]
                },

                {
                    "id": 5,
                    "title": "Kadın Cüzdan",
                },
   
            ]
        },
        getters: getters
    })
    wrapper = mount(headermenü, {
        stubs: { NuxtLink: RouterLinkStub },
        store, localVue
    })

    describe("headermenü.vue", () => {

        it('headermenü.vue Bileşenimizin class özelliğini kontrol edilmesi', () => {
            const wrapper = mount(headermenü)
            expect(wrapper.classes()).toContain['container-fluid', 'border-bottom'];
        });


        it("test5", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Kadın Cüzdan");
        });

        it("test6", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Unisex T-shirt");
        });

        it("test7", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Oversize T-Shirt");
        });

        it("test8", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Kapüşonlu T-Shirt");
        });

        it("test9", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Kapüşonsuz Sweat");
        });

        it("test10", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Atkı");
        });

        it("test11", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Buff");
        });

        it("test12", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Sırt Çantası");
        });

        it("test13", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Bere");
        });

        it(" test14", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Budget Şapka");
        });

        it(" test15", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Çorap (Unisex)");
        });

        it(" test16", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Küpe");
        });

        it(" test17", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Kolye");
        });

        it("test18", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Kol Saati");
        });

        it("test19", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Duvar Saati");
        });

        it("test20", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Not Defteri");
        });

        it("test21", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Işıklandırma");
        });

        it("test22", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Çakmak");
        });

        it("test23", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Patch");
        });

        it("test24", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Matara");
        });

        it(" test25", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Yastık");
        });

        it(" test26", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Kar Küresi");
        });

        it(" test27", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Fotoğraf Albümü");
        });

        it(" test28", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Figür");
        });

        it(" test29", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Metal Plaka");
        });

        it(" test30", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Asa");
        });

        it(" test31", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("USB Flash Bellek");
        });

        it(" test32", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Termos");
        });

        it(" test33", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Kupa");
        });

        it(" test34", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("KAMPANYALARIMIZDAN HABERDAR OLUN");
        });

        it(" test35", () => {
            const wrapper = mount(headermenü)
            expect(wrapper.text()).toContain("Kaydol");
        });

        it('has data', () => {
            const wrapper = mount(headermenü)
            expect(typeof headermenü.data).toBe('function')
        });

        });
})



