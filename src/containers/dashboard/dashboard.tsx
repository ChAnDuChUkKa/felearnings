import { useState } from "react";
import { QueryCache, useMutation, useQuery } from "react-query";
import {
  useDeleteTodo,
  useGetAllTodos,
  usePostTodo,
  useUpdateStatus,
} from "../api/index";

const DashBoard = () => {
  const { data, isError, isLoading } = useGetAllTodos();
  const [errorMsg, setErrorMsg] = useState(false);

  const deleteTodo = useDeleteTodo();
  const updateStatus = useUpdateStatus();

  const changeStatus = (each) => {
    // console.log(e.target.value);
    updateStatus.mutate({
      ...each,
      completed: !each.completed,
    });
  };

  const [title, setTitle] = useState("");
  const [toComplete, setToComplete] = useState(false);

  const { mutate: addNewTodo } = usePostTodo();
  const addNewTask = () => {
    // const data={
    //   id: "201",
    //   title: title,
    //   completed: toComplete,
    //   userId: "1",
    // }
    // const res=addNewTodo({data});
    const newValues: any = {
      title,
      completed: toComplete,
      userId: "1",
    };
    if (title !== "") {
      setErrorMsg(false);
      addNewTodo(newValues);
      // console.log(newValues);
      setTitle("");
      setToComplete(false);
    } else {
      // alert("please add title");
      setErrorMsg(true);
    }

    // console.log(res);
  };

  return (
    <div className="w-[100%] bg-[#F8F5FF] overflow-y-auto no-scrollbar p-[1rem]">
      <h1 className="text-center text-[2rem]">Add new task</h1>
      <div className="flex flex-col justify-center mt-[1rem] mx-auto w-[100vw] md:w-[40vw]">
        <input
          type="text"
          className="h-[3rem] border-[1px] border-[gray mr-[1rem] px-[12px]"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          id="title"
        />
        {errorMsg ? (
          <p className="text-[red]" id="error">
            Please enter title
          </p>
        ) : null}
        <div className="flex items-center mt-[1rem] cursor-pointer">
          <input
            type="checkbox"
            name="completed"
            id="completed"
            checked={toComplete}
            onChange={() => setToComplete(!toComplete)}
          />
          <label htmlFor="completed">Completed</label>
        </div>
        <button
          className="bg-[#007BFF] h-[3rem] mt-[1rem] px-[1rem] text-[#FFFFFF] cursor-pointer"
          onClick={addNewTask}
          data-testid="AddButton"
          id="AddButton"
        >
          Add
        </button>
      </div>

      {isLoading ? (
        <p>Loading</p>
      ) : isError ? (
        <p>Error fetching todos...</p>
      ) : (
        <div className="flex flex-row justify-center flex-wrap">
          {data?.data.map((each) => {
            return (
              <div
                className="flex flex-col m-[1rem] w-[16rem] border-[1px] border-[gray] p-[1rem]"
                key={each.id}
                data-testid={each.id}
                role="document"
              >
                <div className="flex flex-row justify-start">
                  <input
                    type="checkbox"
                    id={`complete-value-${each.id}`}
                    className="mr-[1rem] cursor-pointer"
                    checked={each.completed}
                    onChange={() =>
                      updateStatus.mutate({
                        ...each,
                        completed: !each.completed,
                      })
                    }
                  />
                  <p className={`${each.completed ? "line-through" : "none"}`}>
                    {each.title}
                  </p>
                </div>
                <button
                  className="bg-[#007bff] text-[#FFFFFF] w-[50%] self-end mt-auto py-[0.5rem] rounded-[1rem] cursor-pointer"
                  onClick={() => deleteTodo.mutateAsync(each.id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default DashBoard;
