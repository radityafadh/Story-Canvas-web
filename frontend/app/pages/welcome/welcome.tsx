import { Link } from "react-router";

export function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="glass-effect sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gradient">
              StoryCanvas
            </div>
            <div className="flex gap-4 items-center">
              <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors">
                Home
              </Link>
              <Link to="/signin" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors">
                Sign In
              </Link>
              <Link 
                to="/signup" 
                className="bg-gradient text-white px-6 py-2 rounded-lg font-semibold hover-lift"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-6 leading-tight">
              Create Your
              <span className="block">Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into beautiful digital stories. Share, collaborate, and inspire with our intuitive storytelling platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link 
                to="/signup" 
                className="bg-gradient text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover-lift min-w-[200px] text-center"
              >
                Start Creating Free
              </Link>
              <Link 
                to="/signin" 
                className="border-2 border-primary-500 text-primary-600 dark:text-primary-400 dark:border-primary-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-all duration-300 min-w-[200px] text-center"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">10K+</div>
              <div className="text-gray-600 dark:text-gray-400">Stories Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600">5K+</div>
              <div className="text-gray-600 dark:text-gray-400">Active Writers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">99%</div>
              <div className="text-gray-600 dark:text-gray-400">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Why Choose StoryCanvas?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to create amazing stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 hover-lift group">
                <div className="w-16 h-16 bg-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of writers already creating on StoryCanvas
          </p>
          <Link 
            to="/signup" 
            className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover-lift hover:bg-gray-100 transition-colors inline-block"
          >
            Create Your Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-gradient mb-4">
                StoryCanvas
              </div>
              <p className="text-gray-400">
                The modern platform for digital storytelling
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <div className="flex flex-col gap-2 text-gray-400">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <Link to="/signin" className="hover:text-white transition-colors">Sign In</Link>
                <Link to="/signup" className="hover:text-white transition-colors">Sign Up</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <div className="flex flex-col gap-2 text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex flex-col gap-2 text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Discord</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: "Intuitive Editor",
    description: "Write and format your stories with our easy-to-use, distraction-free editor."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Collaborate",
    description: "Work together with other writers and get real-time feedback on your stories."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Discover",
    description: "Explore thousands of stories and find inspiration from our creative community."
  }
];