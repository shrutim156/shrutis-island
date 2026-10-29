export const projects = [
  {
    id: "crop-recommendation",
    title: "Crop Recommendation & Price Prediction System",
    subtitle: "AI-Powered Agriculture Insights",
    type: "Machine Learning",
    status: "Deployed",
    description: "An intelligent machine learning web application that recommends optimal crops and predicts market prices based on soil composition, weather parameters, and environmental factors.",
    problem: "Farmers often face challenges in deciding the most suitable crop to cultivate and predicting market prices for optimal profit margins.",
    solution: "Built a Streamlit web interface backed by ML models trained on agricultural and soil parameters to provide real-time recommendations.",
    keyConcepts: ["Supervised Learning", "Recommendation System", "Agricultural Analytics", "Price Prediction"],
    technologies: ["Python", "Streamlit", "Scikit-Learn", "Pandas", "NumPy"],
    github: "https://github.com/shrutim156/crop-recommendation-system",
    liveDemo: "https://crop-recommendation-system-ywplvnjevukvncjyrntdup.streamlit.app/"
  },
  {
    id: "customer-churn",
    title: "Customer Churn Prediction",
    subtitle: "Predictive Analytics for Customer Retention",
    type: "Predictive Analytics",
    status: "Deployed",
    description: "A machine learning application designed to identify customers who are likely to churn, helping businesses proactively retain customers.",
    problem: "Customer attrition impacts revenue, making early detection of churn signals critical for targeted retention strategies.",
    solution: "Trained classification models to analyze customer behavior and key metrics, deployed with a web frontend on Render.",
    keyConcepts: ["Classification", "Churn Analysis", "Model Evaluation", "Web API"],
    technologies: ["Python", "Machine Learning", "Scikit-Learn", "Flask", "Render"],
    github: "https://github.com/shrutim156/customer-churn-prediction",
    liveDemo: "https://customer-churn-prediction-pyyv.onrender.com/"
  },
  {
    id: "used-car-price",
    title: "Used Car Price Prediction",
    subtitle: "Automobile Valuation Web App",
    type: "Web Application",
    status: "Deployed",
    description: "A predictive web tool that accurately estimates the market resale price of used cars based on mileage, age, brand, fuel type, and condition.",
    problem: "Determining fair resale values for pre-owned vehicles can be difficult due to varying market parameters.",
    solution: "Developed regression models trained on historical vehicle sales data to estimate accurate prices instantaneously.",
    keyConcepts: ["Regression", "Feature Engineering", "Data Preprocessing", "Web Deployment"],
    technologies: ["Python", "Regression", "Scikit-Learn", "Flask", "Render"],
    github: "https://github.com/shrutim156/Used_Car_Price_Prediction",
    liveDemo: "https://used-car-price-prediction-abbo.onrender.com/"
  },
  {
  id: 'ai-interview-questions-generator',
  type: 'AI / Web App',
  title: 'AI Interview Questions Generator',
  subtitle: 'Automated Interview Preparation Tool',
  status: 'Deployed',
  description: 'An AI-powered application designed to generate tailored interview questions and answer guidance based on job roles, tech stacks, and difficulty levels.',
  problem: 'Preparing for interviews often involves manually searching for relevant questions, which can be repetitive, unorganized, and poorly tailored to specific job requirements.',
  solution: 'Leveraged generative AI to create customized, role-specific interview question sets with detailed explanations to streamline technical interview prep.',
  keyConcepts: [ 'Prompt Engineering', 'API Integration', 'Automated Evaluation'],
  technologies: ['Python', 'FastApi', 'Gemini API', 'Render'], // Adjust specs according to your exact stack
  github: 'https://github.com/shrutim156/ai-interview-questions-generator',
  liveDemo: 'https://ai-interview-questions-generator-hidj.onrender.com/'
}
];