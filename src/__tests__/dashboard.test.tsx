import axios from "axios";
import {
  render,
  screen,
  fireEvent,
  findByText,
  renderHook,
  waitFor,
} from "@testing-library/react";

import DashBoard from "../containers/dashboard/dashboard";
import { QueryClientProvider, QueryClient, useQuery } from "react-query";
import * as ReactQuery from "react-query";
import { MockedRequest, rest } from "msw";
import { setupServer } from "msw/node";
import { server } from "../mocks/server";
import { handlers } from "../mocks/handlers";
import { useGetAllTodos } from "../containers/index";
import { usePostTodo } from "../containers/index";
import { useUpdateStatus } from "../containers/index";
import { useDeleteTodo } from "../containers/index";
// describe("testing the component after loading", () => {
//   let refetchMock = jest.fn();

//   let useQuery = jest.spyOn(ReactQuery, "useQuery");

//   useQuery.mockRestore();

//   test("getting data from api", async () => {
//     const queryClient = new QueryClient();
//     useQuery.mockRestore();

//     render(
//       <QueryClientProvider client={queryClient}>
//         <DashBoard />
//       </QueryClientProvider>
//     );
//     const lengthOfItems = await screen.findAllByRole("document");
//     expect(lengthOfItems).toHaveLength(3);
//   });

// test("testing of post method", async () => {
//   const queryClient = new QueryClient();
//   useQuery.mockRestore();
//   server.use(
//     rest.post("http://localhost:3000/todos/", (req, res, ctx) => {
//       return res(
//         ctx.status(200),
//         ctx.json({
//           userId: 1,
//           completed: true,
//           title: "chandu the max",
//           id: 2001,
//         })
//       );
//     })
//   );
//   render(
//     <QueryClientProvider client={queryClient}>
//       <DashBoard />
//     </QueryClientProvider>
//   );

//   const lengthOfItems = await screen.findAllByRole("document");
//   expect(lengthOfItems).toHaveLength(1);
// });

//   test("put method status of component", async () => {
//     const queryClient = new QueryClient();
//     render(
//       <QueryClientProvider client={queryClient}>
//         <DashBoard />
//       </QueryClientProvider>
//     );

//     const data = {
//       id: 201,
//       userId: 1,
//       title: "chandu123",
//       completed: false,
//     };
//     server.use(
//       rest.put(`http://localhost:3000/todos/${data.id}`, (req, res, ctx) => {
//         return res(
//           ctx.status(200),
//           ctx.json({ ...data, completed: !data.completed })
//         );
//       })
//     );

//     const updatedValue = await screen.getByTestId("complete-value");
//     expect(updatedValue).toBe(true);
//   });

//   test("testing delete method",async()=>{
//     const queryClient = new QueryClient();
//     const id=202
//     server.use(
//       rest.delete(`http://localhost:3000/todos/${id}`, (req, res, ctx) => {
//         return res(
//           ctx.status(200)
//         );
//       })
//     );
//     render(
//       <QueryClientProvider client={queryClient}>
//         <DashBoard />
//       </QueryClientProvider>
//     );

//     const lengthAfter=await screen.getByRole('document')
//     expect(lengthAfter).toBe(2)
//   })

//   test("error state", async () => {
//     const queryClient = new QueryClient();
//     useQuery.mockRestore();

//     server.use(
//       rest.get("http://localhost:3000/todos", (req, res, ctx) => {
//         return res(ctx.status(500));
//       })
//     );

//     render(
//       <QueryClientProvider client={queryClient}>
//         <DashBoard />
//       </QueryClientProvider>
//     );
//     const errorMessage = await screen.findByText(/internal server error/i);
//     expect(errorMessage).toBeInTheDocument();
//   });

test("on intial render the page would have a form to add the task", () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <DashBoard />
    </QueryClientProvider>
  );
  const linkElement = screen.getByText(/Add new task/i);
  expect(linkElement).toBeInTheDocument();
});

test("error for title", async () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <DashBoard />
    </QueryClientProvider>
  );

  const componentElement = screen.getByTestId("AddButton");
  // componentElement.click()
  fireEvent.click(componentElement);
  const errorElement = document.getElementById("error");
  expect(errorElement).toBeInTheDocument();
});

test("no error with title", async () => {
  const queryClient = new QueryClient();
  const usePostTodo = jest.fn();
  render(
    <QueryClientProvider client={queryClient}>
      <DashBoard />
    </QueryClientProvider>
  );
  const inputElement = document.getElementById("title");
  fireEvent.change(inputElement, { target: { value: "chandu123" } });
  const componentElement = screen.getByTestId("AddButton");
  // componentElement.click()
  fireEvent.click(componentElement);
  // await expect(usePostTodo).toHaveBeenCalledWith(1)
  const errorElement = document.getElementById("error");
  expect(errorElement).not.toBeInTheDocument();
});

// test("updating status of todo",async()=>{
//   const queryClient = new QueryClient();
//   render(
//     <QueryClientProvider client={queryClient}>
//       <DashBoard />
//     </QueryClientProvider>
//   );
//   const checkBoxItem=document.getElementById('complete-value-1')
//   fireEvent.change(checkBoxItem,{target:{value:true}})
//   expect(useUpdateStatus).toHaveBeenCalledWith(1)

// })

// });

// test("on clicking button with empty text",async()=>{
//   const createWrapper = () => {
//     const queryClient = new QueryClient({
//       defaultOptions: {
//         queries: {
//           retry: false,
//         },
//       },
//     });
//     return ({ children }) => (
//       <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//     );
//   };
//   const { result } = renderHook(() => useGetAllTodos(), {
//     wrapper: createWrapper(),
//   });

//   await waitFor(() => expect(result.current.isSuccess).toBe(true));
//   const buttonElement=screen.getByTestId('AddButton')
//   fireEvent.click(buttonElement)
//   const errorElement=screen.getAllByText(/Please enter title/i)
//   expect(errorElement).toBeInTheDocument()
//   expect(result.current.data.data).toHaveLength(3);
// })