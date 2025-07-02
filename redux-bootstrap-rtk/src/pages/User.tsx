import { Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/features/hook";
import { removeUser, selectUsers } from "@/redux/features/task/userSlice";
import { AddUserModal } from "@/components/module/users/AddUserModal";
// import { removeUser, selectUsers } from "@/redux/features/user/userSlice";
// import { AddUserModal } from "@/components/module/users/AddUserModal"; // ✅ New

const User = () => {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end mb-4">
        <AddUserModal />
      </div>

      <div className="flex flex-wrap gap-5">
        {users.map((user) => (
          <div
            key={user.id}
            className="border border-green-600 px-8 py-6 rounded-md flex justify-between items-center min-w-[200px]"
          >
            <p className="text-white font-medium">{user.name}</p>
            <Trash2
              onClick={() => dispatch(removeUser(user.id))}
              className="text-red-500 cursor-pointer ml-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
