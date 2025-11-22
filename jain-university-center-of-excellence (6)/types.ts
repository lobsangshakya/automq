
export enum UserRole {
  GUEST = 'GUEST',
  STUDENT = 'STUDENT',
  FACULTY = 'FACULTY',
  ADMIN = 'ADMIN',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  department?: string;
  coeId?: string; // COE the user belongs to
  description?: string; // For faculty descriptions
}

export enum PaperStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  publicationYear: number;
  department: string;
  abstract: string;
  fileUrl: string;
  doi: string;
  status: PaperStatus;
  submittedBy: string; // User ID
  coAuthors?: string;
  submissionDate?: string;
}

// FIX: Added 'UG', 'PG', and 'PhD' to ProjectLevel to align with form options in MyProjects.tsx and resolve type errors.
export type ProjectLevel = 'University' | 'National' | 'SIH' | 'Internal' | 'UG' | 'PG' | 'PhD';
export type ProjectProgress = 'Proposed' | 'Assigned' | 'Started' | 'In Progress' | 'Approval' | 'Completed' | 'Rejected';

export interface Project {
  id:string;
  title: string;
  description: string;
  team: string[];
  status: 'Ongoing' | 'Completed';
  imageUrl: string;
  labs?: string[];
  patents?: string[];
  funding?: string;
  // New fields for COE pages
  coeId: string;
  level: ProjectLevel;
  progress: ProjectProgress;
  department: string;
  proposerId: string; // Faculty user ID
  assignedStudentIds: string[]; // Student user IDs
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  category: 'Faculty Achievements' | 'Student Achievements' | 'General';
  author: string;
}

export enum EventStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: 'Workshop' | 'Hackathon' | 'Guest Lecture' | 'Seminar';
  registeredUsers?: string[];
  status: EventStatus;
  submittedBy: string; // User ID
  coeId?: string;
}

export interface CertificateData {
    recipientName: string;
    eventName: string;
    eventDate: string;
    certificateId: string;
}

export interface Achievement {
  id: string;
  title: string;
  recipient: string;
  category: 'Faculty' | 'Student' | 'University';
  date: string;
  description: string;
  imageUrl?: string;
}

export interface Comment {
  id: string;
  authorId: string; // User ID
  content: string;
  timestamp: string;
}

export interface CommunityPost {
  id: string;
  authorId: string; // User ID
  content: string;
  timestamp: string;
  likes: string[]; // Array of User IDs who liked the post
  comments: Comment[];
}

export interface COELeader {
  name: string;
  title: string;
  imageUrl: string;
  description: string;
}

export interface COE {
  id: string;
  name: string;
  longName: string;
  logoUrl: string; // Can be an icon component name or URL
  leader: COELeader;
  facultyIds: string[];
  studentIds: string[];
  tagline: string;
}