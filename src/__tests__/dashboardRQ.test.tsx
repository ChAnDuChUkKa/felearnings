import { render, renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { act } from "react-dom/test-utils";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  useDeleteTodo,
  useGetAllTodos,
  usePostTodo,
  useUpdateStatus,
} from "../containers/api";
import DashBoard from "../containers/dashboard/dashboard";
import { server } from "../mocks/server";

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

// window.alert = jest.fn();
describe("testing of", () => {
  test("get method", async () => {
    // server.use(rest.get("http://localhost:3000/todos", (req, res, ctx) => {
    //   return res(
    //     ctx.status(200),
    //     // ctx.json([
    //     //   {
    //     //     userId: 1,
    //     //     id: 202,
    //     //     title: "chandu1234",
    //     //     completed: false,
    //     //   },
    //     // ])
    //   );
    // }))
    const { result } = renderHook(() => useGetAllTodos(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data.data).toHaveLength(3);
  });

  test("post method", async () => {
    // const jsdomAlert = window.alert;
    // window.alert = () => {};
    // window.alert.mockClear();
    const data = {
      userId: 1,
      id: 211,
      title: "zxcvbnm",
      completed: true,
    };
    server.use(
      rest.post("http://localhost:3000/todos/", (req, res, ctx) => {
        return res(
          ctx.status(200)
          // ctx.json({
          //   userId: 1,
          //   id: 211,
          //   title: "zxcvbnm",
          //   completed: true,
          // })
        );
      })
    );
    const { result } = renderHook(() => usePostTodo(), {
      wrapper: createWrapper(),
    });
    const { mutate } = result.current;
    act(() => {
      // result.current.mutate({
      //   userId: 1,
      //   id: 211,
      //   title: "zxcvbnm",
      //   completed: true,
      // });
      // return result.current.isSuccess;
      mutate(data);
    });

    await waitFor(() => {
      //   console.log(result.current);
      return expect(result.current.isSuccess).toBe(true);
      // return result.current.isSuccess;
    });
    // window.alert = jsdomAlert;
    // expect(result.current.data).toHaveLength(4);
    expect(result.current.isSuccess).toBe(true);
    // expect(result.current.data).toHaveLength(4)
  });

  test("put method", async () => {
    const data = {
      userId: 1,
      id: 202,
      title: "chandu12345678",
      completed: false,
    };
    server.use(
      rest.put(`http://localhost:3000/todos/${data.id}`, (req, res, ctx) => {
        return res(
          ctx.status(200)
          //   ctx.json({
          //     ...data,
          //     completed: !data.completed,
          //   })
        );
      })
    );
    const { result } = renderHook(() => useUpdateStatus(), {
      wrapper: createWrapper(),
    });

    const { mutate } = result.current;

    act(() => mutate({ ...data, completed: !data.completed }));

    // act(() => {
    //   result.current.mutateAsync({
    //     ...data,
    //     completed: !data.completed,
    //   });
    //   return result.current.isSuccess;
    // });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    expect(result.current.isSuccess).toBe(true);
  });

  test("delete method", async () => {
    const id = 202;
    server.use(
      rest.delete(`http://localhost:3000/todos/${id}`, (req, res, ctx) => {
        return res(ctx.status(200));
      })
    );
    const { result } = renderHook(() => useDeleteTodo(), {
      wrapper: createWrapper(),
    });
    // act(() => {
    //   result.current.mutateAsync(202);
    //   return result.current.isSuccess;
    // });

    const { mutateAsync } = result.current;
    // console.log(await mutateAsync(202),"chandusdfgh");

    await mutateAsync(id);
    // act(() => {
    //   mutateAsync(id);
    // });

    // const {data}=useGetAllTodos()
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    // expect(data.data).toHaveLength(2)
    expect(result.current.isSuccess).toBe(true);
  });

  test("error case ", async () => {
    server.use(
      rest.get("http://localhost:3000/todos", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    const { result } = renderHook(() => useGetAllTodos(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBeDefined();
  });
});
