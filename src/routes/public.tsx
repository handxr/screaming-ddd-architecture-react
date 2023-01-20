import { lazyImport } from "@/utils/lazy-import";

const { Login } = lazyImport(
  () => import("@/features/auth/routes/login"),
  "Login"
);

export const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
];
