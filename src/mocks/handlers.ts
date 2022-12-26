import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3000/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { userId: 1, id: 202, complete: true, title: "chandu to read" },
        { userId: 1, id: 203, complete: true, title: "qwertyuio" },
        { userId: 1, id: 204, complete: false, title: "asdfghjkl" },
      ])
    );
  }),
  rest.post("http://localhost:3000/todos/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        userId: 1,
        complete: true,
        title: "subtle art of not giving..",
      })
    );
  }),
  rest.put("http://localhost:3000/todos/:id", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.delete("http://localhost:3000/todos/:id", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  // rest.get("http://localhost:3000/todos",null),
  // rest.post("http://localhost:3000/todos/",null),
  // rest.put("http://localhost:3000/todos/:id",null),
  // rest.delete("http://localhost:3000/todos/:id",null)
];
