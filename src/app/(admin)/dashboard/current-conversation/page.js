import Image from "next/image";
import Link from "next/link";
import React from "react";

const converationGridLayout = {
  display: "grid",
  gridTemplateColumns: "67% auto",
  gap: "32px",
};

const thead = ["Id And Name", "Subject", "Status", "Date"];

const users = [
  {
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
  },
  {
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
  },
  {
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
  },
];

const CurrentConversations = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold py-4">List Of Conversations</h2>
      <div style={converationGridLayout}>
        <div className="bg-white p-8">
          <table className="w-full">
            <thead>
              <tr>
                {thead.map((text, i) => (
                  <th key={i} className="th border border-b">
                    <div className="flex justify-center items-center gap-2">
                      <p className="text-center">{text}</p>
                      <span className="rotate-90 text-center text-[10px]">
                        {"<>"}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-xs">
              {users.map((user, i) => (
                <tr key={i} className="border border-b shadow">
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div>
                        <Image
                          src={user.id_name.profilePic}
                          alt="Profile pic"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div>
                        <p className="font-bold text-lg">
                          {user.id_name.displayName}
                        </p>
                        <p className="text-[#D0D0D0]">{user.id_name.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div>
                      <p className="font-bold text-lg">{user.subject.title}</p>
                      <p className="text-[#D0D0D0]">{user.subject.sub}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <div>
                      <p className="font-bold text-lg">{user.status.type}</p>
                      <p className="text-[#D0D0D0]">{user.status.sub}</p>
                    </div>
                  </td>
                  <td className="td text-[#4339F2]">{user.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="relative">
            <Image
              src={users[0].id_name.coverPhoto}
              alt="Cover photo"
              width={326}
              height={264}
            />
            <div className="absolute top-2 left-2">
              <div className="flex items-center gap-4">
                <p className="bg-[#FFF5CC] p-2 rounded-md">ID</p>
                <p className=" bg-[#CCF8FE] p-2 rounded-md">
                  {users[0].id_name.id}
                </p>
              </div>
            </div>
            <div className="absolute bottom-2 left-2">
              <div className="text-white p-2">
                <p className="text-lg font-bold">
                  {users[0].id_name.displayName}
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
              <p>{users[0].date}</p>
            </div>
            <div className="flex ic justify-between py-4">
              <p>Status: </p>
              <p>{users[0].status.type}</p>
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
                <Link href={"/dashboard/current-conversation/1"}>Answer</Link>
              </div>
              <div className="text-white bg-[#000000] shadow-lg px-6 py-3 rounded-lg">
                <Link href={"/dashboard/current-conversation"}>Answer</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentConversations;
