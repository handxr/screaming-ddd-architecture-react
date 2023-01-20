import { Spinner, Table } from '@/components/elements';

import { useUsers } from '../hooks';
import { User } from '../types';

export const UsersList = () => {
  const { users, isLoading } = useUsers();

  if (isLoading) {
    return (
      <div className="w-full h-48 flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!users) return null;

  return (
    <Table<User>
      data={users}
      columns={[
        {
          title: 'Avatar',
          field: 'avatar',
          Cell({ entry: { avatar } }) {
            return (
              <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />
            );
          },
        },
        {
          title: 'First Name',
          field: 'first_name',
        },
        {
          title: 'Last Name',
          field: 'last_name',
        },
        {
          title: 'Email',
          field: 'email',
        },
      ]}
    />
  );
};
