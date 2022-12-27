import DashBoard from "../containers/dashboard/dashboard";
import { useGetAllTodos } from "../containers/index";
import { usePostTodo } from "../containers/index";
import { useUpdateStatus } from "../containers/index";
import { useDeleteTodo } from "../containers/index";
import { Route } from "react-router-dom";
// import { findByTestId, getByTestId } from "@testing-library/react";
import { renderWithClient } from "../utils";

describe("mocking functions", () => {

  beforeEach(() => {
    jest.mock("../containers/index", () => ({
      useGetAllTodos: jest.fn(),
    }));
  });

  // beforeEach(() => {
  //   const mockGetUserDetails = useGetAllTodos as jest.MockedFunction<
  //   typeof useGetAllTodos
  // >;
  //   mockGetUserDetails.mockImplementation(() => {});
  // });
  it("getting data from api", async () => {
    renderWithRouter(
      () => (
        <Route path={"http://localhost:3001"}>
          <DashBoard />
        </Route>
      ),
      "/"
    );
    //   const mockPutTodoDetails = useUpdateStatus as jest.MockedFunction<
    //   typeof useUpdateStatus
    // >;
    // const mockPutTodoDetails = useGetAllTodos;
    // mockPutTodoDetails.mockImplementation(() => {});
    // jest.fn(mockImplementation(()=>useGetAllTodos()))

    await expect(useGetAllTodos.mockImplementation()).toHaveBeenCalledWith("1");
  });
});
describe("while loading", () => {
  beforeEach(() => {
    const mockGetUserDetails = useGetAllTodos();
    mockGetUserDetails.mockImplementation(() => {
      isLoading: true;
    });
  });

  it("renders loader", () => {
    renderWithRouter(
      () => (
        <Route path="/">
          <DashBoard />
        </Route>
      ),
      "/"
    );
    expect(findByTestId("loader")).toBeTruthy();
  });
});

// describe("with an error", () => {
//   it.todo("render an error message");
// });
// function renderWithRouter(arg0: () => JSX.Element, arg1: string) {
//   throw new Error("Function not implemented.");
// }

// function renderWithRouter(arg0, arg1) {
//   throw new Error("Function not implemented.");
// }
