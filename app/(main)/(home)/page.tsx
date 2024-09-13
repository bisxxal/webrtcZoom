import MeetingTypeList from '@/components/custom/MeetingTypeList';
function page() {
  const now = new Date();

   
 
const timeIST = now.toLocaleTimeString('en-US', { 
  timeZone: 'Asia/Kolkata',  
  hour: '2-digit', 
  minute: '2-digit' 
});
 
const dateIST = new Intl.DateTimeFormat('en-US', { 
  timeZone: 'Asia/Kolkata',  
  dateStyle: 'full' 
}).format(now);


  return (
    <section className="flex size-full flex-col gap-5 text-white">
    <div className="h-[300px] w-full rounded-[20px] bg-hero ">
      <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
        <h2 className="max-w-[273px] rounded p`y-2 text-center font-normal">
          Upcoming Meeting at: 12:30 PM
        </h2>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-extrabold lg:text-7xl">{timeIST}</h1>
          <p className="text-lg font-medium text-indigo-50 lg:text-2xl">{dateIST}</p>
        </div>
      </div>
    </div>

    <MeetingTypeList />
  </section>
  )
}

export default page