# Intro to Redux

A simplified reference for learning Redux using Redux Toolkit with React and TypeScript. Focuses on the core concepts, inner flow, and setup steps needed for managing global state in scalable applications.

---

## ⚙️ Installation & Setup (Step by Step)

### 🔧 1. Create React + TypeScript App with Vite

```bash
npm create vite@latest my-app --template react-ts
cd my-app
```

### 📦 2. Install Redux Toolkit and React-Redux

```bash
npm install @reduxjs/toolkit react-redux
```

## 🔍 Why Use Redux?

- Helps manage **global state** in large applications.
- Solves problems like **prop drilling** (passing props down many levels).
- Makes data flow **predictable** and easier to debug.
- Works well when many components need access to the same state.

---

## 🧭 Key Concepts Learned

### 🔁 Data Flow Types

| Term                    | Description                                                                       |
| ----------------------- | --------------------------------------------------------------------------------- |
| **State**               | The data that drives the UI (e.g., count, user info).                             |
| **Unidirectional Flow** | Data flows in one direction: from state → UI → action → new state.                |
| **Bidirectional Flow**  | Data goes back and forth between state and UI — harder to manage.                 |
| **Redux Flow**          | Follows a clear one-way flow: UI → Action → Reducer → Store → UI update.          |
| **Flux Architecture**   | A design pattern (by Facebook) that Redux is based on — uses unidirectional flow. |

### 📁 3. Suggested Folder Structure

```
src/
├── redux/
│   ├── store.ts
│   ├── features/
│   │   └── counter/
│   │       ├── counterSlice.ts
│   │       └── hook.ts
├── App.tsx
```

### 🧠 4. Summary of What Each File Does

| File              | Purpose                                                      |
| ----------------- | ------------------------------------------------------------ |
| `store.ts`        | Creates the Redux store using `configureStore`.              |
| `counterSlice.ts` | Creates a slice that includes state, reducers, and actions.  |
| `hook.ts`         | Contains custom typed `useSelector` and `useDispatch` hooks. |
| `App.tsx`         | UI component that connects to Redux using the custom hooks.  |

---

---

### 🧱 Core Parts of Redux

| Part         | Role                                                                           |
| ------------ | ------------------------------------------------------------------------------ |
| **Store**    | Holds the entire global application state.                                     |
| **Action**   | Describes **what** needs to change in the state.                               |
| **Reducer**  | A function that describes **how** the state should change based on the action. |
| **Dispatch** | Sends an action to the store.                                                  |
| **Selector** | Reads data from the store to show in the component.                            |
| **Payload**  | Extra data passed with an action (like `{ amount: 5 }`).                       |

> Quick logic:
> **Action = What to do** > **Reducer = How to do it** > **Store = Where data lives**

---

## ⚙️ What’s Implemented

- Redux Toolkit is used to simplify Redux setup.
- A counter example is built with increment/decrement logic.
- `createSlice()` handles state, actions, and reducer in one place.
- `configureStore()` creates the central Redux store.
- Type-safe hooks (`useAppSelector`, `useAppDispatch`) are used for interacting with state in components.
- Action payloads allow sending custom values (like incrementing by 5).

---

## 🚦 Redux Workflow (Step by Step)

1. A user interacts with the UI (e.g., clicks a button).
2. An action is **dispatched**.
3. The **reducer** receives the action and updates the state.
4. The updated state is stored in the **Redux store**.
5. The component re-renders using the updated state.

---

## 🧠 Important Notes

- Redux Toolkit supports writing “mutating” logic safely using **Immer** under the hood.
- TypeScript improves safety by defining types for state, actions, and hooks.
- Typed hooks (`useAppSelector`, `useAppDispatch`) avoid repetitive TypeScript code in components.
- Redux is useful when **many components need to share the same state**.

---

## 🔑 Keywords to Remember

- `Redux`, `Store`, `Action`, `Reducer`, `Dispatch`, `Payload`, `Selector`
- `createSlice`, `configureStore`, `Redux Toolkit`, `Typed Hooks`, `Immer`, `Flux`

---

## 🛠 What Is Redux?

- Redux is a tool that **manages data globally** for your app.
- It helps when many components need to **read or change the same data**.
- Redux Toolkit is an **easier and modern way** to use Redux.

---

## ⚙️ Redux Toolkit Project Setup

```bash
npm install @reduxjs/toolkit react-redux
```

### In `store.ts`:

```ts
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/task/taskSlice";

export const store = configureStore({
  reducer: {
    todo: taskReducer,
  },
});
```

### In `main.tsx`:

```tsx
import { Provider } from "react-redux";
import { store } from "./redux/store";

<Provider store={store}>
  <App />
</Provider>;
```

---

## 🔥 Create Your First Slice

A slice means:

- State
- Actions
- Reducers (functions to update the state)

### In `taskSlice.ts`:

```ts
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  filter: "all",
};

const taskSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
```

---

## 📤 How to Use It in a Component

### `useAppDispatch` and `useAppSelector` (Typed Hooks):

```ts
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "../store";

export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector: (state: RootState) => any) =>
  useSelector(selector);
```

### Example usage:

```tsx
const dispatch = useAppDispatch();
const tasks = useAppSelector((state) => state.todo.tasks);

dispatch(addTask({ title: "Learn Redux" }));
```

---

## ✅ Common Reducers in Redux

### 1. Add Task

```ts
addTask: (state, action) => {
  const newTask = {
    id: Date.now(),
    title: action.payload.title,
    isCompleted: false,
  };
  state.tasks.push(newTask);
};
```

---

### 2. Toggle Complete

```ts
toggleComplete: (state, action) => {
  const task = state.tasks.find((t) => t.id === action.payload);
  if (task) task.isCompleted = !task.isCompleted;
};
```

---

### 3. Delete Task

```ts
deleteTask: (state, action) => {
  state.tasks = state.tasks.filter((t) => t.id !== action.payload);
};
```

---

### 4. Filter Task by Priority

```ts
updateFilter: (state, action) => {
  state.filter = action.payload; // e.g., "high", "low", "all"
};
```

---

## 🔎 Selector Functions (To Filter Data)

Selectors help get filtered or modified data from Redux.

```ts
export const selectTasks = (state) => {
  const filter = state.todo.filter;
  if (filter === "all") return state.todo.tasks;
  return state.todo.tasks.filter((task) => task.priority === filter);
};
```

---

## 🔄 Extra Reducers (Respond to Other Slice’s Action)

If `userSlice` removes a user, update tasks to remove that user.

```ts
extraReducers: (builder) => {
  builder.addCase(removeUser, (state, action) => {
    state.tasks.forEach((task) => {
      if (task.assignedTo === action.payload) {
        task.assignedTo = null;
      }
    });
  });
};
```

---

## 🧠 Redux Concepts Simplified

| Term       | Simple Meaning                             |
| ---------- | ------------------------------------------ |
| `Store`    | Big container that holds your app's data   |
| `Slice`    | Small part of the store with its own logic |
| `Reducer`  | Function that changes state                |
| `Dispatch` | Tells Redux to update something            |
| `Selector` | Reads data from Redux                      |
| `Action`   | Description of what to do (e.g., add task) |

---

## 🔁 Redux Data Flow (Easy to Remember)

```
UI → dispatch(action) → reducer → update state → UI shows updated data
```

---

## 🌐 Redux + RTK Query Basics

RTK Query is used for **server-side data** like fetching from API.

### Create Base API:

```ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
    }),
    addTask: builder.mutation({
      query: (task) => ({
        url: "/tasks",
        method: "POST",
        body: task,
      }),
    }),
  }),
});
```

---

## 💡 Caching and Refetching

RTK Query **automatically caches** your data.

- No need to manage `loading` or `error` manually.
- You can also **refetch or invalidate** when needed.

---

## 🧾 Quick Summary Sheet

| Feature          | Redux Tool Used              |
| ---------------- | ---------------------------- |
| Store setup      | `configureStore()`           |
| State + actions  | `createSlice()`              |
| Dispatch actions | `dispatch(action)`           |
| Read data        | `useSelector()` or selectors |
| Add task         | `addTask()` reducer          |
| Update task      | `toggleComplete()`           |
| Delete task      | `deleteTask()`               |
| Filter task      | `updateFilter()`             |
| Server data      | RTK Query (GET, POST)        |
| Auto caching     | Built-in in RTK Query        |

---

## ✅ Conclusion

This README is now your full Redux playlist for:

- 🟢 Local Redux state (`createSlice`)
- 🟢 Shared state using store
- 🟢 Typed hooks with TypeScript
- 🟢 Server data using RTK Query
- 🟢 Extra reducers (multi-slice connection)

Next
👉 Async Thunks
👉 Pagination with Redux
👉 Authentication logic
👉 Middleware
