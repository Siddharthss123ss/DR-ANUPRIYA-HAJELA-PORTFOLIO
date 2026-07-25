import mongoose, { Schema, Document } from "mongoose";

export interface IService extends Document {
  slug: string;
  title: string;
  desc: string;
  image: string;
  icon: string;
  tag: string;
  color: string;
  bg: string;
  gradient: string;
  fullDesc: string;
  benefits: string[];
  duration: string;
  recovery: string;
  successRate: string;
  featured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema = new Schema<IService>(
  {
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    desc: {
      type: String,
      required: [true, "Description is required"],
    },
    image: {
      type: String,
      required: [true, "Image URL is required"],
    },
    icon: {
      type: String,
      required: [true, "Icon name is required"],
    },
    tag: {
      type: String,
      required: [true, "Tag is required"],
    },
    color: {
      type: String,
      default: "from-teal-500 to-cyan-500",
    },
    bg: {
      type: String,
      default: "bg-teal-50",
    },
    gradient: {
      type: String,
      default: "from-teal-500/20 to-cyan-500/20",
    },
    fullDesc: {
      type: String,
      required: [true, "Full description is required"],
    },
    benefits: {
      type: [String],
      required: [true, "Benefits are required"],
    },
    duration: {
      type: String,
      required: [true, "Duration is required"],
    },
    recovery: {
      type: String,
      required: [true, "Recovery info is required"],
    },
    successRate: {
      type: String,
      required: [true, "Success rate is required"],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.models.Service || mongoose.model<IService>("Service", ServiceSchema);

export default Service;