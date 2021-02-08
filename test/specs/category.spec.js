import { mount, shallowMount } from '@vue/test-utils'
import category from "../../pages/category.vue"


describe('category.vue', () => {

    it('category.vue Bileşenimizin class özelliğini kontrol edilmesi', () => {
        const wrapper = mount(category)
        expect(wrapper.classes()).toContain('container', 'my-5');
    });

    it("test1", () => {
        const wrapper = mount(category)
        expect(wrapper.text()).toContain("Seçimleriniz");
    });

    it("test2", () => {
        const wrapper = mount(category)
        expect(wrapper.text()).toContain("Ürün Grupları");
    });

    it("test3", () => {
        const wrapper = mount(category)
        expect(wrapper.text()).toContain("Filtre Seçenekleri");
    });

    it("test4", () => {
        const wrapper = mount(category)
        expect(wrapper.text()).toContain("UNISEX T-SHIRT");
    });

    it("test5", () => {
        const wrapper = mount(category)
        expect(wrapper.text()).toContain("Giyim");
    });

    it("test6", () => {
        const wrapper = mount(category)
        expect(wrapper.text()).toContain("Tüm Markalar");
    });

    it("test7", () => {
        const wrapper = mount(category)
        expect(wrapper.text()).toContain("Karga");
    });

    it("test8", () => {
        const wrapper = mount(category)
        expect(wrapper.text()).toContain("Filtre Seçenekleri");
    });

    it("test9", () => {
        const wrapper = mount(category)
        expect(wrapper.text()).toContain("Kampanyalı Ürünler");
    });

    it("test9", () => {
        const wrapper = mount(category)
        expect(wrapper.text()).toContain("Kampanyalı Ürünler");
    });

    it("test10", () => {
        const wrapper = mount(category)
        expect(wrapper.text()).toContain("Sponsor Ürünler");
    });

    it("test11", () => {
        const wrapper = mount(category)
        expect(wrapper.text()).toContain("Yeni Ürünler");
    });

    it("test12", () => {
        const wrapper = mount(category)
        expect(wrapper.text()).toContain("En Popüler Olanlar");
    });

    it("test13", () => {
        const wrapper = mount(category)
        expect(wrapper.text()).toContain("KANAGAWA -UNISEX TSHIRT");
    });

    it('Snapshot özelliği', () => {
        const wrapper = mount(category)
        expect(wrapper.html()).toMatchSnapshot()
    });

    it('has data', () => {
        const wrapper = mount(category)
    expect(typeof category.data).toBe('function')
    });
})
