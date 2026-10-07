import React,{useState}from"react";
import{createRoot}from"react-dom/client";
import{Menu,X,ArrowUpRight,BarChart3,Code2,Database,Palette,Sparkles,Mail,ExternalLink}from"lucide-react";
import"./style.css";

const projects=[
{title:"Data Analytics",desc:"Data analytics practice projects focused on cleaning, exploring, visualizing, and understanding data.",tags:["Python","Pandas","Jupyter","Matplotlib","Seaborn"],icon:<BarChart3/>,link:"https://github.com/jkayekaye/Data-Analytics"},
{title:"Portfolio Website",desc:"A React project for practicing personal portfolio design, responsive layouts, and clean interfaces.",tags:["React","JavaScript","HTML","CSS"],icon:<Code2/>,link:"https://github.com/jkayekaye/PORTFOLIO"},
{title:"Book Library",desc:"A small React application created to practice interactive web development and component-based design.",tags:["React","JavaScript","CSS"],icon:<Database/>,link:"https://github.com/jkayekaye/Quiz2-Book-Library"},
{title:"My Website",desc:"A personal website project created while practicing front-end development and page design.",tags:["HTML","CSS","JavaScript"],icon:<Palette/>,link:"https://github.com/jkayekaye/my-website"}
];
const skills=["🐍 Python","⚛️ React","🌿 Django","✨ JavaScript","🌐 HTML & CSS","🐼 Pandas","📊 Matplotlib","📈 Seaborn","📓 Jupyter","🗄️ MySQL","🎨 Figma","🐙 Git & GitHub"];

function App(){
 const[open,setOpen]=useState(false);
 const go=id=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setOpen(false)};
 return <div className="app">
  <header><div className="nav">
   <button className="brand" onClick={()=>go("home")}>🌷 <b>Janelle Kaye</b></button>
   <nav className={open?"open":""}>{["home","about","skills","projects","contact"].map(x=><button key={x} onClick={()=>go(x)}>{x[0].toUpperCase()+x.slice(1)}</button>)}<a href="https://github.com/jkayekaye" target="_blank"> <span className="ghmark">GH</span> GitHub</a></nav>
   <button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </div></header>

  <main>
   <section id="home" className="hero wrap">
    <div><div className="eyebrow"><Sparkles size={15}/> Welcome to my portfolio</div>
     <h1>Hi, I'm <span>Janelle Kaye</span>! 🌷</h1>
     <h2>IT Student · Aspiring Data Analyst · UI/UX Enthusiast</h2>
     <p>I enjoy creating websites, developing systems, exploring data, and turning ideas into simple and useful digital experiences.</p>
     <div className="actions"><button className="primary" onClick={()=>go("projects")}>View My Projects <ArrowUpRight size={17}/></button><a className="secondary" href="https://github.com/jkayekaye" target="_blank"><span className="ghmark">GH</span> GitHub</a></div>
     <div className="facts"><span>📊 Data Analysis</span><span>💻 Web Development</span><span>🎨 UI/UX</span></div>
    </div>
    <div className="hero-art"><div className="orbit a">📊</div><div className="orbit b">💻</div><div className="orbit c">🎨</div><div className="profile"><div className="avatar">JK</div><div>✿　♡　✿</div><h3>Janelle Kaye</h3><p>Building my skills one project at a time.</p><small>● Always learning</small></div></div>
   </section>

   <section id="about" className="section wrap"><div className="heading"><small>01 · ABOUT ME</small><h2>A little bit about me 🌸</h2></div>
    <div className="about"><div className="card"><p>Hi! I'm <b>Janelle Kaye Borabo</b>, an Information Technology student who enjoys learning through hands-on projects.</p><p>I like working with websites, databases, Python, and data visualization. I'm especially interested in data analytics and creating interfaces that are clean, simple, and easy to use.</p><p>I'm still learning, but every project gives me a chance to improve, experiment, and discover something new. ♡</p></div>
    <div className="info"><div>🎓 <b>Education</b><small>Information Technology</small></div><div>📊 <b>Career Goal</b><small>Become a Data Analyst</small></div><div>🌱 <b>Learning</b><small>Python · SQL · Analytics</small></div><div>💗 <b>Style</b><small>Simple · Clean · User-friendly</small></div></div></div>
   </section>

   <section id="skills" className="section soft"><div className="wrap"><div className="heading center"><small>02 · SKILLS</small><h2>Tools I enjoy working with 🛠️</h2><p>Technologies and tools I'm practicing.</p></div><div className="skills">{skills.map(s=><span key={s}>{s}</span>)}</div></div></section>

   <section id="projects" className="section wrap"><div className="heading"><small>03 · PROJECTS</small><h2>Some things I've built 💻</h2><p>A few projects from my GitHub.</p></div>
    <div className="projects">{projects.map(p=><article className="project" key={p.title}><div className="icon">{p.icon}</div><div className="projecttop"><small>PROJECT</small><a href={p.link} target="_blank"><ExternalLink size={17}/></a></div><h3>{p.title}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><a className="projectlink" href={p.link} target="_blank">View on GitHub <ArrowUpRight size={15}/></a></article>)}</div>
    <div className="loan"><div>💰</div><article><small>MAJOR ACADEMIC PROJECT</small><h3>LOANMOTO</h3><p>An intelligent loan management, payment monitoring, and risk assessment system with automated SMS notification.</p><div className="tags"><span>Django</span><span>Python</span><span>Database</span><span>JavaScript</span></div></article></div>
   </section>

   <section className="goal"><div className="wrap goalin"><div><small>04 · CAREER GOAL</small><h2>Turning data into useful insights. 📊</h2><p>My goal is to become a Data Analyst and use technology and data to understand problems, find patterns, and support better decisions.</p><div className="path"><span>Python</span>→<span>SQL</span>→<span>Cleaning</span>→<span>Visualization</span>→<span>Insights</span></div></div><div className="goalbadge">📊<b>Data</b><small>with purpose</small></div></div></section>

   <section id="contact" className="section wrap contact"><div className="contactcard"><div>🌷</div><small>05 · LET'S CONNECT</small><h2>Thanks for visiting my portfolio! ♡</h2><p>I'm always happy to learn, build, and connect with other people who love technology.</p><div className="actions center"><a className="primary" href="https://github.com/jkayekaye" target="_blank"><span className="ghmark">GH</span> Visit My GitHub</a><a className="secondary" href="mailto:your-email@example.com"><Mail size={17}/> Email Me</a></div><em>Replace the email link with your public email address.</em></div></section>
  </main>
  <footer><div className="wrap foot"><span>Made with ♡ by Janelle Kaye</span><span>🌷 Keep learning. Keep building.</span></div></footer>
 </div>
}
createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);