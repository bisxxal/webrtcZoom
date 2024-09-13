'use client'
import { IoAddOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import  Card from "./Card";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MeetingModel from "./MeetingModel";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import ReactDatePicker from 'react-datepicker';
const initialValues = {
  dateTime: new Date(),
  description: '',
  link: '',
};
function MeetingTypeList() {
  const router = useRouter()
  const [meetingState, setMeetingState] = useState<'isInstantMeeting'| 'isJoiningMeeting'| 'isScheduleMeeting'| undefined >(undefined);
  const [values, setValues] = useState(initialValues);
  const [callDetail, setCallDetail] = useState<Call >();
  const {user} = useUser();
  const client = useStreamVideoClient();

  const createMeeting = async()=>{  
    if(!client || !user) return;
    try {
      const id = crypto.randomUUID();
      const call = client.call('default', id);
      if(!call) return;

      const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();     
      const description = values.description || 'Instant Meeting';

      await call.getOrCreate({
        data:{
          starts_at: startsAt,
         custom:{
           description
         }
        }
       })
      setCallDetail(call);

      if(!values.description){
        router.push(`/metting/${call.id}`);
      }
      
    } catch (error) {
       
    }
  }
  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/metting/${callDetail?.id}`;

  return (
    <section className=" grid grid-cols-1 gap-5 md:grid-cols xl:grid-cols-4 ">

       <Card
        icon= {<IoAddOutline  className=" text-4xl bg-[#ffffff5c] rounded-md  "/>}
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState('isInstantMeeting')}
      />

      <Card
        icon={<IoPersonAddOutline className=" p-[5px] text-4xl bg-[#ffffff5c] rounded-md  "/>}
        title="Join Meeting"
        description="via invitation link"
        className="bg-blue-600"
         handleClick={() => setMeetingState('isJoiningMeeting')}
      />
      <Card
        icon={<CiCalendar className=" p-1 text-4xl bg-[#ffffff5c] rounded-md  "/>}
        title="Schedule Meeting"
        description="Plan your meeting"
        className="bg-purple-600"
         handleClick={() => setMeetingState('isScheduleMeeting')}
      />
      <Card
        icon={<IoVideocamOutline className=" p-1 text-4xl bg-[#ffffff5c] rounded-md  " />}
        title="View Recordings"
        description="Meeting Recordings"
        className="bg-yellow-600"
         handleClick={() => router.push('/recordings')}
      />
 
{!callDetail ? (
        <MeetingModel
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => setMeetingState(undefined)}
          title="Create Meeting"
          handleClick={createMeeting}
        >
          <div className="flex flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-sky-2">
              Add a description
            </label>
            <Textarea
              className="border-none bg-zinc-900 focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <div className="flex w-full flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-sky-2">
              Select Date and Time
            </label>
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date) => setValues({ ...values, dateTime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full rounded bg-zinc-900 p-2 focus:outline-none"
              
            />
          </div>
        </MeetingModel>
      ) : (
        <MeetingModel
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => setMeetingState(undefined)}
          title="Meeting Created"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink); 
          }} 
          buttonIcon="/icons/copy.svg"
          className="text-center"
          buttonText="Copy Meeting Link"
        />
      )}

      <MeetingModel
        isOpen={meetingState === 'isJoiningMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Type the link here"
        className="text-center"
        buttonText="Join Meeting"
        handleClick={() => router.push(values.link)}
      >
        <Input
          placeholder="Meeting link"
          onChange={(e) => setValues({ ...values, link: e.target.value })}
          className="border-none bg-zinc-900 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </MeetingModel>

      <MeetingModel
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
     <MeetingModel
      isOpen={meetingState === 'isInstantMeeting'}
      onClose={() => setMeetingState(undefined)}
      title="Start an Instant Meeting"
      className="text-center"
      buttonText="Start Meeting"
      handleClick={createMeeting}
    />
    
    </section>
  )
}

export default MeetingTypeList