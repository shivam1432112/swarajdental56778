'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ChevronRight, CalendarClock } from 'lucide-react';
import Link from 'next/link';

const ImplantsIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1E6FB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M26 20C26 12 28 8 32 8C36 8 38 12 38 20C38 28 44 32 44 40C44 48 38 52 32 52C26 52 20 48 20 40C20 32 26 28 26 20Z" />
        <path d="M32 52V60" />
        <path d="M28 55H36" />
        <path d="M28 58H36" />
    </svg>
);

const SmileIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1E6FB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 32C16 32 24 48 32 48C40 48 48 32 48 32" />
        <path d="M16 32C24 35 40 35 48 32" />
        <path d="M8 20L12 24M12 20L8 24" />
        <path d="M52 20L56 24M56 20L52 24" />
        <path d="M12 40L16 44M16 40L12 44" />
        <path d="M48 40L52 44M52 40L48 44" />
    </svg>
);

const LaserIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1E6FB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M26 24C26 16 28 12 32 12C36 12 38 16 38 24C38 32 44 36 44 44C44 52 38 56 32 56C26 56 20 52 20 44C20 36 26 32 26 24Z" />
        <path d="M8 8L30 30" stroke="#1E6FB4" strokeWidth="3" />
        <circle cx="30" cy="30" r="3" fill="#1E6FB4" />
    </svg>
);

const RehabIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1E6FB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 32H48" />
        <path d="M20 32C20 20 28 16 32 16C36 16 44 20 44 32" />
        <path d="M20 32C20 44 28 48 32 48C36 48 44 44 44 32" />
        <path d="M32 4C16.5 4 4 16.5 4 32C4 47.5 16.5 60 32 60C47.5 60 60 47.5 60 32" strokeDasharray="4 4" />
        <path d="M56 28L60 32L64 28" />
    </svg>
);

const CrownIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1E6FB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 48V24L24 32L32 16L40 32L48 24V48H16Z" />
        <path d="M16 44H48" />
    </svg>
);

const RctIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1E6FB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 16C24 8 28 4 32 4C36 4 40 8 40 16C40 24 48 28 48 40C48 52 40 60 32 60C24 60 16 52 16 40C16 28 24 24 24 16Z" />
        <path d="M28 60C28 50 32 45 32 30" strokeDasharray="2 2" />
        <path d="M36 60C36 50 32 45 32 30" strokeDasharray="2 2" />
        <path d="M32 16V24" strokeWidth="3" />
        <path d="M28 20H36" strokeWidth="3" />
    </svg>
);

const ChildIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1E6FB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M26 24C26 16 28 12 32 12C36 12 38 16 38 24C38 32 44 36 44 44C44 52 38 56 32 56C26 56 20 52 20 44C20 36 26 32 26 24Z" />
        <path d="M32 36C32 36 36 32 36 28C36 26 34 24 32 26C30 24 28 26 28 28C28 32 32 36 32 36Z" fill="#1E6FB4" />
    </svg>
);

const GumIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1E6FB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M26 16C26 8 28 4 32 4C36 4 40 8 40 16C40 24 48 28 48 40C48 52 40 60 32 60C24 60 16 52 16 40C16 28 24 24 24 16Z" />
        <path d="M12 40C12 40 22 36 32 36C42 36 52 40 52 40" />
        <path d="M48 16L58 16V24C58 32 48 36 48 36C48 36 38 32 38 24V16L48 16Z" />
    </svg>
);

const BracesIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1E6FB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 32H52" />
        <path d="M16 32C16 20 24 16 32 16C40 16 48 20 48 32" />
        <path d="M16 32C16 44 24 48 32 48C40 48 48 44 48 32" />
        <rect x="20" y="28" width="6" height="8" rx="1" />
        <rect x="30" y="28" width="6" height="8" rx="1" />
        <rect x="40" y="28" width="6" height="8" rx="1" />
    </svg>
);

const AlignersIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1E6FB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 40C12 24 20 16 32 16C44 16 52 24 52 40" strokeDasharray="4 4" />
        <path d="M16 40C16 28 24 24 32 24C40 24 48 28 48 40" strokeDasharray="4 4" />
        <path d="M12 40C12 44 20 48 32 48C44 48 52 44 52 40" strokeDasharray="4 4" />
    </svg>
);

const SnoringIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1E6FB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="24" />
        <path d="M20 28L28 28L20 36L28 36" />
        <path d="M36 24L44 24L36 32L44 32" />
        <path d="M24 44C24 44 28 48 32 48C36 48 40 44 40 44" />
        <path d="M48 16L56 16L48 24L56 24" />
        <path d="M44 12L60 28M60 12L44 28" strokeWidth="1" />
    </svg>
);

const DigitalIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1E6FB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M26 24C26 16 28 12 32 12C36 12 38 16 38 24C38 32 44 36 44 44C44 52 38 56 32 56C26 56 20 52 20 44C20 36 26 32 26 24Z" />
        <path d="M12 12L52 52" strokeDasharray="2 4" />
        <path d="M12 52L52 12" strokeDasharray="2 4" />
        <rect x="8" y="8" width="48" height="48" rx="8" strokeDasharray="4 4" />
    </svg>
);

const services = [
    {
        title: 'Dental Implants',
        icon: <ImplantsIcon />,
        description: 'Permanent titanium tooth replacement for a natural-looking, long-lasting smile.',
        fullDetail: [
            'Dental implant is an effective prosthetic solution for a lost tooth. It is a titanium fixture (6 to 26mm) that replaces the root of a missing natural tooth, anchored into the jaw bone to hold artificial teeth firmly in place with longevity.',
            'Benefits:',
            '1. Improves Facial Aesthetics: Preserves jaw bone, prevents facial collapse — stops lower jaw from shriveling, lips from folding in, and wrinkles forming around mouth.',
            '2. Reliable and Long-lasting: High-quality imported implant systems with long-term warranty and computer-guided surgery.',
            '3. Immediate Results: Missing teeth replaced in as little as one surgical procedure.',
            '4. Better Chewing and Speaking: Anchored in jaw bone, restores facial structure, enables clear speech and efficient chewing.',
            '5. Affordable: Cost ranges from Rs. 18,500 to Rs. 60,000 depending on implant brand, bone condition, prosthesis type, and additional procedures like bone grafting or sinus lift.',
            'Types:',
            '- Conventional: Two stages, 3 to 6 months gap, suitable for most bone conditions.',
            '- Immediate: Placed same day as tooth extraction when jaw bone is in good condition.',
            '- Immediate Loaded: Crown placed same day as implant when jaw bone is healthy.',
            'Brands used: Nobel Biocare (Sweden), Dentium (South Korea), Osstem/Hiossen (South Korea), Adin (Germany/Israel), Simpladent (Switzerland), GenXT (Switzerland), Versah Bone Densification System (USA).',
            'Procedure Steps:',
            '1. Consultation and CBCT Scan for diagnosis',
            '2. Implant placement surgery under local anaesthesia',
            '3. Healing period (for conventional cases: 3 to 6 months)',
            '4. Crown or prosthesis placement',
            '5. Post-surgery follow-up after 7 days'
        ]
    },
    {
        title: 'Smile Makeover',
        icon: <SmileIcon />,
        description: 'Complete smile transformation using Digital Smile Design technology.',
        fullDetail: [
            'In the digital era, smile enhancement is done using Digital Smile Design (DSD) — a technology that lets patients visualize their new smile BEFORE treatment starts.',
            'What is Digital Smile Designing (DSD)?',
            'DSD is a tool used for designing and planning a patient\'s smile modification. It helps patients visualize their final result beforehand by creating a digital mock-up of their proposed treatment. The analysis covers facial profile, front smile, occlusal alignment, and symmetry. Equipment needed: DSLR camera or smartphone + DSD software + video documentation.',
            'Treatments included in Smile Makeover:',
            '- Composite or Porcelain Veneers',
            '- Teeth Whitening using Philips Zoom! technology (light-activated 25% hydrogen peroxide gel with Amorphous Calcium Phosphate gel to protect enamel — no damage to tooth structure)',
            '- Orthodontic treatments (Braces or Aligners)',
            '- Crown Lengthening',
            '- Enamel Contouring',
            '- Intentional RCTs',
            '- Splinting',
            '- Botox / Fillers',
            'Teeth Cleaning:',
            'Done with ultrasonic piezo-electric scaling equipment — no scratches or abrasions on teeth. Prices range from Rs. 1,000 to Rs. 7,500 depending on complexity.'
        ]
    },
    {
        title: 'Laser Dentistry',
        icon: <LaserIcon />,
        description: 'Painless, precise laser treatments for faster healing with minimal discomfort.',
        fullDetail: [
            'At Swaraj Dental, we use AMD Picasso Diode Laser from America — the world\'s number one laser in efficiency and safety. All procedures are performed by specially trained laser dentists following complete safety protocols including laser protection goggles, high vacuum suction, and removal of laser plume.',
            'Laser Treatments Provided:',
            '1. Laser Wisdom Tooth Removal: Almost entirely bloodless and painless. No sutures needed. No risk of bacterial contamination. Minimal tissue damage. Wound heals without complications.',
            '2. Laser Flap Surgery for Gum Treatment: Laser-assisted tooth cleaning, flap surgery, and aesthetic corrections. Includes LANAP and LAPIP techniques (latest laser gum treatments), laser disinfection, laser curettage, crown lengthening, gingivectomy, frenectomy, depigmentation, tongue tie correction, and low-level laser therapy for tissue healing and pain management.',
            '3. Lasers for Root Canal (Endodontics): AMD Picasso laser provides bacterial reduction in root canals up to 1100 microns depth versus only 100 microns with conventional methods. Severe non-healing infections treated quickly and painlessly.',
            '4. Laser Teeth Whitening (Zoom): Light-activated hydrogen peroxide gel activated with blue plasma laser light. Removes deeper internal stains. Results last longer than conventional whitening.',
            '5. Laser in Dental Implants: Used for implant uncovering (minimally invasive, painless, bloodless), laser disinfection, and treatment of periimplantitis (implant infection) using LAPIP protocol.'
        ]
    },
    {
        title: 'Full Mouth Rehabilitation',
        icon: <RehabIcon />,
        description: 'Complete anti-aging dental treatment to restore your smile, function, and confidence.',
        fullDetail: [
            'Full Mouth Rehabilitation is an anti-aging dental treatment that gives patients a rejuvenated smile and younger appearance. As age advances, teeth get lost, worn down, damaged, or broken. Grinding teeth at night (Bruxism) worsens this wear. As damage progresses, the natural balance of teeth, muscles, joints, and gums is disturbed — vertical dimension of the face reduces, wrinkles appear around the mouth, chewing becomes inefficient, and the smile looks ugly and aged.',
            'At Swaraj Dental, we re-balance these damages using Full Mouth Rehabilitation techniques. The worn-out teeth and lost balance are regained through multiple treatment modalities.',
            'What we do:',
            '- Comprehensive study: Diagnostic jaw impressions, full digital photographs and videos, face bow records, digital smile design',
            '- Identify root causes with differential diagnosis',
            '- Design a customized treatment plan',
            '- Restore vertical dimension, facial profile, chewing efficiency, and smile',
            'Treatment options offered:',
            '- Jaw deprogrammer, removable stabilization splint, mandibular advancement devices, night guards',
            '- Full coverage with individual crowns: Ceramic, Porcelain, Zirconia, E-max (lithium disilicate) crowns',
            '- Combination of crowns with implants',
            '- Full mouth reconstruction with implants for non-salvageable teeth',
            '- Minimally invasive options: Veneers, laminates, table top restorations, inlays and onlays',
            'Anti-aging treatments we specialize in:',
            '- Recontouring of present teeth',
            '- Removal of cracks and dark lines from front surface',
            '- Whitening of old yellow teeth',
            '- Replacing missing teeth',
            '- Closure of gaps between teeth and gums',
            '- Reduction of skin folds at corners of mouth',
            '- Developing young and fresh facial profile',
            '- Removal of dark pigments from gums',
            '- Complete and Partial Dentures, Flexible Dentures',
            'No upper age limit — successful full arch reconstruction with implants performed in patients up to 91 years of age.'
        ]
    },
    {
        title: 'Fixed (Ceramic) Teeth',
        icon: <CrownIcon />,
        description: 'Natural-looking ceramic crowns and bridges — strong, beautiful, permanent.',
        fullDetail: [
            'A dental crown is a fully customized, permanent artificial tooth cap fixed over a prepared natural tooth structure or a dental implant. When cemented, crowns completely protect the visible area of the tooth at and above the gum line.',
            'When is a Crown needed?',
            '- To protect a weak or fragile tooth',
            '- To restore a broken tooth or a tooth with a large failing filling',
            '- To restore severely worn-down teeth (from grinding)',
            '- For cosmetic smile improvement',
            '- To hold a dental bridge for missing teeth',
            '- After root canal treatment for tooth protection',
            '- Over a dental implant as a natural tooth replacement',
            'Types of Crowns Available:',
            '1. All-Ceramic / All-Porcelain Crowns: Most natural-looking. Best for front teeth. Highly lifelike light reflection. Available as lab-produced multi-layered porcelain or CAD/CAM monolithic crowns.',
            '2. Zirconia Crowns: Hardest and toughest ceramic. Extremely durable and virtually indestructible. Color-matched to natural teeth. Cost: Rs. 10,000 to Rs. 25,000 depending on fabrication method and expertise.',
            '3. E-MAX Crowns: Lithium disilicate glass-ceramic. Exceptional strength, translucency, and durability. Highly biocompatible. Wear-resistant like natural enamel. Can be made in CAD/CAM or manually in lab.',
            '4. PFM (Porcelain Fused to Metal) Crowns: Metal core with porcelain exterior. Good strength and aesthetics. Second most durable option. Good biocompatibility.',
            '5. Stainless Steel Crowns: Used as temporary for adults, and commonly for primary or milk teeth in children.',
            'Materials used at Swaraj Dental: Mani burs (Japan), Honigum impression material (Germany), 3M luting agent (USA). Crowns fabricated using latest LASER SINTERING and 3D Printing technologies for precise fit. All procedures done by Prosthodontist specialists.',
            'How long do Dental Crowns last?',
            'With proper oral hygiene (brushing twice daily, regular flossing, professional cleanings), crowns can last a decade or two.'
        ]
    },
    {
        title: 'Painless R.C.T.',
        icon: <RctIcon />,
        description: 'Comfortable single-sitting root canal using advanced robotic technology.',
        fullDetail: [
            'Root Canal Treatment (RCT) is a proven treatment to save a failing tooth for a long time. We use the latest technology including NSK (UK) Endomotor, ENDOMATE DT (a Robotic instrument for RCT), Dentsply Protaper Rotary Flexi files, and J MORITA ROOT ZX II Apex Locator (robotic digital equipment to measure root canal length — reduces X-ray exposure). Majority of our procedures are single sitting root canal treatments.',
            'When is RCT needed?',
            'RCT is needed when the blood or nerve supply of the tooth (pulp) is irreversibly inflamed or infected due to decay, cracks, root infection, gum infection, or traumatic bite.',
            'Symptoms that may indicate RCT is needed:',
            '- Pain while chewing or applying pressure on tooth',
            '- Pain with cold or hot liquids',
            '- Pain at night or in lying down position',
            '- Continuous pain that may or may not subside with painkillers',
            '- Swelling inside or outside the mouth',
            '- Crack or fracture of tooth',
            '- Darkening or greying of tooth',
            '- Big cavity with food lodgement',
            '- Important: Even teeth with NO pain may need RCT — no pain does not mean no problem',
            'Step-by-step RCT Procedure:',
            '1. Pre-treatment X-ray for diagnosis confirmation',
            '2. Local anesthesia administered — completely painless experience',
            '3. Dental dam placed for sterile isolation of the tooth',
            '4. Access opening using modern high-speed DENTSPLY SIRONA handpieces (USA) — exposes root canal and immediately resolves pain',
            '5. Canal length measured with J MORITA ROOT ZX II Apex Locator',
            '6. BioMechanical Preparation using NSK ENDOMATE DT Robotic instrument and Dentsply Protaper Rotary files with constant irrigation for complete disinfection',
            '7. Obturation with Gutta Percha filling material — canals sealed permanently',
            '8. Residual crown reinforced with light cure composites',
            '9. Crown or onlay planned in many cases for long-term protection',
            'Cost: Rs. 2,500 for conventional RCT to Rs. 15,000 for robotic or microscopic RCT.'
        ]
    },
    {
        title: 'Child Dental Care',
        icon: <ChildIcon />,
        description: 'Friendly, specialized dental care for children in a comfortable, fun environment.',
        fullDetail: [
            'At Swaraj Dental, we provide comprehensive preventive and therapeutic dental treatment for children from birth through college, including those with special needs. We are the only NABH-accredited pediatric dental setup in our category. Our aim is to provide your child the most comfortable and homely atmosphere during consultations and treatment, under the most hygienic conditions.',
            'Available Treatments for Children:',
            '- Pre and Post Natal Counselings',
            '- Milk Teeth Fillings',
            '- Milk Teeth Root Canals',
            '- Stainless Steel Crowns',
            '- Zirconia Crowns for Children',
            '- Space Maintainers',
            '- Habit Breaking Appliances',
            '- MyoFunctional Therapy',
            '- Fluoride Applications',
            '- Pit and Fissure Sealants',
            '- General Anaesthesia (for special needs)',
            '- Behaviour Management techniques',
            '- Special Child Treatment',
            'Frequently Asked Questions:',
            'Q: When should my child first visit the dentist?',
            'A: Around 6 to 8 months of age, or when their first tooth comes in.',
            'Q: When should I start cleaning my child\'s teeth?',
            'A: From birth — clean gums with a damp washcloth. Once first tooth erupts, use a soft toothbrush with a tiny amount of fluoride toothpaste.',
            'Q: How often should my child visit?',
            'A: Every 6 months for a check-up. May vary based on individual oral health needs.',
            'Q: How much toothpaste for a child?',
            'A: At age 3, supervise brushing. Use only a pea-sized amount of toothpaste and ensure the child does not swallow it.'
        ]
    },
    {
        title: 'Gum Treatment',
        icon: <GumIcon />,
        description: 'Expert treatment for gum disease, bleeding gums, and periodontal conditions.',
        fullDetail: [
            'At Swaraj Dental, we promote the idea of "Healthy gums, Healthy you." Maintaining your gums is critical for overall well-being. If you have red, swollen, or bleeding gums, you may have gum disease (pyorrhea).',
            'Signs of Gum Disease:',
            '- Red, swollen, or bleeding gums',
            '- Gaps between teeth and gums',
            '- Food lodgement between teeth',
            '- Bad breath',
            '- Mobile or loose teeth',
            '- Pus discharge from gums',
            'What is Pyorrhea / Gum Disease?',
            'Bacteria and food debris form plaque and then hard tartar. Bacterial toxins destroy gums and eventually the bone, creating pockets between gums and teeth where bacteria increase. This leads to progressive bone loss, loosening of teeth, and eventual tooth loss. Gum disease rarely causes pain early — it is a silent killer.',
            'Gum Treatments Provided:',
            '1. Scaling and Polishing (Nonsurgical Treatment): Professional teeth cleaning using latest piezoelectric ultrasonic technology by Acteon (France). Multiple appointments at 4 to 7 day intervals. Next phase begins after 10 to 15 days of healing.',
            '2. Deep Cleaning and Deep Curettage: For cases with deeper infection not resolved by scaling alone. Gums anesthetized and infection cleaned below the gum line up to bone level. Curettes used to remove infected tissue lining. Specific periodontal antibiotics prescribed.',
            '3. Locally Delivered Antibiotic Treatment: Antibiotics placed directly into the pockets between gums and teeth. Higher concentration at diseased site without systemic side effects. The antibiotic chip dissolves on its own.',
            '4. Laser Assisted Non-surgical Periodontal Treatment: AMD Picasso Diode Laser from America used for laser-assisted tooth cleaning, flap surgery, LANAP and LAPIP techniques, laser disinfection, and low-level laser therapy for tissue healing.',
            '5. Occlusal Adjustment and Splinting: Extracoronal and intracoronal splinting for mobile but salvageable teeth. Resin fibre splint or stainless steel braided wire with composite resin. Done in tooth-colored materials for maximum aesthetics.',
            '6. Surgical Flap Surgery: Gums opened, all infection removed from bone using Hu-Friedy curettes (leading brand, USA). Infected pocket lining removed and area irrigated. Option of Regenerative Periodontics and Periodontal Osseous Surgery if required. Sutures placed and removed after one week.',
            '7. Aesthetic Periodontal Procedures: Crown lengthening, gingivectomy, frenectomy, zenith correction, and gum depigmentation (removal of dark pigment from gums using blade or laser).',
            '8. Gingival Recession Coverage: Minimally invasive surgical treatment to cover exposed teeth with gum tissue. Prevents sensitivity, plaque accumulation, and further tooth loss.',
            '9. Periodontal Medicine: Treatment for medically compromised patients. Gum disease is linked to diabetes, renal disease, cardiac problems, neurological conditions, and autoimmune diseases like arthritis.',
            'Supportive Periodontal Treatment: Patients called every 3 months for follow-up phone check-in and every 6 months for check-up and teeth cleaning to prevent recurrence.'
        ]
    },
    {
        title: 'Braces (Orthodontia)',
        icon: <BracesIcon />,
        description: 'Metal and ceramic braces for perfectly aligned teeth — suitable for all ages.',
        fullDetail: [
            'Braces are metal or ceramic non-toxic appliances fixed to teeth using wires and accessories to correct malpositioned teeth and bring them into the most harmonious, functional, and aesthetic position for permanent and stable results.',
            'Why do you need Braces?',
            'Crooked or forwardly placed teeth not only look unaesthetic but also cannot give full chewing efficiency, and they invite problems to gums and jaw bone. A straight smile boosts self-esteem, level of happiness, and personality development.',
            'Types of Braces Available:',
            '1. Conventional Metal Braces (Begg / MBT) — most affordable',
            '2. Ceramic Tooth-Coloured Braces — aesthetic option, less visible',
            '3. Self-Ligation / Damon Braces — faster treatment, more comfortable than conventional',
            '4. Lingual / Incognito Braces — completely hidden behind teeth, nobody can see them',
            '5. Insignia Custom Braces — fully customized for each individual patient',
            'Conditions treated: Crowded teeth, crooked teeth, forwardly placed teeth, overbite, underbite, crossbite, open bite, spacing issues.',
            'How are you prepared for Braces?',
            'Oral examination + OPG X-ray + Special head X-rays (cephalogram) + 3D CBCT if required. Three treatment phases: initial placement → periodic adjustments → retainer after braces removal.',
            'Important Care Tips during Braces:',
            '- Reduce sugar and starchy foods',
            '- Brush after every meal using orthodontist-recommended toothbrush',
            '- Use fluoride toothpaste and mouthwash',
            '- Use interdental floss, interdental brush, or water flosser',
            '- Avoid sticky, hard, crispy foods',
            '- Contact sports: wear a specially designed mouthguard',
            'After Braces:',
            'Retainers are provided to maintain teeth position permanently after braces are removed.'
        ]
    },
    {
        title: 'Invisible Braces / Aligners',
        icon: <AlignersIcon />,
        description: 'Clear removable aligners — straighten teeth invisibly without wires or brackets.',
        fullDetail: [
            'Clear Aligner therapy is an orthodontic treatment using a series of clear removable thermoplastic trays that gradually move teeth to improve bite function and aesthetics — completely without wires or braces. Trays are custom made from 3D Printed Models using Intraoral Scanning and 3D Printing Technology.',
            'Key Benefits of Clear Aligners:',
            '- Clear: No brackets and wires. Aligners are so clear they go unnoticed while wearing.',
            '- Comfortable: Easy to maintain and even more painless than braces.',
            '- Convenient: Less time spent at clinic compared to traditional braces.',
            '- Removable: Allows you to eat, drink, brush, and floss with complete freedom. Must be worn 20 to 22 hours per day, changed every 7 to 10 days.',
            'Conditions treated: Spacing, crowding, crossbite, overbite, overjet.',
            'Digital Scanning Benefits over Traditional Impressions:',
            '- Improved diagnosis and treatment planning',
            '- Live 3D visualization on screen',
            '- Improved appliance accuracy and smoother fit',
            '- Fewer retakes, reduced chair time',
            '- Patients involved in real-time treatment planning on screen',
            'Braces vs Aligners Comparison:',
            '- Braces: Worn all the time for 12 to 24 months | Metal or ceramic | Monthly visits compulsory | Difficulty maintaining oral hygiene | Food restrictions apply',
            '- Aligners: Worn 18 to 22 hours per day for 7 to 12 months | Completely clear and invisible | Visits after 6 months only | No effect on oral hygiene | Eat whatever food you enjoy'
        ]
    },
    {
        title: 'Snoring Treatment',
        icon: <SnoringIcon />,
        description: 'Specialized dental treatment for snoring and obstructive sleep apnoea.',
        fullDetail: [
            'Snoring while sleeping is traditionally misunderstood as a sign of deep sleep. In reality, snoring and obstructive sleep apnoea (OSA) are major indicators of existing or future serious body illnesses.',
            'What is Obstructive Sleep Apnoea (OSA)?',
            'In OSA, there is obstruction of the airway in a lying-down position, causing partial or complete cessation of breathing for a few seconds during sleep. Obstruction can happen due to thick neck, retruded or small lower jaw, deep palate, large tonsils, adenoids, or large tongue.',
            'Signs and Symptoms:',
            '- Feeling tired on awakening',
            '- Headaches and jaw pain',
            '- Daytime sleepiness and lethargy',
            '- Low-grade body pain',
            '- Frequent mood changes',
            '- Hyperacidity or acid stomach',
            '- Bruxism (grinding of teeth at night)',
            'Health Risks of Untreated Snoring:',
            '- High blood pressure',
            '- Cardiovascular diseases (heart attacks)',
            '- Cerebrovascular disease (stroke)',
            '- Metabolic diseases like diabetes',
            '- Severe sleep deprivation affecting cellular repair',
            'Treatment at Swaraj Dental:',
            'For patients who cannot tolerate CPAP machines, we provide custom-made oral appliances — Mandibular Advancement Devices (MAD) and Snoring Splints. These appliances move the lower jaw forward during sleep, which holds the tongue slightly forward and opens the blocked airway. Oral appliances are more comfortable than CPAP, more economical, and much less invasive than surgery.'
        ]
    },
    {
        title: 'Digital Dentistry',
        icon: <DigitalIcon />,
        description: 'Advanced 3D digital scanning and design for the most precise dental care.',
        fullDetail: [
            'Digital dentistry uses computer-based technology to make dental procedures easy, precise, and highly accurate — revolutionizing diagnosis, treatment planning, and procedure delivery with highest accuracy, enhanced patient comfort, and maximum satisfaction.',
            'Features of Digital Dentistry at Swaraj Dental:',
            '1. Intraoral Camera: Small high-magnification camera provides clear pictures of the patient\'s mouth. Dentist can identify conditions precisely and educate patients by displaying images on screen.',
            '2. Digital Photography: Capturing high-resolution 3D pre and post-operative photographs for patient education, record keeping, and complete smile makeover documentation.',
            '3. Digital Radiography: CBCT (Cone Beam CT) and RVG replacing old X-ray methods. Enhances diagnostic ability and enables early detection of oral disease.',
            '4. Intraoral Scanner (3Shape TRIOS — World No. 1): Replaces traditional messy impression trays completely. Captures a 3D model of teeth and oral tissues in just a few minutes. Patient sits back and relaxes — no gagging, no discomfort.',
            '5. Digital Smile Designing (DSD): Customized treatment plan designed using DSD software. Patient can see post-treatment result even before the procedure starts — visualize their new smile in advance.',
            '6. CAD CAM Technology (with Exocad Software): Generates 3D printed models milled digitally. Dental prosthetics — crowns, bridges, veneers — fabricated with minute detail for the most precise, aesthetic fit.',
            '7. Trained Digital Dentists: Technology is only as good as the hands operating it. Our team is highly skilled in both traditional dental techniques and the latest digital dentistry methods.',
            'Advantages of Digitalization:',
            '- Precision in Treatment: Minor features recorded accurately — prosthetics fit perfectly.',
            '- Accuracy in Diagnosis: Latest radiographic technology guides dentist for every oral abnormality.',
            '- Patient Comfort: Intraoral scanner eliminates messy impression trays — no gag reflex, no discomfort.',
            '- Faster Workflow: Reduces chair time for both patient and dentist significantly.',
            '- Record Keeping: Digital records eliminate manual maintenance and help in long-term patient education.'
        ]
    }
];

export default function Services() {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

    return (
        <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block bg-blue-100 text-[#1E6FB4] font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest"
                    >
                        Our Treatments
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-slate-900"
                    >
                        Swaraj Dental <span className="text-[#1E6FB4]">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 text-lg leading-relaxed"
                    >
                        Experience comprehensive care tailored for your perfect smile using advanced technology and precision.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            onClick={() => setSelectedService(service)}
                            className="group bg-white rounded-3xl border border-blue-50 p-4 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col h-full items-center text-center"
                        >
                            <div className="mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300 [&>svg]:w-[40px] [&>svg]:h-[40px] sm:[&>svg]:w-[64px] sm:[&>svg]:h-[64px]">
                                {service.icon}
                            </div>

                            <h3 className="text-[14px] sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-[#1E6FB4] transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-[12px] sm:text-sm text-slate-600 leading-relaxed mb-4 sm:mb-6 flex-grow">
                                {service.description}
                            </p>

                            <div className="mt-auto flex items-center text-[12px] sm:text-sm font-semibold text-[#1E6FB4]">
                                <span>View Details</span>
                                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: '100%' }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="relative w-full max-w-2xl bg-white rounded-t-[32px] sm:rounded-[32px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="p-8 sm:p-10 border-b border-slate-100 flex items-center space-x-6 bg-blue-50/50">
                                <div className="flex-shrink-0 bg-white p-4 rounded-2xl shadow-sm border border-blue-100">
                                    {selectedService.icon}
                                </div>
                                <div className="pr-8">
                                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                                        {selectedService.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="p-8 sm:p-10 overflow-y-auto bg-white flex-grow">
                                <div className="mb-8 p-5 bg-blue-50 rounded-2xl border border-blue-100 text-[#1E6FB4] font-semibold text-lg leading-relaxed">
                                    {selectedService.description}
                                </div>

                                <div className="space-y-4">
                                    {selectedService.fullDetail.map((detail, idx) => {
                                        const isList = detail.startsWith('- ');
                                        const isNumberList = /^\d+\./.test(detail);
                                        const isSubtitle = detail.endsWith('?') || (detail.includes(':') && !detail.startsWith('-') && !detail.match(/^\d+\./));

                                        return (
                                            <div key={idx} className={`flex items-start ${isSubtitle ? 'mt-6 mb-2' : ''}`}>
                                                {!isSubtitle && (
                                                    <div className="flex-shrink-0 mt-1 mr-3">
                                                        <CheckCircle2 className="w-5 h-5 text-[#1E6FB4]" />
                                                    </div>
                                                )}
                                                <p className="text-slate-700 leading-relaxed">
                                                    {isSubtitle ? <span className="font-bold text-slate-900 text-lg block">{detail}</span> :
                                                     isList ? <span className="block">{detail}</span> :
                                                     isNumberList ? <span className="font-semibold block">{detail}</span> :
                                                     detail}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="p-6 sm:p-8 bg-white border-t border-slate-100 mt-auto flex-shrink-0">
                                <Link
                                    href="#appointment"
                                    onClick={() => setSelectedService(null)}
                                    className="w-full bg-[#1E6FB4] text-white px-8 py-4 rounded-xl font-bold text-center flex items-center justify-center space-x-2 shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition-all active:scale-[0.98]"
                                >
                                    <CalendarClock className="w-5 h-5" />
                                    <span>Book Appointment at Swaraj Dental and Implant Center</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
