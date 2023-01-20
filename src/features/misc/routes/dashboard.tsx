import { ContentLayout } from "@/components/layout";

export const Dashboard = () => {
  return (
    <ContentLayout title="Dashboard">
      <h1 className="text-xl mt-2">
        Welcome <b>User</b>
      </h1>
      <h4 className="my-3">
        You are logged in as <b>admin</b>
      </h4>
    </ContentLayout>
  );
};
