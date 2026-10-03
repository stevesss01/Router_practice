import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="not-found__btn">Go Back Home</Link>
    </section>
  );
};

export default NotFound;
