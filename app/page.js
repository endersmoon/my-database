import Tupple from '@/components/local/Tupple';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"


let FilterHead = ({tittle})=>{
  return(
    <div className='px-4 '>

<Collapsible>
    <div className='flex items-center justify-between'>
            <div className='text-base font-medium '>{tittle}</div>
            <Button
              variant='ghost'
              size='sm'
              className='text-blue-600 hover:text-blue-600 hover:bg-blue-50'>
              Clear
            </Button>
          </div>
          
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects. No attribution
    required.
  </CollapsibleContent>
</Collapsible>

          </div>

  )
}

export default function Home() {
  return (
    <div className='grid gap-4 lg:grid-cols-6'>
      <div className='col-span-1 lg:col-span-5'>
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
      <div className='hidden lg:col-span-1 lg:block'>
        <div className='w-full py-3 space-y-4 border min-h-20 rounded-2xl'>
          <div className='px-4 mb-3 text-lg font-medium '>Filter</div>
          <FilterHead tittle={"Locality"} />

          
        </div>
      </div>
    </div>
  );
}
