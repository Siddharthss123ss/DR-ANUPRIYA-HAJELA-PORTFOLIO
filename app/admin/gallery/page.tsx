'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'react-hot-toast';
import { 
  Trash2, 
  Star, 
  Upload, 
  LogOut, 
  Image as ImageIcon,
  Loader2,
  X
} from 'lucide-react';

interface GalleryImage {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  isFeatured: boolean;
  createdAt: string;
}

export default function AdminGallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [featuredLoading, setFeaturedLoading] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'other',
    isFeatured: false,
  });
  const router = useRouter();

  // Check token and fetch images
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/gallery', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setImages(data.data);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
      toast.error('Failed to load images');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size should be less than 5MB');
      e.target.value = '';
      return;
    }

    // Validate file type
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

    if (!formData.title.trim()) {
      toast.error('Title is required');
      return;
    }

    setUploading(true);
    const formDataObj = new FormData();
    formDataObj.append('image', selectedFile);
    formDataObj.append('title', formData.title.trim());
    formDataObj.append('description', formData.description.trim());
    formDataObj.append('category', formData.category);
    formDataObj.append('isFeatured', String(formData.isFeatured));

    try {
      const token = localStorage.getItem('adminToken');
      
      const res = await fetch('/api/gallery/admin', {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
        },
        body: formDataObj,
      });

      const data = await res.json();
      console.log('Upload response:', data);

      if (data.success) {
        toast.success('Image uploaded successfully! 🎉');
        setSelectedFile(null);
        setPreview(null);
        setShowUploadForm(false);
        setFormData({ title: '', description: '', category: 'other', isFeatured: false });
        await fetchImages();
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
    if (!confirm('Are you sure you want to delete this image? This action cannot be undone.')) {
      return;
    }

    setDeletingId(id);
    
    try {
      const token = localStorage.getItem('adminToken');
      console.log('🗑️ Deleting image ID:', id);

      const res = await fetch(`/api/gallery/admin/${id}`, {
        method: 'DELETE',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      console.log('Delete response:', data);

      if (data.success) {
        toast.success('Image deleted successfully! 🗑️');
        // UI se remove karo - Optimistic update
        setImages(prev => prev.filter(img => img._id !== id));
        // Ya full refresh
        // await fetchImages();
      } else {
        toast.error(data.message || 'Delete failed');
        await fetchImages(); // Refresh to revert
      }
    } catch (error: any) {
      console.error('Delete error:', error);
      toast.error(error.message || 'Delete failed');
      await fetchImages(); // Refresh to revert
    } finally {
      setDeletingId(null);
    }
  };

  const handleToggleFeatured = async (id: string, current: boolean) => {
    setFeaturedLoading(id);
    
    // Optimistic update
    const previousImages = [...images];
    setImages(prev => 
      prev.map(img => 
        img._id === id ? { ...img, isFeatured: !current } : img
      )
    );

    try {
      const token = localStorage.getItem('adminToken');
      
      const res = await fetch(`/api/gallery/admin/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isFeatured: !current }),
      });

      const data = await res.json();
      
      if (data.success) {
        toast.success(`Image ${!current ? 'featured' : 'unfeatured'}! ⭐`);
      } else {
        // Revert on error
        setImages(previousImages);
        toast.error(data.message || 'Update failed');
      }
    } catch (error: any) {
      // Revert on error
      setImages(previousImages);
      console.error('Update error:', error);
      toast.error(error.message || 'Update failed');
    } finally {
      setFeaturedLoading(null);
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
          <p className="text-gray-400 mt-4 font-medium">Loading gallery...</p>
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
          success: {
            iconTheme: { primary: '#22c55e', secondary: '#fff' },
          },
          error: {
            iconTheme: { primary: '#ef4444', secondary: '#fff' },
          },
        }}
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-2">
            🖼️ Gallery Management
          </h1>
          <p className="text-gray-400 mt-1">
            {images.length} {images.length === 1 ? 'image' : 'images'} in your gallery
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowUploadForm(!showUploadForm)}
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500/20 to-teal-500/20 border border-amber-400/20 rounded-xl text-white font-medium hover:from-amber-500/30 hover:to-teal-500/30 hover:border-amber-400/40 transition-all duration-300"
          >
            <Upload size={18} className="text-amber-400" />
            {showUploadForm ? 'Cancel' : 'Upload New'}
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-5 py-2.5 bg-red-500/10 border border-red-400/20 rounded-xl text-red-400 font-medium hover:bg-red-500/20 hover:border-red-400/40 transition-all duration-300"
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
              📤 Upload New Image
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
                  Image <span className="text-red-400">*</span>
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
                      <img
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
                        }}
                        className="text-red-400 text-sm hover:text-red-300 mt-1"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="py-8">
                      <ImageIcon size={48} className="mx-auto text-gray-500" />
                      <p className="text-gray-400 mt-2">Click to select image</p>
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
                    placeholder="Enter image title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all"
                    required
                    maxLength={100}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    placeholder="Brief description (optional)"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all"
                    maxLength={500}
                  />
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all"
                    >
                      <option value="surgery">🔬 Surgery</option>
                      <option value="consultation">💊 Consultation</option>
                      <option value="clinic">🏥 Clinic</option>
                      <option value="team">👥 Team</option>
                      <option value="events">🎪 Events</option>
                      <option value="other">📌 Other</option>
                    </select>
                  </div>
                  <div className="flex items-end pb-1">
                    <label className="flex items-center gap-2 cursor-pointer text-gray-300">
                      <input
                        type="checkbox"
                        checked={formData.isFeatured}
                        onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                        className="w-4 h-4 text-amber-400 rounded focus:ring-amber-400 focus:ring-offset-0 bg-white/10 border-white/20"
                      />
                      <span className="text-sm font-medium">⭐ Featured</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={uploading || !selectedFile}
              className="w-full py-3 bg-gradient-to-r from-amber-500/20 to-teal-500/20 border border-amber-400/20 rounded-xl text-white font-semibold hover:from-amber-500/30 hover:to-teal-500/30 hover:border-amber-400/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
            >
              {uploading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload size={20} />
                  Upload Image
                </>
              )}
            </button>
          </form>
        </div>
      )}

      {/* Gallery Grid */}
      {images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image) => (
            <div
              key={image._id}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-amber-400/30 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300"
            >
              <div className="relative h-52 bg-gray-800/50 overflow-hidden">
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300/1a1a2e/4a4a6a?text=Image+Not+Found';
                  }}
                />
                
                {/* Badges */}
                <div className="absolute top-3 right-3 flex flex-col gap-1">
                  {image.isFeatured && (
                    <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                      <Star size={12} className="fill-black" />
                      Featured
                    </span>
                  )}
                </div>
                
                <span className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full capitalize">
                  {image.category}
                </span>

                {/* Delete button overlay (on hover) */}
                <button
                  onClick={() => handleDelete(image._id)}
                  disabled={deletingId === image._id}
                  className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-red-500/90 hover:bg-red-600 text-white p-2 rounded-lg shadow-lg disabled:opacity-50"
                >
                  {deletingId === image._id ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Trash2 size={16} />
                  )}
                </button>
              </div>

              <div className="p-4">
                <h3 className="text-white font-semibold truncate text-lg">
                  {image.title}
                </h3>
                {image.description && (
                  <p className="text-gray-400 text-sm truncate mt-0.5">
                    {image.description}
                  </p>
                )}
                <p className="text-gray-500 text-xs mt-2">
                  {new Date(image.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>

                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => handleToggleFeatured(image._id, image.isFeatured)}
                    disabled={featuredLoading === image._id}
                    className={`flex-1 text-sm px-3 py-1.5 rounded-lg transition-all flex items-center justify-center gap-1 ${
                      image.isFeatured
                        ? 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    } disabled:opacity-50`}
                  >
                    {featuredLoading === image._id ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      <>
                        <Star size={14} />
                        {image.isFeatured ? 'Unfeature' : 'Feature'}
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => handleDelete(image._id)}
                    disabled={deletingId === image._id}
                    className="flex-1 text-sm bg-red-500/10 text-red-400 px-3 py-1.5 rounded-lg hover:bg-red-500/20 transition-all flex items-center justify-center gap-1 disabled:opacity-50"
                  >
                    {deletingId === image._id ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      <>
                        <Trash2 size={14} />
                        Delete
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
          <div className="text-6xl mb-4">🖼️</div>
          <h3 className="text-xl font-semibold text-white">No images yet</h3>
          <p className="text-gray-400 mt-2">Upload your first image to get started</p>
          <button
            onClick={() => setShowUploadForm(true)}
            className="mt-4 px-6 py-2.5 bg-gradient-to-r from-amber-500/20 to-teal-500/20 border border-amber-400/20 rounded-lg text-amber-400 font-medium hover:from-amber-500/30 hover:to-teal-500/30 transition-all"
          >
            Upload Now
          </button>
        </div>
      )}
    </div>
  );
}