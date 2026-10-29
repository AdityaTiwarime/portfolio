// Everything shown on the site lives here, so updating the portfolio means editing this one file.

export const profile = {
  name: "Aditya Tiwari",
  role: "Software Engineer",
  intro:
    "I build web applications, backend services and machine learning systems, and I measure whether they work: tests in CI, load tests, and numbers I can defend.",
  location: "Visakhapatnam, India",
  email: "at04proguys@gmail.com",
  phone: "+91 8866251941",
  github: "https://github.com/AdityaTiwarime",
  linkedin: "https://www.linkedin.com/in/adityatiwarime/",
};

export type SpanKind = "education" | "work" | "internship";

export interface TraceSpan {
  id: string;
  label: string;
  detail: string;
  kind: SpanKind;
  start: string; // YYYY-MM
  end: string; // YYYY-MM, inclusive month
}

// The hero's trace waterfall. The axis starts in 2025, so the degree span is clipped on the left.
export const trace = {
  axisStart: "2025-01",
  axisEnd: "2026-10",
  spans: [
    { id: "gitam", label: "B.Tech, Computer Science Engineering", detail: "GITAM University", kind: "education", start: "2022-08", end: "2026-08" },
    { id: "pwc", label: "Software Engineering Trainee", detail: "PwC, Salesforce Launchpad", kind: "work", start: "2025-01", end: "2025-07" },
    { id: "altair", label: "Data Science Intern", detail: "Altair", kind: "internship", start: "2025-04", end: "2025-06" },
    { id: "jtp", label: "System Engineer Trainee", detail: "JTP (Japan Third Party)", kind: "work", start: "2026-03", end: "2026-08" },
  ] satisfies TraceSpan[],
};

export interface Job {
  id: string;
  company: string;
  role: string;
  dates: string;
  place: string;
  points: string[];
}

export const jobs: Job[] = [
  {
    id: "jtp",
    company: "JTP (Japan Third Party Co., Ltd.)",
    role: "System Engineer Trainee",
    dates: "Mar 2026 – Aug 2026",
    place: "Remote from India",
    points: [
      "Owned end-to-end delivery of a containerized movie recommendation service (React, FastAPI, PostgreSQL), from requirement analysis and design documents through implementation, testing and a formal technical review with the Japan-based team.",
      "Designed 5 REST endpoints over a ~10,000-movie catalog, with TF-IDF and cosine-similarity ranking computed per query instead of holding an ~800 MB precomputed matrix in memory.",
      "Cut poster loading time by fetching images in parallel on a 10-worker thread pool with caching, and shipped the stack as 3 Docker Compose services run with a single command.",
      "Followed Japanese quality practices (PDCA, Kaizen, Horenso, 5S), reporting daily and folding review feedback into the design, code and documentation.",
    ],
  },
  {
    id: "altair",
    company: "Altair",
    role: "Data Science Intern, graded Excellent",
    dates: "Apr 2025 – Jun 2025",
    place: "Remote, India",
    points: [
      "Built ML classification and clustering pipelines in RapidMiner over 100K+ records, using cross-validation and hyperparameter tuning to reach 92% model accuracy.",
      "Automated preprocessing (correlation analysis, PCA, outlier removal), trimming feature dimensionality by ~30% and shortening experiment cycles by ~25%.",
    ],
  },
  {
    id: "pwc",
    company: "PwC (Salesforce Launchpad Program)",
    role: "Software Engineering Trainee",
    dates: "Jan 2025 – Jul 2025",
    place: "Remote, India",
    points: [
      "Shipped 3 enterprise-grade applications in a 6-month program across 4 certified tracks (Java, SQL, RDBMS, Salesforce CRM).",
      "Designed normalized SQL schemas across 15+ tables and tuned queries with indexing, cutting average query time by ~35%.",
      "Delivered features across 6 Agile sprints with peer code reviews, and configured 20+ Salesforce CRM automation rules and dashboards.",
    ],
  },
];

export type ProjectArea = "software" | "data";

export interface Project {
  id: string;
  name: string;
  summary: string;
  area: ProjectArea;
  metric: string; // the one number worth remembering
  points: string[];
  stack: string[];
  repo?: string;
  live?: string;
  context?: string;
}

export const projects: Project[] = [
  {
    id: "servscope",
    name: "ServScope",
    summary: "Distributed tracing and observability platform",
    area: "software",
    metric: "3,400 → 17,000 spans/s",
    points: [
      "Ingests OpenTelemetry traces and logs from a 4-service app, builds per-minute metrics at ingest, and links each alert to the traces that show the root cause, in a React + TypeScript dashboard.",
      "Idempotent ingestion: data confirmed only after commit, duplicate-safe keys and 503 backpressure, verified by failure drills (database outage, crash mid-write, traffic flood).",
      "Profiled with py-spy and rewrote the hot database path in SQLAlchemy Core, raising throughput about 5x on one core, measured with Locust. CI runs 220 tests, Playwright and security scans.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "OpenTelemetry", "React", "TypeScript", "Docker", "Locust"],
    repo: "https://github.com/AdityaTiwarime/servscope",
  },
  {
    id: "claimflow",
    name: "ClaimFlow",
    summary: "Event-driven health insurance claims processing",
    area: "software",
    metric: "32 JUnit + 4 Selenium tests",
    points: [
      "Two Spring Boot microservices that adjudicate claims over Apache Kafka: coverage dates, covered services, deductible, coinsurance and annual maximum decide approve, deny or pend.",
      "Events published only after the database commit, idempotent decision handling, retries and a dead-letter topic. Claims live in MySQL (Flyway), the audit timeline in MongoDB.",
      "GitHub Actions runs the JUnit and Selenium suites plus a Docker Compose smoke test against real MySQL, MongoDB and Kafka; logs ship to Splunk.",
    ],
    stack: ["Java", "Spring Boot", "Apache Kafka", "MySQL", "MongoDB", "JUnit 5", "Selenium", "Docker", "Splunk"],
    repo: "https://github.com/AdityaTiwarime/claimflow",
  },
  {
    id: "medcard",
    name: "AI Med Card",
    summary: "Full-stack healthcare platform",
    area: "software",
    metric: "Live, 3 role-based portals",
    points: [
      "Patient, Doctor and Superadmin portals on a FastAPI REST backend and PostgreSQL, with bcrypt + JWT role-based auth, deployed with Docker on Render.",
      "AI analysis of uploaded PDF and image reports, appointment booking and an anonymized QR emergency card, covered by 19 pytest API tests and Playwright end-to-end tests.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "JWT", "pytest", "Playwright", "Docker", "JavaScript"],
    repo: "https://github.com/AdityaTiwarime/medcard",
    live: "https://medcard-ai.onrender.com/",
  },
  {
    id: "wind",
    name: "Wind Forecast Monitor",
    summary: "How far off were the UK wind forecasts when traders bought power?",
    area: "software",
    metric: "4.4 GW buffer covers 9 hours in 10",
    points: [
      "For every hour, picks the newest national wind forecast that existed at the day-ahead buying deadline, with no look-ahead, and compares it with what wind actually produced (Elexon data, January 2026).",
      "Typical error 2.1 GW, forecasts ran 1.8 GW high on average; correcting with the previous week's bias cut the error by 16%. Every quoted number is printed by one script.",
      "React + TypeScript dashboard over a FastAPI API with validated inputs, 19 backend and 4 frontend tests, Docker, and a live Vercel deployment.",
    ],
    stack: ["Python", "FastAPI", "Pandas", "React", "TypeScript", "Docker", "Vercel"],
    repo: "https://github.com/AdityaTiwarime/qx7vrn",
    live: "https://qx7vrn.vercel.app",
  },
  {
    id: "movies",
    name: "Movie Recommender",
    summary: "Content-based recommendation service, built at JTP",
    area: "software",
    metric: "~10,000 titles, no 800 MB matrix",
    points: [
      "Merged two public movie datasets into a cleaned ~10,000-title catalog and ranks titles with TF-IDF and cosine similarity computed per query.",
      "React front end, FastAPI + PostgreSQL backend, parallel poster fetching, shipped as three Docker Compose services and taken through a formal technical review.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "Scikit-Learn", "Docker"],
    repo: "https://github.com/AdityaTiwarime/movie-recommender",
  },
  {
    id: "solvane",
    name: "Solvane",
    summary: "Desktop web browser for Windows",
    area: "software",
    metric: "72 tests, installer built in CI",
    points: [
      "Chromium-based desktop browser in Python (PyQt6 + Qt WebEngine) with tabs, a smart address bar, bookmarks, SQLite history, downloads, incognito profiles, dark mode and session restore.",
      "Request-level ad and tracker blocker (150+ domains), internal pages protected from framing and script injection, and atomic file writes so a crash can't corrupt user data.",
      "72 pytest tests including headless-Chromium integration tests; GitHub Actions builds a Windows installer (PyInstaller + Inno Setup) on every push.",
    ],
    stack: ["Python", "PyQt6", "Qt WebEngine", "SQLite", "pytest", "PyInstaller", "GitHub Actions"],
    repo: "https://github.com/AdityaTiwarime/solvane-browser",
  },
  {
    id: "resilience",
    name: "RESILIENCE",
    summary: "Fraud-risk scoring with explanations and drift monitoring",
    area: "data",
    metric: "59 automated tests",
    points: [
      "Leakage-safe temporal split, LightGBM against logistic regression and a baseline, with the test window scored once using bootstrap confidence intervals.",
      "Approve / review / hold threshold chosen by misclassification cost, every score explained with SHAP, served through a FastAPI + PostgreSQL API with idempotent requests and an audit log.",
      "PSI/KS drift monitoring with de-duplicated alerts, candidate retraining with promotion checks and rollback, and a React + TypeScript analyst dashboard.",
    ],
    stack: ["Python", "Pandas", "Scikit-Learn", "LightGBM", "SHAP", "MLflow", "FastAPI", "PostgreSQL", "React", "TypeScript"],
    repo: "https://github.com/AdityaTiwarime/resilience",
  },
  {
    id: "churn",
    name: "Customer Churn Intelligence",
    summary: "Which customers leave, why, and what to do about it",
    area: "data",
    metric: "ROC-AUC 0.85, 2.9x top-decile lift",
    points: [
      "SQL cohort and revenue analysis over 7,043 telecom customers in PostgreSQL: month-to-month fiber customers drive 72% of lost revenue.",
      "XGBoost tuned against logistic regression and LightGBM with class weighting and 5-fold CV, with SHAP explanations per customer, chi-square and Welch t-tests, and 7 segments (churn 2% to 57%).",
      "Live FastAPI + Docker service on Render with OpenAI-written retention plans, MLflow tracking and Power BI exports.",
    ],
    stack: ["Python", "SQL", "PostgreSQL", "XGBoost", "LightGBM", "SHAP", "MLflow", "FastAPI", "OpenAI API", "Power BI"],
    repo: "https://github.com/AdityaTiwarime/churn-intelligence",
    live: "https://churn-intelligence-34rc.onrender.com/",
  },
  {
    id: "retail",
    name: "Retail Sales & Customer Analytics",
    summary: "SQL analysis and an interactive Power BI dashboard",
    area: "data",
    metric: "RFM segments, DAX KPIs",
    points: [
      "Cleaned and modeled retail sales data in SQL, segmenting customers with RFM analysis using CTEs and window functions, and ran a t-test to check whether discounts truly lift sales.",
      "Interactive Power BI dashboard with DAX measures for revenue, profit margin and YoY growth, with region and category drill-downs, plus an Excel pivot-table summary.",
    ],
    stack: ["SQL", "Power BI", "DAX", "MS Excel", "Python", "Pandas", "SciPy"],
  },
  {
    id: "krishibal",
    name: "KrishiBal",
    summary: "AI farmer portal: plant disease detection and crop advice",
    area: "data",
    metric: "99.26% test accuracy, 38 classes",
    points: [
      "CNN plant-disease classifier trained on 54,305 PlantVillage images, served with ONNX Runtime on Vercel with remedy suggestions for each disease.",
      "Crop recommendation model and a multilingual voice chatbot behind modular Flask services, with a PostgreSQL-backed community forum.",
    ],
    stack: ["Python", "PyTorch", "ONNX Runtime", "Flask", "Scikit-Learn", "PostgreSQL"],
    repo: "https://github.com/AdityaTiwarime/KrishiBal",
    live: "https://krishibal.vercel.app/",
    context: "Smart India Hackathon 2025",
  },
  {
    id: "srb",
    name: "Smart Retailer Buddy",
    summary: "AI shopping assistant that finds products in a supermarket",
    area: "data",
    metric: "51% less time to find a product",
    points: [
      "Shoppers ask by voice or text in English, Hindi or Telugu; an on-device intent model (98.5% on 137 unseen sentences, about 5 ms per answer) with GPT as a fallback picks out the item, budget and diet.",
      "Shows the exact aisle and shelf on a real floor plan with the shortest route (nearest-neighbour + 2-opt), AR product previews and AR directions, and collaborative-filtering recommendations.",
      "In a simulation of 1,000 shoppers, average time to find a product fell from 65.6 s to 31.9 s; recommendations found the hidden basket item in the top 5 56% of the time vs 15% for best-sellers.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "OpenAI API", "NumPy", "JavaScript", "ARCore"],
    repo: "https://github.com/AdityaTiwarime/smart-retailer-buddy",
    live: "https://smart-retailer-buddy.onrender.com",
    context: "Built from my idea at Walmart Global Tech Hackathon 2025 (selected among the top teams)",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "R (dplyr, ggplot2)", "HTML5", "CSS3"] },
  { group: "Front end", items: ["React", "Responsive web design", "REST API integration", "Component-based UI"] },
  { group: "Backend", items: ["Spring Boot", "Spring Data JPA", "Hibernate", "Spring Security", "FastAPI", "Flask", "Node.js", "Express.js", "REST APIs", "GraphQL", "Apache Kafka", "Microservices", "JWT auth"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite", "BigQuery", "SQLAlchemy", "Flyway", "CTEs", "Window functions", "Joins", "Indexing", "Query optimization"] },
  { group: "Machine learning", items: ["Scikit-Learn", "XGBoost", "LightGBM", "SHAP", "PyTorch", "TensorFlow", "Keras", "OpenCV", "ONNX Runtime", "Regression", "Classification", "Clustering", "Ensemble methods", "PCA", "Hyperparameter tuning", "Cross-validation", "Reinforcement learning"] },
  { group: "Deep learning and NLP", items: ["CNN", "ResNet50", "Transfer learning", "NLP", "BERT"] },
  { group: "GenAI and agents", items: ["LLMs", "OpenAI API", "Hugging Face Transformers", "LangChain", "RAG", "Agentic AI", "Prompt engineering", "GitHub Copilot"] },
  { group: "Data analysis and statistics", items: ["Pandas", "NumPy", "PySpark", "EDA", "Data cleaning", "Data wrangling", "Feature engineering", "Outlier treatment", "Descriptive statistics", "Statistical modeling", "Hypothesis testing", "A/B testing", "Bootstrap CIs", "Time series forecasting (ARIMA)"] },
  { group: "BI and visualization", items: ["Power BI (DAX, Power Query)", "Tableau", "Looker Studio", "Advanced Excel (Pivot Tables, XLOOKUP, Power Pivot)", "Google Sheets", "Matplotlib", "Seaborn", "Folium"] },
  { group: "Data engineering and analytics", items: ["ETL", "Star schema", "Airflow", "Databricks", "Data validation", "Data quality checks", "Cohort analysis", "RFM segmentation", "Funnel analysis", "Churn analysis", "KPI reporting", "Data storytelling"] },
  { group: "MLOps", items: ["MLflow", "Model monitoring", "Data drift (PSI/KS)", "Model versioning"] },
  { group: "Testing", items: ["JUnit 5", "Mockito", "Selenium", "Playwright", "pytest", "Locust", "API and regression testing"] },
  { group: "Cloud and DevOps", items: ["AWS (EC2, S3, RDS, SageMaker)", "Docker", "Kubernetes", "Jenkins", "GitHub Actions (CI/CD)", "Prometheus", "Grafana", "Splunk", "OpenTelemetry", "Linux", "Bash", "Git", "Vercel", "Render"] },
  { group: "Automation", items: ["Power Automate Desktop", "Power Automate AI Builder", "Copilot Studio", "UiPath", "RPA migration"] },
  { group: "Tools", items: ["Jupyter Notebook", "Google Colab", "RapidMiner", "Kaggle", "Salesforce CRM"] },
  { group: "Core CS", items: ["Data structures and algorithms", "OOP", "Design patterns", "Multithreading", "System design", "Distributed systems", "DBMS", "Operating systems", "Computer networks"] },
  { group: "Ways of working", items: ["SDLC", "Agile/Scrum", "Kanban", "Code reviews", "Secure coding", "OWASP", "PDCA", "Troubleshooting"] },
];

export const credentials = {
  education: {
    school: "GITAM University, Visakhapatnam",
    degree: "B.Tech in Computer Science Engineering",
    dates: "2022 – 2026",
    grade: "CGPA 7.44",
  },
  certifications: [
    "PwC Salesforce Launchpad Program: IT Fundamentals, Java, RDBMS, Salesforce CRM (2025)",
    "NPTEL: Data Science (IIT)",
    "Coursera: Python Data Structures (University of Michigan)",
    "Coursera: Introduction to Cloud Computing (IBM)",
    "Mastering Generative AI Workshop, IIT Hyderabad (2024)",
  ],
  achievements: [
    "Selected among the top teams nationally at Walmart Global Tech Hackathon 2025, with 500+ teams competing.",
    "Built and demoed the KrishiBal AI farmer portal at Smart India Hackathon 2025.",
    "E-Club Co-Coordinator at GITAM University: led 10+ entrepreneurship events and workshops for 200+ students.",
  ],
};

export const resumes = [
  { label: "Software Engineer", file: "/resumes/Aditya_Tiwari_Software_Engineer.pdf" },
  { label: "AI Software Engineer", file: "/resumes/Aditya_Tiwari_AI_Software_Engineer.pdf" },
  { label: "Data Scientist", file: "/resumes/Aditya_Tiwari_Data_Scientist.pdf" },
  { label: "Data Analyst", file: "/resumes/Aditya_Tiwari_Data_Analyst.pdf" },
];
