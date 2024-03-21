"use client";

import React, { useEffect, useState } from "react";
import PopUpButton from "../PopUpButton/PopUpButton";
import EnableButton from "../EnableButton/EnableButton";
import { BiSolidEditAlt } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Calendar from "../Calendar/Calendar";
import Searchbox from "../../../../../../components/Searchbox/Searchbox";
import Popups from "../Popups/Popups";

const thead = [
  "",
  "First name",
  "Phone",
  "Date",
  "Atribute",
  "Mail",
  "Campaign",
  "Country",
  "Evaluation",
  "Edit",
  "Trash",
  "Options",
];

const ClientTable = () => {
  const [allClients, setAllClients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllClientsData = async (api) => {
      setLoading(true);
      try {
        const res = await fetch(api);
        const { data } = await res.json();
        setAllClients(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getAllClientsData("/api/data/clients/");
  }, []);

  return (
    <div className="bg-white rounded-lg p-8 my-8">
      <div>
        <h3 className="text-2xl text-[#39DE5D] font-bold">Data Client's</h3>
        <div className="flex items-center justify-between">
          <form className="flex items-center gap-4 my-4">
            <select
              name="status"
              id="status"
              className="text-[#39DE5D] p-2 border rounded-lg"
            >
              <option value="status">Status</option>
              <option value="status">Name</option>
            </select>
            <Calendar text={"Assign To"} />
            <Calendar text={"Evaluate As"} />
            <Searchbox />
          </form>
          <div className="bg-red-500 p-2 rounded-lg">
            <p className="text-[#FFFFFF]">Filter</p>
          </div>
        </div>
      </div>
      <div className="py-4">
        {loading ? (
          <p className="w-full text-center">Loading</p>
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  {thead.map((text, i) => (
                    <th key={i}>
                      <div className="py-4 text-[10px] flex justify-center items-center gap-2">
                        <p className="text-center">{text}</p>
                        <span className="rotate-90 text-center text-[8px]">
                          {"<>"}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allClients?.map((client, i) => (
                  <tr key={i}>
                    <td>
                      <PopUpButton id={client?._id} />
                      {/* Pop up windows  */}
                      <div id={client?._id} style={{ display: "none" }}>
                        <Popups client={client} />
                      </div>
                    </td>
                    <td className='text-left text-[#878790] py-4'>{client?.fullname}</td>
                    <td className='text-left text-[#878790] py-4'>{client?.phone}</td>
                    <td className='text-left text-[#878790] py-4'>{client?.date}</td>
                    <td className='text-left text-[#878790] py-4'>{client?.attribution}</td>
                    <td className='text-left text-[#878790] py-4'>{client?.email}</td>
                    <td className='text-left text-[#878790] py-4'>{client?.campaignBy}</td>
                    <td className='text-left text-[#878790] py-4'>{client?.countryFrom}</td>
                    <td className='text-left text-[#878790] py-4'>
                      {true ? <EnableButton /> : <EnableButton />}
                    </td>
                    <td className='text-left text-[#878790] py-4'>
                      <button
                        type="button"
                        className="w-full flex justify-center items-center"
                      >
                        <BiSolidEditAlt
                          style={{
                            width: 32,
                            height: 32,
                            color: "#5D5FEF",
                            backgroundColor: "rgb(93, 95, 239, 0.1)",
                            padding: 8,
                            borderRadius: "50%",
                          }}
                        />
                      </button>
                    </td>
                    <td className='text-left text-[#878790] py-4'>
                      <button
                        type="button"
                        className="w-full flex justify-center items-center"
                      >
                        <FaTrash
                          style={{
                            width: 32,
                            height: 32,
                            color: "#FF0000",
                            backgroundColor: "rgb(255, 0, 0, 0.1)",
                            padding: 8,
                            borderRadius: "50%",
                          }}
                        />
                      </button>
                    </td>
                    <td className='text-left text-[#878790] py-4'>
                      <button
                        type="button"
                        className="w-full flex justify-center items-center"
                      >
                        <BsThreeDotsVertical
                          style={{ width: 24, height: 24, color: "#DADADA" }}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
      <div className="flex justify-center items-center gap-4">
        <p className="text-sm">Page</p>
        <span className="text-[#5D5FEF] text-sm">{"<"}</span>
        <div className="w-6 h-6 bg-[#FF4B26] rounded-full flex justify-center items-center shadow-lg">
          <p className="text-sm text-[#FFFFFF]">1</p>
        </div>
        <span className="text-[#5D5FEF] text-sm">{">"}</span>
        <div className="flex gap-2 items-center border-b border-b-[#5D5FEF]">
          <p className="text-sm">30</p>
          <span className="text-sm rotate-90">{">"}</span>
        </div>
      </div>
    </div>
  );
};

export default ClientTable;
