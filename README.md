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
