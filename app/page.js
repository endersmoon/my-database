import Tupple from '@/components/local/Tupple';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { ChevronDown } from 'lucide-react';

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
  return (
    <div className='grid overflow-hidden lg:grid-cols-8 h-[calc(100vh-80px)]'>
      <div className='col-span-1 p-6 border-r lg:col-span-6'>
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
