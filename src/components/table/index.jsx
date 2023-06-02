import "./table.css";

const Table = ({ keys, values }) => {
  return (
    <div className="product-table-data">
      {keys.map((e, index) => {
        return (
          <div key={index} className="row">
            <p className="key">{e}:</p>
            <p className="value">{values[index]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
