export interface Resume {
  resumeId: string;

  resumeTemplate: string;
  introduction: string;

  createdAt: string;
  lastModifiedAt: string;
  lastModifiedBy: string;
  currentRevision: string;
  revisions: any[];

  profile: Profile;
  educationDetails: EducationDetail[];
  workExperience: WorkExperience[];
  projects: Project[];
  primeActivities: Activity[];
  skills: Skill[];

  currentUser: User;
  owner: User;
  contributors: User[];
  readers: User[];
  reviewers: User[];
  publishers: User[];
}

export interface User {
  userId: string;
  userEmail: string;
  fullName: string;
  preferredName: string;
  role?: string;
}

export interface EducationDetail {
  objectId: string;
  type: string;
  title: string;
  institute: string;
  majors: string;
  startDate: string;
  endDate: string;
  summary: string;
  location: Location;
}

export interface Activity {
  activityId: string;
  activitiyDescription: string;
  keywords: any[];
}

export interface Profile {
  profileId: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  fullName: string;
  preferredName?: string;
  role: string;
  phone: string;
  phoneType?: string;
  location: Location;
  email: string;
}

export interface Location {
  city: string;
  state: string;
  county: string;
  zip: string;
  country: string;
  address: string;
}

export interface Project {
  projectId: string;
  projectName: string;
  role: string;
  clientName: string;
  company: Company;
  activities: Activity[];
}

export interface Skill {
  skillId: string;
  type: string;
  skillCategory: string;
  customSkills: any[];
}

export interface WorkExperience {
  wexId: string;
  role: string;
  startDate: string;
  endDate: string;
  company: Company;
  location: Location;
}

export interface Company {
  companyId: string;
  name: string;
}