import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Daniel Tesfaye Woldekirkos",
    "title": "Software Engineer",
    "email": "tesfayedanwk@gmail.com",
    "phone": "0909250060",
    "linkedin": "",
    "github": "",
    "location": "Addis Ababa, Ethiopia",
    "summary": "Software Engineer skilled in developing full-stack AI-powered applications with expertise in Python, JavaScript/Node.js, and TensorFlow. Passionate about creating innovative AI healthcare platforms and integrating machine learning models into practical solutions."
  },
  "experience": [
    {
      "title": "Developer",
      "company": "Self employed",
      "dates": "Jan 2023 - Dec 2023",
      "description": "Developed multiple applications as a freelance developer.",
      "highlights": [
        "RentEase: Developed a property rental management web app using React with TypeScript, Node.js, MongoDB, Stripe API.",
        "TaskMate: Built a task management app using Flutter, Firebase, SQLite.",
        "MindLink: Created a mental wellness app using Python (Flask), TensorFlow, React Native.",
        "FoodLens: Developed an AI-powered food recognition app using Python, FastAPI, TensorFlow, and AWS."
      ]
    },
    {
      "title": "Intern Website Developer",
      "company": "INSA (Information Network Security Administration)",
      "dates": "Jul 2024 - Oct 2024",
      "description": "Developed land management websites.",
      "highlights": [
        "Used Angular for frontend and .NET Core for backend."
      ]
    },
    {
      "title": "ML and AI Intern",
      "company": "Icog labs",
      "dates": "Jun 2025 - Present",
      "description": "Gaining experience as an ML and AI developer.",
      "highlights": []
    },
    {
      "title": "Application Development",
      "company": "Abyssinia bank",
      "dates": "Jul 2025 - Present",
      "description": "Developed and maintained banking features.",
      "highlights": [
        "Developed mobile banking features using Kony Visualizer and Fabric.",
        "Implemented secure transaction workflows.",
        "Collaborated with cross-functional teams for system validation."
      ]
    }
  ],
  "education": [
    {
      "degree": "Software Engineer",
      "institution": "Addis Ababa Science and Technology University",
      "years": "",
      "gpa": "3.82"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "Online Shopping Website",
      "description": "Developed a fully functional e-commerce website.",
      "technologies": [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "Student Information Storage",
      "description": "Created a storage application using C.",
      "technologies": [
        "C"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "Inventory Management",
      "description": "Created an application for effective management.",
      "technologies": [
        "Java"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "Clothing Store Website",
      "description": "Developed a website for merchandise using PHP.",
      "technologies": [
        "PHP"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "Land Management Website",
      "description": "Developed a website to manage land ownership using modern frameworks.",
      "technologies": [
        "Angular",
        ".NET Core"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "Entrance Exam Preparation Webapp",
      "description": "Developed a digital platform for national examinations with AI support.",
      "technologies": [
        "AI"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "Abyssinia Mobile App Update",
      "description": "Developed tax payment modules for a mobile app.",
      "technologies": [
        "Kony Visualizer",
        "Fabric"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "AI Annotation",
      "description": "Performed image and video annotation for AI projects.",
      "technologies": [
        "AI"
      ],
      "link": "",
      "github": ""
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "floating-shapes",
  "about": "modern",
  "experience": "detailed",
  "projects": "carousel",
  "skills": "categories",
  "skillsDisplay": "hero",
  "contact": "card",
  "colorPalette": "slate"
};
