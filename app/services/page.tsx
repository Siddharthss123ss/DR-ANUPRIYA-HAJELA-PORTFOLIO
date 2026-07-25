"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import {
  Ear,
  Waves,
  Microscope,
  Brain,
  Speech,
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Activity,
  Volume2,
  Mic,
  Clock,
  Scan,
  Headphones,
  Wind,
  X,
  Calendar,
  Phone,
  Award,
  Users,
  Star,
  AlertCircle,
  Video,
  Heart,
  User,
  BadgeCheck,
  Quote,
  Sparkles,
  Target,
  MessageCircle,
  PlayCircle,
  Loader2,
  Scissors,
  Bandage,
  Syringe,
  Bone,
  Eye,
  Droplet,
  FileText,
  Music,
  Zap,
  Info,
} from "lucide-react";

// ✅ ICON MAP
const iconMap: Record<string, any> = {
  Stethoscope,
  Mic,
  Ear,
  Microscope,
  Scissors,
  Activity,
  Brain,
  Bandage,
  Syringe,
  Waves,
  Clock,
  Volume2,
  Speech,
  HeartPulse,
  Wind,
  Scan,
  AlertCircle,
  User,
  Bone,
  Eye,
  Droplet,
  FileText,
  Music,
  Zap,
};

const FallbackIcon = Stethoscope;

interface Service {
  _id: string;
  slug: string;
  title: string;
  desc: string;
  shortDesc: string;
  image: string;
  icon: string;
  tag: string;
  color: string;
  bg: string;
  gradient: string;
  fullDesc: string;
  benefits: string[];
  procedures: string[];
  duration: string;
  recovery: string;
  successRate: string;
  featured: boolean;
  order: number;
}

// ✅ Procedure Details Interface
interface ProcedureDetail {
  name: string;
  description: string;
  category: string;
  icon: any;
}

// ✅ Procedure Details Data
const procedureDetails: Record<string, ProcedureDetail> = {
  // ========== EAR PROCEDURES ==========
  "Microscopic Ear Examination": {
    name: "Microscopic Ear Examination",
    description: "Advanced microscopic examination of the ear canal and eardrum using high-powered microscopes for accurate diagnosis of ear disorders.",
    category: "EAR",
    icon: Ear,
  },
  "Aural Toileting & Suction Clearance": {
    name: "Aural Toileting & Suction Clearance",
    description: "Professional cleaning of the ear canal using microsuction to remove wax, debris, and foreign materials safely without damaging the ear canal.",
    category: "EAR",
    icon: Ear,
  },
  "Intratympanic Therapy": {
    name: "Intratympanic Therapy",
    description: "Direct injection of medication into the middle ear through the eardrum for treating inner ear disorders like sudden hearing loss and Meniere's disease.",
    category: "EAR",
    icon: Ear,
  },
  "Foreign Body & Polyp Removal": {
    name: "Foreign Body & Polyp Removal",
    description: "Safe and precise removal of foreign objects or polyps from the ear canal using endoscopic techniques under microscopic guidance.",
    category: "EAR",
    icon: Ear,
  },
  "PTA": {
    name: "Pure Tone Audiometry (PTA)",
    description: "Standard hearing test that measures hearing sensitivity across different frequencies to determine the degree and type of hearing loss.",
    category: "EAR",
    icon: Ear,
  },
  "Tympanometry": {
    name: "Tympanometry",
    description: "Diagnostic test that measures the movement of the eardrum and middle ear function to detect fluid, perforations, or eustachian tube dysfunction.",
    category: "EAR",
    icon: Ear,
  },
  "ABR / BERA": {
    name: "Auditory Brainstem Response (ABR/BERA)",
    description: "Advanced neurological test measuring the brain's response to sound stimuli, essential for diagnosing hearing loss in infants and brainstem disorders.",
    category: "EAR",
    icon: Brain,
  },
  "OAE": {
    name: "Otoacoustic Emissions (OAE)",
    description: "Non-invasive test that measures sound waves produced by the inner ear, commonly used for newborn hearing screening.",
    category: "EAR",
    icon: Ear,
  },
  "Vestibular Testing (VNG/ENG)": {
    name: "Vestibular Testing (VNG/ENG)",
    description: "Comprehensive balance assessment using video nystagmography to evaluate vestibular function and diagnose dizziness disorders.",
    category: "EAR",
    icon: Ear,
  },
  "Tinnitus Evaluation & Management": {
    name: "Tinnitus Evaluation & Management",
    description: "Specialized assessment and treatment of ringing in the ears using sound therapy, cognitive behavioral therapy, and advanced management strategies.",
    category: "EAR",
    icon: Ear,
  },
  "Tympanoplasty": {
    name: "Tympanoplasty",
    description: "Surgical repair of the eardrum and middle ear structures to restore hearing and prevent recurrent ear infections.",
    category: "EAR",
    icon: Ear,
  },
  "Mastoidectomy": {
    name: "Mastoidectomy",
    description: "Surgical removal of infected mastoid air cells to treat chronic ear infections and cholesteatoma while preserving hearing function.",
    category: "EAR",
    icon: Ear,
  },
  "Stapedectomy / Stapedotomy": {
    name: "Stapedectomy / Stapedotomy",
    description: "Microsurgical procedure to replace the stapes bone with a prosthesis, restoring hearing in patients with otosclerosis.",
    category: "EAR",
    icon: Ear,
  },
  "Ossiculoplasty": {
    name: "Ossiculoplasty",
    description: "Reconstructive surgery of the middle ear bones (ossicles) to improve sound transmission and restore hearing.",
    category: "EAR",
    icon: Ear,
  },
  "Cochlear Implantation": {
    name: "Cochlear Implantation",
    description: "Advanced surgical implantation of a cochlear device to provide hearing sensation to patients with severe to profound hearing loss.",
    category: "EAR",
    icon: Ear,
  },
  "Myringotomy & Grommet Insertion": {
    name: "Myringotomy & Grommet Insertion",
    description: "Surgical creation of a small opening in the eardrum with placement of a ventilation tube to treat chronic middle ear fluid.",
    category: "EAR",
    icon: Ear,
  },
  "BAHA Surgery": {
    name: "BAHA Surgery",
    description: "Bone Anchored Hearing Aid implantation for patients with conductive hearing loss or single-sided deafness.",
    category: "EAR",
    icon: Ear,
  },
  "Pinna Laceration Repair": {
    name: "Pinna Laceration Repair",
    description: "Meticulous surgical repair of ear lacerations using microsurgical techniques to restore normal contour and function.",
    category: "EAR",
    icon: Ear,
  },
  "Otoplasty & Meatoplasty": {
    name: "Otoplasty & Meatoplasty",
    description: "Cosmetic and functional surgical procedures to correct ear shape deformities and widen the ear canal for better access.",
    category: "EAR",
    icon: Ear,
  },
  "Ear Lobe Repair & Piercing": {
    name: "Ear Lobe Repair & Piercing",
    description: "Specialized surgical repair of torn or stretched earlobes and professional piercing services using sterile techniques.",
    category: "EAR",
    icon: Ear,
  },
  "Keloid Excision & Intralesional Injections": {
    name: "Keloid Excision & Intralesional Injections",
    description: "Advanced treatment for keloid scars on the ear using surgical excision combined with steroid injections to prevent recurrence.",
    category: "EAR",
    icon: Ear,
  },

  // ========== NOSE PROCEDURES ==========
  "Nasal Endoscopy / Rhinolaryngoscopy": {
    name: "Nasal Endoscopy / Rhinolaryngoscopy",
    description: "Advanced endoscopic examination of the nasal cavity and throat using flexible or rigid endoscopes for accurate diagnosis.",
    category: "NOSE",
    icon: Wind,
  },
  "Allergy & Immunology Testing": {
    name: "Allergy & Immunology Testing",
    description: "Comprehensive allergy testing to identify triggers for nasal symptoms, sinusitis, and respiratory conditions.",
    category: "NOSE",
    icon: Wind,
  },
  "Olfactory (Smell) Testing": {
    name: "Olfactory (Smell) Testing",
    description: "Specialized testing of the sense of smell to diagnose olfactory disorders and sinus conditions.",
    category: "NOSE",
    icon: Wind,
  },
  "Radiology & Imaging": {
    name: "Radiology & Imaging",
    description: "Advanced imaging techniques including CT and MRI for detailed evaluation of nasal and sinus anatomy.",
    category: "NOSE",
    icon: Wind,
  },
  "Foreign Body Removal": {
    name: "Foreign Body Removal",
    description: "Safe endoscopic removal of foreign objects from the nose using specialized instruments under visualization.",
    category: "NOSE",
    icon: Wind,
  },
  "Epistaxis Management": {
    name: "Epistaxis Management",
    description: "Expert management of nosebleeds using cauterization, packing, or endoscopic techniques for severe cases.",
    category: "NOSE",
    icon: Wind,
  },
  "Nasal Polyp Biopsy": {
    name: "Nasal Polyp Biopsy",
    description: "Endoscopic biopsy of nasal polyps for histopathological evaluation to rule out malignancy.",
    category: "NOSE",
    icon: Wind,
  },
  "FESS": {
    name: "Functional Endoscopic Sinus Surgery (FESS)",
    description: "Minimally invasive sinus surgery using endoscopes to restore normal sinus drainage and function.",
    category: "NOSE",
    icon: Wind,
  },
  "Septoplasty": {
    name: "Septoplasty",
    description: "Surgical correction of a deviated nasal septum to improve breathing and relieve nasal obstruction.",
    category: "NOSE",
    icon: Wind,
  },
  "Turbinoplasty / Radiofrequency Ablation": {
    name: "Turbinoplasty / Radiofrequency Ablation",
    description: "Minimally invasive procedure to reduce enlarged turbinates using radiofrequency energy for better breathing.",
    category: "NOSE",
    icon: Wind,
  },
  "Rhinoplasty": {
    name: "Rhinoplasty",
    description: "Cosmetic and functional surgery of the nose to improve appearance, breathing, or both.",
    category: "NOSE",
    icon: Wind,
  },
  "Endoscopic CSF Leak Repair": {
    name: "Endoscopic CSF Leak Repair",
    description: "Advanced endoscopic surgery to repair cerebrospinal fluid leaks from the skull base.",
    category: "NOSE",
    icon: Wind,
  },
  "Endoscopic Cauterisation of Nose Bleeders": {
    name: "Endoscopic Cauterisation of Nose Bleeders",
    description: "Endoscopic procedure to cauterize bleeding vessels in the nose for persistent nosebleeds.",
    category: "NOSE",
    icon: Wind,
  },
  "Endoscopic Coblation Adenoidectomy": {
    name: "Endoscopic Coblation Adenoidectomy",
    description: "Minimally invasive removal of adenoids using coblation technology for reduced bleeding and faster recovery.",
    category: "NOSE",
    icon: Wind,
  },
  "Endonasal DCR": {
    name: "Endonasal DCR (Dacryocystorhinostomy)",
    description: "Endoscopic surgery to create a new tear drainage pathway for patients with blocked tear ducts.",
    category: "NOSE",
    icon: Wind,
  },
  "Nasal Bone Fracture Reduction": {
    name: "Nasal Bone Fracture Reduction",
    description: "Closed reduction of fractured nasal bones to restore normal shape and function.",
    category: "NOSE",
    icon: Wind,
  },
  "Balloon Sinuplasty": {
    name: "Balloon Sinuplasty",
    description: "Minimally invasive procedure using balloon dilation to open blocked sinus passages.",
    category: "NOSE",
    icon: Wind,
  },
  "Eustachian Tube Dilatation": {
    name: "Eustachian Tube Dilatation",
    description: "Balloon dilation of the eustachian tube to treat chronic dysfunction and middle ear issues.",
    category: "NOSE",
    icon: Wind,
  },

  // ========== THROAT PROCEDURES ==========
  "OPD": {
    name: "OPD Consultation",
    description: "Comprehensive outpatient consultation for throat disorders including detailed history and examination.",
    category: "THROAT",
    icon: Mic,
  },
  "Voice & Swallow Therapy": {
    name: "Voice & Swallow Therapy",
    description: "Specialized therapy for voice disorders and swallowing difficulties using evidence-based techniques.",
    category: "THROAT",
    icon: Mic,
  },
  "Sleep Medicine & Snoring Clinic": {
    name: "Sleep Medicine & Snoring Clinic",
    description: "Comprehensive evaluation and treatment of sleep disorders including snoring and sleep apnea.",
    category: "THROAT",
    icon: Mic,
  },
  "Flexible & Rigid Laryngoscopy": {
    name: "Flexible & Rigid Laryngoscopy",
    description: "Advanced endoscopic examination of the larynx using flexible and rigid scopes for accurate diagnosis.",
    category: "THROAT",
    icon: Mic,
  },
  "TNE": {
    name: "Transnasal Esophagoscopy (TNE)",
    description: "Minimally invasive examination of the esophagus using a thin flexible scope through the nose.",
    category: "THROAT",
    icon: Mic,
  },
  "VFSS": {
    name: "Videofluoroscopic Swallowing Study (VFSS)",
    description: "Dynamic X-ray study to evaluate swallowing function and identify swallowing disorders.",
    category: "THROAT",
    icon: Mic,
  },
  "Microlaryngeal Surgery": {
    name: "Microlaryngeal Surgery",
    description: "Precision microsurgery of the larynx using high-powered microscopes for voice preservation.",
    category: "THROAT",
    icon: Mic,
  },
  "Tracheostomy": {
    name: "Tracheostomy",
    description: "Surgical creation of an airway opening in the trachea for patients with breathing difficulties.",
    category: "THROAT",
    icon: Mic,
  },
  "UPPP & Snoroplasty": {
    name: "UPPP & Snoroplasty",
    description: "Surgical procedures to treat snoring and sleep apnea by removing excess throat tissue.",
    category: "THROAT",
    icon: Mic,
  },
  "Thyroidectomy": {
    name: "Thyroidectomy",
    description: "Surgical removal of all or part of the thyroid gland for various thyroid conditions.",
    category: "THROAT",
    icon: Mic,
  },
  "Tonsillectomy": {
    name: "Tonsillectomy",
    description: "Surgical removal of the tonsils for recurrent infections or tonsil stones.",
    category: "THROAT",
    icon: Mic,
  },
  "Adenoidectomy": {
    name: "Adenoidectomy",
    description: "Surgical removal of the adenoids to improve breathing and reduce ear problems.",
    category: "THROAT",
    icon: Mic,
  },
  "Coblation Tonsillectomy": {
    name: "Coblation Tonsillectomy",
    description: "Minimally invasive tonsil removal using coblation technology for less pain and faster recovery.",
    category: "THROAT",
    icon: Mic,
  },
  "Tonsillolith Removal": {
    name: "Tonsillolith Removal",
    description: "Removal of tonsil stones or debris from the tonsil crypts using specialized techniques.",
    category: "THROAT",
    icon: Mic,
  },
  "Narrow Band Imaging (NBI)": {
    name: "Narrow Band Imaging (NBI)",
    description: "Advanced endoscopic imaging technique to detect early mucosal lesions and tumors.",
    category: "THROAT",
    icon: Mic,
  },

  // ========== HEAD & NECK PROCEDURES ==========
  "Biopsy of Oral Ulcers": {
    name: "Biopsy of Oral Ulcers",
    description: "Diagnostic biopsy of oral ulcers to rule out malignancy and determine appropriate treatment.",
    category: "HEAD & NECK",
    icon: Brain,
  },
  "Biopsy of Head & Neck Swellings": {
    name: "Biopsy of Head & Neck Swellings",
    description: "Diagnostic biopsy of head and neck masses for histopathological evaluation.",
    category: "HEAD & NECK",
    icon: Brain,
  },
  "Parotidectomy": {
    name: "Parotidectomy",
    description: "Surgical removal of the parotid gland for tumors or chronic infections with facial nerve preservation.",
    category: "HEAD & NECK",
    icon: Brain,
  },
  "Head & Neck Tumour Removal": {
    name: "Head & Neck Tumour Removal",
    description: "Oncological surgery for head and neck tumors with reconstruction for optimal functional results.",
    category: "HEAD & NECK",
    icon: Brain,
  },
  "Thyroglossal Cyst & Fistula Excision": {
    name: "Thyroglossal Cyst & Fistula Excision",
    description: "Complete surgical excision of thyroglossal cysts and fistulas with recurrence prevention.",
    category: "HEAD & NECK",
    icon: Brain,
  },
  "Endoscopic Skull Base Tumour Removal": {
    name: "Endoscopic Skull Base Tumour Removal",
    description: "Advanced endoscopic surgery for skull base tumors using minimally invasive techniques.",
    category: "HEAD & NECK",
    icon: Brain,
  },

  // ========== FACIAL TRAUMA PROCEDURES ==========
  "Nasal Bone Fracture": {
    name: "Nasal Bone Fracture",
    description: "Management of nasal bone fractures using closed or open reduction techniques.",
    category: "FACIAL TRAUMA",
    icon: Bone,
  },
  "Zygomatic Fracture": {
    name: "Zygomatic Fracture",
    description: "Surgical repair of cheekbone fractures with restoration of facial symmetry and contour.",
    category: "FACIAL TRAUMA",
    icon: Bone,
  },
  "Orbital Fracture": {
    name: "Orbital Fracture",
    description: "Specialized surgery for eye socket fractures with protection of visual function.",
    category: "FACIAL TRAUMA",
    icon: Bone,
  },
  "Maxillary Fracture": {
    name: "Maxillary Fracture",
    description: "Open reduction and fixation of upper jaw fractures for optimal facial structure restoration.",
    category: "FACIAL TRAUMA",
    icon: Bone,
  },
  "Mandibular Fracture": {
    name: "Mandibular Fracture",
    description: "Surgical repair of lower jaw fractures using rigid fixation techniques.",
    category: "FACIAL TRAUMA",
    icon: Bone,
  },
  "Frontal Bone Fracture": {
    name: "Frontal Bone Fracture",
    description: "Management of forehead bone fractures with protection of the brain and frontal sinus.",
    category: "FACIAL TRAUMA",
    icon: Bone,
  },
  "Panfacial Fracture Reconstruction": {
    name: "Panfacial Fracture Reconstruction",
    description: "Comprehensive reconstruction of multiple facial fractures for complete restoration.",
    category: "FACIAL TRAUMA",
    icon: Bone,
  },
};

// ✅ Procedure Categories Data
const procedureCategories = [
  {
    id: "ear",
    title: "EAR",
    icon: Ear,
    gradient: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-700",
    procedures: [
      "Microscopic Ear Examination",
      "Aural Toileting & Suction Clearance",
      "Intratympanic Therapy",
      "Foreign Body & Polyp Removal",
      "PTA",
      "Tympanometry",
      "ABR / BERA",
      "OAE",
      "Vestibular Testing (VNG/ENG)",
      "Tinnitus Evaluation & Management",
      "Tympanoplasty",
      "Mastoidectomy",
      "Stapedectomy / Stapedotomy",
      "Ossiculoplasty",
      "Cochlear Implantation",
      "Myringotomy & Grommet Insertion",
      "BAHA Surgery",
      "Pinna Laceration Repair",
      "Otoplasty & Meatoplasty",
      "Ear Lobe Repair & Piercing",
      "Keloid Excision & Intralesional Injections",
    ],
  },
  {
    id: "nose",
    title: "NOSE",
    icon: Wind,
    gradient: "from-teal-500 to-cyan-500",
    bg: "bg-teal-50",
    border: "border-teal-200",
    text: "text-teal-700",
    procedures: [
      "Nasal Endoscopy / Rhinolaryngoscopy",
      "Allergy & Immunology Testing",
      "Olfactory (Smell) Testing",
      "Radiology & Imaging",
      "Foreign Body Removal",
      "Epistaxis Management",
      "Nasal Polyp Biopsy",
      "FESS",
      "Septoplasty",
      "Turbinoplasty / Radiofrequency Ablation",
      "Rhinoplasty",
      "Endoscopic CSF Leak Repair",
      "Endoscopic Cauterisation of Nose Bleeders",
      "Endoscopic Coblation Adenoidectomy",
      "Endonasal DCR",
      "Nasal Bone Fracture Reduction",
      "Balloon Sinuplasty",
      "Eustachian Tube Dilatation",
    ],
  },
  {
    id: "throat",
    title: "THROAT",
    icon: Mic,
    gradient: "from-purple-500 to-pink-500",
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-700",
    procedures: [
      "OPD",
      "Voice & Swallow Therapy",
      "Sleep Medicine & Snoring Clinic",
      "Flexible & Rigid Laryngoscopy",
      "TNE",
      "VFSS",
      "Microlaryngeal Surgery",
      "Tracheostomy",
      "UPPP & Snoroplasty",
      "Thyroidectomy",
      "Tonsillectomy",
      "Adenoidectomy",
      "Coblation Tonsillectomy",
      "Tonsillolith Removal",
      "Narrow Band Imaging (NBI)",
    ],
  },
  {
    id: "head-neck",
    title: "HEAD & NECK",
    icon: Brain,
    gradient: "from-blue-500 to-indigo-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-700",
    procedures: [
      "Biopsy of Oral Ulcers",
      "Biopsy of Head & Neck Swellings",
      "Thyroidectomy",
      "Parotidectomy",
      "Head & Neck Tumour Removal",
      "Thyroglossal Cyst & Fistula Excision",
      "Endoscopic Skull Base Tumour Removal",
    ],
  },
  {
    id: "facial-trauma",
    title: "FACIAL TRAUMA",
    icon: Bone,
    gradient: "from-red-500 to-rose-500",
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-700",
    procedures: [
      "Nasal Bone Fracture",
      "Zygomatic Fracture",
      "Orbital Fracture",
      "Maxillary Fracture",
      "Mandibular Fracture",
      "Frontal Bone Fracture",
      "Panfacial Fracture Reconstruction",
    ],
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedProcedure, setSelectedProcedure] = useState<ProcedureDetail | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/services");
      const data = await response.json();

      console.log("📦 Services Data:", data);

      if (data.success) {
        setServices(data.data);
      } else {
        setError(data.error || "Failed to load services");
      }
    } catch (err) {
      setError("Failed to load services");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleProcedureClick = (procedureName: string) => {
    const detail = procedureDetails[procedureName];
    if (detail) {
      setSelectedProcedure(detail);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <Loader2 size={48} className="text-teal-600 animate-spin mx-auto" />
          <p className="mt-4 text-gray-600">Loading services...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md">
          <p className="text-red-600">{error}</p>
          <button
            onClick={fetchServices}
            className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="overflow-hidden bg-white">

      {/* ========== HERO SECTION ========== */}
      <section className="relative overflow-hidden pt-36 pb-28 lg:pt-44 lg:pb-36 min-h-[700px] flex items-center">
        
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/Images/anu1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        
        <div className="absolute inset-0 z-[1] bg-white/40"></div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-teal-40/40 via-transparent to-cyan-50/30"></div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-white via-white/30 to-transparent"></div>
        
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl z-[1]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl z-[1]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-white/90 backdrop-blur-sm border border-teal-100/50 px-8 py-3 shadow-xl shadow-teal-500/10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                </span>
                <ShieldCheck size={18} className="text-teal-600" />
              </div>
              <span className="text-teal-700 font-bold tracking-[2px] uppercase text-sm">
                Premium ENT Care
              </span>
            </div>

            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight text-gray-900">
              Comprehensive ENT
              <span className="block bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                Care & Treatments
              </span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg lg:text-xl leading-9 text-gray-700">
              State-of-the-art and tailored to your needs, our ENT services combine 
              advanced surgical expertise with compassionate patient care.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-xl hover:shadow-teal-500/25 hover:scale-[1.02] transition-all duration-300"
              >
                <Calendar size={20} />
                Book Consultation
              </a>
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-700 font-bold rounded-full border border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300">
                <PlayCircle size={20} className="text-teal-600" />
                Watch Video
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
              {[
                { icon: Award, label: "Experience", value: "20+ Years" },
                { icon: Users, label: "Happy Patients", value: "50,000+" },
                { icon: Star, label: "Success Rate", value: "98%" },
                { icon: Heart, label: "Satisfaction", value: "4.9/5" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-100/50 shadow-lg shadow-gray-200/20 hover:shadow-teal-500/10 transition-all duration-300"
                >
                  <stat.icon className="w-7 h-7 text-teal-600 mx-auto mb-1" />
                  <div className="text-2xl font-black text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== SERVICES GRID ========== */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 rounded-full bg-teal-50 px-8 py-3 text-teal-700 font-bold border border-teal-100">
              <Stethoscope size={18} />
              Our Specialties
            </div>
            <h2 className="mt-6 text-4xl lg:text-5xl font-black leading-tight text-gray-900">
              Advanced ENT
              <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Surgical Services
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Highly qualified team of ENT Specialist Doctors with expertise in advanced surgical procedures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || FallbackIcon;
              return (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-[32px] border border-gray-200 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_80px_rgba(13,148,136,0.12)] hover:border-teal-200 transition-all duration-500"
                >
                  <div className="relative h-48 bg-gradient-to-br from-teal-50/60 to-cyan-50/60 overflow-hidden">
                    {service.image && (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-xl shadow-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon size={40} />
                      </div>
                    </div>

                    {service.tag && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-teal-700 rounded-full border border-teal-100">
                          {service.tag}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-black text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {service.shortDesc || service.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {service.procedures && service.procedures.slice(0, 2).map((proc: string, i: number) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">
                          {proc}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedService(service)}
                      className="mt-6 inline-flex items-center gap-2 text-teal-600 font-bold hover:gap-4 transition-all duration-300 group/btn"
                    >
                      Know More
                      <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all duration-300" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== PROCEDURES BY CATEGORY ========== */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 rounded-full bg-teal-100 px-8 py-3 text-teal-800 font-bold">
              <Microscope size={18} />
              Complete ENT Procedure Guide
            </div>
            <h2 className="mt-6 text-4xl lg:text-5xl font-black leading-tight text-gray-900">
              Premium ENT
              <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Procedures & Treatments
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of advanced ENT procedures across all subspecialties
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {procedureCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className={`rounded-[32px] border ${category.border} ${category.bg} p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${category.gradient} text-white flex items-center justify-center shadow-lg`}>
                      <Icon size={28} />
                    </div>
                    <h3 className={`text-2xl font-black ${category.text}`}>
                      {category.title}
                    </h3>
                    <span className={`ml-auto px-3 py-1 rounded-full bg-white/80 text-xs font-bold ${category.text} border ${category.border}`}>
                      {category.procedures.length} Procedures
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {category.procedures.map((procedure, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleProcedureClick(procedure)}
                        className="flex items-start gap-2 p-2 rounded-xl hover:bg-white/80 transition-all duration-200 cursor-pointer group"
                      >
                        <CheckCircle2 size={16} className={`${category.text} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`} />
                        <span className="text-gray-700 text-sm font-medium leading-relaxed group-hover:text-gray-900">
                          {procedure}
                        </span>
                        <Info size={14} className={`${category.text} flex-shrink-0 mt-0.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity`} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-full shadow-xl shadow-teal-500/25">
              <Sparkles size={20} className="text-yellow-300" />
              <span className="font-bold">Premium ENT Care – Advanced Procedures, Exceptional Results</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== SURGICAL PROCEDURES ========== */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 rounded-full bg-blue-50 px-8 py-3 text-blue-700 font-bold">
              <Microscope size={18} />
              Surgical Expertise
            </div>
            <h2 className="mt-8 text-4xl lg:text-5xl font-black leading-tight text-gray-900">
              Advanced ENT Surgical
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Procedures & Techniques
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
            {services.map((service) => (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 hover:bg-teal-50 hover:border-teal-200 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <CheckCircle2 size={16} className="text-teal-600 flex-shrink-0" />
                <span className="text-gray-700 font-semibold text-sm group-hover:text-teal-600 transition-colors">
                  {service.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PATIENT REVIEWS ========== */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50/30 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 rounded-full bg-teal-100 px-8 py-3 text-teal-800 font-bold">
              <Quote size={18} />
              Patient Reviews
            </div>
            <h2 className="mt-8 text-4xl lg:text-5xl font-black leading-tight text-gray-900">
              What Our
              <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Patients Say
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {[
              {
                name: "Patient Review",
                text: "One of the Best ENT Care Hospitals. Dr. Anupriya listens to you very patiently & gives you sufficient time to say your problems. She is very caring and soft spoken. She is a dedicated Doctor.",
                rating: 5,
              },
              {
                name: "Patient Review",
                text: "Excellent care and treatment. The staff is very professional and the doctor explained everything clearly. I felt very comfortable throughout my treatment.",
                rating: 5,
              },
            ].map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[32px] border border-gray-200 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white font-black">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">Verified Patient</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            Book Your First Appointment
          </h2>
          <p className="mt-4 text-xl text-teal-100 max-w-2xl mx-auto">
            Book your consultation today and start your journey with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-teal-700 font-bold rounded-full hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <Calendar size={20} />
              Book Consultation
            </a>
            <a
              href="tel:+917777802365"
              className="inline-flex items-center gap-3 px-10 py-4 bg-teal-700 text-white font-bold rounded-full hover:bg-teal-800 hover:shadow-xl transition-all duration-300"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ========== PROCEDURE DETAIL MODAL ========== */}
      <AnimatePresence>
        {selectedProcedure && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedProcedure(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-2xl w-full bg-white rounded-[40px] shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProcedure(null)}
                className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <X size={22} />
              </button>

              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white flex items-center justify-center shadow-lg shadow-teal-500/20">
                    {selectedProcedure.icon && <selectedProcedure.icon size={32} />}
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold rounded-full border border-teal-200">
                      {selectedProcedure.category}
                    </div>
                    <h3 className="mt-2 text-2xl lg:text-3xl font-black text-gray-900">
                      {selectedProcedure.name}
                    </h3>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <p className="text-lg leading-relaxed text-gray-700">
                    {selectedProcedure.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300"
                  >
                    <Calendar size={18} />
                    Book Consultation
                  </a>
                  <button
                    onClick={() => setSelectedProcedure(null)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-bold rounded-full hover:bg-gray-200 transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== SERVICE MODAL ========== */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full bg-white rounded-[40px] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <X size={22} />
              </button>

              <div className="relative">
                <div className="relative h-64 bg-gradient-to-r from-teal-600 to-cyan-600 overflow-hidden">
                  {selectedService.image && (
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="w-full h-full object-cover opacity-30"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {(() => {
                      const ModalIcon = iconMap[selectedService.icon] || FallbackIcon;
                      return <ModalIcon className="w-24 h-24 text-white/30" />;
                    })()}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-3xl font-black text-white">{selectedService.title}</h3>
                    {selectedService.tag && (
                      <span className="mt-2 inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full">
                        {selectedService.tag}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <p className="text-lg leading-relaxed text-gray-700">
                    {selectedService.fullDesc || selectedService.desc}
                  </p>

                  {selectedService.procedures && selectedService.procedures.length > 0 && (
                    <div className="mt-8">
                      <h4 className="text-sm font-bold uppercase tracking-[2px] text-teal-600">Procedures</h4>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {selectedService.procedures.map((proc: string, i: number) => (
                          <span key={i} className="px-4 py-2 bg-teal-50 text-teal-700 font-bold rounded-full text-sm">
                            {proc}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedService.benefits && selectedService.benefits.length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-sm font-bold uppercase tracking-[2px] text-teal-600">Benefits</h4>
                      <div className="grid grid-cols-2 gap-3 mt-3">
                        {selectedService.benefits.map((benefit: string, i: number) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-teal-500 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedService.recovery && (
                    <div className="mt-6 p-4 bg-teal-50 rounded-2xl border border-teal-100">
                      <div className="flex items-start gap-3">
                        <Clock size={20} className="text-teal-600 mt-1" />
                        <div>
                          <h4 className="font-bold text-teal-800">Recovery Time</h4>
                          <p className="text-gray-700">{selectedService.recovery}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="/contact"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300"
                    >
                      <Calendar size={20} />
                      Book Consultation
                    </a>
                    <a
                      href="tel:+917777802365"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-100 text-gray-700 font-bold rounded-full hover:bg-gray-200 transition-all duration-300"
                    >
                      <Phone size={20} />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}