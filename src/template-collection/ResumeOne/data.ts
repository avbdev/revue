import { Resume } from "./Interfaces";

export const sampleData: Resume = {
  resumeId: "790ed4b2-ae15-4004-b6c4-9653705a6aef",
  resumeTemplate: "ResumeOne",
  introduction:
    "I am a software engineer, having experience working with various enterprise teams for building end-to-end scalable and complex web and desktop apps using React.js, .NET Core and  .NET Framework.",
  lastModifiedAt: "1655512281333",
  lastModifiedBy: "",
  createdAt: "1655512281333",
  revisions: [],
  currentRevision: "001",
  currentUser: {
    userId: "",
    userEmail: "test@test.com",
    fullName: "CU_ First name",
    preferredName: "LN",
  },
  profile: {
    profileId: "9bbe23f8-e2d5-438d-bfd6-4c56464417f9",
    firstName: "First Name",
    middleName: "",
    lastName: "Last Name",
    fullName: "First Last",
    preferredName: "Bot FL",
    role: "Software Engineer",
    phone: "999-888-7777",
    phoneType: "Mobile",
    email: "test@test.com",
    location: {
      city: "Seattle",
      state: "WA",
      county: "",
      zip: "98012",
      country: "United States",
      address: "",
    },
  },
  educationDetails: [
    {
      objectId: "61019a0d-ae44-414d-87fc-02b8071d79a3",
      type: "Masters",
      majors: "Computer Science",
      title: "Masters in Computer Science",
      institute: "Some University",
      startDate: "Aug 2016",
      endDate: "Apr 2018",
      summary: "",
      location: {
        city: "New York",
        state: "NY",
        county: "",
        zip: "64468",
        country: "US",
        address: "",
      },
    },
    {
      objectId: "8542d27c-4f4b-4e93-9c43-847372e5f641",
      type: "Bachelors",
      majors: "Computer Science",
      title: "Bachelors  in Computer Science and Engineering",
      institute: "Some University",
      startDate: "Sept 2011",
      endDate: "May 2015",
      summary: "",
      location: {
        city: "",
        state: "",
        county: "",
        zip: "",
        country: "IN",
        address: "",
      },
    },
  ],
  workExperience: [
    {
      wexId: "084380bc-8974-42b4-9bfa-dd3da3386165",
      company: { companyId: "", name: "Company 1" },
      role: "Senior Software Engineer",
      startDate: "Dec 2020",
      endDate: "Current",
      location: {
        city: "Redmond",
        state: "WA",
        county: "",
        zip: "98012",
        country: "US",
        address: "",
      },
    },
    {
      wexId: "530fa7a5-089c-4761-a36b-e113e7e26cc1",
      company: { companyId: "", name: "Company 2" },
      role: "Software Engineer",
      startDate: "Dec 2018",
      endDate: "Dec 2020",
      location: {
        city: "Redmond",
        state: "WA",
        county: "",
        zip: "98012",
        country: "US",
        address: "",
      },
    },
    {
      wexId: "7e6ab2b4-42a1-492f-8f2c-90c9c0ff0d09",
      company: { companyId: "", name: "Company 3" },
      role: "Junior Developer",
      startDate: "Dec 2015",
      endDate: "Dec 2016",
      location: {
        city: "Hyderabad",
        state: "TS",
        county: "",
        zip: "",
        country: "IN",
        address: "",
      },
    },
  ],
  projects: [
    {
      projectId: "ce196f35-1462-4a13-9a0e-2e899c4cf7cd",
      projectName: "Project 1",
      role: "Software Developer",
      company: { companyId: "", name: "" },
      clientName: "Client 1",
      activities: [
        {
          activityId: "8804a2bc-35e0-48e5-8966-bec525162e6d",
          activitiyDescription: "",
          keywords: [],
        },
      ],
    },
    {
      projectId: "4ce18d9b-2e59-4fee-9753-2e6d045515d8",
      projectName: "Project 2",
      role: "Full Stack Developer",
      company: { companyId: "", name: "" },
      clientName: "Client 2",
      activities: [
        {
          activityId: "8804a2bc-35e0-48e5-8966-bec525162e6d",
          activitiyDescription: "",
          keywords: [],
        },
      ],
    },
    {
      projectId: "9bbe23f8-e2d5-438d-bfd6-4c56464417f9",
      projectName: "Project 3",
      role: "Build Moderator",
      company: { companyId: "", name: "" },
      clientName: "Client 3",
      activities: [
        {
          activityId: "8d242d08-1011-4abe-a00d-641e637fbd71",
          activitiyDescription: "",
          keywords: [],
        },
      ],
    },
    {
      projectId: "96bb7857-84f6-4f69-89e0-9b81e25bc244",
      projectName: "Project 4",
      role: "Software Developer",
      company: { companyId: "", name: "" },
      clientName: "Client 4",
      activities: [
        {
          activityId: "56857f29-1ca4-4d64-8a76-f0e8c8248b71",
          activitiyDescription: "",
          keywords: [],
        },
      ],
    },
    {
      projectId: "1e882dab-236f-42cb-aeff-fcee963b1a27",
      projectName: "Project 5",
      role: "Frontend Developer",
      company: { companyId: "", name: "" },
      clientName: "Client 5",
      activities: [
        {
          activityId: "7eaef3d7-541c-447b-8684-c8b3e2f43fc3",
          activitiyDescription: "",
          keywords: [],
        },
      ],
    },
  ],
  primeActivities: [
    {
      activityId: "53d57052-a99b-456f-8dd3-765abcaa4cc2",
      activitiyDescription:
        "Develop interactive, scalable and reusable components for web applications, based on the business requirements using React library.",
      keywords: [],
    },
    {
      activityId: "73f863d1-0933-48f9-93f6-8a0f3dcd685c",
      activitiyDescription:
        "Develop web applications using custom design controls from FluentUI, FluentUI Northstar and Bootstrap design libraries.",
      keywords: [],
    },
    {
      activityId: "c7553f97-9fe4-4550-b8e2-71e25c7adfaf",
      activitiyDescription:
        "Manage and control the state of the application using Redux, using  redux-thunkware as middleware.",
      keywords: [],
    },
  ],
  skills: [
    {
      skillId: "522215b7-6f6a-46e1-ac7f-540a78608213",
      type: "",
      skillCategory: "Languages",
      customSkills: ["Javascript", "Typescript", "C#", "Java"],
      // customSkills: ["Javascript, Typescript, C#, Java"]
    },
    {
      skillId: "323bb44a-3c81-4bf5-b84a-9bdb837b2be5",
      type: "",
      skillCategory: "Web",
      customSkills: ["React", "Angular", "NodeJs", ".Net Core", ".Net Framework", "API Design", "Rest API's"],
      // customSkills: ["React, Angular, NodeJs, .Net Core, .Net Framework, API Design, Rest API's"]
    },
    {
      skillId: "91cb2d41-d6b9-4edc-8b2f-b0035c557058",
      type: "",
      skillCategory: "Databases",
      customSkills: ["Microsoft SQL", "Cosmos DB", "Mongo DB"],
      // customSkills: ["Microsoft SQL, Cosmos DB, Mongo DB" ]
    },
    {
      skillId: "0fff99c8-3d06-4092-b928-15acf3bad6fb",
      type: "",
      skillCategory: "Version Control",
      customSkills: ["Git", "TFS", "Source Depot"],
      // customSkills: ["Git, TFS, Source Depot"]
    },
    {
      skillId: "584a6e11-4bef-4b43-b6e9-43f0a64f7631",
      type: "",
      skillCategory: "Build Management",
      customSkills: ["Azure DevOps", "Jenkins"],
      // customSkills: ["Azure DevOps, Jenkins"]
    },
    {
      skillId: "350518f0-8efd-448e-b61e-8d1984556790",
      type: "",
      skillCategory: "Cloud",
      customSkills: ["Microsoft Azure"],
      // customSkills: ["Microsoft Azure"]
    },
    {
      skillId: "dc7c1191-b4cc-4f60-81ce-a8f42e525e2b",
      type: "",
      skillCategory: "Design Libraries",
      customSkills: [
        "Fluent UI (Office UI Fabric)",
        "Fluent Northstar (Microsoft Teams UI Library)",
        "Bootstrap",
        "Material Design",
      ],
      // customSkills: ["Fluent UI (Office UI Fabric)", "Fluent Northstar (Microsoft Teams UI Library)", "Bootstrap", "Material Design"]
    },
  ],
  owner: {
    userId: "",
    userEmail: "",
    fullName: "",
    preferredName: "",
    role: "Creator",
  },
  contributors: [
    {
      userId: "",
      userEmail: "",
      fullName: "",
      preferredName: "",
      role: "Contributor",
    },
  ],
  readers: [
    {
      userId: "",
      userEmail: "",
      fullName: "",
      preferredName: "",
      role: "Reader",
    },
  ],
  reviewers: [
    {
      userId: "",
      userEmail: "",
      fullName: "",
      preferredName: "",
      role: "Reviewer",
    },
  ],
  publishers: [
    {
      userId: "",
      userEmail: "",
      fullName: "",
      preferredName: "",
      role: "Publisher",
    },
  ],
};
