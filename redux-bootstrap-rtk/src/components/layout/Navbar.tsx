import { TbCloverFilled } from "react-icons/tb";
import { Link } from "react-router";
import { ModeToggle } from "../mode-toggler";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between gap-3">
      <div>
        <Link to="/" className="flex items-center">
          <TbCloverFilled size={28} className="text-green-500" />
          <span className="font-bold ml-1">Task</span>Master
        </Link>
      </div>
      <div className="flex gap-8">
        <Link to="/tasks">Tasks</Link>
        <Link to="/users">Users</Link>
      </div>
      <div>
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
};

export default Navbar;
