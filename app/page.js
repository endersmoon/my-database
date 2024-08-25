'use client';
import { useState } from 'react';
import Tupple from '@/components/local/Tupple';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Check, ChevronsUpDown, ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];
let FilterHead = ({ tittle, filters, bottom }) => {
  return (
    <div className=''>
      <Collapsible className={`${bottom ? null : 'pb-3 border-b'}`}>
        <div className={`flex items-center justify-between `}>
          <div className='flex items-center text-base font-medium '>
            {tittle}
          </div>
          <div className='flex items-center'>
            <Button
              variant='ghost'
              size='sm'
              className='text-blue-600 hover:text-blue-600 hover:bg-blue-50'>
              Clear
            </Button>
            <CollapsibleTrigger asChild>
              <Button variant='ghost' size='icon'>
                <ChevronDown />
              </Button>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent className='my-3'>{filters}</CollapsibleContent>
      </Collapsible>
    </div>
  );
};

let RadioButtonField = () => {
  return (
    <RadioGroup defaultValue='option-one'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-one' id='option-one' />
        <Label htmlFor='option-one'>One</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-two' id='option-two' />
        <Label htmlFor='option-two'>Two</Label>
      </div>
    </RadioGroup>
  );
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  return (
    <div className='grid overflow-hidden lg:grid-cols-8 h-[calc(100vh-80px)]'>
      <div className='col-span-1 p-6 overflow-scroll border-r lg:col-span-6'>
        <section className='mb-6'>
         
          <Tabs defaultValue='account' className='w-[400px]'>
            <TabsList>
              <TabsTrigger value='account'>All</TabsTrigger>
              <TabsTrigger value='password'>Unlocked</TabsTrigger>
            </TabsList>
          </Tabs>
        </section>
        <section className='flex items-center gap-3 mb-6'>
          <div className='pr-3 border-r '>
            <Button variant='outline' size='sm'>
              Filter
            </Button>
          </div>

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant='outline'
                role='combobox'
                aria-expanded={open}
                className='w-[200px] justify-between'>
                {value
                  ? frameworks.find((framework) => framework.value === value)
                      ?.label
                  : 'Select framework...'}
                <ChevronsUpDown className='w-4 h-4 ml-2 opacity-50 shrink-0' />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-[200px] p-0'>
              <Command>
                <CommandInput placeholder='Search framework...' />
                <CommandList>
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? '' : currentValue);
                          setOpen(false);
                        }}>
                        <Check
                          className={cn(
                            'mr-2 h-4 w-4',
                            value === framework.value
                              ? 'opacity-100'
                              : 'opacity-0'
                          )}
                        />
                        {framework.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </section>
        <section className='space-y-6 '>
          <Tupple
            name='Balram'
            gender='Male'
            age='27'
            salary='₹25k - ₹35k /Month'
            location='Mayur Vihar, Delhi'
            language='Hindi, Thoda English'
            education='12th Pass'
            skill={['computer', 'Data Entry']}
            experience={['2 yrs Back Office / Data Entry']}
            assetsDcos={['Bike', 'DL']}
          />
          <Tupple
            name='Balram'
            gender='Male'
            age='27'
            salary='₹25k - ₹35k /Month'
            location='Mayur Vihar, Delhi'
            language='Hindi, Thoda English'
            education='12th Pass'
            skill={['computer', 'Data Entry']}
            experience={['2 yrs Back Office / Data Entry']}
            assetsDcos={['Bike', 'DL']}
          />
           <Tupple
            name='Balram'
            gender='Male'
            age='27'
            salary='₹25k - ₹35k /Month'
            location='Mayur Vihar, Delhi'
            language='Hindi, Thoda English'
            education='12th Pass'
            skill={['computer', 'Data Entry']}
            experience={['2 yrs Back Office / Data Entry']}
            assetsDcos={['Bike', 'DL']}
          />
           <Tupple
            name='Balram'
            gender='Male'
            age='27'
            salary='₹25k - ₹35k /Month'
            location='Mayur Vihar, Delhi'
            language='Hindi, Thoda English'
            education='12th Pass'
            skill={['computer', 'Data Entry']}
            experience={['2 yrs Back Office / Data Entry']}
            assetsDcos={['Bike', 'DL']}
          />
        </section>
      </div>
      <div className='hidden p-6 overflow-scroll lg:col-span-2 lg:block'>
        <div className='w-full py-3 space-y-4 min-h-20 '>
          <div className='mb-3 text-lg font-medium '>Filter</div>
          <FilterHead tittle={'Locality'} filters={<RadioButtonField />} />
          <FilterHead tittle={'Distance'} filters={<RadioButtonField />} />
          <FilterHead tittle={'Gender'} filters={<RadioButtonField />} />
          <FilterHead tittle={'Qualification'} filters={<RadioButtonField />} />
          <FilterHead tittle={'Experience'} filters={<RadioButtonField />} />
          <FilterHead tittle={'Salary'} filters={<RadioButtonField />} />
          <FilterHead tittle={'Industry'} filters={<RadioButtonField />} />
          <FilterHead tittle={'Skill'} filters={<RadioButtonField />} />
          <FilterHead tittle={'Asset'} filters={<RadioButtonField />} />
          <FilterHead tittle={'Language'} filters={<RadioButtonField />} />
          <FilterHead tittle={'Last Active'} filters={<RadioButtonField />} />
        </div>
      </div>
    </div>
  );
}
