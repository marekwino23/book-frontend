import { Link } from "react-router-dom"

const Home = () => {
    return(
      <div className="home-box">
        <Link to="/add-book">Dodaj książkę</Link>
        <Link to="/books">Spis książek</Link>
      </div>
    )
};

export default Home;
