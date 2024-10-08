import {
  IndianRupeeIcon,
  User2Icon,
  GraduationCapIcon,
  MapPinIcon,
  LanguagesIcon,
  PlayIcon,
  CalendarIcon,
  HeadsetIcon,
  FileIcon,
  LockIcon,
  CoinsIcon,
} from'lucide-react'
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ConfettiButton } from "@/components/magicui/confetti";
import { useState } from 'react';

let Tupple = ({
  name,
  gender,
  age,
  salary,
  location,
  language,
  education,
  skill,
  experience,
  assetsDcos,
  unlocked,
}) => {

  const formatted = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(salary);
  


  const [lck, setUnlock ] = useState(true)
  return (
    <div className=' border min-h-[80px] bg-background rounded-2xl py-3'>
      <div className='flex items-center justify-between px-3 pb-4 border-b '>
        <div className=''>
          <div className='flex items-center gap-2 '>
          <div>
         <Image alt={name} className="" width={60} height={60} src={gender =="male" ? "/man.png" :"/lady.png" } />
        </div>
            <div>
              <div className='text-lg font-medium md:text-xl'>{name}</div>
              <div className='text-sm text-muted-foreground'>
                {gender} · {age}
              </div>
            </div>
          </div>
        </div>

        <div className='pr-3'>
          {unlocked ? (
            <Badge className={'bg-purple-50 text-purple-600'}>Unlocked</Badge>
          ) : null}
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4 p-3 border-b lg:gap-8 lg:flex lg:items-center text-muted-foreground '>
        <div className='flex items-center gap-2 '>
          <div className='flex items-center justify-center rounded-full bg-teal-50 size-8'>
            <MapPinIcon size={18} className='text-teal-600 ' />
          </div>

          <div className='text-sm lg:text-base'>{location}</div>
        </div>
        
        <div className='flex items-center gap-2 '>
          <div className='flex items-center justify-center rounded-full bg-teal-50 size-8'>
            <CoinsIcon size={18} className='text-teal-600 ' />
          </div>
          <div className='text-sm lg:text-base'>{salary?formatted:NA}</div>
        </div>

        <div className='flex items-center gap-2 '>
          <div className='flex items-center justify-center rounded-full bg-teal-50 size-8'>
            <LanguagesIcon size={18} className='text-teal-600 ' />
          </div>
          <div className='text-sm lg:text-base'>{language}</div>
        </div>
        <div className='flex items-center gap-2 '>
          <div className='flex items-center justify-center rounded-full bg-teal-50 size-8'>
            <GraduationCapIcon size={18} className='text-teal-600' />
          </div>
          <div className='text-sm lg:text-base ordinal'>{education}</div>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-4 px-3 pb-6 mt-6 border-b md:grid-cols-2'>
        <div className='md:border-r '>
          <div className='text-sm text-muted-foreground '>SKILLS</div>
          <ul className='flex items-center gap-2 mt-3 '>
            {skill.slice(0, 3)?.map((s, index) => {
              return (
                <li key={index}>
                  <Badge
                    variant='outline'
                    className={'bg-muted rounded-sm font-normal'}>
                    {s}
                  </Badge>
                </li>
              );
            })}
          </ul>
        </div>

        {assetsDcos.length > 0 ? (
          <div>
            <div className='text-sm text-muted-foreground '>ASSETS & DOCS</div>
            <ul className='flex items-center gap-2 mt-3 '>
              {assetsDcos.slice(0, 3)?.map((a, index) => {
                return (
                  <li key={index}>
                    <Badge
                      variant='outline'
                      className={'bg-muted rounded-sm font-normal'}>
                      {a}
                    </Badge>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>

      <div className='flex items-center justify-between py-3 mt-3'>
        <div className='flex items-center gap-2 pl-3 md:hidden'>
          <Button variant='outline' size='icon'>
            <PlayIcon size={16} className='' />
          </Button>
          <Button variant='outline' size='icon'>
            <CalendarIcon size={16} className='' />
          </Button>
        </div>
        <div className='items-center hidden gap-2 pl-3 md:flex'>
          <Button variant='outline' size='sm'>
            <PlayIcon size={16} className='mr-2' /> Audio ·
            <em className='not-italic text-green-500 '> 2.31</em>
          </Button>

          <Button variant='outline' disabled={lck} size='sm'>
            <CalendarIcon size={16} className='mr-2' /> Invite
          </Button>
        </div>
        <div className='flex items-center gap-2 pr-3 '>
          <Button variant='outline'disabled={lck} size='sm'>
            <FileIcon size={16} className='md:mr-2' />
            <div className='hidden md:block'>View Resume</div>
          </Button>
          <Button
          variant="outline"
            disabled={lck}
            
            size='sm'>
            <HeadsetIcon size={16} className='md:mr-2' />
            <div className='hidden md:block'>Call</div>
          </Button>
      
          {lck ?  (
            <Button className='bg-blue-600 hover:bg-blue-700' size='sm' onClick={()=>{
              setUnlock(false)
            }}>
              <LockIcon size={16} className='mr-2' />
              Unlock
            </Button>
          ):null}
        </div>
      </div>
    </div>
  );
};

export default Tupple;
