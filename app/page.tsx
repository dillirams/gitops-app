
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-4 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="z-10 animate-slide-up space-y-6 max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-gray-300 mb-4">
            Available for hire
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 pb-2">
            Hi, I&apos;m Dilliram Adhikari
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
            Fullstack Developer & DevOps Engineer crafting robust, scalable, and beautiful digital experiences.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a href="#projects" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 relative z-10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Technical Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fullstack Card */}
            <div className="glass-card p-8 rounded-2xl hover:border-purple-500/30 transition-colors group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Fullstack Development</h3>
              <p className="text-gray-400 mb-6">Building end-to-end applications with modern frameworks and robust backends.</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'GraphQL'].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-sm border border-purple-500/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps Card */}
            <div className="glass-card p-8 rounded-2xl hover:border-blue-500/30 transition-colors group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">DevOps & Cloud</h3>
              <p className="text-gray-400 mb-6">Automating deployment pipelines and managing cloud infrastructure.</p>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'GitOps'].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-sm border border-blue-500/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card rounded-xl overflow-hidden hover:translate-y-[-5px] transition-transform duration-300">
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Name {i}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    A brief description of the project and the technologies used to build it.
                  </p>
                  <a href="#" className="text-sm text-white hover:text-purple-400 transition-colors flex items-center gap-2">
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 relative z-10 bg-gradient-to-t from-black to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let&apos;s Work Together</h2>
          <p className="text-gray-400 mb-12 text-lg">
            I&apos;m currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 font-semibold hover:opacity-90 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            Say Hello
          </a>

          <div className="mt-16 pt-8 border-t border-white/10 flex justify-center gap-8 text-gray-500">
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
          <p className="mt-8 text-sm text-gray-600">
            © {new Date().getFullYear()} Dilliram Adhikari. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}
