"use client";
import Image from "next/image";
import Experience from "../components/exprience";
import Education from "../components/education";
import Certification from "../components/certification";
import { ThreeDCardDemo } from "@/components/tech-card";
import { SparklesPreview } from "@/components/spark";
import { TypewriterEffectSmoothDemo } from "@/components/typewriter-effect";
import { projects, skills, words } from "@/data";
import { MeteorsDemo } from "@/components/meteorscards";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { NextSeo } from "next-seo";
import GithubContributions from "@/components/githubContribution";
import Link from "next/link";
import Contact from "@/components/contact";
import ContactForm from "@/components/contactForm";

const contactLinks = [
  {
    icon: <FaEnvelope className="mr-2" />,
    text: "Email",
    href: "mailto:sirviravindra609@gmail.com",
  },
  {
    icon: <FaPhone className="mr-2" />,
    text: "Contact No.",
    href: "tel:+918107199052",
  },
  {
    icon: <FaLinkedin className="mr-2" />,
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/ravindra-sirvi/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    icon: <FaGithub className="mr-2" />,
    text: "GitHub",
    href: "https://github.com/ravindrasirvi609",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];
const ContactLink = ({ icon, text, href, target, rel }: any) => {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      className="flex items-center text-xl text-sky-300 hover:text-sky-200"
      href={href}
      target={target}
      rel={rel}
    >
      {icon}
      {text}
    </motion.a>
  );
};
export default function Home() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          clearTimeout(timer);
          const newLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setLocation(newLocation);
          console.log("Location:", newLocation);
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsLoading(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setIsLoading(false);
    }

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (location) {
      submitHandler(location);
    }
  }, [location]);

  const submitHandler = async (location: {
    latitude: number;
    longitude: number;
  }) => {
    try {
      const response = await axios.post("/api/addVisitor", location);
      console.log(response);
    } catch (error) {
      console.error("Error submitting location:", error);
    }
  };

  return (
    //  <BackgroundGradientAnimation>

    <main className="flex flex-col items-center justify-center min-h-screen p-8 md:p-16 lg:p-24 bg-black-900 extra-margin">
      {/* Hero Section */}
      <NextSeo
        title="Ravindra Choudhary"
        description="Next Js Develoepr Portfolio"
        noindex={true}
      />
      <section className="my-8 lg:my-16 xl:my-24 flex flex-col lg:flex-row items-center justify-center">
        <div className="content text-center lg:text-left">
          <h2 className="text-base md:text-4xl xl:text-5xl font-bold mb-4">
            Welcome!
          </h2>
          <h2 className="text-base md:text-4xl xl:text-5xl font-bold mb-4">
            Welcome!
          </h2>
        </div>
      </section>

      <div className="text-center mx-auto max-w-screen-lg px-4 sm:px-6 md:px-8">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl text-sky-200">
          <SparklesPreview />
        </h1>
        <TypewriterEffectSmoothDemo />
      </div>
      <GithubContributions />
      <section className="mt-28">
        <h1 className="animate-text bg-gradient-to-r from-red-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent text-5xl font-black m-10">
          Visit here For Chatbot Exprience{" "}
        </h1>
        <div className="flex justify-center items-center">
          <Link
            href="/text-generation"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 ease-in-out transform hover:scale-150"
            style={{ transitionProperty: "background-color, color, transform" }}
          >
            Chatbot
          </Link>
        </div>
      </section>
      {/* About Section */}
      <section className="mt-44">
        <h2 className="text-3xl font-bold text-sky-200 mb-6">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center justify-center md:w-96 md:h-96 shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Ravindra"
              width={300}
              height={300}
              className="rounded-full shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105 rotate-3"
              style={{ perspective: "1000px" }}
            />

            <h3 className="text-xl font-bold text-sky-200 mt-4">Ravindra</h3>
            <p className="text-base md:text-xl lg:text-lg text-sky-400">
              Full Stack Developer
            </p>
            <div className="flex mt-4 space-x-4">
              {contactLinks.map((link) => (
                <ContactLink key={link.text} {...link} />
              ))}
            </div>
          </div>
          <div className="md:w-full text-center">
            <TextGenerateEffect words={words} />
          </div>
        </div>
      </section>
      {/* Tech Stack Section */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-sky-200 mb-4">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex items-center justify-center">
              <ThreeDCardDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-sky-200 mb-4">Skills</h2>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect
            items={skills.map((skill, index) => ({
              title: skill.title,
              description: (
                <ul className="list-disc ml-6">
                  {skill.items.map((item, itemIndex) => (
                    <li key={`${index}-${itemIndex}`}>{item}</li>
                  ))}
                </ul>
              ),
              link: "",
            }))}
          />
        </div>
      </section>
      {/* Projects Section */}
      <section className="mt-12" id="projects">
        <h2 className="text-3xl font-bold text-sky-200 mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <MeteorsDemo key={index} {...project} />
          ))}
        </div>
      </section>
      {/* Experience Section */}
      <Experience />
      {/* Education Section */}
      <Education />
      {/* Certifications Section */}
      <Certification />
      {/* Contact Section */}
      <section
        className="container mx-auto p-4 md:py-12 rounded-lg shadow-md mt-16"
        id="contact"
      >
        <ContactForm />
      </section>
    </main>
    //   </BackgroundGradientAnimation>
  );
}
