"use client";

import Image from "next/image";

import { cn } from "@/lib/utils"; 
import React from "react";
import { FaRegCopy } from "react-icons/fa";


interface MeetingCardProps {
  title: string;
  date: string;
  icon: React.ReactNode;
  isPreviousMeeting?: boolean;
  buttonIcon1?: React.ReactNode;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}
export const avatarImages = [
    '/images/avatar-1.jpeg',
    '/images/avatar-2.jpeg',
    '/images/avatar-3.png',
    '/images/avatar-4.png',
    '/images/avatar-5.png',
  ];
const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => { 

  return (
    <section className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-zinc-900 px-5 py-8 xl:max-w-[568px]">
      <article className="flex flex-col gap-5">
       
        {
            icon 
        }
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-base font-normal">{date}</p>
          </div>
        </div>
      </article>
      <article className={cn("flex justify-center relative", {})}>
        <div className="relative flex w-full max-sm:hidden">
          {avatarImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="attendees"
              width={40}
              height={40}
              className={cn("rounded-full", { absolute: index > 0 })}
              style={{ top: 0, left: index * 28 }}
            />
          ))}
          <div className="flex-center absolute left-[136px] size-10 rounded-full border-[5px] border-dark-3 bg-dark-4">
            +5
          </div>
        </div>
        {!isPreviousMeeting && (
          <div className="flex gap-2">
            <button onClick={handleClick} className="gap-2 rounded flex items-center justify-center whitespace-nowrap bg-blue-500 px-6">
              {buttonIcon1}
              {buttonText}
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(link);
                
              }}
              className="bg-zinc-700 rounded flex items-center justify-center whitespace-nowrap gap-2 px-6"
            >
            <FaRegCopy className="text-xl" /> Copy Link
            </button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;