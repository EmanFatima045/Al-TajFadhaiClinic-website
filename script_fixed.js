/* ==========================================================================
   AL TAJ ALFADHI CLINIC - JAVASCRIPT MASTER
   Bilingual Translation Engine (English & Arabic RTL)
   Cute TajBot AI Medical Assistant Robot
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageEngine();
  initStickyHeader();
  initMobileDrawer();
  initServiceTabsAndSearch();
  initConsultationCalculator();
  initAppointmentBooking();
  initFaqAccordion();
  initCuteTajBot();
});

/* --------------------------------------------------------------------------
   1. Complete Dual-Language Translation Dictionary (English <-> Arabic)
   -------------------------------------------------------------------------- */
const DICTIONARY_AR = {
  // Top Bar & Navigation
  "King Faisal St, Al Majaz, Sharjah, UAE": "شارع الملك فيصل، المجاز، الشارقة، الإمارات",
  "Open 7 Days: 9:00 AM – 10:00 PM": "مفتوح 7 أيام: 9:00 صباحاً – 10:00 مساءً",
  "MOH & SHA Certified Clinic": "عيادة معتمدة من وزارة الصحة وهيئة الشارقة الصحية",
  "WhatsApp Us": "تواصل عبر واتساب",
  "Home": "الرئيسية",
  "About Us": "من نحن",
  "About": "من نحن",
  "Services": "خدماتنا",
  "Doctors": "أطباؤنا",
  "Aesthetics & PRP": "التجميل والبلازما",
  "PRP & Aesthetic Care": "علاجات البلازما والتجميل",
  "Patient Resources": "دليل المرضى",
  "Contact": "اتصل بنا",
  "Book a Consultation": "حجز موعد استشارة",
  "Book Appointment": "حجز موعد الآن",
  "Call Clinic": "اتصال بالعيادة",
  "Call Now": "اتصل بنا الآن",

  // Brand Name & Subtitles
  "Al Taj Alfadhi Clinic": "عيادة التاج الفضي",
  "Medical & Aesthetic Excellence": "تميز في الطب العام والحلول التجميلية",
  "Sharjah & Dubai, UAE": "الشارقة ودبي، الإمارات",
  "Licensed Medical Clinic in Sharjah": "عيادة طبية مرخصة في إمارة الشارقة",

  // Hero Section
  "Expert Care. Personal Attention. Better Well-Being.": "رعاية متخصصة. اهتمام شخصي. صحة أفضل.",
  "Comprehensive general medicine, specialized aesthetic PRP rejuvenation, and primary healthcare for patients across Sharjah and Dubai with licensed physicians.": "طب عام شامل، وعلاجات البلازما الغنية بالصفائح (PRP) لنضارة البشرة واستعادة الشعر، ورعاية صحية متكاملة للمرضى في الشارقة ودبي تحت إشراف أطباء مرخصين.",
  "Explore Our Services": "استكشف خدماتنا الطبية",
  "Licensed Medical Professionals": "أطباء مرخصون ومؤهلون",
  "SHA & MOH Registered Practitioners": "مرخصون من هيئة الشارقة الصحية ووزارة الصحة",
  "Patient-Centred Care": "رعاية محورها المريض",
  "Personalised Clinical Protocols": "خطط علاجية مخصصة لكل مريض",
  "Sharjah, UAE": "الشارقة، الإمارات",
  "King Faisal St, Al Majaz": "شارع الملك فيصل، المجاز",
  "Consultations Available Today": "استشارات متاحة اليوم",
  "Same-Day Walk-ins & Appointments": "استقبال في نفس اليوم ومواعيد مسبقة",

  // Trust & Value Section
  "Why Choose Al Taj Alfadhi Clinic": "لماذا تختار عيادة التاج الفضي",
  "A Foundation of Medical Trust & Excellence in Sharjah": "أساس من الثقة الطبية والتميز في إمارة الشارقة",
  "Licensed Doctors": "أطباء مرخصون ومعتمدون",
  "Patient Safety": "سلامة المريض أولاً",
  "Clinical Hygiene": "أعلى معايير التعقيم السريري",
  "Transparent Consultation": "استشارات واضحة وبدون رسوم خفية",
  "Personalised Treatment Plans": "خطط علاج فردية مصممة لك",
  "MOH / SHA Compliance": "التزام كامل بلوائح وزارة الصحة وهيئة الشارقة الصحية",
  "100% Licensed Medical Practitioners": "أطباء وممارسون صحيون مرخصون 100%",
  "Convenient Al Majaz, Sharjah Location": "موقع متميز وسهل الوصول في المجاز بالشارقة",
  "Clean, State-of-the-Art Clinical Rooms": "غرف علاجية معقمة ومجهزة بأحدث التقنيات",

  // Specialties & Treatments
  "Our Clinical Specialties": "تخصصاتنا السريرية والطبية",
  "General Medicine & Primary Care": "الطب العام والرعاية الأولية",
  "Comprehensive diagnosis, chronic disease management (hypertension, diabetes), acute infection treatments, and preventive health screenings.": "تشخيص شامل، ومتابعة الأمراض المزمنة (الضغط، السكري)، وعلاج الالتهابات الحادة، والفحوصات الوقائية الدورية.",
  "PRP Hair Restoration Therapy": "علاج تساقط الشعر بالبلازما (PRP)",
  "Advanced autologous Platelet-Rich Plasma microinjections to stimulate dormant follicles, strengthen hair density, and combat thinning naturally.": "حقن البلازما الغنية بالصفائح الذاتية لتحفيز بصيلات الشعر الخاملة، وزيادة كثافة الشعر ومكافحة التساقط طبيعياً.",
  "Skin Rejuvenation & Facial PRP": "نضارة البشرة وبلازما الوجه (Vampire Glow)",
  "Clinical microneedling and PRP for collagen stimulation, fine-line smoothing, acne scar reduction, and deep cellular radiance.": "جلسات البلازما التجميلية مع الديرمابن لتحفيز الكولاجين، وتنعيم الخطوط الدقيقة، وتقليل آثار الندبات لنضارة وإشراقة طبيعية.",
  "Outpatient Wound Care & Minor Stitches": "العناية بالجروح والغرز الطبية البسيطة",
  "Sterile outpatient laceration suturing, stitch removal, antiseptic dressings, burn treatments, and minor trauma care under local anaesthesia.": "خياطة الجروح السطحية والقطعية، وإزالة الغرز، والغيار الطبي المعقم، وعلاج الحروق الطفيفة تحت التخدير الموضعي (بدون جراحات كبرى).",
  "Urogenital & Men's Health": "صحة الرجال والمسالك البولية",
  "Confidential medical consultations, diagnostic lab screenings, and evidence-based treatments for common urogenital conditions.": "استشارات طبية تتسم بالسرية التامة، وفحوصات مخبرية دقيقة، وعلاجات مثبتة علمياً لمشاكل المسالك وصحة الرجال.",
  "Preventive Screenings & Health Packages": "الفحوصات الوقائية وباقات الصحة العامة",
  "Complete blood workup, cholesterol checks, cardiovascular risk profiling, and routine medical certifications for employment or wellness.": "تحاليل دم شاملة، وفحص الكوليسترول، وتقييم صحة القلب والأوعية الدموية، وشهادات اللياقة الطبية الدورية.",

  // Doctors & Team
  "Meet Our Licensed Medical Team": "تعرف على فريقنا الطبي المرخص",
  "Experienced, Caring, & SHA Certified Healthcare Leaders": "كوادر طبية ذات خبرة عالية ورعاية إنسانية معتمدة من هيئة الشارقة الصحية",
  "Dr. Bushra Sobia": "د. بشرى صبيا",
  "Dr. Bushra Sobia, General Physician": "د. بشرى صبيا، طبيب عام",
  "General Physician & Aesthetic Practitioner": "طبيب عام وممارس في العلاجات التجميلية والبلازما",
  "General Medicine & PRP Specialist": "أخصائية الطب العام وعلاجات البلازما",
  "SHA / MOH Registered Physician": "طبيبة مرخصة من هيئة الشارقة الصحية ووزارة الصحة",
  "Specialist in primary care, chronic disease management, and platelet-rich plasma (PRP) aesthetic therapies. 8+ years clinical experience.": "خبرة تزيد عن 8 سنوات في الطب العام، إدارة الأمراض المزمنة، وتطبيقات البلازما التجميلية للوجه والشعر.",
  "Consulting Physician": "طبيب استشاري زائر",
  "Internal Medicine & Clinical Diagnostics": "الطب الباطني والتشخيص السريري",
  "Advanced diagnostic medicine, patient wellness strategies, and complex general health evaluations.": "تشخيص الحالات الباطنية المعقدة، وخطط تعزيز المناعة والصحة الوقائية للمرضى.",

  // Interactive Calculator
  "Interactive Treatment & Consultation Cost Estimator": "حاسبة تكلفة الاستشارات والعلاجات التفاعلية",
  "Select from our specialized clinical consultations, PRP aesthetic treatments, or outpatient wound care.": "اختر من بين استشاراتنا الطبية، أو جلسات البلازما التجميلية، أو العناية بالجروح والغرز.",
  "1. Select Clinical Service": "1. اختر الخدمة الطبية",
  "2. Choose Physician Option": "2. اختر الطبيب المعالج",
  "General Practice Consultation": "استشارة طب عام",
  "PRP Hair Restoration (1 Session)": "جلسة بلازما الشعر (جلسة واحدة)",
  "Facial PRP Rejuvenation (Vampire Glow)": "جلسة بلازما الوجه والنضارة (Vampire Glow)",
  "Urogenital / Men's Health Evaluation": "استشارة صحة الرجال والمسالك",
  "Outpatient Wound Care & Stitches": "العناية بالجروح والغرز الطبية",
  "Preventive Full Blood & Health Screen": "فحص الدم الشامل والتقييم الوقائي",
  "Primary Care Staff Physician (Standard)": "طبيب العيادة العام (الأساسي)",
  "Dr. Bushra Sobia (Senior PRP & General Practitioner)": "د. بشرى صبيا (طبيبة الطب العام والبلازما التجميلية)",
  "Estimated Investment Summary": "ملخص التكلفة التقديرية",
  "Base Procedure Fee:": "رسوم الخدمة الأساسية:",
  "Physician Fee:": "رسوم الطبيب:",
  "Estimated Total:": "المجموع التقديري:",
  "Proceed with Selected Booking": "متابعة وتأكيد الحجز",

  // Booking Form
  "Book an In-Person Consultation": "حجز موعد استشارة في العيادة",
  "Quick, secure booking with same-day confirmation via WhatsApp & SMS.": "حجز سريع ومباشر مع تأكيد فوري عبر واتساب ورسائل SMS.",
  "Patient Full Name *": "اسم المريض بالكامل *",
  "Enter your full name": "أدخل اسمك الكامل",
  "Mobile Phone Number (WhatsApp) *": "رقم الهاتف المحمول (واتساب) *",
  "e.g. +971 50 902 4717": "مثال: 971509024717+",
  "Email Address (Optional)": "البريد الإلكتروني (اختياري)",
  "Preferred Doctor": "الطبيب المفضل",
  "No Preference / First Available": "بدون تفضيل / أول طبيب متاح",
  "Preferred Date *": "التاريخ المفضل *",
  "Preferred Time Window *": "الوقت المفضل *",
  "Morning (9:00 AM – 1:00 PM)": "صباحاً (9:00 ص – 1:00 م)",
  "Afternoon (1:00 PM – 5:00 PM)": "ظهراً (1:00 م – 5:00 م)",
  "Evening (5:00 PM – 10:00 PM)": "مساءً (5:00 م – 10:00 م)",
  "Medical Notes / Symptoms (Optional)": "ملاحظات طبية أو أعراض (اختياري)",
  "Describe your symptoms or treatment goals...": "اكتب نبذة عن الأعراض أو أهداف العلاج...",
  "Confirm & Book Appointment": "تأكيد وإرسال طلب الحجز",

  // FAQs
  "Frequently Asked Questions": "الأسئلة الشائعة",
  "Transparent Answers to Common Patient Questions": "إجابات واضحة وشفافة لأهم استفسارات المرضى",
  "Do I need an appointment or can I walk in?": "هل يشترط حجز موعد مسبق أم يمكنني الحضور مباشرة؟",
  "Both! We welcome walk-in patients during our standard opening hours (9:00 AM – 10:00 PM Saturday to Thursday, 2:00 PM – 10:00 PM Friday). However, scheduling in advance guarantees minimal wait time.": "نرحب بكلا الخيارين! نستقبل المرضى مباشرة دون موعد خلال أوقات العمل الرسمية، ولكن الحجز المسبق يضمن لك تقليل وقت الانتظار إلى أدنى حد.",
  "How many PRP sessions are recommended for hair thinning?": "كم عدد جلسات البلازما (PRP) الموصى بها لتساقط الشعر؟",
  "Most patients benefit from an initial protocol of 3 to 4 sessions spaced 4 weeks apart, followed by a maintenance session every 4–6 months. Dr. Bushra personalizes the schedule during your consultation.": "يستفيد معظم المرضى من بروتوكول علاجي يتكون من 3 إلى 4 جلسات يفصل بينها 4 أسابيع، تليها جلسة صيانة كل 4 إلى 6 أشهر حسب تقييم د. بشرى لحالتك.",
  "Do you perform major hospital surgeries?": "هل تجرون عمليات جراحية كبرى في العيادة؟",
  "No. We specialize strictly in primary medical care, aesthetic PRP, and sterile minor outpatient procedures such as wound suturing, stitches removal, and antiseptic dressings under local anesthesia.": "لا. نحن متخصصون حصراً في الرعاية الطبية الأولية، وعلاجات البلازما التجميلية، والإجراءات الطبية الصغرى مثل خياطة الجروح والغرز السطحية والتغيير المعقم عليها تحت التخدير الموضعي.",
  "Where in Sharjah is Al Taj Alfadhi Clinic located?": "أين يقع مقر عيادة التاج الفضي في الشارقة؟",
  "We are conveniently located on King Faisal Street, Al Majaz, Sharjah — with easy access from both Sharjah and Dubai. Dedicated patient parking is available nearby.": "تقع العيادة في موقع متميز وسهل الوصول في شارع الملك فيصل، منطقة المجاز، الشارقة — بالقرب من دبي ومع توفر مواقف سيارات قريبة.",

  // Pricing & Badges
  "AED 150": "150 درهم",
  "AED 450": "450 درهم",
  "AED 500": "500 درهم",
  "AED 250": "250 درهم",
  "AED 180": "180 درهم",
  "Fee: AED 150": "الرسوم: 150 درهم",
  "Fee: AED 450": "الرسوم: 450 درهم",
  "Fee: AED 500": "الرسوم: 500 درهم",
  "Fee: AED 250": "الرسوم: 250 درهم",
  "Fee: AED 180": "الرسوم: 180 درهم",
  "From AED 150": "تبدأ من 150 درهم",
  "From AED 200": "تبدأ من 200 درهم",
  "From AED 250": "تبدأ من 250 درهم",
  "AED 450 / Session": "450 درهم / الجلسة",
  "AED 500 / Session": "500 درهم / الجلسة",

  // TajBot UI
  "Ask TajBot AI Assistant": "اسأل المساعد الآلي تاج بوت",
  "Cute TajBot AI": "المساعد الطبي تاج بوت",
  "Online | Instant Medical Answers": "متصل الآن | إجابات طبية فورية",
  "Type your question here...": "اكتب سؤالك هنا...",
  "Ask TajBot about doctors, PRP, stitches...": "اسأل تاج بوت عن الأطباء، البلازما، الغرز...",
  "Quick Links": "روابط سريعة"
};

/* --------------------------------------------------------------------------
   2. Reverse Dictionary & Bilingual Engine Setup
   -------------------------------------------------------------------------- */
const DICTIONARY_EN = {};
for (const [en, ar] of Object.entries(DICTIONARY_AR)) {
  DICTIONARY_EN[ar] = en;
}

let currentLang = localStorage.getItem('altaj_lang') || 'en';

function initLanguageEngine() {
  applyLanguage(currentLang, false);

  const langToggles = document.querySelectorAll('.lang-toggle-btn, .mobile-lang-btn');
  langToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      currentLang = (currentLang === 'en') ? 'ar' : 'en';
      localStorage.setItem('altaj_lang', currentLang);
      applyLanguage(currentLang, true);
    });
  });
}

function applyLanguage(lang, announce = false) {
  const isArabic = (lang === 'ar');
  document.documentElement.lang = isArabic ? 'ar' : 'en';
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';

  const translatableElements = document.querySelectorAll('[data-en], h1, h2, h3, h4, h5, p, span, a, button, label, strong, em, li, .badge-pill, .sub-title, .brand-text');
  
  const dict = isArabic ? DICTIONARY_AR : DICTIONARY_EN;

  translatableElements.forEach(el => {
    if (el.children.length === 0) {
      const text = el.textContent.trim();
      if (text && dict[text]) {
        el.textContent = dict[text];
      }
    }
  });

  const inputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');
  inputs.forEach(input => {
    const ph = input.getAttribute('placeholder');
    if (ph && dict[ph]) {
      input.setAttribute('placeholder', dict[ph]);
    }
  });

  const langButtons = document.querySelectorAll('.lang-toggle-btn, .mobile-lang-btn');
  langButtons.forEach(btn => {
    const labelSpan = btn.querySelector('.lang-label') || btn;
    labelSpan.textContent = isArabic ? 'English' : 'العربية';
  });

  updateTajBotGreeting(isArabic);
}

/* --------------------------------------------------------------------------
   3. Cute TajBot AI Assistant
   -------------------------------------------------------------------------- */
function initCuteTajBot() {
  const TAJBOT_AVATAR_SRC = 'tajbot-sheikh.svg';
  
  const botToggle = document.querySelector('.tajbot-toggle-btn');
  const botWindow = document.querySelector('.tajbot-window');
  const botClose = document.querySelector('.tajbot-close-btn');
  const chatForm = document.querySelector('.chat-input-form');
  const chatInput = document.querySelector('.chat-input');
  const chatBody = document.querySelector('.chat-body');

  if (!botToggle || !botWindow || !chatBody) return;

  updateTajBotGreeting(currentLang === 'ar');

  const appendMsg = (sender, text, quickReplies = []) => {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${sender}-msg`;
    
    let avatarHtml = '';
    if (sender === 'bot') {
      avatarHtml = `<img src="${TAJBOT_AVATAR_SRC}" alt="TajBot" class="bot-bubble-avatar">`;
    }

    let html = `<div class="chat-msg-wrapper">${avatarHtml}<div class="chat-bubble">${text}</div></div>`;

    if (quickReplies && quickReplies.length > 0) {
      html += `<div class="chat-quick-replies">`;
      quickReplies.forEach(reply => {
        html += `<button type="button" class="chat-quick-btn" data-query="${reply}">${reply}</button>`;
      });
      html += `</div>`;
    }

    msgDiv.innerHTML = html;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;

    const newButtons = msgDiv.querySelectorAll('.chat-quick-btn');
    newButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const query = btn.getAttribute('data-query');
        handleUserMessage(query);
      });
    });
  };

  const showTypingIndicator = () => {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-msg bot-msg tajbot-typing';
    typingDiv.innerHTML = `
      <div class="chat-msg-wrapper">
        <img src="${TAJBOT_AVATAR_SRC}" alt="TajBot" class="bot-bubble-avatar">
        <div class="chat-bubble typing-bubble">
          <span>TajBot is thinking</span><span class="dot-pulse">...</span>
        </div>
      </div>
    `;
    chatBody.appendChild(typingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
    return typingDiv;
  };

  const tajBotBrain = (userInput) => {
    const input = userInput.toLowerCase().trim();
    const isAr = currentLang === 'ar' || /[\u0600-\u06FF]/.test(userInput);

    if (isAr) {
      if (input.includes('طبيب') || input.includes('دكتور') || input.includes('بشرى') || input.includes('صبيا') || input.includes('أطباء')) {
        return {
          text: "فريقنا الطبي بقيادة <strong>د. بشرى صبيا</strong>، طبيبة عامة وممارسة معتمدة لعلاجات البلازما (PRP) والتجميل السريري، ومرخصة من هيئة الشارقة الصحية (SHA) ووزارة الصحة (MOH).",
          replies: ["حجز موعد مع د. بشرى", "علاجات البلازما (PRP)", "أسعار الاستشارات", "أوقات الدوام"]
        };
      }
      if (input.includes('بلازما') || input.includes('شعر') || input.includes('بشرة') || input.includes('تجميل') || input.includes('prp') || input.includes('نضارة')) {
        return {
          text: "نقدم أحدث علاجات البلازما الغنية بالصفائح (PRP):<br>• <strong>بلازما تساقط الشعر:</strong> 450 درهم<br>• <strong>بلازما نضارة الوجه:</strong> 500 درهم<br>العلاج طبيعي 100% وآمن لتحفيز الكولاجين ونمو الشعر.",
          replies: ["حجز جلسة بلازما", "استشارة د. بشرى", "الأسعار والعروض"]
        };
      }
      if (input.includes('جرح') || input.includes('غرز') || input.includes('خياطة') || input.includes('جروح') || input.includes('طهارة') || input.includes('حروق')) {
        return {
          text: "نعم، نقدم خدمة <strong>العناية بالجروح السطحية وخياطة الغرز الطبية المعقمة</strong> وإزالة الغرز وعلاج الحروق تحت التخدير الموضعي في قسم العيادات الخارجية <em>(ملاحظة: لا نجري عمليات جراحية كبرى)</em>.",
          replies: ["حجز موعد فوري", "اتصال بالعيادة", "موقع العيادة"]
        };
      }
      if (input.includes('سعر') || input.includes('اسعار') || input.includes('رسوم') || input.includes('تكلفة') || input.includes('درهم')) {
        return {
          text: "أسعارنا شفافة ومناسبة:<br>• استشارة طب عام: 150 درهم<br>• بلازما الشعر: 450 درهم<br>• بلازما الوجه: 500 درهم<br>• استشارة الذكورة والمسالك: 250 درهم<br>• خياطة وغيار الجروح: تبدأ من 200 درهم",
          replies: ["حساب التكلفة بالتفصيل", "حجز موعد الآن"]
        };
      }
      if (input.includes('دوام') || input.includes('ساعات') || input.includes('وقت') || input.includes('مفتوح') || input.includes('الجمعة')) {
        return {
          text: "عيادة التاج الفضي مفتوحة <strong>7 أيام في الأسبوع</strong>:<br>• السبت إلى الخميس: 9:00 صباحاً – 10:00 مساءً<br>• الجمعة: 2:00 ظهراً – 10:00 مساءً<br>نرحب بالحضور المباشر أو الحجز المسبق.",
          replies: ["حجز موعد", "موقع العيادة على الخريطة", "تواصل عبر واتساب"]
        };
      }
      if (input.includes('موقع') || input.includes('عنوان') || input.includes('مكان') || input.includes('شارقة') || input.includes('مجاز')) {
        return {
          text: "موقعنا: <strong>شارع الملك فيصل، منطقة المجاز، الشارقة</strong> (يسهل الوصول إلينا من الشارقة ودبي، مع توفر مواقف سيارات قريبة).",
          replies: ["فتح خرائط جوجل", "حجز موعد", "اتصال بالعيادة"]
        };
      }
      return {
        text: "مرحباً بك! أنا <strong>تاج بوت (TajBot) 🤖</strong> المساعد الآلي لعيادة التاج الفضي بالشارقة. كيف يمكنني مساعدتك اليوم بخصوص الاستشارات أو علاجات البلازما أو مواعيد الأطباء؟",
        replies: ["حجز موعد", "علاجات البلازما (PRP)", "العناية بالجروح والغرز", "أسعار الاستشارات", "أوقات الدوام"]
      };
    } else {
      if (input.includes('doctor') || input.includes('dr') || input.includes('bushra') || input.includes('sobia') || input.includes('physician')) {
        return {
          text: "Our medical team is led by <strong>Dr. Bushra Sobia</strong>, licensed by Sharjah Health Authority (SHA) and UAE Ministry of Health (MOH) specializing in Primary Healthcare, Chronic Disease Management, and PRP Aesthetics.",
          replies: ["Book with Dr. Bushra", "PRP Hair & Skin", "Consultation Fees", "Clinic Hours"]
        };
      }
      if (input.includes('prp') || input.includes('hair') || input.includes('skin') || input.includes('glow') || input.includes('face') || input.includes('vampire')) {
        return {
          text: "Dr. Bushra Sobia provides certified <strong>Platelet-Rich Plasma (PRP)</strong> therapy:<br>• <strong>PRP Hair Restoration:</strong> AED 450<br>• <strong>Facial PRP Rejuvenation:</strong> AED 500<br>100% natural, biocompatible collagen & hair follicle stimulation.",
          replies: ["Book PRP Session", "Consultation Fee", "Call Clinic"]
        };
      }
      if (input.includes('price') || input.includes('cost') || input.includes('fee') || input.includes('aed') || input.includes('rate')) {
        return {
          text: "Our healthcare fees are clear and transparent:<br>• General Consultation: AED 150<br>• PRP Hair Therapy: AED 450<br>• Facial PRP Rejuvenation: AED 500<br>• Urogenital Evaluation: AED 250<br>• Wound Suturing & Dressing: From AED 200",
          replies: ["Calculate Total Cost", "Book Consultation Now"]
        };
      }
      if (input.includes('hour') || input.includes('time') || input.includes('open') || input.includes('friday') || input.includes('timing')) {
        return {
          text: "Al Taj Alfadhi Clinic is open <strong>7 Days a Week</strong>:<br>• <strong>Saturday – Thursday:</strong> 9:00 AM – 10:00 PM<br>• <strong>Friday:</strong> 2:00 PM – 10:00 PM<br>Walk-ins and booked appointments welcome.",
          replies: ["Book Appointment", "Find Location", "WhatsApp Desk"]
        };
      }
      if (input.includes('location') || input.includes('address') || input.includes('where') || input.includes('map') || input.includes('majaz') || input.includes('sharjah')) {
        return {
          text: "We are located on <strong>King Faisal Street, Al Majaz, Sharjah, UAE</strong>. Easy access from both Sharjah and Dubai with convenient parking.",
          replies: ["Open Google Maps", "Book Appointment", "Call +971 6 543 2190"]
        };
      }
      if (input.includes('stitch') || input.includes('wound') || input.includes('burn') || input.includes('trauma') || input.includes('suture')) {
        return {
          text: "We provide sterile outpatient laceration suturing, stitch removal, and burn wound dressings under local anaesthesia. <em>(Please note: Major surgeries are referred to tertiary hospitals)</em>.",
          replies: ["Book Immediate Care", "Call Clinic Hotline"]
        };
      }
      return {
        text: "Beep boop! 🤖 Hello! I am <strong>TajBot</strong>, your cute AI medical assistant at Al Taj Alfadhi Clinic. How can I help you today?",
        replies: ["Book an Appointment", "PRP Hair & Skin", "Consultation Fees", "Clinic Timings", "Contact Doctor"]
      };
    }
  };

  const handleUserMessage = (userText) => {
    if (!userText || userText.trim() === '') return;
    
    appendMsg('user', userText);
    chatInput.value = '';

    const typing = showTypingIndicator();

    setTimeout(() => {
      typing.remove();
      const response = tajBotBrain(userText);
      appendMsg('bot', response.text, response.replies);

      if (userText.includes("Book Online") || userText.includes("Go to Booking Page") || userText === "حجز موعد أونلاين" || userText === "حجز موعد") {
        const bookSection = document.getElementById('appointmentBooking');
        if (bookSection) bookSection.scrollIntoView({ behavior: 'smooth' });
      }
      if (userText.includes("Call Clinic") || userText.includes("اتصال بالعيادة")) {
        window.location.href = "tel:+97165432190";
      }
    }, 600);
  };

  if (botToggle) {
    botToggle.addEventListener('click', () => {
      botWindow.classList.toggle('active');
    });
  }

  if (botClose) {
    botClose.addEventListener('click', () => {
      botWindow.classList.remove('active');
    });
  }

  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleUserMessage(chatInput.value);
    });
  }
}

/* --------------------------------------------------------------------------
   4. Update TajBot Greeting for Language
   -------------------------------------------------------------------------- */
function updateTajBotGreeting(isArabic) {
  const chatBody = document.querySelector('.chat-body');
  if (!chatBody) return;

  const TAJBOT_AVATAR_SRC = 'tajbot-sheikh.svg';

  chatBody.innerHTML = '';
  const initialMsg = document.createElement('div');
  initialMsg.className = 'chat-msg bot-msg';

  if (isArabic) {
    initialMsg.innerHTML = `
      <div class="chat-msg-wrapper">
        <img src="${TAJBOT_AVATAR_SRC}" alt="TajBot" class="bot-bubble-avatar">
        <div class="chat-bubble">
          مرحباً بك! أنا <strong>تاج بوت (TajBot) 🤖</strong> المساعد الآلي لعيادة التاج الفضي في الشارقة. كيف يمكنني خدمتك اليوم؟
        </div>
      </div>
      <div class="chat-quick-replies">
        <button type="button" class="chat-quick-btn" data-query="حجز موعد">حجز موعد الآن</button>
        <button type="button" class="chat-quick-btn" data-query="علاجات البلازما (PRP)">علاجات البلازما (PRP)</button>
        <button type="button" class="chat-quick-btn" data-query="العناية بالجروح والغرز">العناية بالجروح والغرز</button>
        <button type="button" class="chat-quick-btn" data-query="أسعار الاستشارات">قائمة الأسعار</button>
        <button type="button" class="chat-quick-btn" data-query="أوقات الدوام">أوقات العمل</button>
      </div>
    `;
  } else {
    initialMsg.innerHTML = `
      <div class="chat-msg-wrapper">
        <img src="${TAJBOT_AVATAR_SRC}" alt="TajBot" class="bot-bubble-avatar">
        <div class="chat-bubble">
          Hello! I am <strong>TajBot 🤖</strong>, your AI Medical Concierge at Al Taj Alfadhi Clinic. How may I assist you with appointments, PRP aesthetics, or doctor schedules today?
        </div>
      </div>
      <div class="chat-quick-replies">
        <button type="button" class="chat-quick-btn" data-query="Book an Appointment">Book Appointment</button>
        <button type="button" class="chat-quick-btn" data-query="PRP Hair & Skin">PRP Hair & Skin</button>
        <button type="button" class="chat-quick-btn" data-query="Outpatient Wound Care">Minor Wound Care</button>
        <button type="button" class="chat-quick-btn" data-query="Consultation Fees">Pricing & Fees</button>
        <button type="button" class="chat-quick-btn" data-query="Clinic Timings">Clinic Timings</button>
      </div>
    `;
  }

  chatBody.appendChild(initialMsg);

  const initialButtons = initialMsg.querySelectorAll('.chat-quick-btn');
  initialButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const query = btn.getAttribute('data-query');
      const chatInput = document.querySelector('.chat-input');
      if (chatInput) {
        chatInput.value = query;
        document.querySelector('.chat-send-btn')?.click();
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. Sticky Header & Elevation
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('is-sticky');
    } else {
      header.classList.remove('is-sticky');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   6. Mobile Drawer Navigation
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const closeBtn = document.querySelector('.drawer-close');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.drawer-overlay');

  if (!toggleBtn || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add('is-open');
    overlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  const drawerLinks = drawer.querySelectorAll('.drawer-link');
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* --------------------------------------------------------------------------
   7. Service Filtering and Search
   -------------------------------------------------------------------------- */
function initServiceTabsAndSearch() {
  const tabButtons = document.querySelectorAll('.service-tab-btn');
  const serviceCards = document.querySelectorAll('.service-filter-card');
  const searchInput = document.getElementById('serviceSearchInput');

  if (!serviceCards.length) return;

  let activeCategory = 'all';
  let searchQuery = '';

  const filterCards = () => {
    serviceCards.forEach(card => {
      const category = card.getAttribute('data-category') || '';
      const text = card.textContent.toLowerCase();
      const matchesCategory = (activeCategory === 'all' || category.includes(activeCategory));
      const matchesSearch = searchQuery === '' || text.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  };

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter') || 'all';
      filterCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterCards();
    });
  }
}

/* --------------------------------------------------------------------------
   8. Interactive Cost Calculator
   -------------------------------------------------------------------------- */
function initConsultationCalculator() {
  const serviceBtns = document.querySelectorAll('.calc-service-btn');
  const doctorBtns = document.querySelectorAll('.calc-doc-btn');
  const serviceNameElem = document.getElementById('calcSummaryService');
  const servicePriceElem = document.getElementById('calcSummaryBase');
  const doctorFeeElem = document.getElementById('calcSummaryDoctor');
  const totalPriceElem = document.getElementById('calcSummaryTotal');

  if (!serviceBtns.length || !totalPriceElem) return;

  let selectedService = { name: 'General Practice Consultation', price: 150 };
  let doctorFee = 0;

  const updateSummary = () => {
    if (serviceNameElem) {
      serviceNameElem.textContent = (currentLang === 'ar' && DICTIONARY_AR[selectedService.name]) 
        ? DICTIONARY_AR[selectedService.name] 
        : selectedService.name;
    }
    if (servicePriceElem) servicePriceElem.textContent = `AED ${selectedService.price}`;
    
    if (doctorFeeElem) {
      doctorFeeElem.textContent = doctorFee > 0 ? `+ AED ${doctorFee}` : (currentLang === 'ar' ? 'مشمول' : 'Included');
    }

    const total = selectedService.price + doctorFee;
    totalPriceElem.textContent = `AED ${total}`;
  };

  serviceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      serviceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const name = btn.getAttribute('data-name') || 'Consultation';
      const price = parseInt(btn.getAttribute('data-price') || '150', 10);
      selectedService = { name, price };
      updateSummary();
    });
  });

  doctorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      doctorBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      doctorFee = parseInt(btn.getAttribute('data-fee') || '0', 10);
      updateSummary();
    });
  });

  updateSummary();
}

/* --------------------------------------------------------------------------
   9. In-Person Appointment Booking Logic
   -------------------------------------------------------------------------- */
function initAppointmentBooking() {
  const form = document.getElementById('appointmentForm');
  const successModal = document.getElementById('bookingSuccessModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const bookingRefElem = document.getElementById('bookingRefNumber');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('patientName')?.value.trim() || 'Patient';
    const phone = document.getElementById('patientPhone')?.value.trim() || '';
    const doctor = document.getElementById('doctorSelect')?.value || 'Dr. Bushra Sobia';
    const service = document.getElementById('serviceSelect')?.value || 'General Consultation';
    const date = document.getElementById('appointmentDate')?.value || 'Upcoming';
    const time = document.getElementById('timeWindowSelect')?.value || 'Morning (9AM-1PM)';

    const refId = 'ATJ-' + Math.floor(100000 + Math.random() * 900000);

    if (bookingRefElem) {
      bookingRefElem.textContent = refId;
    }

    if (successModal) {
      successModal.classList.add('is-active');
    }

    const whatsappDirectBtn = document.getElementById('confirmViaWhatsAppBtn');
    if (whatsappDirectBtn) {
      const msg = `Hello Al Taj Alfadhi Clinic, I have reserved appointment #${refId} for ${name} (${phone}) with ${doctor} on ${date} at ${time} for ${service}. Please confirm my booking.`;
      whatsappDirectBtn.href = `https://wa.me/971509024717?text=${encodeURIComponent(msg)}`;
    }

    form.reset();
  });

  if (closeModalBtn && successModal) {
    closeModalBtn.addEventListener('click', () => {
      successModal.classList.remove('is-active');
    });
  }
}

/* --------------------------------------------------------------------------
   10. FAQ Accordions
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
}
