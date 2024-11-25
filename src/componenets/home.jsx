import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3>Welcome to the home page</h3>
      <p>
        Go to <Link to="/About">about</Link> page
      </p>
    </div>
  );
};

export default Home;
