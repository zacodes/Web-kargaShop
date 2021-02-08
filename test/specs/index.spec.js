import { mount, shallowMount } from '@vue/test-utils'
import index from "../../pages/index.vue"


describe('index.vue', () => {

    it('test1-id', () => {
        const wrapper = shallowMount(index)
        expect(wrapper.find('#vt').text()).toContain('Vitrindekiler');
    });

    it('index.vue Bileşenimizin class özelliğini kontrol edilmesi', () => {
        const wrapper = mount(index)
        expect(wrapper.classes()).toContain('container');
    });

    it("yazi", () => {
        const wrapper = mount(index)
        expect(wrapper.text()).toContain("Vitrindekiler");
    });

    it('Snapshot özelliği', () => {
        const wrapper = mount(index)
        expect(wrapper.html()).toMatchSnapshot()
    });

    it('has data', () => {
        const wrapper = mount(index)
    expect(typeof index.data).toBe('function')
    });

})

    /*
describe('index.vue', () => {
    it('test1-', () => {
        const wrapper = shallowMount(index)
        expect(wrapper.find('#vitrinyazi').text()).equal('Vitrindekiler');
    });

    it('test2- class özelliği kontrol', () => {
        const wrapper = mount(index)
        expect(wrapper.classes()).toContain('container');
    });

    it('test3- class özelliği kontrol', () => {
        const wrapper = mount(index)
        expect(wrapper.classes()).toContain('card-price font-weight-bold');
    });

    it('test4- snapshot özelliği', () => {
        const wrapper = mount(index)
        expect(wrapper.html()).toMatchSnapshot();
    });


    })

    */