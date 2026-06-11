document.addEventListener('DOMContentLoaded', () => {
  // 1. PRELOADER / LOADING ANIMATION
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.classList.add('fade-out');
    });
    // Fallback if window load doesn't fire immediately
    setTimeout(() => {
      preloader.classList.add('fade-out');
    }, 1200);
  }

  // 2. DARK MODE TOGGLE
  const toggleBtn = document.getElementById('theme-toggle');
  
  // Check localStorage or system preference
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    updateThemeToggleIcon(true);
  } else {
    updateThemeToggleIcon(false);
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeToggleIcon(isDark);
    });
  }

  function updateThemeToggleIcon(isDark) {
    const iconSpan = document.getElementById('theme-toggle-icon');
    if (iconSpan) {
      iconSpan.textContent = isDark ? '☀️' : '🌙';
    }
  }

  // 3. SCROLL PROGRESS BAR
  const progressFill = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    if (progressFill) {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressFill.style.width = scrolled + '%';
    }
  });

  // 4. BACK TO TOP BUTTON
  const backToTopBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 5. HAMBURGER MENU TOGGLE
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    // Close menu when clicking links
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
  }

  // 6. SCROLL ANIMATION (REVEAL)
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Reveal only once
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  }

  // 7. COUNTER STATS ANIMATION (Beranda)
  const stats = document.querySelectorAll('.angka');
  if (stats.length > 0) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stat = entry.target;
          const targetValue = parseInt(stat.getAttribute('data-target'), 10);
          if (!isNaN(targetValue)) {
            animateCounter(stat, targetValue);
          }
          observer.unobserve(stat);
        }
      });
    }, { threshold: 0.5 });

    stats.forEach(stat => statsObserver.observe(stat));
  }

  function animateCounter(element, target) {
    let count = 0;
    const duration = 1500; // 1.5s duration
    const stepTime = Math.max(Math.floor(duration / target), 15);
    const stepValue = Math.ceil(target / (duration / stepTime));

    const timer = setInterval(() => {
      count += stepValue;
      if (count >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = count;
      }
    }, stepTime);
  }

  // 8. DAILY HIKMAH & QUOTE NABI GENERATOR
  const hikmahList = [
    { text: "Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya.", source: "HR. Ahmad" },
    { text: "Sesungguhnya Allah tidak melihat kepada rupa dan harta kalian, tetapi Allah melihat kepada hati dan amal kalian.", source: "HR. Muslim" },
    { text: "Barangsiapa yang menempuh jalan untuk mencari ilmu, maka Allah akan memudahkan baginya jalan menuju surga.", source: "HR. Muslim" },
    { text: "Senyummu di hadapan saudaramu adalah sedekah bagimu.", source: "HR. Tirmidzi" },
    { text: "Tangan yang di atas lebih baik daripada tangan yang di bawah.", source: "HR. Bukhari & Muslim" },
    { text: "Sampaikanlah dariku walau hanya satu ayat.", source: "HR. Bukhari" },
    { text: "Orang mukmin yang paling sempurna imannya adalah yang paling baik akhlaknya.", source: "HR. Tirmidzi" },
    { text: "Sesungguhnya amalan itu tergantung pada niatnya.", source: "HR. Bukhari" }
  ];

  const quotesList = [
    { text: "Ya Tuhan kami, kami telah menzalimi diri kami sendiri. Jika Engkau tidak mengampuni kami dan memberi rahmat kepada kami, niscaya kami termasuk orang-orang yang rugi.", source: "Nabi Adam AS (QS. Al-A'raf: 23)" },
    { text: "Ya Tuhanku, janganlah Engkau biarkan aku hidup seorang diri (tanpa keturunan) dan Engkaulah ahli waris yang terbaik.", source: "Nabi Zakaria AS (QS. Al-Anbiya: 89)" },
    { text: "Tidak ada tuhan selain Engkau. Mahasuci Engkau, sesungguhnya aku termasuk orang-orang yang zalim.", source: "Nabi Yunus AS (QS. Al-Anbiya: 87)" },
    { text: "Ya Tuhanku, lapangkanlah dadaku, mudahkanlah urusanku, dan lepaskanlah kekakuan dari lidahku agar mereka mengerti perkataanku.", source: "Nabi Musa AS (QS. Thaha: 25-28)" },
    { text: "Cukuplah Allah bagi kami, dan Dia adalah sebaik-baik pelindung.", source: "Nabi Ibrahim AS (HR. Bukhari / QS. Ali 'Imran: 173)" },
    { text: "Sesungguhnya aku mengadukan kesusahan dan kesedihanku hanya kepada Allah.", source: "Nabi Yaqub AS (QS. Yusuf: 86)" },
    { text: "Segala puji bagi Allah yang telah menghilangkan kesedihan dari kami. Sesungguhnya Tuhan kami benar-benar Maha Pengampun lagi Maha Mensyukuri.", source: "Kaum Beriman / Pengikut Para Nabi (QS. Fathir: 34)" },
    { text: "Sesungguhnya Tuhanku benar-benar mendengar doa.", source: "Nabi Ibrahim AS (QS. Ibrahim: 39)" }
  ];

  const hikmahText = document.getElementById('hikmah-text');
  const hikmahSource = document.getElementById('hikmah-source');
  const btnNewHikmah = document.getElementById('btn-new-hikmah');

  const quoteText = document.getElementById('quote-text');
  const quoteSource = document.getElementById('quote-source');
  const btnNewQuote = document.getElementById('btn-new-quote');

  if (btnNewHikmah && hikmahText && hikmahSource) {
    btnNewHikmah.addEventListener('click', () => {
      hikmahText.style.opacity = '0';
      hikmahSource.style.opacity = '0';
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * hikmahList.length);
        const randomHikmah = hikmahList[randomIndex];
        hikmahText.textContent = `"${randomHikmah.text}"`;
        hikmahSource.textContent = `— ${randomHikmah.source}`;
        hikmahText.style.opacity = '1';
        hikmahSource.style.opacity = '1';
      }, 200);
    });
    hikmahText.style.transition = 'opacity 0.2s ease';
    hikmahSource.style.transition = 'opacity 0.2s ease';
  }

  if (btnNewQuote && quoteText && quoteSource) {
    btnNewQuote.addEventListener('click', () => {
      quoteText.style.opacity = '0';
      quoteSource.style.opacity = '0';
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotesList.length);
        const randomQuote = quotesList[randomIndex];
        quoteText.textContent = `"${randomQuote.text}"`;
        quoteSource.textContent = `— ${randomQuote.source}`;
        quoteText.style.opacity = '1';
        quoteSource.style.opacity = '1';
      }, 200);
    });
    quoteText.style.transition = 'opacity 0.2s ease';
    quoteSource.style.transition = 'opacity 0.2s ease';
  }
});
