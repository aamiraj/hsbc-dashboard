import React from "react";
import NegosiationTabLinks from "../negosiation/components/NegosiationTabLinks";
import Cryptocurrencies from "../negosiation/sections/Cryptocurrencies";

const Personalisation = () => {
  const PARENT_CLASS = "personalisation";
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

export default Personalisation;
