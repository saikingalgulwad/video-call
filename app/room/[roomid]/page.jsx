"use client"
import useUser from '@/hooks/useUser';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react'

import { v4 as uuid } from "uuid";
import { use } from "react";

function page({params}) {

    const {fullname}=useUser();
    const { roomid } = use(params);
    const roomID = roomid;
    let myMeeting = async (element) => {

        // generate Kit Token
        const appID = 1465975814;
        const serverSecret = "7c2b7eaa63782cf5ab295c615869c8cb";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,uuid(),  fullname || "user",  720);
       
        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
               container: element,
               sharedLinks: [
                 {
                   name: 'Shareable Link',
                   url:
                    window.location.protocol + '//' + 
                    window.location.host + window.location.pathname +
                     '?roomID=' +
                     roomID,
                 },
               ],
               scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
               },
          });
         };
   
  return (
    <div
      className="w-full h-screen"
      ref={myMeeting}
     
    ></div>
  )
}

export default page
