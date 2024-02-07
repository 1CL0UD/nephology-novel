import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Input } from '../ui/input';

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center gap-5 justify-between">
        <Link href="/">
          <Image
            src="/img/logo.png"
            width={36}
            height={12}
            alt="Nephology Logo"
          />
        </Link>
        <Link href="/" className="hidden sm:block">
          Nephology
        </Link>
        <Input placeholder="Search Novel"></Input>
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
