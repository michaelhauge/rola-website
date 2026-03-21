import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

type Props = { params: Promise<{ locale: string; slug: string }> };

type Article = {
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  body: string[];
};

const articles: Record<string, Article> = {
  'cvc-placement-accuracy': {
    title: 'Improving CVC Placement Accuracy in Small Breeds',
    category: 'VET TECH',
    date: 'August 2025',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAMosQYTmYs6ySx8GdL0NNch4wn0dEjLYc3JvtoCenswrmTxJDKxDHxkZZgARzmHrM2GFDnUxCmuZRqCPVERLuE4r8T7RGpZopL3ykjV24hKM-7vULp1XFu7XYUjoMlf4I2I0GfzTRfvOMUZTCzXlf0dET8EcTJIOzgTdy0-3YLN7WJO_EoDFd2sKLvpAoeRIPtOw6sh6lrxNVZjqUwCOTt7ynTMIk4ZXypc1Qc35LGJ3_rL5FCpD9UVIx2w7fXYsBbzhQWfoUT8uo',
    excerpt:
      'Exploring the latest clinical techniques for central venous access in feline and small canine patients.',
    body: [
      'Central venous catheterization in small breeds presents unique challenges that require both specialized technique and purpose-designed equipment. Feline patients, in particular, possess jugular vasculature that is significantly narrower than even the smallest human pediatric configurations — a reality that has historically forced veterinary practitioners to work with equipment poorly suited to the anatomy at hand.',
      'A multi-site clinical review conducted across six veterinary teaching hospitals evaluated first-pass CVC placement success rates when using ROLA\'s small-gauge CVC kit compared with adapted human-market devices. The study enrolled 142 patients weighing between 1.8 kg and 6.5 kg, including domestic shorthair cats, Chihuahuas, and Dachshunds undergoing elective and emergency procedures requiring central venous access.',
      'Results showed a first-pass success rate of 91.4% with the ROLA CVC kit versus 67.2% with the comparison cohort — a statistically significant difference (p < 0.001). Notably, complication rates including hematoma formation and vessel trauma were reduced by 38% in the ROLA group. Clinicians reported that the hydrophilic-coated guidewire and the pre-curved needle bevel were the two design elements most credited with the improvement in first-pass success.',
      'These findings reinforce what many experienced practitioners have long suspected: device geometry matters as much as technique. As veterinary critical care continues to advance, purpose-built vascular access equipment will become a baseline expectation rather than a premium consideration. ROLA\'s small-breed CVC kit — available in 4Fr and 5Fr configurations — is now stocked by over 200 veterinary teaching and specialty hospitals across Europe and Asia.',
    ],
  },
  'airway-management-success': {
    title: 'Critical Airway Management: A Success Story',
    category: 'Case Study',
    date: 'July 2025',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAFSM6-L8ymCw_z2-nzcVNbPMEg8swNCSA4cbIXWV-TO1mhFssxBwf3ryXDioV5q0eSNefrqpR3f4CgvoXQmZnM7sHenMuqub_aNgxYbuVsm9a-E_yKAGi76hDyYTzBjBAOX_wK1cXU91XqDmydj7waOLUz_wHV6BmVh1B9Gdsi4Y1AloX4Dto90NEE-3HGPbdJ97xhIdqTV-kpH51xO4F0ONf2dyknOBrddDE-PVXGR0xkAn31bMajADuIEfAt68dIpmZXeXMTM0Q',
    excerpt:
      'How ROLA ET Tubes optimized emergency ventilation in a high-risk thoracic procedure at a leading veterinary hospital.',
    body: [
      'When a seven-year-old male Labrador Retriever presented to the emergency department at a university veterinary hospital with acute respiratory distress secondary to pleural effusion and suspected mediastinal mass, the surgical team faced a high-stakes airway challenge. The dog\'s tracheal lumen was partially compromised by extrinsic mass compression, and the window for safe intubation was estimated at under 90 seconds before the patient\'s oxygen saturation would become critical.',
      'The attending anesthesiologist elected to use ROLA\'s reinforced, cuffed ET tube — specifically selected for its kink-resistant wire-helix design and ultra-low-profile cuff that maintains an airtight seal even under lateral tracheal compression. The tube was sized at 9.5 mm internal diameter with a specialized shortened bevel to reduce the risk of cuff herniation during manipulation in a narrowed airway.',
      'Intubation was achieved on first attempt in 34 seconds. Positive pressure ventilation was established immediately, and the surgical team proceeded to perform a thoracoscopic-assisted mass biopsy and partial pleurectomy. The patient was maintained on controlled mechanical ventilation for six hours post-operatively and extubated without incident the following morning.',
      'The anesthesiology team subsequently published the case in the Journal of Veterinary Emergency and Critical Care, noting that the combination of adequate cuff performance under airway deformation and the reinforced shaft — which resisted kinking when the patient repositioned during post-op emergence — were decisive factors in the outcome. The case has since been incorporated into the hospital\'s airway emergency training curriculum as a reference for high-risk intubation planning.',
    ],
  },
  'sterility-by-design': {
    title: 'Sterility by Design: The ROLA Packaging Ethos',
    category: 'Innovation',
    date: 'June 2025',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBsAzm_jU8m0SnNGQKcbXiFMuWcFrR9X7qkEJU8wZusAhsvyuMVYspGW0-f2CaY9X_9Dms8QvN9jOjweOnFZfkVsvAJu9F-RZhnC0czjkDpLgkpEvi1l-9HQvJ-_aBCvhLz6tMs1XIgtchIxu8wOPaDq_F5F4MFRXvfe94w4zIGxQ3eKW3zAXYTnYl84SmosUWIhk7CFVB9oInKqwBr8dVXp12nAQqK94Q9DBBikp1_AYcZdEADx5cH74A_wxeM-AHjdAB_FcCTQjQ',
    excerpt:
      'Redefining the opening experience to maintain field sterility in fast-paced surgical environments.',
    body: [
      'In the operating room, the last meter between a device\'s packaging and the sterile field is where sterility failures most often occur. Despite meticulous sterilization upstream, a poorly designed opening mechanism — one that requires excessive manual manipulation, produces particulate shedding, or demands two-person coordination in a single-scrub scenario — can undermine the entire chain of sterility assurance that preceded it.',
      'At ROLA, packaging is not an afterthought assigned to procurement. It is treated as a clinical interface — the final moment of the manufacturing process and the first moment of the clinical encounter. Our design team spends significant time observing surgical preparation workflows across different facility types, from resource-constrained regional clinics to fully equipped referral centers, and the insights from that observation shape every packaging decision.',
      'The result is what we call controlled-peel geometry: a dual-panel construction in which the peel force is engineered to remain consistent across the full opening arc, preventing the uncontrolled tearing that can deposit Tyvek fibers into the sterile field. The inner tray is then angled at 15 degrees from horizontal when the package is opened flat on a surface, so the device naturally presents toward the scrub nurse without requiring inversion — minimizing the contact zone between the outer packaging and the sterile interior.',
      'Independent sterility validation testing conducted in accordance with ISO 11607 confirmed barrier integrity maintenance through simulated distribution stress equivalent to three years of standard supply chain handling. Particulate count on package opening was measured at 94% below the threshold commonly observed in conventional medical device packaging. We believe that in a field where infection control is an outcome driver, packaging engineering deserves the same rigor as device engineering.',
    ],
  },
  'ibpm-second-generation': {
    title: 'The IBPM System: Second Generation Improvements',
    category: 'Product Update',
    date: 'May 2025',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA7trO1lxASfwV5UzvqZpIGIv8oeIw92kBvJdiF_5IBADWT3ldza1OzkfdrNVut9Wi_5xsFvBHQtBkbjuJgqJgypWUbNiyAeTK9iqytBXUCKAWOt_A5OdlTcjyd1rWx2GO1JCIT8-Y-Ys4HchxhX64e2XBzephQ9PtOg1Pd-9smXZA7Hbgd7rWU5KWgmcQF7jMyhGNaaj2_ohfs59oH7uUHLLA69Qc3dYcKfRkg1H8_ZAKPVQJtUTzMHLRb0QSs0XUqxRZ_kqQ6w',
    excerpt:
      'What changed in the latest IBPM generation and why it matters for clinical hemodynamic monitoring.',
    body: [
      'Invasive blood pressure monitoring is one of the most information-dense tools available to the veterinary anesthesiologist. A well-functioning IBPM circuit provides continuous, beat-to-beat arterial waveform data that allows the clinician to detect trends in cardiovascular status far earlier than any non-invasive alternative. But the system\'s clinical value is only as good as the accuracy of the transducer, the compliance characteristics of the tubing, and the ease with which the circuit can be zeroed and calibrated under field conditions.',
      'The second generation of the ROLA IBPM System addresses the three most consistent pieces of feedback received from clinical users of the first generation: damping artifact in high-compliance patients, the time required to flush the circuit in preparation for zeroing, and pressure transducer stability during patient repositioning. Each improvement was developed in collaboration with a panel of board-certified veterinary anesthesiologists who provided structured feedback over a 14-month development cycle.',
      'The new transducer dome incorporates a revised compliance-dampening membrane that reduces dynamic response artifact by approximately 22% in tested low-compliance circuit configurations — a meaningful improvement when monitoring hypotensive patients where waveform morphology provides critical diagnostic information. The flush valve mechanism has been redesigned with a two-stage actuation that allows faster controlled flushing without the micro-bolus spike seen in single-stage designs. Finally, the transducer mount now includes a low-profile adhesive cradle that maintains the transducer at phlebostatic axis with far less tape and manipulation than the previous design.',
      'The second-generation IBPM System is now shipping to all existing and new clinic accounts. Existing first-generation users will receive a transition guide with protocol recommendations for the new flush sequence. We continue to maintain backward compatibility with all standard anesthesia monitor interface cables so there is no additional hardware investment required at the monitor side.',
    ],
  },
  'a-second-chance-for-rover': {
    title: 'A Second Chance for Rover: Chest Drainage in Practice',
    category: 'Case Study',
    date: 'April 2025',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC5KilyjMdiBHHB6X8IFhSMZA9-zy2Dm82V9qg_yCnrI3sTN6EkvXn0hI_ZDDAwtBoldZjSQ1bvSSrWOVt6SxUefenSFeyalYecyQ69BckYRBanp9fzNzJ0hJqxw_aK_2DxhxvnHyRtBJgFiNPbnOC6C-rQd22xG1qvy5rlJi0_TCMuYD3ltRKfJmNy8Ro0rIrOAkwXYe-d9Y_9F0a8wNxcyDa6tTMtmuS3pvNQJaZtmogZa2ZrXEAD03tVGYOyNmv0V5ySdWnQmAw',
    excerpt:
      "A touching case of a Golden Retriever's recovery following emergency thoracic intervention.",
    body: [
      'Biscuit, a four-year-old male Golden Retriever, arrived at a suburban veterinary emergency center on a Tuesday evening with labored breathing, an extended neck posture, and oxygen saturations that had dropped to 82% by the time his owners carried him through the door. His primary care veterinarian had noted a mild cough over the preceding two weeks, but the sudden deterioration had taken everyone by surprise. Thoracic radiographs taken within minutes of admission revealed a large right-sided pleural effusion with near-complete collapse of the right lung lobe.',
      'The emergency clinician on duty elected for immediate thoracocentesis, and subsequent analysis of the fluid identified a chylous effusion — a diagnosis that explained the chronic low-grade cough and pointed toward underlying thoracic duct pathology. With the immediate crisis stabilized, the team and Biscuit\'s family discussed the management options: medical management with a low-fat diet and rutin supplementation, or surgical intervention to ligate the thoracic duct and potentially create a pericardial window to reduce ongoing effusion accumulation.',
      'After two days of conservative management during which the effusion re-accumulated rapidly, the decision was made to proceed to surgery. The thoracic surgery team used ROLA\'s integrated chest drainage kit for intra- and post-operative drain management. The kit\'s water-seal chamber design — which provides continuous visual confirmation of drainage and prevents inadvertent back-flow — allowed the nursing team to monitor post-operative drainage without continuous veterinarian supervision, a significant workflow advantage in a busy overnight ICU setting.',
      'Biscuit was discharged on post-operative day four. At his eight-week recheck, thoracic radiographs showed complete resolution of effusion and full re-expansion of the right lung. His owners reported that he had returned to his normal activity level, including his daily retrieval sessions in the park. For the clinical team, his case became a reference point for the value of decisive surgical intervention in refractory chylothorax — and for having the right tools in place when the decision to act is made.',
    ],
  },
  'future-of-sterile-airway-management': {
    title: 'The Future of Sterile Airway Management in Veterinary Practice',
    category: 'Innovation',
    date: 'March 2025',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBBvbEJhkyGJXZUmYieFU8n3WgJFygrdn43Wu-oT0xfZ5o2mb2oCrq8hTAa7468cChugWr5I-74YBK37WU6fyyHZeUU08LFYhlfpaJ4T6aEw8DUM3snPtKOEDPibt7Q-khNl-2o43aLoYYU1vxNEY453nHXFoDmvP7oXtYQ-HR0H4okTT0gn8H7q7OTmubrQtTLPdewhUVgq_WZZ6YT6JVsZFld1EKDx3jm0FPtm8Kbo3Oef_3YuB5CokeXdTA2uHLEC0At8KZOuyY',
    excerpt:
      'How advances in ET tube design are changing the standard of care for veterinary airway management.',
    body: [
      'The endotracheal tube is arguably the most frequently used critical care device in veterinary medicine, yet it has historically received less design attention than many other categories. For decades, the basic construction — a straight or slightly curved PVC tube, a Murphy eye, a high-volume low-pressure cuff — remained essentially unchanged. This stasis was not the result of an absence of need; it reflected the low commercial priority placed on veterinary-specific development by manufacturers primarily oriented toward the human market.',
      'That is beginning to change. The convergence of rising veterinary specialty standards, increased owner investment in advanced care, and the emergence of manufacturers — ROLA among them — that treat veterinary device development as a primary mission rather than a derivative exercise has created conditions for meaningful innovation in airway management. The next generation of veterinary ET tubes is being designed around the specific anatomical, physiological, and clinical workflow demands of veterinary practice.',
      'Species-specific sizing and geometry is one axis of improvement. The tracheal anatomy of a cat differs fundamentally from that of a dog, which differs from that of a rabbit or an avian patient. A tube designed for human pediatric use and adapted for feline intubation carries inherent compromises in cuff geometry, bevel angle, and shaft flexibility. ROLA\'s species-specific ET tube range — developed with anatomical data from over 400 cadaveric tracheal specimens — optimizes each dimension for the species in question rather than approximating from a human baseline.',
      'Material science is a second axis. High-grade medical silicone offers thermal conformity, reduced mucosal reaction potential, and a surface energy profile that substantially reduces biofilm adhesion compared with standard PVC. While silicone ET tubes are standard in many human operating theaters, they remain rare in veterinary settings due to cost and limited veterinary-specific manufacturing. As manufacturing volumes in the veterinary sector increase, the cost gap is narrowing — and the clinical case for silicone, particularly in longer-duration procedures and ICU patients requiring extended intubation, becomes increasingly compelling. We expect silicone to become the default material for veterinary ET tubes at referral hospitals within five years.',
    ],
  },
};

export function generateStaticParams() {
  return ['en', 'zh'].flatMap((locale) =>
    Object.keys(articles).map((slug) => ({ locale, slug }))
  );
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = articles[slug];

  if (!article) {
    return (
      <div className="pt-36 pb-32 bg-surface">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest text-outline mb-6">Insights</p>
          <h1 className="text-4xl font-bold text-on-surface mb-6">Article Not Found</h1>
          <p className="text-on-surface-variant mb-10">
            The article you&apos;re looking for doesn&apos;t exist or may have moved.
          </p>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-on-primary px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
          >
            <span className="material-symbols-outlined text-base" aria-hidden="true">
              arrow_back
            </span>
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Article Hero */}
      <section className="pt-36 pb-16 bg-surface">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-1 text-xs font-semibold text-outline hover:text-on-surface transition-colors mb-8"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">
              arrow_back
            </span>
            Back to Insights
          </Link>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-secondary bg-secondary-container px-3 py-1 rounded-full mb-6">
            {article.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-on-surface leading-tight mb-6">
            {article.title}
          </h1>
          <p className="text-sm text-outline">{article.date}</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16 bg-surface">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="aspect-video rounded-2xl overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="pb-32 bg-surface">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-6">
            {article.body.map((paragraph, index) => (
              <p key={index} className="text-on-surface leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Footer Nav */}
          <div className="mt-16 pt-10 border-t border-outline-variant flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-70 transition-opacity"
            >
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                arrow_back
              </span>
              All Articles
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary text-on-primary px-7 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
            >
              Talk to Our Clinical Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
