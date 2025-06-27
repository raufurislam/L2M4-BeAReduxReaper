import { TbCloverFilled } from "react-icons/tb";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto px-5 h-16 flex items-center gap-3">
      <Link to="/" className="flex items-center">
        <TbCloverFilled size={28} className="text-green-500" />
        <span className="font-bold ml-1">Task</span>Master
      </Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

export default Navbar;
