import React from 'react'

export default function App() {
  return (
    <div className="app-root">
      <header className="header">
        <h1>Vandana H N</h1>
        <p>Front-End Developer | Full-Stack Developer (BE Final Year, CGPA 9+)</p>
      </header>

      <main>
        <section className="section about">
          <h2>About Me</h2>
          <p>
            Hi! I’m Vandana H N, a passionate Front-End Developer. I am currently pursuing my BE in
            Computer Science (Final Year) with 9+ CGPA. I completed PUC with 95% and 10th with 85%.
            I specialize in creating <strong>responsive, modern, and user-friendly websites</strong>
            using HTML, CSS, JavaScript, and React.
          </p>
        </section>

        <section className="section projects">
          <h2>Projects</h2>
          <div className="grid">
            <article className="card">
              <h3>To-Do App</h3>
              <p>
                A simple to-do list app built with HTML, CSS, and JavaScript. Features: add, delete,
                and mark tasks as complete.
              </p>
              <a href="#">View Project</a>
            </article>

            <article className="card">
              <h3>Weather App</h3>
              <p>
                React-based app fetching live weather data using an API. Displays temperature, weather
                condition, and city info.
              </p>
              <a href="#">View Project</a>
            </article>

            <article className="card">
              <h3>Portfolio Website</h3>
              <p>This portfolio page itself, showcasing my skills, projects, and contact info.</p>
              <a href="#">View Project</a>
            </article>
          </div>
        </section>

        <section className="section contact">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:vandanahn77@gmail.com">vandanahn77@gmail.com</a></p>
          <p>Fiverr: <a href="https://www.fiverr.com/yourusername" target="_blank" rel="noreferrer">My Fiverr Profile</a></p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Vandana H N</p>
      </footer>
    </div>
  )
}
