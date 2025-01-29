import AuthGuard from "../src/component/AuthGuard";
import React, { Suspense, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { routes } from "./routes";
import NotFound from "./views/errors/NotFound";
import PageLoading from "./component/PageLoading";
import AuthContext from "../src/context/Auth";
import UserContext from "../src/context/User";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default function AppRouter() {
  return (
    <Router history={history}>
      <Suspense fallback={<PageLoading />}>
        <RenderRoutes data={routes} />
      </Suspense>
    </Router>
  );
}

function RenderRoutes({ data }) {
  return (
    <AuthContext>
      <UserContext>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/" />} /> */}
          {data.map((route, i) => {
            const Component = route.component;
            const Guard = route.guard ? AuthGuard : Fragment;
            const Layout = route.layout || Fragment;
            return (
              <Route
                key={i}
                path={route.path}
                element={
                  <Guard>
                    <Layout>
                      {route.routes ? (
                        <RenderRoutes data={route.routes} />
                      ) : (
                        <Component />
                      )}
                    </Layout>
                  </Guard>
                }
              />
            );
          })}
          <Route path="*" element={<NotFound />} />{" "}
        </Routes>
      </UserContext>
    </AuthContext>
  );
}
