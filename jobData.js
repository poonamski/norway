// Job data generator - deterministically generates 100,000 jobs for Norway
const TOTAL_JOBS = 100000;

const jobTitles = [
  "Software Engineer", "Frontend Developer", "Backend Developer", "Full Stack Developer",
  "Data Analyst", "Data Scientist", "Machine Learning Engineer", "DevOps Engineer",
  "Cloud Architect", "Mobile Developer", "Android Developer", "iOS Developer",
  "Product Manager", "Project Manager", "Scrum Master", "Business Analyst",
  "UI/UX Designer", "Graphic Designer", "Brand Designer", "Web Designer",
  "Marketing Manager", "Digital Marketing Specialist", "SEO Specialist", "Content Writer",
  "Copywriter", "Social Media Manager", "Community Manager", "Growth Hacker",
  "Sales Manager", "Account Manager", "Business Development Manager", "Sales Executive",
  "Financial Analyst", "Accountant", "Finance Manager", "Auditor",
  "HR Manager", "HR Generalist", "Recruiter", "Talent Acquisition Specialist",
  "Operations Manager", "Supply Chain Manager", "Logistics Coordinator", "Procurement Officer",
  "Customer Success Manager", "Customer Support Specialist", "Technical Support Engineer",
  "Network Engineer", "Cybersecurity Analyst", "Information Security Officer",
  "Database Administrator", "Systems Administrator", "IT Manager", "CTO",
  "Legal Counsel", "Compliance Officer", "Risk Manager", "Contract Manager",
  "Healthcare Administrator", "Clinical Research Associate", "Pharmacist", "Nurse",
  "Teacher", "Education Consultant", "Instructional Designer", "Training Manager",
  "Civil Engineer", "Mechanical Engineer", "Electrical Engineer", "Structural Engineer",
  "Architect", "Urban Planner", "Environmental Consultant", "Safety Officer",
  "Real Estate Agent", "Property Manager", "Facilities Manager", "Construction Manager",
  "Research Analyst", "Policy Analyst", "Communications Manager", "Public Relations Officer",
  "Executive Assistant", "Administrative Officer", "Office Manager", "Receptionist",
  "Video Editor", "Motion Graphics Designer", "Content Strategist", "Brand Manager",
  "Partnerships Manager", "Customer Experience Manager", "Data Engineer", "BI Developer",
  "Scrum Master", "Agile Coach", "Release Manager", "Site Reliability Engineer",
  "Penetration Tester", "Cloud Engineer", "Platform Engineer", "API Developer",
  "Hotel Manager", "Restaurant Manager", "Chef", "Sommelier", "Event Manager",
  "Aviation Engineer", "Pilot", "Flight Attendant", "Airport Manager",
  "Fisheries Manager", "Marine Biologist", "Offshore Engineer", "Petroleum Engineer",
  "Renewable Energy Specialist", "Wind Turbine Technician", "Hydroelectric Engineer"
];

// Norway-specific companies + global companies with Norway presence
const companies = [
  // Norwegian companies
  "Equinor", "Statoil", "Norsk Hydro", "Yara International", "Telenor", "DNB ASA",
  "Aker Solutions", "Kongsberg Gruppen", "Kongsberg Automotive", "Norske Skog",
  "Orkla", "Mowi", "SalMar", "Grieg Seafood", "Lerøy Seafood",
  "NEL ASA", "Scatec Solar", "REC Silicon", "Elkem", "Norsk Titanium",
  "Norwegian Air Shuttle", "Widerøe", "SAS Norge",
  "NHST Media Group", "Schibsted", "Amedia", "Polaris Media",
  "Mnemonic", "PwC Norway", "Deloitte Norway", "EY Norway", "KPMG Norway",
  "Crayon", "Bouvet", "Evry", "Visma", "Computas", "BEKK Consulting",
  "Statens Vegvesen", "Norwegian Public Roads Administration",
  
  // New requested companies
  "Netflix", "YouTube", "Delta Airlines", "Southwest Airlines", "American Airlines",
  "Tesla", "Apple", "Amazon", "Google", "CostCo", "Disney", "United Airlines",
  "Wayfair", "Starbucks", "Walmart", "American Express", "Wells Fargo",
  "Aetna", "Twitter", "CVS", "Hobby Lobby", "Home Depot", "Target",
  "Yelp", "Crocs", "Xbox", "Dell", "Anthem", "LabCorp", "TTEC",
  "Polaris", "UCHealth", "Hulu", "NDT", "CrunchyRoll", "Eddie Bauer",
  "USPC", "JetBlue Airways", "UPS", "Chewy",
  
  // Remote-first companies
  "Automattic", "GitLab", "Zapier", "Shopify", "Buffer", "InVision",
  "Toptal", "Basecamp", "Doist", "HubSpot", "Atlassian", "Trello",
  "CrowdStrike", "Elastic", "Twilio", "GitHub", "Dropbox", "LinkedIn",
  "Upwork", "FlexJobs", "GitKraken", "Salesforce", "Slack", "Indeed",
  "Pinterest", "Zendesk", "Squarespace", "Stripe", "WeWork", "Calendly",
  "TaxJar", "Front", "Cloudflare", "Automox", "Veeva Systems", "MURAL",
  
  // Norway government
  "Norwegian Government", "Oslo Municipality", "Bergen Municipality", "Trondheim Municipality",
  "Stavanger Municipality", "Kristiansand Municipality", "Drammen Municipality",
  "Ministry of Labour and Social Inclusion", "Norwegian Labour and Welfare Administration",
  "Ministry of Trade, Industry and Fisheries", "Innovation Norway",
  "Norwegian Research Council", "Norwegian Institute of Technology"
];

const norwayLocations = [
  // Oslo
  "Oslo City Center, Oslo", "Majorstuen, Oslo", "Frogner, Oslo", "Grünerløkka, Oslo",
  "St. Hanshaugen, Oslo", "Sagene, Oslo", "Nordre Aker, Oslo", "Bjerke, Oslo",
  "Grorud, Oslo", "Stovner, Oslo", "Alna, Oslo", "Østensjø, Oslo",
  "Nordstrand, Oslo", "Søndre Nordstrand, Oslo", "Vestre Aker, Oslo",
  "Ullern, Oslo", "Marka, Oslo", "Sentrum, Oslo", "Aker Brygge, Oslo",
  "Tjuvholmen, Oslo", "Bjørvika, Oslo", "Kvadraturen, Oslo",
  
  // Bergen
  "Bergen City Center, Bergen", "Bryggen, Bergen", "Fyllingsdalen, Bergen",
  "Laksevåg, Bergen", "Åsane, Bergen", "Arna, Bergen", "Fana, Bergen",
  "Ytrebygda, Bergen", "Bergenhus, Bergen", "Sandviken, Bergen",
  "Nesttun, Bergen", "Landås, Bergen", "Paradis, Bergen", "Danmarksplass, Bergen",
  
  // Trondheim
  "Trondheim City Center, Trondheim", "Midtbyen, Trondheim", "Lade, Trondheim",
  "Heimdal, Trondheim", "Tiller, Trondheim", "Byåsen, Trondheim",
  "Tyholt, Trondheim", "Moholt, Trondheim", "Dragvoll, Trondheim",
  "Gløshaugen, Trondheim", "Nardo, Trondheim", "Rosenborg, Trondheim",
  
  // Stavanger
  "Stavanger City Center, Stavanger", "Våland, Stavanger", "Hillevåg, Stavanger",
  "Tasta, Stavanger", "Madla, Stavanger", "Gausel, Stavanger",
  "Forus, Stavanger", "Sola, Stavanger", "Sandnes, Stavanger",
  "Jåtta, Stavanger", "Kvalaberg, Stavanger",
  
  // Kristiansand
  "Kristiansand City Center, Kristiansand", "Kvadraturen, Kristiansand",
  "Lund, Kristiansand", "Grim, Kristiansand", "Tveit, Kristiansand",
  "Hånes, Kristiansand", "Randesund, Kristiansand",
  
  // Drammen
  "Drammen City Center, Drammen", "Bragernes, Drammen", "Strømsø, Drammen",
  "Åssiden, Drammen", "Konnerud, Drammen", "Svelvik, Drammen",
  
  // Other major cities
  "Ålesund City Center, Ålesund", "Tromsø City Center, Tromsø", "Bodø City Center, Bodø",
  "Fredrikstad City Center, Fredrikstad", "Sarpsborg City Center, Sarpsborg",
  "Skien City Center, Skien", "Porsgrunn City Center, Porsgrunn",
  "Molde City Center, Molde", "Haugesund City Center, Haugesund",
  "Gjøvik City Center, Gjøvik", "Lillehammer City Center, Lillehammer",
  "Sognefjord Area, Vestland", "Hardangerfjord Area, Vestland",
  "Svalbard", "Longyearbyen, Svalbard",
  
  // Remote
  "Remote — Norway", "Remote — Oslo Area, Norway", "Remote — Bergen Area, Norway"
];

const salaryRanges = [
  { display: "NOK 30,000 – 45,000/month", min: 30000, max: 45000 },
  { display: "NOK 45,000 – 60,000/month", min: 45000, max: 60000 },
  { display: "NOK 60,000 – 80,000/month", min: 60000, max: 80000 },
  { display: "NOK 80,000 – 100,000/month", min: 80000, max: 100000 },
  { display: "NOK 100,000 – 130,000/month", min: 100000, max: 130000 },
  { display: "NOK 130,000 – 160,000/month", min: 130000, max: 160000 },
  { display: "NOK 160,000 – 200,000/month", min: 160000, max: 200000 },
  { display: "NOK 200,000 – 250,000/month", min: 200000, max: 250000 },
  { display: "NOK 250,000 – 300,000/month", min: 250000, max: 300000 },
  { display: "NOK 300,000+/month", min: 300000, max: 400000 }
];

const jobTypes = ["FULL_TIME", "CONTRACTOR", "PART_TIME", "INTERN", "TEMPORARY"];
const jobTypeDisplay = { 
  "FULL_TIME": "Full-time", 
  "CONTRACTOR": "Contract", 
  "PART_TIME": "Part-time", 
  "INTERN": "Internship", 
  "TEMPORARY": "Temporary" 
};

const experienceLevels = [
  { display: "Entry Level", schema: "no requirements" },
  { display: "Mid Level",   schema: "2 years experience" },
  { display: "Senior Level",schema: "5 years experience" },
  { display: "Lead",        schema: "7 years experience" },
  { display: "Manager",     schema: "5 years experience" },
  { display: "Director",    schema: "8 years experience" },
  { display: "Executive",   schema: "10 years experience" }
];

const industries = [
  "Technology", "Fintech", "E-commerce", "Banking & Finance", "Oil & Gas",
  "Real Estate", "Healthcare", "Education", "Consulting", "Aviation",
  "Construction", "Logistics & Shipping", "Hospitality", "Retail", "Media & Entertainment",
  "Renewable Energy", "Automotive", "Telecommunications", "Legal", "Government",
  "Maritime", "Fisheries", "Aquaculture", "Offshore", "Tourism", "Shipping"
];

const jobDescriptions = [
  (title, company, isRemote, location) => `We are seeking a talented ${title} to join the team at ${company} in Norway. ${isRemote ? "This is a fully remote role open to qualified candidates across Norway." : `This role is based in ${location}.`}

You will be responsible for delivering high-quality work that drives business outcomes and contributes to ${company}'s growing operations in Norway and the Nordic region.

Key Responsibilities:
• Lead and execute core ${title.toLowerCase()} functions across the organization
• Collaborate with cross-functional teams to deliver on strategic objectives
• Analyze data and provide actionable insights to improve performance
• Mentor junior team members and contribute to knowledge sharing
• Ensure best practices are followed in all deliverables

Requirements:
• 3–5 years of experience in a similar ${title.toLowerCase()} role
• Strong communication and problem-solving skills
• Experience working in fast-paced global tech/business environment
• Bachelor's degree in a relevant field
• Proficiency with modern tools and platforms

What We Offer:
• Competitive salary in NOK
• Health insurance for you and family
• 5 weeks annual leave (minimum)
• Remote work allowance
• Annual performance bonus
• Professional development budget
• Excellent work-life balance in Norway`,

  (title, company, isRemote, location) => `${company} is hiring a ${title}! We are a leading company in Norway looking for experienced professionals to scale our impact across the country and the Nordic region.

${isRemote ? "This remote-first position allows you to work from anywhere in Norway with flexible hours." : `You will work from our ${location} office with a dynamic, ambitious team.`}

About the Role:
As a ${title} at ${company}, you will play a key role in shaping our products and services. You'll work closely with leadership and peers to execute on our mission in one of the world's fastest-growing economies.

What You'll Do:
• Drive key ${title.toLowerCase()} initiatives from planning to execution
• Build and maintain relationships with key stakeholders
• Report on KPIs and contribute to strategic planning
• Stay updated on industry trends globally and in Norway
• Represent ${company} with professionalism and integrity

What You Bring:
• 2–6 years proven experience as a ${title.toLowerCase()}
• Strong analytical and communication skills
• Team player with a growth mindset
• Relevant certification or degree preferred

Compensation & Benefits:
• Competitive NOK salary • Excellent benefits • 5 weeks annual leave • Health insurance • Pension scheme (including mandatory 2% contribution) • Professional development opportunities`,

  (title, company, isRemote, location) => `Join ${company} as a ${title} and be part of one of Norway's most exciting companies!

${isRemote ? "🌐 Remote | Work from anywhere in Norway" : `📍 ${location}`}

We're building the future of business in the Nordics and need exceptional talent like you. This is a rare opportunity to work with a world-class brand while enjoying the high quality of life in Norway.

The Opportunity:
You'll be taking on the ${title} role at a critical growth stage. Your work will directly impact millions of customers across the region.

Day-to-Day Responsibilities:
• Execute and improve key workflows within the ${title.toLowerCase()} function
• Collaborate with product, engineering, and business teams
• Track metrics and optimize for performance
• Contribute to a culture of excellence and innovation
• Support senior leadership with reporting and strategy

Your Profile:
• 3+ years in ${title.toLowerCase()} or related field
• Comfortable in a fast-moving global business ecosystem
• Strong interpersonal skills and professional work ethic
• Degree in relevant discipline (Master's is a plus)

Perks at ${company}:
Competitive salary | Health insurance | 5 weeks annual leave | Pension scheme | Professional development | Excellent work-life balance`
];

function seededRandom(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function getJobData(id) {
  const seed = id * 7919;
  const r = (offset = 0) => seededRandom(seed + offset);

  const isRemote = id <= TOTAL_JOBS / 2;

  const companyIndex = Math.floor((id - 1) / Math.ceil(TOTAL_JOBS / companies.length)) % companies.length;

  const titleIndex   = Math.floor(r(1) * jobTitles.length);
  const locationIndex= Math.floor(r(3) * norwayLocations.length);
  const salaryIndex  = Math.floor(r(4) * salaryRanges.length);
  const jobTypeIndex = Math.floor(r(5) * jobTypes.length);
  const expIndex     = Math.floor(r(6) * experienceLevels.length);
  const industryIndex= Math.floor(r(7) * industries.length);
  const descIndex    = Math.floor(r(8) * jobDescriptions.length);

  const title    = jobTitles[titleIndex];
  const company  = companies[companyIndex];
  const location = isRemote ? "Remote — Norway" : norwayLocations[locationIndex];
  const salary   = salaryRanges[salaryIndex];
  const jobType  = jobTypes[jobTypeIndex];
  const exp      = experienceLevels[expIndex];
  const industry = industries[industryIndex];
  const description = jobDescriptions[descIndex](title, company, isRemote, norwayLocations[locationIndex]);

  const daysAgo = Math.floor(r(9) * 60);
  const postedDate = new Date();
  postedDate.setDate(postedDate.getDate() - daysAgo);
  const validThrough = new Date(postedDate);
  validThrough.setDate(validThrough.getDate() + 90);

  return {
    id,
    title,
    company,
    location,
    salary: salary.display,
    salaryMin: salary.min,
    salaryMax: salary.max,
    jobType,
    jobTypeDisplay: jobTypeDisplay[jobType],
    experience: exp.display,
    experienceSchema: exp.schema,
    industry,
    isRemote,
    description,
    postedDate: postedDate.toISOString().split('T')[0],
    validThrough: validThrough.toISOString().split('T')[0],
    slug: `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${id}`
  };
}

function getJobSchema(job) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "identifier": {
      "@type": "PropertyValue",
      "name": job.company,
      "value": `JOB-NO-${String(job.id).padStart(6, '0')}`
    },
    "datePosted": job.postedDate,
    "validThrough": `${job.validThrough}T00:00:00Z`,
    "employmentType": job.jobType,
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company,
      "sameAs": `https://www.google.com/search?q=${encodeURIComponent(job.company)}`
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.isRemote ? "Oslo" : job.location.split(',')[0],
        "addressCountry": "NO"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "Norway"
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "NOK",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": job.salaryMin,
        "maxValue": job.salaryMax,
        "unitText": "MONTH"
      }
    },
    "experienceRequirements": {
      "@type": "OccupationalExperienceRequirements",
      "monthsOfExperience": job.experienceSchema === "no requirements" ? 0
        : parseInt(job.experienceSchema) * 12
    },
    "industry": job.industry,
    "url": `/jobs/${job.id}`,
    "directApply": true
  };

  if (job.isRemote) {
    schema.jobLocationType = "TELECOMMUTE";
  }

  return schema;
}

module.exports = { getJobData, getJobSchema, TOTAL_JOBS, jobTitles, companies, norwayLocations, industries };
