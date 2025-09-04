"use client";

import Image from "next/image";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaWordpress,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiDjango } from "react-icons/si";
import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "React.js", icon: <FaReact size={40} className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-400" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-600" /> },
  { name: "PHP", icon: <FaPhp size={40} className="text-indigo-400" /> },
  { name: "WordPress", icon: <FaWordpress size={40} className="text-blue-600" /> },
  { name: "Python", icon: <FaPython size={40} className="text-yellow-400" /> },
  { name: "Django", icon: <SiDjango size={40} className="text-green-700" /> },
  { name: "Databases", icon: <FaDatabase size={40} className="text-gray-400" /> },
];

const projects = [
  {
    title: "Portfolio Website",
    desc: "My personal portfolio built with Next.js, TailwindCSS, and an AI-inspired animated background.",
    href: "https://github.com/judgevan/portfolio",
  },
  {
    title: "Task API (Python)",
    desc: "Backend API built with Python for task management.",
    href: "https://github.com/judgevan/task-api",
  },
  {
    title: "Workcity Chat (WordPress)",
    desc: "A WordPress plugin for real-time chat.",
    href: "https://github.com/judgevan/workcity-chat-wordpress",
  },
  {
    title: "Workcity Chat Frontend",
    desc: "Frontend interface for chat system using JavaScript.",
    href: "https://github.com/judgevan/workcity-chat-frontend",
  },
  {
    title: "Workcity Chat Backend",
    desc: "Backend API built to support the chat system.",
    href: "https://github.com/judgevan/workcity-chat-backend",
  },
  {
    title: "Task Manager API",
    desc: "A RESTful API with authentication and CRUD operations.",
    href: "https://github.com/judgevan/task-manager-api",
  },
  {
    title: "Weather App UI",
    desc: "A frontend React weather app with real-time API integration.",
    href: "https://github.com/judgevan/weather-app-ui",
  },
];

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // AI-style particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; dx: number; dy: number; radius: number }[] = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5,
        radius: 2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#00f5d4";
        ctx.fill();

        particles.forEach((p2, j) => {
          if (i !== j) {
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y); // <-- now const
            if (dist < 120) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = "rgba(0,245,212,0.15)";
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      {/* Background */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-[#0a0a0a]" />

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6 text-white">
          <h1 className="text-xl font-bold">Odeh Judge</h1>
          <ul className="flex space-x-6">
            <li><a href="#hero" className="hover:text-teal-400">Home</a></li>
            <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="flex flex-col items-center justify-center text-center py-28 text-white">
        <Image
          src="/profile.jpg"
          alt="Odeh Judge"
          width={150}
          height={150}
          className="rounded-full shadow-lg"
        />
        <h2 className="text-4xl font-bold mt-6">Hi, I&apos;m <span className="text-teal-400">Odeh Judge</span></h2>
        <p className="text-gray-300 mt-4 max-w-xl">
          A passionate software engineer and web developer, building scalable apps and exploring Web3, AI, and modern backend technologies.
        </p>
        <div className="flex space-x-6 mt-6">
          <a href="https://github.com/judgevan" target="_blank" rel="noopener noreferrer"><Github /></a>
          <a href="https://linkedin.com/in/judgevan" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
          <a href="https://twitter.com/judgevan" target="_blank" rel="noopener noreferrer"><Twitter /></a>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container mx-auto py-20 text-white">
        <h3 className="text-3xl font-bold text-center">Skills</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 text-center">
          {skills.map((s) => (
            <div
              key={s.name}
              className="p-6 bg-gray-900/50 rounded-lg shadow-md hover:shadow-teal-500/30 transition"
            >
              <div className="flex justify-center">{s.icon}</div>
              <p className="mt-2">{s.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container mx-auto py-20 text-white">
        <h3 className="text-3xl font-bold text-center">Projects</h3>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {projects.map((p) => (
            <div
              key={p.title}
              className="p-6 bg-gray-900/70 rounded-lg shadow-md hover:translate-y-[-4px] transition"
            >
              <h4 className="font-bold">{p.title}</h4>
              <p className="text-gray-400 mt-2">{p.desc}</p>
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-teal-400 mt-3 inline-block">View on GitHub</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto py-20 text-center text-white">
        <h3 className="text-3xl font-bold">Contact Me</h3>
        <p className="text-gray-300 mt-4">
          I&apos;d love to connect with you! Whether it&apos;s a project, a job opportunity, or just a chat about tech.
        </p>
        <div className="mt-6 space-x-6 flex justify-center">
          <a href="mailto:judgevan2@gmail.com" className="bg-teal-600 px-6 py-2 rounded-lg hover:bg-teal-700 flex items-center gap-2">
            <Mail size={18} /> Email Me
          </a>
          <a href="https://linkedin.com/in/judgevan" target="_blank" rel="noopener noreferrer" className="bg-gray-700 px-6 py-2 rounded-lg hover:bg-gray-600 flex items-center gap-2">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 py-6 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Odeh Judge. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-3">
          <a href="https://github.com/judgevan" target="_blank" rel="noopener noreferrer"><Github /></a>
          <a href="https://linkedin.com/in/judgevan" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
        </div>
      </footer>
    </div>
  );
}
