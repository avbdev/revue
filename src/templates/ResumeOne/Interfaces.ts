export interface Resume {
    resumeId: string;
    resumeTemplate: string;
    educationDetails: EducationDetail[];
    workExperience: WorkExperience[];
    projects: Project[];
    introduction: string;
    primeActivities: Activity[];
    skills: Skill[];
    profile: Profile;
    createdAt: string;
    user: User;
    contributors: User[];
    readers: User[];
    reviewers: User[];
    publisher: User[];
    lastModifiedAt: string;
    lastModifiedBy: string;
    revisions: any[];
    currentRevision: string;
}

export interface User {
    userId: string;
    userEmail: string;
    fullName: string;
    preferredName: string;
    role: string;
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
    firstNme: string;
    middleName: string;
    lastName: string;
    fullName: string;
    preferredName: string;
    role: string;
    phone: string;
    phoneType: string;
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
    companyId: string;
    companyName: string;
    clientName: string;
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
    companyName: string;
    companyId: string;
    role: string;
    startDate: string;
    endDate: string;
    location: Location;
}
