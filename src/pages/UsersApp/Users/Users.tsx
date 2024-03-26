import { useAppDispatch, useAppSelector } from 'store/hooks';
import { usersSliceActions, usersSliceSelectors } from "store/redux/users/usersSlice";
import Button from 'components/button/Button';
import { UsersPageWrapper, UserCard, Paragraph } from "./styles"

function Users() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(usersSliceSelectors.users);

  // const handleDeleteUser = (userId: string) => {
  //   dispatch(usersSliceActions.removeUser(userId));
  // };

  const handleDeleteAllUsers = () => {
    dispatch(usersSliceActions.removeAllUsers());
  };

  return <UsersPageWrapper>
    {users.length > 0 && <Button name='Delete all users' onClick={handleDeleteAllUsers}></Button>}
    {users.map((user) => (
  <UserCard key={user.id}>
    <Paragraph>Name: {user.firstlastName}</Paragraph>
    <Paragraph>Age: {user.age}</Paragraph>
    <Paragraph>Job Title: {user.jobTitle}</Paragraph>
    <Button name='Delete' onClick={() => dispatch(usersSliceActions.removeUser(user.id))}></Button>
  </UserCard>
      ))}
  </UsersPageWrapper>
}

export default Users
