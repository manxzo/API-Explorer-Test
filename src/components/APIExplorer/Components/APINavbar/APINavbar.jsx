import { Link } from "react-router";

const APINavbar = () => {
  return (
    <nav>
      <Link to="/api/query">API Form</Link>
      <Link to="/api/result/raw">API Raw Results</Link>
      <Link to="/api/result/ai">API AI Results</Link>
    </nav>
  );
};
export default APINavbar;
