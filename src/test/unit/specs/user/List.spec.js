import Vue from 'vue';
import { mount } from 'avoriaz';
import ListUser from '@/components/user/List.vue';

describe('List user', () => {
	it('has a created hook', () => {
    expect(typeof ListUser.created).to.equal('function');
  })
  it('has a data function', () => {
    expect(typeof ListUser.data).to.equal('function');
  })
  it('has methods', () => {
    expect(typeof ListUser.methods).to.equal('object');
    expect(typeof ListUser.methods.getUsers).to.equal('function');
    expect(typeof ListUser.methods.goToAdd).to.equal('function');
    expect(typeof ListUser.methods.deleteUser).to.equal('function');
    expect(typeof ListUser.methods.editUser).to.equal('function');
  })
  it('sets default data', () => {
    expect(ListUser.data().loading).to.be.false;
    expect(ListUser.data().users).to.be.an('array');
    expect(ListUser.data().users).to.have.length(0);
  })
  it('calls getUsers when created', () => {
    const spy = sinon.spy(ListUser.methods,"getUsers");
    const vm = new Vue(ListUser).$mount();
    expect(spy.called).to.be.true;
  })
  it('sets loading to true when created', (done) => {
    const vm = new Vue(ListUser).$mount();
    Vue.nextTick(() => {
      expect(vm.loading).to.be.true;
      done();
    })
  })  
  it('has Add button that contains "add user"', () => {
    const wrapper = mount(ListUser);
    const addBtn = wrapper.find(".top > h3 > el-button")[0];
    expect(addBtn.text()).to.contain('Add user');
  })
  it('has table for users', () => {
    const wrapper = mount(ListUser);
    const table = wrapper.find("el-table")[0];
    expect(table).to.exist;
  })
  it('has a class table-container', () => {
    const wrapper = mount(ListUser);
    expect(wrapper.hasClass("table-container")).to.be.true;
  })
});
