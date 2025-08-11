// src/components/Projects.jsx
import ProjectCard from './ProjectCard';

// Placeholder data - replace with your actual projects
const projectData = [
  {
    title: "Formula Bharat '24 - AGNI",
    description: 'Our latest formula-style race car, engineered for peak performance with a custom-built chassis and advanced aerodynamics.',
    imageUrl: 'https://placehold.co/600x400/0a0a0a/ffffff?text=AGNI',
    link: '#',
  },
  {
    title: "Baja SAE '23 - PREDATOR",
    description: 'An all-terrain vehicle designed to conquer the toughest off-road challenges, featuring a robust suspension system.',
    imageUrl: 'https://placehold.co/600x400/0a0a0a/ffffff?text=PREDATOR',
    link: '#',
  },
  {
    title: 'Electric Vehicle Concept',
    description: 'A forward-thinking design for a sustainable urban mobility solution, focusing on battery efficiency and lightweight materials.',
    imageUrl: 'https://placehold.co/600x400/0a0a0a/ffffff?text=EV+Concept',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Fleet of Innovations
          </h2>
          <p className="text-gray-400 md:text-lg">
            From the racetrack to rugged terrains, each vehicle is a testament to our team's dedication, skill, and passion for engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;