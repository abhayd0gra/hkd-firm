/* ============================================================
   Harish Kumar Dogra & Co. — Main JS
   - Bilingual toggle (EN / HI)
   - Sticky nav
   - Mobile hamburger
   - Scroll-triggered fade animations
   ============================================================ */

/* ---- Translations ---- */
const T = {
  en: {
    'nav.subtitle':    'Chartered Accountants',
    'nav.about':       'About',
    'nav.services':    'Services',
    'nav.cases':       'Case Studies',
    'nav.team':        'Our Team',
    'nav.contact':     'Contact',

    'hero.eyebrow':    'Established 1982 · Jayanagar, Bangalore',
    'hero.and':        '& Co.',
    'hero.tagline':    'Forty-Four Years of Principled Practice.',
    'hero.desc':       'A full-service Chartered Accountancy firm serving businesses across India since 1982. Led by CA Harish Kumar Dogra, FCA — Fellow of the Institute of Chartered Accountants of India.',
    'hero.cta1':       'Schedule a Consultation',
    'hero.cta2':       'Our Services',
    'hero.stat1':      'Years in Practice',
    'hero.stat2':      'Professionals',
    'hero.stat3':      'Industry Sectors',
    'hero.founderName':'CA Harish Kumar Dogra',
    'hero.founderTitle':'Founder & Principal, B.Sc., FCA',

    'about.label':        'Our Story',
    'about.title':        'Rooted in Integrity.\nBuilt Over Four Decades.',
    'about.p1':           'Harish Kumar Dogra & Co. was established in 1982 in Jayanagar, Bangalore, by CA Harish Kumar Dogra — a Fellow Member of the Institute of Chartered Accountants of India. What began as a sole proprietorship founded on rigorous professional ethics has grown into a full-service practice of 14 qualified professionals.',
    'about.p2':           'Through four decades of economic transformation — from liberalisation to the implementation of GST — the firm has remained a steadfast advisory partner to businesses in manufacturing, hospitality, trading, real estate, e-commerce, and agribusiness.',
    'about.p3':           "The firm's philosophy is simple: every client, regardless of scale, deserves the same depth of analysis, the same quality of advice, and the same commitment to their long-term financial wellbeing that larger enterprises take for granted.",
    'about.timelineLabel':'Firm History',

    'tl.1982.year':  '1982',
    'tl.1982.text':  'Firm established in Jayanagar, Bangalore by CA Harish Kumar Dogra, FCA.',
    'tl.1991.year':  '1991',
    'tl.1991.text':  "Expanded audit and assurance practice as India's economy liberalised under the New Economic Policy. Built advisory capabilities for manufacturing and trading clients.",
    'tl.2000.year':  '2000s',
    'tl.2000.text':  'Developed deep sector expertise in hospitality and real estate. Built investigation and due diligence practice for mergers and acquisitions.',
    'tl.2013.year':  '2013',
    'tl.2013.text':  'Strengthened corporate law practice following the enactment of the Companies Act 2013. Expanded ROC compliance and board advisory work.',
    'tl.2017.year':  '2017',
    'tl.2017.text':  'Guided 50+ client entities through the landmark GST implementation. Established robust GST compliance and advisory practice.',
    'tl.today.year': 'Today',
    'tl.today.text': 'A team of 14 professionals — 3 qualified CAs and 11 finance specialists — serving clients across 7 industry sectors from our Jayanagar office.',

    'why.label':    'Why Choose Us',
    'why.title':    'The Foundations of Our Practice',
    'why.subtitle': 'Four decades of practice distilled into three enduring commitments.',
    'why.c1.title': 'Four Decades of Institutional Knowledge',
    'why.c1.text':  'Our founder has navigated every major reform in Indian taxation and corporate law — from the pre-liberalisation era to GST, Companies Act 2013, and the evolving ITAT jurisprudence. This depth of institutional memory is irreplaceable and directly benefits every client engagement.',
    'why.c2.title': 'Comprehensive Practice Under One Roof',
    'why.c2.text':  'Audit, taxation, GST, corporate law, and business advisory — all practised with equal rigour by our dedicated in-house team. Clients receive integrated advice without the fragmentation of dealing with multiple advisors across disciplines.',
    'why.c3.title': 'Relationships, Not Transactions',
    'why.c3.text':  'The majority of our clients have been with the firm for over a decade. We treat every engagement as an ongoing fiduciary responsibility — not a one-time assignment — and make ourselves available for counsel at every stage of a client\'s business journey.',

    'services.label':    'What We Do',
    'services.title':    'Our Practice Areas',
    'services.subtitle': 'Comprehensive financial and legal advisory across all stages of your business lifecycle.',
    's1.title': 'Audit & Assurance',
    's1.text':  'Statutory audits, internal audits, and management audits for large and medium enterprises. Investigation audits and financial due diligence for mergers, acquisitions, and takeover transactions.',
    's2.title': 'Direct Taxation',
    's2.text':  'Income tax return filing for all categories of assessees — individuals, HUFs, firms, LLPs, and companies. Representation before income tax authorities, CIT (Appeals), and the Income Tax Appellate Tribunal (ITAT).',
    's3.title': 'GST & Indirect Taxes',
    's3.text':  'End-to-end GST compliance including registration, monthly and annual return filing, input tax credit reconciliation, and advisory on classification and rates. Representation before GST authorities and appellate forums.',
    's4.title': 'Corporate Law & ROC',
    's4.text':  'Company and LLP incorporation and structuring under the Companies Act 2013. ROC filings, board meeting and secretarial compliance, annual statutory filings, and corporate law advisory.',
    's5.title': 'Business Advisory & Structuring',
    's5.text':  'Entity structuring for optimal tax efficiency and regulatory compliance. Business planning, financial modelling, cost analysis, and strategic advisory for businesses at every stage of growth.',
    's6.title': 'Bookkeeping & MIS',
    's6.text':  'Monthly bookkeeping, financial statement preparation, and payroll processing. PF, ESI, PT, and TDS compliance. Management Information System design and periodic reporting for business owners.',

    'how.label':    'Our Process',
    'how.title':    'How We Engage',
    'how.n1': '01', 'how.n2': '02', 'how.n3': '03', 'how.n4': '04',
    'how.s1.title': 'Initial Consultation',
    'how.s1.text':  'We begin with a thorough, no-obligation discussion to understand your business structure, current compliance status, and the specific challenges or objectives you wish to address.',
    'how.s2.title': 'Assessment & Proposal',
    'how.s2.text':  'We assess your requirements holistically and present a clear written scope of engagement, timelines, and fee structure before any work commences. No surprises.',
    'how.s3.title': 'Execution & Compliance',
    'how.s3.text':  'Our dedicated team executes each engagement with precision and discipline. Filing deadlines are tracked proactively, and clients are updated at every material milestone.',
    'how.s4.title': 'Ongoing Advisory',
    'how.s4.text':  'We serve as a standing advisory partner beyond routine compliance — available to counsel on new transactions, regulatory developments, and strategic business decisions as they arise.',

    'cases.label':    'Client Work',
    'cases.title':    'Selected Case Studies',
    'cases.subtitle': 'Representative engagements across our core practice areas. All client identities withheld to preserve professional confidentiality.',
    'label.challenge': 'Challenge',
    'label.solution':  'Solution',
    'label.outcome':   'Outcome',
    'c1.tag':      'GST & Tax Restructuring',
    'c1.title':    'Manufacturing Group — GST Transition & Assessment Defence',
    'c1.challenge':'A mid-size manufacturing group with three entities faced complex GST classification disputes and overlapping income tax scrutiny assessments concurrently, with significant demand exposure.',
    'c1.solution': 'Conducted a comprehensive GST audit across all entities, corrected historical misclassifications, filed revised returns, and represented the client before GST authorities and the Income Tax Department simultaneously.',
    'c1.outcome':  'Full resolution within 18 months. Tax demand reduced by 60% on appeal. A forward-looking compliance framework established to prevent recurrence.',
    'c2.tag':      'M&A Due Diligence',
    'c2.title':    'Hospitality Group — Pre-Acquisition Financial Due Diligence',
    'c2.challenge':'A hotel chain sought to acquire a competitor property. The target entity had multiple years of unfiled income tax and GST returns and significant unquantified PF/ESI liabilities.',
    'c2.solution': 'Conducted full financial, tax, and regulatory due diligence across five years of records. Quantified all contingent liabilities and advised on appropriate price adjustments and indemnity provisions in the transaction documents.',
    'c2.outcome':  'Client negotiated a price reduction reflecting identified liabilities. Post-acquisition integration of books and compliance completed within 90 days of closing.',
    'c3.tag':      'Tax Appellate Representation',
    'c3.title':    'Real Estate Developer — ITAT Appeal & Demand Stay',
    'c3.challenge':'A real estate developer received an addition of ₹2.8 Crore on account of alleged unexplained investments, accompanied by a demand notice and threat of imminent asset attachment by the Income Tax department.',
    'c3.solution': 'Prepared a detailed factual and legal submission supported by documentary evidence, obtained an immediate stay of demand, and represented the client before the Income Tax Appellate Tribunal with comprehensive written submissions.',
    'c3.outcome':  'Addition deleted in full at the ITAT level. Total tax demand of ₹2.8 Crore set aside. Case concluded in 14 months from the date of initial demand.',

    'team.label':       'Our People',
    'team.title':       'A Practice Built on Professional Excellence',
    'team.founderName': 'CA Harish Kumar Dogra',
    'team.founderTitle':'Founder & Principal — B.Sc., FCA',
    'team.bio':         'A Fellow Member of the Institute of Chartered Accountants of India with over 44 years of uninterrupted practice, CA Dogra founded the firm in 1982 with a singular conviction: that every client deserves the quality of counsel reserved for the largest enterprises. His areas of deep specialisation include complex tax litigation before the ITAT, statutory audit of large manufacturing enterprises, and corporate restructuring. He is supported by a team of three qualified Chartered Accountants and eleven finance professionals, with an extended network of legal and specialist counsels.',
    'stat1.num': '44+', 'stat1.label': 'Years in Practice',
    'stat2.num': '3',   'stat2.label': 'Qualified CAs',
    'stat3.num': '11',  'stat3.label': 'Finance Professionals',
    'stat4.num': '7',   'stat4.label': 'Industry Sectors',

    'contact.label':    'Get in Touch',
    'contact.title':    'We Would Be Glad to Hear From You',
    'contact.subtitle': 'Whether you have a specific query, wish to discuss an ongoing compliance matter, or would like to explore how we can serve your business — we are at your disposal.',
    'contact.addrLabel':  'Office Address',
    'contact.phoneLabel': 'Telephone',
    'contact.emailLabel': 'Email',
    'contact.hoursLabel': 'Office Hours',
    'contact.hoursText':  'Monday to Saturday, 10:00 AM – 6:00 PM',
    'form.title':         'Send Us a Message',
    'form.name':          'Full Name',
    'form.company':       'Company / Organisation',
    'form.phone':         'Phone Number',
    'form.service':       'Service Required',
    'form.serviceDefault':'— Select a service —',
    'form.message':       'Message',
    'form.submit':        'Send Message',

    'footer.desc':  'A full-service CA firm practising from Jayanagar, Bangalore since 1982. Providing audit, tax, GST, corporate law, and advisory services to businesses across India.',
    'footer.col1':  'Quick Links',
    'footer.col2':  'Practice Areas',
    'footer.copy':  '© 2026 Harish Kumar Dogra & Co. All rights reserved.',
    'footer.icai':  'Registered with the Institute of Chartered Accountants of India (ICAI).',
  },

  hi: {
    'nav.subtitle':    'चार्टर्ड अकाउंटेंट्स',
    'nav.about':       'हमारे बारे में',
    'nav.services':    'सेवाएं',
    'nav.cases':       'केस स्टडी',
    'nav.team':        'हमारी टीम',
    'nav.contact':     'संपर्क',

    'hero.eyebrow':    '1982 में स्थापित · जयनगर, बैंगलोर',
    'hero.and':        'एंड कंपनी',
    'hero.tagline':    'चौवालीस वर्षों की सिद्धांतपरक प्रैक्टिस।',
    'hero.desc':       '1982 से भारत भर के व्यवसायों की सेवा करने वाली एक पूर्ण-सेवा CA फर्म। CA हरीश कुमार डोगरा, FCA — इंस्टीट्यूट ऑफ चार्टर्ड अकाउंटेंट्स ऑफ इंडिया के फेलो मेम्बर — के नेतृत्व में।',
    'hero.cta1':       'परामर्श बुक करें',
    'hero.cta2':       'हमारी सेवाएं',
    'hero.stat1':      'वर्षों की प्रैक्टिस',
    'hero.stat2':      'पेशेवर',
    'hero.stat3':      'उद्योग क्षेत्र',
    'hero.founderName':'CA हरीश कुमार डोगरा',
    'hero.founderTitle':'संस्थापक एवं प्रधान, B.Sc., FCA',

    'about.label':        'हमारी कहानी',
    'about.title':        'ईमानदारी में जड़ें।\nचार दशकों में निर्मित।',
    'about.p1':           'हरीश कुमार डोगरा एंड कंपनी की स्थापना 1982 में जयनगर, बैंगलोर में CA हरीश कुमार डोगरा — ICAI के फेलो मेम्बर — द्वारा की गई थी। एकल स्वामित्व के रूप में शुरू हुई यह फर्म आज 14 योग्य पेशेवरों की एक पूर्ण-सेवा प्रैक्टिस बन चुकी है।',
    'about.p2':           'चार दशकों के आर्थिक परिवर्तन — उदारीकरण से जीएसटी कार्यान्वयन तक — में फर्म विनिर्माण, आतिथ्य, व्यापार, रियल एस्टेट, ई-कॉमर्स और कृषि क्षेत्र के व्यवसायों की एक विश्वसनीय परामर्शदाता बनी रही है।',
    'about.p3':           'फर्म का दर्शन सरल है: प्रत्येक ग्राहक, चाहे वे किसी भी आकार के हों, उन्हें वही गहराई का विश्लेषण, वही गुणवत्ता की सलाह और वही दीर्घकालिक वित्तीय प्रतिबद्धता मिलनी चाहिए जो बड़े उद्यमों को मिलती है।',
    'about.timelineLabel':'फर्म का इतिहास',

    'tl.1982.year':  '1982',
    'tl.1982.text':  'CA हरीश कुमार डोगरा, FCA द्वारा जयनगर, बैंगलोर में फर्म की स्थापना।',
    'tl.1991.year':  '1991',
    'tl.1991.text':  'नई आर्थिक नीति के तहत भारत की अर्थव्यवस्था के उदारीकरण के साथ ऑडिट प्रैक्टिस का विस्तार।',
    'tl.2000.year':  '2000 का दशक',
    'tl.2000.text':  'आतिथ्य और रियल एस्टेट क्षेत्र में गहरी विशेषज्ञता विकसित की। विलय और अधिग्रहण के लिए ड्यू डिलिजेंस प्रैक्टिस स्थापित की।',
    'tl.2013.year':  '2013',
    'tl.2013.text':  'Companies Act 2013 के लागू होने के बाद कॉर्पोरेट कानून प्रैक्टिस को मजबूत किया।',
    'tl.2017.year':  '2017',
    'tl.2017.text':  '50 से अधिक ग्राहक संस्थाओं को महत्वपूर्ण GST कार्यान्वयन से सफलतापूर्वक गुजारा।',
    'tl.today.year': 'आज',
    'tl.today.text': '14 पेशेवरों की टीम — 3 योग्य CA और 11 वित्त विशेषज्ञ — जयनगर कार्यालय से 7 उद्योग क्षेत्रों में ग्राहकों की सेवा।',

    'why.label':    'हमें क्यों चुनें',
    'why.title':    'हमारी प्रैक्टिस की नींव',
    'why.subtitle': 'चार दशकों की प्रैक्टिस तीन स्थायी प्रतिबद्धताओं में संकलित।',
    'why.c1.title': 'चार दशकों का संस्थागत ज्ञान',
    'why.c1.text':  'हमारे संस्थापक ने भारतीय कराधान और कॉर्पोरेट कानून में हर बड़े सुधार को देखा है — पूर्व-उदारीकरण युग से GST, Companies Act 2013 और विकसित होती ITAT न्यायविधि तक।',
    'why.c2.title': 'एक ही छत के नीचे सम्पूर्ण सेवा',
    'why.c2.text':  'ऑडिट, कराधान, GST, कॉर्पोरेट कानून और व्यावसायिक सलाह — सभी हमारी समर्पित इन-हाउस टीम द्वारा समान दृढ़ता के साथ प्रदान की जाती है।',
    'why.c3.title': 'रिश्ते, न सिर्फ लेन-देन',
    'why.c3.text':  'हमारे अधिकांश ग्राहक एक दशक से अधिक समय से हमारे साथ हैं। हम प्रत्येक जुड़ाव को एक सतत प्रत्ययी जिम्मेदारी के रूप में मानते हैं।',

    'services.label':    'हम क्या करते हैं',
    'services.title':    'हमारे प्रैक्टिस क्षेत्र',
    'services.subtitle': 'आपके व्यापार जीवनचक्र के सभी चरणों में व्यापक वित्तीय और कानूनी सलाह।',
    's1.title': 'ऑडिट एवं आश्वासन',
    's1.text':  'बड़े और मध्यम उद्यमों के लिए वैधानिक ऑडिट, आंतरिक ऑडिट और प्रबंधन ऑडिट। विलय, अधिग्रहण के लिए जांच ऑडिट और वित्तीय ड्यू डिलिजेंस।',
    's2.title': 'प्रत्यक्ष कर',
    's2.text':  'सभी श्रेणियों के निर्धारितियों के लिए आयकर रिटर्न दाखिल। आयकर अधिकारियों, CIT (अपील) और ITAT के समक्ष प्रतिनिधित्व।',
    's3.title': 'जीएसटी एवं अप्रत्यक्ष कर',
    's3.text':  'पूर्ण GST अनुपालन: पंजीकरण, मासिक और वार्षिक रिटर्न, ITC समाधान और दरों पर सलाह। GST अधिकारियों के समक्ष प्रतिनिधित्व।',
    's4.title': 'कॉर्पोरेट कानून एवं ROC',
    's4.text':  'Companies Act 2013 के तहत कंपनी और LLP निगमन। ROC फाइलिंग, बोर्ड बैठक अनुपालन, वार्षिक वैधानिक फाइलिंग।',
    's5.title': 'व्यावसायिक सलाह एवं संरचना',
    's5.text':  'कर दक्षता के लिए इकाई संरचना। व्यापार योजना, वित्तीय मॉडलिंग और विकास-चरण व्यवसायों के लिए रणनीतिक सलाह।',
    's6.title': 'बहीखाता एवं MIS',
    's6.text':  'मासिक बहीखाता, वित्तीय विवरण, वेतन प्रसंस्करण। PF, ESI, PT और TDS अनुपालन। प्रबंधन सूचना प्रणाली रिपोर्टिंग।',

    'how.label':    'हमारी प्रक्रिया',
    'how.title':    'हम कैसे जुड़ते हैं',
    'how.n1': '०१', 'how.n2': '०२', 'how.n3': '०३', 'how.n4': '०४',
    'how.s1.title': 'प्रारंभिक परामर्श',
    'how.s1.text':  'हम आपके व्यवसाय, वर्तमान अनुपालन स्थिति और विशिष्ट आवश्यकताओं को समझने के लिए गहन, बिना किसी बाध्यता के चर्चा से शुरुआत करते हैं।',
    'how.s2.title': 'मूल्यांकन एवं प्रस्ताव',
    'how.s2.text':  'हम आपकी जरूरतों का समग्र मूल्यांकन करते हैं और काम शुरू होने से पहले स्पष्ट कार्यक्षेत्र, समयसीमा और शुल्क संरचना प्रस्तुत करते हैं।',
    'how.s3.title': 'क्रियान्वयन एवं अनुपालन',
    'how.s3.text':  'हमारी समर्पित टीम प्रत्येक संलग्नक को सटीकता और अनुशासन के साथ निष्पादित करती है। फाइलिंग की समयसीमाओं को सक्रिय रूप से ट्रैक किया जाता है।',
    'how.s4.title': 'सतत सलाह',
    'how.s4.text':  'नियमित अनुपालन से परे, हम एक स्थायी सलाहकार भागीदार के रूप में काम करते हैं — नए लेनदेन और नियामक विकास पर परामर्श के लिए उपलब्ध।',

    'cases.label':    'ग्राहक कार्य',
    'cases.title':    'चुनिंदा केस स्टडी',
    'cases.subtitle': 'हमारे मुख्य प्रैक्टिस क्षेत्रों में प्रतिनिधि संलग्नक। व्यावसायिक गोपनीयता बनाए रखने के लिए सभी ग्राहकों की पहचान छिपाई गई है।',
    'label.challenge': 'चुनौती',
    'label.solution':  'समाधान',
    'label.outcome':   'परिणाम',
    'c1.tag':      'जीएसटी और कर पुनर्गठन',
    'c1.title':    'विनिर्माण समूह — जीएसटी संक्रमण और मूल्यांकन बचाव',
    'c1.challenge':'तीन संस्थाओं वाले एक मध्यम आकार के विनिर्माण समूह को जटिल GST वर्गीकरण विवादों और एक साथ आयकर जांच का सामना करना पड़ा।',
    'c1.solution': 'सभी संस्थाओं में व्यापक GST ऑडिट किया, ऐतिहासिक गलत वर्गीकरणों को सुधारा और GST अधिकारियों के समक्ष ग्राहक का प्रतिनिधित्व किया।',
    'c1.outcome':  '18 महीनों में पूर्ण समाधान। अपील पर कर मांग 60% कम हुई। पुनरावृत्ति रोकने के लिए अनुपालन ढांचा स्थापित किया।',
    'c2.tag':      'M&A ड्यू डिलिजेंस',
    'c2.title':    'आतिथ्य समूह — पूर्व-अधिग्रहण वित्तीय ड्यू डिलिजेंस',
    'c2.challenge':'एक होटल श्रृंखला ने एक प्रतियोगी संपत्ति का अधिग्रहण करना चाहा। लक्ष्य इकाई के कई वर्षों के अनफाइल्ड रिटर्न और अनसुलझी PF/ESI देनदारियां थीं।',
    'c2.solution': 'पांच वर्षों के रिकॉर्ड में पूर्ण वित्तीय और नियामक ड्यू डिलिजेंस की। सभी आकस्मिक देनदारियों की गणना की और मूल्य समायोजन पर सलाह दी।',
    'c2.outcome':  'ग्राहक ने पहचानी गई देनदारियों को दर्शाते हुए मूल्य में कमी की सफलतापूर्वक बातचीत की। 90 दिनों में अधिग्रहण के बाद बहीखाता एकीकरण पूरा।',
    'c3.tag':      'कर अपीलीय प्रतिनिधित्व',
    'c3.title':    'रियल एस्टेट डेवलपर — ITAT अपील और मांग स्थगन',
    'c3.challenge':'एक रियल एस्टेट डेवलपर को ₹2.8 करोड़ के अस्पष्ट निवेश पर अतिरिक्त जोड़, मांग नोटिस और संपत्ति जब्ती की धमकी मिली।',
    'c3.solution': 'विस्तृत तथ्यात्मक और कानूनी प्रस्तुति तैयार की, मांग पर स्थगन प्राप्त किया और ITAT के समक्ष ग्राहक का प्रतिनिधित्व किया।',
    'c3.outcome':  'ITAT स्तर पर अतिरिक्त जोड़ पूरी तरह हटाया गया। ₹2.8 करोड़ की कुल कर मांग खारिज। 14 महीनों में मामला पूरा।',

    'team.label':       'हमारे लोग',
    'team.title':       'पेशेवर उत्कृष्टता पर निर्मित एक प्रैक्टिस',
    'team.founderName': 'CA हरीश कुमार डोगरा',
    'team.founderTitle':'संस्थापक एवं प्रधान — B.Sc., FCA',
    'team.bio':         'इंस्टीट्यूट ऑफ चार्टर्ड अकाउंटेंट्स ऑफ इंडिया के फेलो मेम्बर, CA डोगरा ने 1982 में एक दृढ़ विश्वास के साथ फर्म की स्थापना की: प्रत्येक ग्राहक को सबसे बड़े उद्यमों के लिए आरक्षित सलाह की गुणवत्ता प्राप्त हो। उनकी विशेषज्ञता में ITAT के समक्ष जटिल कर मुकदमेबाजी, बड़े विनिर्माण उद्यमों का वैधानिक ऑडिट और कॉर्पोरेट पुनर्गठन शामिल है। उनके साथ तीन योग्य CA और ग्यारह वित्त पेशेवरों की टीम है।',
    'stat1.num': '44+', 'stat1.label': 'वर्षों की प्रैक्टिस',
    'stat2.num': '3',   'stat2.label': 'योग्य CA',
    'stat3.num': '11',  'stat3.label': 'वित्त पेशेवर',
    'stat4.num': '7',   'stat4.label': 'उद्योग क्षेत्र',

    'contact.label':    'संपर्क करें',
    'contact.title':    'हम आपसे सुनकर प्रसन्न होंगे',
    'contact.subtitle': 'चाहे आपके पास कोई विशिष्ट प्रश्न हो, किसी अनुपालन मामले पर चर्चा करनी हो, या यह जानना हो कि हम आपके व्यवसाय की कैसे सेवा कर सकते हैं — हम आपके लिए उपलब्ध हैं।',
    'contact.addrLabel':  'कार्यालय का पता',
    'contact.phoneLabel': 'फोन',
    'contact.emailLabel': 'ईमेल',
    'contact.hoursLabel': 'कार्यालय समय',
    'contact.hoursText':  'सोमवार से शनिवार, सुबह 10:00 – शाम 6:00',
    'form.title':         'हमें संदेश भेजें',
    'form.name':          'पूरा नाम',
    'form.company':       'कंपनी / संगठन',
    'form.phone':         'फोन नंबर',
    'form.service':       'सेवा की आवश्यकता',
    'form.serviceDefault':'— सेवा चुनें —',
    'form.message':       'संदेश',
    'form.submit':        'संदेश भेजें',

    'footer.desc':  '1982 से जयनगर, बैंगलोर से प्रैक्टिस करने वाली एक पूर्ण-सेवा CA फर्म। भारत भर के व्यवसायों को ऑडिट, कर, GST, कॉर्पोरेट कानून और सलाह सेवाएं प्रदान करती है।',
    'footer.col1':  'त्वरित लिंक',
    'footer.col2':  'प्रैक्टिस क्षेत्र',
    'footer.copy':  '© 2026 हरीश कुमार डोगरा एंड कंपनी। सर्वाधिकार सुरक्षित।',
    'footer.icai':  'इंस्टीट्यूट ऑफ चार्टर्ड अकाउंटेंट्स ऑफ इंडिया (ICAI) के साथ पंजीकृत।',
  }
};

/* ---- State ---- */
let lang = localStorage.getItem('hkd-lang') || 'en';

/* ---- Apply translations ---- */
function applyLang(l) {
  lang = l;
  const dict = T[l];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.documentElement.lang = l === 'hi' ? 'hi' : 'en';
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = l === 'en' ? 'हिंदी' : 'English';
  localStorage.setItem('hkd-lang', l);
}

/* ---- Language toggle ---- */
const langBtn = document.getElementById('lang-toggle');
if (langBtn) langBtn.addEventListener('click', () => applyLang(lang === 'en' ? 'hi' : 'en'));

/* ---- Sticky nav shadow ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ---- Mobile hamburger ---- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
});
/* Close menu when a link is clicked */
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

/* ---- Smooth scroll (offset for fixed nav) ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});

/* ---- Scroll-triggered fade-up ---- */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ---- Apply saved language on load ---- */
applyLang(lang);
