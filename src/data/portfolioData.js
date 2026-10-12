export const portfolioData = {
  personal: {
    name: "Ranjit Kumar Jaiswal",
    title: "Frontend Engineer & Software Testing Specialist",
    statusBadge: "Available for Frontend & QA Opportunities",
    location: "India / Remote",
    phone: "+91 7004060528",
    phoneRaw: "7004060528",
    email: "ranjitjaiswal321@gmail.com",
    tagline: "Building responsive, modern web applications and architecting robust automated software test suites.",
    bio: "I am a passionate Frontend Engineer and Software Testing Specialist with a dual passion for crafting pixel-perfect, interactive user interfaces and ensuring rock-solid software quality. Leveraging modern technologies like React, JavaScript, Three.js, and automated QA tools (Cypress, Playwright, Selenium, Jest, Postman), I bridge the gap between creative frontend development and zero-defect quality assurance.",
    avatar: "/profile.jpg",
    resumeUrl: "/Ranjit_Kumar_Jaiswal_Resume.pdf",
    stats: [
      { label: "Years in Tech", value: "3+" },
      { label: "Projects & Suites", value: "25+" },
      { label: "QA Test Pass Rate", value: "99.8%" },
      { label: "Bugs Identified & Fixed", value: "200+" }
    ]
  },

  skills: [
    {
      category: "Frontend Engineering",
      color: "from-cyan-500 to-blue-600",
      items: [
        { name: "React.js", level: 94 },
        { name: "JavaScript (ES6+)", level: 92 },
        { name: "HTML5 & Semantic Markup", level: 96 },
        { name: "CSS3 & Tailwind CSS", level: 95 },
        { name: "Responsive & Mobile-First UI", level: 94 }
      ]
    },
    {
      category: "Programming Languages",
      color: "from-purple-500 to-indigo-600",
      items: [
        { name: "C++", level: 86 },
        { name: "Python", level: 88 },
        { name: "JavaScript", level: 92 },
        { name: "TypeScript", level: 85 },
        { name: "Data Structures & OOP", level: 88 }
      ]
    },
    {
      category: "Software Testing & QA Automation",
      color: "from-pink-500 to-rose-600",
      items: [
        { name: "Cypress & Playwright E2E", level: 90 },
        { name: "Selenium WebDriver", level: 86 },
        { name: "Unit & Integration Testing (Jest, PyTest)", level: 88 },
        { name: "API Testing (Postman / REST)", level: 92 },
        { name: "Manual, Regression & Smoke Testing", level: 95 }
      ]
    },
    {
      category: "Tools, 3D & Methodologies",
      color: "from-emerald-500 to-teal-600",
      items: [
        { name: "Git, GitHub & Version Control", level: 92 },
        { name: "Jira, TestRail & Defect Triage", level: 90 },
        { name: "Three.js & WebGL (3D UI)", level: 80 },
        { name: "CI/CD Automated Pipelines", level: 85 },
        { name: "Agile, Scrum & STLC/SDLC", level: 92 }
      ]
    }
  ],

  projects: [
    {
      id: "omnistore-frontend-qa",
      title: "OmniStore // E-Commerce & E2E Test Suite",
      category: "Frontend & QA",
      description: "Responsive e-commerce frontend built in React & Tailwind CSS, backed by an end-to-end automated test suite covering checkout, authentication, and cart flows.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Tailwind CSS", "Cypress", "Jest", "Redux Toolkit"],
      liveUrl: "https://example.com/omnistore",
      githubUrl: "https://github.com/Ranjitjaiswal1/omnistore-react-e2e",
      featured: true,
      color: "cyan",
      metrics: "100% Core Flow Coverage • 0 Defect Leakage"
    },
    {
      id: "qualityops-qa-dashboard",
      title: "QualityOps // Automated QA Metrics Portal",
      category: "Software Testing",
      description: "Real-time quality assurance dashboard visualizing automated test run pass/fail rates, execution logs, API response timings, and bug triage status.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Chart.js", "Playwright", "Postman", "Tailwind"],
      liveUrl: "https://example.com/qualityops",
      githubUrl: "https://github.com/Ranjitjaiswal1/qualityops-dashboard",
      featured: true,
      color: "purple",
      metrics: "Daily Automated CI Runs • 40% Faster Triage"
    },
    {
      id: "spectra-3d-experience",
      title: "Spectra 3D // Interactive Product Showcase",
      category: "3D WebGL",
      description: "Immersive 3D interactive WebGL web application with custom shader materials, particle lighting, and cross-browser performance benchmarks.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      tags: ["Three.js", "React Three Fiber", "WebGL", "Framer Motion"],
      liveUrl: "https://example.com/spectra-3d",
      githubUrl: "https://github.com/Ranjitjaiswal1/spectra-3d",
      featured: true,
      color: "pink",
      metrics: "60 FPS Smooth Render • Mobile Tested"
    },
    {
      id: "finpulse-api-matrix",
      title: "FinPulse // Banking Dashboard & API Test Matrix",
      category: "Frontend & QA",
      description: "Financial analytics web platform with live transaction feeds, responsive tables, and an automated Postman test collection validating 45+ REST endpoints.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Postman", "REST APIs", "Tailwind CSS"],
      liveUrl: "https://example.com/finpulse",
      githubUrl: "https://github.com/Ranjitjaiswal1/finpulse-banking-qa",
      featured: false,
      color: "emerald",
      metrics: "45+ API Endpoints Automated"
    },
    {
      id: "crosscheck-ui-library",
      title: "CrossCheck // Responsive UI Component Library",
      category: "Frontend",
      description: "Accessible, mobile-responsive UI design system and components tested against cross-browser visual regressions across Chrome, Firefox, Safari, and Edge.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
      liveUrl: "https://example.com/crosscheck",
      githubUrl: "https://github.com/Ranjitjaiswal1/crosscheck-ui-library",
      featured: false,
      color: "cyan",
      metrics: "100% Mobile & Tablet Responsive"
    },
    {
      id: "autohealth-smoke-suite",
      title: "AutoHealth // Automated CI Smoke Test Pipeline",
      category: "Software Testing",
      description: "Headless browser smoke test suite triggered on GitHub Actions before every deployment, verifying critical login, checkout, and search pathways.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
      tags: ["Selenium", "JavaScript", "GitHub Actions", "CI/CD"],
      liveUrl: "https://example.com/autohealth",
      githubUrl: "https://github.com/Ranjitjaiswal1/autohealth-smoke-ci",
      featured: false,
      color: "purple",
      metrics: "0 Downtime Deployments"
    }
  ],

  experience: [
    {
      role: "Frontend Engineer & QA Automation Lead",
      company: "InnovateTech Solutions",
      period: "2023 - Present",
      location: "India (Remote)",
      description: "Developing modern React web interfaces and spearheading end-to-end automated testing pipelines to guarantee exceptional user experience and zero regression bugs.",
      achievements: [
        "Built responsive client portals in React & Tailwind CSS with 99%+ mobile accessibility.",
        "Engineered Cypress & Playwright automation suites cutting regression testing cycle time by 65%.",
        "Configured CI/CD GitHub Actions to automatically run unit, integration, and E2E tests on pull requests."
      ]
    },
    {
      role: "Frontend Developer & Software Tester",
      company: "Apex Digital Systems",
      period: "2021 - 2023",
      location: "India",
      description: "Engineered performant frontend components, conducted thorough manual & functional testing, and validated REST API integrations.",
      achievements: [
        "Designed and shipped 15+ interactive web interfaces with seamless cross-browser compatibility.",
        "Created over 300+ comprehensive test cases in TestRail, decreasing critical production bugs by 45%.",
        "Automated API endpoint validations using Postman and Newman CLI."
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      institution: "State Technological University",
      period: "2019 - 2023",
      details: "Specialized in Software Engineering, Data Structures & Algorithms, Object-Oriented Programming (C++ & Python), Database Management Systems, and Web Application Development.",
      highlights: "Graduated with First Class Honors • Led Technical Coding & Testing Club"
    }
  ],

  certifications: [
    {
      title: "Meta Certified Frontend Developer",
      issuer: "Meta / Coursera",
      date: "2023",
      skills: "React, Advanced JavaScript, CSS Frameworks, UI/UX Principles"
    },
    {
      title: "Automated Software Testing & QA Mastery",
      issuer: "Test Automation University",
      date: "2023",
      skills: "Selenium WebDriver, Cypress, Playwright, TestNG, Cucumber BDD"
    },
    {
      title: "API Test Automation with Postman",
      issuer: "Postman Academy",
      date: "2022",
      skills: "REST API Verification, Newman CLI, Automated Regression Suites"
    },
    {
      title: "C++ & Object-Oriented Software Design",
      issuer: "Coding Ninjas",
      date: "2022",
      skills: "Data Structures, Algorithms, Memory Management, System Design"
    }
  ],

  testimonials: [
    {
      quote: "Ranjit has a rare dual mastery of interactive frontend development and automated QA testing. His automated suites caught critical edge cases before release, giving our engineering team 100% confidence.",
      author: "Arun Sharma",
      role: "Engineering Lead",
      company: "InnovateTech Solutions"
    },
    {
      quote: "Working with Ranjit was seamless. He delivers pixel-perfect UI in React with extraordinary attention to detail, and thoroughly tests every user flow across all browsers and devices.",
      author: "Priya Patel",
      role: "Senior Product Manager",
      company: "Apex Digital"
    },
    {
      quote: "His API test collections and automated smoke tests streamlined our deployment pipelines. A dedicated developer who takes immense pride in delivering bug-free software.",
      author: "David Chen",
      role: "Lead QA Architect",
      company: "Global Software Labs"
    }
  ],

  socials: {
    github: "https://github.com/Ranjitjaiswal1",
    linkedin: "https://linkedin.com/in/ranjit-kumar-jaiswal",
    twitter: "https://twitter.com",
    phone: "+91 7004060528",
    phoneRaw: "7004060528",
    whatsapp: "https://wa.me/917004060528?text=Hi%20Ranjit%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
    email: "ranjitjaiswal321@gmail.com"
  }
};
