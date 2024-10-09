import About from "@/shared/components/about";
import Course from "@/shared/components/course";
import Formation from "@/shared/components/formation";
import Hero from "@/shared/components/hero";
import Profile from "@/shared/components/profile";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Profile />
      <Course />
      <Formation />
    </div>
  );
}
