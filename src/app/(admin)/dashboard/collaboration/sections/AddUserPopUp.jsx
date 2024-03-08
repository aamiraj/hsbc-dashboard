import React from "react";
import { RxCross1 } from "react-icons/rx";
import TextInput from "../../client-prospect/components/TextInput/TextInput";
import PhotoInput from "../../client-prospect/components/PhotoInput/PhotoInput";

const workTime = [
  {
    day: "Monday",
    firstShift: "09:00 - 13:00",
    secondShift: "14:00 - 18:00",
  },
  {
    day: "Tuesday",
    firstShift: "09:00 - 13:00",
    secondShift: "14:00 - 18:00",
  },
  {
    day: "Wednesday",
    firstShift: "09:00 - 13:00",
    secondShift: "14:00 - 18:00",
  },
  {
    day: "Thursday",
    firstShift: "09:00 - 13:00",
    secondShift: "14:00 - 18:00",
  },
  {
    day: "Friday",
    firstShift: "09:00 - 13:00",
    secondShift: "14:00 - 18:00",
  },
  {
    day: "Satureday",
    firstShift: "09:00 - 13:00",
    secondShift: "14:00 - 18:00",
  },
  {
    day: "Sunday",
    firstShift: "09:00 - 13:00",
    secondShift: "14:00 - 18:00",
  },
];

const AddUserPopUp = () => {
  const handleClosePopUp = () => {
    const popUp = document.getElementById("addUserPopUp");
    popUp.style.display = "none";
  };
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-50 z-10"></div>
      <div className="w-1/2 mx-auto h-max p-12 bg-white rounded-3xl absolute top-32 left-0 right-0 bottom-0 z-20">
        <button type="button" onClick={handleClosePopUp}>
          <RxCross1 />
        </button>
        <h2 className="text-center text-4xl p-2 my-4">Add User</h2>
        <div>
          <div className="grid grid-cols-2 gap-4">
            <TextInput id={"surname"} label={"Surname"} />
            <TextInput
              id={"ipAddress"}
              label={"Access is followed from the IP Adress"}
            />
            <TextInput id={"firstName"} label={"First Name"} />
            <TextInput id={"status"} label={"Status"} />
            <TextInput id={"email"} label={"Email (Login Id)"} type={"email"} />
            <TextInput
              id={"birthdate"}
              label={"Birth Date"}
              placeholder={"dd/mm/yyyy"}
            />
            <TextInput
              id={"newPassword"}
              label={"New Password"}
              type={"password"}
            />
            <TextInput id={"mainAddress"} label={"Main Address"} />
            <TextInput
              id={"repeatPassword"}
              label={"Repeat The New Password"}
              type={"password"}
            />
            <TextInput id={"phone"} label={"Phone"} type={"phone"} />
          </div>
          <div>
            <p className="text-lg">Photo</p>
            <PhotoInput />
          </div>
          <div className="bg-[#39DE5D] text-white rounded-2xl p-10 my-4">
            <h4 className="text-center font-bold py-4">Work Time</h4>
            <div className="w-[67%] mx-auto flex flex-col gap-4">
              {workTime.map((time, i) => (
                <div key={i} className="grid grid-cols-3 gap-2">
                  <p>{time.day}</p>
                  <p className="rounded-md text-center px-2 py-0.5 border border-white">
                    {time.firstShift}
                  </p>
                  <p className="rounded-md text-center px-4 py-0.5 border border-white">
                    {time.secondShift}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="border-2 border-[#0F993E] rounded-2xl p-10 my-4">
            <h2 className="text-2xl text-center py-4">
              Authorize access to the website
            </h2>
            <p className="text-center py-4">
              By default, visitors do not see the website. Click the button
              above to send a customer a welcome message with an encrypted link
              to view the website.
            </p>
            <div className="flex items-center gap-4 justify-center py-4">
              <button
                type="butotn"
                className="px-6 py-4 rounded-2xl bg-[#39DE5D] text-white"
              >
                Get an encrypted link to navigate the site
              </button>
              <button
                type="butotn"
                className="px-6 py-4 rounded-2xl border-2 border-[#0F993E] text-black"
              >
                Send a welcome link to view the website
              </button>
            </div>
          </div>
          <div>
            <p>
              The Restricted Access button to enable/disable user access
              rules. The Allow Access button allows the user to log in from a
              new device or web browser. To allow the user to log in from a new
              browser or device, they must enable restricted access. The user at
              this time should be logged out. Once the user logs in, they will
              only be able to log in from one device and one browser.
            </p>
            <div className="flex items-center gap-4 justify-center py-4">
              <button
                type="butotn"
                className="px-8 py-2 rounded-lg bg-[#39DE5D] text-white"
              >
                Add
              </button>
              <button
                type="butotn"
                className="px-8 py-2 rounded-lg bg-black text-white"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserPopUp;
