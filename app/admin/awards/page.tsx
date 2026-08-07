'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast, Toaster } from 'react-hot-toast';
import { 
  Trash2, 
  Upload, 
  LogOut, 
  Image as ImageIcon,
  Loader2,
  X,
  Camera,
  Award,
  Edit2,
  Save,
  Ban
} from 'lucide-react';

interface AwardItem {
  _id: string;
  title: string;
  description: string;
  year: string;
  image: string;
  cloudinaryId: string;
  slug: string;
  createdAt: string;
}

export default function AdminAwards() {
  const [awards, setAwards] = useState<AwardItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    year: '',
  });
  const [editFormData, setEditFormData] = useState({
    title: '',
    description: '',
    year: '',
  });
  const router = useRouter();

  const getToken = () => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return null;
    }
    return token;
  };

  useEffect(() => {
    const token = getToken();
    if (token) {
      fetchAwards();
    }
  }, []);

  const fetchAwards = async () => {
    try {
      const token = getToken();
      if (!token) return;

      const res = await fetch('/api/awards', {
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      
      if (res.status === 401) {
        localStorage.removeItem('adminToken');
        router.push('/admin/login');
        toast.error('Session expired. Please login again.');
        return;
      }

      const data = await res.json();
      
      if (Array.isArray(data)) {
        setAwards(data);
      } else if (data.success && data.data) {
        setAwards(data.data);
      } else {
        setAwards([]);
      }
    } catch (error: any) {
      console.error('Error fetching awards:', error);
      toast.error('Failed to load awards');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size should be less than 5MB');
      e.target.value = '';
      return;
    }

    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      toast.error('Only JPEG, PNG, GIF, WEBP allowed');
      e.target.value = '';
      return;
    }

    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      toast.error('Please select an image');
      return;
    }

    if (!formData.title.trim() || !formData.description.trim() || !formData.year.trim()) {
      toast.error('All fields are required');
      return;
    }

    setUploading(true);
    const formDataObj = new FormData();
    formDataObj.append('image', selectedFile);
    formDataObj.append('title', formData.title.trim());
    formDataObj.append('description', formData.description.trim());
    formDataObj.append('year', formData.year.trim());

    try {
      const token = getToken();
      if (!token) {
        setUploading(false);
        return;
      }
      
      const res = await fetch('/api/awards/admin', {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
        },
        body: formDataObj,
      });

      if (res.status === 401) {
        localStorage.removeItem('adminToken');
        router.push('/admin/login');
        toast.error('Session expired. Please login again.');
        setUploading(false);
        return;
      }

      const data = await res.json();

      if (data.success) {
        toast.success('Award added successfully! 🎉');
        setSelectedFile(null);
        setPreview(null);
        setShowUploadForm(false);
        setFormData({ title: '', description: '', year: '' });
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
        await fetchAwards();
      } else {
        toast.error(data.message || 'Upload failed');
      }
    } catch (error: any) {
      console.error('Upload error:', error);
      toast.error(error.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this award?')) {
      return;
    }

    setDeletingId(id);
    
    try {
      const token = getToken();
      if (!token) {
        setDeletingId(null);
        return;
      }

      const res = await fetch(`/api/awards/admin?id=${id}`, {
        method: 'DELETE',
        headers: { 
          'Authorization': `Bearer ${token}`,
        },
      });

      if (res.status === 401) {
        localStorage.removeItem('adminToken');
        router.push('/admin/login');
        toast.error('Session expired. Please login again.');
        setDeletingId(null);
        return;
      }

      const data = await res.json();

      if (data.success) {
        toast.success('Award deleted successfully! 🗑️');
        await fetchAwards();
      } else {
        toast.error(data.message || 'Delete failed');
      }
    } catch (error: any) {
      console.error('Delete error:', error);
      toast.error(error.message || 'Delete failed');
    } finally {
      setDeletingId(null);
    }
  };

  const startEditing = (award: AwardItem) => {
    setEditingId(award._id);
    setEditFormData({
      title: award.title,
      description: award.description,
      year: award.year,
    });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditFormData({ title: '', description: '', year: '' });
  };

  const saveEdit = async (id: string) => {
    if (!editFormData.title.trim() || !editFormData.description.trim() || !editFormData.year.trim()) {
      toast.error('All fields are required');
      return;
    }

    try {
      const token = getToken();
      if (!token) return;

      const res = await fetch(`/api/awards/admin?id=${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: editFormData.title.trim(),
          description: editFormData.description.trim(),
          year: editFormData.year.trim(),
        }),
      });

      if (res.status === 401) {
        localStorage.removeItem('adminToken');
        router.push('/admin/login');
        toast.error('Session expired. Please login again.');
        return;
      }

      const data = await res.json();

      if (data.success) {
        toast.success('Award updated successfully! ✏️');
        setEditingId(null);
        setEditFormData({ title: '', description: '', year: '' });
        await fetchAwards();
      } else {
        toast.error(data.message || 'Update failed');
      }
    } catch (error: any) {
      console.error('Update error:', error);
      toast.error(error.message || 'Update failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a1a] via-teal-950/90 to-[#0a0a1a]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-amber-400 mx-auto"></div>
          <p className="text-gray-400 mt-4 font-medium">Loading awards...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-teal-950/90 to-[#0a0a1a] p-4 md:p-8">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1a1a2e',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
          },
        }}
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-2">
            🏆 Awards Management
          </h1>
          <p className="text-gray-400 mt-1">
            {awards.length} {awards.length === 1 ? 'award' : 'awards'} in your collection
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Link href="/admin/gallery">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-400/20 rounded-xl text-white font-medium hover:from-teal-500/30 hover:to-cyan-500/30 transition-all duration-300">
              <Camera size={18} className="text-teal-400" />
              Gallery
            </button>
          </Link>
          
          <button
            onClick={() => setShowUploadForm(!showUploadForm)}
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/20 rounded-xl text-white font-medium hover:from-amber-500/30 hover:to-yellow-500/30 transition-all duration-300"
          >
            <Upload size={18} className="text-amber-400" />
            {showUploadForm ? 'Cancel' : 'Add Award'}
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-5 py-2.5 bg-red-500/10 border border-red-400/20 rounded-xl text-red-400 font-medium hover:bg-red-500/20 transition-all duration-300"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      {/* Upload Form */}
      {showUploadForm && (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              🏆 Add New Award
            </h2>
            <button
              onClick={() => setShowUploadForm(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <form onSubmit={handleUpload} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Award Image <span className="text-red-400">*</span>
                </label>
                <div 
                  className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-all ${
                    preview ? 'border-green-400 bg-green-500/10' : 'border-white/20 hover:border-amber-400/50'
                  }`}
                  onClick={() => document.getElementById('fileInput')?.click()}
                >
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  
                  {preview ? (
                    <div className="relative">
                      <Image
                        src={preview}
                        alt="Preview"
                        className="mx-auto rounded-lg object-cover max-h-48"
                      />
                      <p className="text-sm text-green-400 mt-2">✓ Image selected</p>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedFile(null);
                          setPreview(null);
                          const fileInput = document.getElementById('fileInput') as HTMLInputElement;
                          if (fileInput) fileInput.value = '';
                        }}
                        className="text-red-400 text-sm hover:text-red-300 mt-1"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="py-8">
                      <Award size={48} className="mx-auto text-gray-500" />
                      <p className="text-gray-400 mt-2">Click to select award image</p>
                      <p className="text-gray-500 text-sm mt-1">PNG, JPG, WEBP (Max 5MB)</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Title <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Best ENT Specialist"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Description <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Brief description of the award"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400/50 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Year <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 2024"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400/50 transition-all"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={uploading || !selectedFile}
              className="w-full py-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/20 rounded-xl text-white font-semibold hover:from-amber-500/30 hover:to-yellow-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
            >
              {uploading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Adding Award...
                </>
              ) : (
                <>
                  <Upload size={20} />
                  Add Award
                </>
              )}
            </button>
          </form>
        </div>
      )}

      {/* ✅ Awards Grid - BUTTONS IN CARD FOOTER (Always Visible) */}
      {awards.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {awards.map((award) => (
            <div
              key={award._id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-amber-400/30 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 bg-gray-800/50 overflow-hidden">
                <Image
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                  {award.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* EDIT MODE */}
                {editingId === award._id ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={editFormData.title}
                      onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
                      className="w-full px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-amber-400/50 placeholder-gray-500"
                      placeholder="Title"
                    />
                    <input
                      type="text"
                      value={editFormData.description}
                      onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
                      className="w-full px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-amber-400/50 placeholder-gray-500"
                      placeholder="Description"
                    />
                    <input
                      type="text"
                      value={editFormData.year}
                      onChange={(e) => setEditFormData({ ...editFormData, year: e.target.value })}
                      className="w-full px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-amber-400/50 placeholder-gray-500"
                      placeholder="Year"
                    />
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => saveEdit(award._id)}
                        className="flex-1 bg-green-400/80 hover:bg-green-500 text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center justify-center gap-1 transition-all"
                      >
                        <Save size={14} />
                        Save
                      </button>
                      <button
                        onClick={cancelEditing}
                        className="flex-1 bg-gray-400/80 hover:bg-gray-500 text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center justify-center gap-1 transition-all"
                      >
                        <Ban size={14} />
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  // NORMAL VIEW
                  <>
                    <h3 className="text-white font-semibold text-lg line-clamp-2">
                      {award.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mt-1">
                      {award.description}
                    </p>
                    <p className="text-amber-400 text-xs mt-2 font-semibold">
                      🏆 {award.year}
                    </p>
                    
                    {/* ✅ BUTTONS - CARD FOOTER MEIN (Always Visible) */}
                    <div className="flex gap-2 mt-3 pt-3 border-t border-white/10">
                      {/* DELETE Button */}
                      <button
                        onClick={() => handleDelete(award._id)}
                        disabled={deletingId === award._id}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-red-400/70 hover:bg-red-500 text-white text-xs font-medium px-3 py-2 rounded-lg disabled:opacity-50 transition-all"
                      >
                        {deletingId === award._id ? (
                          <Loader2 size={14} className="animate-spin" />
                        ) : (
                          <>
                            <Trash2 size={14} />
                            Delete
                          </>
                        )}
                      </button>

                      {/* EDIT Button */}
                      <button
                        onClick={() => startEditing(award)}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-blue-400/70 hover:bg-blue-500 text-white text-xs font-medium px-3 py-2 rounded-lg transition-all"
                      >
                        <Edit2 size={14} />
                        Edit
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
          <div className="text-6xl mb-4">🏆</div>
          <h3 className="text-xl font-semibold text-white">No awards yet</h3>
          <p className="text-gray-400 mt-2">Add your first award to showcase achievements</p>
          <button
            onClick={() => setShowUploadForm(true)}
            className="mt-4 px-6 py-2.5 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/20 rounded-lg text-amber-400 font-medium hover:from-amber-500/30 hover:to-yellow-500/30 transition-all"
          >
            Add Award
          </button>
        </div>
      )}
    </div>
  );
}