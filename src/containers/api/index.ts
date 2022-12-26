import axios from "axios";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryCache,
} from "react-query";

export const getTodos = async () => {
  return axios.get("http://localhost:3000/todos");
};

export const useGetAllTodos = () => {
  return useQuery("todos", getTodos);
};

export const deleteTodo = async (id: number) => {
  return axios.delete(`http://localhost:3000/todos/${id}`);
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    onSuccess: () => {
      // alert("deleted successfully");
      queryClient.invalidateQueries();
    },
    mutationFn: deleteTodo,
  });
};

export const updateStatus = async (data: {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}) => {
  return axios.put(`http://localhost:3000/todos/${data.id}`, data);
};

export const useUpdateStatus = () => {
  const queryClient = useQueryClient();
  return useMutation(
    //   updateStatus,{
    //   onSuccess: () => {
    //     queryClient.invalidateQueries()
    //   },
    // }
    {
      mutationFn: updateStatus,
      onSuccess: () => {
        // alert("updated successfully")
        queryClient.invalidateQueries();
        // window.location.reload()
      },
    }
  );
};

export const postTodo = async (data: {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}) => {
  return axios.post("http://localhost:3000/todos/", data);
};

export const usePostTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries();
      // alert("added successfully");
    },
  });
};
