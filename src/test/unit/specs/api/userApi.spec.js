import userApi from '@/api/userApi';

describe('User Api', () => {
	it('should have a create method', () => {
		expect(userApi.create).to.be.a('function');
	})
	it('should have a get method', () => {
		expect(userApi.get).to.be.a('function');
	})
	it('should have a edit method', () => {
		expect(userApi.edit).to.be.a('function');
	})
	it('should have a getAll method', () => {
		expect(userApi.getAll).to.be.a('function');
	})
	it('should have a delete method', () => {
		expect(userApi.delete).to.be.a('function');
	})
	it('should have a login method', () => {
		expect(userApi.login).to.be.a('function');
	})
})