import mongoose, { Schema, Document } from 'mongoose';

export interface IGallery extends Document {
  title: string;
  description?: string;
  imageUrl: string;
  cloudinaryId: string;
  category: 'surgery' | 'consultation' | 'clinic' | 'team' | 'events' | 'other';
  isFeatured: boolean;
  uploadedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

const GallerySchema = new Schema<IGallery>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    imageUrl: {
      type: String,
      required: [true, 'Image URL is required'],
    },
    cloudinaryId: {
      type: String,
      required: [true, 'Cloudinary ID is required'],
    },
    category: {
      type: String,
      enum: ['surgery', 'consultation', 'clinic', 'team', 'events', 'other'],
      default: 'other',
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    uploadedBy: {
      type: String,
      default: 'Admin',
    },
  },
  {
    timestamps: true,
  }
);

// Index for better query performance
GallerySchema.index({ category: 1, createdAt: -1 });
GallerySchema.index({ isFeatured: 1 });

export default mongoose.models.Gallery || mongoose.model<IGallery>('Gallery', GallerySchema);