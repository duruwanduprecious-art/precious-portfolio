/* =====================================================
   PORTFOLIO DATA FILE
   Users should customize most content here.
   Add more projects or case studies by copying one object.
   ===================================================== */

const projects = [
  {
    title: "NovaPharma Global: Executive BI Dashboard",
    description:
      "A 5-page Power BI dashboard for a fictional 25-country pharma company, built to answer growth, profitability, customer value, marketing ROI and supply chain questions for five different C-suite stakeholders, with every dashboard number independently validated against SQL before being trusted.",
    image: "assets/images/project-revenue.svg",
    tags: ["Power BI", "PostgreSQL", "Figma", "Python"],
    metric: "18.11% stock-out rate tested",
    impact: "4/5 pages validated",
    link: "https://github.com/duruwanduprecious-art/NovaPharma-Global-Executive-BI-Dashboard",
  },
  {
    title: "Personal Banking Transaction Analysis",
    description:
      "Cleaned a year of my own fragmented bank statement exports in Power Query, ran exploratory analysis in PostgreSQL, and built a Power BI dashboard to understand my own spending behavior. The findings led directly to planning a Python expense tracker as a follow-up build.",
    image: "assets/images/project-inventory.svg",
    tags: ["Power Query", "PostgreSQL", "Power BI"],
    metric: "8.6% savings rate found",
    impact: "680 transactions cleaned",
    link: "https://github.com/duruwanduprecious-art/Personal-banking-transaction-analysis",
  },
  {
    title: "E-Commerce Sales EDA",
    description:
      "Exploratory data analysis on an e-commerce sales dataset in Python and pandas, examining product performance, coupon effectiveness, referral sources and customer value to surface patterns like Instagram's outsized role in coupon engagement and revenue.",
    image: "assets/images/project-churn.svg",
    tags: ["Python", "pandas", "Seaborn"],
    metric: "74.25% coupon adoption",
    impact: "$1.26M revenue analyzed",
    link: "https://github.com/duruwanduprecious-art/E-Commerce-sales-data-eda",
  },
];

const services = [
  {
    icon: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 3v4"/>
      <path d="M12 17v4"/>
      <path d="M4.9 4.9l2.8 2.8"/>
      <path d="M16.3 16.3l2.8 2.8"/>
      <path d="M3 12h4"/>
      <path d="M17 12h4"/>
      <path d="M4.9 19.1l2.8-2.8"/>
      <path d="M16.3 7.7l2.8-2.8"/>
    </svg>
    `,
    title: "Data Cleaning & Reporting",
    text: "I take raw, messy or duplicated data and turn it into a clean, structured dataset, with reporting clear enough for anyone on the team to pick up and use.",
  },

  {
    icon: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 18L10 12L14 15L20 8"/>
      <path d="M20 8v5"/>
      <path d="M20 8h-5"/>
    </svg>
    `,
    title: "Data Analysis",
    text: "I dig into a dataset to find what's actually going on beneath the surface: the patterns, problems and opportunities that raw numbers alone won't show you, plus what to do about them.",
  },

  {
    icon: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="4" y="4" width="6" height="6"/>
      <rect x="14" y="4" width="6" height="6"/>
      <rect x="4" y="14" width="6" height="6"/>
      <rect x="14" y="14" width="6" height="6"/>
    </svg>
    `,
    title: "Dashboard & Visualization",
    text: "I turn finished analysis into an interactive Power BI, Excel or Looker Studio dashboard, so performance is something you can check anytime instead of waiting on a new report each time.",
  },
];
