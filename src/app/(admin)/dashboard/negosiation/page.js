import React from "react";
import NegosiationTabLinks from "./components/NegosiationTabLinks";
import Cryptocurrencies from "./sections/Cryptocurrencies";

const Negosiation = () => {
  const PARENT_CLASS = "negosiation";
  return (
    <div className="p-8">
      <NegosiationTabLinks parentClass={PARENT_CLASS} />
      <div>
        <div
          id="cryptocurrencies2"
          className={`tabcontent ${PARENT_CLASS}`}
          style={{ display: "block" }}
        >
          <Cryptocurrencies />
        </div>
        <div
          id="sharesAndStocks"
          className={`tabcontent ${PARENT_CLASS}`}
          style={{ display: "none" }}
        >
          <Cryptocurrencies />
        </div>
        <div
          id="preciousMetals"
          className={`tabcontent ${PARENT_CLASS}`}
          style={{ display: "none" }}
        >
          <Cryptocurrencies />
        </div>
        <div
          id="indexws"
          className={`tabcontent ${PARENT_CLASS}`}
          style={{ display: "none" }}
        >
          <Cryptocurrencies />
        </div>
      </div>
    </div>
  );
};

export default Negosiation;
