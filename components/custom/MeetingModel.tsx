import React, { ReactNode } from "react";
import {  Dialog,  DialogContent,  DialogDescription,  DialogHeader,  DialogTitle,  DialogTrigger,} from "@/components/ui/dialog";
import Image from "next/image";

interface MettingModelsPrpps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  buttonText?: string;
  handleClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  buttonIcon?: string;
  icon?: ReactNode;
}
function MeetingModel({isOpen,onClose,title,buttonText,icon,buttonIcon,handleClick,children,className,
}: MettingModelsPrpps) {
  return (
   
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-zinc-950 px-6 py-9 text-white">
         
          <h1 className=" text-2xl font-semibold ">{title}</h1>
          {children}

          <button onClick={handleClick} className="py-3 rounded-xl bg-blue-600">{buttonText || 'Scheedule Meeting'}
            {
                buttonIcon && ( <Image src={buttonIcon} alt="icon" width={20} height={20} />)
            }

            
          </button>
        </DialogContent>
      </Dialog>
 
  );
}

export default MeetingModel;
