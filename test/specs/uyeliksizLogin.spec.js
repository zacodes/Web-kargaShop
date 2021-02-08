import { mount, shallowMount } from '@vue/test-utils'
import uyeliksizLogin from "../../pages/uyeliksizLogin.vue"


describe('uyeliksizLogin.vue', () => {

    it('uyeliksizLogin.vue Bileşenimizin class özelliğini kontrol edilmesi', () => {
        const wrapper = mount(uyeliksizLogin)
        expect(wrapper.classes()).toContain('container');
    });

    it('test1-id', () => {
        const wrapper = shallowMount(uyeliksizLogin)
        expect(wrapper.find('#uyeg').text()).toContain('Üye Girişi');
    });

    it("yazitest", () => {
        const wrapper = mount(uyeliksizLogin)
        expect(wrapper.text()).toContain("Üye Girişi");
    });

    it("yazitest2", () => {
        const wrapper = mount(uyeliksizLogin)
        expect(wrapper.text()).toContain("Beni Hatırla");
    });

    it("yazitest3", () => {
        const wrapper = mount(uyeliksizLogin)
        expect(wrapper.text()).toContain("Şifremi Unuttum");
    });

    it("yazitest4", () => {
        const wrapper = mount(uyeliksizLogin)
        expect(wrapper.text()).toContain("Giriş Yap");
    });

    it("yazitest5", () => {
        const wrapper = mount(uyeliksizLogin)
        expect(wrapper.text()).toContain("ÜYELİKSİZ ALIŞVERİŞİ DEVAM ET");
    });

    it('Snapshot özelliği', () => {
        const wrapper = mount(uyeliksizLogin)
        expect(wrapper.html()).toMatchSnapshot()
    });

    it('has data', () => {
        const wrapper = mount(uyeliksizLogin)
        expect(typeof uyeliksizLogin.data).toBe('function')
    });
})

