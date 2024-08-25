import { Inter } from 'next/font/google';
import './globals.css';
import { ArrowLeftIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Database',
  description: 'JobHai database',
};

let MinimalNavBar = ({title,description})=>{
  return(
    <div className='flex items-center border-b min-h-20'>
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
        </div>

  )
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MinimalNavBar title={"My Database"} description={"Inside Sales Executive · Noida (UP)"} />
        <main className=''>{children}</main>
      </body>
    </html>
  );
}
