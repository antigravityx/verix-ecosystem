import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="hero-card">
    <h1>VerixRichon<br>Ecosystem</h1>
    <p class="subtitle">Awaken Your Soul. Build Your World.</p>
    
    <a href="#" class="cta-button" id="connectBtn">Connect Soul</a>

    <div class="features">
      <div class="feature-item">
        <span class="feature-icon">🚀</span>
        <h3>Autonomous</h3>
        <p>Self-hosted & Free</p>
      </div>
      <div class="feature-item">
        <span class="feature-icon">🛡️</span>
        <h3>Secure</h3>
        <p>Soul Encrypted</p>
      </div>
      <div class="feature-item">
        <span class="feature-icon">💡</span>
        <h3>Visionary</h3>
        <p>Human + AI</p>
      </div>
    </div>

    <div class="projects-grid">
      <a href="https://github.com/antigravityx/vris" target="_blank" class="project-card">
        <span class="project-icon">🧠</span>
        <span class="project-title">VRIS</span>
        <span class="project-desc">VerixRichon Intelligence System. The Core AI Microservice.</span>
      </a>
      <a href="https://github.com/antigravityx/verix-music" target="_blank" class="project-card">
        <span class="project-icon">🎵</span>
        <span class="project-title">VerixMusic</span>
        <span class="project-desc">Minimalist Music Player. Soulful Audio Experience.</span>
      </a>
      <a href="https://github.com/antigravityx/libro" target="_blank" class="project-card">
        <span class="project-icon">📚</span>
        <span class="project-title">Libro</span>
        <span class="project-desc">Open Source Knowledge Base & Reader.</span>
      </a>
    </div>
  </div>
`

document.querySelector('#connectBtn').addEventListener('click', (e) => {
  e.preventDefault();
  alert("Soul Connection Established. Welcome to the Ecosystem.");
});
