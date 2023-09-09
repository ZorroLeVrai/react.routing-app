import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function NotFound() {
  const navigateFunction = useNavigate();
  useEffect(() => {
    setTimeout(() => navigateFunction("/", { replace: true }), 1000);
  }, []);
  return <h1>NotFound</h1>;
}
