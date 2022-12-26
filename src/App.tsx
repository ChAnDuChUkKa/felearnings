import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import  DashBoard  from "./containers/dashboard/dashboard";
import { Layout } from "./containers/layout";
import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const queryClient = new QueryClient();
  // const queryClient=useQueryClient()
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <React.Suspense
    //   fallback={
    //     <div className="flex items-center justify-center w-screen h-screen">
    //       {/* add loader component */}
    //       Loading
    //     </div>
    //   }
    // >

    // <Layout>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        <Routes>
          <Route path="/" element={<DashBoard />} />
        </Routes>
      </QueryClientProvider>
    // </Layout>

    // </React.Suspense>
  );
}

export default App;
