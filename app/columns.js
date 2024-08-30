'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';
import { MoreHorizontalIcon, PhoneIcon, UnlockIcon,ArrowUpDown, VoicemailIcon, MicIcon, FileIcon, MessageCircleIcon } from 'lucide-react';
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox"


const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: 'Avatar',
    cell: ({ row }) => {
      

      return (
        <div>
         <Image alt={row.original.first_name} className="" width={60} height={60} src={row.original.gender =="male"? "/man.png":"/lady.png"} />
        </div>
      );
    },
  },
  {
    header: 'Candidate',
    cell: ({ row }) => {
      function randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      let candidate = row.original;
      function cap(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      return (
        <div>
          <div className='text-lg font-medium '>
            {candidate.first_name} {candidate.last_name}
          </div>
          <div className=' text-muted-foreground'>
            {randomIntFromInterval(25, 44)} · {cap(candidate.gender)} · {candidate.qualification_label}
            
          </div>
          <div className='mt-2 text-muted-foreground'>
            {candidate.locality} 
            
          </div>

        </div>
      );
    },
  },
  {
    accessorKey: 'gender',
    header: 'Gender',
  },
  {
    accessorKey: 'qualification_label',
    header: 'Qualification',
  },

  {
    accessorKey: 'locality',
    header: 'Locale',
  },
  {
    header: 'Current Salary',
    cell: ({ row }) => {
      let salary = row.original.current_salary;
      const formatted = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
      }).format(salary);

      return <div>{salary ? formatted : 'NA'}</div>;
    },
  },
  {
    header: 'Language',
    cell: ({ row }) => {
      let langs = row.original.language_value_array;

      let l = langs.length;

      let j = l > 2 ? l - 2 : null;

      return (
        <ul
          key={row.original.id}
          className='flex flex-wrap items-center gap-2 max-w-[200px] '>
          {langs.slice(0, 2).map((lang, index) => {
            return (
              <li
                className='px-2 py-1 border rounded-lg bg-muted text-muted-foreground w-fit'
                key={index}>
                {lang}
              </li>
            );
          })}
          {j != null ? (
            <li className=' text-muted-foreground'>+{j} more</li>
          ) : null}
        </ul>
      );
    },
  },
  {
    header: 'Skills',
    cell: ({ row }) => {
      let skills = row.original.skill_values_array;

      let l = skills.length;

      let j = l > 2 ? l - 2 : null;
      return (
        <ul key={row.original.id} className='flex flex-wrap items-center gap-2 max-w-[200px]'>
          {skills.slice(0, 2).map((skill, index) => {
            return (
              <li
                className='px-2 py-1 border rounded-lg bg-muted text-muted-foreground w-fit'
                key={index}>
                {skill}
              </li>
            );
          })}
          {j != null ? (
            <li className=' text-muted-foreground'>+{j} more</li>
          ) : null}
        </ul>
      );
    },
  },
  {
    header: 'Assets',
    cell: ({ row }) => {
      let assets = row.original.assets_array;
      let l = assets.length;
      let j = l > 2 ? l - 2 : null;
      return (
        <ul key={row.original.id} className='flex flex-wrap items-center gap-2 max-w-[160px]'>
          {assets.slice(0, 2).map((asset, index) => {
            return (
              <li
                className='px-2 py-1 border rounded-lg bg-muted text-muted-foreground w-fit'
                key={index}>
                {asset}
              </li>
            );
          })}
          {j != null ? (
            <li className=' text-muted-foreground'>+{j} more</li>
          ) : null}
        </ul>
      );
    },
  },
  {
    header: 'Actions',
    cell: ({ row }) => {
      return (
        <div className='flex items-center gap-2 '>
          <Button  variant='outline' >
            
            <UnlockIcon size={16} className="mr-2" /> Unlock
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button size='icon' variant='outline'>
                
                <MoreHorizontalIcon size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem> <MicIcon size={16} className="mr-2" /> Audio Intro</DropdownMenuItem>
              <DropdownMenuItem disabled> <FileIcon  size={16} className="mr-2" /> Resume</DropdownMenuItem>
              
              <DropdownMenuItem disabled><PhoneIcon  size={16} className="mr-2" />Call</DropdownMenuItem>
              <DropdownMenuItem disabled> <MessageCircleIcon  size={16} className="mr-2" /> Message</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

export default columns;
