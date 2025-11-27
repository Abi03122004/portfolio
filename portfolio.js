import React from "react";

const projects = [
  {
    title: "Sales Analytics Dashboard",
    desc: "Built an interactive dashboard analyzing 50k+ sales records with trend analysis and forecasting using Python & Tableau.",
    tags: ["Python", "Tableau", "SQL", "Data Visualization"],
    link: "#"
  },
  {
    title: "Customer Segmentation ML Model",
    desc: "Developed clustering model using K-means to segment customers into 5 groups, improving targeting by 35%.",
    tags: ["Python", "scikit-learn", "Pandas", "Statistics"],
    link: "#"
  },
  {
    title: "ETL Pipeline Automation",
    desc: "Designed automated data pipeline processing 1M+ records daily from multiple sources using Apache Airflow.",
    tags: ["Python", "Airflow", "PostgreSQL", "Data Engineering"],
    link: "#"
  },
  {
    title: "Predictive Analytics Model",
    desc: "Built time-series forecasting model for inventory prediction with 92% accuracy using ARIMA & Prophet.",
    tags: ["Python", "Forecasting", "Statistics", "TensorFlow"],
    link: "#"
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">AB</div>
          <div>
            <h1 className="text-xl font-semibold">Abinesh — Data Analytical Engineer</h1>
            <p className="text-sm text-gray-500">B.Tech AIML • Data Analytics • Problem-solver</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-4 text-sm">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6 grid gap-12">
        <section className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-8 shadow">
          <div>
            <h2 className="text-3xl font-extrabold">Hi, I'm Abinesh.</h2>
            <p className="mt-4 text-gray-600">I'm a B.Tech AIML student specializing in Data Analytics & Engineering. I transform raw data into actionable insights using Python, SQL, and advanced analytics. I love building end-to-end data pipelines, creating dashboards, and solving complex business problems with data-driven solutions.</p>

            <div className="mt-6 flex gap-3">
              <a href="#projects" className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium">View Projects</a>
              <a href="#contact" className="px-4 py-2 rounded-lg border border-gray-200 text-sm">Get in touch</a>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <div>📍 Location: Coimbatore, India</div>
              <div>🎓 Education: B.Tech AIML</div>
              <div>💼 Open to internships, freelance & full-time roles</div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-64 h-64 rounded-xl bg-gradient-to-tr from-blue-100 to-cyan-50 shadow-lg flex items-center justify-center">
              <svg width="140" height="140" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="120" rx="18" fill="#E0F2FE"/>
                <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontSize="36" fontFamily="sans-serif" fill="#0369A1">AB</text>
              </svg>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-white rounded-2xl p-6 shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Projects</h3>
            <p className="text-sm text-gray-500">Selected works — clickable links and short notes</p>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {projects.map((p, idx) => (
              <article key={idx} className="border rounded-xl p-4 hover:shadow-md transition-shadow bg-gray-50">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold">{p.title}</h4>
                    <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-md border">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="ml-4 self-start">
                    <a href={p.link} className="text-sm px-3 py-1 rounded-md bg-white border">Demo</a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 text-sm text-gray-500">Tip: replace demo links with GitHub, Netlify, or Vercel URLs.</div>
        </section>

        <section id="skills" className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-xl font-semibold">Technical Skills</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              'Python','SQL','Pandas','NumPy','Tableau','Power BI','Machine Learning','Statistical Analysis','ETL','Data Pipeline','Apache Airflow','PostgreSQL','Excel','Scikit-learn','TensorFlow','Big Data','AWS','Git'
            ].map((s, i) => (
              <span key={i} className="px-3 py-1 text-sm rounded-full border border-blue-200 bg-blue-50">{s}</span>
            ))}
          </div>
        </section>

        <section id="about" className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-xl font-semibold">About Me</h3>
          <p className="mt-4 text-gray-600">I'm currently pursuing B.Tech in Artificial Intelligence & Machine Learning. As a Data Analytical Engineer, I specialize in transforming complex datasets into meaningful insights and building scalable data solutions. I have hands-on experience with Python, SQL, and business intelligence tools. My passion lies in creating automated data pipelines, developing predictive models, and delivering data-driven solutions that drive business value.</p>

          <div className="mt-4 grid sm:grid-cols-3 gap-4">
            <div>
              <h4 className="font-medium text-blue-600">Education</h4>
              <p className="text-sm text-gray-500 mt-2">B.Tech AIML • Coimbatore</p>
            </div>
            <div>
              <h4 className="font-medium text-blue-600">Expertise</h4>
              <p className="text-sm text-gray-500 mt-2">Data Analytics, ML, ETL, BI Tools</p>
            </div>
            <div>
              <h4 className="font-medium text-blue-600">Availability</h4>
              <p className="text-sm text-gray-500 mt-2">Open for opportunities</p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-xl font-semibold">Get In Touch</h3>
          <p className="mt-2 text-sm text-gray-600">I'd love to connect! Feel free to reach out via email or connect with me on social media.</p>

          <div className="mt-4 space-y-2 text-sm">
            <p>Email: <a href="mailto:abinesharjunan850@gmail.com" className="underline text-blue-600">abinesharjunan850@gmail.com</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/abinesh" target="_blank" className="underline text-blue-600">linkedin.com/in/abinesh</a></p>
            <p>GitHub: <a href="https://github.com/abinesh" target="_blank" className="underline text-blue-600">github.com/abinesh</a></p>
            <p>Location: Coimbatore, India</p>
          </div>

          <form className="mt-6 grid gap-3 max-w-lg">
            <input placeholder="Your name" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
            <input placeholder="Your email" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
            <textarea placeholder="Message" rows={4} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
            <div className="flex gap-3">
              <button type="button" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">Send Message</button>
              <button type="button" className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">Copy Email</button>
            </div>
          </form>
        </section>

        <footer className="text-center text-sm text-gray-500 p-6"> Abinesh • Data Analytical Engineer • 2025</footer>
      </main>
    </div>
  );
}
