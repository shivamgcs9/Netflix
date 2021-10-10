import "../../app.scss";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/list/List";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {/* <Featured type="movie" /> */}
      <Featured />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
