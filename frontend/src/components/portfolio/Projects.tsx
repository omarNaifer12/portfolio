import { useState } from "react";
import {  ExternalLink, Play, ImageIcon } from "lucide-react";
import { ImageGallery } from "./ImageGallery";
import { doctorAppointmentsImages, foodDeliveryImages, khademnyImages, licenseScreenshots } from "@/lib/images";


type Project = {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github: string;
  live: string;
  screenshots: string[];
  videoUrl: string;
  videoType: "mp4" | "youtube";
};
// const drivingLicense:string[]=[
//   "Implemented the complete driving license lifecycle workflow, including application submission, mandatory test phases, license issuance, renewals, replacements, and detained license handling.",
// "Designed and implemented a layered (3-tier) architecture consisting of Presentation (React), Business Logic, and Data Access layers.",
// "Developed and maintained RESTful APIs in C# to handle core system operations.",
// "Built React.js user interfaces with Redux state management, and created reusable frontend components."
// ]
const projects: Project[] = [
  {
    title: "Driving License Management System",
    description:
      "A full-stack system that digitizes and manages driving license workflows, from testing to issuance and renewal.",
    longDescription:
      "Converted a desktop application built with a 3-tier architecture into a modern web application. The system manages the complete driving license lifecycle, including user registration, mandatory testing phases, license issuance, and international license applications. It also supports license renewals, replacements for lost or damaged licenses, and handling detained licenses with structured release workflows. Built with a focus on clean architecture, maintainability, and smooth user experience.",
    tags: ["React", "Redux", "C#", "ADO.NET", "SQL Server"],
        github: "https://github.com/omarNaifer12/Driving-License-Management",
    live: "https://nova.example.com",
    screenshots: licenseScreenshots,
    videoUrl: "",
    videoType: "mp4"
  },
 {
  title: "Khademny",
  description:
    "A mobile platform that connects users with laborers and service providers, featuring job posting, real-time messaging, notifications, and appointment management.",
    
  longDescription:
    "Developed a full-stack mobile application that connects users with laborers and service providers across different fields such as electrical work, plumbing, mechanics, and home maintenance. Users can create job posts requesting services, browse laborer profiles, communicate through real-time messaging, and rate laborers based on completed work. Laborers can create and manage their own profiles, search for available jobs, receive real-time notifications about new opportunities, manage appointments, and interact directly with users through an integrated chat system.",

  tags: ["React Native", "Node.js", "Express.js", "MySQL","JWT","Socket.IO"],

  github: "https://github.com/zah80/thesis-project",

  live: "https://nova.example.com",

  screenshots: khademnyImages,

  videoUrl: "",

  videoType: "mp4",
},
  {
  title: "Doctor-Appointments-Booking-System",

  description:
    "Full-stack doctor appointment booking platform with multi-role authentication and flexible payment options.",

  longDescription:
    "A complete MERN stack doctor appointment booking system built for hospitals and clinics. Patients can register, book appointments, manage schedules, and choose between online PayPal payments or on-site payment methods. Doctors can manage appointments, update profiles, and track earnings through a dedicated dashboard. Admins can oversee doctors, appointments, and platform operations through a secure admin panel. The application features role-based authentication, responsive UI, and appointment management dashboards for patients, doctors, and administrators.",

  tags: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "PayPal",
  ],

  github: "https://github.com/omarNaifer12/Doctor-Appointments-Booking-System#",

  live: "https://your-live-demo.com",

  screenshots: doctorAppointmentsImages,

  videoUrl: "",

  videoType: "mp4",
},
  {
  title: "Food Delivery",

  description:
    "Full-stack food ordering platform with authentication, cart system, and Stripe payment integration.",

  longDescription:
    "A complete full-stack food delivery web application built using the MERN stack. It includes a customer-facing website, an admin dashboard, and a secure backend API. Users can register, log in, browse food items, add products to a shopping cart, and place orders securely. The system supports Stripe payment integration for online checkout and also allows order tracking with real-time status updates managed by the admin panel. Admins can add, update, and manage food items as well as monitor all customer orders through a dedicated dashboard.",

  tags: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Stripe",
  ],

  github: "https://github.com/omarNaifer12/-Food-Delivery-Website",
  live: "https://foodie-express.example.com",

  screenshots: foodDeliveryImages,

  videoUrl: "",
  videoType: "mp4",
}
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-4">
              / Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Recent <span className="text-gradient-violet">projects.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
             Each card has links to the repo,
            screenshots.
            {/* and a video walkthrough. */}
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [tab, setTab] = useState<"image" | "video">("image");

  return (
    <article
      className="rounded-3xl border border-border overflow-hidden grid md:grid-cols-2 gap-0"
      style={{ background: "var(--gradient-card)" }}
    >
      {/* Media side */}
      <div className={`relative bg-secondary/40 min-h-[320px] md:min-h-[480px] ${index % 2 === 1 ? "md:order-2" : ""}`}>
        <div className="absolute top-4 left-4 z-10 flex gap-1 rounded-full glass p-1">
          {/* <button
            onClick={() => setTab("image")}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
              tab === "image" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            <ImageIcon size={12} /> Screenshot
          </button> */}
          {/* <button
            onClick={() => setTab("video")}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
              tab === "video" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            <Play size={12} /> Demo video
          </button> */}
        </div>

        {tab === "image" ? (
          <ImageGallery images={project.screenshots} title={project.title} />
        ) : project.videoUrl ? (
          project.videoType === "youtube" ? (
            <iframe
              src={project.videoUrl}
              title={`${project.title} demo`}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={project.videoUrl}
              controls
              className="absolute inset-0 h-full w-full object-cover bg-black"
            />
          )
        ) : (
          <Placeholder label="" />
        )}
      </div>

      {/* Content side */}
      <div className="p-8 md:p-12 flex flex-col justify-center gap-6">
        <div className="text-sm font-mono text-muted-foreground">
          0{index + 1} / 0{projects.length}
        </div>
        <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
        <p className="text-lg text-foreground/90">{project.description}</p>
        <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-semibold hover:border-primary transition-colors"
          >
            Source code
          </a>
          {/* <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:shadow-glow transition-all"
          >
            <ExternalLink size={16} /> Live demo
          </a> */}
        </div>
      </div>
    </article>
  );
};

const Placeholder = ({ label }: { label: string }) => (
  <div className="absolute inset-0 grid place-items-center p-8 text-center">
    <div className="grid-bg absolute inset-0 opacity-50" />
    <div className="relative space-y-3">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-secondary border border-border">
        <ImageIcon className="text-muted-foreground" />
      </div>
      <p className="text-xs text-muted-foreground max-w-xs">{label}</p>
    </div>
  </div>
);
