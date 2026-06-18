import { useState } from "react";
import {  ImageIcon } from "lucide-react";
import { ImageGallery } from "./ImageGallery";
import { doctorAppointmentsImages, foodDeliveryImages, khademnyImages, licenseScreenshots } from "@/lib/images";


type Project = {
  title: string;
  description: string;
  longDescription: string[];
  tags: string[];
  github: string;
  live: string;
  screenshots: string[];
  videoUrl: string;
  videoType: "mp4" | "youtube";
};

const projects: Project[] = [
  {
    title: "Driving License Management System",
    description:
      "Full-stack project simulating a driving license management workflow using a structured 3-tier architecture.",
    longDescription:
      [
  `Built workflow for obtaining a local driving license through appointment scheduling and mandatory testing phases, with progression to international license applications.`,
`Implemented license renewal, replacement (lost or damaged), and detained license release workflows.`,
"Developed administrative features for managing people, users, and license-related applications.",
"Designed and applied a 3-tier architecture consisting of Presentation, Business Logic, and Data Access layers.",
"Built reusable React.js components and managed application state using Redux."
],    tags: ["React", "Redux", "C#", "ADO.NET", "SQL Server"],
        github: "https://github.com/omarNaifer12/Driving-License-Management",
    live: "https://nova.example.com",
    screenshots: licenseScreenshots,
    videoUrl: "",
    videoType: "mp4"
  },
 {
  title: "Khademni",
  description:
    "A team-built mobile application connecting users with laborers and service providers across multiple service categories.",
    
  longDescription:
    [`Created laborer profiles that allow users to search for jobs, receive real-time notifications about job opportunities, and manage appointments from their accounts`,
`Implemented a rating system for users to evaluate laborers and a job posting feature for service requests.`,
`Integrated a real-time messaging feature for seamless communication between users and laborers.`

    ],

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
    "Full-stack doctor appointment booking platform with multi-user authentication and flexible payment options.",

  longDescription:
  [`Built a multi-user system for Patients, Doctors, and Admins with JWT-based authentication and protected routes.`,
`Enabled patients to register, browse doctors, book appointments, and manage their schedules.`,
`Integrated flexible payment options including PayPal online payments and on-site payment support.`,
`Implemented appointment management system for doctors with profile updates, scheduling, and booking control.`,

`Developed an admin dashboard to manage users, doctors, and overall system operations.`],

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
    "Full-stack food ordering web application with a cart system and Stripe payment integration.",

  longDescription:
    [`Developed a food delivery app with features that allow users 
to  add food items to their cart and purchase them using payment integration.`,`Enabled admins to manage food items, track orders, and monitor
deliveries.`],
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
               Projects I've  <span className="text-gradient-violet">built</span>
            </h2>
          </div>
         
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
  const [tab,] = useState<"image" | "video">("image");

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
        <ul className="list-disc pl-5 space-y-2">
 {
  project.longDescription.map((desc:any,index)=>{
    return <li key={index}>{desc}</li>
  })

        }
        </ul>
       
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
