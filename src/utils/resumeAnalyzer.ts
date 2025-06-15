
interface ResumeAnalysis {
  personalInfo: PersonalInfo;
  currentRole: CurrentRole;
  salaryEstimation: SalaryEstimation;
  preferredRole: PreferredRole;
  improvements: Improvements;
  skills: SkillsAnalysis;
}

interface PersonalInfo {
  name: string;
  contact: string;
  location: string;
  experience: string;
  education: string;
  summary: string;
}

interface CurrentRole {
  title: string;
  level: string;
  industry: string;
  responsibilities: string[];
  achievements: string[];
  matchScore: number;
}

interface SalaryEstimation {
  currentRange: { min: number; max: number };
  potentialRange: { min: number; max: number };
  factors: string[];
  marketAnalysis: string;
}

interface PreferredRole {
  suggestedRoles: string[];
  reasonsForFit: string[];
  growthPath: string[];
  marketDemand: string;
}

interface Improvements {
  technical: string[];
  soft: string[];
  certifications: string[];
  experience: string[];
  resume: string[];
}

interface SkillsAnalysis {
  technical: { skill: string; level: string; demand: string }[];
  soft: { skill: string; level: string; importance: string }[];
  trending: string[];
  gaps: string[];
}

export const analyzeResumeText = async (resumeText: string): Promise<ResumeAnalysis> => {
  // Simulate AI analysis - in a real app, this would call an AI service
  const analysis = await simulateAIAnalysis(resumeText);
  return analysis;
};

const simulateAIAnalysis = async (text: string): Promise<ResumeAnalysis> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Extract keywords and patterns from the resume text
  const keywords = extractKeywords(text);
  const experience = estimateExperience(text);
  const skills = extractSkills(text);

  return {
    personalInfo: {
      name: extractName(text) || "Not specified",
      contact: extractContact(text) || "Not provided",
      location: extractLocation(text) || "Not specified",
      experience: `${experience} years`,
      education: extractEducation(text) || "Not specified",
      summary: "Experienced professional with strong technical background"
    },
    currentRole: {
      title: determinePrimaryRole(skills, keywords),
      level: determineLevel(experience),
      industry: determineIndustry(keywords),
      responsibilities: generateResponsibilities(skills),
      achievements: ["Strong technical implementation", "Process optimization", "Team collaboration"],
      matchScore: Math.floor(Math.random() * 30) + 70
    },
    salaryEstimation: generateSalaryEstimation(experience, skills),
    preferredRole: generatePreferredRoles(skills, experience),
    improvements: generateImprovements(skills, experience),
    skills: generateSkillsAnalysis(skills, text)
  };
};

const extractKeywords = (text: string): string[] => {
  const commonKeywords = [
    'javascript', 'python', 'java', 'react', 'angular', 'vue', 'node',
    'aws', 'azure', 'docker', 'kubernetes', 'sql', 'mongodb', 'postgresql',
    'machine learning', 'data science', 'artificial intelligence', 'devops',
    'frontend', 'backend', 'fullstack', 'mobile', 'android', 'ios',
    'project management', 'agile', 'scrum', 'leadership', 'team lead'
  ];
  
  return commonKeywords.filter(keyword => 
    text.toLowerCase().includes(keyword.toLowerCase())
  );
};

const extractSkills = (text: string): string[] => {
  const skillKeywords = [
    'JavaScript', 'Python', 'Java', 'React', 'Angular', 'Vue.js', 'Node.js',
    'AWS', 'Azure', 'Docker', 'Kubernetes', 'SQL', 'MongoDB', 'PostgreSQL',
    'Machine Learning', 'Data Science', 'AI', 'DevOps', 'Git', 'Jenkins'
  ];
  
  return skillKeywords.filter(skill => 
    text.toLowerCase().includes(skill.toLowerCase())
  );
};

const estimateExperience = (text: string): number => {
  const experiencePatterns = [
    /(\d+)\+?\s*years?\s*(of\s*)?experience/i,
    /experience\s*[:.]?\s*(\d+)\+?\s*years?/i,
    /(\d+)\+?\s*yrs/i
  ];
  
  for (const pattern of experiencePatterns) {
    const match = text.match(pattern);
    if (match) {
      return parseInt(match[1]);
    }
  }
  
  // Fallback estimation based on content complexity
  return Math.floor(Math.random() * 8) + 2;
};

const extractName = (text: string): string | null => {
  const lines = text.split('\n');
  const firstLine = lines[0]?.trim();
  if (firstLine && firstLine.length < 50 && firstLine.includes(' ')) {
    return firstLine;
  }
  return null;
};

const extractContact = (text: string): string | null => {
  const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  const phonePattern = /[\+]?[\d\s\-\(\)]{10,}/;
  
  const email = text.match(emailPattern);
  const phone = text.match(phonePattern);
  
  if (email || phone) {
    return `${email ? email[0] : ''} ${phone ? phone[0] : ''}`.trim();
  }
  return null;
};

const extractLocation = (text: string): string | null => {
  const indianCities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Noida', 'Gurgaon'];
  
  for (const city of indianCities) {
    if (text.includes(city)) {
      return city;
    }
  }
  return null;
};

const extractEducation = (text: string): string | null => {
  const educationKeywords = ['B.Tech', 'B.E.', 'M.Tech', 'MBA', 'MCA', 'BCA', 'Bachelor', 'Master', 'PhD'];
  
  for (const keyword of educationKeywords) {
    if (text.includes(keyword)) {
      return keyword;
    }
  }
  return null;
};

const determinePrimaryRole = (skills: string[], keywords: string[]): string => {
  const roleMapping = {
    'Software Developer': ['javascript', 'python', 'java', 'react', 'angular'],
    'Data Scientist': ['python', 'machine learning', 'data science', 'sql'],
    'DevOps Engineer': ['aws', 'docker', 'kubernetes', 'jenkins'],
    'Frontend Developer': ['react', 'angular', 'vue', 'javascript'],
    'Backend Developer': ['node', 'python', 'java', 'sql'],
    'Full Stack Developer': ['react', 'node', 'javascript', 'sql'],
    'Project Manager': ['project management', 'agile', 'scrum', 'leadership']
  };
  
  let maxScore = 0;
  let primaryRole = 'Software Developer';
  
  for (const [role, roleSkills] of Object.entries(roleMapping)) {
    const score = roleSkills.filter(skill => 
      keywords.some(keyword => keyword.toLowerCase().includes(skill.toLowerCase()))
    ).length;
    
    if (score > maxScore) {
      maxScore = score;
      primaryRole = role;
    }
  }
  
  return primaryRole;
};

const determineLevel = (experience: number): string => {
  if (experience < 2) return 'Junior';
  if (experience < 5) return 'Mid-level';
  if (experience < 8) return 'Senior';
  return 'Lead/Principal';
};

const determineIndustry = (keywords: string[]): string => {
  const industries = ['Technology', 'Finance', 'Healthcare', 'E-commerce', 'Consulting'];
  return industries[Math.floor(Math.random() * industries.length)];
};

const generateResponsibilities = (skills: string[]): string[] => {
  const baseResponsibilities = [
    'Software development and implementation',
    'Code review and quality assurance',
    'Technical problem solving',
    'Collaboration with cross-functional teams'
  ];
  
  if (skills.some(skill => skill.toLowerCase().includes('react'))) {
    baseResponsibilities.push('Frontend user interface development');
  }
  
  if (skills.some(skill => skill.toLowerCase().includes('aws'))) {
    baseResponsibilities.push('Cloud infrastructure management');
  }
  
  return baseResponsibilities;
};

const generateSalaryEstimation = (experience: number, skills: string[]): SalaryEstimation => {
  let baseSalary = 400000; // Base salary for freshers in INR
  
  // Experience multiplier
  baseSalary += experience * 200000;
  
  // Skill premium
  const premiumSkills = ['aws', 'kubernetes', 'machine learning', 'react', 'python'];
  const skillPremium = premiumSkills.filter(skill => 
    skills.some(s => s.toLowerCase().includes(skill))
  ).length * 100000;
  
  baseSalary += skillPremium;
  
  const currentMin = Math.floor(baseSalary * 0.8);
  const currentMax = Math.floor(baseSalary * 1.2);
  const potentialMin = Math.floor(baseSalary * 1.3);
  const potentialMax = Math.floor(baseSalary * 1.8);
  
  return {
    currentRange: { min: currentMin, max: currentMax },
    potentialRange: { min: potentialMin, max: potentialMax },
    factors: [
      'Years of experience',
      'Technical skill proficiency',
      'Domain expertise',
      'Location and market demand',
      'Company size and industry'
    ],
    marketAnalysis: 'Based on current Indian IT market trends, your profile shows strong potential for growth in the technology sector.'
  };
};

const generatePreferredRoles = (skills: string[], experience: number): PreferredRole => {
  const roles = [];
  const reasons = [];
  const growthPath = [];
  
  if (skills.some(s => s.toLowerCase().includes('react'))) {
    roles.push('Senior Frontend Developer', 'React Specialist');
    reasons.push('Strong React ecosystem knowledge');
    growthPath.push('Frontend Architect', 'Technical Lead - Frontend');
  }
  
  if (skills.some(s => s.toLowerCase().includes('python'))) {
    roles.push('Python Developer', 'Backend Engineer');
    reasons.push('Python expertise with modern frameworks');
    growthPath.push('Senior Python Developer', 'System Architect');
  }
  
  if (skills.some(s => s.toLowerCase().includes('aws'))) {
    roles.push('Cloud Engineer', 'DevOps Specialist');
    reasons.push('Cloud platform expertise');
    growthPath.push('Cloud Architect', 'Principal DevOps Engineer');
  }
  
  if (experience >= 5) {
    roles.push('Technical Lead', 'Engineering Manager');
    reasons.push('Sufficient experience for leadership roles');
    growthPath.push('Engineering Manager', 'Director of Engineering');
  }
  
  return {
    suggestedRoles: roles.length > 0 ? roles : ['Software Developer', 'Full Stack Developer'],
    reasonsForFit: reasons.length > 0 ? reasons : ['Strong technical foundation', 'Good problem-solving skills'],
    growthPath: growthPath.length > 0 ? growthPath : ['Senior Developer', 'Technical Lead'],
    marketDemand: 'High demand in Indian IT market with excellent growth prospects'
  };
};

const generateImprovements = (skills: string[], experience: number): Improvements => {
  return {
    technical: [
      'Learn modern JavaScript frameworks',
      'Gain expertise in cloud platforms (AWS/Azure)',
      'Master database optimization techniques',
      'Develop proficiency in containerization (Docker)',
      'Learn microservices architecture patterns'
    ],
    soft: [
      'Enhance leadership and team management skills',
      'Improve communication and presentation abilities',
      'Develop project management competencies',
      'Strengthen problem-solving methodologies',
      'Build client interaction and stakeholder management skills'
    ],
    certifications: [
      'AWS Certified Solutions Architect',
      'Microsoft Azure Fundamentals',
      'Google Cloud Professional',
      'Certified Kubernetes Administrator',
      'PMP (Project Management Professional)'
    ],
    experience: [
      'Lead end-to-end project implementation',
      'Mentor junior developers',
      'Contribute to open-source projects',
      'Present at technical conferences',
      'Take ownership of critical system components'
    ],
    resume: [
      'Quantify achievements with specific metrics',
      'Add more technical project details',
      'Include relevant certifications and training',
      'Optimize keywords for ATS systems',
      'Add links to portfolio and GitHub projects'
    ]
  };
};

const generateSkillsAnalysis = (skills: string[], text: string): SkillsAnalysis => {
  const technicalSkills = skills.map(skill => ({
    skill,
    level: Math.random() > 0.5 ? 'Advanced' : 'Intermediate',
    demand: Math.random() > 0.3 ? 'High' : 'Medium'
  }));
  
  const softSkills = [
    { skill: 'Problem Solving', level: 'Advanced', importance: 'Critical' },
    { skill: 'Team Collaboration', level: 'Intermediate', importance: 'High' },
    { skill: 'Communication', level: 'Intermediate', importance: 'High' },
    { skill: 'Leadership', level: 'Beginner', importance: 'Medium' }
  ];
  
  return {
    technical: technicalSkills,
    soft: softSkills,
    trending: ['AI/ML', 'Cloud Computing', 'Microservices', 'DevOps', 'Cybersecurity'],
    gaps: ['System Design', 'Database Architecture', 'Performance Optimization', 'Security Best Practices']
  };
};
