'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Camera, Award, ArrowRight, Sparkles } from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    }
  }, [router]);

  return (
    <div>
      {/* Welcome Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="text-amber-400" size={28} />
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Admin Dashboard
          </h1>
        </div>
        <p className="text-gray-400 text-sm">
          Manage your gallery and awards from one place
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 🖼️ Gallery Card */}
        <Link href="/admin/gallery">
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-teal-400/30 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-500 cursor-pointer p-8">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-500/20 transition-all duration-700"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Camera size={32} className="text-teal-400" />
              </div>
              
              <h2 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors duration-300">
                Gallery Management
              </h2>
              <p className="text-gray-400 mt-2 text-sm">
                Upload, delete, and manage gallery images. Featured images, categories, and more.
              </p>
              
              <div className="flex items-center gap-2 mt-4 text-teal-400 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                <span>Manage Gallery</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </Link>

        {/* 🏆 Awards Card */}
        <Link href="/admin/awards">
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-amber-400/30 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-500 cursor-pointer p-8">
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-700"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award size={32} className="text-amber-400" />
              </div>
              
              <h2 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors duration-300">
                Awards Management
              </h2>
              <p className="text-gray-400 mt-2 text-sm">
                Add, edit, and delete awards. Showcase achievements and recognitions.
              </p>
              
              <div className="flex items-center gap-2 mt-4 text-amber-400 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                <span>Manage Awards</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </Link>

      </div>

      {/* Quick Stats */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
          <p className="text-gray-400 text-xs uppercase tracking-wider">Manage</p>
          <p className="text-teal-400 text-lg font-bold">Gallery</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
          <p className="text-gray-400 text-xs uppercase tracking-wider">Manage</p>
          <p className="text-amber-400 text-lg font-bold">Awards</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
          <p className="text-gray-400 text-xs uppercase tracking-wider">Version</p>
          <p className="text-white text-lg font-bold">v2.0</p>
        </div>
      </div>
    </div>
  );
}