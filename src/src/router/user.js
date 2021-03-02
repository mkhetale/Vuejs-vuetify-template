import ListUsers from '@/components/user/List';
import ManageUsers from '@/components/user/Manage';


const userRoutes = [{
  path: '/user',
  name: 'User',
  component: ListUsers,
}, {
  path: '/user/add',
  name: 'addUser',
  component: ManageUsers,
}, {
  path: '/user/edit/:id',
  name: 'editUser',
  component: ManageUsers,
}];

export default userRoutes;
