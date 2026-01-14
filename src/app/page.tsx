"use client";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceIntro from "@/components/ServiceIntro";
import LogoCarousel from "@/components/LogoCarousel";
import Features from "@/components/Features";
import DataAnalysis from "@/components/DataAnalysis";
import Achievements from "@/components/Achievements";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Hero />
      <LogoCarousel />
      <ServiceIntro />
      <Features />
      <DataAnalysis />
      <Achievements />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
