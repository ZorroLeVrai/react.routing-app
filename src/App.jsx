import { NavLink, Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { BookRoutes } from "./pages/BookRoutes";
import { NotFound } from "./pages/NotFound";
import { useLocation } from "react-router-dom";
import { BookLayout } from "./pages/BookLayout";
import "./App.css";

export default function App() {
  const { state } = useLocation();

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink end to="/books">
              Books
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>{state ? `mydata = ${state.mydata}` : "No data"}</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
