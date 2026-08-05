'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [router, pathname]);

  // Login page ke liye sirf children
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // Baaki pages ke liye layout with navbar
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-teal-950/90 to-[#0a0a1a]">
      {/* Navbar */}
      <nav className="bg-white/5 backdrop-blur-sm border-b border-white/10 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="text-white font-bold text-lg">⚕️ Admin Panel</span>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <NavLink href="/admin">Dashboard</NavLink>
            <NavLink href="/admin/gallery">Gallery</NavLink>
            <NavLink href="/admin/awards">Awards</NavLink>
            <button
              onClick={() => {
                localStorage.removeItem('adminToken');
                router.push('/admin/login');
              }}
              className="px-4 py-2 bg-red-500/20 border border-red-400/30 rounded-xl text-red-400 hover:bg-red-500/30 transition-all text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {children}
      </main>
    </div>
  );
}

// NavLink Component
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <a
      href={href}
      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
        isActive
          ? 'bg-white/10 text-white border border-white/20'
          : 'text-gray-400 hover:text-white hover:bg-white/5'
      }`}
    >
      {children}
    </a>
  );
}