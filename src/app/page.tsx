import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Instructors from "@/components/Instructors";
import Testimonial from "@/components/Testimonial";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhychooseUs from "@/components/WhychooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <Herosection />
    <FeaturedCourses />
    <WhychooseUs />
    <Testimonial /> 
    <UpcomingWebinars />
    <Instructors />
    <Footer />
    </main>
  );
}
