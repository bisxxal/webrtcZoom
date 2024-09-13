'use client';
import { cn } from '@/lib/utils';
interface HomeCardProps {
  className?: string;
  icon:React.ReactNode ;
  title: string;
  description: string;
  handleClick?: () => void ;
  date?: string;
  isPreviousMeeting?: boolean;
  link?:string
}

function Card({ className, icon, title, description, handleClick ,link,  date,
  isPreviousMeeting}: HomeCardProps) {
    return (
        <section
          className={cn(
            'bg-orange-500 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer',
            className
          )}
          onClick={handleClick}
        >
          <div className="rounded-[10px]"> 
            {icon}
          </div>
          
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-lg font-normal">{description}</p>
          </div>
        </section>
      );
}

export default Card