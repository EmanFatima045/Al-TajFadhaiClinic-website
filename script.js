/* ===========================
   ALTAJ ALFADHAI CLINIC - JS
   =========================== */

   document.addEventListener('DOMContentLoaded', () => {

    // ─── CUSTOM CURSOR ───
    const cursor = document.getElementById('cursor');
    const trail = document.getElementById('cursorTrail');
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
  
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });
  
    function animateTrail() {
      trailX += (mouseX - trailX) * 0.12;
      trailY += (mouseY - trailY) * 0.12;
      trail.style.left = trailX + 'px';
      trail.style.top = trailY + 'px';
      requestAnimationFrame(animateTrail);
    }
    animateTrail();
  
    document.querySelectorAll('a, button, .service-card, .test-chip, .doctor-card-big').forEach(el => {
      el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); trail.classList.add('hover'); });
      el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); trail.classList.remove('hover'); });
    });
  
  
    // ─── PARTICLE CANVAS ───
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let W, H;
  
    function resizeCanvas() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  
    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.color = Math.random() > 0.5
          ? `rgba(135, 206, 235, ${this.opacity})`
          : `rgba(46, 134, 193, ${this.opacity})`;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
  
    for (let i = 0; i < 100; i++) particles.push(new Particle());
  
    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(135, 206, 235, ${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }
  
    function animateParticles() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  
  
    // ─── NAVBAR SCROLL ───
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 80);
    });
  
  
    // ─── HAMBURGER ───
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    }));
  
  
    // ─── SPECIALTY CYCLE ───
    const specs = [
      'General Medicine',
      'Aesthetic Medicine',
      'Urology',
      'PRP Therapy',
      'Antenatal Care',
      'Diabetes Screening',
    ];
    const specEl = document.getElementById('specCycle');
    let specIdx = 0;
    setInterval(() => {
      specIdx = (specIdx + 1) % specs.length;
      specEl.style.opacity = '0';
      specEl.style.transform = 'translateY(10px)';
      setTimeout(() => {
        specEl.textContent = specs[specIdx];
        specEl.style.transition = 'opacity 0.5s, transform 0.5s';
        specEl.style.opacity = '1';
        specEl.style.transform = 'translateY(0)';
      }, 300);
    }, 2200);
  
  
    // ─── BUILD SERVICES ───
    const services = [
      { icon: '🩺', title: 'Diabetes Screening',       desc: 'Comprehensive diabetes risk assessment and blood sugar monitoring for prevention.' },
      { icon: '🫀', title: 'Cholesterol Screening',    desc: 'Lipid profile testing and cardiovascular risk evaluation.' },
      { icon: '🦠', title: 'HPV & STD Screening',      desc: 'Confidential testing and counselling for sexual health conditions.' },
      { icon: '🦴', title: 'Joint Pain Treatment',     desc: 'Diagnosis and management of arthritis, joint pain and inflammation.' },
      { icon: '🩹', title: 'Injury Repair',            desc: 'Professional wound care, laceration repair, and injury management.' },
      { icon: '🔪', title: 'Minor Surgical Procedures',desc: 'Safe and efficient minor surgical interventions performed on-site.' },
      { icon: '💉', title: 'Vaccination & Advice',     desc: 'Recommended vaccines, travel immunizations, and preventive health advice.' },
      { icon: '🫁', title: 'Respiratory Infections',   desc: 'Treatment for colds, flu, bronchitis, and respiratory tract illnesses.' },
      { icon: '💅', title: 'Nail & Foreign Body Removal', desc: 'Expert removal of ingrown nails and embedded foreign objects.' },
      { icon: '🚿', title: 'Urogenital Conditions',    desc: 'Comprehensive care for urinary and genital health conditions.' },
      { icon: '🩸', title: 'Incision & Drainage',      desc: 'Abscess, cyst and infected wound drainage procedures.' },
      { icon: '🌿', title: 'Skin Allergies Treatment', desc: 'Diagnosis and management of eczema, urticaria, and skin reactions.' },
      { icon: '💆', title: 'Hair Fall Treatment',      desc: 'Medical assessment and personalized treatment plans for hair loss.' },
      { icon: '✨', title: 'PRP Hair & Face',           desc: 'Platelet-rich plasma therapy for hair restoration and facial rejuvenation.' },
      { icon: '🤰', title: 'Antenatal Care',           desc: 'Comprehensive prenatal monitoring and maternity health support.' },
      { icon: '♂️', title: 'Male Infertility Treatment',desc: 'Specialist evaluation and advanced treatment for male fertility issues.' },
    ];
  
    const grid = document.getElementById('servicesGrid');
    services.forEach((s, i) => {
      const card = document.createElement('div');
      card.className = 'service-card reveal-up';
      card.style.setProperty('--delay', (i * 0.04) + 's');
      card.innerHTML = `
        <span class="svc-icon">${s.icon}</span>
        <div class="svc-title">${s.title}</div>
        <div class="svc-desc">${s.desc}</div>
      `;
      grid.appendChild(card);
    });
  
  
    // ─── BUILD TESTS ───
    const tests = [
      { icon: '🩸', label: 'Blood Test' },
      { icon: '🍬', label: 'Sugar (Glucose) Test' },
      { icon: '💓', label: 'Blood Pressure Check' },
      { icon: '🔬', label: 'Cholesterol Panel' },
      { icon: '🦠', label: 'HPV Test' },
      { icon: '🧪', label: 'STD Screening' },
      { icon: '🫀', label: 'Cardiac Markers' },
      { icon: '🌡️', label: 'General Health Screen' },
    ];
    const testsGrid = document.getElementById('testsGrid');
    tests.forEach((t, i) => {
      const chip = document.createElement('div');
      chip.className = 'test-chip reveal-up';
      chip.style.setProperty('--delay', (i * 0.07) + 's');
      chip.innerHTML = `<div class="chip-icon">${t.icon}</div><span>${t.label}</span>`;
      testsGrid.appendChild(chip);
    });
  
  
    // ─── INTERSECTION OBSERVER (REVEAL) ───
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  
    function observeAll() {
      document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => revealObserver.observe(el));
    }
    observeAll();
    setTimeout(observeAll, 100);
  
  
    // ─── COUNTER ANIMATION ───
    const counters = document.querySelectorAll('[data-target]');
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target;
          const target = +el.getAttribute('data-target');
          let current = 0;
          const duration = 1200;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              el.textContent = target + '+';
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(current);
            }
          }, 16);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => counterObserver.observe(c));
  
  
    // ─── PARALLAX ORBS ON MOUSE MOVE ───
    const orbs = document.querySelectorAll('.orb');
    document.addEventListener('mousemove', (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 8;
        orb.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
      });
    });
  
  
    // ─── TILT EFFECT ON DOCTOR CARDS ───
    document.querySelectorAll('.doctor-card-big').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
        card.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) translateY(-8px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1)';
      });
    });
  
  
    // ─── SERVICE CARD MAGNETIC HOVER ───
    document.querySelectorAll('.service-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
        card.style.transform = `translateY(-8px) rotateX(${-y}deg) rotateY(${x}deg)`;
        card.style.perspective = '800px';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
      });
    });
  
  
    // ─── SMOOTH ACTIVE NAV HIGHLIGHT ───
    const sections = document.querySelectorAll('section[id]');
    const navA = document.querySelectorAll('.nav-link');
    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navA.forEach(a => a.style.color = '');
          const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
          if (active) active.style.color = 'var(--sky)';
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(s => activeObserver.observe(s));
  
  
    // ─── TEXT TYPEWRITER for hero subtitle ───
    const typeEl = document.querySelector('.hero-desc');
    if (typeEl) {
      const text = typeEl.textContent;
      typeEl.textContent = '';
      typeEl.style.borderRight = '2px solid rgba(135,206,235,0.5)';
      let i = 0;
      setTimeout(() => {
        const interval = setInterval(() => {
          typeEl.textContent += text[i];
          i++;
          if (i >= text.length) {
            clearInterval(interval);
            setTimeout(() => { typeEl.style.borderRight = 'none'; }, 800);
          }
        }, 18);
      }, 1200);
    }
  
  
    // ─── CONTACT CARD STAGGER ───
    document.querySelectorAll('.contact-card').forEach((card, i) => {
      card.style.transitionDelay = (i * 0.1) + 's';
    });
  
  
    // ─── FLOATING CARDS MOUSE PARALLAX ───
    const heroRight = document.querySelector('.hero-right');
    if (heroRight) {
      document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        const minis = document.querySelectorAll('.card-mini');
        minis.forEach((m, i) => {
          const factor = (i + 1) * 1.5;
          m.style.transform = `translateX(${x * factor * 0.3}px) translateY(${y * factor * 0.3}px)`;
        });
      });
    }
  
  
    // ─── SCROLL PROGRESS BAR ───
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
      position: fixed; top: 0; left: 0; height: 3px; z-index: 9999;
      background: linear-gradient(90deg, var(--mid-blue), var(--sky), var(--gold));
      width: 0%; transition: width 0.1s;
      box-shadow: 0 0 10px rgba(135,206,235,0.5);
    `;
    document.body.appendChild(progressBar);
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      progressBar.style.width = (scrolled / total * 100) + '%';
    });
  
  
    // ─── RIPPLE ON BTN CLICK ───
    document.querySelectorAll('.btn-glow, .btn-ghost').forEach(btn => {
      btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.cssText = `
          position: absolute; border-radius: 50%;
          width: ${size}px; height: ${size}px;
          left: ${e.clientX - rect.left - size/2}px;
          top: ${e.clientY - rect.top - size/2}px;
          background: rgba(255,255,255,0.2);
          transform: scale(0); animation: ripple-anim 0.5s ease forwards;
          pointer-events: none;
        `;
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 500);
      });
    });
  
    const style = document.createElement('style');
    style.textContent = `@keyframes ripple-anim { to { transform: scale(2.5); opacity: 0; } }`;
    document.head.appendChild(style);
  
  });