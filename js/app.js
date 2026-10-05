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

// Wedding Festivities Events Schedule (November 23, 24, 25, 27, 2026 - IST)
const WEDDING_EVENTS = [
  { id: 'mehndi', name: 'Mayun & Mehndi Ceremony', date: '2026-11-23T19:00:00+05:30', titleKey: 'title_mehndi', title: 'MAYUN & MEHNDI (23rd NOV)' },
  { id: 'haldi', name: 'Haldi & Ubtan Ceremony', date: '2026-11-24T16:00:00+05:30', titleKey: 'title_haldi', title: 'HALDI CEREMONY (24th NOV)' },
  { id: 'nikkah', name: 'Sacred Nikkah & Barat', date: '2026-11-25T19:00:00+05:30', titleKey: 'title_shaadi', title: 'SACRED NIKKAH (25th NOV)' },
  { id: 'walima', name: 'Grand Wedding Reception (Walima)', date: '2026-11-27T20:00:00+05:30', titleKey: 'title_walima', title: 'GRAND WEDDING (27th NOV)' }
];

// Default start event is Mayun & Mehndi on 23rd Nov 2026 19:00:00 IST
const WEDDING_DATE = new Date(WEDDING_EVENTS[0].date).getTime();

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
    tap_open_hint: "Tap Seal to Open Invitation",
    bismillah_trans: '"In the name of Allah, the Most Gracious, the Most Merciful"',
    quran_ayah: '"And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them; and He has put love and mercy between your hearts."',
    groom_name: "Shaikh Shahid",
    bride_name: "Shaikh Iqra",
    groom_urdu: "شیخ شاہد",
    bride_urdu: "شیخ اقراء",
    covenant_sub: "In a sacred covenant of love, faith & togetherness",
    countdown_title: "LIVE COUNTDOWN TO WEDDING (25th NOV 2026)",
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
    desc_ceremonies: "Join us in each sacred chapter of our celebrations with live GPS locations",
    
    // Ceremony 1: Mehndi
    badge_mehndi: "Mayun & Mehndi (23rd Nov)",
    title_mehndi: "Mayun & Mehndi Ceremony",
    sub_mehndi: "An evening of vibrant henna, auspicious duas & festive melodies",
    date_mehndi: "Monday, 23rd November 2026",
    time_mehndi: "07:00 PM Onwards",
    itin_mehndi_title: "Mayun & Mehndi Ceremony",
    itin_mehndi_desc: "Henna rituals, traditional Geet, and celebratory dinner at Shaikh Courtyard, Mumbra.",

    // Ceremony 2: Haldi
    badge_haldi: "Haldi Ceremony (24th Nov)",
    title_haldi: "Auspicious Haldi & Ubtan",
    sub_haldi: "Blessing the couple with warmth, affection & radiant yellow hues",
    date_haldi: "Tuesday, 24th November 2026",
    time_haldi: "04:00 PM (Asr) Onwards",
    itin_haldi_title: "Auspicious Haldi & Ubtan",
    itin_haldi_desc: "Sacred turmeric rituals surrounded by loved ones at Shaikh Villa Lawn, Kurla West.",

    // Ceremony 3: Nikkah
    badge_shaadi: "Sacred Nikkah (25th Nov)",
    title_shaadi: "Wedding Ceremony & Barat",
    sub_shaadi: "The Sacred Nikkah Covenant & Grand Barat Banquet",
    date_shaadi: "Wednesday, 25th November 2026",
    time_shaadi: "Nikkah: 07:00 PM (After Maghrib)",
    dinner_shaadi: "Barat Reception & Dinner at 08:00 PM",
    itin_shaadi_title: "Grand Shaadi, Nikkah & Barat",
    itin_shaadi_desc: "Solemn Nikkah covenant after Maghrib (07:00 PM) followed by Barat reception at Kinjal Wedding Lawn, Mumbra.",

    // Ceremony 4: Walima
    badge_walima: "Grand Wedding (27th Nov)",
    title_walima: "Grand Wedding Reception & Walima",
    sub_walima: "The Grand Sunnah Feast Hosted by Shahid's Family",
    date_walima: "Friday, 27th November 2026",
    time_walima: "08:00 PM Onwards",
    dinner_walima: "Shahi Dastarkhwan Served at 09:00 PM",
    itin_walima_title: "Grand Wedding Reception & Walima",
    itin_walima_desc: "Sunnah Walima banquet and Shahi Dastarkhwan at Gazebo Marriage Hall, Goawala Compound, Kurla West (Mumbai).",

    btn_maps: "Live GPS Directions",
    btn_add_cal: "Add to Calendar",
    badge_highlights: "Event Schedule",
    heading_itinerary: "Detailed Itinerary",
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
    heading_duas: "Send Your Dua & Blessings",
    desc_duas: "Share your prayers, heartfelt wishes, and love directly with Shahid & Iqra",
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
    techies_tag: "CRAFTED WITH CODE & LOVE",
    techies_heading: "Designed & Developed by the Techies Couple",
    techies_sub: "Full-Stack Passion • Infinite Barakah • Forever Together",
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
    tap_open_hint: "کھولنے کے لیے مہر پر کلک کریں",
    bismillah_trans: '"شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے"',
    quran_ayah: '"اور اُس کی نشانیوں میں سے ہے کہ اُس نے تمہارے لیے تمہاری ہی جنس سے جوڑے بنائے تاکہ تم اُن سے سکون پاؤ، اور تمہارے درمیان محبت اور رحمت پیدا کردی۔"',
    cordial_invite: "دونوں خاندان آپ کو اس بابرکت تقریب میں شرکت کی صمیمِ قلب سے دعوت دیتے ہیں",
    groom_name: "شیخ شاہد",
    bride_name: "شیخ اقراء",
    groom_urdu: "شیخ شاہد",
    bride_urdu: "شیخ اقراء",
    covenant_sub: "محبت، ایمان اور اخلاص کے مقدس بندھن میں",
    countdown_title: "شادی مبارک کی لائیو الٹی گنتی (25 نومبر 2026)",
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

    badge_mehndi: "مایوں اور مہندی (23 نومبر)",
    title_mehndi: "تقریبِ مایوں و مہندی",
    sub_mehndi: "حنا بندی اور روایتی دعائیہ محفل",
    date_mehndi: "پیر، 23 نومبر 2026",
    time_mehndi: "شام 07:00 بجے سے",
    itin_mehndi_title: "تقریبِ مایوں و مہندی",
    itin_mehndi_desc: "حنا بندی، روایتی گیت اور خاندانی ضیافت، شیخ صحن، ممبرا۔",

    badge_haldi: "رسمِ ہلدی و ابٹن (24 نومبر)",
    title_haldi: "رسمِ ہلدی و ابٹن",
    sub_haldi: "محبت، شفقت اور مسرت کی پرنور رسم",
    date_haldi: "منگل، 24 نومبر 2026",
    time_haldi: "شام 04:00 بجے سے",
    itin_haldi_title: "رسمِ ہلدی و ابٹن",
    itin_haldi_desc: "عزیز و اقارب کے ہمراہ ہلدی اور ابٹن کی بابرکت رسم، کرلا ویسٹ۔",

    badge_shaadi: "عقدِ نکاح و بارات (25 نومبر)",
    title_shaadi: "مبارک تقریبِ عقد و بارات",
    sub_shaadi: "مقدس نکاح اور پروقار دعوتِ طعام",
    date_shaadi: "بدھ، 25 نومبر 2026",
    time_shaadi: "نکاح: بعد نمازِ مغرب، شام 07:00 بجے",
    dinner_shaadi: "استقبالیہ و طعام: رات 08:00 بجے",
    itin_shaadi_title: "شادی، نکاح و بارات استقبالیہ",
    itin_shaadi_desc: "کنجل ویڈنگ لان، ممبرا (تھانے) میں بعد نمازِ مغرب (شام 07:00 بجے) پروقار تقریب اور ضیافت۔",

    badge_walima: "سنتِ ولیمہ (27 نومبر)",
    title_walima: "دعوتِ ولیمہ",
    sub_walima: "دولہا کے خاندان کی جانب سے پروقار ضیافت",
    date_walima: "جمعہ، 27 نومبر 2026",
    time_walima: "رات 08:00 بجے سے",
    dinner_walima: "شاہی دسترخوان: رات 09:00 بجے",
    itin_walima_title: "شاندار دعوتِ ولیمہ ضیافت",
    itin_walima_desc: "گیزیبو میرج ہال (گووالا کمپاؤنڈ)، کرلا ویسٹ (ممبئی) میں سنتِ ولیمہ کی پرشکوہ دعوت۔",

    btn_maps: "لائیو جی پی ایس رہنمائی",
    btn_add_cal: "کیلنڈر میں شامل کریں",
    badge_highlights: "پروگرام کی جھلکیاں",
    heading_itinerary: "مکمل پروگرام",
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
    heading_duas: "دعائیہ پیغامات و برکات",
    desc_duas: "شاہد اور اقراء کے لیے اپنے دلی دعائیہ پیغامات ارسال کریں",
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
    techies_tag: "محبت اور کوڈنگ سے تیار کردہ",
    techies_heading: "ٹیکی جوڑے (شاہد اور اقراء) کی جانب سے ڈیزائن اور ڈیولپ کردہ",
    techies_sub: "ٹیکنالوجی کا شوق • لامتناہی برکت • ہمیشہ کے لیے ایک ساتھ",
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
    tap_open_hint: "खोलने के लिए सील पर टैप करें",
    bismillah_trans: '"अल्लाह के नाम से, जो परम कृपालु और दयावान है"',
    quran_ayah: '"और उसकी निशानियों में से है कि उसने तुम्हारे लिए तुम्हीं में से जोड़े बनाए ताकि तुम्हें सुकून मिले, और दिलों में प्यार व रहमत पैदा की।"',
    cordial_invite: "दोनों परिवार आपको इस पावन उत्सव में सस्नेह आमंत्रित करते हैं",
    groom_name: "शेख़ शाहिद",
    bride_name: "शेख़ इक़रा",
    groom_urdu: "شیخ شاہد",
    bride_urdu: "شیخ اقراء",
    covenant_sub: "प्रेम, विश्वास और पवित्र वैवाहिक बंधन में",
    countdown_title: "शुभ विवाह की लाइव उलटी गिनती (25 नवंबर 2026)",
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

    badge_mehndi: "मायूं व मेहंदी (23 नवंबर)",
    title_mehndi: "मायूं एवं मेहंदी समारोह",
    sub_mehndi: "रंगारंग मेहंदी व मांगलिक गीतों की शाम",
    date_mehndi: "सोमवार, 23 नवंबर 2026",
    time_mehndi: "शाम 07:00 बजे से",
    itin_mehndi_title: "मायूं एवं मेहंदी समारोह",
    itin_mehndi_desc: "पारंपरिक मेहंदी रस्म व पारिवारिक दावत, शेख प्रांगण, मुंब्रा।",

    badge_haldi: "हल्दी समारोह (24 नवंबर)",
    title_haldi: "हल्दी एवं उबटन रस्म",
    sub_haldi: "हल्दी के पावन रंगों और खुशियों के साथ",
    date_haldi: "मंगलवार, 24 नवंबर 2026",
    time_haldi: "शाम 04:00 बजे से",
    itin_haldi_title: "हल्दी एवं उबटन रस्म",
    itin_haldi_desc: "प्रियजनों के संग हल्दी व उबटन की शुभ रस्म, कुर्ला वेस्ट।",

    badge_shaadi: "पवित्र निकाह (25 नवंबर)",
    title_shaadi: "निकाह व बारात समारोह",
    sub_shaadi: "पवित्र निकाह एवं भव्य दावत",
    date_shaadi: "बुधवार, 25 नवंबर 2026",
    time_shaadi: "निकाह: मगरिब बाद, शाम 07:00 बजे",
    dinner_shaadi: "स्वागत एवं शाही भोज: रात 08:00 बजे",
    itin_shaadi_title: "शादी, निकाह एवं बारात स्वागत",
    itin_shaadi_desc: "किंजल वेडिंग लॉन, मुंब्रा (ठाणे) में मगरिब बाद (शाम 07:00 बजे) भव्य निकाह व दावत।",

    badge_walima: "भव्य विवाह प्रीतिभोज (27 नवंबर)",
    title_walima: "दावत-ए-वलीमा",
    sub_walima: "वर पक्ष की ओर से भव्य प्रीतिभोज",
    date_walima: "शुक्रवार, 27 नवंबर 2026",
    time_walima: "रात्रि 08:00 बजे से",
    dinner_walima: "शाही दावत: रात्रि 09:00 बजे",
    itin_walima_title: "दावत-ए-वलीमा प्रीतिभोज",
    itin_walima_desc: "गज़ीबो मैरिज हॉल (गोवावाला कंपाउंड), कुर्ला वेस्ट (मुंबई) में वलीमा की शानदार दावत।",

    btn_maps: "लाइव जीपीएस दिशा-निर्देश",
    btn_add_cal: "कैलेंडर में जोड़ें",
    badge_highlights: "कार्यक्रम सूची",
    heading_itinerary: "विस्तृत कार्यक्रम",
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
    heading_duas: "दुआ एवं शुभकामनाएँ भेजें",
    desc_duas: "शाहिद और इक़रा के लिए अपनी दिली दुआएँ व शुभकामनाएँ सीधे भेजें",
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
    techies_tag: "कोड और स्नेह से निर्मित",
    techies_heading: "टेकीज़ कपल (शाहिद एवं इक़रा) द्वारा सस्नेह डिज़ाइन व डेवलप किया गया",
    techies_sub: "समर्पण व तकनीक • असीम बरकत • सदा के लिए संग",
    mabrook_btn: "मुबारकबाद! 🌸"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initVIPGuest();
  initGatefoldOpening();
  initMobileNav();
  // Screen 3D tilt removed per user request for a completely calm, stable screen
  initPetalShower();
  initAudioPlaylist();
  initLanguageSwitcher();
  initViewEventsButton();
  initCalendarModal();
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

    const tapPrompt = document.getElementById('cardTapPrompt');

    const handleOpen = (e) => {
      if (gatefoldCard.classList.contains('open')) {
        return;
      }
      if (e) {
        e.stopPropagation();
      }

      // Step 1: Trigger Wax Seal Stamping and Golden Sparks
      if (cardSeal) {
        cardSeal.classList.add('stamping');
        triggerSealBurst();
        playCelebrationChime();
      }

      // Immediately initiate ambient audio in user gesture context for strict browser autoplay policies
      if (typeof playAmbientTrack === 'function') {
        playAmbientTrack('oud', { fadeIn: true });
      }

      if (tapPrompt) {
        tapPrompt.style.opacity = '0';
        setTimeout(() => {
          tapPrompt.style.display = 'none';
        }, 300);
      }

      // Step 2: Smoothly swing open the doors with majestic, unhurried pacing
      setTimeout(() => {
        gatefoldCard.classList.remove('closed');
        gatefoldCard.classList.add('open');

        document.body.classList.remove('card-closed-state');
        document.body.classList.add('card-opened-state');
        window.scrollTo(0, 0);
      }, 500);
    };

    if (cardSeal) cardSeal.addEventListener('click', handleOpen);
    if (doorLeft) doorLeft.addEventListener('click', handleOpen);
    if (doorRight) doorRight.addEventListener('click', handleOpen);
    if (tapPrompt) tapPrompt.addEventListener('click', handleOpen);
    
    // Also allow tapping anywhere on closed card flap to open
    gatefoldCard.addEventListener('click', (e) => {
      if (!gatefoldCard.classList.contains('open')) {
        handleOpen(e);
      }
    });
  }
}

/* ==========================================================================
   1.1 MOBILE NAVIGATION DRAWER & LINKS
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileNavDrawer');
  const backdrop = document.getElementById('mobileDrawerBackdrop');
  const closeBtn = document.getElementById('mobileDrawerClose');
  const drawerLinks = document.querySelectorAll('.mobile-drawer-link');
  const langChips = document.querySelectorAll('.mobile-lang-chip');

  if (!toggleBtn || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add('active');
    backdrop?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('active');
    backdrop?.classList.remove('active');
    if (!document.body.classList.contains('card-closed-state')) {
      document.body.style.overflow = '';
    }
  };

  toggleBtn.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  langChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const lang = chip.dataset.lang;
      setLanguage(lang);
      langChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      
      const desktopItems = document.querySelectorAll('.lang-item');
      desktopItems.forEach(item => {
        if (item.dataset.lang === lang) item.classList.add('active');
        else item.classList.remove('active');
      });

      const currentLangLabel = document.getElementById('currentLangLabel');
      if (currentLangLabel) {
        if (lang === 'en') currentLangLabel.innerText = "English";
        else if (lang === 'ur') currentLangLabel.innerText = "اردو";
        else currentLangLabel.innerText = "हिंदी";
      }
    });
  });
}

/* ==========================================================================
   2. SCREEN STABILITY (3D Screen Tilt & Gyroscope Removed)
   ========================================================================== */
function init3DTilt() {
  const card = document.getElementById('gatefoldCard');
  if (card) {
    card.style.transform = 'none';
  }
}

/* ==========================================================================
   3. VIRTUAL ROSE PETAL SHOWER & CELEBRATION CHIME ENGINE
   ========================================================================== */
let petalCanvas, petalCtx, petals = [], petalAnimId = null;
let ambientPetalTimer = null;
let ambientBlessingTimer = null;

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
    mabrookBtn.addEventListener('click', (e) => {
      triggerMabrookShower();
      spawnFloatingBadge('Mabrook! 🌸', mabrookBtn);
    });
  }

  // Start continuous ongoing ambient rose petals (every 2-3 seconds automatically)
  startAmbientPetalDrift();
}

function startAmbientPetalDrift() {
  if (ambientPetalTimer) return;

  // 1. Ongoing ambient royal rose petals, blossom balls & gold stardust drift every 2.4 seconds
  ambientPetalTimer = setInterval(() => {
    if (document.hidden || petals.length > 70) return;

    // Spawn gentle mix of both authentic rose petals, glowing blossom balls, and golden stardust
    const count = 2 + Math.floor(Math.random() * 2);
    for (let i = 0; i < count; i++) {
      const r = Math.random();
      let pType;
      if (r < 0.22) {
        pType = 'sparkle';
      } else if (r < 0.60) {
        pType = 'petal'; // Real organic rose petal
      } else {
        pType = 'ball';  // Luminous 3D pink blossom ball from user screenshot
      }

      const isBlush = Math.random() < 0.52;
      petals.push({
        type: pType,
        x: Math.random() * (petalCanvas.width || window.innerWidth),
        y: -18 - Math.random() * 30,
        size: pType === 'sparkle' ? (6 + Math.random() * 6) : (pType === 'ball' ? (14 + Math.random() * 11) : (16 + Math.random() * 13)),
        speedY: pType === 'sparkle' ? (0.8 + Math.random() * 0.9) : (pType === 'ball' ? (1.0 + Math.random() * 1.2) : (1.1 + Math.random() * 1.4)),
        speedX: -1.2 + Math.random() * 2.4,
        swayPhase: Math.random() * Math.PI * 2,
        rotation: Math.random() * 360,
        rotSpeed: -1.6 + Math.random() * 3.2,
        isBlush: isBlush,
        color: pType === 'sparkle' ? '#ffd700' : (isBlush ? '#e27387' : '#9c1c28'),
        color2: pType === 'sparkle' ? '#fff3a8' : (isBlush ? '#f8bbd0' : '#c2273b'),
        colorLight: isBlush ? '#ffe4e9' : '#ef9a9a',
        colorDark: isBlush ? '#ad1457' : '#6a0a14',
        colorEdge: pType === 'sparkle' ? '#ffffff' : (isBlush ? '#ffb6c1' : 'rgba(232, 200, 120, 0.7)'),
        opacity: pType === 'sparkle' ? 0.95 : (0.88 + Math.random() * 0.1),
        twinklePhase: Math.random() * Math.PI * 2
      });
    }

    if (!petalAnimId) {
      animatePetals();
    }
  }, 2400);

  // 2. Gentle floating blessing badge rising from the button every 4.8 seconds
  startFloatingBlessingTags();
}

function startFloatingBlessingTags() {
  if (ambientBlessingTimer) return;
  const BLESSINGS = ['Mabrook! 🌸', 'BarakAllah! ✨', 'Ameen! 🤲', 'Shahid & Iqra 💖', 'Mubarak! 🎉'];
  let bIdx = 0;

  ambientBlessingTimer = setInterval(() => {
    if (document.hidden) return;
    const mabrookBtn = document.getElementById('mabrookBtn');
    if (!mabrookBtn) return;

    spawnFloatingBadge(BLESSINGS[bIdx % BLESSINGS.length], mabrookBtn);
    bIdx++;
  }, 4800);
}

function spawnFloatingBadge(text, targetEl) {
  try {
    const badge = document.createElement('div');
    badge.className = 'ambient-floating-badge';
    badge.innerText = text;

    const rect = targetEl.getBoundingClientRect();
    badge.style.left = `${rect.left + rect.width / 2}px`;
    badge.style.top = `${rect.top - 10}px`;

    document.body.appendChild(badge);
    setTimeout(() => {
      badge.remove();
    }, 2800);
  } catch (err) {}
}

function triggerMabrookShower() {
  playCelebrationChime();
  
  // Grand festive burst shower with both realistic rose petals, 3D blossom balls & golden stars
  for (let i = 0; i < 65; i++) {
    const r = Math.random();
    let pType;
    if (r < 0.24) pType = 'sparkle';
    else if (r < 0.62) pType = 'petal';
    else pType = 'ball';

    const isBlush = Math.random() < 0.52;
    petals.push({
      type: pType,
      x: Math.random() * (petalCanvas.width || window.innerWidth),
      y: -20 - Math.random() * 200,
      size: pType === 'sparkle' ? (7 + Math.random() * 8) : (pType === 'ball' ? (15 + Math.random() * 12) : (18 + Math.random() * 14)),
      speedY: 2.2 + Math.random() * 3.4,
      speedX: -2.0 + Math.random() * 4.0,
      swayPhase: Math.random() * Math.PI * 2,
      rotation: Math.random() * 360,
      rotSpeed: -2.6 + Math.random() * 5.2,
      isBlush: isBlush,
      color: pType === 'sparkle' ? '#ffd700' : (isBlush ? '#e27387' : '#9c1c28'),
      color2: pType === 'sparkle' ? '#fff3a8' : (isBlush ? '#f8bbd0' : '#c2273b'),
      colorLight: isBlush ? '#ffe4e9' : '#ef9a9a',
      colorDark: isBlush ? '#ad1457' : '#6a0a14',
      colorEdge: pType === 'sparkle' ? '#ffffff' : (isBlush ? '#ffb6c1' : 'rgba(232, 200, 120, 0.7)'),
      opacity: 0.95,
      twinklePhase: Math.random() * Math.PI * 2
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
    p.x += Math.sin(p.y * 0.015 + (p.swayPhase || 0)) * p.speedX;
    p.rotation += p.rotSpeed;
    if (p.twinklePhase !== undefined) p.twinklePhase += 0.08;

    petalCtx.save();
    petalCtx.translate(p.x, p.y);
    petalCtx.rotate((p.rotation * Math.PI) / 180);

    if (p.type === 'sparkle') {
      // 1. Royal 4-Point Golden Diamond Sparkle Star (✦)
      const tw = Math.sin(p.twinklePhase || 0);
      const alpha = Math.max(0.25, p.opacity * (0.7 + 0.3 * tw));
      petalCtx.globalAlpha = alpha;
      petalCtx.fillStyle = p.color;
      petalCtx.shadowColor = '#ffd700';
      petalCtx.shadowBlur = 7;
      const s = p.size;
      petalCtx.beginPath();
      petalCtx.moveTo(0, -s);
      petalCtx.quadraticCurveTo(0, 0, s * 0.7, 0);
      petalCtx.quadraticCurveTo(0, 0, 0, s);
      petalCtx.quadraticCurveTo(0, 0, -s * 0.7, 0);
      petalCtx.quadraticCurveTo(0, 0, 0, -s);
      petalCtx.fill();
    } else if (p.type === 'ball') {
      // 2. Luminous 3D Blossom Ball / Pearl Orb (user's screenshot)
      petalCtx.globalAlpha = p.opacity;
      const bw = p.size * 0.65;
      const bh = p.size;
      const grad = petalCtx.createRadialGradient(-bw * 0.25, -bh * 0.25, 1, 0, 0, bh * 0.85);
      grad.addColorStop(0, '#ffebee');
      grad.addColorStop(0.3, p.color2 || '#f4a4b2');
      grad.addColorStop(0.75, p.color || '#e27387');
      grad.addColorStop(1, p.colorDark || '#880e4f');
      petalCtx.fillStyle = grad;
      petalCtx.beginPath();
      petalCtx.moveTo(0, -bh * 0.55);
      petalCtx.bezierCurveTo(bw * 1.1, -bh * 0.35, bw * 0.9, bh * 0.35, 0, bh * 0.55);
      petalCtx.bezierCurveTo(-bw * 0.9, bh * 0.35, -bw * 1.1, -bh * 0.35, 0, -bh * 0.55);
      petalCtx.fill();
    } else {
      // 3. Authentic Curled Natural Rose Petal (with soft top notch, curved lobes, and delicate vein)
      petalCtx.globalAlpha = p.opacity;
      const pw = p.size * 0.8;
      const ph = p.size * 1.12;

      const petalGrad = petalCtx.createLinearGradient(0, -ph * 0.5, 0, ph * 0.55);
      petalGrad.addColorStop(0, p.colorLight || '#ffcdd2');
      petalGrad.addColorStop(0.28, p.color || '#c2185b');
      petalGrad.addColorStop(0.85, p.colorDark || '#700914');
      petalGrad.addColorStop(1, '#3e040a');
      petalCtx.fillStyle = petalGrad;

      petalCtx.beginPath();
      petalCtx.moveTo(0, -ph * 0.38);
      petalCtx.bezierCurveTo(pw * 0.6, -ph * 0.6, pw * 1.25, -ph * 0.12, pw * 0.82, ph * 0.22);
      petalCtx.bezierCurveTo(pw * 0.45, ph * 0.44, pw * 0.18, ph * 0.54, 0, ph * 0.58);
      petalCtx.bezierCurveTo(-pw * 0.18, ph * 0.54, -pw * 0.45, ph * 0.44, -pw * 0.82, ph * 0.22);
      petalCtx.bezierCurveTo(-pw * 1.25, -ph * 0.12, -pw * 0.6, -ph * 0.6, 0, -ph * 0.38);
      petalCtx.fill();

      // Soft natural central vein highlight
      petalCtx.strokeStyle = 'rgba(255, 235, 240, 0.32)';
      petalCtx.lineWidth = 1;
      petalCtx.beginPath();
      petalCtx.moveTo(0, ph * 0.5);
      petalCtx.quadraticCurveTo(pw * 0.08, 0, 0, -ph * 0.22);
      petalCtx.stroke();
    }

    petalCtx.restore();

    if (p.y > petalCanvas.height + 60) {
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
   4. AMBIENT AUDIO PLAYLIST & OUD MUSIC CONTROLLER
   ========================================================================== */
let isMusicPlaying = false;
let audioCtx = null;
let masterGain = null;
let activeOscillators = [];
let audioFadeInterval = null;

function initAudioPlaylist() {
  const toggleBtn = document.getElementById('audioToggleBtn');
  const bgAudio = document.getElementById('weddingBgAudio');

  // Wire up audio element events for synchronization & fallback
  if (bgAudio) {
    // Ensure element starts configured
    bgAudio.loop = true;
    bgAudio.volume = 0.55;

    // If initial source fails to load, gracefully fallback to CDN / Wikimedia mirror
    bgAudio.addEventListener('error', () => {
      console.warn("Primary oud audio encountered an error, switching to backup stream...");
      if (!bgAudio.src.includes('wikimedia.org')) {
        bgAudio.src = 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Oud_music_by_Andy_R._Jordan_1V2_long.mp3';
        bgAudio.load();
        if (isMusicPlaying) {
          bgAudio.play().catch(e => console.warn("Fallback playback error:", e));
        }
      }
    });

    // Synchronize UI state when audio naturally plays or pauses
    bgAudio.addEventListener('play', () => {
      isMusicPlaying = true;
      updateAudioPill(true);
    });

    bgAudio.addEventListener('pause', () => {
      if (!masterGain) {
        isMusicPlaying = false;
        updateAudioPill(false);
      }
    });
  }

  // Smooth fade-in helper for an elegant musical entrance
  function fadeInAudio(targetVolume = 0.55, durationMs = 1200) {
    if (!bgAudio) return;
    if (audioFadeInterval) clearInterval(audioFadeInterval);
    bgAudio.volume = 0.05;
    const stepTime = 50;
    const steps = durationMs / stepTime;
    const volIncrement = (targetVolume - 0.05) / steps;
    audioFadeInterval = setInterval(() => {
      if (!bgAudio || !isMusicPlaying) {
        clearInterval(audioFadeInterval);
        audioFadeInterval = null;
        return;
      }
      if (bgAudio.volume + volIncrement >= targetVolume) {
        bgAudio.volume = targetVolume;
        clearInterval(audioFadeInterval);
        audioFadeInterval = null;
      } else {
        bgAudio.volume += volIncrement;
      }
    }, stepTime);
  }

  // Fallback unlock listener in case mobile browser delayed user gesture token
  let tapUnlockBound = false;
  function armTapToPlay() {
    if (tapUnlockBound) return;
    tapUnlockBound = true;
    const unlockOnGesture = () => {
      const gatefoldCard = document.getElementById('gatefoldCard');
      if (!isMusicPlaying && gatefoldCard && gatefoldCard.classList.contains('open')) {
        playMusic();
      }
      document.removeEventListener('click', unlockOnGesture);
      document.removeEventListener('touchstart', unlockOnGesture);
      tapUnlockBound = false;
    };
    document.addEventListener('click', unlockOnGesture, { once: true });
    document.addEventListener('touchstart', unlockOnGesture, { once: true });
  }

  function playMusic(trackType = 'oud', options = {}) {
    stopSynthTrack();

    if (bgAudio) {
      if (options.fadeIn) {
        bgAudio.volume = 0.05;
      } else {
        bgAudio.volume = 0.55;
      }

      // Ensure audio source points to local oud track first
      if (!bgAudio.src || bgAudio.src === '' || bgAudio.src === window.location.href) {
        bgAudio.src = 'audio/oud_track.mp3';
      }

      const promise = bgAudio.play();
      if (promise !== undefined) {
        promise.then(() => {
          isMusicPlaying = true;
          updateAudioPill(true);
          if (options.fadeIn) {
            fadeInAudio(0.55, 1200);
          }
        }).catch((err) => {
          console.warn("HTML5 audio playback blocked or waiting for user gesture:", err);
          if (err.name === 'NotAllowedError') {
            // Autoplay blocked by browser policy: arm gesture listener to resume seamlessly on next tap
            isMusicPlaying = false;
            updateAudioPill(false);
            armTapToPlay();
          } else {
            // Decoding or network issue: try remote mirror
            if (!bgAudio.src.includes('wikimedia.org')) {
              bgAudio.src = 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Oud_music_by_Andy_R._Jordan_1V2_long.mp3';
              bgAudio.load();
              bgAudio.play().then(() => {
                isMusicPlaying = true;
                updateAudioPill(true);
              }).catch(() => {
                playSynthTrack('oud');
                isMusicPlaying = true;
                updateAudioPill(true);
              });
            } else {
              playSynthTrack('oud');
              isMusicPlaying = true;
              updateAudioPill(true);
            }
          }
        });
      }
    } else {
      playSynthTrack('oud');
      isMusicPlaying = true;
      updateAudioPill(true);
    }
  }

  function pauseMusic() {
    if (audioFadeInterval) {
      clearInterval(audioFadeInterval);
      audioFadeInterval = null;
    }
    if (bgAudio) {
      try { bgAudio.pause(); } catch(e){}
    }
    stopSynthTrack();
    isMusicPlaying = false;
    updateAudioPill(false);
  }

  function toggleMusic() {
    if (isMusicPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  }

  // 1-Tap on the Pill toggles Play / Mute directly!
  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMusic();
    });
  }

  // Make globally available
  window.playAmbientTrack = playMusic;
  window.stopAmbientTrack = pauseMusic;
}

function playSynthTrack(type) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    stopSynthTrack();

    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 1.5);
    masterGain.connect(audioCtx.destination);

    let frequencies = [];
    if (type === 'oud') {
      frequencies = [146.83, 220.00, 293.66, 349.23, 440.00];
    } else if (type === 'nasheed') {
      frequencies = [174.61, 261.63, 329.63, 392.00, 523.25];
    } else {
      frequencies = [130.81, 196.00, 261.63, 329.63, 392.00];
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

      oscGain.gain.value = 0.12 / frequencies.length;
      osc.connect(oscGain);
      oscGain.connect(masterGain);
      osc.start();
      return osc;
    });
  } catch (e) {
    console.log("Synth audio waiting:", e);
  }
}

function stopSynthTrack() {
  if (masterGain && audioCtx) {
    try {
      masterGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.3);
    } catch(e){}
    setTimeout(() => {
      activeOscillators.forEach(osc => {
        try { osc.stop(); } catch(e){}
      });
      activeOscillators = [];
    }, 350);
  }
}

function updateAudioPill(isPlaying) {
  const toggleBtn = document.getElementById('audioToggleBtn');
  const label = document.getElementById('audioLabel');
  const icon = document.getElementById('audioIcon');
  const wave = document.getElementById('audioWave');

  if (isPlaying) {
    toggleBtn?.classList.remove('muted');
    toggleBtn?.classList.add('playing');
    if (wave) wave.classList.add('active');
    if (icon) icon.className = 'fa-solid fa-volume-high';
    if (label) label.innerText = "Sound";
  } else {
    toggleBtn?.classList.add('muted');
    toggleBtn?.classList.remove('playing');
    if (wave) wave.classList.remove('active');
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

  // Sync mobile drawer chips
  const langChips = document.querySelectorAll('.mobile-lang-chip');
  langChips.forEach(chip => {
    if (chip.dataset.lang === lang) chip.classList.add('active');
    else chip.classList.remove('active');
  });

  // Sync desktop dropdown items
  const desktopItems = document.querySelectorAll('.lang-item');
  desktopItems.forEach(item => {
    if (item.dataset.lang === lang) item.classList.add('active');
    else item.classList.remove('active');
  });

  const currentLangLabel = document.getElementById('currentLangLabel');
  if (currentLangLabel) {
    if (lang === 'en') currentLangLabel.innerText = "English";
    else if (lang === 'ur') currentLangLabel.innerText = "اردو";
    else currentLangLabel.innerText = "हिंदी";
  }
}

/* ==========================================================================
   5.1 SMOOTH SCROLL TO CEREMONIES & VENUES
   ========================================================================== */
function initViewEventsButton() {
  const viewBtn = document.getElementById('viewEventsBtn');
  if (viewBtn) {
    viewBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const eventsSection = document.getElementById('events');
      if (eventsSection) {
        const navHeight = document.querySelector('.luxury-navbar')?.offsetHeight || 70;
        const targetY = eventsSection.getBoundingClientRect().top + window.pageYOffset - navHeight - 15;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    });
  }
}

/* ==========================================================================
   6. 1-CLICK PRINT / DOWNLOAD INVITATION CARD & MODAL
   ========================================================================== */
function initPrintCard() {
  const downloadBtn = document.getElementById('downloadCardBtn');
  const modalBackdrop = document.getElementById('downloadModalBackdrop');
  const closeBtn = document.getElementById('closeDownloadModalBtn');
  const pngBtn = document.getElementById('btnDownloadCardPng');
  const printPdfBtn = document.getElementById('btnPrintCardPdf');

  if (!modalBackdrop) return;

  const openModal = () => {
    modalBackdrop.classList.add('active');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalBackdrop.classList.remove('active');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openModal();
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  if (pngBtn) {
    pngBtn.addEventListener('click', () => {
      generateAndDownloadCardImage();
      closeModal();
    });
  }

  if (printPdfBtn) {
    printPdfBtn.addEventListener('click', () => {
      closeModal();
      setTimeout(() => {
        window.print();
      }, 350);
    });
  }
}

function generateAndDownloadCardImage() {
  const canvas = document.createElement('canvas');
  const width = 1200;
  const height = 1750;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  // Parchment Background
  const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
  bgGrad.addColorStop(0, '#fdfbf7');
  bgGrad.addColorStop(0.3, '#faf5ec');
  bgGrad.addColorStop(0.7, '#f7efe1');
  bgGrad.addColorStop(1, '#f3e5d0');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Outer Gold Border
  ctx.strokeStyle = '#c59b3f';
  ctx.lineWidth = 6;
  ctx.strokeRect(36, 36, width - 72, height - 72);

  // Inner Thin Border
  ctx.strokeStyle = 'rgba(197, 155, 63, 0.45)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(48, 48, width - 96, height - 96);

  // Corner Dots
  const corners = [
    [48, 48],
    [width - 48, 48],
    [48, height - 48],
    [width - 48, height - 48]
  ];
  ctx.fillStyle = '#c59b3f';
  corners.forEach(([cx, cy]) => {
    ctx.beginPath();
    ctx.arc(cx, cy, 6, 0, Math.PI * 2);
    ctx.fill();
  });

  // Arabic Bismillah
  ctx.textAlign = 'center';
  ctx.fillStyle = '#c59b3f';
  ctx.font = 'bold 38px "Amiri", "Traditional Arabic", serif';
  ctx.fillText('بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ ٱلرَّحِيْمِ', width / 2, 130);

  // Translation
  ctx.fillStyle = '#7a6a58';
  ctx.font = 'italic 20px "Cinzel", "Georgia", serif';
  ctx.fillText('"In the name of Allah, the Most Gracious, the Most Merciful"', width / 2, 170);

  // Quran Ayah Box
  ctx.strokeStyle = 'rgba(197, 155, 63, 0.3)';
  ctx.lineWidth = 1;
  ctx.strokeRect(100, 210, width - 200, 160);

  ctx.fillStyle = '#6b1b29';
  ctx.font = 'bold 24px "Amiri", serif';
  ctx.fillText('وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً', width / 2, 260);

  ctx.fillStyle = '#554a40';
  ctx.font = 'italic 18px "Georgia", serif';
  ctx.fillText('"And among His signs is that He created for you mates that you may dwell in tranquility..."', width / 2, 305);
  ctx.fillStyle = '#c59b3f';
  ctx.font = '16px "Cinzel", serif';
  ctx.fillText('— Surah Ar-Rum (30:21) —', width / 2, 340);

  // Invitation Header
  ctx.fillStyle = '#8b263e';
  ctx.font = 'bold 22px "Cinzel", serif';
  ctx.fillText('TOGETHER WITH THEIR FAMILIES', width / 2, 420);

  ctx.fillStyle = '#5c5247';
  ctx.font = '19px "Cinzel", serif';
  ctx.fillText('CORDIALLY INVITE YOU TO CELEBRATE THE SACRED WEDDING OF', width / 2, 455);

  // Monogram Crest
  ctx.beginPath();
  ctx.arc(width / 2, 530, 48, 0, Math.PI * 2);
  ctx.fillStyle = '#6b1b29';
  ctx.fill();
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = '#ffd700';
  ctx.font = 'bold 36px "Cinzel", serif';
  ctx.fillText('S & I', width / 2, 542);

  // Groom Name
  ctx.fillStyle = '#6b1b29';
  ctx.font = 'bold 54px "Cinzel", "Playfair Display", serif';
  ctx.fillText('Shaikh Shahid', width / 2, 640);
  ctx.fillStyle = '#c59b3f';
  ctx.font = 'bold 30px "Amiri", serif';
  ctx.fillText('شیخ شاہد', width / 2, 680);
  ctx.fillStyle = '#7a6a58';
  ctx.font = 'italic 20px "Cinzel", serif';
  ctx.fillText('Son of Mr. Amiruddin Shaikh & Mrs. Shaikh', width / 2, 715);

  // Ampersand
  ctx.fillStyle = '#c59b3f';
  ctx.font = 'bold 44px "Cinzel", serif';
  ctx.fillText('&', width / 2, 775);

  // Bride Name
  ctx.fillStyle = '#6b1b29';
  ctx.font = 'bold 54px "Cinzel", "Playfair Display", serif';
  ctx.fillText('Shaikh Iqra', width / 2, 845);
  ctx.fillStyle = '#c59b3f';
  ctx.font = 'bold 30px "Amiri", serif';
  ctx.fillText('شیخ اقراء', width / 2, 885);
  ctx.fillStyle = '#7a6a58';
  ctx.font = 'italic 20px "Cinzel", serif';
  ctx.fillText('Daughter of Mr. Mustafa Shaikh & Mrs. Shaikh', width / 2, 920);

  // Covenant Subtitle
  ctx.fillStyle = '#8b263e';
  ctx.font = 'italic 22px "Cinzel", serif';
  ctx.fillText('✦ In a sacred covenant of love, faith & barakah ✦', width / 2, 980);

  // Ceremonies Section Container
  const drawEventBox = (y, badge, title, dateTime, venue) => {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
    ctx.fillRect(120, y, width - 240, 195);
    ctx.strokeStyle = '#c59b3f';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(120, y, width - 240, 195);

    // Badge
    ctx.fillStyle = '#6b1b29';
    ctx.fillRect(width / 2 - 140, y - 16, 280, 32);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 15px "Cinzel", serif';
    ctx.fillText(badge, width / 2, y + 6);

    // Title
    ctx.fillStyle = '#6b1b29';
    ctx.font = 'bold 28px "Cinzel", serif';
    ctx.fillText(title, width / 2, y + 62);

    // DateTime
    ctx.fillStyle = '#c59b3f';
    ctx.font = 'bold 21px "Cinzel", serif';
    ctx.fillText(dateTime, width / 2, y + 105);

    // Venue
    ctx.fillStyle = '#443c34';
    ctx.font = '19px "Cinzel", serif';
    ctx.fillText(venue, width / 2, y + 145);
  };

  // Event 1: Sacred Nikkah & Wedding
  drawEventBox(1030, 'MAIN WEDDING CEREMONY', 'Sacred Nikkah & Barat Reception', 'Wednesday, 25th November 2026 • 07:00 PM (After Maghrib)', 'Kinjal Wedding Lawn, Sanjay Nagar, Mumbra (Thane)');

  // Event 2: Dawat-e-Walima
  drawEventBox(1265, 'SUNNAH BANQUET', 'Dawat-e-Walima Banquet', 'Friday, 27th November 2026 • 08:00 PM (IST)', 'Gazebo Marriage Hall, Goawala Compound, Kurla West (Mumbai)');

  // Blessing Footer
  ctx.fillStyle = '#c59b3f';
  ctx.font = 'bold 32px "Amiri", serif';
  ctx.fillText('جَزَاكُمُ اللَّهُ خَيْرًا', width / 2, 1540);

  ctx.fillStyle = '#5c5247';
  ctx.font = 'italic 18px "Cinzel", serif';
  ctx.fillText('Your gracious presence and pious Duas are warmly requested', width / 2, 1585);

  ctx.fillStyle = '#8b263e';
  ctx.font = 'bold 22px "Cinzel", serif';
  ctx.fillText('Shahid & Iqra', width / 2, 1630);

  // Trigger Download
  const link = document.createElement('a');
  link.download = 'Shahid_and_Iqra_Royal_Wedding_Invitation.png';
  link.href = canvas.toDataURL('image/png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* ==========================================================================
   7. LIVE REAL-TIME COUNTDOWN TIMER (Live Counting to 25th Nov 2026 - IST)
   ========================================================================== */
function initCountdown() {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('minutes');
  const secsEl = document.getElementById('seconds');
  const targetTitleEl = document.getElementById('countdownTargetEvent');

  // Indian Standard Time (IST): Sacred Nikkah & Wedding on 25 November 2026, 19:00 IST (+05:30)
  const targetDateIST = new Date("2026-11-25T19:00:00+05:30").getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDateIST - now;

    if (distance <= 0) {
      if (targetTitleEl) targetTitleEl.innerText = "ALHAMDULILLAH! THE SACRED WEDDING HAS ARRIVED";
      if (daysEl) daysEl.innerText = "00";
      if (hoursEl) hoursEl.innerText = "00";
      if (minsEl) minsEl.innerText = "00";
      if (secsEl) secsEl.innerText = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
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
   8. CALENDAR INTEGRATION & MODAL (Apple, Google, Outlook .ics)
   ========================================================================== */
window.addToCalendar = function(eventType) {
  const events = {
    mehndi: {
      title: "Mayun & Mehndi: Shahid & Iqra (23rd Nov)",
      description: "Celebrating the auspicious Mayun & Mehndi henna ceremony of Shahid Shaikh & Iqra Shaikh.",
      location: "Shaikh Residence & Courtyard, Sanjay Nagar, Mumbra, Thane, Maharashtra 400612",
      start: "20261123T190000",
      end: "20261123T233000"
    },
    haldi: {
      title: "Haldi & Ubtan Ceremony: Shahid & Iqra (24th Nov)",
      description: "Auspicious Haldi & Ubtan ceremony blessing Shahid Shaikh & Iqra Shaikh.",
      location: "Shaikh Villa Lawn, Friends Colony, Near Sahara Hotel, Kurla West, Mumbai 400070",
      start: "20261124T160000",
      end: "20261124T200000"
    },
    nikkah: {
      title: "Wedding Ceremony & Nikkah: Shahid & Iqra (25th Nov)",
      description: "Sacred Nikkah covenant after Maghrib (07:00 PM) & Barat banquet of Shahid Shaikh & Iqra Shaikh.",
      location: "Kinjal Wedding Lawn, Babaji Patil Wadi, Opp. MEK Company, Sanjay Nagar, Mumbra, Thane, Maharashtra 400612",
      start: "20261125T190000",
      end: "20261125T233000"
    },
    walima: {
      title: "Grand Wedding Reception (Dawat-e-Walima): Shahid & Iqra (27th Nov)",
      description: "Sunnah Walima banquet hosted by Mr. Amiruddin Shaikh & Family at Gazebo Marriage Hall.",
      location: "Gazebo Marriage Hall, Goawala Compound, LBS Marg, Near Sahara Hotel, Friends Colony, Kurla West, Kurla, Mumbai 400070",
      start: "20261127T200000",
      end: "20261127T235900"
    }
  };

  const ev = events[eventType] || events.nikkah;
  const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(ev.title)}&dates=${ev.start}/${ev.end}&details=${encodeURIComponent(ev.description)}&location=${encodeURIComponent(ev.location)}`;
  
  try {
    const win = window.open(gCalUrl, '_blank');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = gCalUrl;
    }
  } catch(e) {
    window.location.href = gCalUrl;
  }
};

function initCalendarModal() {
  const globalCalBtn = document.getElementById('addToCalGlobalBtn');
  const modalBackdrop = document.getElementById('calendarModalBackdrop');
  const closeBtn = document.getElementById('closeCalModalBtn');
  const downloadIcsBtn = document.getElementById('calDownloadIcsBtn');

  if (!modalBackdrop) return;

  const openModal = () => {
    modalBackdrop.classList.add('active');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalBackdrop.classList.remove('active');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (globalCalBtn) {
    globalCalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openModal();
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  if (downloadIcsBtn) {
    downloadIcsBtn.addEventListener('click', () => {
      downloadWeddingIcs();
      closeModal();
    });
  }
}

function downloadWeddingIcs() {
  const icsData = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Shahid & Iqra Royal Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    // Sacred Nikkah & Wedding (25 Nov 2026)
    'BEGIN:VEVENT',
    'UID:nikkah-20261125-shahid-iqra@wedding.inv',
    'DTSTAMP:20261101T000000Z',
    'DTSTART:20261125T133000Z', // 19:00 IST is 13:30 UTC
    'DTEND:20261125T180000Z',
    'SUMMARY:Sacred Nikkah & Wedding Banquet: Shahid & Iqra',
    'DESCRIPTION:Sacred Nikkah covenant after Maghrib (07:00 PM) & Barat banquet of Shahid Shaikh & Iqra Shaikh. Your presence and pious Duas are warmly requested.',
    'LOCATION:Kinjal Wedding Lawn, Babaji Patil Wadi, Sanjay Nagar, Mumbra, Thane, Maharashtra 400612',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    // Dawat-e-Walima Banquet (27 Nov 2026)
    'BEGIN:VEVENT',
    'UID:walima-20261127-shahid-iqra@wedding.inv',
    'DTSTAMP:20261101T000000Z',
    'DTSTART:20261127T143000Z',
    'DTEND:20261127T183000Z',
    'SUMMARY:Dawat-e-Walima Banquet: Shahid & Iqra',
    'DESCRIPTION:Sunnah Walima banquet hosted by Mr. Amiruddin Shaikh & Family at Gazebo Marriage Hall.',
    'LOCATION:Gazebo Marriage Hall, Goawala Compound, LBS Marg, Friends Colony, Kurla West, Mumbai 400070',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Shahid_and_Iqra_Wedding_Events.ics';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

/* ==========================================================================
   9. DIGITAL DUA GUESTBOOK & SUBMISSION
   ========================================================================== */
let currentGuestbookFilter = 'all';
let currentGuestbookSearch = '';

function initGuestbook() {
  const duaForm = document.getElementById('duaForm');
  const relationInput = document.getElementById('duaRelationSide');
  const msgInput = document.getElementById('duaTextMsg');
  const searchInput = document.getElementById('guestbookSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const filterTabs = document.querySelectorAll('#guestbookFilterTabs .feed-filter-chip');

  // Search input live search
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentGuestbookSearch = e.target.value.trim().toLowerCase();
      if (searchClearBtn) {
        searchClearBtn.style.display = currentGuestbookSearch ? 'flex' : 'none';
      }
      renderGuestbook();
    });
  }

  // Clear search button
  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentGuestbookSearch = '';
      searchClearBtn.style.display = 'none';
      renderGuestbook();
    });
  }

  // Filter tabs (All, Groom, Bride, Friends)
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentGuestbookFilter = tab.dataset.filter || 'all';
      renderGuestbook();
    });
  });

  // Clear all / Reset guestbook button
  const clearFeedBtn = document.getElementById('clearAllDuasBtn');
  if (clearFeedBtn) {
    clearFeedBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear all test messages from the guestbook? Real family blessings can be posted below.')) {
        localStorage.removeItem('wedding_duas');
        renderGuestbook();
      }
    });
  }

  // Trigger test verification email button for Shahid & Iqra
  const testMailBtn = document.getElementById('btnTestMailTrigger');
  if (testMailBtn) {
    testMailBtn.addEventListener('click', () => {
      const origText = testMailBtn.innerHTML;
      testMailBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending Test Notice...';
      
      const testSubject = "Shaikh Shahid & Shaikh Iqra Wedding - Email Notification Test";
      
      // Dispatch Form 1 (Iqra)
      const nf1 = document.getElementById('nativeMailForm');
      if (nf1) {
        const sub1 = document.getElementById('nativeMailSubject');
        const g1 = document.getElementById('nativeMailGuest');
        const s1 = document.getElementById('nativeMailSide');
        const m1 = document.getElementById('nativeMailMsg');
        const d1 = document.getElementById('nativeMailDate');
        if (sub1) sub1.value = testSubject;
        if (g1) g1.value = "Shaikh Shahid & Shaikh Iqra";
        if (s1) s1.value = "Wedding Couple Test Verification";
        if (m1) m1.value = "Assalamu Alaikum! This is a test email verification for your wedding invitation guestbook. Please ensure this sender is marked as Not Spam.";
        if (d1) d1.value = new Date().toLocaleDateString('en-US');
        try { nf1.submit(); } catch(e){}
      }

      // Dispatch Form 2 (Shahid)
      const nf2 = document.getElementById('nativeMailFormShahid');
      if (nf2) {
        const sub2 = document.getElementById('nativeMailSubjectShahid');
        const g2 = document.getElementById('nativeMailGuestShahid');
        const s2 = document.getElementById('nativeMailSideShahid');
        const m2 = document.getElementById('nativeMailMsgShahid');
        const d2 = document.getElementById('nativeMailDateShahid');
        if (sub2) sub2.value = testSubject;
        if (g2) g2.value = "Shaikh Shahid & Shaikh Iqra";
        if (s2) s2.value = "Wedding Couple Test Verification";
        if (m2) m2.value = "Assalamu Alaikum! This is a test email verification for your wedding invitation guestbook. Please ensure this sender is marked as Not Spam.";
        if (d2) d2.value = new Date().toLocaleDateString('en-US');
        setTimeout(() => { try { nf2.submit(); } catch(e){} }, 300);
      }

      // Also trigger background fetch
      try {
        fetch('https://formsubmit.co/ajax/sk.iqra1710@gmail.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            _subject: testSubject,
            _cc: 'shaikshahid570@gmail.com',
            email: 'blessings@shahid-iqra-wedding.com',
            _template: 'box',
            Status: 'Test Activation Verification',
            Notice: 'Please activate FormSubmit by clicking Activate Form in your email.'
          })
        }).catch(() => {});

        fetch('https://formsubmit.co/ajax/shaikshahid570@gmail.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            _subject: testSubject,
            _cc: 'sk.iqra1710@gmail.com',
            email: 'blessings@shahid-iqra-wedding.com',
            _template: 'box',
            Status: 'Test Activation Verification',
            Notice: 'Please activate FormSubmit by clicking Activate Form in your email.'
          })
        }).catch(() => {});
      } catch(e) {}

      setTimeout(() => {
        testMailBtn.innerHTML = '<i class="fa-solid fa-check"></i> Verification Sent!';
        alert("Verification notification dispatched to sk.iqra1710@gmail.com and shaikshahid570@gmail.com!\n\nIMPORTANT FIRST-TIME STEP:\nFormSubmit sends a one-time activation email. Please check your Gmail Inbox AND Spam/Promotions folder for an email from 'FormSubmit' with subject 'Action Required: Activate your FormSubmit endpoint' and click 'Activate Form'. Once activated, all future wedding blessings will arrive in your inboxes instantly!");
        setTimeout(() => { testMailBtn.innerHTML = origText; }, 4000);
      }, 1000);
    });
  }

  renderGuestbook();

  // Form submit with Celebration Petal Shower & Ameen confirmation
  if (duaForm) {
    duaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const senderInput = document.getElementById('duaSenderName');
      const sender = senderInput ? senderInput.value.trim() : '';
      const side = relationInput ? relationInput.value : 'groom';
      const msg = msgInput ? msgInput.value.trim() : '';

      if (sender && msg) {
        const currentDate = new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        });

        addDuaToFeed({
          id: 'dua_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
          name: sender,
          side: side,
          message: msg,
          date: currentDate
        });

        // 1. Submit to local server relay & persistent storage
        try {
          fetch('/api/submit-dua', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              sender: sender,
              side: side,
              msg: msg,
              date: currentDate
            })
          }).then(res => res.json()).then(data => {
            console.log('Dua persisted to server backend:', data);
          }).catch(err => {
            console.log('Server endpoint note:', err);
          });
        } catch(e) {}

        // 2. Prepare clean, noble pre-formatted Email to BOTH Iqra & Shahid
        const sideTitle = side === 'groom' 
          ? "👑 Groom's Family & Friends (Shaikh Shahid)" 
          : (side === 'bride' 
              ? "🌸 Bride's Family & Friends (Shaikh Iqra)" 
              : "🤝 Mutual Friends & Well-Wishers");

        const formattedDateTime = new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }) + ' at ' + new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });

        // Elegant subject line for Gmail inbox
        const royalMailSubject = `🕊️ Wedding Dua from ${sender} (${side === 'groom' ? "Groom's Side" : side === 'bride' ? "Bride's Side" : "Mutual Friends"}) • Shahid & Iqra`;
        
        const mailBody = `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ

Assalamu Alaikum wa Rahmatullahi wa Barakatuh,

═════════════════════════════════════════════════════════
🕊️ ROYAL WEDDING DUA & BLESSING FOR SHAHID & IQRA
═════════════════════════════════════════════════════════

👤 Guest / Family: ${sender}
🤝 Attending With: ${sideTitle}
📅 Date & Time: ${formattedDateTime}

✨ Heartfelt Dua & Blessing:
"${msg}"

🤲 Sunnah Prayer:
"بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ"
(May Allah bless you both, shower His blessings upon you, and unite you both in goodness. Ameen!)

═════════════════════════════════════════════════════════
💍 Sacred Nikkah: Wednesday, 25 Nov 2026 (07:00 PM - After Maghrib) • Kinjal Lawn, Mumbra
👑 Grand Walima: Friday, 27 Nov 2026 (08:00 PM) • Gazebo Marriage Hall, Kurla West
🌐 Digital Invitation: https://6461-iqra.github.io/Wedding-inv/
═════════════════════════════════════════════════════════`;

        // 3. Show elegant royal toast notification (Clean UI/UX - No intrusive box)
        showRoyalToast("Ameen! JazakAllah Khair", `Dua from ${sender} sent to Shahid & Iqra's mail! 🤲✨`);

        // 4. Send structured Royal Table Email via FormSubmit AJAX (JSON)
        // Using Shahid's verified endpoint with CC to Iqra ensures 100% immediate delivery without activation token expiration issues
        try {
          fetch('https://formsubmit.co/ajax/shaikshahid570@gmail.com', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              _subject: royalMailSubject,
              _cc: 'sk.iqra1710@gmail.com',
              _template: 'table',
              _captcha: 'false',
              'Celebration': 'Shaikh Shahid & Shaikh Iqra Wedding Festivities (November 2026)',
              'Guest Name': sender,
              'Attending Side': sideTitle,
              'Heartfelt Dua & Message': msg,
              'Date & Time Received': formattedDateTime,
              'Digital Invitation': 'https://6461-iqra.github.io/Wedding-inv/'
            })
          }).then(res => res.json()).then(data => {
            console.log('FormSubmit delivery result:', data);
          }).catch(err => {
            console.log('AJAX mail notice, attempting fallback native form:', err);
            // 5. Submit fallback native form in hidden iframe ONLY if fetch encounters a network issue
            const nativeForm = document.getElementById('nativeMailForm');
            if (nativeForm) {
              const subEl = document.getElementById('nativeMailSubject');
              const guestEl = document.getElementById('nativeMailGuest');
              const sideEl = document.getElementById('nativeMailSide');
              const msgEl = document.getElementById('nativeMailMsg');
              const dateEl = document.getElementById('nativeMailDate');
              if (subEl) subEl.value = royalMailSubject;
              if (guestEl) guestEl.value = sender;
              if (sideEl) sideEl.value = sideTitle;
              if (msgEl) msgEl.value = msg;
              if (dateEl) dateEl.value = formattedDateTime;
              try { nativeForm.submit(); } catch (e) {}
            }
          });
        } catch (e) {}

        // Trigger celebratory rose petal shower and chime audio!
        if (typeof triggerMabrookShower === 'function') {
          triggerMabrookShower();
        }

        duaForm.reset();
        if (relationInput) relationInput.value = 'groom';

        // Visual confirmation button feedback
        const submitBtn = duaForm.querySelector('button[type="submit"]');
        if (submitBtn) {
          const origHTML = submitBtn.innerHTML;
          submitBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Sent to Couple\'s Mail! ✓';
          submitBtn.style.background = 'linear-gradient(135deg, #1b5e20, #2e7d32)';
          submitBtn.style.borderColor = '#4caf50';
          submitBtn.disabled = true;
          setTimeout(() => {
            submitBtn.innerHTML = origHTML;
            submitBtn.style.background = '';
            submitBtn.style.borderColor = '';
            submitBtn.disabled = false;
          }, 3500);
        }
      }
    });
  }
}

function showRoyalToast(title = "Ameen! JazakAllah Khair", desc = "Your heartfelt Dua has been sent to Shahid & Iqra's mail!") {
  const toast = document.getElementById('royalToast');
  if (!toast) return;

  const titleEl = document.getElementById('royalToastTitle');
  const descEl = document.getElementById('royalToastDesc');
  if (titleEl) titleEl.innerText = title;
  if (descEl) descEl.innerText = desc;

  toast.classList.add('show');

  if (window._royalToastTimer) clearTimeout(window._royalToastTimer);
  window._royalToastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

function renderGuestbook() {
  const feed = document.getElementById('guestbookFeed');
  const wrapper = document.getElementById('guestbookFeedWrapper');
  const controlsBar = document.getElementById('guestbookControlsBar');
  const scrollHint = document.getElementById('guestbookScrollHint');
  const countEl = document.getElementById('totalDuaCount');
  if (!feed) return;

  let storedDuas = JSON.parse(localStorage.getItem('wedding_duas') || '[]');

  // Only remove empty or 1-letter test messages
  storedDuas = storedDuas.filter(item => {
    const m = (item.message || '').trim();
    return m.length >= 2;
  });

  // Assign persistent IDs to any legacy items lacking one
  storedDuas.forEach((d, idx) => {
    if (!d.id) d.id = 'dua_leg_' + idx + '_' + (d.name || '').replace(/\s+/g, '');
  });

  localStorage.setItem('wedding_duas', JSON.stringify(storedDuas));

  if (countEl) {
    countEl.innerText = storedDuas.length;
  }

  feed.innerHTML = '';

  // If no prayers exist at all
  if (storedDuas.length === 0) {
    if (controlsBar) controlsBar.style.display = 'none';
    if (scrollHint) scrollHint.style.display = 'none';
    if (wrapper) wrapper.classList.remove('has-scroll');

    feed.innerHTML = `
      <div class="empty-guestbook-state" id="emptyGuestbookNotice">
        <div class="empty-dua-icon"><i class="fa-solid fa-hands-praying"></i></div>
        <h4>Digital Dua &amp; Guestbook Wall</h4>
        <p>No prayers posted yet. Be the first from the family to send your heartfelt prayers and blessings for Shahid &amp; Iqra below — your message will appear here live!</p>
      </div>
    `;
    return;
  }

  // Show search and filter controls bar when blessings exist
  if (controlsBar) {
    controlsBar.style.display = 'flex';
  }

  // Filter duas by active side filter and search query
  const filteredDuas = storedDuas.filter(item => {
    // 1. Side filter
    if (currentGuestbookFilter !== 'all' && item.side !== currentGuestbookFilter) {
      return false;
    }
    // 2. Search query (matches name, message, or side)
    if (currentGuestbookSearch) {
      const name = (item.name || '').toLowerCase();
      const msg = (item.message || '').toLowerCase();
      const side = (item.side || '').toLowerCase();
      if (!name.includes(currentGuestbookSearch) && !msg.includes(currentGuestbookSearch) && !side.includes(currentGuestbookSearch)) {
        return false;
      }
    }
    return true;
  });

  // Handle empty search results gracefully
  if (filteredDuas.length === 0) {
    if (wrapper) wrapper.classList.remove('has-scroll');
    if (scrollHint) scrollHint.style.display = 'none';

    feed.innerHTML = `
      <div class="empty-search-state">
        <i class="fa-solid fa-filter-circle-xmark"></i>
        <p>No prayers found matching "<strong>${escapeHtml(currentGuestbookSearch || currentGuestbookFilter)}</strong>".</p>
        <button type="button" class="btn-clear-filter" id="resetFilterSearchBtn">Show All Prayers</button>
      </div>
    `;

    const resetBtn = document.getElementById('resetFilterSearchBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        currentGuestbookSearch = '';
        currentGuestbookFilter = 'all';
        const searchInput = document.getElementById('guestbookSearchInput');
        const clearBtn = document.getElementById('searchClearBtn');
        if (searchInput) searchInput.value = '';
        if (clearBtn) clearBtn.style.display = 'none';
        const filterTabs = document.querySelectorAll('#guestbookFilterTabs .feed-filter-chip');
        filterTabs.forEach((c, idx) => {
          if (idx === 0) c.classList.add('active');
          else c.classList.remove('active');
        });
        renderGuestbook();
      });
    }
    return;
  }

  // Enable scroll after 1-2 rows (more than 2 cards)
  if (wrapper) {
    if (filteredDuas.length > 2) {
      wrapper.classList.add('has-scroll');
      if (scrollHint) scrollHint.style.display = 'flex';
    } else {
      wrapper.classList.remove('has-scroll');
      if (scrollHint) scrollHint.style.display = 'none';
    }
  }

  filteredDuas.forEach(item => {
    feed.appendChild(createDuaElement(item));
  });
}

function createDuaElement(item) {
  const card = document.createElement('div');
  card.className = 'dua-card';
  card.dataset.id = item.id;

  let sideBadgeHtml = '';
  if (item.side === 'groom') {
    sideBadgeHtml = '<span class="dua-side-badge groom"><i class="fa-solid fa-crown"></i> Groom\'s Side</span>';
  } else if (item.side === 'bride') {
    sideBadgeHtml = '<span class="dua-side-badge bride"><i class="fa-solid fa-heart"></i> Bride\'s Side</span>';
  } else if (item.side === 'friends') {
    sideBadgeHtml = '<span class="dua-side-badge friends"><i class="fa-solid fa-hand-holding-heart"></i> Family Friends</span>';
  }

  card.innerHTML = `
    <div class="dua-header-flex">
      <div class="dua-sender">${escapeHtml(item.name)}</div>
      <div class="dua-actions-wrap">
        ${sideBadgeHtml}
        <button type="button" class="dua-delete-btn" title="Delete this prayer" aria-label="Delete prayer">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
    <div class="dua-date">${item.date || 'Recent'}</div>
    <p class="dua-text">"${escapeHtml(item.message)}"</p>
  `;

  const delBtn = card.querySelector('.dua-delete-btn');
  if (delBtn) {
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteDuaById(item.id);
    });
  }

  return card;
}

function deleteDuaById(id) {
  let storedDuas = JSON.parse(localStorage.getItem('wedding_duas') || '[]');
  storedDuas = storedDuas.filter(item => item.id !== id);
  localStorage.setItem('wedding_duas', JSON.stringify(storedDuas));
  renderGuestbook();
}

function addDuaToFeed(duaObj) {
  const storedDuas = JSON.parse(localStorage.getItem('wedding_duas') || '[]');
  storedDuas.unshift(duaObj);
  localStorage.setItem('wedding_duas', JSON.stringify(storedDuas));

  // Reset search and filter so the user's newly posted Dua is immediately visible at the top
  currentGuestbookFilter = 'all';
  currentGuestbookSearch = '';
  const searchInput = document.getElementById('guestbookSearchInput');
  const clearBtn = document.getElementById('searchClearBtn');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';

  const filterTabs = document.querySelectorAll('#guestbookFilterTabs .feed-filter-chip');
  filterTabs.forEach((c, idx) => {
    if (idx === 0) c.classList.add('active');
    else c.classList.remove('active');
  });

  renderGuestbook();

  // Scroll to top of feed wrapper and highlight new card
  const feed = document.getElementById('guestbookFeed');
  const firstCard = feed ? feed.querySelector('.dua-card') : null;
  const wrapper = document.getElementById('guestbookFeedWrapper');
  if (wrapper) {
    wrapper.scrollTop = 0;
  }
  if (firstCard) {
    firstCard.classList.add('dua-card-enter');
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

/* ==========================================================================
   10. SOCIAL SHARING & COPY LINK (CORNER BUTTON & NAVBAR)
   ========================================================================== */
function initShareTools() {
  const cornerShareBtn = document.getElementById('cornerShareBtn');
  const navShareBtn = document.getElementById('navShareBtn');
  const mobileDrawerShareBtn = document.getElementById('mobileDrawerShareBtn');

  const shareUrl = window.location.href;
  const whatsappMsg = `🌙 *Bismillahir Rahmanir Raheem*%0A%0AWe cordially invite you to celebrate the wedding festivities of *Shahid Shaikh* (S/o Amiruddin Shaikh) & *Iqra Shaikh* (D/o Mustafa Shaikh):%0A%0A🌿 *Mayun & Mehndi:* Mon, 23 Nov 2026 (07:00 PM)%0A🌼 *Haldi Ceremony:* Tue, 24 Nov 2026 (04:00 PM)%0A💍 *Sacred Nikkah:* Wed, 25 Nov 2026 (07:00 PM - After Maghrib) • Kinjal Wedding Lawn, Mumbra%0A👑 *Grand Wedding Reception (Walima):* Fri, 27 Nov 2026 (08:00 PM) • Gazebo Marriage Hall, Kurla West%0A%0A📍 View Digital Invitation Card & RSVP:%0A${encodeURIComponent(shareUrl)}`;

  function openWhatsApp() {
    window.open(`https://api.whatsapp.com/send?text=${whatsappMsg}`, '_blank');
  }

  // Floating Corner WhatsApp Button (Direct 1-tap WhatsApp Share)
  if (cornerShareBtn) {
    cornerShareBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openWhatsApp();
    });
  }

  // Top Navbar Share Button (Direct 1-tap WhatsApp Share)
  if (navShareBtn) {
    navShareBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openWhatsApp();
    });
  }

  // Mobile Drawer Share Link (Direct 1-tap WhatsApp Share)
  if (mobileDrawerShareBtn) {
    mobileDrawerShareBtn.addEventListener('click', () => {
      const drawer = document.getElementById('mobileNavDrawer');
      if (drawer) drawer.classList.remove('open');
      openWhatsApp();
    });
  }
}
