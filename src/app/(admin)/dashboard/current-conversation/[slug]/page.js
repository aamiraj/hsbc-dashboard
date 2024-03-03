import Image from "next/image";
import React from "react";

const converationGridLayout = {
  display: "grid",
  gridTemplateColumns: "67% auto",
  gap: "32px",
};

const ToUser = {
  id_name: {
    id: "992334",
    displayName: "Jel Chibuzo",
    profilePic: "/assets/dummyPic.png",
    coverPhoto: "/assets/Image.png",
  },
  subject: {
    title: "Cash withdraw",
    sub: "Projects",
  },
  status: {
    type: "Farm",
    sub: "Finished Projects",
  },
  date: "2024-01-12 05:27:47",
  messages: [
    {
      messageFrom: false,
      body: "Hello Mr Torti, Can you validate the cash withdrawal I requested in the app? When will this amount be present in our bank account? Sincerel",
      date: "11:45 AM",
    },
  ],
  lastActive: "45 minutes",
};

const FromUser = {
  messages: [
    {
      messageFrom: true,
      body: "Agreed",
      date: "11:52 AM",
    },
  ],
};

const SingleConversation = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold py-4">List Of Conversations</h2>
      <div style={converationGridLayout}>
        <div className="bg-white p-8 relative">
          <div className="flex items-center justify-between gap-8 py-4 border-b">
            <Image
              src={ToUser.id_name.profilePic}
              alt="Cover photo"
              width={48}
              height={48}
            />
            <div className="flex flex-col gap-1 justify-center items-center">
              <p className="text-lg font-bold">{ToUser.id_name.displayName}</p>
              <p>last seen {ToUser.lastActive} ago</p>
            </div>
            <div className="rotate-90">
              <Image
                src={"/assets/options.svg"}
                alt="Cover photo"
                width={24}
                height={24}
                style={{ width: "24px", height: "24px" }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-start items-start gap-2 my-4">
              <div>
                <Image
                  src={ToUser.id_name.profilePic}
                  alt="Cover photo"
                  width={32}
                  height={32}
                />
              </div>
              <div
                className="px-2 rounded-lg w-1/2"
                style={
                  ToUser.messages[0].messageFrom
                    ? { backgroundColor: "#007AFF" }
                    : { backgroundColor: "#F2F2F7" }
                }
              >
                <div className="flex flex-col gap-1 ">
                  <p className="font-bold text-base">
                    {ToUser.id_name.displayName}
                  </p>
                  <p className=" text-sm">{ToUser.messages[0].body}</p>
                  <p className="text-[#666666] text-xs">
                    {ToUser.messages[0].date}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="w-max px-2 rounded-lg self-end "
              style={
                FromUser.messages[0].messageFrom
                  ? { backgroundColor: "#007AFF" }
                  : { backgroundColor: "#F2F2F7" }
              }
            >
              <div className="flex flex-col gap-1 text-white">
                <p className="text-sm">{FromUser.messages[0].body}</p>
                <p className="text-xs">{FromUser.messages[0].date}</p>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-around border-t py-4 absolute bottom-0 left-0">
            <div className="flex justify-center items-center gap-2">
              <Image
                src={"/assets/smiley.svg"}
                alt="Cover photo"
                width={16}
                height={16}
              />
              <p>Sart typing...</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Image
                src={"/assets/Camera.svg"}
                alt="Cover photo"
                width={16}
                height={16}
              />
              <Image
                src={"/assets/pin.svg"}
                alt="Cover photo"
                width={16}
                height={16}
              />
              <Image
                src={"/assets/at.svg"}
                alt="Cover photo"
                width={16}
                height={16}
              />
              <Image
                src={"/assets/send.svg"}
                alt="Cover photo"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="relative">
            <Image
              src={ToUser.id_name.coverPhoto}
              alt="Cover photo"
              width={326}
              height={264}
            />
            <div className="absolute top-2 left-2">
              <div className="flex items-center gap-4">
                <p className="bg-[#FFF5CC] p-2 rounded-md">ID</p>
                <p className=" bg-[#CCF8FE] p-2 rounded-md">
                  {ToUser.id_name.id}
                </p>
              </div>
            </div>
            <div className="absolute bottom-2 left-2">
              <div className="text-white p-2">
                <p className="text-lg font-bold">
                  {ToUser.id_name.displayName}
                </p>
                <p className="text-md font-bold">
                  Send your message!
                  <span className="font-normal text-base">
                    “Wee need to talk about Investation you give.....
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between py-4">
              <p>Date and hour: </p>
              <p>{ToUser.date}</p>
            </div>
            <div className="flex ic justify-between py-4">
              <p>Status: </p>
              <p>{ToUser.status.type}</p>
            </div>
            <div className="flex items-center justify-center gap-4 my-8">
              <div>
                <Image
                  src={"/assets/chat.svg"}
                  alt="chat icon"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <Image
                  src={"/assets/video.svg"}
                  alt="video icon"
                  width={48}
                  height={48}
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="text-white bg-[#39DE5D] shadow-lg px-6 py-3 rounded-lg">
                <p>Answer</p>
              </div>
              <div className="text-white bg-[#000000] shadow-lg px-6 py-3 rounded-lg">
                <p>Back</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleConversation;
