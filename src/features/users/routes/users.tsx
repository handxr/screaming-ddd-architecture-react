import { ContentLayout } from "@/components/layout";

import { UsersList } from "../components/users-list";

export const Users = () => {
  return (
    <ContentLayout title="Users">
      <div className="mt-4">
        <UsersList />
      </div>
    </ContentLayout>
  );
};
