'use strict';

/* ══ TRANSLATIONS ══ */
const T = {
    en: {
        'nav-purity': 'Purity', 'nav-performance': 'Performance', 'nav-investment': 'Investment', 'nav-supply': 'Supply', 'nav-contact': 'Contact', 'nav-cta': 'Get In Touch',
        'hero-eyebrow': '— MADE IN OMAN . EST . 2024',
        'hero-title': 'The Purest Fuel For<br><em>Precision</em> Ripening.',
        'hero-desc': 'Ripenol™ is a <strong>90% active ethanol</strong> ripening concentrate engineered for maximum yield, clean, residue-free ethylene conversion — zero harmful byproducts for every batch.',
        'hero-btn-primary': 'SECURE YOUR SUPPLY →', 'hero-btn-text': 'HOW IT WORKS ↓', 'hero-btn-res': 'DOWNLOAD RESOURCES ↓',
        'purity-tag': '— 01 — PURITY & SAFETY',
        'purity-title': 'Uncompromising <em>Purity.</em> Unwavering Safety.',
        'purity-desc': 'Not all ripening concentrates are equal. <strong>Ripenol™</strong> is meticulously formulated for precise, clean conversion — safeguarding your produce and your operations.',
        'good-badge': 'RIPENOL™', 'good-h': 'Pure Conversion', 'good-p': 'Specially formulated ethanol converts cleanly into ethylene gas. No residues, no contamination, no byproducts. Your produce and your people are protected at every cycle.',
        'bad-badge': 'UNAUTHORIZED LIQUIDS', 'bad-h': 'Harmful Byproducts', 'bad-p': 'May damage your generator and produce toxic byproducts that compromise your produce and operations. The cost is always greater than any perceived savings.',
        'perf-title': 'Superior Yield. <em>Certified Quality.</em>',
        'perf-desc': 'Maximize ROI. One litre of <strong>Ripenol™</strong> used <strong>Safe-Ripe™</strong> ripening generator converts into 0.314 m³ of pure ethylene gas — sufficient to ripen several loads per cycle. It ensures every batch of fruit ripens perfectly, optimizing consistency and reducing waste.',
        'cost-tag': 'COST-EFFECTIVE CONCENTRATION', 'cost-desc': 'The High Concentration Of Ripenol™ And Efficient Conversion Translate To Lower Operational Costs Per Ripening Cycle, Enhancing Your Profitability.',
        'bar-tag': 'Ethylene Output Comparison', 'bar-lbl-rip': 'Ripenol™', 'bar-lbl-gen': 'Generic',
        'formula': '<strong>0.314 m³ × 1,000,000 ÷ 150 ppm = 2,093 m³ room</strong>',
        'fruits-tag': 'Versatile Fruit Application', 'fruits-desc': 'Ideal For A Wide Range Of Climacteric Fruits, Including:<br>Bananas, Mango, Avocados, Citrus Fruit, Melons, Papayas, Pears, Tomatoes, And Even Tobacco.',
        'chart-title': 'Industry Standard Ripening', 'chart-desc': 'Use The Industry-Standard Banana Color Chart To Achieve Precise, Consistent Ripening From Grade 1 (Green) To Grade 6 (All Yellow).',
        'invest-tag': '— 03 — ESSENTIAL PARTNERSHIP',
        'invest-title': 'Protect Your <em>Investment</em>',
        'invest-desc': 'Ripenol™ is the <strong>exclusive and required</strong> concentrate for use in authenticated <strong>Safe-Ripe™ Ethylene Gas Generators</strong>. This precise pairing is your guarantee of optimal generator performance, validated safety, and most importantly, it <strong>maintains the validity of your equipment warranty</strong>. Using unauthorized liquids can damage the generator\'s catalyst and void your warranty.',
        'supply-desc': 'Available direct through <strong>Al Awalawya Global Trading LLC</strong> and via our expanding worldwide distributor network.',
        'sc-1-h': 'Secure Your Supply', 'sc-1-p': 'Purchase Directly Or Through Our Expanding Worldwide Distributor Network — Reliable, Consistent Supply Wherever You Operate.',
        'sc-2-h': 'Efficient Logistics', 'sc-2-p': 'Non-Pressurized Liquid Concentrate Simplifies International Shipping — No Hazardous Freight Complications Or Pressurized Handling.',
        'sc-3-h': 'Responsible Disposal', 'sc-3-p': 'Triple Rinse Containers Before Recycling Or Disposal. Refer To MSDS For Complete Safety And Handling Instructions.',
        'sct-tag': 'SECURE YOUR EXPORT SUPPLY TODAY.', 'sct-h': 'CONTACT US FOR BULK EXPORT PRICING AND PARTNERSHIP OPPORTUNITIES.', 'sct-cta': 'CONTACT US →',
        'res-tag': '— 05 — RESOURCES', 'res-title': 'Download & <em>Learn More.</em>', 'res-desc': 'Full product knowledge for your operations team, procurement department, or compliance review.',
        'rc-name-en': 'Brochure (English)', 'rc-name-ar': 'تحميل الكتيب (Arabic)', 'rc-name-msds': 'MSDS (Material Safety Data Sheet)',
        'contact-tag': '— 06 — GET IN TOUCH', 'contact-title': 'Reach Us. <em>Grow Together.</em>', 'contact-desc': 'Bulk export pricing, distributor partnerships, or product information — our team responds within 1–2 business days.',
        'ir-1-h': 'Phone', 'ir-2-h': 'Email', 'ir-3-h': 'Address',
        'copy-btn': 'COPY NUMBER',
        'form-tag': 'SEND AN ENQUIRY', 'f-name-lbl': 'FULL NAME', 'f-co-lbl': 'COMPANY', 'f-email-lbl': 'EMAIL ADDRESS', 'f-country-lbl': 'COUNTRY', 'f-msg-lbl': 'MESSAGE',
        'form-note': 'RESPONSES WITHIN 1-2 BUSINESS DAYS', 'form-submit': 'SEND ENQUIRY →',
        'footer-tagline': 'Pure Ethylene Conversion',
        'footer-nav-h': 'Navigate', 'footer-contact-h': 'Contact', 'footer-address-h': 'Address',
        'footer-copy': '© 2026 Al Awalawya Global Trading LLC. All rights reserved.'
    },
    ar: {
        'nav-purity': 'النقاء', 'nav-performance': 'الأداء', 'nav-investment': 'الاستثمار', 'nav-supply': 'الإمداد', 'nav-contact': 'تواصل معنا', 'nav-cta': 'ابدأ الآن',
        'hero-eyebrow': '— صُنع في عُمان . تأسست ٢٠٢٤',
        'hero-title': 'الوقود الأكثر<br>نقاءً لعملية<br><em>إنضاج</em> دقيقة.',
        'hero-desc': 'ريبينول™ مركّز إنضاج يحتوي على <strong>٩٠٪ إيثانول فعّال</strong>، مصمّم لتحويل نظيف وخالٍ من الرواسب إلى غاز الإيثيلين — دون أي نواتج ثانوية ضارة، في كل دفعة.',
        'hero-btn-primary': 'أمّن إمداداتك ←', 'hero-btn-text': 'كيف يعمل ↓', 'hero-btn-res': 'تحميل الموارد ↓',
        'purity-tag': '— ٠١ — النقاء والسلامة',
        'purity-title': 'نقاء <em>لا يُضاهى.</em> أمان لا يتزعزع.',
        'purity-desc': 'ليست كل مركزات الإنضاج متساوية. فقد تم تركيب <strong>ريبينول™</strong> بدقة لضمان تحويل دقيق ونظيف، مما يحمي محاصيلكم وعملياتكم.',
        'good-badge': 'ريبينول™', 'good-h': 'تحويل نقي', 'good-p': 'يتحول الإيثانول المُصاغ خصيصاً إلى غاز الإيثيلين بشكل نظيف تام. لا رواسب، لا تلوث، لا نواتج ثانوية.',
        'bad-badge': 'سوائل غير معتمدة', 'bad-h': 'نواتج ثانوية ضارة', 'bad-p': 'قد تُتلف المولّد وتُنتج نواتج ثانوية سامة تضر بمحاصيلكم وعملياتكم.',
        'perf-title': 'إنتاجية فائقة. <em>جودة معتمدة.</em>',
        'perf-desc': 'عزّز عائد استثمارك. يتحول لتر واحد إلى ٠٫٣١٤ م³ من الإيثيلين النقي.',
        'cost-tag': 'تركيز فعّال من حيث التكلفة', 'cost-desc': 'يُترجم التركيز العالي للإيثانول والتحويل الفعّال إلى تكاليف تشغيلية أقل لكل دورة إنضاج.',
        'bar-tag': 'مقارنة إنتاج الإيثيلين', 'bar-lbl-rip': 'ريبينول™', 'bar-lbl-gen': 'عام',
        'formula': '<strong>٠٫٣١٤ م³ × ١٬٠٠٠٬٠٠٠ ÷ ١٥٠ = ٢٬٠٩٣ م³ غرفة</strong>',
        'fruits-tag': 'تطبيقات متعددة', 'fruits-desc': 'مثالي لمجموعة واسعة من الفواكه:',
        'chart-title': 'معيار الإنضاج الصناعي', 'chart-desc': 'استخدم مخطط ألوان الموز المعياري لتحقيق إنضاج دقيق ومتسق من الدرجة ١ (أخضر) إلى الدرجة ٦ (أصفر كامل).',
        'invest-tag': '— ٠٣ — شراكة أساسية',
        'invest-title': 'حمِ <em>استثمارك</em>',
        'invest-desc': 'ريبينول™ هو المركّز <strong>الحصري والمطلوب</strong> للاستخدام في مولّدات غاز الإيثيلين <strong>سيف-رايب™</strong> المعتمدة. هذا الاقتران الدقيق هو ضمانك لأفضل أداء للمولّد وأمان مُعتمد، والأهم من ذلك أنه <strong>يحافظ على صلاحية ضمان معداتك</strong>.',
        'supply-desc': 'متاح للشراء مباشرة من <strong>شركة الاولوية العالمية للتجارة</strong> أو عبر شبكة موزعينا المتوسعة حول العالم.',
        'sc-1-h': 'أمّن إمداداتك', 'sc-1-p': 'اشترِ مباشرة أو عبر شبكة موزعينا العالمية.',
        'sc-2-h': 'خدمات لوجستية فعّالة', 'sc-2-p': 'مركّز سائل غير مضغوط يسهّل الشحن الدولي.',
        'sc-3-h': 'التخلص المسؤول', 'sc-3-p': 'اشطف العبوات ثلاث مرات قبل إعادة التدوير.',
        'sct-tag': 'أمّن إمدادات التصدير الخاصة بك اليوم.', 'sct-h': 'تواصل معنا للحصول على أسعار تصدير الجملة وفرص الشراكة.', 'sct-cta': 'تواصل معنا ←',
        'res-tag': '— ٠٥ — الموارد', 'res-title': 'حمّل الموارد <em>واعرف المزيد.</em>', 'res-desc': 'الكتيب الكامل للمنتج لفريق العمليات أو قسم المشتريات.',
        'rc-name-en': 'الكتيب (إنجليزي)', 'rc-name-ar': 'تحميل الكتيب (عربي)', 'rc-name-msds': 'صحيفة بيانات سلامة المواد',
        'contact-tag': '— ٠٦ — تواصل معنا', 'contact-title': 'تواصل معنا. <em>لننمو معاً.</em>', 'contact-desc': 'للحصول على أسعار تصدير الجملة، شراكات التوزيع، أو معلومات المنتج — يرد فريقنا خلال يوم إلى يومي عمل.',
        'ir-1-h': 'الهاتف', 'ir-2-h': 'البريد الإلكتروني', 'ir-3-h': 'العنوان',
        'copy-btn': 'انسخ الرقم',
        'form-tag': 'أرسل استفساراً', 'f-name-lbl': 'الاسم الكامل', 'f-co-lbl': 'الشركة', 'f-email-lbl': 'البريد الإلكتروني', 'f-country-lbl': 'البلد', 'f-msg-lbl': 'الرسالة',
        'form-note': 'الردود خلال يوم إلى يومي عمل', 'form-submit': 'أرسل الاستفسار ←',
        'footer-tagline': 'تحويل إيثيلين نقي',
        'footer-nav-h': 'تصفح', 'footer-contact-h': 'تواصل', 'footer-address-h': 'العنوان',
        'footer-copy': '© ٢٠٢٦ شركة الاولوية العالمية للتجارة ش م م. جميع الحقوق محفوظة.'
    }
};

/* ══ LOADING SCREEN ══ */
(function initLoader() {
    const loader = document.getElementById('loader');
    const fill = document.getElementById('ld-fill');
    const text = document.getElementById('ld-t');
    if (!loader || !fill || !text) return;

    let progress = 0;
    const interval = setInterval(() => {
        let increment = Math.random() * 15;
        progress += increment;
        if (progress > 90) progress = 90;
        fill.style.width = progress + '%';
        text.innerText = 'LOADING ' + Math.floor(progress) + '%';
    }, 200);

    window.addEventListener('load', () => {
        clearInterval(interval);
        fill.style.width = '100%';
        text.innerText = 'LOADING 100%';
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500);
    });
})();

/* ══ LANGUAGE SWITCH ══ */
function applyLang(lang) {
    const t = T[lang];
    if (!t) return;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (t[k] !== undefined) el.textContent = t[k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const k = el.getAttribute('data-i18n-html');
        if (t[k] !== undefined) el.innerHTML = t[k];
    });
    localStorage.setItem('ripenol-lang', lang);
}

const saved = localStorage.getItem('ripenol-lang') || 'en';
applyLang(saved);

const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
    langToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('lang') || 'en';
        const next = current === 'ar' ? 'en' : 'ar';
        applyLang(next);
    });
}

/* ══ MOBILE MENU ══ */
const overlay = document.getElementById('mob-overlay');
const drawer = document.getElementById('mob-drawer');
const ham = document.getElementById('n-ham');
const closeX = document.getElementById('drawer-x');

if (overlay && drawer) {
    function openDrawer() { drawer.classList.add('open'); overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function closeDrawer() { drawer.classList.remove('open'); overlay.classList.remove('open'); document.body.style.overflow = 'auto'; }
    
    if (ham) ham.addEventListener('click', openDrawer);
    if (closeX) closeX.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);
    
    document.querySelectorAll('.drawer-a').forEach(a => {
        a.addEventListener('click', closeDrawer);
    });
}

/* ══ SCROLL HIGHLIGHT & FADE-IN ══ */
const navbar = document.getElementById('nav');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('vis');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fi').forEach(el => {
    observer.observe(el);
});

/* ══ COPY PHONE NUMBER ══ */
const copyBtn = document.getElementById('copy-btn');
if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('+96896687703').then(() => {
            copyBtn.textContent = 'COPIED!';
            setTimeout(() => { copyBtn.textContent = 'COPY NUMBER'; }, 2000);
        });
    });
}

/* ══ FORM SUBMIT ALERT ══ */
const submitBtn = document.getElementById('cf-submit');
if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Enquiry functionality is a mockup. We will be in touch within 1-2 business days.');
    });
}
