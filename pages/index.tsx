import Head from "next/head";
import Features from "../components/Features";
import Benefits from "../components/Benefits";
import Form from "../components/Form";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Faq from "../components/Faq";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Road Rescue & Maintenance Company</title>
        <meta
          name="description"
          content="Road Rescue and Maintenance Company. Specialized in road repair"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Hero />
        <Benefits />
        <Form />
        <Features />
        <Faq />
        <Banner />
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
