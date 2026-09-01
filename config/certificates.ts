export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  brief: string;
  image: string;
  link: string;
}

export const certificates: Certificate[] = [
  {
    id: "openshift",
    name: "Cloud-Native Development with OpenShift and Kubernetes",
    issuer: "Red Hat",
    brief: "Comprehensive certification on Red Hat OpenShift and Kubernetes architecture, administration, and implementation.",
    image: "/images/certs/openshift.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/BIINP6DEBPOT"
  },
  {
    id: "ibm-software-developer",
    name: "IBM Full Stack Software Developer Professional Certificate",
    issuer: "IBM",
    brief: "Comprehensive certification covering 15 Courses in Full Stack Software Development using modern tools.",
    image: "/images/certs/IBM-SE.png",
    link: "https://www.credly.com/badges/d7d14c0a-5a82-4105-bfaf-fa7bd625bf0c/public_url"
  },
  {
    id: "sprints-x-microsoft-web-development",
    name: "Sprints x Microsoft Summer Camp - Web Development",
    issuer: "Microsoft",
    brief: "Comprehensive training on full stack software development using modern tools.",
    image: "/images/certs/Sprints x Microsoft Summer Camp - Web Development.png",
    link: "https://sprints.ai/en-eg/journeys/learning/1314/90132922/view-certificate"
  },
  {
    id: "nti-ecm-bpm",
    name: "Enterprise Content & Business Process Management",
    issuer: "NTI",
    brief: "\"Hire Ready\" track specializing in enterprise architecture, ECM administration, and BPM workflows.",
    // Point this to your actual image file once you drop it in the public folder
    image: "/images/certs/nti-certificate.png",
    // Paste your actual verification URL here
    link: "https://drive.google.com/file/d/17FzJKwJVzccqm26t5LQyqfmH-Md47jmd/view?usp=sharing"
  }
];
