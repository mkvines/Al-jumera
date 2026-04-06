export type Locale = "en" | "ar";

type TranslationDict = Record<string, { en: string; ar: string }>;

const translations: TranslationDict = {
  // ─── NAV ───
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.about": { en: "About", ar: "من نحن" },
  "nav.services": { en: "Services", ar: "خدماتنا" },
  "nav.projects": { en: "Projects", ar: "مشاريعنا" },
  "nav.contact": { en: "Contact", ar: "اتصل بنا" },
  "nav.aboutUs": { en: "About Us", ar: "من نحن" },
  "nav.getQuote": { en: "Get a Quote", ar: "احصل على عرض سعر" },

  // ─── HERO SLIDER ───
  "hero.trustedPartner": { en: "Trusted Partner · Since 1998", ar: "شريك موثوق · منذ 1998" },
  "hero.engineering": { en: "Engineering", ar: "هندسة" },
  "hero.across": { en: "Across", ar: "عبر" },
  "hero.saudiArabia": { en: "Saudi Arabia", ar: "المملكة العربية السعودية" },
  "hero.subtextMobile": {
    en: "From royal palaces to industrial warehouses — world-class HVAC solutions.",
    ar: "من القصور الملكية إلى المستودعات الصناعية — حلول تكييف عالمية المستوى.",
  },
  "hero.subtextDesktop": {
    en: "From royal palaces to industrial warehouses — we deliver world-class HVAC solutions backed by decades of expertise and global brand partnerships.",
    ar: "من القصور الملكية إلى المستودعات الصناعية — نقدم حلول تكييف عالمية المستوى مدعومة بعقود من الخبرة وشراكات مع علامات تجارية عالمية.",
  },
  "hero.requestQuote": { en: "Request a Quote", ar: "طلب عرض سعر" },
  "hero.ourProjects": { en: "Our Projects", ar: "مشاريعنا" },
  "hero.viewProjects": { en: "View Our Projects", ar: "عرض مشاريعنا" },
  "hero.trustedByHundreds": { en: "Trusted by Hundreds", ar: "موثوق من المئات" },

  // Hero slide labels/tags
  "slide.whoWeAre": { en: "Who We Are", ar: "من نحن" },
  "slide.acInstallation": { en: "AC Installation", ar: "تركيب مكيفات" },
  "slide.rooftopService": { en: "Rooftop Service", ar: "خدمة الأسطح" },
  "slide.ductInstallation": { en: "Duct Installation", ar: "تركيب مجاري الهواء" },
  "slide.smartControls": { en: "Smart Controls", ar: "التحكم الذكي" },
  "slide.professionalTeam": { en: "Professional Team", ar: "فريق محترف" },
  "slide.projectPlanning": { en: "Project Planning", ar: "تخطيط المشاريع" },
  "slide.featured": { en: "Featured", ar: "مميز" },
  "slide.popular": { en: "Popular", ar: "شائع" },
  "slide.latest": { en: "Latest", ar: "الأحدث" },
  "slide.expert": { en: "Expert", ar: "خبير" },
  "slide.trusted": { en: "Trusted", ar: "موثوق" },
  "slide.new": { en: "New", ar: "جديد" },

  // Trust stats
  "trust.25years": { en: "25+ Years Experience", ar: "+25 سنة خبرة" },
  "trust.installMaint": { en: "Installation & Maintenance", ar: "تركيب وصيانة" },
  "trust.location": { en: "Riyadh · KSA", ar: "الرياض · السعودية" },

  // ─── ANIMATED HERO TEXT ───
  "heroText.comfort": { en: "Comfort", ar: "الراحة" },
  "heroText.excellence": { en: "Excellence", ar: "التميّز" },
  "heroText.innovation": { en: "Innovation", ar: "الابتكار" },
  "heroText.reliability": { en: "Reliability", ar: "الموثوقية" },
  "heroText.precision": { en: "Precision", ar: "الدقة" },

  // ─── HOME PAGE — SERVICES SECTION ───
  "home.services.label": { en: "What We Do", ar: "ماذا نفعل" },
  "home.services.title": { en: "Our HVAC Services", ar: "خدمات التكييف لدينا" },
  "home.services.desc": {
    en: "Comprehensive climate control solutions — from precision installation to ongoing maintenance.",
    ar: "حلول تحكم مناخي شاملة — من التركيب الدقيق إلى الصيانة المستمرة.",
  },
  "home.viewAllServices": { en: "View All Services", ar: "عرض جميع الخدمات" },

  // ─── HOME PAGE — PROJECTS SECTION ───
  "home.projects.label": { en: "Our Portfolio", ar: "أعمالنا" },
  "home.projects.title": { en: "Featured Projects", ar: "مشاريع مميزة" },
  "home.projects.desc": {
    en: "Recent installations across Saudi Arabia — from pharmaceutical warehouses to university campuses.",
    ar: "تركيبات حديثة في أنحاء المملكة — من مستودعات الأدوية إلى الحرم الجامعي.",
  },
  "home.viewAllProjects": { en: "View All Projects", ar: "عرض جميع المشاريع" },

  // ─── HOME PAGE — WHY CHOOSE US ───
  "home.why.label": { en: "Why Us", ar: "لماذا نحن" },
  "home.why.title": { en: "Why Choose AL-JUMERAH ATQAAN", ar: "لماذا تختار الجميرة إتقان" },
  "home.why.desc": {
    en: "We combine decades of HVAC expertise with global brand partnerships to deliver unmatched quality.",
    ar: "نجمع بين عقود من خبرة التكييف وشراكات العلامات التجارية العالمية لتقديم جودة لا مثيل لها.",
  },
  "why.expertise.title": { en: "25+ Years of Expertise", ar: "+25 سنة من الخبرة" },
  "why.expertise.desc": {
    en: "Decades of proven track record delivering complex HVAC projects across Saudi Arabia.",
    ar: "عقود من السجل المثبت في تنفيذ مشاريع تكييف معقدة في أنحاء المملكة.",
  },
  "why.team.title": { en: "Professional Team", ar: "فريق محترف" },
  "why.team.desc": {
    en: "Certified engineers and technicians trained on the latest HVAC technologies and best practices.",
    ar: "مهندسون وفنيون معتمدون مدربون على أحدث تقنيات وممارسات التكييف.",
  },
  "why.brands.title": { en: "Global Brand Expertise", ar: "خبرة العلامات التجارية العالمية" },
  "why.brands.desc": {
    en: "Authorized specialists for TRANE, DAIKIN, Carrier, LG, Gree, YORK, and Zamil systems.",
    ar: "متخصصون معتمدون لأنظمة TRANE وDAIKIN وCarrier وLG وGree وYORK وZamil.",
  },
  "why.quality.title": { en: "Quality & Safety First", ar: "الجودة والسلامة أولاً" },
  "why.quality.desc": {
    en: "Rigorous quality control and full compliance with Saudi safety regulations on every project.",
    ar: "رقابة جودة صارمة وامتثال كامل لأنظمة السلامة السعودية في كل مشروع.",
  },
  "why.manpower.title": { en: "Full Manpower & Resources", ar: "القوى العاملة والموارد الكاملة" },
  "why.manpower.desc": {
    en: "In-house teams with their own tools, transport, and equipment — no subcontractor delays.",
    ar: "فرق داخلية بأدواتهم ونقلهم ومعداتهم — بدون تأخيرات المقاولين من الباطن.",
  },
  "why.endToEnd.title": { en: "End-to-End Service", ar: "خدمة شاملة" },
  "why.endToEnd.desc": {
    en: "From initial consultation and design through installation, commissioning, and long-term maintenance.",
    ar: "من الاستشارة والتصميم الأولي مروراً بالتركيب والتشغيل وحتى الصيانة طويلة الأمد.",
  },

  // ─── PROCESS SECTION ───
  "process.label": { en: "How We Work", ar: "كيف نعمل" },
  "process.title": { en: "The Engine Behind the Chill", ar: "المحرك وراء التبريد" },
  "process.desc": {
    en: "A highly technical, four-step engineering process that guarantees peak HVAC performance.",
    ar: "عملية هندسية فنية عالية من أربع خطوات تضمن أعلى أداء للتكييف.",
  },
  "process.assess.title": { en: "Assessment & Blueprint", ar: "التقييم والمخطط" },
  "process.assess.desc": {
    en: "We inspect your facility and draft highly precise structural and thermal load models.",
    ar: "نفحص منشأتك ونعد نماذج أحمال حرارية وإنشائية عالية الدقة.",
  },
  "process.design.title": { en: "System Engineering", ar: "هندسة الأنظمة" },
  "process.design.desc": {
    en: "Our engineers architect optimal ducting and calculate freon flow using advanced thermodynamics.",
    ar: "يصمم مهندسونا أفضل المجاري ويحسبون تدفق الفريون باستخدام الديناميكا الحرارية المتقدمة.",
  },
  "process.install.title": { en: "Precision Installation", ar: "التركيب الدقيق" },
  "process.install.desc": {
    en: "Expert technicians physically map, mount, and weld the hardware securely into your infrastructure.",
    ar: "فنيون خبراء يرسمون ويركبون ويلحمون الأجهزة بأمان في بنيتك التحتية.",
  },
  "process.optimize.title": { en: "Commission & Chill", ar: "التشغيل والتبريد" },
  "process.optimize.desc": {
    en: "Sensors are tuned, airflow is optimized, and continuous perfect climate control is achieved.",
    ar: "يتم ضبط المستشعرات وتحسين تدفق الهواء وتحقيق التحكم المثالي المستمر بالمناخ.",
  },

  // ─── TESTIMONIALS ───
  "testimonials.badge": { en: "Client Testimonials", ar: "آراء العملاء" },
  "testimonials.title": { en: "Trusted by Industry Leaders", ar: "موثوق من قادة الصناعة" },
  "testimonials.desc": {
    en: "Hear from the organizations that rely on our expertise for their critical HVAC infrastructure.",
    ar: "اسمع من المؤسسات التي تعتمد على خبرتنا في بنيتها التحتية الحرجة للتكييف.",
  },
  "testimonials.ratingLine": { en: "4.9/5 from 100+ clients", ar: "4.9/5 من أكثر من 100 عميل" },
  "testimonials.ahmed.role": { en: "Facilities Director", ar: "مدير المرافق" },
  "testimonials.ahmed.text": {
    en: "AL-JUMERAH delivered an exceptional HVAC overhaul for our headquarters. Their professionalism and attention to detail exceeded our expectations. The system runs flawlessly.",
    ar: "قدمت الجميرة إصلاحاً استثنائياً لنظام التكييف في مقرنا الرئيسي. لقد تجاوزت احترافيتهم واهتمامهم بالتفاصيل توقعاتنا. النظام يعمل بشكل مثالي.",
  },
  "testimonials.mohammed.role": { en: "Project Manager", ar: "مدير مشاريع" },
  "testimonials.mohammed.text": {
    en: "We've partnered with AL-JUMERAH on multiple large-scale projects. Their team consistently delivers on time, within budget, and with outstanding quality.",
    ar: "تعاونا مع الجميرة في عدة مشاريع كبيرة. فريقهم يقدم دائماً في الوقت المحدد وضمن الميزانية وبجودة متميزة.",
  },
  "testimonials.khalid.role": { en: "Operations Manager", ar: "مدير العمليات" },
  "testimonials.khalid.text": {
    en: "From consultation to commissioning, AL-JUMERAH handled everything with precision. Their maintenance support has been reliable for over 3 years now.",
    ar: "من الاستشارة إلى التشغيل، تعاملت الجميرة مع كل شيء بدقة. دعم الصيانة لديهم موثوق منذ أكثر من 3 سنوات.",
  },

  // ─── FOOTER ───
  "footer.brandsTitle": { en: "Brands We Specialize In", ar: "العلامات التجارية التي نتخصص فيها" },
  "footer.quickLinks": { en: "Quick Links", ar: "روابط سريعة" },
  "footer.ourServices": { en: "Our Services", ar: "خدماتنا" },
  "footer.contactUs": { en: "Contact Us", ar: "اتصل بنا" },
  "footer.airCooledChiller": { en: "Air Cooled Chiller", ar: "مبرد هواء" },
  "footer.ahu": { en: "Air Handling Unit (AHU)", ar: "وحدة مناولة الهواء (AHU)" },
  "footer.ductedConcealed": { en: "Ducted Concealed", ar: "مخفي مجاري هواء" },
  "footer.vrvVrf": { en: "VRV / VRF Systems", ar: "أنظمة VRV / VRF" },
  "footer.packageUnit": { en: "Package Unit", ar: "وحدة مجمّعة" },
  "footer.exhaustVent": { en: "Exhaust Fan & Ventilation", ar: "مراوح شفط وتهوية" },
  "footer.copyright": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  "footer.tagline": { en: "We Engineer Comfort", ar: "نهندس الراحة" },

  // ─── CTA SECTION ───
  "cta.getStarted": { en: "Get Started Today", ar: "ابدأ اليوم" },
  "cta.fastQuote": { en: "Get a Fast", ar: "احصل على" },
  "cta.quotation": { en: "Quotation", ar: "عرض سعر سريع" },
  "cta.forHvac": { en: "for Your HVAC Project", ar: "لمشروع التكييف الخاص بك" },
  "cta.desc": {
    en: "Contact us via phone or WhatsApp for an immediate response. Our team is ready to assess your needs and provide a competitive quote.",
    ar: "تواصل معنا عبر الهاتف أو واتساب للحصول على رد فوري. فريقنا جاهز لتقييم احتياجاتك وتقديم عرض سعر تنافسي.",
  },
  "cta.whatsapp": { en: "WhatsApp Us", ar: "واتساب" },
  "cta.call": { en: "Call Us Directly", ar: "اتصل بنا مباشرة" },
  "cta.email": { en: "Email Us", ar: "راسلنا" },
  "cta.detailedQuote": { en: "Request a Detailed Quote →", ar: "اطلب عرض سعر مفصل ←" },

  // ─── CTA BANNER (defaults) ───
  "ctaBanner.title": { en: "Ready to Start Your Project?", ar: "مستعد لبدء مشروعك؟" },
  "ctaBanner.desc": {
    en: "Get a free consultation and quote from our experienced HVAC team. We deliver excellence across Saudi Arabia.",
    ar: "احصل على استشارة مجانية وعرض سعر من فريق التكييف المتمرس لدينا. نقدم التميز في أنحاء المملكة.",
  },
  "ctaBanner.button": { en: "Request a Quote", ar: "اطلب عرض سعر" },

  // ─── STATS SECTION ───
  "stats.years": { en: "Years Experience", ar: "سنوات الخبرة" },
  "stats.projects": { en: "Projects Completed", ar: "مشروع منجز" },
  "stats.brands": { en: "Major Brands", ar: "علامات تجارية كبرى" },
  "stats.satisfaction": { en: "Client Satisfaction", ar: "رضا العملاء" },

  // ─── SERVICES DATA ───
  "service.vrv.title": { en: "VRF / VRV Systems", ar: "أنظمة VRF / VRV" },
  "service.vrv.desc": {
    en: "Variable Refrigerant Flow systems for precise, zone-based climate control in multi-story and mixed-use buildings. Energy-efficient and scalable.",
    ar: "أنظمة تدفق مبرد متغير للتحكم الدقيق بالمناخ حسب المناطق في المباني متعددة الطوابق ومتعددة الاستخدامات. موفرة للطاقة وقابلة للتوسع.",
  },
  "service.package.title": { en: "Package Units", ar: "الوحدات المجمّعة" },
  "service.package.desc": {
    en: "Self-contained packaged HVAC units for commercial and industrial applications. Turnkey installation with reliable performance in extreme temperatures.",
    ar: "وحدات تكييف مجمّعة ذاتية الاحتواء للتطبيقات التجارية والصناعية. تركيب جاهز بأداء موثوق في درجات الحرارة القصوى.",
  },
  "service.chillers.title": { en: "Chillers & AHU", ar: "المبردات ووحدات مناولة الهواء" },
  "service.chillers.desc": {
    en: "Air Cooled Chiller and Air Handling Unit installation, commissioning, and servicing. Custom solutions for optimal temperature and air quality control.",
    ar: "تركيب وتشغيل وصيانة مبردات الهواء ووحدات مناولة الهواء. حلول مخصصة للتحكم الأمثل بدرجة الحرارة وجودة الهواء.",
  },
  "service.ducting.title": { en: "Ducting & Ventilation", ar: "مجاري الهواء والتهوية" },
  "service.ducting.desc": {
    en: "Ducted concealed systems and comprehensive ventilation design. Hidden units with maximum airflow for spaces where aesthetics meet performance.",
    ar: "أنظمة مخفية بمجاري هواء وتصميم تهوية شامل. وحدات مخفية بأقصى تدفق هواء حيث تلتقي الجماليات بالأداء.",
  },
  "service.exhaust.title": { en: "Exhaust & Fresh Air (FAHU)", ar: "الشفط والهواء النقي (FAHU)" },
  "service.exhaust.desc": {
    en: "Industrial exhaust fan installation and Fresh Air Handling Units (FAHU). Ensuring proper air circulation, fume extraction, and safety compliance.",
    ar: "تركيب مراوح شفط صناعية ووحدات مناولة الهواء النقي (FAHU). ضمان دوران الهواء المناسب واستخراج الأبخرة والامتثال للسلامة.",
  },
  "service.maintenance.title": { en: "Maintenance & Commissioning", ar: "الصيانة والتشغيل" },
  "service.maintenance.desc": {
    en: "Preventive and corrective maintenance programs with full system commissioning. Keeping your HVAC infrastructure at peak performance year-round.",
    ar: "برامج صيانة وقائية وتصحيحية مع تشغيل كامل للنظام. الحفاظ على بنية التكييف التحتية بأعلى أداء على مدار العام.",
  },

  // ─── ABOUT PAGE ───
  "about.hero.title": { en: "About AL-JUMERAH ATQAAN", ar: "عن الجميرة إتقان" },
  "about.hero.subtitle": { en: "Our Story", ar: "قصتنا" },
  "about.hero.desc": {
    en: "25+ years of engineering comfort, reliability, and excellence across the Kingdom of Saudi Arabia.",
    ar: "+25 سنة من هندسة الراحة والموثوقية والتميز في أنحاء المملكة العربية السعودية.",
  },
  "about.journey": { en: "Our Journey", ar: "رحلتنا" },
  "about.legacyTitle": { en: "Building a Legacy in HVAC Excellence", ar: "بناء إرث في التميز بالتكييف" },
  "about.p1": {
    en: "AL-JUMERAH ATQAAN CONTRACTING EST. was founded with a clear mission: to bring world-class air conditioning and HVAC solutions to Saudi Arabia. Over the past 25 years, we have grown from a small local operation into one of the most trusted HVAC contractors in the Kingdom.",
    ar: "تأسست مؤسسة الجميرة إتقان للمقاولات بمهمة واضحة: تقديم حلول تكييف عالمية المستوى للمملكة العربية السعودية. على مدى 25 عاماً الماضية، نمونا من عملية محلية صغيرة إلى واحد من أكثر مقاولي التكييف موثوقية في المملكة.",
  },
  "about.p2": {
    en: "Our team of certified professionals specializes in the servicing and new installation of comprehensive HVAC systems — from air cooled chillers and air handling units to advanced VRV/VRF systems and precision-controlled ventilation.",
    ar: "يتخصص فريقنا من المحترفين المعتمدين في صيانة وتركيب أنظمة التكييف الشاملة — من مبردات الهواء ووحدات مناولة الهواء إلى أنظمة VRV/VRF المتقدمة والتهوية المتحكم بها بدقة.",
  },
  "about.p3": {
    en: "We are proud to partner with the world's leading HVAC brands including TRANE, DAIKIN, Carrier, LG, Gree, YORK, and Zamil. These partnerships enable us to deliver cutting-edge technology backed by manufacturer warranties and support.",
    ar: "نفتخر بشراكتنا مع العلامات التجارية الرائدة عالمياً بما في ذلك TRANE وDAIKIN وCarrier وLG وGree وYORK وZamil. تمكننا هذه الشراكات من تقديم أحدث التقنيات المدعومة بضمانات الشركات المصنعة.",
  },
  "about.p4": {
    en: "Our portfolio spans royal palaces, government institutions, universities, hospitals, commercial warehouses, and showrooms — each project reflecting our commitment to quality, precision, and client satisfaction.",
    ar: "تمتد أعمالنا لتشمل القصور الملكية والمؤسسات الحكومية والجامعات والمستشفيات والمستودعات التجارية وصالات العرض — كل مشروع يعكس التزامنا بالجودة والدقة ورضا العملاء.",
  },
  "about.mission.title": { en: "Our Mission", ar: "مهمتنا" },
  "about.mission.desc": {
    en: "To deliver world-class HVAC solutions with professional expertise, ensuring optimal comfort and energy efficiency for every client.",
    ar: "تقديم حلول تكييف عالمية المستوى بخبرة احترافية، وضمان الراحة المثلى وكفاءة الطاقة لكل عميل.",
  },
  "about.vision.title": { en: "Our Vision", ar: "رؤيتنا" },
  "about.vision.desc": {
    en: "To be Saudi Arabia's most trusted HVAC contractor — known for quality, reliability, and innovation in climate control engineering.",
    ar: "أن نكون أكثر مقاولي التكييف موثوقية في السعودية — معروفين بالجودة والموثوقية والابتكار في هندسة التحكم المناخي.",
  },
  "about.approach.title": { en: "Our Approach", ar: "نهجنا" },
  "about.approach.desc": {
    en: "Every project begins with understanding the client's needs. We engineer solutions tailored to the building, climate, and budget — with zero compromise on quality.",
    ar: "يبدأ كل مشروع بفهم احتياجات العميل. نصمم حلولاً مخصصة للمبنى والمناخ والميزانية — بدون أي تنازل عن الجودة.",
  },
  "about.whyChoose": { en: "Why Choose AL-JUMERAH ATQAAN", ar: "لماذا تختار الجميرة إتقان" },
  "about.why1": { en: "25+ years of proven HVAC expertise", ar: "+25 سنة من خبرة التكييف المثبتة" },
  "about.why2": { en: "Partnerships with 7+ global brands", ar: "شراكات مع أكثر من 7 علامات تجارية عالمية" },
  "about.why3": { en: "Government & institutional project experience", ar: "خبرة في المشاريع الحكومية والمؤسسية" },
  "about.why4": { en: "Licensed and certified professionals", ar: "محترفون مرخصون ومعتمدون" },
  "about.why5": { en: "End-to-end service: design to maintenance", ar: "خدمة شاملة: من التصميم إلى الصيانة" },
  "about.why6": { en: "Competitive pricing with premium quality", ar: "أسعار تنافسية بجودة عالية" },
  "about.partners": { en: "Our Partners", ar: "شركاؤنا" },
  "about.ctaTitle": { en: "Let's Build Together", ar: "لنبني معاً" },
  "about.ctaDesc": {
    en: "Bring your next HVAC project to life with our experienced team. Contact us for a free consultation.",
    ar: "أحيِ مشروعك التالي للتكييف مع فريقنا المتمرس. تواصل معنا للحصول على استشارة مجانية.",
  },

  // ─── SERVICES PAGE ───
  "services.hero.title": { en: "Our HVAC Services", ar: "خدمات التكييف لدينا" },
  "services.hero.subtitle": { en: "What We Offer", ar: "ما نقدمه" },
  "services.hero.desc": {
    en: "Comprehensive climate control solutions — from design and installation to maintenance and servicing.",
    ar: "حلول تحكم مناخي شاملة — من التصميم والتركيب إلى الصيانة والخدمة.",
  },
  "services.installation.title": { en: "Installation", ar: "التركيب" },
  "services.installation.desc": {
    en: "Complete HVAC system design and installation for new constructions and retrofits.",
    ar: "تصميم وتركيب أنظمة تكييف كاملة للمباني الجديدة والتجديدات.",
  },
  "services.maintenance.title": { en: "Maintenance", ar: "الصيانة" },
  "services.maintenance.desc": {
    en: "Preventive and corrective maintenance programs to ensure peak system performance.",
    ar: "برامج صيانة وقائية وتصحيحية لضمان أعلى أداء للنظام.",
  },
  "services.consultation.title": { en: "Consultation", ar: "الاستشارات" },
  "services.consultation.desc": {
    en: "Expert HVAC consulting for system selection, energy optimization, and compliance.",
    ar: "استشارات تكييف متخصصة لاختيار الأنظمة وتحسين الطاقة والامتثال.",
  },
  "services.specializations": { en: "Our Specializations", ar: "تخصصاتنا" },
  "services.systemsTitle": { en: "HVAC Systems We Install & Service", ar: "أنظمة التكييف التي نركبها ونخدمها" },
  "services.systemsDesc": {
    en: "From precision-controlled clean rooms to large-scale industrial cooling — we have the expertise to handle every HVAC requirement.",
    ar: "من الغرف النظيفة المتحكم بها بدقة إلى التبريد الصناعي واسع النطاق — لدينا الخبرة للتعامل مع كل متطلبات التكييف.",
  },
  "services.process": { en: "Our Process", ar: "عمليتنا" },
  "services.step1.title": { en: "Consultation", ar: "الاستشارة" },
  "services.step1.desc": { en: "We assess your needs, space, and requirements", ar: "نقيّم احتياجاتك ومساحتك ومتطلباتك" },
  "services.step2.title": { en: "Design", ar: "التصميم" },
  "services.step2.desc": { en: "Our engineers design the optimal HVAC solution", ar: "يصمم مهندسونا الحل الأمثل للتكييف" },
  "services.step3.title": { en: "Installation", ar: "التركيب" },
  "services.step3.desc": { en: "Professional installation by certified technicians", ar: "تركيب احترافي بواسطة فنيين معتمدين" },
  "services.step4.title": { en: "Support", ar: "الدعم" },
  "services.step4.desc": { en: "Ongoing maintenance and 24/7 support services", ar: "صيانة مستمرة وخدمات دعم على مدار الساعة" },
  "services.ctaTitle": { en: "Need an HVAC Solution?", ar: "تحتاج حل تكييف؟" },
  "services.ctaDesc": {
    en: "Let our experts design the perfect climate control system for your facility. Get a free consultation today.",
    ar: "دع خبراءنا يصممون نظام التحكم المناخي المثالي لمنشأتك. احصل على استشارة مجانية اليوم.",
  },

  // ─── PROJECTS PAGE ───
  "projects.hero.title": { en: "Our Project Portfolio", ar: "أعمالنا ومشاريعنا" },
  "projects.hero.subtitle": { en: "Our Work", ar: "أعمالنا" },
  "projects.hero.desc": {
    en: "Delivering precision HVAC solutions for Saudi Arabia's most demanding environments.",
    ar: "تقديم حلول تكييف دقيقة لأكثر البيئات تطلباً في المملكة.",
  },
  "projects.showcase": { en: "Showcase Projects", ar: "مشاريع العرض" },
  "projects.cities": { en: "Cities Served", ar: "مدن مخدومة" },
  "projects.onTime": { en: "Delivered On Time", ar: "تسليم في الوقت المحدد" },
  "projects.trustedBy": { en: "Trusted By", ar: "يثقون بنا" },
  "projects.valuedClients": { en: "Our Valued Clients", ar: "عملاؤنا الكرام" },
  "projects.ctaTitle": { en: "Have a Similar Project?", ar: "لديك مشروع مشابه؟" },
  "projects.ctaDesc": {
    en: "Let us engineer the right HVAC solution for your building. Contact us for a free site assessment.",
    ar: "دعنا نصمم حل التكييف المناسب لمبناك. تواصل معنا لتقييم مجاني للموقع.",
  },
  "projects.ctaButton": { en: "Discuss Your Project", ar: "ناقش مشروعك" },

  // ─── CONTACT PAGE ───
  "contact.hero.title": { en: "Get in Touch", ar: "تواصل معنا" },
  "contact.hero.subtitle": { en: "Contact Us", ar: "اتصل بنا" },
  "contact.hero.desc": {
    en: "Ready to start your project? Reach out for a free consultation and quote.",
    ar: "مستعد لبدء مشروعك؟ تواصل للحصول على استشارة وعرض سعر مجاني.",
  },
  "contact.info": { en: "Contact Information", ar: "معلومات التواصل" },
  "contact.discuss": { en: "Let's Discuss Your HVAC Needs", ar: "لنناقش احتياجاتك للتكييف" },
  "contact.infoDesc": {
    en: "Our team is available to answer your questions, provide quotes, and schedule site assessments. Reach out through any of the channels below.",
    ar: "فريقنا متاح للإجابة على أسئلتك وتقديم عروض الأسعار وجدولة تقييمات الموقع. تواصل عبر أي من القنوات أدناه.",
  },
  "contact.emailUs": { en: "Email Us", ar: "راسلنا" },
  "contact.callUs": { en: "Call Us", ar: "اتصل بنا" },
  "contact.visitUs": { en: "Visit Us", ar: "زورنا" },
  "contact.workingHours": { en: "Working Hours", ar: "ساعات العمل" },
  "contact.sunThu": { en: "Sunday – Thursday: 8:00 AM – 6:00 PM", ar: "الأحد – الخميس: 8:00 ص – 6:00 م" },
  "contact.friSat": { en: "Friday – Saturday: Closed", ar: "الجمعة – السبت: مغلق" },

  // ─── CONTACT FORM ───
  "form.title": { en: "Request a Quote", ar: "اطلب عرض سعر" },
  "form.subtitle": {
    en: "Fill out the form below and our team will respond within 24 hours.",
    ar: "املأ النموذج أدناه وسيرد فريقنا خلال 24 ساعة.",
  },
  "form.fullName": { en: "Full Name *", ar: "الاسم الكامل *" },
  "form.namePlaceholder": { en: "Your name", ar: "اسمك" },
  "form.emailLabel": { en: "Email Address *", ar: "البريد الإلكتروني *" },
  "form.emailPlaceholder": { en: "your@email.com", ar: "بريدك@الإلكتروني.com" },
  "form.phoneLabel": { en: "Phone Number", ar: "رقم الهاتف" },
  "form.phonePlaceholder": { en: "+966 5XX XXX XXXX", ar: "+966 5XX XXX XXXX" },
  "form.serviceLabel": { en: "Service Required", ar: "الخدمة المطلوبة" },
  "form.selectService": { en: "Select a service", ar: "اختر خدمة" },
  "form.detailsLabel": { en: "Project Details *", ar: "تفاصيل المشروع *" },
  "form.detailsPlaceholder": {
    en: "Tell us about your project, location, and requirements...",
    ar: "أخبرنا عن مشروعك وموقعك ومتطلباتك...",
  },
  "form.send": { en: "Send Request", ar: "إرسال الطلب" },
  "form.sending": { en: "Sending...", ar: "جارِ الإرسال..." },
  "form.thankYou": { en: "Thank You!", ar: "شكراً لك!" },
  "form.received": {
    en: "We've received your request. Our team will get back to you within 24 hours.",
    ar: "تلقينا طلبك. سيتواصل معك فريقنا خلال 24 ساعة.",
  },
  "form.sendAnother": { en: "Send another message →", ar: "← إرسال رسالة أخرى" },
  "form.other": { en: "Other", ar: "أخرى" },

  // ─── MANPOWER PAGE ───
  "manpower.badge": { en: "Our Workforce", ar: "قوانا العاملة" },
  "manpower.title": { en: "Team & Manpower", ar: "الفريق والقوى العاملة" },
  "manpower.descPrefix": { en: "A dedicated team of", ar: "فريق متخصص من" },
  "manpower.descSuffix": {
    en: "professionals — from certified engineers and project managers to skilled technicians and support staff.",
    ar: "محترفاً — من مهندسين معتمدين ومديري مشاريع إلى فنيين مهرة وموظفي دعم.",
  },
  "manpower.mgmtOffice": { en: "Management & Office", ar: "الإدارة والمكتب" },
  "manpower.techManpower": { en: "Technical Manpower", ar: "القوى العاملة الفنية" },
  "manpower.totalWorkforce": { en: "Total Workforce", ar: "إجمالي القوى العاملة" },
  "manpower.professionals": { en: "professionals", ar: "محترفاً" },
  // Roles
  "role.generalManager": { en: "General Manager", ar: "مدير عام" },
  "role.salesManager": { en: "Sales Manager", ar: "مدير مبيعات" },
  "role.projectManager": { en: "Project Manager", ar: "مدير مشاريع" },
  "role.projectEngineers": { en: "Project Engineers", ar: "مهندسو مشاريع" },
  "role.engSubtitle": { en: "HVAC / Fire Fighting / Electrical / Plumbing", ar: "تكييف / إطفاء / كهرباء / سباكة" },
  "role.financeManager": { en: "Finance Manager", ar: "مدير مالي" },
  "role.accountant": { en: "Accountant", ar: "محاسب" },
  "role.officeSecretary": { en: "Office Secretary", ar: "سكرتير مكتب" },
  "role.siteEngineer": { en: "Site Engineer", ar: "مهندس موقع" },
  "role.siteSupervisor": { en: "Site Supervisor", ar: "مشرف موقع" },
  "role.acTechInstall": { en: "A/C Technician – Installation", ar: "فني تكييف – تركيب" },
  "role.acTechMaint": { en: "A/C Technician – Maintenance", ar: "فني تكييف – صيانة" },
  "role.ductFab": { en: "Duct Fabrications", ar: "تصنيع مجاري هواء" },
  "role.ductErect": { en: "Duct Erectors", ar: "عمال تركيب مجاري" },
  "role.pipeInsulators": { en: "Ducts / Pipe Insulators", ar: "عوازل مجاري / أنابيب" },
  "role.skilledLabor": { en: "Skilled Labors", ar: "عمال مهرة" },
  "role.semiSkilled": { en: "Semi Skilled Labors", ar: "عمال شبه مهرة" },
  "role.drivers": { en: "Drivers", ar: "سائقون" },
  "role.officeBoy": { en: "Office Boy", ar: "عامل مكتب" },
  "role.watchMan": { en: "Watch Man (Guard)", ar: "حارس أمن" },

  // ─── LANGUAGE TOGGLE ───
  "lang.arabic": { en: "العربية", ar: "English" },

  // ─── COMPANY (constants) ───
  "company.description": {
    en: "Specialized in servicing and new installations for Air Conditioning and HVAC systems. Providing quality products and services with a professional team across Saudi Arabia.",
    ar: "متخصصون في صيانة وتركيب أنظمة التكييف والتبريد والتدفئة والتهوية. نقدم منتجات وخدمات عالية الجودة مع فريق احترافي في جميع أنحاء المملكة العربية السعودية.",
  },
};

export default translations;
