import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">Your Name</span>
            <div className="flex gap-6">
              {["About", "Skills", "Projects", "Experience", "Hobbies"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 space-y-32">
        {/* About Section */}
        <section id="about" className="min-h-[80vh] flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold">Hi, I'm [Your Name]</h1>
              <p className="text-muted-foreground text-lg">
                [Your brief introduction - Write 2-3 sentences about yourself, your
                role, and what you're passionate about]
              </p>
              <div className="flex gap-4">
                <Button>Download CV</Button>
                <Button variant="outline">Contact Me</Button>
              </div>
            </div>
            <div className="relative h-[400px]">
              {/* Add your profile image here */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg">
                [Your Profile Image]
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add your skills categories here */}
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <ul className="space-y-2">
                [List your frontend skills]
              </ul>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <ul className="space-y-2">
                [List your frontend skills]
              </ul>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <ul className="space-y-2">
                [List your frontend skills]
              </ul>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <ul className="space-y-2">
                [List your frontend skills]
              </ul>
            </div>
            {/* Add more skill categories */}
          </div>

        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card Template */}
            <div className="group relative rounded-lg overflow-hidden border bg-card">
              <div className="aspect-video relative">
                [Project Screenshot]
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">[Project Name]</h3>
                <p className="text-muted-foreground mb-4">[Project Description]</p>
                <div className="flex gap-2">
                  [Technology Tags]
                </div>
              </div>
            </div>
            {/* Add more project cards */}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
          <div className="space-y-8">
            {/* Experience Item Template */}
            <div className="border-l-2 border-primary pl-6 space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold">[Company Name]</h3>
                <span className="text-muted-foreground">[Duration]</span>
              </div>
              <p className="text-primary">[Position]</p>
              <ul className="list-disc list-inside text-muted-foreground">
                [Add your responsibilities and achievements]
              </ul>
            </div>
            {/* Add more experience items */}
          </div>
        </section>

        {/* Hobbies Section */}
        <section id="hobbies" className="py-16">
          <h2 className="text-3xl font-bold mb-12">Hobbies & Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hobby Card Template */}
            <div className="p-6 rounded-lg border bg-card text-center">
              [Hobby Icon]
              <h3 className="text-xl font-semibold mt-4 mb-2">[Hobby Name]</h3>
              <p className="text-muted-foreground">[Brief description]</p>
            </div>
            {/* Add more hobby cards */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 mt-32">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <span> 2024 [Your Name]. All rights reserved.</span>
            <div className="flex gap-4">
              {/* Add your social media links */}
              [Social Media Icons and Links]
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
