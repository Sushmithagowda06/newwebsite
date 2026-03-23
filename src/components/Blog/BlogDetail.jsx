import { useParams } from 'react-router-dom'

const imgStyle = {
  width: '100%',
  borderRadius: '12px',
  margin: '20px 0',
  maxHeight: '500px',
  objectFit: 'cover'
}

const blogs = [
  {
    slug: "cardiologist-signs",
    title: "5 Signs You Should See a Cardiologist",
    date: "Mar 1, 2025",
    tag: "Cardiology",
    emoji: "❤️",
    description: (
      <>
        <img src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800" alt="Cardiology" style={imgStyle} />

        <h2>Why Heart Health Matters</h2>
        <p>Heart disease is the leading cause of death worldwide. Many people ignore early warning signs, assuming they are minor issues. Seeing a cardiologist early can save your life. Here are 5 signs you should never ignore.</p>

        <h2>1. Persistent Chest Pain or Discomfort</h2>
        <p>Chest pain is the most well-known warning sign of heart problems. It may feel like pressure, squeezing, fullness, or pain in the center or left side of your chest. Even if the pain comes and goes, it should never be ignored.</p>

        <h2>2. Unexplained Shortness of Breath</h2>
        <p>If you find yourself getting breathless during activities that previously felt easy — like climbing stairs or walking short distances — your heart may not be pumping blood efficiently. This is a key sign of heart failure or coronary artery disease.</p>

        <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=800" alt="Heart checkup" style={imgStyle} />

        <h2>3. Dizziness, Lightheadedness, or Fainting</h2>
        <p>Sudden dizziness or fainting can indicate a drop in blood pressure or an irregular heart rhythm (arrhythmia). These episodes should always be evaluated by a cardiologist as they can signal serious underlying conditions.</p>

        <h2>4. Irregular Heartbeats or Palpitations</h2>
        <p>Feeling like your heart is racing, fluttering, or skipping beats can be a sign of arrhythmia. While some palpitations are harmless, frequent or prolonged episodes require medical evaluation to rule out conditions like atrial fibrillation.</p>

        <h2>5. Significant Leg or Ankle Swelling</h2>
        <p>Swelling in the legs, ankles, or feet can be a sign that your heart is not pumping blood effectively, causing fluid to accumulate. This is a common symptom of heart failure and should be assessed promptly.</p>

        <h2>When to Act</h2>
        <p>If you experience any of these symptoms, do not wait. Early diagnosis and treatment dramatically improve outcomes. Book a consultation with a cardiologist today — your heart will thank you.</p>
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
        <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800" alt="Lung Health" style={imgStyle} />

        <h2>Why Lung Health is Critical</h2>
        <p>Your lungs work around the clock — breathing in oxygen and expelling carbon dioxide. When lung health deteriorates, every aspect of your life is affected. Understanding the warning signs and how to protect your lungs is essential for long-term well-being.</p>

        <h2>When Are Your Lungs Not Healthy?</h2>
        <p>Lung diseases often develop silently, causing significant damage before symptoms become severe. Do not ignore these warning signs:</p>
        <ul>
          <li>Chronic Cough lasting more than 3 weeks</li>
          <li>Shortness of Breath during everyday activities</li>
          <li>Wheezing or whistling sound while breathing</li>
          <li>Persistent Fatigue and low energy</li>
          <li>Chest Tightness or Pain</li>
          <li>Coughing up Blood or Excess Mucus</li>
        </ul>

        <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800" alt="Breathing" style={imgStyle} />

        <h2>Common Conditions Affecting Lung Health</h2>
        <ul>
          <li><strong>COPD:</strong> Including emphysema and chronic bronchitis, often caused by smoking.</li>
          <li><strong>Asthma:</strong> Chronic inflammation of the airways causing breathing difficulty.</li>
          <li><strong>Pneumonia:</strong> Fluid accumulation in the air sacs of the lungs.</li>
          <li><strong>Pulmonary Edema:</strong> Fluid buildup causing severe breathing problems.</li>
          <li><strong>Lung Cancer:</strong> Often linked to smoking but can be caused by other toxins.</li>
        </ul>

        <h2>7 Simple Steps to Protect Your Lung Health</h2>
        <ul>
          <li><strong>Don't Smoke:</strong> This is the single most important step to prevent lung cancer and COPD.</li>
          <li><strong>Avoid Pollutants:</strong> Use air purifiers at home and check local air quality indexes.</li>
          <li><strong>Exercise Regularly:</strong> Aerobic exercise builds lung capacity and strengthens breathing muscles.</li>
          <li><strong>Practice Deep Breathing:</strong> Diaphragmatic breathing improves airflow and lung efficiency.</li>
          <li><strong>Stay Hydrated:</strong> Water keeps the mucosal lining of the lungs thin and healthy.</li>
          <li><strong>Get Vaccinated:</strong> Flu and pneumonia vaccines protect against serious lung infections.</li>
          <li><strong>Regular Check-ups:</strong> Early detection of lung disease dramatically improves outcomes.</li>
        </ul>
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
        <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800" alt="Virtual Consultation" style={imgStyle} />

        <h2>What Are Virtual Consultations?</h2>
        <p>Virtual consultations allow patients to connect with doctors, specialists, and healthcare professionals through video calls, phone calls, or chat platforms — all from the comfort of their own home. From routine check-ups to mental health therapy, almost any non-emergency medical need can now be addressed virtually.</p>

        <h2>How They Are Changing Healthcare</h2>

        <h3>1. Breaking Down Barriers to Access</h3>
        <p>Millions of people in rural or underserved areas struggle to access quality healthcare. Virtual consultations eliminate geographical barriers, connecting patients with specialists they would otherwise never have access to.</p>

        <h3>2. Saving Time for Everyone</h3>
        <p>No more driving, parking, or waiting. A virtual appointment can be scheduled and completed in minutes, saving patients hours of their day while allowing doctors to see more patients efficiently.</p>

        <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800" alt="Doctor online" style={imgStyle} />

        <h3>3. Reducing Healthcare Costs</h3>
        <p>Virtual visits are often significantly cheaper than in-person appointments. Patients save on travel costs, and clinics save on overhead — making healthcare more affordable for everyone.</p>

        <h3>4. Improving Mental Health Support</h3>
        <p>Mental health is one of the biggest beneficiaries of telehealth. Patients who previously avoided therapy due to stigma or distance can now access counseling privately and conveniently from home.</p>

        <h3>5. Continuity of Care</h3>
        <p>Virtual consultations make it easier for patients to have regular follow-ups with their doctors, improving long-term health outcomes. Chronic disease patients especially benefit from consistent remote monitoring and check-ins.</p>

        <h2>The Future of Virtual Healthcare</h2>
        <p>The future is hybrid — a seamless blend of in-person and virtual care. Technologies like AI-powered diagnostics, remote monitoring devices, and wearable health trackers will further enhance virtual consultations, making them even more accurate and personalized.</p>
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
        <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800" alt="Healthy food" style={imgStyle} />

        <h2>Why Gut Health Matters</h2>
        <p>Your gut is more than just a digestive system — it is the foundation of your overall health. From immunity to mental well-being, a healthy gut influences nearly every aspect of your body. The gut microbiome contains trillions of bacteria that affect everything from digestion to mood.</p>

        <h2>Signs of an Unhealthy Gut</h2>
        <ul>
          <li>Bloating, gas, and indigestion</li>
          <li>Weakened immunity and frequent infections</li>
          <li>Fatigue and persistent brain fog</li>
          <li>Skin problems like acne and eczema</li>
          <li>Anxiety, depression, and mood swings</li>
          <li>Increased risk of chronic diseases</li>
        </ul>

        <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800" alt="Nutrition" style={imgStyle} />

        <h2>Top Nutrition Tips for a Healthier Gut</h2>

        <h3>1. Eat More Fiber</h3>
        <p>Fiber feeds the good bacteria in your gut. Include whole grains, legumes, fruits, and vegetables in every meal. Aim for at least 25–30g of fiber per day.</p>

        <h3>2. Add Fermented Foods</h3>
        <p>Fermented foods are rich in natural probiotics that boost good gut bacteria. Try yogurt with live cultures, kefir, idli, dosa, kimchi, sauerkraut, and kombucha.</p>

        <h3>3. Stay Hydrated</h3>
        <p>Water helps move food through your digestive tract and supports the mucosal lining of the gut. Aim for 8–10 glasses of water per day.</p>

        <h3>4. Eat Prebiotic Foods</h3>
        <p>Prebiotics are food for your good gut bacteria. Great sources include garlic, onions, bananas, asparagus, leeks, and chicory root.</p>

        <h3>5. Limit Sugar and Processed Foods</h3>
        <p>Excess sugar and ultra-processed foods feed harmful bacteria and disrupt gut balance. Cut down on sugary drinks, packaged snacks, fast food, and artificial sweeteners.</p>

        <h3>6. Include Healthy Fats</h3>
        <p>Healthy fats like olive oil, avocados, nuts, seeds, and fatty fish reduce gut inflammation and support a balanced microbiome.</p>

        <h3>7. Eat Mindfully and Slowly</h3>
        <p>Eating too fast leads to poor digestion. Chew each bite thoroughly, eat without distractions, and avoid eating late at night.</p>
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
        <img src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800" alt="Cancer Awareness" style={imgStyle} />

        <h2>What is Cancer?</h2>
        <p>Cancer occurs when cells in the body grow uncontrollably, invading surrounding tissues and spreading to other parts of the body. It can affect almost any organ — the lungs, breast, colon, skin, brain, and more. Early detection dramatically improves survival rates.</p>

        <h2>Early Warning Signs to Never Ignore</h2>
        <ul>
          <li>Unexplained weight loss — losing weight without trying</li>
          <li>Persistent fatigue — tiredness that doesn't go away with rest</li>
          <li>Unusual lumps — any new lump or thickening under the skin</li>
          <li>Changes in skin — new moles, darkening, or yellowing of skin</li>
          <li>Persistent cough or hoarseness — especially with blood</li>
          <li>Difficulty swallowing — lasting more than a few days</li>
          <li>Unexplained bleeding or bruising</li>
        </ul>

        <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800" alt="Prevention" style={imgStyle} />

        <h2>How to Reduce Your Risk</h2>

        <h3>1. Quit Smoking</h3>
        <p>Tobacco is responsible for nearly 1 in 3 cancer deaths. Quitting at any age significantly reduces your risk of lung, throat, and mouth cancers.</p>

        <h3>2. Eat a Healthy Diet</h3>
        <p>Eat plenty of fruits, vegetables, and whole grains. Limit processed meats, red meat, sugar, and ultra-processed foods. A healthy diet can reduce cancer risk by up to 30%.</p>

        <h3>3. Stay Active</h3>
        <p>Regular physical activity reduces the risk of breast, colon, and other cancers. Aim for at least 30 minutes of exercise most days of the week.</p>

        <h3>4. Limit Alcohol</h3>
        <p>Even moderate drinking increases the risk of several cancers including breast, liver, and colon cancer. The less alcohol you drink, the lower your cancer risk.</p>

        <h3>5. Get Vaccinated</h3>
        <p>The HPV vaccine protects against cervical and other cancers. The Hepatitis B vaccine reduces liver cancer risk. Talk to your doctor about which vaccines are right for you.</p>

        <h3>6. Get Regular Screenings</h3>
        <p>Many cancers are treatable when caught early. Talk to your doctor about mammograms, colonoscopy, Pap smear, and low-dose CT scans based on your age and risk factors.</p>

        <h2>Final Thought</h2>
        <p>Cancer does not discriminate — it can affect anyone. But with awareness, prevention, and early action, we have more power than ever before. Take care of your body, know the signs, and never hesitate to seek medical advice.</p>
      </>
    )
  },
]

export { blogs }

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) return <p style={{ padding: '5rem' }}>Blog not found.</p>

  return (
    <main style={{ paddingTop: '5rem', maxWidth: '1100px', margin: '0 auto', padding: '5rem 40px' }}>
      <p style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: 13 }}>{blog.tag}</p>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>{blog.emoji} {blog.title}</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>{blog.date}</p>
      <hr style={{ margin: '20px 0' }} />
      <div style={{ lineHeight: 1.8, fontSize: 18, color: 'var(--text-muted)' }}>
        {blog.description}
      </div>
    </main>
  )
}