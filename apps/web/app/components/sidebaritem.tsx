// apps/web/app/components/sidebaritem.tsx
'use client'
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface SidebarItemProps {
  href: string;
  title: string;
  icon: React.ReactNode;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ href, title, icon }) => {
  const router = useRouter();
  const pathname = usePathname();
  const selected = pathname === href;

  return (
    <div  onClick={() => router.push(href)} className={`sidebar-item ${selected ? 'selected' : ''} flex border-r-0 border w-full justify-start cursor-pointer font-bold p-4`}>
      {icon}
      <span className='pl-2'>{title}</span>
    </div>
  );
};
