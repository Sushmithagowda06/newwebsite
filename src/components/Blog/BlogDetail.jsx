import { useParams } from 'react-router-dom'

// ─── Reusable alternating split section ──────────────────────────────────────
function SplitSection({ img, alt, title, children, reverse = false }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: reverse ? 'row-reverse' : 'row',
      alignItems: 'center',
      gap: '48px',
      margin: '48px 0',
    }}>
      <div style={{ flex: '0 0 42%' }}>
        <img
          src={img}
          alt={alt}
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '16px',
            display: 'block',
            boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
          }}
        />
      </div>
      <div style={{ flex: 1 }}>
        {title && (
          <h2 style={{
            fontSize: '1.4rem',
            fontWeight: 700,
            marginBottom: '12px',
            color: 'var(--text, #1a1218)',
          }}>
            {title}
          </h2>
        )}
        <div style={{
          fontSize: '0.97rem',
          lineHeight: 1.85,
          color: 'var(--text-muted, #555)',
        }}>
          {children}
        </div>
      </div>
    </div>
  )
}

// ─── Blog data ────────────────────────────────────────────────────────────────
const blogs = [
  {
    slug: "cardiologist-signs",
    title: "5 Signs You Should See a Cardiologist",
    date: "Mar 1, 2025",
    tag: "Cardiology",
    emoji: "❤️",
    description: (
      <>
        {/* 1 — text right, image left */}
        <SplitSection
          img="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800"
          alt="Doctor reviewing heart scans"
          title="Why Heart Health Matters"
        >
          <p>Heart disease is the leading cause of death worldwide, claiming over 17 million lives every year. Despite its prevalence, many people dismiss or ignore the early warning signs, attributing symptoms to stress, aging, or minor ailments. This delay can be life-threatening.</p>
          <p style={{ marginTop: 10 }}>Seeing a cardiologist at the first sign of trouble — rather than waiting for a crisis — can mean the difference between a manageable condition and a life-altering event. The following five warning signs should never be brushed aside.</p>
        </SplitSection>

        {/* 2 — image right */}
        <SplitSection
          img="https://images.unsplash.com/photo-1584515933487-779824d29309?w=800"
          alt="Chest pain illustration"
          reverse
          title="1. Persistent Chest Pain or Discomfort"
        >
          <p>Chest pain is the most well-known warning sign of heart problems. It may feel like pressure, squeezing, fullness, or a burning sensation in the center or left side of your chest. Sometimes the pain radiates to the arm, neck, jaw, or back.</p>
          <p style={{ marginTop: 10 }}>Even if the pain comes and goes, or seems mild, it should never be ignored. Not all heart-related chest pain is dramatic — some people describe it simply as a sense of heaviness or tightness. Always get it checked immediately.</p>
        </SplitSection>

        {/* 3 — image left */}
        <SplitSection
          img="https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800"
          alt="Person feeling breathless climbing stairs"
          title="2. Unexplained Shortness of Breath"
        >
          <p>If you find yourself getting breathless during activities that previously felt easy — like climbing a single flight of stairs, walking to your car, or carrying groceries — your heart may not be pumping blood efficiently to meet your body's demands.</p>
          <p style={{ marginTop: 10 }}>This symptom is a key indicator of heart failure or coronary artery disease. When the heart weakens, fluid can build up in the lungs, making every breath feel labored. Do not assume it is simply a fitness issue — see a doctor promptly.</p>
        </SplitSection>

        {/* 4 — image right */}
        <SplitSection
          img="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800"
          alt="Person feeling dizzy"
          reverse
          title="3. Dizziness, Lightheadedness, or Fainting"
        >
          <p>Sudden dizziness or fainting (syncope) can indicate a significant drop in blood pressure or an irregular heart rhythm (arrhythmia). When the brain does not receive enough oxygen-rich blood, it causes these sudden and often frightening episodes.</p>
          <p style={{ marginTop: 10 }}>These episodes should always be evaluated by a cardiologist, especially if they occur without warning, last more than a few seconds, or are accompanied by chest pain or palpitations. They can signal dangerous underlying conditions that require urgent attention.</p>
        </SplitSection>

        {/* 5 — image left */}
        <SplitSection
          img="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800"
          alt="Heart palpitation illustration"
          title="4. Irregular Heartbeats or Palpitations"
        >
          <p>Feeling like your heart is racing, fluttering, pounding, or skipping beats can be a sign of arrhythmia. You might notice this sensation in your chest, throat, or neck. While occasional palpitations after caffeine or exercise are normal, frequent episodes are not.</p>
          <p style={{ marginTop: 10 }}>Prolonged or recurring palpitations require medical evaluation to rule out conditions like atrial fibrillation (AFib) — one of the most common heart rhythm disorders — which significantly raises the risk of stroke if left untreated.</p>
        </SplitSection>

        {/* 6 — image right */}
        <SplitSection
          img="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800"
          alt="Swollen ankle and leg"
          reverse
          title="5. Significant Leg or Ankle Swelling"
        >
          <p>Swelling (edema) in the legs, ankles, or feet can be a sign that your heart is not pumping blood effectively, causing fluid to accumulate in the lower extremities. You might notice your shoes feel tight by the end of the day or that pressing the skin leaves an indentation.</p>
          <p style={{ marginTop: 10 }}>This is a common but serious symptom of heart failure. When paired with fatigue, breathlessness, or weight gain from fluid retention, it is a strong signal to seek immediate cardiology evaluation. Early intervention prevents worsening damage to the heart.</p>
        </SplitSection>

        {/* 7 — image left */}
        <SplitSection
          img="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800"
          alt="Doctor consultation"
          title="When to Act — and What to Expect"
        >
          <p>If you experience any of these symptoms, do not wait to "see if it gets better." Cardiac conditions are time-sensitive — early diagnosis through an ECG, echocardiogram, stress test, or blood markers can identify problems before they become emergencies.</p>
          <p style={{ marginTop: 10 }}>A cardiologist will assess your risk factors — including family history, cholesterol, blood pressure, and lifestyle — and develop a personalized prevention or treatment plan. Your heart works every second of every day. Give it the attention it deserves.</p>
        </SplitSection>
      </>
    )
  },

  {
    slug: "lung-health",
    title: "Understanding Your Lung Health: A Guide",
    date: "Feb 22, 2025",
    tag: "Pulmonology",
    emoji: "🫁",
    description: (
      <>
        <SplitSection
          img="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800"
          alt="Lung health illustration"
          title="Why Lung Health is Critical"
        >
          <p>Your lungs work around the clock — breathing in oxygen and expelling carbon dioxide with every single breath. Adults take around 20,000 breaths per day, and the lungs process all of it silently. When lung health deteriorates, every aspect of your life is affected — from energy levels and sleep to mental clarity and heart health.</p>
          <p style={{ marginTop: 10 }}>The lungs are resilient, but they are also vulnerable to pollution, infection, smoking, and chronic disease. Understanding the warning signs and knowing how to protect your lungs is essential for long-term well-being.</p>
        </SplitSection>

        <SplitSection
          img="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800"
          alt="Doctor examining lungs"
          reverse
          title="Warning Signs Your Lungs Need Attention"
        >
          <p>Lung diseases often develop silently, causing significant damage long before symptoms become obvious. Do not ignore these warning signs:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li>Chronic cough lasting more than 3 weeks</li>
            <li>Shortness of breath during everyday activities</li>
            <li>Wheezing or a whistling sound while breathing</li>
            <li>Persistent fatigue and unexplained low energy</li>
            <li>Chest tightness, pressure, or pain</li>
            <li>Coughing up blood or unusually thick mucus</li>
            <li>Frequent respiratory infections like bronchitis or pneumonia</li>
          </ul>
        </SplitSection>

        <SplitSection
          img="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800"
          alt="COPD and lung conditions"
          title="Common Conditions Affecting Lung Health"
        >
          <ul style={{ paddingLeft: '1.2rem', lineHeight: 2.1 }}>
            <li><strong>COPD:</strong> Includes emphysema and chronic bronchitis, most often caused by long-term smoking or exposure to harmful fumes.</li>
            <li><strong>Asthma:</strong> Chronic inflammation of the airways that narrows them and causes breathing difficulty, wheezing, and chest tightness.</li>
            <li><strong>Pneumonia:</strong> A serious infection that causes inflammation and fluid accumulation in the air sacs of one or both lungs.</li>
            <li><strong>Pulmonary Fibrosis:</strong> Scarring of lung tissue that makes it increasingly difficult to breathe over time.</li>
            <li><strong>Lung Cancer:</strong> One of the most common and deadly cancers, strongly linked to smoking but also caused by radon, asbestos, and air pollution.</li>
          </ul>
        </SplitSection>

        <SplitSection
          img="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800"
          alt="Exercise for lung health"
          reverse
          title="How Exercise Improves Lung Function"
        >
          <p>Regular aerobic exercise is one of the most powerful tools for maintaining lung health. Activities like brisk walking, swimming, cycling, and yoga strengthen the diaphragm and intercostal muscles, improve oxygen exchange, and increase lung capacity over time.</p>
          <p style={{ marginTop: 10 }}>Even 20–30 minutes of moderate exercise five days a week can meaningfully improve how efficiently your lungs work. For those with existing lung conditions, breathing exercises like diaphragmatic breathing and pursed lip breathing are also highly effective.</p>
        </SplitSection>

        <SplitSection
          img="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800"
          alt="Healthy habits for lungs"
          title="7 Steps to Protect Your Lung Health"
        >
          <ul style={{ paddingLeft: '1.2rem', lineHeight: 2.1 }}>
            <li><strong>Don't Smoke:</strong> The single most important step — smoking causes up to 85% of all lung cancers.</li>
            <li><strong>Avoid Indoor Pollutants:</strong> Use air purifiers, ensure proper ventilation, and avoid chemical fumes at home.</li>
            <li><strong>Check Outdoor Air Quality:</strong> Limit strenuous outdoor activity on high-pollution days.</li>
            <li><strong>Stay Hydrated:</strong> Water keeps the mucosal lining of the lungs thin, aiding in clearing mucus.</li>
            <li><strong>Get Vaccinated:</strong> Influenza and pneumonia vaccines significantly reduce serious lung infection risk.</li>
            <li><strong>Practice Deep Breathing:</strong> Diaphragmatic breathing improves airflow and expands lung capacity.</li>
            <li><strong>Schedule Regular Check-ups:</strong> Spirometry tests can detect declining lung function years before symptoms appear.</li>
          </ul>
        </SplitSection>
      </>
    )
  },

  {
    slug: "virtual-consultations",
    title: "How Virtual Consultations Are Changing Healthcare",
    date: "Feb 15, 2025",
    tag: "Technology",
    emoji: "💻",
    description: (
      <>
        <SplitSection
          img="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800"
          alt="Patient on video call with doctor"
          title="What Are Virtual Consultations?"
        >
          <p>Virtual consultations allow patients to connect with doctors, specialists, and healthcare professionals through video calls, phone calls, or secure chat platforms — all from the comfort of their own home. From routine check-ups and prescription renewals to mental health therapy and specialist referrals, almost any non-emergency medical need can now be addressed virtually.</p>
          <p style={{ marginTop: 10 }}>The global telehealth market has grown dramatically, with millions of consultations now happening every day. What was once an emergency workaround has become a permanent, preferred model of care for many patients and providers alike.</p>
        </SplitSection>

        <SplitSection
          img="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800"
          alt="Rural patient accessing healthcare online"
          reverse
          title="Breaking Down Geographic Barriers"
        >
          <p>Millions of people in rural, remote, or underserved areas struggle to access quality healthcare. Traveling hours to see a specialist — only to wait weeks for an appointment — is a reality for far too many. Virtual consultations eliminate these geographical barriers entirely.</p>
          <p style={{ marginTop: 10 }}>A patient in a remote village can now connect with a top cardiologist in the city within minutes. This democratization of healthcare is one of the most significant shifts in medicine in recent decades, reducing health disparities across socioeconomic groups.</p>
        </SplitSection>

        <SplitSection
          img="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800"
          alt="Doctor using telehealth platform"
          title="Saving Time and Reducing Costs"
        >
          <p>No more driving, finding parking, sitting in crowded waiting rooms, or taking half a day off work. A virtual appointment can be scheduled, attended, and completed in under 20 minutes — saving patients hours and reducing stress significantly.</p>
          <p style={{ marginTop: 10 }}>Virtual visits are also often significantly cheaper than in-person appointments. Patients save on transport costs, and clinics reduce overhead by optimizing schedules and reducing administrative burden. For chronic disease patients who need frequent check-ins, these savings add up considerably over time.</p>
        </SplitSection>

        <SplitSection
          img="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800"
          alt="Online therapy mental health"
          reverse
          title="Transforming Mental Health Support"
        >
          <p>Mental health has perhaps benefited most from the telehealth revolution. Patients who previously avoided therapy due to social stigma, distance, or mobility challenges can now access counseling, psychiatry, and support groups privately and conveniently from home.</p>
          <p style={{ marginTop: 10 }}>Studies show that online therapy outcomes are comparable to in-person therapy for conditions including depression, anxiety, and PTSD. The lower barrier to entry means more people are seeking help earlier — before conditions escalate into crisis.</p>
        </SplitSection>

        <SplitSection
          img="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800"
          alt="Remote patient monitoring wearables"
          title="Remote Monitoring and Chronic Disease Care"
        >
          <p>For patients with chronic conditions like diabetes, hypertension, or heart failure, virtual consultations paired with remote monitoring devices are transforming day-to-day care. Wearable devices track blood pressure, glucose levels, heart rhythms, and oxygen saturation in real time, sending data directly to care teams.</p>
          <p style={{ marginTop: 10 }}>This continuous monitoring allows doctors to spot concerning trends before they become emergencies, adjust medications proactively, and keep patients safely out of the hospital. It also gives patients greater ownership of their health data and engagement in their own care.</p>
        </SplitSection>

        <SplitSection
          img="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800"
          alt="AI-powered healthcare future"
          reverse
          title="The Future: AI, Hybrid Care, and Beyond"
        >
          <p>The future of healthcare is hybrid — a seamless blend of in-person and virtual care guided by artificial intelligence. AI-powered diagnostic tools are already helping doctors analyze symptoms, flag abnormal test results, and prioritize high-risk patients during virtual visits.</p>
          <p style={{ marginTop: 10 }}>As technology continues to evolve, virtual consultations will become even more accurate, personalized, and integrated with the physical healthcare system. The goal is not to replace human care, but to make compassionate, expert care available to everyone, everywhere, at any time.</p>
        </SplitSection>
      </>
    )
  },

  {
    slug: "nutrition-gut-health",
    title: "Nutrition Tips for Better Gut Health",
    date: "Feb 8, 2025",
    tag: "Gastroenterology",
    emoji: "🌿",
    description: (
      <>
        <SplitSection
          img="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800"
          alt="Colorful healthy food"
          title="Why Gut Health Matters More Than You Think"
        >
          <p>Your gut is often called your "second brain" — and for good reason. It is the foundation of your overall health, housing over 70% of your immune system and producing more than 90% of the body's serotonin. The gut microbiome contains trillions of bacteria, fungi, and microorganisms that affect everything from digestion and immunity to mood and cognitive function.</p>
          <p style={{ marginTop: 10 }}>When the balance of good and bad bacteria is disrupted — a condition known as dysbiosis — the effects ripple throughout the entire body. Nurturing your gut is one of the most impactful things you can do for your long-term health.</p>
        </SplitSection>

        <SplitSection
          img="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800"
          alt="Bloated stomach signs of unhealthy gut"
          reverse
          title="Signs of an Unhealthy Gut"
        >
          <p>An unhealthy gut rarely announces itself loudly at first. Instead, it whispers through seemingly unrelated symptoms that many people dismiss or attribute to stress:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li>Chronic bloating, gas, cramping, or irregular bowel movements</li>
            <li>Weakened immunity and frequent colds or infections</li>
            <li>Unexplained fatigue and persistent brain fog</li>
            <li>Skin problems like acne, eczema, or rosacea</li>
            <li>Anxiety, depression, and mood instability</li>
            <li>Food intolerances or sensitivities that worsen over time</li>
            <li>Increased risk of autoimmune and inflammatory conditions</li>
          </ul>
        </SplitSection>

        <SplitSection
          img="https://images.unsplash.com/photo-1467453678174-768ec283a940?w=800"
          alt="High fiber foods whole grains"
          title="Eat More Fiber — Your Gut's Best Friend"
        >
          <p>Dietary fiber is the single most important nutrient for a healthy gut. It feeds beneficial bacteria in your colon, producing short-chain fatty acids that reduce inflammation, strengthen the gut lining, and regulate blood sugar. Yet most people consume less than half the recommended daily amount.</p>
          <p style={{ marginTop: 10 }}>Aim for 25–30g of fiber per day from diverse sources: whole grains (oats, quinoa, brown rice), legumes (lentils, chickpeas, black beans), fruits (apples, berries, pears), and vegetables (broccoli, carrots, sweet potato). Variety matters — different fibers feed different strains of beneficial bacteria.</p>
        </SplitSection>

        <SplitSection
          img="https://images.unsplash.com/photo-1559181567-c3190215a521?w=800"
          alt="Fermented foods yogurt kimchi"
          reverse
          title="Fermented Foods and Probiotics"
        >
          <p>Fermented foods are naturally rich in live beneficial bacteria (probiotics) that directly replenish and diversify your gut microbiome. Regular consumption of fermented foods is linked to reduced gut inflammation, improved digestion, and even better mood and mental health outcomes.</p>
          <p style={{ marginTop: 10 }}>Excellent sources include plain yogurt with live cultures, kefir, idli and dosa (traditional South Indian fermented foods), kimchi, sauerkraut, miso, tempeh, and kombucha. Aim to include at least one fermented food with each meal for consistent microbiome support.</p>
        </SplitSection>

        <SplitSection
          img="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800"
          alt="Balanced nutritious meal"
          title="5 More Habits for a Thriving Gut"
        >
          <ul style={{ paddingLeft: '1.2rem', lineHeight: 2.1 }}>
            <li><strong>Stay Hydrated:</strong> Water supports the mucosal lining of the gut and keeps digestion moving. Aim for 8–10 glasses daily.</li>
            <li><strong>Eat Prebiotic Foods:</strong> Garlic, onions, leeks, bananas, asparagus, and chicory root feed your good bacteria.</li>
            <li><strong>Limit Ultra-Processed Foods:</strong> Artificial additives, emulsifiers, and excess sugar directly harm beneficial bacterial colonies.</li>
            <li><strong>Manage Stress:</strong> The gut-brain axis means chronic stress physically damages your microbiome. Meditation, sleep, and exercise all help.</li>
            <li><strong>Eat Mindfully and Slowly:</strong> Thorough chewing reduces digestive strain and improves nutrient absorption. Avoid eating in a hurry or while distracted.</li>
          </ul>
        </SplitSection>
      </>
    )
  },

  {
    slug: "cancer-awareness",
    title: "Cancer Awareness & Prevention: What Everyone Should Know",
    date: "Mar 14, 2026",
    tag: "Oncology",
    emoji: "🎗️",
    description: (
      <>
        <SplitSection
          img="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800"
          alt="Cancer awareness ribbon"
          title="What is Cancer?"
        >
          <p>Cancer occurs when cells in the body begin to grow and divide uncontrollably, ignoring the normal signals that tell them when to stop. These abnormal cells can invade surrounding tissues and travel through the bloodstream or lymphatic system to form new tumors in distant organs — a process called metastasis.</p>
          <p style={{ marginTop: 10 }}>Cancer can affect almost any organ — the lungs, breast, colon, prostate, liver, skin, brain, and more. It is not a single disease but a collection of over 100 distinct diseases, each with its own biology, risk factors, and treatment approaches. Early detection dramatically improves survival rates across virtually all types.</p>
        </SplitSection>

        <SplitSection
          img="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800"
          alt="Doctor examining patient for cancer signs"
          reverse
          title="Early Warning Signs to Never Ignore"
        >
          <p>Many cancers are highly treatable when caught early, yet symptoms are often dismissed or delayed. Know your body and act on these warning signs promptly:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li>Unexplained weight loss of more than 5kg without diet or exercise changes</li>
            <li>Persistent fatigue that does not improve with rest</li>
            <li>Any new lump, thickening, or swelling under the skin</li>
            <li>Changes in moles — new growths, irregular borders, changing color</li>
            <li>Persistent cough, hoarseness, or coughing up blood</li>
            <li>Difficulty swallowing lasting more than a few days</li>
            <li>Unexplained bleeding — in urine, stool, or from the nipple</li>
            <li>Persistent indigestion or abdominal discomfort</li>
          </ul>
        </SplitSection>

        <SplitSection
          img="https://images.unsplash.com/photo-1555708982-8645ec9ce3cc?w=800"
          alt="No smoking quit tobacco"
          title="1. Quit Smoking — The Most Impactful Step"
        >
          <p>Tobacco use is responsible for approximately 22% of all cancer deaths globally — including cancers of the lung, throat, mouth, esophagus, stomach, pancreas, kidney, bladder, and cervix. Smoking is the single largest preventable cause of cancer worldwide.</p>
          <p style={{ marginTop: 10 }}>The good news: the body begins repairing itself almost immediately after quitting. Within 10 years of stopping, the risk of lung cancer falls to roughly half that of a continuing smoker. It is never too late to quit, and the benefits begin the moment you stop.</p>
        </SplitSection>

        <SplitSection
          img="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800"
          alt="Anti-cancer diet fruits vegetables"
          reverse
          title="2. Diet, Exercise, and Weight Management"
        >
          <p>Research suggests that up to 30–35% of cancers are linked to diet and lifestyle factors. A diet rich in colorful fruits, vegetables, whole grains, legumes, and healthy fats provides powerful antioxidants and phytochemicals that protect cells from DNA damage that can lead to cancer.</p>
          <p style={{ marginTop: 10 }}>Regular physical activity — at least 150 minutes of moderate exercise per week — reduces the risk of breast, colon, endometrial, and several other cancers by regulating hormones, reducing inflammation, and supporting immune function. Maintaining a healthy weight is equally important, as excess body fat drives chronic inflammation and hormonal imbalances that fuel cancer growth.</p>
        </SplitSection>

        <SplitSection
          img="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800"
          alt="Cancer screening mammogram"
          title="3. Screening, Vaccination, and Early Detection"
        >
          <p>Regular cancer screenings catch tumors at their earliest, most treatable stages — often before any symptoms appear. Talk to your doctor about which screenings are appropriate based on your age, sex, and family history:</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '10px', lineHeight: 2.1 }}>
            <li><strong>Mammogram:</strong> Recommended every 1–2 years for women over 40 to detect breast cancer early.</li>
            <li><strong>Colonoscopy:</strong> From age 45, to detect polyps or colorectal cancer before symptoms develop.</li>
            <li><strong>Pap Smear & HPV Test:</strong> Detects cervical changes caused by human papillomavirus.</li>
            <li><strong>Low-Dose CT Scan:</strong> Recommended for long-term smokers to screen for early lung cancer.</li>
            <li><strong>PSA Test:</strong> Blood test to screen for prostate cancer in high-risk men over 50.</li>
          </ul>
        </SplitSection>

        <SplitSection
          img="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800"
          alt="Hope and awareness"
          reverse
          title="A Final Word: Awareness Saves Lives"
        >
          <p>Cancer does not discriminate — it can affect anyone, regardless of age, gender, or background. But with greater awareness, smarter prevention habits, and access to early screening, we have more power than ever to reduce its impact. The advances in cancer treatment over the past two decades have been remarkable, with survival rates improving dramatically across many cancer types.</p>
          <p style={{ marginTop: 10 }}>Take care of your body. Know the warning signs. Act early. And never hesitate to seek medical advice when something does not feel right — your instincts and your health are always worth listening to.</p>
        </SplitSection>
      </>
    )
  },
]

export { blogs }

export default function BlogDetail() {
  const { slug } = useParams()
  const blog = blogs.find(b => b.slug === slug)

  if (!blog) return <p style={{ padding: '5rem' }}>Blog not found.</p>

  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '5rem 40px' }}>
      <p style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: 13 }}>
        {blog.tag}
      </p>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>
        {blog.emoji} {blog.title}
      </h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>{blog.date}</p>
      <hr style={{ margin: '20px 0' }} />
      <div>{blog.description}</div>
    </main>
  )
}
