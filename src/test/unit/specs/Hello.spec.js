import Vue from 'vue';
import { mount } from 'avoriaz';
import Hello from '@/components/Hello.vue';

describe('Home component', () => {
	const wrapper = mount(Hello);
	it('renders container', () => {
		const div = wrapper.find(".counters");
		expect(div).to.exist;
	})
	it('renders cards', () => {
		const cards = wrapper.find("el-card");
		expect(cards).to.exist;
	})
	it('has correct name', () => {
		expect(wrapper.name()).to.equal("Dashboard");
	})
});