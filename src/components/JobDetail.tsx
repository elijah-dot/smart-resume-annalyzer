import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Calendar,
  Star,
  Share2,
  Bookmark,
  CheckCircle,
  Building,
  Globe
} from 'lucide-react';

export default function JobDetail() {
  const { id } = useParams();
  const [applied, setApplied] = useState(false);
  const [saved, setSaved] = useState(false);

  // Mock job data - in a real app, this would come from an API
  const job = {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    salary: '$90,000 - $120,000',
    type: 'Full-time',
    postedAt: '2 days ago',
    matchScore: 95,
    logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
    description: `We are looking for a Senior Frontend Developer to join our dynamic team. You will be responsible for developing and maintaining high-quality web applications using modern frontend technologies.

In this role, you will work closely with our design and backend teams to create exceptional user experiences. We're looking for someone who is passionate about clean code, user experience, and staying up-to-date with the latest frontend technologies.`,
    
    responsibilities: [
      'Develop and maintain responsive web applications using React and TypeScript',
      'Collaborate with designers and backend developers to implement new features',
      'Optimize applications for maximum speed and scalability',
      'Ensure cross-browser compatibility and mobile responsiveness',
      'Write clean, maintainable, and well-documented code',
      'Participate in code reviews and contribute to technical discussions',
      'Mentor junior developers and share best practices'
    ],
    
    requirements: [
      '5+ years of experience in frontend development',
      'Expert knowledge of React, TypeScript, and modern JavaScript',
      'Strong experience with CSS preprocessors and modern CSS techniques',
      'Experience with state management libraries (Redux, Context API)',
      'Knowledge of testing frameworks (Jest, React Testing Library)',
      'Familiarity with build tools and CI/CD processes',
      'Strong problem-solving skills and attention to detail',
      'Excellent communication and teamwork skills'
    ],
    
    benefits: [
      'Competitive salary and equity package',
      'Comprehensive health, dental, and vision insurance',
      'Flexible work arrangements and remote work options',
      'Professional development budget and conference attendance',
      'Catered meals and fully stocked kitchen',
      'Fitness center membership and wellness programs',
      '401(k) matching and financial planning assistance',
      'Generous PTO and sabbatical opportunities'
    ],
    
    skills: ['React', 'TypeScript', 'CSS', 'JavaScript', 'Redux', 'Jest', 'Git'],
    
    companyInfo: {
      size: '500-1000 employees',
      founded: '2015',
      industry: 'Technology',
      website: 'techcorp.com',
      description: 'TechCorp Inc. is a leading technology company focused on building innovative solutions for businesses worldwide. We pride ourselves on fostering a culture of creativity, collaboration, and continuous learning.'
    }
  };

  const handleApply = () => {
    setApplied(true);
    // Here you would typically submit the application
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link
            to="/jobs"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Jobs
          </Link>
        </motion.div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 border-b border-gray-200"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-6">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                  <p className="text-xl text-gray-600 mb-4">{job.company}</p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-5 h-5 mr-2" />
                      {job.salary}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Posted {job.postedAt}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={handleSave}
                  className={`p-3 rounded-lg border transition-colors ${
                    saved 
                      ? 'border-blue-500 bg-blue-50 text-blue-600' 
                      : 'border-gray-300 hover:border-gray-400 text-gray-600'
                  }`}
                >
                  <Bookmark className={`w-5 h-5 ${saved ? 'fill-current' : ''}`} />
                </button>
                <button className="p-3 rounded-lg border border-gray-300 hover:border-gray-400 text-gray-600 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Match Score and Apply Button */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="text-lg font-semibold text-green-600">
                    {job.matchScore}% Match
                  </span>
                </div>
                <div className="w-40 bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-green-500 h-3 rounded-full" 
                    style={{ width: `${job.matchScore}%` }}
                  ></div>
                </div>
              </div>

              <button
                onClick={handleApply}
                disabled={applied}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  applied
                    ? 'bg-green-100 text-green-700 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {applied ? (
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Applied Successfully
                  </div>
                ) : (
                  'Apply Now'
                )}
              </button>
            </div>
          </motion.div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Job Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">About this Role</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {job.description}
                </p>
              </div>
            </motion.section>

            {/* Required Skills */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Required Skills</h2>
              <div className="flex flex-wrap gap-3">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Responsibilities */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Requirements */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{requirement}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Benefits */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits & Perks</h2>
              <ul className="space-y-3">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Company Info */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">About {job.company}</h2>
              <p className="text-gray-600 mb-4">{job.companyInfo.description}</p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{job.companyInfo.size}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">Founded {job.companyInfo.founded}</span>
                </div>
                <div className="flex items-center">
                  <Building className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{job.companyInfo.industry}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-gray-400 mr-2" />
                  <a 
                    href={`https://${job.companyInfo.website}`}
                    className="text-sm text-blue-600 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {job.companyInfo.website}
                  </a>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Sticky Apply Button */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">{job.title}</h3>
                <p className="text-gray-600">{job.company} • {job.location}</p>
              </div>
              <button
                onClick={handleApply}
                disabled={applied}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  applied
                    ? 'bg-green-100 text-green-700 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {applied ? (
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Applied
                  </div>
                ) : (
                  'Apply Now'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}