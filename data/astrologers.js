// Static astrologer directory used by /talk-to-astrologer, the homepage
// "Talk to Our Astrologers" carousel, and the About page team carousel.
//
// Bilingual content: most fields have an "Hi" (Hindi) counterpart, e.g.
// `specialty` / `specialtyHi`, `bio` / `bioHi`. Use `getLocalizedAstrologer`
// below to pick the right language for the current locale rather than
// reading these fields directly.
//
// `photo`: a real photo under /public/astrologers when available, else
// `null` (components should fall back to the `avatar` emoji in that case).

export const astrologers = [
  {
    slug: "acharya-somdev",
    name: "Acharya Somdev",
    nameHi: "आचार्य सोमदेव",
    avatar: "🧙",
    photo: "/astrologers/acharya-somdev.jpg",
    specialty: "Vedic Astrology",
    specialtyHi: "वैदिक ज्योतिष",
    experience: "19 Years",
    languages: ["Hindi", "English", "Sanskrit"],
    rating: 4.9,
    reviews: 1560,
    consultations: "10,200+",
    price: "₹22 / min",
    tags: [
      "Kundli Analysis",
      "Dasha Prediction",
      "Marriage Matching",
      "Career Consultant",
      "Finance Consultant",
    ],
    tagsHi: [
      "कुंडली विश्लेषण",
      "दशा भविष्यवाणी",
      "विवाह मिलान",
      "करियर सलाहकार",
      "वित्त सलाहकार",
    ],
    education:
      "Jyotish Shastra, Lal Bahadur Shastri Rashtriya Sanskrit Vidyapeeth, New Delhi",
    educationHi:
      "ज्योतिष शास्त्र, लाल बहादुर शास्त्री राष्ट्रीय संस्कृत विद्यापीठ, नई दिल्ली",
    shortBio:
      "Traditional Vedic astrologer with 19 years of experience, trained in Delhi, known for precise Kundli and Dasha analysis.",
    shortBioHi:
      "19 वर्षों के अनुभव वाले पारंपरिक वैदिक ज्योतिषी, दिल्ली से प्रशिक्षित, सटीक कुंडली एवं दशा विश्लेषण के लिए प्रसिद्ध।",
    bio: "Acharya Somdev has been practising Vedic astrology for 19 years, having trained at the Lal Bahadur Shastri Rashtriya Sanskrit Vidyapeeth in New Delhi — one of India's foremost institutions for Sanskrit and Jyotish studies. He specialises in detailed birth-chart (Kundli) analysis, dasha and transit predictions, and practical remedies for career, marriage, health and family matters. Known for his calm, grounded approach, he has guided thousands of families through important life decisions with clarity and traditional rigor.",
    bioHi:
      "आचार्य सोमदेव पिछले 19 वर्षों से वैदिक ज्योतिष का अभ्यास कर रहे हैं। उन्होंने नई दिल्ली स्थित लाल बहादुर शास्त्री राष्ट्रीय संस्कृत विद्यापीठ से शिक्षा प्राप्त की है, जो संस्कृत एवं ज्योतिष अध्ययन के लिए भारत के प्रमुख संस्थानों में से एक है। वे विस्तृत कुंडली विश्लेषण, दशा एवं गोचर भविष्यवाणी, तथा करियर, विवाह, स्वास्थ्य और पारिवारिक मामलों के लिए व्यावहारिक उपायों में विशेषज्ञ हैं। अपने शांत और सुदृढ़ दृष्टिकोण के लिए प्रसिद्ध, उन्होंने हजारों परिवारों को स्पष्टता और पारंपरिक निष्ठा के साथ महत्वपूर्ण जीवन निर्णयों में मार्गदर्शन दिया है।",
  },
  {
    slug: "dr-meena-kapoor",
    name: "Dr. Meena Kapoor",
    nameHi: "डॉ. मीना कपूर",
    avatar: "👩‍🏫",
    photo: null,
    specialty: "Numerology",
    specialtyHi: "अंक ज्योतिष (न्यूमरोलॉजी)",
    experience: "18 Years",
    languages: ["Hindi", "English"],
    rating: 4.8,
    reviews: 1204,
    consultations: "9,300+",
    price: "₹18 / min",
    tags: [
      "Name Correction",
      "Lucky Numbers",
      "Business Numerology",
      "Child Name Consultation",
      "Finance Consultant",
    ],
    tagsHi: [
      "नाम सुधार",
      "भाग्यशाली अंक",
      "व्यावसायिक अंक ज्योतिष",
      "शिशु नामकरण परामर्श",
      "वित्त सलाहकार",
    ],
    education: "PhD in Numerology, Certified Pythagorean Numerologist",
    educationHi: "पीएचडी न्यूमरोलॉजी, प्रमाणित पाइथागोरस अंक ज्योतिषी",
    shortBio:
      "Numerology expert helping clients align names, dates and numbers with their life path.",
    shortBioHi:
      "नामों, तारीखों एवं अंकों को जीवन पथ के अनुरूप जोड़ने में सहायता करने वाली अंक ज्योतिष विशेषज्ञ।",
    bio: "Dr. Meena Kapoor blends classical Chaldean and Pythagorean numerology to help clients understand their life-path number and align important decisions — from baby names to business launches — with favourable numerical energy. She is known for clear, actionable guidance rather than vague predictions.",
    bioHi:
      "डॉ. मीना कपूर पारंपरिक कैल्डियन एवं पाइथागोरस अंक ज्योतिष को मिलाकर ग्राहकों को उनके जीवन पथ अंक (लाइफ पाथ नंबर) को समझने में मदद करती हैं, ताकि बच्चों के नामकरण से लेकर व्यवसाय आरंभ जैसे महत्वपूर्ण निर्णय अनुकूल संख्यात्मक ऊर्जा के साथ लिए जा सकें। वे अस्पष्ट भविष्यवाणियों की बजाय स्पष्ट और व्यावहारिक मार्गदर्शन देने के लिए जानी जाती हैं।",
  },
  {
    slug: "acharya-vedant-sharma",
    name: "Acharya Vedant Sharma",
    nameHi: "आचार्य वेदांत शर्मा",
    avatar: "🕉️",
    photo: "/astrologers/acharya-vedant-sharma.jpg",
    specialty: "Vedic Astrology & Puja Vidhi",
    specialtyHi: "वैदिक ज्योतिष एवं पूजा विधि",
    experience: "20 Years",
    languages: ["Hindi", "English"],
    rating: 4.9,
    reviews: 1720,
    consultations: "11,800+",
    price: "₹24 / min",
    tags: [
      "Puja & Havan",
      "Kundli Analysis",
      "Vastu Shastra",
      "Gemstone Consultant",
      "Wealth and Property",
    ],
    tagsHi: [
      "पूजा एवं हवन",
      "कुंडली विश्लेषण",
      "वास्तु शास्त्र",
      "रत्न सलाहकार",
      "धन एवं संपत्ति",
    ],
    education:
      "Jyotish Shastra, Lal Bahadur Shastri Rashtriya Sanskrit Vidyapeeth, New Delhi",
    educationHi:
      "ज्योतिष शास्त्र, लाल बहादुर शास्त्री राष्ट्रीय संस्कृत विद्यापीठ, नई दिल्ली",
    shortBio:
      "20 years of experience combining Vedic astrology with traditional puja and ritual guidance.",
    shortBioHi:
      "20 वर्षों का अनुभव, वैदिक ज्योतिष के साथ पारंपरिक पूजा एवं अनुष्ठान मार्गदर्शन में निपुण।",
    bio: "With 20 years of dedicated practice, Acharya Vedant Sharma trained in Jyotish Shastra at the Lal Bahadur Shastri Rashtriya Sanskrit Vidyapeeth, New Delhi. Beyond horoscope reading and predictions, he is regularly sought after to personally conduct havans, griha pravesh and other Vedic ceremonies with complete ritual accuracy. Clients value his ability to combine astrological guidance with the correct puja vidhi (ritual procedure) so remedies are truly effective.",
    bioHi:
      "20 वर्षों के समर्पित अभ्यास के साथ, आचार्य वेदांत शर्मा ने नई दिल्ली स्थित लाल बहादुर शास्त्री राष्ट्रीय संस्कृत विद्यापीठ से ज्योतिष शास्त्र की शिक्षा प्राप्त की है। कुंडली विश्लेषण एवं भविष्यवाणी के अतिरिक्त, वे हवन, गृह प्रवेश तथा अन्य वैदिक अनुष्ठानों को पूर्ण विधि-विधान के साथ स्वयं संपन्न कराने के लिए भी जाने जाते हैं। ग्राहक उनकी इस क्षमता को अत्यंत महत्व देते हैं कि वे ज्योतिषीय मार्गदर्शन को सही पूजा विधि के साथ जोड़कर उपायों को वास्तव में प्रभावी बनाते हैं।",
  },
  {
    slug: "priya-mehra",
    name: "Priya Mehra",
    nameHi: "प्रिया मेहरा",
    avatar: "🔮",
    photo: null,
    specialty: "Tarot Reading",
    specialtyHi: "टैरो रीडिंग",
    experience: "12 Years",
    languages: ["Hindi", "English"],
    rating: 4.7,
    reviews: 986,
    consultations: "7,100+",
    price: "₹15 / min",
    tags: [
      "Love & Relationships",
      "Career Tarot",
      "Yes/No Reading",
      "Marriage Consultant",
      "Child Name Consultation",
    ],
    tagsHi: [
      "प्रेम और रिश्ते",
      "करियर टैरो",
      "हां/ना रीडिंग",
      "विवाह सलाहकार",
      "शिशु नामकरण परामर्श",
    ],
    education: "Certified Tarot Practitioner, Intuitive Reader",
    educationHi: "प्रमाणित टैरो प्रैक्टिशनर, सहज अंतर्ज्ञान रीडर",
    shortBio:
      "Intuitive tarot reader focused on love, relationships and career clarity.",
    shortBioHi: "प्रेम, रिश्तों एवं करियर स्पष्टता पर केंद्रित सहज टैरो रीडर।",
    bio: "Priya Mehra discovered tarot as a young adult and has spent 12 years refining an intuitive, compassionate reading style. She's especially sought after for love and relationship questions, career crossroads, and quick yes/no clarity readings for time-sensitive decisions.",
    bioHi:
      "प्रिया मेहरा को युवावस्था में ही टैरो में रुचि हो गई थी और उन्होंने 12 वर्षों में एक सहज, करुणामयी रीडिंग शैली विकसित की है। वे विशेष रूप से प्रेम एवं रिश्तों के प्रश्नों, करियर के दोराहों, तथा समय-संवेदनशील निर्णयों के लिए त्वरित हां/ना रीडिंग के लिए पसंद की जाती हैं।",
  },
  {
    slug: "acharya-pawan-bahuguna",
    name: "Acharya Pawan Bahuguna",
    nameHi: "आचार्य पवन बहुगुणा",
    avatar: "🧙",
    photo: "/astrologers/acharya-pawan-bahuguna.jpg",
    specialty: "Vedic Astrologer",
    specialtyHi: "वैदिक ज्योतिषी",
    experience: "17 Years",
    languages: ["Hindi", "English", "Garhwali"],
    rating: 4.7,
    reviews: 980,
    consultations: "7,600+",
    price: "₹18 / min",
    tags: [
      "Kundli Analysis",
      "Love and Relationship",
      "Career Consultant",
      "Health Consultant",
      "Palmist",
    ],
    tagsHi: [
      "कुंडली विश्लेषण",
      "प्रेम और रिश्ते",
      "करियर सलाहकार",
      "स्वास्थ्य सलाहकार",
      "हस्तरेखा विशेषज्ञ",
    ],
    education: "Jyotish Acharya, Kashi Vidyapeeth, Varanasi",
    educationHi: "ज्योतिष आचार्य, काशी विद्यापीठ, वाराणसी",
    shortBio:
      "Vedic astrologer known for practical, easy-to-follow guidance on everyday life concerns.",
    shortBioHi:
      "व्यावहारिक और आसानी से अपनाए जाने वाले जीवन-संबंधी मार्गदर्शन के लिए प्रसिद्ध वैदिक ज्योतिषी।",
    bio: "Acharya Pawan Bahuguna trained in Jyotish at Kashi Vidyapeeth, Varanasi, and has spent 17 years helping clients navigate everyday concerns around career, relationships and family through Vedic astrology. His consultations are known for being straightforward and practical — he focuses on remedies that are simple to follow and genuinely make a difference, rather than overly complicated rituals.",
    bioHi:
      "आचार्य पवन बहुगुणा ने वाराणसी स्थित काशी विद्यापीठ से ज्योतिष की शिक्षा प्राप्त की है और पिछले 17 वर्षों से वैदिक ज्योतिष के माध्यम से लोगों को करियर, रिश्तों और पारिवारिक जीवन से जुड़ी रोज़मर्रा की चिंताओं में सहायता कर रहे हैं। उनकी परामर्श शैली सरल और व्यावहारिक होने के लिए जानी जाती है — वे जटिल अनुष्ठानों की बजाय ऐसे उपायों पर ध्यान केंद्रित करते हैं जिन्हें अपनाना आसान हो और जो वास्तव में प्रभाव दिखाएं।",
  },
  {
    slug: "anjali-verma",
    name: "Anjali Verma",
    nameHi: "अंजलि वर्मा",
    avatar: "🌙",
    photo: null,
    specialty: "Palmistry",
    specialtyHi: "हस्तरेखा शास्त्र",
    experience: "14 Years",
    languages: ["Hindi", "English"],
    rating: 4.6,
    reviews: 742,
    consultations: "5,800+",
    price: "₹16 / min",
    tags: [
      "Hand Reading",
      "Life Line Analysis",
      "Career Lines",
      "Health Consultant",
      "Marriage Consultant",
    ],
    tagsHi: [
      "हस्त रेखा विश्लेषण",
      "जीवन रेखा विश्लेषण",
      "करियर रेखा",
      "स्वास्थ्य सलाहकार",
      "विवाह सलाहकार",
    ],
    education: "Certified Palmist, Indian Institute of Hast Rekha",
    educationHi: "प्रमाणित हस्तरेखा विशेषज्ञ, इंडियन इंस्टीट्यूट ऑफ हस्त रेखा",
    shortBio:
      "Palm reading expert offering insight into personality, health and life direction.",
    shortBioHi:
      "व्यक्तित्व, स्वास्थ्य एवं जीवन दिशा की जानकारी देने वाली हस्तरेखा विशेषज्ञ।",
    bio: "Anjali Verma reads palms to uncover patterns in personality, health tendencies and career direction. She combines traditional hast rekha (palmistry) principles with a warm, conversational consultation style that puts first-time clients at ease.",
    bioHi:
      "अंजलि वर्मा हाथों की रेखाओं के माध्यम से व्यक्तित्व, स्वास्थ्य प्रवृत्तियों एवं करियर दिशा के पैटर्न को उजागर करती हैं। वे पारंपरिक हस्त रेखा सिद्धांतों को एक सहज एवं आत्मीय परामर्श शैली के साथ जोड़ती हैं, जो पहली बार आने वाले ग्राहकों को भी सहज महसूस कराती है।",
  },
  {
    slug: "acharya-gaurav-sharma",
    name: "Acharya Gaurav Sharma",
    nameHi: "आचार्य गौरव शर्मा",
    avatar: "📿",
    photo: "/astrologers/acharya-gaurav-sharma.jpg",
    specialty: "Vedic Jyotishi",
    specialtyHi: "वैदिक ज्योतिषी",
    experience: "14 Years",
    languages: ["Hindi", "English"],
    rating: 4.8,
    reviews: 1050,
    consultations: "8,100+",
    price: "₹19 / min",
    tags: [
      "Kundli Analysis",
      "Marriage Matching",
      "Business Consultant",
      "Finance Consultant",
      "Birth Time Rectification",
    ],
    tagsHi: [
      "कुंडली विश्लेषण",
      "विवाह मिलान",
      "व्यापार सलाहकार",
      "वित्त सलाहकार",
      "जन्म समय शुद्धिकरण",
    ],
    education:
      "Acharya (M.A.) in Jyotish Shastra, Sampurnanand Sanskrit Vishwavidyalaya, Varanasi",
    educationHi:
      "आचार्य (एम.ए.) ज्योतिष शास्त्र, सम्पूर्णानंद संस्कृत विश्वविद्यालय, वाराणसी",
    shortBio:
      "Vedic Jyotishi with a formal Acharya degree, focused on accurate predictions and result-oriented remedies.",
    shortBioHi:
      "औपचारिक आचार्य उपाधि प्राप्त वैदिक ज्योतिषी, सटीक भविष्यवाणी एवं परिणामोन्मुखी उपायों पर केंद्रित।",
    bio: "Acharya Gaurav Sharma completed his Acharya (M.A.) in Jyotish Shastra from Sampurnanand Sanskrit Vishwavidyalaya, Varanasi — one of the oldest and most respected centres for Sanskrit and Vedic learning in India. In 14 years of practice, he has built a reputation for accurate, detail-oriented Kundli readings and remedies tailored to each client's specific chart rather than generic advice.",
    bioHi:
      "आचार्य गौरव शर्मा ने वाराणसी स्थित सम्पूर्णानंद संस्कृत विश्वविद्यालय से ज्योतिष शास्त्र में आचार्य (एम.ए.) की उपाधि प्राप्त की है, जो भारत में संस्कृत एवं वैदिक शिक्षा के सबसे पुराने और सम्मानित केंद्रों में से एक है। 14 वर्षों के अभ्यास में उन्होंने सटीक एवं विस्तृत कुंडली विश्लेषण तथा प्रत्येक ग्राहक की कुंडली के अनुरूप विशेष उपाय देने के लिए एक विशिष्ट पहचान बनाई है, न कि सामान्य सलाह।",
  },
  {
    slug: "lakshmi-narayan",
    name: "Lakshmi Narayan",
    nameHi: "लक्ष्मी नारायण",
    avatar: "📿",
    photo: null,
    specialty: "Nadi Astrology",
    specialtyHi: "नाड़ी ज्योतिष",
    experience: "27 Years",
    languages: ["Tamil", "Hindi", "English"],
    rating: 4.9,
    reviews: 1893,
    consultations: "13,400+",
    price: "₹28 / min",
    tags: [
      "Nadi Leaf Reading",
      "Past Life Insights",
      "Destiny Analysis",
      "Marriage Consultant",
      "Wealth and Property",
    ],
    tagsHi: [
      "नाड़ी पत्र वाचन",
      "पूर्व जन्म अंतर्दृष्टि",
      "भाग्य विश्लेषण",
      "विवाह सलाहकार",
      "धन एवं संपत्ति",
    ],
    education: "Trained in Traditional Nadi Astrology, Tamil Nadu",
    educationHi: "पारंपरिक नाड़ी ज्योतिष में प्रशिक्षित, तमिलनाडु",
    shortBio:
      "Senior Nadi astrologer offering deep, destiny-focused readings rooted in ancient texts.",
    shortBioHi:
      "प्राचीन ग्रंथों पर आधारित, भाग्य-केंद्रित गहन रीडिंग प्रदान करने वाली वरिष्ठ नाड़ी ज्योतिषी।",
    bio: "Lakshmi Narayan trained for years under traditional Nadi astrology masters in Tamil Nadu. Nadi astrology is regarded as one of the most detailed branches of Vedic astrology, often addressing destiny, karma and long-term life patterns in ways general horoscope readings cannot.",
    bioHi:
      "लक्ष्मी नारायण ने तमिलनाडु में पारंपरिक नाड़ी ज्योतिष गुरुओं के अधीन वर्षों तक प्रशिक्षण प्राप्त किया है। नाड़ी ज्योतिष को वैदिक ज्योतिष की सबसे विस्तृत शाखाओं में से एक माना जाता है, जो अक्सर भाग्य, कर्म एवं दीर्घकालिक जीवन पैटर्न को उन तरीकों से संबोधित करती है जो सामान्य कुंडली रीडिंग नहीं कर पातीं।",
  },
  {
    slug: "acharya-akash",
    name: "Acharya Akash",
    nameHi: "आचार्य आकाश",
    avatar: "⭐",
    photo: "/astrologers/acharya-akash.jpg",
    specialty: "Vedic Astrology & Rudra Abhishek",
    specialtyHi: "वैदिक ज्योतिष एवं रुद्राभिषेक",
    experience: "15 Years",
    languages: ["Hindi", "English"],
    rating: 4.8,
    reviews: 1190,
    consultations: "9,000+",
    price: "₹20 / min",
    tags: [
      "Shiv Puja & Abhishek",
      "Kundli Analysis",
      "Health Consultant",
      "Gemstone Consultant",
      "Wealth and Property",
    ],
    tagsHi: [
      "शिव पूजा एवं अभिषेक",
      "कुंडली विश्लेषण",
      "स्वास्थ्य सलाहकार",
      "रत्न सलाहकार",
      "धन एवं संपत्ति",
    ],
    education: "Jyotish Shastra, Uttarakhand Sanskrit Vishwavidyalaya, Haridwar",
    educationHi: "ज्योतिष शास्त्र, उत्तराखंड संस्कृत विश्वविद्यालय, हरिद्वार",
    shortBio:
      "Vedic astrologer specialising in Shiv puja and Rudra Abhishek alongside detailed horoscope guidance.",
    shortBioHi:
      "शिव पूजा एवं रुद्राभिषेक में विशेषज्ञता रखने वाले वैदिक ज्योतिषी, साथ ही विस्तृत कुंडली मार्गदर्शन।",
    bio: "Acharya Akash studied Jyotish Shastra at the Uttarakhand Sanskrit Vishwavidyalaya in Haridwar and has 15 years of experience blending Vedic astrology with temple ritual practice, particularly Rudra Abhishek and Shiv puja for peace, health and the removal of planetary obstacles. He is known for his warm, devotional approach to consultations, helping clients feel at ease while addressing serious life questions.",
    bioHi:
      "आचार्य आकाश ने हरिद्वार स्थित उत्तराखंड संस्कृत विश्वविद्यालय से ज्योतिष शास्त्र का अध्ययन किया है और उन्हें वैदिक ज्योतिष को मंदिर अनुष्ठान प्रथाओं के साथ जोड़ने का 15 वर्षों का अनुभव है, विशेष रूप से शांति, स्वास्थ्य एवं ग्रह बाधाओं के निवारण हेतु रुद्राभिषेक एवं शिव पूजा में। वे अपने सौम्य एवं भक्तिपूर्ण परामर्श शैली के लिए जाने जाते हैं, जो ग्राहकों को गंभीर जीवन प्रश्नों पर चर्चा करते समय भी सहज महसूस कराती है।",
  },
];

export function getAstrologerBySlug(slug) {
  return astrologers.find((a) => a.slug === slug) || null;
}

export function getAllAstrologerSlugs() {
  return astrologers.map((a) => a.slug);
}

// Returns a copy of the astrologer with the display fields (name,
// specialty, education, bio, shortBio, tags) swapped to their Hindi
// counterparts when locale is "hi" and a translation exists, falling back
// to the English field otherwise so nothing ever renders blank.
export function getLocalizedAstrologer(astrologer, locale) {
  if (!astrologer) return astrologer;
  if (locale !== "hi") return astrologer;

  // "experience" is stored as e.g. "19 Years" — rather than hand-writing a
  // Hindi copy of this field on every astrologer record, just swap the
  // trailing unit word so it reads naturally in Hindi too.
  const experienceHi = astrologer.experience
    ? astrologer.experience.replace(/Years?/i, "वर्ष")
    : astrologer.experience;

  return {
    ...astrologer,
    name: astrologer.nameHi || astrologer.name,
    specialty: astrologer.specialtyHi || astrologer.specialty,
    education: astrologer.educationHi || astrologer.education,
    shortBio: astrologer.shortBioHi || astrologer.shortBio,
    bio: astrologer.bioHi || astrologer.bio,
    tags: astrologer.tagsHi || astrologer.tags,
    experience: experienceHi,
  };
}
