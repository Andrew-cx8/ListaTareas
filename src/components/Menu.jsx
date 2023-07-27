import { Link, Outlet } from "react-router-dom";
export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tasks">Tareas</Link>
        </li>
        <li>
          <Link to="/aboutUs">Sobre Nosotros</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
}