import { mount, shallowMount } from '@vue/test-utils'
import login from "../../pages/login.vue"

describe('login.vue', () => {

    it('login.vue Bileşenimizin class özelliğini kontrol edilmesi', () => {
        const wrapper = mount(login)
        expect(wrapper.classes()).toContain('container');
    });

    it("yazitest", () => {
        const wrapper = mount(login)
        expect(wrapper.text()).toContain("Üye Girişi");
    });

    it("yazitest2", () => {
        const wrapper = mount(login)
        expect(wrapper.text()).toContain("Beni Hatırla");
    });

    it("yazitest3", () => {
        const wrapper = mount(login)
        expect(wrapper.text()).toContain("Şifremi Unuttum");
    });

    it("yazitest4", () => {
        const wrapper = mount(login)
        expect(wrapper.text()).toContain("Giriş Yap");
    });

    it('Snapshot özelliği', () => {
        const wrapper = mount(login)
        expect(wrapper.html()).toMatchSnapshot()
    });

    it('has data', () => {
        const wrapper = mount(login)
        expect(typeof login.data).toBe('function')
    });
})

