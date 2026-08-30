/**
 * Islamic Luxury Wedding Invitation Controller — Shahid & Iqra
 * Target Dates: November 25 & 27, 2026
 * Features:
 * 1. Realistic Envelope Opening + VIP Personalized Guest Name Tag
 * 2. 3D Tilt & Gold Foil Holographic Shimmer (Mouse & Mobile Gyroscope)
 * 3. Virtual Rose Petal Shower & Mabrook Celebration Audio Synthesizer
 * 4. Ambient Music Playlist Selector (Oud & Nay, Soft Nasheed, Meditative Strings, Mute)
 * 5. Multi-Language Switcher (English, Urdu, Hindi)
 * 6. 1-Click Printable / Digital Card Download
 * 7. Live Countdown & Calendar Integration
 * 8. Digital Dua Wall
 */

// Target Wedding Date: 25th November 2026 17:30:00
const WEDDING_DATE = new Date('2026-11-25T17:30:00').getTime();

// Pre-seeded Islamic Duas & Blessings
const INITIAL_DUAS = [
  {
    name: "Dr. Farhan Shaikh & Family",
    arabic: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    message: "May Allah bless Shahid & Iqra with immense barakah, happiness, and peace in their married life. Warmest Mubarak to Amiruddin Uncle and Mustafa Uncle!",
    date: "August 28, 2026"
  },
  {
    name: "Uncle Mansoor & Aunt Shenaz",
    arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
    message: "Heartiest congratulations to the Shaikh families on this blessed occasion! May your union be full of love, Taqwa, and joy.",
    date: "August 29, 2026"
  },
  {
    name: "Hamza & Family (Mumbai)",
    arabic: "اللَّهُمَّ بَارِكْ لَهُمْ فِيمَا رَزَقْتَهُمْ",
    message: "Mabrook to dearest Shahid and Iqra! Excited to join the celebrations in Mumbra on the 25th and Kurla on the 27th Insha'Allah.",
    date: "August 30, 2026"
  }
];

// Multilingual Dictionary
const TRANSLATIONS = {
  en: {
    nav_home: "Home",
    nav_couple: "The Couple",
    nav_ceremonies: "Ceremonies",
    nav_itinerary: "Itinerary",
    nav_blessings: "Blessings",
    nav_duas: "Duas",
    env_together: "TOGETHER WITH THEIR FAMILIES",
    env_sentence: "Cordially invite you to celebrate their wedding",
    month_nov: "NOVEMBER",
    tap_open_hint: "Tap the royal envelope to open invitation",
    bismillah_trans: '"In the name of Allah, the Most Gracious, the Most Merciful"',
    quran_ayah: '"And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them; and He has put love and mercy between your hearts."',
    cordial_invite: "Together with their families, cordially invite you to celebrate",
    groom_name: "Shahid Shaikh",
    bride_name: "Iqra Shaikh",
    covenant_sub: "In a sacred covenant of love, faith & togetherness",
    countdown_title: "COUNTDOWN TO THE WEDDING (25th NOV)",
    time_days: "DAYS",
    time_hours: "HOURS",
    time_mins: "MINUTES",
    time_secs: "SECONDS",
    btn_view_events: "View Ceremonies & Venues",
    btn_save_cal: "Save to Calendar",
    btn_download_card: "Download / Print Card",
    badge_gratitude: "With Joyous Gratitude",
    heading_couple: "The Bride & Groom",
    groom_full: "Shahid Shaikh",
    groom_role: "The Groom",
    son_of: "Son of",
    groom_parents: "Mr. Amiruddin Shaikh & Family",
    groom_quote: '"May Allah bless our steps together, guide our hearts, and grant us a home filled with peace, Taqwa, and everlasting joy."',
    bride_full: "Iqra Shaikh",
    bride_role: "The Bride",
    daughter_of: "Daughter of",
    bride_parents: "Mr. Mustafa Shaikh & Family",
    bride_quote: '"Finding your counterpart in faith and heart is Allah\'s greatest blessing. Truly blessed to begin this sacred chapter of our lives."',
    families_title: "A Warm Note from the Families",
    families_msg: '"We request the honour of your graceful presence and pious Duas on this auspicious celebration. Your companionship will make our joy complete as our families unite under the divine grace of Almighty Allah."',
    badge_schedule: "Schedule of Blessings",
    heading_ceremonies: "Wedding Ceremonies",
    desc_ceremonies: "Join us in each sacred chapter of our celebrations",
    badge_shaadi: "The Main Shaadi (25th Nov)",
    title_shaadi: "Wedding Ceremony & Barat",
    sub_shaadi: "The Sacred Nikkah Covenant & Grand Barat Banquet",
    date_shaadi: "Wednesday, 25th November 2026",
    time_shaadi: "Nikkah: 05:30 PM (Maghrib)",
    dinner_shaadi: "Barat Reception & Dinner at 07:30 PM",
    badge_walima: "Sunnah Walima (27th Nov)",
    title_walima: "Dawat-e-Walima",
    sub_walima: "The Grand Feast Hosted by Shahid's Family",
    date_walima: "Friday, 27th November 2026",
    time_walima: "08:00 PM Onwards",
    dinner_walima: "Shahi Dastarkhwan Served at 09:00 PM",
    btn_maps: "Open in Google Maps",
    btn_add_cal: "Add to Calendar",
    badge_highlights: "Event Schedule",
    heading_itinerary: "Detailed Itinerary",
    itin_shaadi_title: "Grand Shaadi & Barat Reception",
    itin_shaadi_desc: "Lavish traditional wedding feast and celebratory reception at Kinjal Wedding Lawn, Mumbra (Thane).",
    itin_walima_title: "Dawat-e-Walima Banquet",
    itin_walima_desc: "Sunnah Walima banquet hosted by Mr. Amiruddin Shaikh & Family at Goawala Compound, Kurla West (Mumbai).",
    badge_wisdom: "Words of Wisdom & Faith",
    heading_tokens: "Tokens of Barakah",
    desc_tokens: "Guiding verses and prophetic wisdom for a blessed married life",
    token_1_title: "Love & Mercy",
    token_1_desc: '"And He placed between you affection and mercy. In that are signs for people who reflect."',
    token_2_title: "The Sunnah of Marriage",
    token_2_desc: '"Marriage is part of my Sunnah, and whoever follows my Sunnah has fulfilled half of his faith."',
    token_3_title: "Comfort of the Eyes",
    token_3_desc: '"Our Lord! Grant unto us in our spouses and offspring the comfort of our eyes, and make us leaders of the righteous."',
    heading_etiquette: "Wedding Etiquette & Guest Guide",
    etiq_photo_title: "Photography Etiquette",
    etiq_photo_desc: "Please kindly respect the privacy of family members and refrain from filming during solemn moments.",
    etiq_kids_title: "Little Angels",
    etiq_kids_desc: "Children are a blessing and welcome to join. Please ensure they remain accompanied by parents.",
    etiq_gift_title: "No Box Gifts (Sunnah Wishes)",
    etiq_gift_desc: "Your pious Duas and gracious presence are the greatest gifts we could ever ask for. (Salam & Duas appreciated).",
    heading_queries: "For Queries & Directions Assistance",
    badge_barakah: "Words of Barakah",
    heading_duas: "Digital Dua & Guestbook",
    desc_duas: "Blessings, prayers, and heartfelt words sent by loved ones",
    title_leave_dua: "Leave a Dua for Shahid & Iqra",
    lbl_your_name: "Your Name *",
    lbl_your_dua: "Your Dua / Blessing *",
    btn_post_dua: "Post Your Dua",
    title_share: "Share This Invitation With Family",
    desc_share: "Spread the joyful news with friends & relatives via WhatsApp or social channels",
    btn_whatsapp_share: "Share on WhatsApp",
    btn_copy_link: "Copy Link",
    footer_thanks: "Jazakumullahu Khairan for your pious Duas, gracious blessings & unconditional love.",
    footer_copyright: "May Allah bless all our families with endless peace and harmony • November 2026",
    mabrook_btn: "Mabrook! 🌸"
  },
  ur: {
    nav_home: "صفحہ اول",
    nav_couple: "دولہا اور دلہن",
    nav_ceremonies: "تقریبات",
    nav_itinerary: "پروگرام",
    nav_blessings: "دعائیہ کلمات",
    nav_duas: "دعائیں",
    env_together: "اہل خانہ کے ہمراہ",
    env_sentence: "آپ کو شادی کی مبارک تقریب میں شرکت کی دلی دعوت دیتے ہیں",
    month_nov: "نومبر",
    tap_open_hint: "دعوت نامہ کھولنے کے لیے شاہی لفافے پر کلک کریں",
    bismillah_trans: '"شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے"',
    quran_ayah: '"اور اُس کی نشانیوں میں سے ہے کہ اُس نے تمہارے لیے تمہاری ہی جنس سے جوڑے بنائے تاکہ تم اُن سے سکون پاؤ، اور تمہارے درمیان محبت اور رحمت پیدا کردی۔"',
    cordial_invite: "دونوں خاندان آپ کو اس بابرکت تقریب میں شرکت کی صمیمِ قلب سے دعوت دیتے ہیں",
    groom_name: "شاہد شیخ",
    bride_name: "اقراء شیخ",
    covenant_sub: "محبت، ایمان اور اخلاص کے مقدس بندھن میں",
    countdown_title: "شادی کی مبارک تقریب (25 نومبر)",
    time_days: "دن",
    time_hours: "گھنٹے",
    time_mins: "منٹ",
    time_secs: "سیکنڈ",
    btn_view_events: "تقریبات اور مقامات دیکھیں",
    btn_save_cal: "کیلنڈر میں محفوظ کریں",
    btn_download_card: "دعوت نامہ پرنٹ / ڈاؤنلوڈ کریں",
    badge_gratitude: "شکر و مسرت کے ساتھ",
    heading_couple: "دولہا اور دلہن",
    groom_full: "شاہد شیخ",
    groom_role: "دولہا",
    son_of: "فرزندِ ارجمند",
    groom_parents: "جناب امیر الدین شیخ و اہلِ خانہ",
    groom_quote: '"اللہ تعالیٰ ہمارے سفر میں برکت عطا فرمائے اور ہمارے گھر کو امن، تقویٰ اور خوشیوں سے بھر دے۔"',
    bride_full: "اقراء شیخ",
    bride_role: "دلہن",
    daughter_of: "نورِ چشم",
    bride_parents: "جناب مصطفیٰ شیخ و اہلِ خانہ",
    bride_quote: '"زندگی کا بہترین ہمسفر ملنا اللہ کا انمول انعام ہے۔ اللہ ہمارے اس نئے سفر کو بابرکت بنائے۔"',
    families_title: "خاندان کی جانب سے پیغامِ محبت",
    families_msg: '"ہم آپ کی پرخلوص شرکت اور نیک دعاؤں کے متمنی ہیں۔ آپ کی تشریف آوری ہمارے لیے باعثِ افتخار ہوگی۔"',
    badge_schedule: "مبارک اوقات",
    heading_ceremonies: "شادی کی تقریبات",
    desc_ceremonies: "ہماری مسرتوں میں شرکت فرما کر شکریہ کا موقع عنایت فرمائیں",
    badge_shaadi: "شادی و بارات (25 نومبر)",
    title_shaadi: "مبارک تقریبِ عقد و بارات",
    sub_shaadi: "مقدس نکاح اور پروقار دعوتِ طعام",
    date_shaadi: "بدھ، 25 نومبر 2026",
    time_shaadi: "نکاح: بعد نمازِ مغرب 05:30 بجے",
    dinner_shaadi: "استقبالیہ و طعام: 07:30 بجے شام",
    badge_walima: "سنتِ ولیمہ (27 نومبر)",
    title_walima: "دعوتِ ولیمہ",
    sub_walima: "دولہا کے خاندان کی جانب سے پروقار ضیافت",
    date_walima: "جمعہ، 27 نومبر 2026",
    time_walima: "رات 08:00 بجے سے",
    dinner_walima: "شاہی دسترخوان: رات 09:00 بجے",
    btn_maps: "گوگل میپس میں دیکھیں",
    btn_add_cal: "کیلنڈر میں شامل کریں",
    badge_highlights: "پروگرام کی جھلکیاں",
    heading_itinerary: "مکمل پروگرام",
    itin_shaadi_title: "شادی و بارات استقبالیہ",
    itin_shaadi_desc: "کنجل ویڈنگ لان، ممبرا (تھانے) میں پروقار تقریب اور ضیافت۔",
    itin_walima_title: "دعوتِ ولیمہ ضیافت",
    itin_walima_desc: "گووالا کمپاؤنڈ، کرلا ویسٹ (ممبئی) میں سنتِ ولیمہ کی پرشکوہ دعوت۔",
    badge_wisdom: "فرامینِ ربانی و سنتِ نبوی",
    heading_tokens: "برکت کے انمول کلمات",
    desc_tokens: "کامیاب ازدواجی زندگی کے سنہرے اصول",
    token_1_title: "محبت اور رحمت",
    token_1_desc: '"اور اُس نے تمہارے درمیان محبت اور رحمت پیدا کردی۔"',
    token_2_title: "نکاح سنتِ نبوی ہے",
    token_2_desc: '"نکاح میری سنت ہے، اور جس نے میری سنت پر عمل کیا اُس نے اپنا آدھا ایمان مکمل کیا۔"',
    token_3_title: "آنکھوں کی ٹھنڈک",
    token_3_desc: '"اے ہمارے رب! ہمیں ہماری ازواج اور اولاد کی طرف سے آنکھوں کی ٹھنڈک عطا فرما۔"',
    heading_etiquette: "مہمانوں کے لیے آداب و رہنمائی",
    etiq_photo_title: "تصویر کشی کے آداب",
    etiq_photo_desc: "خواتین کے پردے اور دعا کے پرنور لمحات کے تقدس کا خیال رکھیں۔",
    etiq_kids_title: "ننھے پھول",
    etiq_kids_desc: "بچے اللہ کی رحمت ہیں، برائے کرم تقریبات کے دوران ان کا دھیان رکھیں۔",
    etiq_gift_title: "صرف دعاؤں کی گزارش",
    etiq_gift_desc: "آپ کی مخلصانہ دعائیں اور تشریف آوری ہمارے لیے سب سے بڑا تحفہ ہے۔",
    heading_queries: "رہنمائی اور رابطے کے لیے",
    badge_barakah: "دعاؤں کا گلدستہ",
    heading_duas: "ڈیجیٹل دعائیہ کالم",
    desc_duas: "عزیز و اقارب کی جانب سے نیک تمنائیں اور پرخلوص دعائیں",
    title_leave_dua: "شاہد اور اقراء کے لیے اپنی دعا لکھیں",
    lbl_your_name: "آپ کا نام *",
    lbl_your_dua: "آپ کی مبارکباد و دعا *",
    btn_post_dua: "دعا ارسال کریں",
    title_share: "یہ دعوت نامہ خاندان کے ساتھ شیئر کریں",
    desc_share: "واٹس ایپ پر اپنے دوستوں اور رشتہ داروں کو مبارک خبر بھیجیں",
    btn_whatsapp_share: "واٹس ایپ پر شیئر کریں",
    btn_copy_link: "لنک کاپی کریں",
    footer_thanks: "آپ کی تشریف آوری، مخلصانہ محبت اور پرنور دعاؤں کا تہہ دل سے شکریہ۔",
    footer_copyright: "اللہ تعالیٰ ہمارے تمام خاندانوں کو امن، محبت اور برکت عطا فرمائے • نومبر 2026",
    mabrook_btn: "مبارک باد! 🌸"
  },
  hi: {
    nav_home: "होम",
    nav_couple: "वर-वधू",
    nav_ceremonies: "समारोह",
    nav_itinerary: "कार्यक्रम",
    nav_blessings: "शुभकामनाएं",
    nav_duas: "दुआएं",
    env_together: "सपरिवार सादर आमंत्रित",
    env_sentence: "आपको अपने विवाह समारोह में शामिल होने के लिए सादर आमंत्रित करते हैं",
    month_nov: "नवंबर",
    tap_open_hint: "निमंत्रण पत्र खोलने के लिए शाही लिफाफे पर टैप करें",
    bismillah_trans: '"अल्लाह के नाम से, जो परम कृपालु और दयावान है"',
    quran_ayah: '"और उसकी निशानियों में से है कि उसने तुम्हारे लिए तुम्हीं में से जोड़े बनाए ताकि तुम्हें सुकून मिले, और दिलों में प्यार व रहमत पैदा की।"',
    cordial_invite: "दोनों परिवार आपको इस पावन उत्सव में सस्नेह आमंत्रित करते हैं",
    groom_name: "शाहिद शेख",
    bride_name: "इक़रा शेख",
    covenant_sub: "प्रेम, विश्वास और पवित्र वैवाहिक बंधन में",
    countdown_title: "विवाह समारोह की उलटी गिनती (25 नवंबर)",
    time_days: "दिन",
    time_hours: "घंटे",
    time_mins: "मिनट",
    time_secs: "सेकंड",
    btn_view_events: "समारोह व स्थान देखें",
    btn_save_cal: "कैलेंडर में सेव करें",
    btn_download_card: "कार्ड डाउनलोड / प्रिंट करें",
    badge_gratitude: "आभार और हर्ष के साथ",
    heading_couple: "वर और वधू",
    groom_full: "शाहिद शेख",
    groom_role: "वर (दूल्हा)",
    son_of: "सुपुत्र",
    groom_parents: "श्री अमीरउद्दीन शेख एवं परिवार",
    groom_quote: '"अल्लाह हमारे इस नए सफर में बरकत दे और हमारे घर को सुख, शांति व खुशियों से भर दे।"',
    bride_full: "इक़रा शेख",
    bride_role: "वधू (दुल्हन)",
    daughter_of: "सुपुत्री",
    bride_parents: "श्री मुस्तफा शेख एवं परिवार",
    bride_quote: '"सच्चा जीवनसाथी अल्लाह का सबसे अनमोल तोहफा है। इस पावन शुरुआत के लिए हम शुक्रगुजार हैं।"',
    families_title: "परिवार की ओर से सादर संदेश",
    families_msg: '"हम इस शुभ अवसर पर आपकी गरिमामयी उपस्थिति और नेक दुआओं के अभिलाषी हैं। आपकी मौजूदगी हमारी खुशियों को चार चांद लगाएगी।"',
    badge_schedule: "शुभ कार्यक्रम",
    heading_ceremonies: "विवाह समारोह",
    desc_ceremonies: "हमारे इस पावन उत्सव के हर पल में शामिल होकर हमें अनुग्रहित करें",
    badge_shaadi: "शादी व बारात (25 नवंबर)",
    title_shaadi: "निकाह व बारात समारोह",
    sub_shaadi: "पवित्र निकाह एवं भव्य दावत",
    date_shaadi: "बुधवार, 25 नवंबर 2026",
    time_shaadi: "निकाह: शाम 05:30 बजे",
    dinner_shaadi: "स्वागत एवं शाही भोज: शाम 07:30 बजे",
    badge_walima: "दावत-ए-वलीमा (27 नवंबर)",
    title_walima: "दावत-ए-वलीमा",
    sub_walima: "वर पक्ष की ओर से भव्य प्रीतिभोज",
    date_walima: "शुक्रवार, 27 नवंबर 2026",
    time_walima: "रात्रि 08:00 बजे से",
    dinner_walima: "शाही दावत: रात्रि 09:00 बजे",
    btn_maps: "गूगल मैप्स पर देखें",
    btn_add_cal: "कैलेंडर में जोड़ें",
    badge_highlights: "कार्यक्रम सूची",
    heading_itinerary: "विस्तृत कार्यक्रम",
    itin_shaadi_title: "शादी एवं बारात स्वागत",
    itin_shaadi_desc: "किंजल वेडिंग लॉन, मुंब्रा (ठाणे) में भव्य निकाह व दावत।",
    itin_walima_title: "दावत-ए-वलीमा प्रीतिभोज",
    itin_walima_desc: "गोवावाला कंपाउंड, कुर्ला वेस्ट (मुंबई) में वलीमा की शानदार दावत।",
    badge_wisdom: "पवित्र वचन व ज्ञान",
    heading_tokens: "बरकत के संदेश",
    desc_tokens: "सुखी दांपत्य जीवन के लिए प्रेरणादायक वचन",
    token_1_title: "स्नेह और दया",
    token_1_desc: '"और उसने तुम्हारे दिलों में प्रेम और दया पैदा कर दी।"',
    token_2_title: "विवाह की सुन्नत",
    token_2_desc: '"निकाह मेरी सुन्नत है, और जिसने इस पर अमल किया उसने अपना आधा ईमान पूरा किया।"',
    token_3_title: "आंखों की ठंडक",
    token_3_desc: '"हे हमारे रब! हमारे जीवनसाथी और संतानों को हमारी आंखों की ठंडक बना।"',
    heading_etiquette: "अतिथि मार्गदर्शन",
    etiq_photo_title: "फोटोग्राफी शिष्टाचार",
    etiq_photo_desc: "प्रार्थना के पवित्र पलों और परिवारों की गरिमा का सम्मान करें।",
    etiq_kids_title: "नन्हे मेहमान",
    etiq_kids_desc: "बच्चे ईश्वर का रूप हैं, कृपया औपचारिक पलों में उनका ध्यान रखें।",
    etiq_gift_title: "केवल दुआओं की प्रार्थना",
    etiq_gift_desc: "आपकी नेक दुआएं और उपस्थिति ही हमारे लिए सबसे बड़ा उपहार है।",
    heading_queries: "मार्गदर्शन व संपर्क के लिए",
    badge_barakah: "दुआओं का संगम",
    heading_duas: "डिजिटल दुआ व गेस्टबुक",
    desc_duas: "प्रियजनों की ओर से भेजी गई शुभकामनाएं व आशीर्वाद",
    title_leave_dua: "शाहिद व इक़रा के लिए अपनी दुआ भेजें",
    lbl_your_name: "आपका नाम *",
    lbl_your_dua: "आपकी दुआ / संदेश *",
    btn_post_dua: "दुआ पोस्ट करें",
    title_share: "यह निमंत्रण पत्र परिवार के साथ साझा करें",
    desc_share: "व्हाट्सएप पर रिश्तेदारों व मित्रों को यह शुभ समाचार भेजें",
    btn_whatsapp_share: "व्हाट्सएप पर शेयर करें",
    btn_copy_link: "लिंक कॉपी करें",
    footer_thanks: "आपकी उपस्थिति, असीम स्नेह और पवित्र दुआओं के लिए हार्दिक धन्यवाद।",
    footer_copyright: "अल्लाह हमारे सभी परिवारों को सुख, शांति और समृद्धि प्रदान करे • नवंबर 2026",
    mabrook_btn: "मुबारकबाद! 🌸"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initVIPGuest();
  initGatefoldOpening();
  init3DTilt();
  initPetalShower();
  initAudioPlaylist();
  initLanguageSwitcher();
  initPrintCard();
  initCountdown();
  initGuestbook();
  initShareTools();
});

/* ==========================================================================
   0. PERSONALIZED VIP GUEST TAG FROM URL (?to=Name)
   ========================================================================== */
function initVIPGuest() {
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get('to') || urlParams.get('guest');
  const banner = document.getElementById('vipGuestBanner');
  const nameEl = document.getElementById('vipGuestName');

  if (guestName && banner && nameEl) {
    nameEl.innerText = `Specially Invited: ${guestName}`;
    banner.style.display = 'inline-flex';
  }
}

/* ==========================================================================
   1. 3D DOUBLE-DOOR GATEFOLD CARD OPENING & WAX SEAL SPARKLE BURST CONTROLLER
   ========================================================================== */
function initGatefoldOpening() {
  const gatefoldCard = document.getElementById('gatefoldCard');
  const cardSeal = document.getElementById('cardSeal');
  const doorLeft = document.getElementById('doorLeft');
  const doorRight = document.getElementById('doorRight');
  const burstContainer = document.getElementById('sealSparkleBurst');

  if (gatefoldCard) {
    const triggerSealBurst = () => {
      if (!burstContainer) return;
      
      // Spawn 28 golden spark stars exploding radially
      for (let i = 0; i < 28; i++) {
        const spark = document.createElement('div');
        spark.className = 'sparkle-star';
        const angle = (Math.PI * 2 * i) / 28 + (Math.random() - 0.5) * 0.4;
        const distance = 50 + Math.random() * 95;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        spark.style.setProperty('--tx', `${tx}px`);
        spark.style.setProperty('--ty', `${ty}px`);
        spark.style.animationDelay = `${Math.random() * 0.08}s`;
        
        burstContainer.appendChild(spark);
        setTimeout(() => spark.remove(), 900);
      }
    };

    const handleOpen = () => {
      if (gatefoldCard.classList.contains('open')) {
        return;
      }

      // Step 1: Trigger Wax Seal Stamping and Golden Sparks
      if (cardSeal) {
        cardSeal.classList.add('stamping');
        triggerSealBurst();
        playCelebrationChime();
      }

      // Step 2: Smoothly swing open the doors and unlock scroll
      setTimeout(() => {
        gatefoldCard.classList.remove('closed');
        gatefoldCard.classList.add('open');

        document.body.classList.remove('card-closed-state');
        document.body.classList.add('card-opened-state');
        
        playAmbientTrack('oud');
      }, 320);
    };

    if (cardSeal) cardSeal.addEventListener('click', handleOpen);
    if (doorLeft) doorLeft.addEventListener('click', handleOpen);
    if (doorRight) doorRight.addEventListener('click', handleOpen);
  }
}

/* ==========================================================================
   2. 3D GYROSCOPE & MOUSE TILT PHYSICS WITH GOLD FOIL REFLECTION
   ========================================================================== */
function init3DTilt() {
  const card = document.getElementById('gatefoldCard');
  const shimmer = card?.querySelector('.foil-shimmer-layer');

  if (!card) return;

  // Mouse tilt on Desktop
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;

    if (shimmer) {
      const shimmerX = (x / rect.width) * 150 - 50;
      shimmer.style.transform = `translateX(${shimmerX}%)`;
    }
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    if (shimmer) shimmer.style.transform = 'translateX(0%)';
  });

  // Mobile Gyroscope Tilt
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', (e) => {
      if (e.gamma !== null && e.beta !== null) {
        const tiltX = Math.min(Math.max(e.gamma, -20), 20) * 0.35;
        const tiltY = Math.min(Math.max(e.beta - 45, -20), 20) * 0.35;
        card.style.transform = `perspective(1200px) rotateX(${-tiltY}deg) rotateY(${tiltX}deg)`;
      }
    });
  }
}

/* ==========================================================================
   3. VIRTUAL ROSE PETAL SHOWER & CELEBRATION CHIME ENGINE
   ========================================================================== */
let petalCanvas, petalCtx, petals = [], petalAnimId = null;

function initPetalShower() {
  petalCanvas = document.getElementById('petals-canvas');
  if (!petalCanvas) return;
  petalCtx = petalCanvas.getContext('2d');

  function resize() {
    petalCanvas.width = window.innerWidth;
    petalCanvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const mabrookBtn = document.getElementById('mabrookBtn');
  if (mabrookBtn) {
    mabrookBtn.addEventListener('click', triggerMabrookShower);
  }
}

function triggerMabrookShower() {
  playCelebrationChime();
  
  // Spawn 65 falling petals
  for (let i = 0; i < 65; i++) {
    petals.push({
      x: Math.random() * petalCanvas.width,
      y: -20 - Math.random() * 200,
      size: 14 + Math.random() * 16,
      speedY: 2.5 + Math.random() * 3.5,
      speedX: -1.5 + Math.random() * 3,
      rotation: Math.random() * 360,
      rotSpeed: -2 + Math.random() * 4,
      color: Math.random() > 0.4 ? '#e63946' : (Math.random() > 0.5 ? '#f4a261' : '#e76f51'),
      opacity: 0.95
    });
  }

  if (!petalAnimId) {
    animatePetals();
  }
}

function animatePetals() {
  petalCtx.clearRect(0, 0, petalCanvas.width, petalCanvas.height);

  for (let i = petals.length - 1; i >= 0; i--) {
    const p = petals[i];
    p.y += p.speedY;
    p.x += Math.sin(p.y * 0.02) * p.speedX;
    p.rotation += p.rotSpeed;

    petalCtx.save();
    petalCtx.translate(p.x, p.y);
    petalCtx.rotate((p.rotation * Math.PI) / 180);
    petalCtx.fillStyle = p.color;
    petalCtx.globalAlpha = p.opacity;

    // Draw realistic petal curve
    petalCtx.beginPath();
    petalCtx.moveTo(0, 0);
    petalCtx.bezierCurveTo(-p.size / 2, -p.size / 2, -p.size / 2, p.size / 2, 0, p.size);
    petalCtx.bezierCurveTo(p.size / 2, p.size / 2, p.size / 2, -p.size / 2, 0, 0);
    petalCtx.fill();
    petalCtx.restore();

    if (p.y > petalCanvas.height + 50) {
      petals.splice(i, 1);
    }
  }

  if (petals.length > 0) {
    petalAnimId = requestAnimationFrame(animatePetals);
  } else {
    cancelAnimationFrame(petalAnimId);
    petalAnimId = null;
  }
}

/* ==========================================================================
   4. AMBIENT AUDIO PLAYLIST SYNTHESIZER
   ========================================================================== */
let audioCtx = null;
let masterGain = null;
let currentTrack = null;
let activeOscillators = [];

function initAudioPlaylist() {
  const toggleBtn = document.getElementById('audioToggleBtn');
  const playlistMenu = document.getElementById('audioPlaylistMenu');
  const trackOptions = document.querySelectorAll('.track-option');

  if (toggleBtn && playlistMenu) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      playlistMenu.classList.toggle('active');
    });

    document.addEventListener('click', () => {
      playlistMenu.classList.remove('active');
    });

    trackOptions.forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const track = opt.dataset.track;
        trackOptions.forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
        playlistMenu.classList.remove('active');

        if (track === 'mute') {
          stopAmbientTrack();
        } else {
          playAmbientTrack(track);
        }
      });
    });
  }
}

function playAmbientTrack(type) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    stopAmbientTrack();

    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 2.5);
    masterGain.connect(audioCtx.destination);

    let frequencies = [];
    if (type === 'oud') {
      frequencies = [146.83, 220.00, 293.66, 349.23, 440.00]; // Arabic Bayati Maqam chords
    } else if (type === 'nasheed') {
      frequencies = [174.61, 261.63, 329.63, 392.00, 523.25]; // Uplifting Spiritual Harmony
    } else {
      frequencies = [130.81, 196.00, 261.63, 329.63, 392.00]; // Soft Meditative Strings
    }

    activeOscillators = frequencies.map((freq, index) => {
      const osc = audioCtx.createOscillator();
      const oscGain = audioCtx.createGain();

      osc.type = index % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      const lfo = audioCtx.createOscillator();
      const lfoGain = audioCtx.createGain();
      lfo.frequency.value = 0.25 + index * 0.08;
      lfoGain.gain.value = 1.2;
      lfo.connect(osc.frequency);
      lfo.start();

      oscGain.gain.value = 0.14 / frequencies.length;
      osc.connect(oscGain);
      oscGain.connect(masterGain);
      osc.start();
      return osc;
    });

    currentTrack = type;
    updateAudioPill(true, type);
  } catch (e) {
    console.log("Audio waiting for interaction:", e);
  }
}

function stopAmbientTrack() {
  if (masterGain && audioCtx) {
    masterGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.4);
    setTimeout(() => {
      activeOscillators.forEach(osc => {
        try { osc.stop(); } catch(e){}
      });
      activeOscillators = [];
      currentTrack = null;
      updateAudioPill(false, 'mute');
    }, 450);
  }
}

function updateAudioPill(isPlaying, track) {
  const toggleBtn = document.getElementById('audioToggleBtn');
  const label = document.getElementById('audioLabel');
  const icon = document.getElementById('audioIcon');

  if (isPlaying) {
    toggleBtn?.classList.remove('muted');
    if (icon) icon.className = 'fa-solid fa-volume-high';
    if (label) {
      if (track === 'oud') label.innerText = "Oud & Nay";
      else if (track === 'nasheed') label.innerText = "Nasheed";
      else label.innerText = "Acoustic";
    }
  } else {
    toggleBtn?.classList.add('muted');
    if (icon) icon.className = 'fa-solid fa-volume-xmark';
    if (label) label.innerText = "Muted";
  }
}

function playCelebrationChime() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime + i * 0.08);

      gain.gain.setValueAtTime(0.08, audioCtx.currentTime + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + i * 0.08 + 0.6);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(audioCtx.currentTime + i * 0.08);
      osc.stop(audioCtx.currentTime + i * 0.08 + 0.65);
    });
  } catch(e){}
}

/* ==========================================================================
   5. MULTI-LANGUAGE SWITCHER (English / Urdu / Hindi)
   ========================================================================== */
function initLanguageSwitcher() {
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');
  const langItems = document.querySelectorAll('.lang-item');
  const currentLangLabel = document.getElementById('currentLangLabel');

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('active');
    });

    document.addEventListener('click', () => {
      langDropdown.classList.remove('active');
    });

    langItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = item.dataset.lang;
        setLanguage(lang);
        langItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        langDropdown.classList.remove('active');
        if (currentLangLabel) {
          if (lang === 'en') currentLangLabel.innerText = "English";
          else if (lang === 'ur') currentLangLabel.innerText = "اردو";
          else currentLangLabel.innerText = "हिंदी";
        }
      });
    });
  }
}

function setLanguage(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerText = dict[key];
    }
  });
}

/* ==========================================================================
   6. 1-CLICK PRINT / DOWNLOAD INVITATION CARD
   ========================================================================== */
function initPrintCard() {
  const downloadBtn = document.getElementById('downloadCardBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/* ==========================================================================
   7. COUNTDOWN TIMER (November 25, 2026)
   ========================================================================== */
function initCountdown() {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('minutes');
  const secsEl = document.getElementById('seconds');

  function updateTimer() {
    const now = new Date().getTime();
    const distance = WEDDING_DATE - now;

    if (distance <= 0) {
      if (daysEl) daysEl.innerText = "00";
      if (hoursEl) hoursEl.innerText = "00";
      if (minsEl) minsEl.innerText = "00";
      if (secsEl) secsEl.innerText = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60));
    const minutes = Math.floor((distance % (1000 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.innerText = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
    if (minsEl) minsEl.innerText = String(minutes).padStart(2, '0');
    if (secsEl) secsEl.innerText = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ==========================================================================
   8. CALENDAR INTEGRATION (November 25 & 27, 2026)
   ========================================================================== */
window.addToCalendar = function(eventType) {
  const events = {
    nikkah: {
      title: "Wedding Ceremony of Shahid & Iqra (25th Nov)",
      description: "Celebrating the sacred Wedding & Nikkah of Shahid Shaikh & Iqra Shaikh.",
      location: "Kinjal Wedding Lawn, Babaji Patil Wadi, Sanjay Nagar, Mumbra, Thane, Maharashtra 400612",
      start: "20261125T173000",
      end: "20261125T230000"
    },
    walima: {
      title: "Dawat-e-Walima: Shahid & Iqra (27th Nov)",
      description: "Sunnah Walima feast hosted by Mr. Amiruddin Shaikh & Family.",
      location: "Goawala Compound, LBS Marg, Near Sahara Hotel, Kurla West, Mumbai 400070",
      start: "20261127T200000",
      end: "20261127T235900"
    }
  };

  const ev = events[eventType] || events.nikkah;
  const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(ev.title)}&dates=${ev.start}/${ev.end}&details=${encodeURIComponent(ev.description)}&location=${encodeURIComponent(ev.location)}`;
  
  window.open(gCalUrl, '_blank');
};

const globalCalBtn = document.getElementById('addToCalGlobalBtn');
if (globalCalBtn) {
  globalCalBtn.addEventListener('click', () => {
    window.addToCalendar('nikkah');
  });
}

/* ==========================================================================
   9. DIGITAL DUA GUESTBOOK & SUBMISSION
   ========================================================================== */
function initGuestbook() {
  const feed = document.getElementById('guestbookFeed');
  const duaForm = document.getElementById('duaForm');

  if (feed) {
    const storedDuas = JSON.parse(localStorage.getItem('wedding_duas') || '[]');
    const allDuas = [...storedDuas, ...INITIAL_DUAS];
    feed.innerHTML = '';
    allDuas.forEach(item => {
      feed.appendChild(createDuaElement(item));
    });
  }

  if (duaForm) {
    duaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const sender = document.getElementById('duaSenderName').value.trim();
      const msg = document.getElementById('duaTextMsg').value.trim();

      if (sender && msg) {
        addDuaToFeed({
          name: sender,
          arabic: "مَا شَاءَ اللَّهُ تَبَارَكَ اللَّهُ",
          message: msg,
          date: "Just now"
        });
        duaForm.reset();
        alert("JazakAllah Khair! Your Dua has been posted to the guestbook.");
      }
    });
  }
}

function createDuaElement(item) {
  const card = document.createElement('div');
  card.className = 'dua-card';
  card.innerHTML = `
    <div class="dua-sender">${escapeHtml(item.name)}</div>
    <div class="dua-date">${item.date || 'Recent'}</div>
    ${item.arabic ? `<div class="dua-arabic-badge">${item.arabic}</div>` : ''}
    <p class="dua-text">"${escapeHtml(item.message)}"</p>
  `;
  return card;
}

function addDuaToFeed(duaObj) {
  const feed = document.getElementById('guestbookFeed');
  if (!feed) return;

  const storedDuas = JSON.parse(localStorage.getItem('wedding_duas') || '[]');
  storedDuas.unshift(duaObj);
  localStorage.setItem('wedding_duas', JSON.stringify(storedDuas));

  feed.prepend(createDuaElement(duaObj));
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

/* ==========================================================================
   10. SOCIAL SHARING & COPY LINK
   ========================================================================== */
function initShareTools() {
  const whatsappShareBtn = document.getElementById('shareWhatsAppBtn');
  const copyBtn = document.getElementById('copyLinkBtn');
  const copyText = document.getElementById('copyLinkText');

  if (whatsappShareBtn) {
    whatsappShareBtn.addEventListener('click', () => {
      const shareUrl = window.location.href;
      const msg = `🌙 *Bismillahir Rahmanir Raheem*%0A%0AWe cordially invite you to celebrate the wedding union of *Shahid Shaikh* (S/o Amiruddin Shaikh) & *Iqra Shaikh* (D/o Mustafa Shaikh).%0A%0A📍 *Shaadi (25 Nov):* Kinjal Wedding Lawn, Mumbra%0A📍 *Walima (27 Nov):* Goawala Compound, Kurla%0A%0AView the invitation here: ${encodeURIComponent(shareUrl)}`;
      window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        if (copyText) {
          copyText.innerText = "Link Copied!";
          setTimeout(() => {
            copyText.innerText = "Copy Link";
          }, 2500);
        }
      });
    });
  }
}
