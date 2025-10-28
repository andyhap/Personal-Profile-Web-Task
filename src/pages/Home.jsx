import React from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="w-full min-h-screen bg-white">
            <Navbar />
            <ProfileCard />
            <AboutSection />|
            <SkillsSection />
            <Footer />
        </div>
    );
}
