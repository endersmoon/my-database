'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
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
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ScrollArea } from '@/components/ui/scroll-area';

import {
  Check,
  ChevronsUpDown,
  ChevronDown,
  ArrowRightIcon,
  ChevronsRightIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  GemIcon,
  Table2Icon,
  Rows2Icon,
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
  SortingState,
  getSortedRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
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

let LastActive = () => {
  return (
    <RadioGroup defaultValue='option-one ' className='space-y-3'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='any' id='option-two' />
        <Label htmlFor='option-two'>Any</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='today' id='option-one' />
        <Label htmlFor='option-one'>Today</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='yesterday' id='option-two' />
        <Label htmlFor='option-two'>Yesterday</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='thisWeek' id='option-two' />
        <Label htmlFor='option-two'>This Week</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='lastWeek' id='option-two' />
        <Label htmlFor='option-two'>Last Week</Label>
      </div>
    </RadioGroup>
  );
};

let Locality = () => {
  return (
    <div>
      <Input type='location' placeholder='Search' />
    </div>
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
  const [viewIs, setView] = useState('table');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [sorting, setSorting] = useState([]);

  const [openLoc, setOpenLoc] = useState(false);
  const [valueLoc, setValueLoc] = useState('');

  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    state: {
      sorting,
    },
    initialState: {
      pagination: {
        pageIndex: 0, //custom initial page index
        pageSize: 10, //custom default page size
      },
      columnVisibility: {
        gender: false,
        locality: false,

        qualification_label: false,
      },
    },
  });

  const fLocality = Array.from(
    table.getColumn('locality').getFacetedUniqueValues().keys()
  )
    .sort()
    .slice(0, 500);

  return (
    <div className='grid overflow-hidden lg:grid-cols-12 h-[calc(100vh-80px)]'>
      <div className='hidden p-6 overflow-scroll lg:col-span-3 xl:col-span-2 lg:block'>
        <div className='w-full py-3 space-y-4 min-h-20 '>
          <div className='flex items-center justify-between'>
            <div className='mb-3 text-xl font-medium '>Filter</div>
          </div>

          <FilterHead tittle={'Last Active'} filters={<LastActive />} open />

          <FilterHead tittle={'Locality'} filters={<Locality />} />
          <FilterHead
            tittle={'Distance'}
            filters={
              <div>
                <Slider defaultValue={[33]} max={100} step={1} />
                <div className='flex items-center justify-between mt-3 text-muted-foreground '>
                  <div>
                    Hire Within
                    </div>
                    <div>
                      2km
                    </div>

                  </div>
              </div>
            }
          />
          <FilterHead tittle={'Gender'} filters={<GenderField />} />
          <FilterHead
            tittle={'Min Qualification'}
            filters={<QualificationField />}
          />
         
        </div>
      </div>

      <div className='relative col-span-1 pb-6 overflow-scroll border-l lg:col-span-9 xl:col-span-10'>
        <Drawer>
          <section className='sticky top-0 z-10 flex items-center justify-between mb-6 border-b min-h-20 bg-background'>
            <Tabs defaultValue='all' className='w-[400px] pl-3'>
              <TabsList>
                <TabsTrigger value='all'>All</TabsTrigger>
                <TabsTrigger value='unlocked'>Unlocked</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className='flex items-center gap-2 '>
              <div className='hidden md:block'>
                <ToggleGroup
                  onValueChange={(value) => {
                    setView(value);
                  }}
                  className='mr-3'
                  defaultValue='table'
                  type='single'>
                  <ToggleGroupItem variant='outline' value='table'>
                    <Table2Icon size={16} />
                  </ToggleGroupItem>
                  <ToggleGroupItem variant='outline' value='card'>
                    <Rows2Icon size={16} />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              
            </div>
          </section>

          <section className='flex items-center justify-between gap-3 px-6 mb-6 md:hidden'>
            <div className='flex items-center gap-2 '>
              <div className='pr-3 border-r '>
                <DrawerTrigger>
                  {' '}
                  <Button variant='outline' size='sm'>
                    Filter
                  </Button>
                </DrawerTrigger>
              </div>

              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant='outline'
                    role='combobox'
                    aria-expanded={open}
                    className='w-[160px] justify-between'>
                    {value
                      ? frameworks.find(
                          (framework) => framework.value === value
                        )?.label
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
          </section>

          <section className='flex items-center justify-between mx-6 mb-4 '>
            <div>

            
            <h2 className='text-lg font-medium '>500 Candidates</h2>
            <div className='text-xs text-muted-foreground'>
              Showing 1/
               { table.getPageCount()} Page(s)
            </div>
            </div>
          <div className='flex items-center gap-2 '>
                <Pagination
                  className={' flex items-center justify-start w-fit'}>
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
                <div className='items-center hidden gap-2 md:flex'>

                  <div>Show</div>
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
              </div>
          </section>

          {/* Data Layer */}
          <section className='hidden px-6 space-y-6 md:block '>
            {viewIs == 'table' ? (
              <div className='border rounded-xl'>
                <Table>
                  <TableHeader className=' bg-muted'>
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
            ) : (
              <div className='space-y-6 '>
                {table.getRowModel().rows?.length ? (
                  table
                    .getRowModel()
                    .rows.map((row) => (
                      <Tupple
                        key={row.original.id}
                        name={
                          row.original.first_name +
                          ' ' +
                          (row.original.last_name
                            ? row.original.last_name
                            : ' ')
                        }
                        gender={row.original.gender}
                        age='27'
                        salary={
                          row.original.current_salary
                            ? row.original.current_salary
                            : 'Salary: NA'
                        }
                        location={row.original.locality}
                        language={row.original.language_value_array[0]}
                        education={row.original.qualification_label}
                        skill={row.original.skill_values_array}
                        experience={['2 yrs Back Office / Data Entry']}
                        assetsDcos={
                          row.original.assets_array
                            ? row.original.assets_array
                            : null
                        }
                      />
                    ))
                ) : (
                  <div>No results.</div>
                )}
              </div>
            )}
          </section>

          <section className='block mx-3 md:hidden'>
            <div className='space-y-6 '>
              {table.getRowModel().rows?.length ? (
                table
                  .getRowModel()
                  .rows.map((row) => (
                    <Tupple
                      key={row.original.id}
                      name={
                        row.original.first_name +
                        ' ' +
                        (row.original.last_name ? row.original.last_name : ' ')
                      }
                      gender={row.original.gender}
                      age='27'
                      salary={
                        row.original.current_salary
                          ? row.original.current_salary
                          : 'Salary: NA'
                      }
                      location={row.original.locality}
                      language={row.original.language_value_array[0]}
                      education={row.original.qualification_label}
                      skill={row.original.skill_values_array}
                      experience={['2 yrs Back Office / Data Entry']}
                      assetsDcos={
                        row.original.assets_array
                          ? row.original.assets_array
                          : null
                      }
                    />
                  ))
              ) : (
                <div>No results.</div>
              )}
            </div>
          </section>
          <div className='flex items-center justify-start mx-6 mt-6 w-fit'>
            <Pagination className={' flex items-center justify-start w-fit'}>
              <PaginationContent>
                <PaginationItem>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}>
                    <ChevronLeftIcon /> Previous
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}>
                    <ChevronRightIcon /> Next
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Filter</DrawerTitle>
            </DrawerHeader>
            <ScrollArea className='px-3  h-[70vh] space-y-3 '>
              <FilterHead
                tittle={'Last Active'}
                filters={<div>One</div>}
                open
              />

              <FilterHead tittle={'Locality'} filters={<div>One</div>} open />
              <FilterHead tittle={'Distance'} filters={<div>One</div>} open />
              <FilterHead tittle={'Gender'} filters={<GenderField />} open />
              <FilterHead
                tittle={'Min Qualification'}
                filters={<QualificationField />}
              />
              <FilterHead tittle={'Experience'} filters={<div>One</div>} />
              <FilterHead tittle={'Salary'} filters={<div>One</div>} />
            </ScrollArea>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
