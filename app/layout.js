import { Inter } from 'next/font/google';
import './globals.css';
import { ArrowLeftIcon, GemIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Database',
  description: 'JobHai database',
};

let MinimalNavBar = ({title,description})=>{
  return(
    <div className='flex items-center justify-between border-b min-h-20'>
          <div className='flex items-center gap-2'>
            <div className='pl-3.5'>
              <Button size='icon' variant='ghost'>
                <ArrowLeftIcon size={24} />
              </Button>
            </div>
            <div>
              <h2 className='text-base font-medium md:text-lg '>{title}</h2>
              <p className='text-sm text-muted-foreground'>{description}</p>
            </div>
          </div>

          <div className='flex items-center gap-2 px-3 py-2 pr-3 mr-6 border rounded-full'>
            <GemIcon size={16} className='text-indigo-600 ' />
            <div className='text-sm font-medium text-muted-foreground '>100 Left</div>
          </div>
        </div>

  )
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MinimalNavBar title={"My Database"} description={"Tele Sales · New Delhi"} />
        <main className=''>{children}</main>
      </body>
    </html>
  );
}
