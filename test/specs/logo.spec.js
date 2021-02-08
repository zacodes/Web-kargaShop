import { mount } from '@vue/test-utils'
import Logo from "../../layouts/default.vue"

describe('Logo.vue', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(Logo)
      expect(wrapper.vm).toBeTruthy()
    });

    it('Logo.vue Bileşenimizin class özelliğini kontrol edilmesi', () => {
      const wrapper = mount(Logo)
      expect(wrapper.classes()).toContain('container');
    });

    it('has data', () => {
        const wrapper = mount(Logo)
        expect(typeof Logo.data).toBe('function')
    });

})
