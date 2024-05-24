import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="flex items-center bg-gray-800 p-4">
      <div className="mr-4">
        <Image
          src="/image/logo.png"
          alt="Logo"
          width={50}
          height={50}
        />
      </div>
      <div className="flex space-x-4">
        <Link href="/">
          <p className="text-white hover:text-orange-600 cursor-pointer">Home</p>
        </Link>

        <Link href="/contacto">
          <p className="text-white hover:text-orange-600 cursor-pointer">Contacto</p>
        </Link>
        <Link href="/catalogo">
          <p className="text-white hover:text-orange-600 cursor-pointer">Catálogo</p>
        </Link>
        <Link href="/feedback">
          <p className="text-white hover:text-orange-600 cursor-pointer">Feedback</p>
        </Link>
        <Link href="/about">
          <p className="text-white hover:text-orange-600 cursor-pointer">About</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
