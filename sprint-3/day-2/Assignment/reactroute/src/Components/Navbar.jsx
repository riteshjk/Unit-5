import { Link } from "react-router-dom";

const links = [
  // Fix this links array, it's an array of objects {to: "", title: ""}
];

export const Navbar = () => {
  return (
    <>
    <Link to="/">HomePage</Link>
    <Link to="/products">ProductsPage</Link>
    {/* <Link to="/products/:id">ProductsDetailsPage</Link> */}


      <div style={{ display: "flex", justifyContent: "center" }}>
        {links.map((el) => {
          return (
            <Link key={el.to} style={{ padding: "10px" }} to={el.to}>
              {el.title}
            </Link>
          );
        })}
      </div>
    </>
  );
};
