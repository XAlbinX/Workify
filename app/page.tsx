import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Hero from "@/components/shared/Hero";
import Jobs from "@/components/shared/Jobs";
import Sponsors from "@/components/shared/Sponsors";
import { prisma } from "@/lib/prisma";
import { jobType } from "@/types/jobTypes";

interface HeroProps {
  jobs: jobType[];
}
// Define the loader function to fetch data on the server side
export const loader = async () => {
  // Fetch data from your API or database
  const jobs = await prisma.jobPosting.findMany({});
  
  // Return the fetched data as props
  return {
    props: {
      jobs,
    },
  };
};

const Home = async ({ jobs } : HeroProps) => {
  jobs = await prisma.jobPosting.findMany({});
  return (
    <>
      <Hero jobs={jobs} />
      <Jobs />
      <Sponsors />
      <About />
      <Contact />
    </>
  );
};

export default Home;
