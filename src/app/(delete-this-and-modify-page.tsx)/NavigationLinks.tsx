'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PAGES = [
    { name: 'Home', href: '/' },
    { name: 'Examples', href: '/examples' }
];

const NavigationLinks = () => {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <div className='flex items-center gap-3'>
            {PAGES.map((page) => {
                const active = page.href === '/' ? pathname === '/' : pathname.includes(page.href);

                return (
                    <Link
                        key={page.name}
                        href={page.href}
                        className={`rounded-lg px-3 py-2 ${active ? 'bg-neutral-200 font-medium dark:bg-neutral-700' : 'bg-transparent font-normal'}`}>
                        <span>{page.name}</span>
                    </Link>
                );
            })}
        </div>
    );
};

export default NavigationLinks;
