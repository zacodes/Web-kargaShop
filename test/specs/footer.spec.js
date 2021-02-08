import { mount } from "@vue/test-utils"
import Footer from "../../layouts/default.vue"

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Footer.vue", () => {

        it("yazı testi", () => {
            const wrapper = mount(Footer)
            expect(wrapper.text()).toContain("KAMPANYALARIMIZDAN HABERDAR OLUN");
        });

        it("buton testi", () => {
            const wrapper = mount(Footer)
            expect(wrapper.text()).toContain("Kaydol");
        });

        it('has data', () => {
            const wrapper = mount(Footer)
            expect(typeof Footer.data).toBe('function')
        });
  
});

        /*

           test('form testi', () => {
            const wrapper = shallowMount(Footer)
            wrapper.find('input[type="text"]').value = 'test123@gmail.com'
            wrapper.find('input[type="text"]').trigger('change')
            expect(wrapper.text()).toContain('test123@gmail.com')
        });
    
        */
        
