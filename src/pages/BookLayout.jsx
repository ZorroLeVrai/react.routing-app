import { Outlet, Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export function BookLayout() {
  const [searchParams, setSearchParams] = useSearchParams({ myparam: 42 });
  const number = searchParams.get("myparam") ?? 99;
  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to="/books/special?param1=42#intro" state={{ mydata: "data" }}>
        Special Book
      </Link>
      <br />
      <Link to={`/books/${number}`}>Book {number}</Link>
      <br />
      <Link to="/books/new">New Book</Link>
      <Outlet context={{ hello: "World" }} />
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ myparam: e.target.value })}
      />
    </>
  );
}
