"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";


export default function Home() {
  const [fullname, setFullname] = useState("");
  const [roomID, setRoomID] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Any additional effects or cleanup logic can go here
  }, []);

  return (
    <div className="w-full h-screen bg-gray-900 text-white">
      <section className="flex flex-col items-center justify-center h-full px-4">
        <div className="flex flex-col items-center gap-8">
          <Image src="/logo.svg" alt="logo" width={150} height={150} className="mb-4" />

          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-center">
            Connect Seamlessly with Saiking
          </h1>

          <p className="max-w-md text-center text-gray-300">
            "Your world, just a click away,Where ideas meet, night or day.Crystal-clear, in every way,Connect, create, and start today!"
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-md">
            <input
              type="text"
              id="name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full px-4 py-2 rounded-md border-none focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
              placeholder="Enter your name"
            />
           
            <input
              type="text"
              id="roomid"
              value={roomID}
              onChange={(e) => setRoomID(e.target.value)}
              className="w-full px-4 py-2 rounded-md border-none focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
              placeholder="Enter room ID"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-md">
            <button
              className={`w-full px-6 py-3 rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed`}
              onClick={() => router.push(`/room/${roomID}`)}
              disabled={!roomID}
            >
              Join Meeting
            </button>

            <button
              className="w-full px-6 py-3 rounded-md font-medium text-white bg-green-600 hover:bg-green-700"
              onClick={() => router.push(`/room/${uuid()}`)}
            >
              Create Meeting
            </button>
            
          </div>
        </div>
      </section>
    </div>
  );
}
