import "./breadCrumb.css";

const BreadCrumb = ({ title, categorie }) => {
  return (
    <div className="bread-crumb-content">
      <h1 className="bread-crumb-title"> {title}</h1>
      <p className="bread-crumb">
        <a href="/" style={{ textDecoration: "none" }}>
          Home
        </a>
        : {categorie} : <span>{title}</span>{" "}
      </p>
    </div>
  );
};

export default BreadCrumb;
