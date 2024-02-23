"use client"
import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "@/components/Footer";
import FinancialNews from "./FinancialNews";

function News() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-6 lg:px-8 mt-32 mb-24">
        <section className="border-b-1 pb-12 mb-12">
          <h1 className="mb-4 text-lg font-extralight">NEWS</h1>
          <h1 className="font-medium text-4xl">Financial News</h1>
        </section>
        <section className="mb-12">
            <FinancialNews />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default News;
