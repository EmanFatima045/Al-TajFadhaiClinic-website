/* ==========================================================================
   AL TAJ ALFADHI CLINIC - LUXURY HEALTHCARE SYSTEM
   Sharjah & Dubai, United Arab Emirates
   Bilingual Translation Engine (English & Arabic RTL)
   Cute TajBot AI Medical Assistant Robot (Saudi Sheikh Edition)
   ========================================================================== */

const TAJBOT_AVATAR_IMAGE = "tajbot-sheikh.svg";

document.addEventListener('DOMContentLoaded', () => {
  initLanguageEngine();
  initStickyHeader();
  initMobileDrawer();
  initServiceTabsAndSearch();
  initConsultationCalculator();
  initAppointmentBooking();
  initFaqAccordion();
  initCuteTajBot();
  initHeroQuickSearch();
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
  "WhatsApp Dr. Bushra": "واتساب د. بشرى",
  "Chat with Dr. Bushra": "تحدث مع د. بشرى",
  "Chat with Dr. Bushra on WhatsApp": "تحدث مع د. بشرى عبر واتساب",
  "Home": "الرئيسية",
  "About Us": "من نحن",
  "About": "من نحن",
  "Medical Services": "الخدمات الطبية",
  "Services": "خدماتنا",
  "Our Doctors": "أطباؤنا",
  "Doctors": "أطباؤنا",
  "Aesthetics & PRP": "التجميل والبلازما",
  "PRP & Aesthetic Care": "علاجات البلازما والتجميل",
  "Patient Resources": "دليل المرضى",
  "Contact": "اتصل بنا",
  "Location & Contact": "الموقع والتواصل",
  "Book a Consultation": "حجز موعد استشارة",
  "Book Appointment": "حجز موعد الآن",
  "Call Clinic": "اتصال بالعيادة",
  "Call Now": "اتصل بنا الآن",
  "Switch to العربية": "التحويل إلى العربية",
  "Switch to English": "Switch to English",
  "English": "English",
  "العربية": "العربية",

  // Brand Name & Subtitles
  "AL TAJ": "التاج",
  "ALFADHI": "الفضي",
  "CLINIC • SHARJAH": "عيادة طبية • الشارقة",
  "Al Taj Alfadhi Clinic": "عيادة التاج الفضي",
  "Medical & Aesthetic Excellence": "تميز في الطب العام والحلول التجميلية",
  "Sharjah & Dubai, UAE": "الشارقة ودبي، الإمارات",
  "Licensed Medical Clinic in Sharjah": "عيادة طبية مرخصة في إمارة الشارقة",

  // Hero Section
  "Expert Care. Personal Attention. Better Well-Being.": "رعاية متخصصة. اهتمام شخصي. صحة أفضل.",
  "Expert Care. Personal Attention.": "رعاية متخصصة. اهتمام شخصي.",
  "Better Well-Being.": "صحة أفضل.",
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
  "Official Clinic Video Tour": "جولة فيديو رسمية في العيادة",
  "Al Taj Al Fadhi • King Faisal St, Sharjah": "عيادة التاج الفضي • شارع الملك فيصل، الشارقة",

  // Section Headers & Subtitles
  "Our Clinical Specialties": "تخصصاتنا السريرية والطبية",
  "Medical & Aesthetic": "الطب العام والحلول",
  "Excellence": "التجميلية",
  "Delivering high standards of clinical oversight, privacy, and evidence-based medicine tailored to your well-being.": "تقديم أعلى معايير الإشراف الطبي والخصوصية والطب القائم على الأدلة لتعزيز صحتكم وسلامتكم.",

  // 6 Services Cards
  "Primary Care": "الرعاية الأولية",
  "General Medicine": "الطب العام",
  "General Medicine & Primary Care": "الطب العام والرعاية الأولية",
  "Complete medical consultations for acute illnesses, chronic diseases (diabetes, hypertension), preventive diagnostics, and ongoing health surveillance.": "تشخيص شامل واستشارات طبية للأمراض الحادة والمزمنة (السكري، الضغط)، والفحوصات الوقائية والمتابعة المستمرة.",
  "Routine & Urgent Health Checkups": "فحوصات طبية روتينية وعاجلة",
  "Full Vital Signs & Diagnostic Assessment": "تقييم العلامات الحيوية والتشخيص الشامل",

  "Outpatient Care": "العيادات الخارجية",
  "Outpatient Care & Minor Procedures": "العناية بالجروح والإجراءات الصغرى",
  "Outpatient Wound Care & Minor Stitches": "العناية بالجروح والغرز الطبية البسيطة",
  "Sterile outpatient laceration suturing (stitches), antiseptic wound dressing, suture removal, and minor wound cleaning under gentle local anesthesia.": "خياطة الجروح السطحية والقطعية، وتغيير الغيار الطبي المعقم، وإزالة الغرز، وتنظيف الجروح تحت التخدير الموضعي اللطيف.",
  "Sterile Suturing & Dressing Changes": "خياطة معقمة وغيار طبي مستمر",
  "Dr. Khan Mehmood Zarbat Khan": "الدكتور خان محمود زربات خان",

  "Men & Women": "رجال ونساء",
  "Urogenital Health & Men's Care": "صحة الجهاز البولي ورعاية الرجال",
  "Urogenital Health & Men's Wellness": "صحة الجهاز البولي واستشارات الذكورة",
  "Discreet evaluation and treatment of urinary tract disorders, male reproductive wellness, hormone profiling, and fertility investigations.": "تقييم وعلاج سري لاضطرابات المسالك البولية، وصحة الجهاز التناسلي للرجال، والفحوصات الهرمونية، واستشارات الخصوبة.",
  "Confidential Clinical Environment": "بيئة علاجية تتسم بأعلى درجات السرية",
  "Semen Analysis & Hormone Diagnostics": "تحاليل السائل المنوي والفحوصات الهرمونية",

  "Popular Aesthetic": "الأكثر طلباً",
  "PRP Hair Restoration": "علاج تساقط الشعر بالبلازما",
  "PRP Hair Restoration Therapy": "علاج تساقط الشعر بالبلازما (PRP)",
  "Autologous Platelet-Rich Plasma therapy utilizing concentrated growth factors to stimulate dormant hair follicles and combat thinning naturally.": "حقن البلازما الغنية بالصفائح الذاتية لتحفيز بصيلات الشعر الخاملة ومكافحة التساقط طبيعياً بدون مواد كيميائية.",
  "Natural & Biocompatible Treatment": "علاج طبيعي 100% ومتوافق حيوياً",
  "Dr. Bushra Sobia (Lic. D46336)": "الدكتورة بشرى سوبيا (ترخيص D46336)",
  "Book This": "حجز هذا العلاج",
  "Book This Service": "حجز هذا العلاج",
  "Learn More": "معرفة المزيد",

  "Glow Therapy": "علاج النضارة",
  "Skin Rejuvenation & Facial PRP": "نضارة البشرة وبلازما الوجه (Vampire Glow)",
  "Vampire Glow": "نضارة الوجه",
  "Micro-needling combined with concentrated plasma (Vampire Glow) to stimulate collagen synthesis, improve tone, and refine skin texture.": "جلسات البلازما التجميلية مع الديرمابن لتحفيز إنتاج الكولاجين، وتوحيد لون البشرة، وتحسين ملمسها ونضارتها الطبيعية.",
  "Collagen Remodeling & Radiance": "تحفيز الكولاجين واستعادة إشراقة البشرة",
  "Minimal Downtime & Sterile Kits": "فترة تعافي قصيرة وأدوات معقمة ذات استخدام واحد",

  "Maternal Health": "صحة الأمومة",
  "Antenatal & Maternal Checkups": "متابعة الحمل والرعاية الصحية للأمهات",
  "First-trimester scans, routine prenatal blood tests, gestational diabetes screenings, and comprehensive postpartum wellness consultations.": "متابعة مراحل الحمل الأولى، وتحاليل الدم الروتينية للحوامل، وفحص سكري الحمل، واستشارات صحة الأم بعد الولادة.",
  "Routine Prenatal Diagnostics": "فحوصات وتشخيصات الحمل الروتينية",
  "Dr. Bushra Sobia": "الدكتورة بشرى سوبيا",

  // Pricing Strings
  "From AED 150": "تبدأ من 150 درهم",
  "From AED 200": "تبدأ من 200 درهم",
  "From AED 250": "تبدأ من 250 درهم",
  "AED 450 / Session": "450 درهم / الجلسة",
  "AED 500 / Session": "500 درهم / الجلسة",
  "Fee: AED 150": "الرسوم: 150 درهم",
  "Fee: AED 200": "الرسوم: 200 درهم",
  "Fee: AED 250": "الرسوم: 250 درهم",
  "Fee: AED 450": "الرسوم: 450 درهم",
  "Fee: AED 500": "الرسوم: 500 درهم",
  "View All Services": "عرض جميع الخدمات الطبية",

  // Trust & Excellence Section
  "Why Choose Al Taj Alfadhi Clinic": "لماذا تختار عيادة التاج الفضي",
  "A Foundation of Medical Trust & Excellence in Sharjah": "أساس من الثقة الطبية والتميز في إمارة الشارقة",
  "We prioritize patient safety, strict hygiene protocols, and ethical evidence-based consultations with fully certified doctors.": "نضع سلامة المريض أولاً، مع الالتزام بأعلى معايير التعقيم السريري والاستشارات الطبية القائمة على الأخلاق والشفافية.",
  "Licensed Doctors": "أطباء مرخصون ومعتمدون",
  "Patient Safety": "سلامة المريض أولاً",
  "Clinical Hygiene": "أعلى معايير التعقيم السريري",
  "Transparent Consultation": "استشارات واضحة وبدون رسوم خفية",
  "Personalised Treatment Plans": "خطط علاج فردية مصممة لك",
  "MOH / SHA Compliance": "التزام كامل بلوائح وزارة الصحة وهيئة الشارقة الصحية",
  "100% Licensed Medical Practitioners": "أطباء وممارسون صحيون مرخصون 100%",
  "Convenient Al Majaz, Sharjah Location": "موقع متميز وسهل الوصول في المجاز بالشارقة",
  "Clean, State-of-the-Art Clinical Rooms": "غرف علاجية معقمة ومجهزة بأحدث التقنيات",

  // Doctors Section & Credentials
  "Medical Leadership": "القيادة الطبية",
  "Meet Our Doctors": "تعرف على أطبائنا المتخصصين",
  "Meet Our Certified Physicians": "نخبة أطبائنا المرخصين بالشارقة",
  "Dedicated Medical Professionals Committed to Your Well-Being": "نخبة من الأطباء المرخصين الملتزمين بصحتكم وسلامتكم",
  "Dedicated practitioners with decades of combined clinical acumen, diagnostic precision, and compassionate patient care.": "أطباء متميزون يمتلكون عقوداً من الخبرة السريرية والدقة التشخيصية والرعاية الإنسانية المخلصة.",
  "Meet Our Licensed Medical Team": "فريقنا الطبي المرخص والمتميز",
  "Physicians certified by the Sharjah Health Authority and UAE Ministry of Health, offering personalized clinical care and authentic diagnostic integrity.": "أطباء معتمدون من هيئة الشارقة الصحية ووزارة الصحة، يقدمون رعاية سريرية مخصصة وتشخيصاً طبياً دقيقاً.",
  "General Physician & Aesthetic Practitioner": "طبيبة عامة وممارسة في علاجات التجميل والبلازما",
  "General Physician & Aesthetic PRP Specialist": "طبيبة عامة وأخصائية علاجات البلازما التجميلية",
  "MOH / SHA License: D46336": "ترخيص وزارة الصحة وهيئة الشارقة: D46336",
  "SHA & MOH Lic. D46336": "ترخيص هيئة الشارقة ووزارة الصحة: D46336",
  "General Practitioner & Outpatient Care Specialist": "طبيب عام وأخصائي الرعاية السريرية الخارجية",
  "MBBS | General Physician & Urogenital Health": "بكالوريوس طب وجراحة | طبيب عام وصحة الجهاز البولي",
  "MOH / SHA License: DI01602": "ترخيص وزارة الصحة وهيئة الشارقة: DI01602",
  "SHA & MOH Lic. DI01602": "ترخيص هيئة الشارقة ووزارة الصحة: DI01602",
  "MOH & SHA Lic. DI01602": "ترخيص وزارة الصحة وهيئة الشارقة: DI01602",
  "Primary Healthcare": "الرعاية الصحية الأولية",
  "PRP Hair Loss": "علاج تساقط الشعر بالبلازما",
  "Facial Vampire Glow": "نضارة الوجه Vampire Glow",
  "Antenatal Care": "رعاية ومتابعة الحوامل",
  "Male Infertility": "صحة وخصوبة الرجال",
  "MBBS": "بكالوريوس طب وجراحة (MBBS)",
  "Urogenital Health": "صحة الجهاز البولي والذكورة",
  "Outpatient Wound Suturing": "خياطة الجروح والغيار السريري",
  "PRP Scalp & Hair": "بلازما فروة الرأس والشعر",
  "Women's Wellness": "صحة المرأة والوقاية",
  "Dr. Bushra Sobia combines deep medical training in preventive medicine, maternal health, and non-surgical aesthetic rejuvenation. She specializes in autologous Platelet-Rich Plasma therapies for hair restoration and skin glow.": "تجمع الدكتورة بشرى سوبيا بين التدريب الطبي العميق في الطب الوقائي، وصحة الأمومة، وعلاجات التجديد التجميلي غير الجراحي. وتختص في علاجات البلازما الغنية بالصفائح (PRP) لاستعادة حيوية الشعر ونضارة البشرة.",
  "Dr. Khan Mehmood Zarbat Khan brings extensive clinical experience in internal medicine, urogenital tract disorders, male reproductive evaluations, and outpatient wound suturing and care under strict sterile conditions.": "يتمتع الدكتور خان محمود زربات خان بخبرة سريرية واسعة في الأمراض الباطنية، واضطرابات الجهاز البولي، وفحوصات الصحة الإنجابية للذكور، وخياطة الجروح ورعايتها ضمن أعلى معايير التعقيم الطبي.",
  "Specializing in aesthetic medicine, clinical PRP hair and facial rejuvenation, maternal checkups, and family health. Over 10 years of clinical experience in UAE healthcare.": "متخصصة في الطب العام، وعلاجات البلازما التجميلية للشعر والوجه، ومتابعة الحمل، ورعاية صحة الأسرة. خبرة سريرية لأكثر من 10 سنوات في الإمارات.",
  "Specializing in general medicine, urogenital health, outpatient wound suturing & minor procedures, chronic disease management, and preventive screenings.": "متخصص في الطب العام، وصحة الجهاز البولي والذكورة، وخياطة الجروح والغيار السريري، وإدارة الأمراض المزمنة والفحوصات الوقائية.",
  "Specialized Credentials": "المؤهلات والاعتمادات التخصصية",
  "SPECIALIZED CREDENTIALS": "المؤهلات والاعتمادات التخصصية",
  "Qualifications & Clinical Scope": "المؤهلات والنطاق السريري السريري",
  "Licensed General Practitioner (Lic. D46336)": "طبيبة عامة مرخصة (ترخيص D46336)",
  "Advanced Certification in Aesthetic PRP Therapies": "شهادة متقدمة في علاجات البلازما التجميلية",
  "Advanced Certification in Aesthetic PRP & Microneedling": "شهادة متقدمة في البلازما التجميلية والديرمابن",
  "Antenatal & Preventive Women's Wellness": "رعاية الحوامل وصحة المرأة الوقائية",
  "Bachelor of Medicine & Bachelor of Surgery (MBBS)": "بكالوريوس الطب والجراحة (MBBS)",
  "Licensed General Practitioner (Lic. DI01602)": "طبيب عام مرخص (ترخيص DI01602)",
  "Outpatient Sterile Suturing & Wound Dressing": "خياطة الجروح المعقمة والغيار الجراحي",
  "Maternal Health & Antenatal Vital Monitoring": "متابعة صحة الأم والعلامات الحيوية للجنين",
  "Chronic Metabolic & Hypertension Oversight": "إدارة الأمراض الأيضية وارتفاع ضغط الدم",
  "Book with Dr. Bushra": "حجز موعد مع د. بشرى",
  "Book with Dr. Khan": "حجز موعد مع د. خان",
  "Book Consultation": "حجز موعد استشارة",
  "View Full Profile": "عرض الملف الشخصي",
  "Consultation Schedule:": "مواعيد الاستشارات:",
  "Saturday – Thursday: 9:00 AM – 3:00 PM & 6:00 PM – 10:00 PM": "السبت – الخميس: 9:00 ص – 3:00 م و 6:00 م – 10:00 م",
  "Saturday – Thursday: 10:00 AM – 2:00 PM & 5:00 PM – 10:00 PM": "السبت – الخميس: 10:00 ص – 2:00 م و 5:00 م – 10:00 م",

  // Patient Journey Section
  "Patient Journey": "رحلة المريض في العيادة",
  "Four Steps to Personalised Care": "أربع خطوات لرعاية مخصصة لك",
  "Four Steps to": "أربع خطوات لـ",
  "Personalised": "رعاية مخصصة",
  "Care": "لك",
  "Experience a seamless, respectful, and organized medical pathway from your initial inquiry to ongoing follow-up.": "استمتع بمسار علاجي منظم ومحترم يبدأ من استفسارك الأول وحتى المتابعة المستمرة.",
  "Choose a Service": "اختر الخدمة الطبية",
  "Select from general medicine, aesthetic PRP, urogenital health, blood diagnostics, or minor wound care.": "اختر من بين الطب العام، بلازما التجميل، صحة المسالك، الفحوصات المخبرية، أو العناية بالجروح.",
  "Schedule Online or WhatsApp": "احجز عبر الموقع أو واتساب",
  "Pick your preferred day and time window through our quick booking engine or connect directly on WhatsApp.": "حدد اليوم والوقت المناسبين من خلال نظام الحجز السريع أو تواصل معنا مباشرة عبر واتساب.",
  "Consultation & Treatment": "الاستشارة وبدء العلاج",
  "Visit our fully equipped Al Majaz clinic for attentive medical evaluation, diagnostic clarity, and ethical care.": "تفضل بزيارة عيادتنا المجهزة في المجاز للحصول على تقييم طبي دقيق ورعاية أخلاقية متكاملة.",
  "Follow-up & Guidance": "المتابعة والإرشادات الصحية",
  "Receive structured aftercare instructions, prescription support, and continuous physician availability.": "احصل على إرشادات ما بعد العلاج، ودعم الوصفات الطبية، وإمكانية التواصل الدائم مع الطبيب.",

  // Consultation Estimator / Calculator
  "Transparent Healthcare Pricing": "أسعار رعاية صحية شفافة ومباشرة",
  "Consultation & Treatment Estimator": "حاسبة تقدير تكاليف العلاج والاستشارة",
  "Consultation & Treatment Fee Estimator": "حاسبة تكلفة الاستشارات والعلاج الطبي",
  "Select your medical service to preview the estimated consultation fee and schedule directly.": "حدد الخدمة الطبية لمعاينة رسوم الاستشارة التقديرية والحجز مباشرة.",
  "1. Select Medical Service": "1. اختر الخدمة الطبية",
  "2. Select Medical Doctor": "2. اختر الطبيب المعالج",
  "3. Estimated Fee Summary": "3. ملخص الرسوم التقديرية",
  "General Consultation (AED 150)": "استشارة طب عام (150 درهم)",
  "PRP Hair Therapy (AED 450)": "علاج الشعر بالبلازما (450 درهم)",
  "PRP Vampire Face (AED 500)": "بلازما نضارة الوجه (500 درهم)",
  "Male Infertility Care (AED 250)": "استشارة صحة الرجال (250 درهم)",
  "Antenatal Health Check (AED 180)": "فحص ورعاية الحمل (180 درهم)",
  "Minor Stitches & Dressing (AED 200)": "خياطة الجروح والغيار (200 درهم)",
  "Any Available Specialist (No Extra Fee)": "أي طبيب متاح (بدون رسوم إضافية)",
  "Dr. Bushra Sobia (General & Aesthetic Specialist)": "د. بشرى سوبيا (أخصائية الطب العام والتجميل)",
  "Dr. Khan Mehmood (MBBS & Urogenital Specialist)": "د. خان محمود (أخصائي الطب العام والمسالك)",
  "Estimated Consultation Fee:": "رسوم الاستشارة التقديرية:",
  "Service Selected:": "الخدمة المختارة:",
  "Attending Doctor:": "الطبيب المعالج:",
  "Immediate Booking Available": "حجز فوري متاح اليوم",
  "Book This Estimated Treatment": "تأكيد وحجز هذا العلاج",
  "Estimated Total": "المجموع التقديري",
  "Proceed to Booking": "المتابعة لحجز الموعد",
  "Select Service": "اختر الخدمة",
  "Select Doctor": "اختر الطبيب",
  "General Physician Consultation": "استشارة طبيب عام",
  "PRP Hair Loss Session": "جلسة بلازما تساقط الشعر",
  "PRP Facial Rejuvenation": "بلازما نضارة وتجديد الوجه",
  "Male Infertility Evaluation": "تقييم عقم وخصوبة الرجال",
  "Antenatal Check & Monitoring": "فحص ومتابعة الحمل",
  "Minor Stitches & Wound Care": "خياطة الجروح والعناية السريرية",
  "Included": "مشمول",

  // Booking Form
  "Reserve Your Consultation": "احجز موعد استشارتك الطبية",
  "Instant Confirmation & Flexible Scheduling": "تأكيد فوري ومواعيد مرنة طوال أيام الأسبوع",
  "Book an In-Person Consultation": "حجز موعد استشارة في العيادة",
  "Quick, secure booking with same-day confirmation via WhatsApp & SMS.": "حجز سريع ومباشر مع تأكيد فوري عبر واتساب ورسائل SMS.",
  "Patient Full Name *": "اسم المريض بالكامل *",
  "Enter your full name": "أدخل اسمك الكامل",
  "Mobile Phone Number (WhatsApp) *": "رقم الهاتف المحمول (واتساب) *",
  "e.g. +971 50 969 1037": "مثال: 971509691037+",
  "e.g. 050 96 91 037": "مثال: 0509691037",
  "Email Address (Optional)": "البريد الإلكتروني (اختياري)",
  "Preferred Doctor": "الطبيب المفضل",
  "No Preference / First Available": "بدون تفضيل / أول طبيب متاح",
  "Preferred Date *": "التاريخ المفضل *",
  "Preferred Time Window *": "الوقت المفضل *",
  "Morning (9:00 AM – 1:00 PM)": "صباحاً (9:00 ص – 1:00 م)",
  "Afternoon (1:00 PM – 5:00 PM)": "ظهراً (1:00 م – 5:00 م)",
  "Evening (5:00 PM – 10:00 PM)": "مساءً (5:00 م – 10:00 م)",
  "Medical Notes / Symptoms (Optional)": "ملاحظات طبية أو أعراض (اختياري)",
  "Briefly describe your symptoms or requested procedure...": "صف باختصار الأعراض أو الإجراء المطلوب...",
  "Confirm & Book Appointment": "تأكيد وحجز الموعد الآن",
  "1. Select Service & Doctor": "1. اختيار الخدمة الطبية والطبيب",
  "2. Preferred Date & Time Slot": "2. تحديد التاريخ ووقت الموعد",
  "3. Patient Contact Information": "3. بيانات المريض للتواصل",
  "Full Name": "الاسم الكامل",
  "Mobile / WhatsApp Number": "رقم الهاتف / الواتساب",
  "Notes or Reason for Visit": "ملاحظات أو سبب الزيارة (اختياري)",
  "Morning Slots": "الفترة الصباحية",
  "Evening Slots": "الفترة المسائية",

  // Testimonials
  "Patient Testimonials": "تجارب وآراء المرضى",
  "Real Experiences from Our Valued Patients in Sharjah & Dubai": "تجارب حقيقية موثوقة من مراجعينا الكرام في الشارقة ودبي",
  "Verified Patient": "مريض معتمد",
  "Sharjah Resident": "مقيم بالشارقة",
  "Dubai Resident": "مقيم بدبي",

  // Location & Hours
  "Clinic Location & Visiting Details": "موقع العيادة ومعلومات الزيارة",
  "Easily Accessible in Industrial Area 11, Sharjah": "موقع متميز وسهل الوصول في المنطقة الصناعية 11 بالشارقة",
  "Clinic Address": "عنوان العيادة",
  "Al Soussi Building, Small Bin Ladin Signal, Industrial Area 11, Sharjah, UAE": "بناية السوسي، إشارة بن لادن الصغيرة، المنطقة الصناعية 11، الشارقة، الإمارات",
  "King Faisal Street, Al Majaz, Sharjah, United Arab Emirates": "بناية السوسي، إشارة بن لادن الصغيرة، المنطقة الصناعية 11، الشارقة، الإمارات العربية المتحدة",
  "Working Hours": "أوقات وساعات العمل",
  "Monday – Saturday: 09:00 AM – 11:00 PM": "الإثنين – السبت: 9:00 صباحاً – 11:00 مساءً",
  "Sunday: On Call & Appointment": "الأحد: تحت الطلب والمواعيد المسبقة",
  "Saturday – Thursday: 9:00 AM – 10:00 PM": "الإثنين – السبت: 9:00 صباحاً – 11:00 مساءً",
  "Friday: 2:00 PM – 10:00 PM": "الجمعة: 9:00 صباحاً – 11:00 مساءً",
  "Direct Phone": "هاتف العيادة المباشر",
  "WhatsApp Booking": "حجز مباشر عبر الواتساب",
  "Get Driving Directions": "الحصول على اتجاهات القيادة",
  "Open in Google Maps": "فتح في خرائط جوجل",

  // FAQ Section
  "Frequently Asked Questions": "الأسئلة الشائعة",
  "Patient Resources & FAQs": "دليل المرضى والأسئلة الشائعة",
  "Find immediate answers to common questions regarding visits, appointments, and treatment details.": "إجابات فورية لأبرز الأسئلة حول الزيارات والمواعيد وخطط العلاج.",
  "Do I need an appointment or can I walk in?": "هل أحتاج إلى موعد مسبق أم يمكنني الحضور مباشرة؟",
  "Walk-ins are always warmly welcomed for general consultations and outpatient wound care. However, we recommend booking an appointment online or via WhatsApp to minimize wait times.": "نرحب بالزيارات المباشرة للاستشارات العامة والعناية بالجروح. ولكن نوصي بحجز موعد مسبق عبر الموقع أو الواتساب لتقليل وقت الانتظار.",
  "Do you perform major surgical operations?": "هل تجرون عمليات جراحية كبرى داخل العيادة؟",
  "No. We specialize strictly in primary medical care, aesthetic PRP, and sterile minor outpatient procedures such as wound suturing, stitches removal, and antiseptic dressings under local anesthesia.": "لا، نحن متخصصون فقط في الرعاية الطبية الأولية، وعلاجات البلازما (PRP)، والإجراءات الخارجية المعقمة مثل خياطة الجروح وإزالة الغرز تحت التخدير الموضعي.",
  "How many PRP sessions will I need?": "كم عدد جلسات البلازما (PRP) التي سأحتاجها؟",
  "Most patients see noticeable results after 3 to 4 sessions spaced 3-4 weeks apart, followed by maintenance sessions once every 6 months.": "يلاحظ معظم المرضى تحسناً ملحوظاً بعد 3 إلى 4 جلسات يفصل بينها 3-4 أسابيع، تليها جلسة وقائية دورية كل 6 أشهر.",
  "Are your doctors licensed in the UAE?": "هل أطباؤكم مرخصون ومعتمدون في دولة الإمارات؟",
  "Yes. All our physicians and medical staff hold valid, active licenses from the Sharjah Health Authority (SHA) and UAE Ministry of Health (MOH).": "نعم، جميع أطبائنا وكوادرنا الطبية يحملون تراخيص رسمية وسارية من هيئة الشارقة الصحية (SHA) ووزارة الصحة ووقاية المجتمع (MOH).",

  // TajBot AI Chatbot & Footer
  "TajBot Medical Assistant": "تاج بوت المساعد الطبي",
  "Online • AI Medical Concierge": "متصل • مستشار طبي ذكي",
  "Ask TajBot about doctors, PRP, stitches...": "اسأل تاج بوت عن الأطباء، البلازما، الغرز...",
  "Marhaban! 👋 I'm TajBot. How may I help you today?": "حياكم الله ومرحباً! 👋 أنا تاج بوت، هل تود المساعدة في حجز موعد؟",
  "Marhaban! 👋 I'm TajBot. Need help booking with Dr. Bushra?": "حياكم الله ومرحباً! 👋 أنا تاج بوت، هل تود المساعدة في حجز موعد؟",
  "Dedicated to providing licensed, compassionate, and high-quality medical and aesthetic care for families and individuals in Sharjah and Dubai.": "ملتزمون بتقديم رعاية طبية وتجميلية مرخصة وعالية الجودة للأفراد والعائلات في الشارقة ودبي.",
  "Quick Links": "روابط سريعة"
};

// Build English Reverse Mapping
const DICTIONARY_EN = {};
for (const [en, ar] of Object.entries(DICTIONARY_AR)) {
  DICTIONARY_EN[ar] = en;
}

let currentLang = localStorage.getItem('altaj_lang') || 'en';

/* --------------------------------------------------------------------------
   2. Robust Multi-level Translation Engine
   -------------------------------------------------------------------------- */
function initLanguageEngine() {
  applyLanguage(currentLang, false);

  const switchBtns = document.querySelectorAll('.lang-switch-btn');
  switchBtns.forEach(btn => {
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
  document.documentElement.setAttribute('lang', isArabic ? 'ar' : 'en');
  document.documentElement.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
  
  if (isArabic) {
    document.body.classList.add('rtl');
  } else {
    document.body.classList.remove('rtl');
  }

  // Update Language Switch Buttons
  const switchBtns = document.querySelectorAll('.lang-switch-btn');
  switchBtns.forEach(btn => {
    btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> <span>${isArabic ? 'English' : 'العربية'}</span>`;
  });

  const dict = isArabic ? DICTIONARY_AR : DICTIONARY_EN;
  const cleanStr = (s) => (s || '').replace(/\s+/g, ' ').trim();

  // 1. Text Node Replacement via TreeWalker
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let textNode;
  while ((textNode = walker.nextNode())) {
    const parentTag = textNode.parentElement ? textNode.parentElement.tagName.toLowerCase() : '';
    if (parentTag === 'script' || parentTag === 'style' || parentTag === 'textarea' || parentTag === 'svg' || parentTag === 'path') continue;

    const raw = textNode.nodeValue;
    const clean = cleanStr(raw);
    if (clean && dict[clean]) {
      textNode.nodeValue = raw.replace(clean, dict[clean]);
    }
  }

  // 2. Direct Elements (Buttons, Spans, Headings, Paragraphs)
  document.querySelectorAll('h1, h2, h3, h4, h5, p, span, a, button, label, .badge-pill, .section-badge, .service-title, .service-desc, .doctor-bio, .hero-subtitle, .floating-whatsapp-tooltip, .chat-header-title').forEach(el => {
    if (el.children.length === 0) {
      const clean = cleanStr(el.textContent);
      if (clean && dict[clean]) {
        el.textContent = dict[clean];
      }
    }
  });

  // 3. Form Placeholders
  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
    const ph = cleanStr(el.getAttribute('placeholder'));
    if (dict[ph]) {
      el.setAttribute('placeholder', dict[ph]);
    }
  });

  // 4. Select Dropdown Options
  document.querySelectorAll('option').forEach(opt => {
    const txt = cleanStr(opt.textContent);
    if (dict[txt]) {
      opt.textContent = dict[txt];
    }
  });

  updateTajBotGreeting(isArabic);
}

/* --------------------------------------------------------------------------
   3. Cute TajBot AI Assistant (Saudi Sheikh Edition)
   -------------------------------------------------------------------------- */
function initCuteTajBot() {
  const chatbotWidget = document.querySelector('.chatbot-widget');
  if (!chatbotWidget) return;

  const toggleBtn = chatbotWidget.querySelector('.chatbot-toggle-btn');
  const chatWindow = chatbotWidget.querySelector('.chat-window');
  const closeBtn = chatbotWidget.querySelector('.chat-close-btn');
  const chatBody = chatbotWidget.querySelector('.chat-body');
  const chatInput = chatbotWidget.querySelector('.chat-input');
  const sendBtn = chatbotWidget.querySelector('.chat-send-btn');
  const pulseBadge = chatbotWidget.querySelector('.pulse-badge');

  const greetingBubble = chatbotWidget.querySelector('.tajbot-greeting-bubble');
  const greetingClose = chatbotWidget.querySelector('.tajbot-greeting-close');

  const closeGreeting = () => {
    if (greetingBubble) greetingBubble.classList.remove('show');
  };

  const openGreeting = () => {
    if (greetingBubble && !chatWindow.classList.contains('open')) {
      greetingBubble.classList.add('show');
    }
  };

  // Show friendly welcoming bubble after 1.8 seconds on website load
  setTimeout(openGreeting, 1800);

  if (greetingBubble) {
    greetingBubble.addEventListener('click', (e) => {
      if (e.target.closest('.tajbot-greeting-close')) return;
      closeGreeting();
      chatWindow.classList.add('open');
      if (pulseBadge) pulseBadge.style.display = 'none';
      if (chatInput) chatInput.focus();
    });
  }

  if (greetingClose) {
    greetingClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closeGreeting();
    });
  }

  const toggleChat = () => {
    const isOpen = chatWindow.classList.contains('open');
    if (isOpen) {
      chatWindow.classList.remove('open');
    } else {
      closeGreeting();
      chatWindow.classList.add('open');
      if (pulseBadge) pulseBadge.style.display = 'none';
      if (chatInput) chatInput.focus();
    }
  };

  toggleBtn.addEventListener('click', toggleChat);
  if (closeBtn) closeBtn.addEventListener('click', () => chatWindow.classList.remove('open'));

  updateTajBotGreeting(currentLang === 'ar');

  const appendMsg = (sender, text, quickReplies = []) => {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${sender}`;

    let avatarHtml = '';
    if (sender === 'bot') {
      avatarHtml = `<img src="${TAJBOT_AVATAR_IMAGE}" alt="TajBot" class="bot-bubble-avatar">`;
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
    typingDiv.className = 'chat-msg bot typing-indicator';
    typingDiv.innerHTML = `
      <div class="chat-msg-wrapper">
        <img src="${TAJBOT_AVATAR_IMAGE}" alt="TajBot" class="bot-bubble-avatar">
        <div class="chat-bubble" style="font-style: italic; color: #8C7A6B; display: flex; align-items: center; gap: 4px;">
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
      if (input.includes('حجز') || input.includes('موعد') || input.includes('احجز')) {
        return {
          text: "أهلاً بك يا هلا! 🤖 يسعدني مساعدتك في حجز موعدك لدى أطبائنا المرخصين. يمكنك حجز الموعد أونلاين فوراً أو التواصل المباشر مع الدكتورة بشرى سوبيا عبر الواتساب.",
          replies: ["حجز موعد أونلاين", "واتساب د. بشرى", "أوقات الدوام", "أسعار الاستشارات"]
        };
      }
      if (input.includes('بلازما') || input.includes('prp') || input.includes('شعر') || input.includes('بشرة') || input.includes('تجميل')) {
        return {
          text: "تقدم الدكتورة <strong>بشرى سوبيا</strong> جلسات البلازما (PRP) الملكية بأعلى معايير التعقيم:<br>• <strong>بلازما تساقط الشعر:</strong> 450 درهم / الجلسة<br>• <strong>بلازما نضارة الوجه (Vampire Glow):</strong> 500 درهم / الجلسة<br>علاجات طبيعية 100% لتحفيز الكولاجين وبصيلات الشعر.",
          replies: ["حجز جلسة بلازما", "واتساب د. بشرى", "موقع العيادة"]
        };
      }
      if (input.includes('جرح') || input.includes('غرز') || input.includes('خياطة') || input.includes('غيار') || input.includes('طوارئ')) {
        return {
          text: "نعم! يقدم الدكتور <strong>خان محمود</strong> خدمة <strong>العناية بالجروح السطحية وخياطة الغرز الطبية المعقمة</strong> وإزالة الغرز وتغيير الضمادات تحت التخدير الموضعي في قسم العيادات الخارجية <em>(بدون جراحات كبرى)</em>.",
          replies: ["حجز علاج الجروح", "واتساب د. بشرى", "موقع العيادة"]
        };
      }
      if (input.includes('طبيب') || input.includes('دكتور') || input.includes('بشرى') || input.includes('خان')) {
        return {
          text: "أطباؤنا المعتمدون في خدمتكم:<br>• <strong>د. بشرى سوبيا (Lic. D46336):</strong> طب عام، تجميل وبلازما، ورعاية الأمهات.<br>• <strong>د. خان محمود (Lic. DI01602):</strong> طب عام، مسالك بولية وذكورة، وخياطة الجروح المعقمة.",
          replies: ["حجز موعد", "واتساب د. بشرى", "موقع العيادة"]
        };
      }
      if (input.includes('سعر') || input.includes('أسعار') || input.includes('تكلفة') || input.includes('كم')) {
        return {
          text: "أسعار عيادة التاج الفضي شفافة وبدون رسوم خفية:<br>• استشارة طب عام: 150 درهم<br>• بلازما الشعر: 450 درهم<br>• بلازما الوجه: 500 درهم<br>• استشارة الذكورة والمسالك: 250 درهم<br>• خياطة وغيار الجروح: تبدأ من 200 درهم",
          replies: ["حجز استشارة", "واتساب د. بشرى", "حاسبة التكلفة"]
        };
      }
      if (input.includes('دوام') || input.includes('وقت') || input.includes('ساعة') || input.includes('جمعة')) {
        return {
          text: "أوقات عمل العيادة بالشارقة:<br>• <strong>السبت – الخميس:</strong> 9:00 صباحاً – 10:00 مساءً<br>• <strong>الجمعة:</strong> 2:00 ظهراً – 10:00 مساءً<br>نرحب بالحضور المباشر والمواعيد المحجوزة 7 أيام بالأسبوع.",
          replies: ["حجز موعد", "موقع العيادة", "اتصال هاتفي"]
        };
      }
      if (input.includes('موقع') || input.includes('عنوان') || input.includes('شارقة') || input.includes('مكان')) {
        return {
          text: "موقعنا المتميز: <strong>شارع الملك فيصل، منطقة المجاز، الشارقة</strong> (قريب جداً وسهل الوصول من الشارقة ودبي مع مواقف سيارات متوفرة).",
          replies: ["فتح في خرائط جوجل", "حجز موعد", "اتصال هاتفي"]
        };
      }
      return {
        text: "حياك الله ومرحباً بك! أنا <strong>تاج بوت (TajBot) 🤖</strong>، مساعدكم الطبي الآلي بعيادة التاج الفضي بالشارقة. كيف يمكنني خدمتك اليوم بخصوص المواعيد أو علاجات البلازما أو استشارات الأطباء؟",
        replies: ["حجز موعد", "علاجات البلازما (PRP)", "العناية بالجروح", "أسعار الاستشارات", "أوقات الدوام", "واتساب د. بشرى"]
      };
    }

    if (input.includes('stitch') || input.includes('suture') || input.includes('wound') || input.includes('dressing')) {
      return {
        text: "Yes! Dr. Khan Mehmood provides <strong>Sterile Outpatient Wound Care & Minor Stitches (Suturing)</strong>, suture removals, and antiseptic dressings under local anesthesia.",
        replies: ["Book Wound Care", "Doctor Timings", "Clinic Location", "WhatsApp Dr. Bushra"]
      };
    }

    if (input.includes('prp') || input.includes('hair') || input.includes('face') || input.includes('glow') || input.includes('skin')) {
      return {
        text: "Dr. Bushra Sobia provides certified <strong>Platelet-Rich Plasma (PRP)</strong> therapy:<br>• <strong>PRP Hair Restoration:</strong> AED 450 / session<br>• <strong>Facial PRP Rejuvenation:</strong> AED 500 / session<br>100% natural, biocompatible collagen & hair follicle stimulation.",
        replies: ["Book PRP Therapy", "WhatsApp Dr. Bushra", "Check Prices", "Clinic Location"]
      };
    }

    if (input.includes('doctor') || input.includes('bushra') || input.includes('khan')) {
      return {
        text: "Our MOH/SHA licensed physicians:<br>• <strong>Dr. Bushra Sobia (Lic. D46336):</strong> General Practice, Aesthetic PRP, Antenatal Checkups.<br>• <strong>Dr. Khan Mehmood (Lic. DI01602):</strong> General Medicine, Urogenital & Men's Health, Outpatient Wound Suturing.",
        replies: ["Book with Dr. Bushra", "Book with Dr. Khan", "WhatsApp Dr. Bushra", "Clinic Timings"]
      };
    }

    if (input.includes('price') || input.includes('cost') || input.includes('fee')) {
      return {
        text: "Our healthcare fees are clear and transparent:<br>• General Consultation: AED 150<br>• PRP Hair Therapy: AED 450<br>• Facial PRP Rejuvenation: AED 500<br>• Urogenital Evaluation: AED 250<br>• Wound Suturing & Dressing: From AED 200",
        replies: ["Book Appointment", "WhatsApp Dr. Bushra", "Consultation Calculator"]
      };
    }

    if (input.includes('time') || input.includes('timing') || input.includes('hour') || input.includes('open')) {
      return {
        text: "Al Taj Alfadhi Clinic is open:<br>• <strong>Monday – Saturday:</strong> 09:00 AM – 11:00 PM<br>• <strong>Sunday:</strong> On Call & Appointment<br>Walk-ins and booked appointments welcome.",
        replies: ["Book Consultation", "Get Directions", "Call (06) 704 4671"]
      };
    }

    if (input.includes('book') || input.includes('appointment')) {
      return {
        text: "You can book your consultation online in under 30 seconds with immediate confirmation, or chat with our reception directly on WhatsApp 050 96 91 037!",
        replies: ["Go to Booking Page", "WhatsApp Clinic", "Doctor Timings"]
      };
    }

    if (input.includes('whatsapp') || input.includes('call') || input.includes('contact')) {
      return {
        text: "Reach Al Taj Alfadhi Clinic directly:<br>📞 Landline: <a href='tel:+97167044671'><strong>(06) 704 4671</strong></a><br>💬 WhatsApp: <a href='https://wa.me/971509691037' target='_blank'><strong>050 96 91 037</strong></a><br>📍 Location: Al Soussi Bldg, Industrial Area 11, Sharjah",
        replies: ["WhatsApp Clinic", "Book Online", "Clinic Timings"]
      };
    }

    return {
      text: "Marhaban & Welcome! 🤖 I am <strong>TajBot</strong>, your cute medical concierge at Al Taj Alfadhi Clinic. How may I assist you with appointments, PRP aesthetics, or doctor schedules today?",
      replies: ["Book Appointment", "PRP Hair & Face", "Wound Care & Stitches", "WhatsApp Clinic", "Clinic Hours & Location"]
    };
  };

  const handleUserMessage = (userText) => {
    if (!userText || userText.trim() === '') return;

    appendMsg('user', userText);
    if (chatInput) chatInput.value = '';

    const typing = showTypingIndicator();

    setTimeout(() => {
      typing.remove();
      const response = tajBotBrain(userText);
      appendMsg('bot', response.text, response.replies);

      if (userText.includes("Book Online") || userText.includes("Go to Booking Page") || userText.includes("حجز موعد")) {
        setTimeout(() => {
          window.location.href = "appointment.html";
        }, 1200);
      } else if (userText.includes("WhatsApp") || userText.includes("واتساب")) {
        window.open("https://wa.me/971509691037", "_blank");
      }
    }, 450);
  };

  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      if (chatInput) handleUserMessage(chatInput.value);
    });
  }

  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleUserMessage(chatInput.value);
      }
    });
  }
}

function updateTajBotGreeting(isArabic) {
  const greetingTextElem = document.querySelector('.tajbot-greeting-text');
  if (greetingTextElem) {
    greetingTextElem.textContent = isArabic 
      ? "حياكم الله ومرحباً! 👋 أنا تاج بوت، هل تود المساعدة في حجز موعد؟"
      : "Marhaban! 👋 I'm TajBot. Need help booking with Dr. Bushra?";
  }

  const chatBody = document.querySelector('.chat-body');
  if (!chatBody) return;

  chatBody.innerHTML = '';
  const initialMsg = document.createElement('div');
  initialMsg.className = 'chat-msg bot';

  if (isArabic) {
    initialMsg.innerHTML = `
      <div class="chat-msg-wrapper">
        <img src="${TAJBOT_AVATAR_IMAGE}" alt="TajBot" class="bot-bubble-avatar">
        <div class="chat-bubble">
          حياكم الله وأهلاً وسهلاً بكم! 👋 أنا <strong>تاج بوت (TajBot) 🤖</strong> المساعد الطبي الذكي لعيادة التاج الفضي. يسعدني خدمتكم في حجز المواعيد، جلسات البلازما (PRP) مع الدكتورة بشرى سوبيا، أو الإجابة عن أي استفسار!
        </div>
      </div>
      <div class="chat-quick-replies">
        <button type="button" class="chat-quick-btn" data-query="حجز موعد">حجز موعد</button>
        <button type="button" class="chat-quick-btn" data-query="علاجات البلازما (PRP)">علاجات البلازما (PRP)</button>
        <button type="button" class="chat-quick-btn" data-query="العناية بالجروح">العناية بالجروح</button>
        <button type="button" class="chat-quick-btn" data-query="أسعار الاستشارات">أسعار الاستشارات</button>
        <button type="button" class="chat-quick-btn" data-query="واتساب د. بشرى">واتساب د. بشرى</button>
        <button type="button" class="chat-quick-btn" data-query="أوقات الدوام">أوقات الدوام</button>
      </div>
    `;
  } else {
    initialMsg.innerHTML = `
      <div class="chat-msg-wrapper">
        <img src="${TAJBOT_AVATAR_IMAGE}" alt="TajBot" class="bot-bubble-avatar">
        <div class="chat-bubble">
          Marhaban & Welcome! 👋 I am <strong>TajBot 🤖</strong>, your AI Medical Concierge at Al Taj Alfadhi Clinic. How may I assist you with Dr. Bushra Sobia's consultations, PRP aesthetics, or clinic appointments today?
        </div>
      </div>
      <div class="chat-quick-replies">
        <button type="button" class="chat-quick-btn" data-query="Book Appointment">Book Appointment</button>
        <button type="button" class="chat-quick-btn" data-query="PRP Hair & Face">PRP Hair & Face</button>
        <button type="button" class="chat-quick-btn" data-query="Wound Care & Stitches">Wound Care & Stitches</button>
        <button type="button" class="chat-quick-btn" data-query="WhatsApp Dr. Bushra">WhatsApp Dr. Bushra</button>
        <button type="button" class="chat-quick-btn" data-query="Clinic Hours & Location">Clinic Hours & Location</button>
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
   4. Sticky Header on Scroll
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 25) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   5. Mobile Drawer Navigation
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const closeBtn = document.querySelector('.drawer-close');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.drawer-overlay');

  if (!toggleBtn || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
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
   6. Service Tabs & Search Filter
   -------------------------------------------------------------------------- */
function initServiceTabsAndSearch() {
  const tabButtons = document.querySelectorAll('.service-tab-btn');
  const serviceCards = document.querySelectorAll('.service-filter-card');
  const searchInput = document.getElementById('serviceSearchInput');

  if (!tabButtons.length && !serviceCards.length) return;

  let activeCategory = 'all';
  let searchQuery = '';

  const filterCards = () => {
    serviceCards.forEach(card => {
      const category = card.getAttribute('data-category') || '';
      const title = card.querySelector('.service-title')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('.service-desc')?.textContent.toLowerCase() || '';
      const text = `${title} ${desc}`;

      const matchesCategory = (activeCategory === 'all' || category.includes(activeCategory));
      const matchesSearch = searchQuery === '' || text.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        card.style.opacity = '1';
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
      }
    });
  };

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category') || 'all';
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
   7. Consultation Fee Estimator
   -------------------------------------------------------------------------- */
function initConsultationCalculator() {
  const chips = document.querySelectorAll('.calc-chip');
  const serviceNameElem = document.getElementById('calcServiceName');
  const servicePriceElem = document.getElementById('calcServicePrice');
  const doctorSelect = document.getElementById('calcDoctorSelect');
  const doctorFeeElem = document.getElementById('calcDoctorFee');
  const totalPriceElem = document.getElementById('calcTotalPrice');
  const bookNowBtn = document.getElementById('calcBookBtn');

  if (!chips.length || !totalPriceElem) return;

  let selectedService = {
    name: 'General Physician Consultation',
    price: 150
  };

  let doctorFee = 0;

  const updateSummary = () => {
    if (serviceNameElem) {
      serviceNameElem.textContent = (currentLang === 'ar' && DICTIONARY_AR[selectedService.name]) 
        ? DICTIONARY_AR[selectedService.name] 
        : selectedService.name;
    }
    if (servicePriceElem) servicePriceElem.textContent = `AED ${selectedService.price}`;
    
    if (doctorSelect) {
      doctorFee = parseInt(doctorSelect.value, 10) || 0;
      if (doctorFeeElem) doctorFeeElem.textContent = doctorFee > 0 ? `+ AED ${doctorFee}` : (currentLang === 'ar' ? 'مشمول' : 'Included');
    }

    const total = selectedService.price + doctorFee;
    totalPriceElem.textContent = `AED ${total}`;

    if (bookNowBtn) {
      bookNowBtn.href = `appointment.html?service=${encodeURIComponent(selectedService.name)}`;
    }
  };

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const name = chip.getAttribute('data-name') || 'General Physician Consultation';
      const price = parseInt(chip.getAttribute('data-price'), 10) || 150;
      selectedService = { name, price };
      updateSummary();
    });
  });

  if (doctorSelect) {
    doctorSelect.addEventListener('change', updateSummary);
  }

  updateSummary();
}

/* --------------------------------------------------------------------------
   8. Appointment Booking System & Modal
   -------------------------------------------------------------------------- */
function initAppointmentBooking() {
  const bookingForm = document.getElementById('appointmentForm');
  const timeSlots = document.querySelectorAll('.time-slot-btn');
  const selectedTimeInput = document.getElementById('selectedTimeInput');
  const dateInput = document.getElementById('appointmentDate');

  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    if (!dateInput.value) {
      dateInput.value = today;
    }
  }

  const urlParams = new URLSearchParams(window.location.search);
  const serviceParam = urlParams.get('service');
  const doctorParam = urlParams.get('doctor');

  if (serviceParam) {
    const serviceSelect = document.getElementById('bookingService');
    if (serviceSelect) {
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].text.toLowerCase().includes(serviceParam.toLowerCase()) ||
            serviceSelect.options[i].value.toLowerCase().includes(serviceParam.toLowerCase())) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }
  }

  if (doctorParam) {
    const doctorSelect = document.getElementById('bookingDoctor');
    if (doctorSelect) {
      for (let i = 0; i < doctorSelect.options.length; i++) {
        if (doctorSelect.options[i].text.toLowerCase().includes(doctorParam.toLowerCase()) ||
            doctorSelect.options[i].value.toLowerCase().includes(doctorParam.toLowerCase())) {
          doctorSelect.selectedIndex = i;
          break;
        }
      }
    }
  }

  timeSlots.forEach(slot => {
    slot.addEventListener('click', () => {
      timeSlots.forEach(s => s.classList.remove('selected'));
      slot.classList.add('selected');
      if (selectedTimeInput) {
        selectedTimeInput.value = slot.getAttribute('data-time') || slot.textContent.trim();
      }
    });
  });

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('patientName')?.value || 'Valued Patient';
      const phone = document.getElementById('patientPhone')?.value || '';
      const doctor = document.getElementById('bookingDoctor')?.options[document.getElementById('bookingDoctor').selectedIndex]?.text || 'Dr. Bushra Sobia';
      const service = document.getElementById('bookingService')?.options[document.getElementById('bookingService').selectedIndex]?.text || 'Consultation';
      const date = document.getElementById('appointmentDate')?.value || 'Today';
      const time = selectedTimeInput?.value || '10:00 AM';

      const refId = 'AT-' + Math.floor(1000 + Math.random() * 9000);

      const refElem = document.getElementById('modalRefId');
      const nameElem = document.getElementById('modalPatientName');
      const doctorElem = document.getElementById('modalDoctorName');
      const serviceElem = document.getElementById('modalServiceName');
      const dateElem = document.getElementById('modalDateTime');

      if (refElem) refElem.textContent = refId;
      if (nameElem) nameElem.textContent = name;
      if (doctorElem) doctorElem.textContent = doctor;
      if (serviceElem) serviceElem.textContent = service;
      if (dateElem) dateElem.textContent = `${date} at ${time}`;

      const modal = document.getElementById('bookingConfirmationModal');
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }

      const whatsappBtn = document.getElementById('modalWhatsAppBtn');
      if (whatsappBtn) {
        const msg = `Hello Al Taj Alfadhi Clinic, I have reserved appointment #${refId} for ${name} (${phone}) with ${doctor} on ${date} at ${time} for ${service}. Please confirm my booking.`;
        whatsappBtn.href = `https://wa.me/971509691037?text=${encodeURIComponent(msg)}`;
      }

      bookingForm.reset();
    });
  }

  const closeModalBtns = document.querySelectorAll('.modal-close-trigger');
  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.getElementById('bookingConfirmationModal');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   9. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   10. Inspo Hero Quick Consultation Search & Filter
   -------------------------------------------------------------------------- */
function initHeroQuickSearch() {
  const searchBtn = document.getElementById('heroQuickSearchBtn');
  const serviceSelect = document.getElementById('heroQuickService');
  const doctorSelect = document.getElementById('heroQuickDoctor');

  if (!searchBtn) return;

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const serviceVal = serviceSelect ? serviceSelect.value : '';
    const doctorVal = doctorSelect ? doctorSelect.value : '';

    // If booking form exists on this page, pre-fill and scroll
    const bookForm = document.getElementById('appointmentForm');
    const appointmentSection = document.getElementById('appointment-booking-section') || document.querySelector('.appointment-section');
    
    if (bookForm && appointmentSection) {
      const formService = document.getElementById('appointmentService');
      const formDoctor = document.getElementById('appointmentDoctor');
      if (formService && serviceVal) formService.value = serviceVal;
      if (formDoctor && doctorVal) formDoctor.value = doctorVal;
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to appointment page with query params
      const query = new URLSearchParams({
        service: serviceVal,
        doctor: doctorVal
      }).toString();
      window.location.href = `appointment.html?${query}`;
    }
  });
}