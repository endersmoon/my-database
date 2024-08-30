'use client';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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

import {
  Check,
  ChevronsUpDown,
  ChevronDown,
  ArrowRightIcon,
  ChevronsRightIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  GemIcon,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from '@tanstack/react-table';
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
import data from './data';
import columns from './columns';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
const frameworks = [
  {
    value: 'mayurVihar',
    label: 'Mayur Vihar',
  },
  {
    value: 'nirmanVihar',
    label: 'Nirman Vihar',
  },
  {
    value: 'malviyaNagar',
    label: 'Malviya Nagar',
  },
  {
    value: 'saket',
    label: 'Saket',
  },
  {
    value: 'laxmiNagar',
    label: 'Laxmi Nagar',
  },
];
let FilterHead = ({ tittle, filters, bottom, clear, open }) => {
  return (
    <div className=''>
      <Collapsible
        className={`${bottom ? null : 'pb-3 border-b'}`}
        defaultOpen={open}>
        <div className={`flex items-center justify-between `}>
          <div className='flex items-center text-base font-medium '>
            {tittle}
          </div>
          <div className='flex items-center'>
            {clear ? (
              <Button
                variant='ghost'
                size='sm'
                className='text-blue-600 hover:text-blue-600 hover:bg-blue-50'>
                Clear
              </Button>
            ) : null}

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
    <RadioGroup defaultValue='option-one ' className='space-y-3'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='AgarkarNagar' id='option-one' />
        <Label htmlFor='option-one'>Agarkar Nagar</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='Akurdi' id='option-two' />
        <Label htmlFor='option-two'>Akurdi</Label>
      </div>
    </RadioGroup>
  );
};

let GenderField = () => {
  return (
    <RadioGroup defaultValue='option-one ' className='space-y-3'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='any' id='option-one' />
        <Label htmlFor='any'>Any</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='male' id='option-one' />
        <Label htmlFor='male'>Male</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='female' id='option-two' />
        <Label htmlFor='female'>Female</Label>
      </div>
    </RadioGroup>
  );
};

let QualificationField = () => {
  return (
    <RadioGroup defaultValue='option-one ' className='space-y-3'>
      <div className='flex items-center justify-between gap-2 '>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='any' id='option-one' />
          <Label htmlFor='any'>Any</Label>
        </div>

        <Label></Label>
      </div>
      <div className='flex items-center justify-between gap-2 '>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='tenth' id='option-one' />
          <Label htmlFor='any'>
            10<sup>th</sup> Pass
          </Label>
        </div>
        <Label>423</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='twelth' id='option-one' />
        <Label htmlFor='any'>
          12<sup>th</sup> Pass
        </Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='diploma' id='option-one' />
        <Label htmlFor='any'>Diploma</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='grad' id='option-one' />
        <Label htmlFor='any'>Graduate</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='postgrad' id='option-one' />
        <Label htmlFor='any'>Post Graduate</Label>
      </div>
    </RadioGroup>
  );
};




export default function Home() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const uniqueLocality = [...new Set(data.map((item) => item.locality))];

  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0, //custom initial page index
        pageSize: 10, //custom default page size
      },
    },
  });

  return (
    <div className='grid overflow-hidden lg:grid-cols-8 h-[calc(100vh-80px)]'>

      
      <div className='hidden p-6 overflow-scroll lg:col-span-2 lg:block'>
        <div className='w-full py-3 space-y-4 min-h-20 '>
          <div className='flex items-center justify-between'>
            <div className='mb-3 text-xl font-medium '>Filter By</div>
            <div>500 Candidates</div>
          </div>

          <FilterHead tittle={'Locality'} filters={<RadioButtonField />} open />
          <FilterHead tittle={'Distance'} filters={<RadioButtonField />} open />
          <FilterHead tittle={'Gender'} filters={<GenderField />} open />
          <FilterHead
            tittle={'Qualification'}
            filters={<QualificationField />}
          />
          <FilterHead tittle={'Experience'} filters={<RadioButtonField />} />
          <FilterHead tittle={'Salary'} filters={<RadioButtonField />} />
          <FilterHead tittle={'Industry'} filters={<RadioButtonField />} />
          <FilterHead tittle={'Skill'} filters={<RadioButtonField />} />
          <FilterHead tittle={'Asset'} filters={<RadioButtonField />} />
          <FilterHead tittle={'Language'} filters={<RadioButtonField />} />
          <FilterHead tittle={'Last Active'} filters={<RadioButtonField />} />
        </div>
      </div>


      <div className='relative col-span-1 pb-6 overflow-scroll border-l lg:col-span-6' >
        <section className='sticky top-0 z-10 flex items-center justify-between pt-3 pb-3 mb-6 border-b bg-background'>
         
          <Tabs defaultValue='account' className='w-[400px] pl-3'>
            <TabsList>
              <TabsTrigger value='account'>All (500)</TabsTrigger>
              <TabsTrigger value='password'>Unlocked(0)</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className='flex items-center gap-2 px-3 py-2 pr-3 border rounded-full'>
            <GemIcon size={16} />
            <div>100 Left</div>
          </div>
        </section>

        <section className='flex items-center justify-between gap-3 px-6 mb-6'>
          <div className='flex items-center gap-2 '>
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
                  className='w-[160px] justify-between'>
                  {value
                    ? frameworks.find((framework) => framework.value === value)
                        ?.label
                    : 'Select Location'}
                  <ChevronsUpDown className='w-4 h-4 ml-2 opacity-50 shrink-0' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-[200px] p-0'>
                <Command>
                  <CommandInput placeholder='Search Location' />
                  <CommandList>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? '' : currentValue
                            );
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
          </div>

          <div className='flex items-center gap-2 '>
            <Pagination className={' flex items-center justify-start'}>
              <PaginationContent>
                <PaginationItem>
                  <Button
                    variant='outline'
                    size='icon'
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}>
                    <ChevronLeftIcon />
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button
                    variant='outline'
                    size='icon'
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}>
                    <ChevronRightIcon />
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>

            <Select
              value={table.getState().pagination.pageSize}
              onValueChange={(e) => {
                table.setPageSize(Number(e));
              }}>
              <SelectTrigger className='w-[80px]'>
                <SelectValue placeholder='10' />
              </SelectTrigger>
              <SelectContent>
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={pageSize}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </section>
        <section className='px-6 space-y-6 '>
          <div className='border rounded-xl'>
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && 'selected'}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className='h-24 text-center'>
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    </div>
  );
}

{
  /*data.map((c) => {
  return (
    <Tupple
      key={c.id}
      name={c.first_name + ' ' + c.last_name}
      gender={c.gender}
      age='27'
      salary={c.current_salary ? c.current_salary : 'Salary: NA'}
      location={c.locality}
      language={c.language_value_array[0]}
      education={c.qualification_label}
      skill={c.skill_values_array}
      experience={['2 yrs Back Office / Data Entry']}
      assetsDcos={c.assets_array ? c.assets_array : null}
    />
  );
})*/
}
