import Vue from 'vue';
import { mount } from 'avoriaz';
import ManageUser from '@/components/user/Manage.vue';

describe('Manage User', () => {
  const wrapper = mount(ManageUser);
	it('has a created hook', () => {
    expect(typeof ManageUser.created).to.equal('function');
  })
  it('has a data function', () => {
    expect(typeof ManageUser.data).to.equal('function');
  })
  it('has methods', () => {
    expect(typeof ManageUser.methods).to.equal('object');
    expect(typeof ManageUser.methods.getUser).to.equal('function');
    expect(typeof ManageUser.methods.newUser).to.equal('function');
    expect(typeof ManageUser.methods.saveUser).to.equal('function');
    expect(typeof ManageUser.methods.editUser).to.equal('function');
  })
  it('sets default data', () => {
    expect(ManageUser.data().loading).to.be.false;
    expect(ManageUser.data().edit).to.be.false;
    expect(ManageUser.data().user).to.be.an('object');
  })
  it('renders proper heading initially', () => {
    const heading = wrapper.find('h3')[0];
    expect(heading.text()).to.contain('Create user');
  })
  it('renders proper heading in edit mode', () => {
    const wrapper = mount(ManageUser);
    wrapper.setData({edit: true});
    const heading = wrapper.find('h3')[0];
    expect(heading.text()).to.contain('Update user');
  })
  it('renders proper CTA initially', () => {
    const btn = wrapper.find('el-button')[0];
    expect(btn.text()).to.contain('Create'); 
  })
  it('renders proper CTA in edit mode', () => {
    const wrapper = mount(ManageUser);
    wrapper.setData({edit: true});
    const btn = wrapper.find('el-button')[0];
    expect(btn.text()).to.contain('Update'); 
  })
  it('renders manage user form', () => {
    const form = wrapper.find('el-form')[0];
    expect(form).to.exist;
  })
});