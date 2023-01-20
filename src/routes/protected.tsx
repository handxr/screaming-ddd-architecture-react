import * as React from "react";
import { Outlet } from "react-router-dom";

import { Spinner } from "@/components/elements";
import { MainLayout } from "@/components/layout";
import { lazyImport } from "@/utils/lazy-import";

const { Users } = lazyImport(() => import("@/features/users"), "Users");
const { Dashboard } = lazyImport(() => import("@/features/misc"), "Dashboard");

const App = () => {
  return (
    <MainLayout>
      <React.Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <Spinner size="xl" />
          </div>
        }
      >
        <Outlet />
      </React.Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: "/dashboard",
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
];
