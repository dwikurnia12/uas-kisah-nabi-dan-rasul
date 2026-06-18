document.addEventListener('DOMContentLoaded', () => {
  // BANK SOAL (MINIMAL 20 SOAL)
  const questionBank = [
    {
      question: "Siapakah nabi pertama sekaligus manusia pertama yang diciptakan oleh Allah SWT?",
      options: ["Nabi Idris AS", "Nabi Adam AS", "Nabi Nuh AS", "Nabi Ibrahim AS"],
      answer: 1,
      explanation: "Nabi Adam AS adalah manusia pertama sekaligus nabi pertama yang diciptakan Allah SWT dari tanah dan ditiupkan ruh ke dalamnya."
    },
    {
      question: "Nabi yang dianugerahi kepandaian luar biasa, seperti menjadi orang pertama yang menulis dengan pena dan menjahit pakaian adalah...",
      options: ["Nabi Shaleh AS", "Nabi Hud AS", "Nabi Idris AS", "Nabi Ishaq AS"],
      answer: 2,
      explanation: "Nabi Idris AS terkenal dengan kecerdasan dan keilmuannya. Beliau adalah manusia pertama yang menulis menggunakan pena, mempelajari ilmu falak, dan menjahit pakaian."
    },
    {
      question: "Berapa lama Nabi Nuh AS berdakwah mengajak kaumnya sebelum banjir besar melanda?",
      options: ["950 Tahun", "500 Tahun", "150 Tahun", "100 Tahun"],
      answer: 0,
      explanation: "Nabi Nuh AS berdakwah menyeru kaumnya kepada tauhid dengan penuh kesabaran selama kurang lebih 950 tahun (sebagaimana tercantum dalam QS. Al-Ankabut: 14)."
    },
    {
      question: "Kaum 'Ad merupakan kaum yang bertubuh kuat namun sangat sombong dan menyembah berhala. Nabi yang diutus untuk mereka adalah...",
      options: ["Nabi Shaleh AS", "Nabi Hud AS", "Nabi Luth AS", "Nabi Adam AS"],
      answer: 1,
      explanation: "Nabi Hud AS diutus kepada kaum 'Ad yang tinggal di bukit pasir (Al-Ahqaf) untuk menyeru mereka kembali menyembah Allah SWT."
    },
    {
      question: "Mukjizat yang diberikan Allah kepada Nabi Shaleh AS untuk membuktikan kerasulannya kepada kaum Tsamud adalah...",
      options: ["Tongkat membelah lautan", "Unta betina yang keluar dari batu besar", "Selamat dari kobaran api", "Bahtera raksasa"],
      answer: 1,
      explanation: "Atas izin Allah SWT, Nabi Shaleh AS mengeluarkan mukjizat berupa unta betina yang keluar dari bongkahan batu besar sebagai tanda kebenaran dakwahnya bagi kaum Tsamud."
    },
    {
      question: "Nabi Ibrahim AS dianugerahi gelar 'Khalilullah'. Apa arti dari gelar kehormatan tersebut?",
      options: ["Kekasih Allah", "Manusia Pilihan", "Yang berbicara dengan Allah", "Penutup para Nabi"],
      answer: 0,
      explanation: "Gelar 'Khalilullah' disematkan kepada Nabi Ibrahim AS yang berarti 'Kekasih Allah' karena ketaatan dan kecintaan mutlaknya kepada Allah SWT."
    },
    {
      question: "Nabi Luth AS diutus oleh Allah SWT kepada kaum yang terkenal dengan kemerosotan moral dan penyimpangan seksual yang parah. Kaum tersebut adalah...",
      options: ["Kaum 'Ad", "Kaum Tsamud", "Kaum Sodom", "Kaum Madyan"],
      answer: 2,
      explanation: "Nabi Luth AS diutus ke negeri Sodom (di wilayah Laut Mati saat ini) untuk memperbaiki akhlak kaum Sodom yang melakukan kemungkaran seksual sesama jenis."
    },
    {
      question: "Nabi Ismail AS bersama ayahnya, Nabi Ibrahim AS, mendapat perintah mulia dari Allah SWT untuk membangun kembali...",
      options: ["Masjid Al-Aqsa", "Ka'bah di Makkah", "Kota Madinah", "Istana Mesir"],
      answer: 1,
      explanation: "Nabi Ibrahim AS dan Nabi Ismail AS bekerja sama meninggikan fondasi dan membangun kembali Baitullah (Ka'bah) di kota Makkah sebagai pusat ibadah tauhid."
    },
    {
      question: "Siapakah nama putra Nabi Ibrahim AS yang lahir dari istri keduanya, Siti Sarah?",
      options: ["Nabi Ismail AS", "Nabi Yaqub AS", "Nabi Ishaq AS", "Nabi Yusuf AS"],
      answer: 2,
      explanation: "Nabi Ishaq AS lahir dari Siti Sarah saat usianya sudah sangat lanjut, sebagai jawaban atas doa-doa Nabi Ibrahim AS."
    },
    {
      question: "Nabi Yaqub AS adalah putra Nabi Ishaq AS, sekaligus merupakan ayah kandung dari nabi yang terkenal berparas tampan, yaitu...",
      options: ["Nabi Yusuf AS", "Nabi Ismail AS", "Nabi Musa AS", "Nabi Ayyub AS"],
      answer: 0,
      explanation: "Nabi Yaqub AS adalah ayah kandung dari Nabi Yusuf AS. Kesabaran Nabi Yaqub saat kehilangan Yusuf menjadi salah satu kisah teladan kasih sayang orang tua."
    },
    {
      question: "Nabi yang mengalami ujian berat berupa penyakit kulit parah bertahun-tahun, kehilangan anak-anaknya, serta kemiskinan namun tetap bersabar dan bersyukur adalah...",
      options: ["Nabi Musa AS", "Nabi Ayyub AS", "Nabi Isa AS", "Nabi Yusuf AS"],
      answer: 1,
      explanation: "Nabi Ayyub AS diuji dengan penderitaan fisik (penyakit kulit parah) dan kehilangan harta benda serta anak, namun beliau tetap memuji Allah SWT dengan penuh kesabaran."
    },
    {
      question: "Apa mukjizat utama Nabi Musa AS ketika berhadapan dengan para penyihir Firaun dan saat membelah Laut Merah?",
      options: ["Membangun kapal besar", "Dapat berbicara dengan hewan", "Tongkat yang berubah menjadi ular dan membelah lautan", "Menghidupkan orang mati"],
      answer: 2,
      explanation: "Tongkat Nabi Musa AS atas izin Allah dapat berubah menjadi ular besar untuk mengalahkan sihir Firaun dan membelah Laut Merah saat Bani Israil dikejar bala tentara Mesir."
    },
    {
      question: "Nabi Isa AS dianugerahi kitab suci oleh Allah SWT sebagai pedoman dakwahnya bagi Bani Israil. Apakah nama kitab suci tersebut?",
      options: ["Taurat", "Zabur", "Injil", "Al-Qur'an"],
      answer: 2,
      explanation: "Kitab Injil diturunkan kepada Nabi Isa AS sebagai pembenaran atas kitab-kitab sebelumnya dan membawa ajaran kasih sayang serta tauhid bagi Bani Israil."
    },
    {
      question: "Siapakah nabi terakhir yang diutus oleh Allah SWT sebagai penutup seluruh para nabi (Khatamul Anbiya)?",
      options: ["Nabi Isa AS", "Nabi Musa AS", "Nabi Ibrahim AS", "Nabi Muhammad SAW"],
      answer: 3,
      explanation: "Nabi Muhammad SAW adalah nabi dan rasul terakhir yang diutus Allah SWT untuk seluruh umat manusia hingga akhir zaman."
    },
    {
      question: "Gelar apakah yang diberikan oleh penduduk Makkah kepada Nabi Muhammad SAW sejak masa mudanya karena kejujurannya?",
      options: ["Khalilullah", "Al-Amin", "Kalimullah", "Abul Basyar"],
      answer: 1,
      explanation: "Nabi Muhammad SAW digelari 'Al-Amin' yang berarti 'Yang Terpercaya' karena kejujuran luar biasanya dalam berdagang dan bertutur kata."
    },
    {
      question: "Surah dan ayat berapakah yang menjadi wahyu pertama yang diturunkan kepada Nabi Muhammad SAW di Gua Hira?",
      options: ["QS. Al-Fatihah: 1-7", "QS. Al-Baqarah: 1-5", "QS. Al-Alaq: 1-5", "QS. Al-Ikhlas: 1-4"],
      answer: 2,
      explanation: "Wahyu pertama yang diterima Nabi Muhammad SAW melalui Malaikat Jibril adalah Surah Al-Alaq ayat 1-5, yang diawali dengan perintah membaca (Iqra')."
    },
    {
      question: "Siapa nama putra Nabi Nuh AS yang membangkang dan tenggelam dalam banjir besar karena menolak naik ke bahtera?",
      options: ["Kan'an", "Qabil", "Habil", "Sam"],
      answer: 0,
      explanation: "Kan'an adalah putra Nabi Nuh AS yang menolak beriman dan memilih mencari perlindungan di puncak gunung, hingga akhirnya ditelan air bah."
    },
    {
      question: "Siapakah raja kejam dan sombong dari Babilonia yang memerintahkan agar Nabi Ibrahim AS dibakar hidup-hidup?",
      options: ["Raja Firaun", "Raja Namrud", "Raja Jalut", "Raja Abrahah"],
      answer: 1,
      explanation: "Raja Namrud memerintahkan pembakaran Nabi Ibrahim AS setelah berhala-berhalanya dihancurkan, namun Allah menjadikan api itu dingin dan menyelamatkan Ibrahim."
    },
    {
      question: "Salah satu mukjizat Nabi Isa AS yang ditunjukkan sejak beliau masih bayi adalah...",
      options: ["Membelah bulan", "Dapat berbicara saat masih di dalam buaian", "Membuat unta dari batu", "Selamat dari api"],
      answer: 1,
      explanation: "Nabi Isa AS dapat berbicara semasa bayi di dalam buaian untuk membela kesucian ibunya, Maryam, dari fitnah kaumnya (QS. Maryam: 30-33)."
    },
    {
      question: "Dokumen bersejarah 'Piagam Madinah' yang dirumuskan oleh Nabi Muhammad SAW bertujuan utama untuk...",
      options: ["Mendirikan benteng perang", "Mempersatukan penduduk Madinah dan menjamin toleransi beragama", "Menghukum kaum kafir Makkah", "Membagi harta rampasan perang"],
      answer: 1,
      explanation: "Piagam Madinah dibuat untuk mengatur kehidupan bersama yang damai antara kaum Muslimin (Muhajirin & Anshar) dengan kaum Yahudi dan suku lainnya di Madinah."
    }
  ];

  // VARIABEL STATE KUIS
  let shuffledQuestions = [];
  let currentQuestionIndex = 0;
  let score = 0;
  let answersSelected = false;

  // DOM ELEMENTS
  const welcomeScreen = document.getElementById('welcome-screen');
  const questionScreen = document.getElementById('question-screen');
  const resultScreen = document.getElementById('result-screen');
  
  const btnStart = document.getElementById('btn-start');
  const btnNext = document.getElementById('btn-next');
  const btnRestart = document.getElementById('btn-restart');

  const questionText = document.getElementById('question-text');
  const pilihanContainer = document.getElementById('quiz-pilihan');
  const explanationDiv = document.getElementById('quiz-explanation');
  const explanationText = document.getElementById('explanation-text');
  
  const currentQuestionNumSpan = document.getElementById('current-question-num');
  const totalQuestionsNumSpan = document.getElementById('total-questions-num');
  const currentScoreSpan = document.getElementById('current-score');
  const progressFill = document.getElementById('quiz-progress-fill');
  const soalNomorDiv = document.getElementById('quiz-soal-nomor');

  const finalScoreSpan = document.getElementById('final-score');
  const correctCountSpan = document.getElementById('correct-count');
  const totalCountSpan = document.getElementById('total-count');

  const badgeIcon = document.getElementById('badge-icon');
  const badgeName = document.getElementById('badge-name');
  const badgeDesc = document.getElementById('badge-desc');

  // EVENT LISTENERS
  if (btnStart) {
    btnStart.addEventListener('click', startQuiz);
  }
  if (btnNext) {
    btnNext.addEventListener('click', nextQuestion);
  }
  if (btnRestart) {
    btnRestart.addEventListener('click', restartQuiz);
  }

  // FUNGSI MEMULAI KUIS
  function startQuiz() {
    welcomeScreen.style.display = 'none';
    questionScreen.style.display = 'block';
    
    // Acak urutan pertanyaan dan batasi ke 10 soal
    shuffledQuestions = [...questionBank].sort(() => Math.random() - 0.5).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    
    totalQuestionsNumSpan.textContent = shuffledQuestions.length;
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  }

  // FUNGSI MENAMPILKAN PERTANYAAN
  function showQuestion(questionObj) {
    answersSelected = false;
    btnNext.style.display = 'none';
    explanationDiv.style.display = 'none';
    
    // Update panel info & progres
    currentQuestionNumSpan.textContent = currentQuestionIndex + 1;
    currentScoreSpan.textContent = score;
    soalNomorDiv.textContent = `Pertanyaan ${currentQuestionIndex + 1}`;
    
    const progressPercent = (currentQuestionIndex / shuffledQuestions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;

    // Tampilkan teks soal
    questionText.textContent = questionObj.question;

    // Render tombol pilihan jawaban
    pilihanContainer.innerHTML = '';
    questionObj.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.classList.add('pilihan-btn');
      button.textContent = option;
      button.addEventListener('click', () => selectAnswer(index, button, questionObj));
      pilihanContainer.appendChild(button);
    });
  }

  // FUNGSI KETIKA OPSI JAWABAN DIKLIK
  function selectAnswer(selectedIndex, selectedBtn, questionObj) {
    if (answersSelected) return; // Mencegah klik ganda
    answersSelected = true;

    const correctIndex = questionObj.answer;
    const allButtons = pilihanContainer.querySelectorAll('.pilihan-btn');

    // Matikan interaksi tombol lain
    allButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correctIndex) {
        btn.classList.add('benar-efek'); // Beri warna hijau pada jawaban benar
      }
    });

    if (selectedIndex === correctIndex) {
      // Jawaban Benar
      score += 10; // 10 soal * 10 = 100 poin
      currentScoreSpan.textContent = score;
    } else {
      // Jawaban Salah
      selectedBtn.classList.add('salah-efek'); // Beri warna merah pada tombol yang diklik salah
    }

    // Tampilkan penjelasan singkat soal
    explanationText.textContent = questionObj.explanation;
    explanationDiv.style.display = 'block';

    // Tampilkan tombol "Selanjutnya"
    btnNext.style.display = 'block';
  }

  // FUNGSI PINDAH KE SOAL BERIKUTNYA
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
      showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
      showResults();
    }
  }

  // FUNGSI MENAMPILKAN HASIL AKHIR
  function showResults() {
    questionScreen.style.display = 'none';
    resultScreen.style.display = 'block';

    // Update Progres Bar ke 100%
    progressFill.style.width = '100%';

    // Hitung detail statistik kuis
    const correctCount = score / 5;
    finalScoreSpan.textContent = score;
    correctCountSpan.textContent = correctCount;
    totalCountSpan.textContent = shuffledQuestions.length;

    // Tentukan Lencana/Badge kehormatan berdasarkan skor
    let badgeDetails = {};
    if (score >= 90) {
      badgeDetails = {
        icon: "👑",
        name: "Al-Amin (Terpercaya)",
        desc: "Masya Allah! Pemahaman Anda sangat mendalam dan luar biasa tentang kisah, dakwah, serta mukjizat para Nabi dan Rasul."
      };
    } else if (score >= 70) {
      badgeDetails = {
        icon: "🕌",
        name: "Mubaligh (Penyampai Risalah)",
        desc: "Alhamdulillah! Anda memahami dengan sangat baik risalah dakwah dan keteladanan mulia para utusan Allah SWT."
      };
    } else if (score >= 50) {
      badgeDetails = {
        icon: "📖",
        name: "Pencari Ilmu (Thalibul Ilmi)",
        desc: "Bagus! Anda memiliki pengetahuan dasar yang cukup baik. Mari terus membaca kembali kisah-kisah nabi untuk menyempurnakan ilmu."
      };
    } else {
      badgeDetails = {
        icon: "🌱",
        name: "Pembelajar (Muta'allim)",
        desc: "Jangan berkecil hati. Jadikan hasil ini sebagai motivasi untuk kembali membaca kisah para nabi di website ini agar lebih memahaminya."
      };
    }

    // Update elemen lencana
    badgeIcon.textContent = badgeDetails.icon;
    badgeName.textContent = badgeDetails.name;
    badgeDesc.textContent = badgeDetails.desc;
  }

  // FUNGSI MENGULANG KUIS
  function restartQuiz() {
    resultScreen.style.display = 'none';
    welcomeScreen.style.display = 'block';
  }
});
