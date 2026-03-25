export const dashboardUrl = "https://ca-ui.analytics-hub.com/ca/6b2ef24a-3215-445c-9072-9b375485dada5";

export const modules = [
  { iconName: "analytics", color:"#6C63FF", bg:"rgba(108,99,255,0.12)", title:"Competitor Analysis", desc:"Deep insights into market competitors and their strategies" },
  { iconName: "pulse", color:"#9B59B6", bg:"rgba(155,89,182,0.12)", title:"Enrollment Trends", desc:"Real time analysis of enrollment patterns and forecasting" },
  { iconName: "users", color:"#E67E22", bg:"rgba(230,126,34,0.12)", title:"Market Engagers", desc:"Identify and engage key market segments effectively" },
  { iconName: "screen", color:"#1ABC9C", bg:"rgba(26,188,156,0.12)", title:"Plan Comparison", desc:"AI powered comparative analysis of insurance plans" },
  { iconName: "star", color:"#F39C12", bg:"rgba(243,156,18,0.12)", title:"Winning Plays", desc:"Strategic recommendations based on successful patterns" },
  { iconName: "target", color:"#3498DB", bg:"rgba(52,152,219,0.12)", title:"STARS", desc:"Medicare Star Ratings analysis and optimization" },
  { iconName: "grid", color:"#E74C3C", bg:"rgba(231,76,60,0.12)", title:"Landscape Reports", desc:"Comprehensive market landscape visualization" },
  { iconName: "profile", color:"#9B59B6", bg:"rgba(155,89,182,0.12)", title:"Producer Insights", desc:"Performance analytics and producer effectiveness metrics" },
];

export const stats = [
  { value:"8", label:"AI Modules", cls:"" },
  { value:"24/7", label:"Active Monitoring", cls:"" },
  { value:"Real-time", label:"Data Processing", cls:"realtime" },
  { value:"99.9%", label:"Accuracy Rate", cls:"" },
];

export const aiReplies = [
  "I've analyzed your query across all 8 analytics modules. The data shows strong momentum in the mid-market segment this quarter.",
  "Based on current enrollment trends and competitor positioning, I recommend focusing on the segments showing the highest engagement rates.",
  "The STARS analysis indicates a 12% improvement opportunity in the Medicare rating optimization pipeline.",
  "Competitor intelligence shows 3 key players have shifted strategy in the last quarter. Want me to run a detailed comparison?",
  "Real-time market data suggests the winning play is to target underserved B and C tier segments before Q4.",
  "I've cross-referenced the landscape reports with producer performance metrics and the correlation is significant. Shall I visualize it?",
  "Plan comparison analysis complete. The optimized tier structure could reduce churn by an estimated 18%.",
];

export const dashboardItems = [
  { name: "Enrollment Overview", detail: "Live forecasting for application, activation, and churn signals." },
  { name: "Competitor Radar", detail: "Track competitor moves, pricing shifts, and recent market pushes." },
  { name: "Producer Performance", detail: "Compare producer output, response time, and conversion quality." },
  { name: "Stars Optimization", detail: "Prioritize the measures with the highest ratings lift potential." },
];

export const starterHistory = [
  "Q4 market trend summary",
  "Competitor movement analysis",
  "Enrollment risk review",
  "Producer performance snapshot",
];

export const initialChatMessage = {
  role: "ai",
  text: "Hello! I'm your AI Analytics assistant. Ask me about trends, competitors, dashboards, or performance signals.",
};
