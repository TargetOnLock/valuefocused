"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black/20 backdrop-blur-sm fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/VFP3.png"
              alt="VFP Logo"
              width={75}
              height={75}
            />
          </Link>
          
          <div className="hidden md:flex space-x-12">
            <Link 
              href="/about" 
              className="nav-link text-sm uppercase tracking-wider font-medium"
            >
              About
            </Link>
            <Link 
              href="/tokenomics" 
              className="nav-link text-sm uppercase tracking-wider font-medium"
            >
              Tokenomics
            </Link>
            <Link 
              href="/roadmap" 
              className="nav-link text-sm uppercase tracking-wider font-medium"
            >
              Roadmap
            </Link>
            <Link 
              href="/rewards" 
              className="nav-link text-sm uppercase tracking-wider font-medium"
            >
              Rewards
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://twitter.com/vfp2day"
              className="bg-black/30 p-2 rounded-full hover:bg-black/50 transition-all transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/x-logo.svg"
                alt="Follow on X (Twitter)"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </a>
            
            <a
              href="https://t.me/ValueFocusedProject"
              className="bg-[#229ED9]/30 p-2 rounded-full hover:bg-[#229ED9]/50 transition-all transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/telegram-logo.svg"
                alt="Join Telegram"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </a>

            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-sm">
            <div className="px-4 pt-2 pb-4 space-y-3">
              <Link 
                href="/about" 
                className="block nav-link text-sm uppercase tracking-wider font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/tokenomics" 
                className="block nav-link text-sm uppercase tracking-wider font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Tokenomics
              </Link>
              <Link 
                href="/roadmap" 
                className="block nav-link text-sm uppercase tracking-wider font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Roadmap
              </Link>
              <Link 
                href="/rewards" 
                className="block nav-link text-sm uppercase tracking-wider font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Rewards
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
