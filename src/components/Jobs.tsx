import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  DollarSign, 
  Star,
  Briefcase,
  ChevronDown
} from 'lucide-react';

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const [jobs] = useState([
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      salary: '$90,000 - $120,000',
      type: 'Full-time',
      postedAt: '2 days ago',
      matchScore: 95,
      description: 'We are looking for a skilled Frontend Developer to join our team...',
      skills: ['React', 'TypeScript', 'CSS', 'JavaScript'],
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=60&h=60&fit=crop',
      featured: true
    },
    {
      id: '2',
      title: 'Product Designer',
      company: 'Design Studio',
      location: 'New York, NY',
      salary: '$70,000 - $90,000',
      type: 'Full-time',
      postedAt: '3 days ago',
      matchScore: 88,
      description: 'Join our creative team as a Product Designer...',
      skills: ['Figma', 'UI/UX', 'Prototyping', 'Design Systems'],
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=60&h=60&fit=crop',
      featured: false
    },
    {
      id: '3',
      title: 'Data Analyst',
      company: 'Analytics Pro',
      location: 'Remote',
      salary: '$60,000 - $80,000',
      type: 'Full-time',
      postedAt: '1 week ago',
      matchScore: 82,
      description: 'Analyze data to drive business insights and decisions...',
      skills: ['Python', 'SQL', 'Tableau', 'Statistics'],
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=60&h=60&fit=crop',
      featured: false
    },
    {
      id: '4',
      title: 'Marketing Manager',
      company: 'Growth Co.',
      location: 'Chicago, IL',
      salary: '$75,000 - $95,000',
      type: 'Full-time',
      postedAt: '4 days ago',
      matchScore: 75,
      description: 'Lead marketing initiatives and drive brand growth...',
      skills: ['Digital Marketing', 'SEO', 'Analytics', 'Content Strategy'],
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=60&h=60&fit=crop',
      featured: true
    },
    {
      id: '5',
      title: 'DevOps Engineer',
      company: 'Cloud Systems',
      location: 'Seattle, WA',
      salary: '$85,000 - $110,000',
      type: 'Full-time',
      postedAt: '5 days ago',
      matchScore: 90,
      description: 'Build and maintain scalable cloud infrastructure...',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=60&h=60&fit=crop',
      featured: false
    },
    {
      id: '6',
      title: 'UX Researcher',
      company: 'User Insights',
      location: 'Austin, TX',
      salary: '$65,000 - $85,000',
      type: 'Contract',
      postedAt: '6 days ago',
      matchScore: 78,
      description: 'Conduct user research to improve product experiences...',
      skills: ['User Research', 'Surveys', 'Analytics', 'Psychology'],
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=60&h=60&fit=crop',
      featured: false
    }
  ]);

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLocation = !selectedLocation || job.location.includes(selectedLocation);
    const matchesType = !selectedType || job.type === selectedType;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Dream Job</h1>
          <p className="text-gray-600">
            Discover opportunities that match your skills and career goals
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-4 lg:space-y-0">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs, companies, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Location Filter */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[200px]"
              >
                <option value="">All Locations</option>
                <option value="San Francisco">San Francisco, CA</option>
                <option value="New York">New York, NY</option>
                <option value="Remote">Remote</option>
                <option value="Chicago">Chicago, IL</option>
                <option value="Seattle">Seattle, WA</option>
                <option value="Austin">Austin, TX</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Type Filter */}
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[150px]"
              >
                <option value="">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
            >
              <Filter className="w-5 h-5 mr-2 text-gray-500" />
              More Filters
            </button>
          </div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Salary Range
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option value="">Any Salary</option>
                    <option value="0-50k">$0 - $50,000</option>
                    <option value="50k-75k">$50,000 - $75,000</option>
                    <option value="75k-100k">$75,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience Level
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option value="">Any Level</option>
                    <option value="entry">Entry Level</option>
                    <option value="mid">Mid Level</option>
                    <option value="senior">Senior Level</option>
                    <option value="executive">Executive</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Size
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option value="">Any Size</option>
                    <option value="startup">Startup (1-50)</option>
                    <option value="medium">Medium (51-500)</option>
                    <option value="large">Large (501-5000)</option>
                    <option value="enterprise">Enterprise (5000+)</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredJobs.length}</span> jobs
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="border border-gray-300 rounded px-3 py-1 text-sm">
              <option>Most Relevant</option>
              <option>Newest First</option>
              <option>Salary: High to Low</option>
              <option>Best Match</option>
            </select>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow ${
                job.featured ? 'ring-2 ring-blue-100 border-blue-200' : 'border border-gray-200'
              }`}
            >
              {job.featured && (
                <div className="flex items-center mb-4">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="text-sm font-medium text-blue-600">Featured Job</span>
                </div>
              )}

              <div className="flex items-start space-x-4">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                      <p className="text-gray-600 font-medium mb-3">{job.company}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {job.salary}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type} • {job.postedAt}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{job.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-right ml-6">
                      <div className="flex items-center mb-3">
                        <span className="text-sm font-medium text-green-600 mr-2">
                          {job.matchScore}% match
                        </span>
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${job.matchScore}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col space-y-2">
                        <Link
                          to={`/jobs/${job.id}`}
                          className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Apply Now
                        </Link>
                        <button className="px-6 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:border-gray-400 transition-colors">
                          Save Job
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors">
            Load More Jobs
          </button>
        </div>
      </div>
    </div>
  );
}