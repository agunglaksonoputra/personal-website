import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import profileImg1 from '../assets/pas-foto1.jpg';
import profileImg2 from '../assets/pas-foto2.jpg';
import { faAngleDown, faBars, faEnvelope, faFaceSmileWink, faXmark } from '@fortawesome/free-solid-svg-icons';

const PersonalWebsite = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Smooth scroll to section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
    const handleScroll = () => {
        const sections = ['home', 'about', 'skills', 'projects', 'contact'];
        const current = sections.find(section => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
        });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const projects = [
        {
            title: "Seni Budaya Daerah (SENADA)",
            description: "A cultural entertainment booking app showcasing traditional arts and performances from local regions. Built to connect users with authentic cultural experiences through a seamless digital platform.",
            tech: ["Flutter", "React", "Firebase", "Tailwind"],
            image: "https://images.unsplash.com/photo-1585302397841-b42e837d0d81?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            github: "https://github.com/agunglaksonoputra/senada-project",
        },
        {
            title: "Solution of Law (SoLAW)",
            description: "A legal aid platform designed to provide accessible, efficient, and user-friendly legal assistance. Empowering users with legal knowledge, consultation, and case support through a modern digital interface.",
            tech: ["Laravel", "Bootstrap", "MySQL"],
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3fGVufDB8fDB8fHww",
            github: "https://github.com/agunglaksonoputra/solaw",
        }
    ];

    const skills = [
        { name: "HTML", icon: "simple-icons:html5" },
        { name: "JavaScript", icon: "simple-icons:javascript" },
        { name: "CSS", icon: "simple-icons:css3" },
        { name: "C++", icon: "simple-icons:cplusplus" },
        { name: "Laravel", icon: "simple-icons:laravel" },
        { name: "React", icon: "simple-icons:react" },
        { name: "Flutter", icon: "simple-icons:flutter" },
        { name: "Bootstrap", icon: "simple-icons:bootstrap" },
        { name: "Tailwind", icon: "simple-icons:tailwindcss" },
        { name: "MySQL", icon: "simple-icons:mysql" },
        { name: "Firebase", icon: "simple-icons:firebase" },
        { name: "Figma", icon: "simple-icons:figma" },
        { name: "Internet of Things", icon: "simple-icons:arduino" },
        { name: "Microsoft Office", icon: "simple-icons:microsoftoffice" },
        { name: "Adobe", icon: "simple-icons:adobe" },
    ]

    return (
        <>
        <div className="min-h-screen bg-gray-50">
            <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-2xl font-bold text-gray-900">
                            Agung Laksono Putra
                        </div>
                        
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                        {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                            <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className={`capitalize transition-colors duration-200 hover:text-blue-600 cursor-pointer ${
                                activeSection === item ? 'text-blue-600 font-medium' : 'text-gray-700'
                            }`}
                            >
                            {item}
                            </button>
                        ))}
                        </div>
                        

                        {/* Mobile Menu Button */}
                        <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                        {isMenuOpen ? <FontAwesomeIcon icon={faXmark} size="xl" /> : <FontAwesomeIcon icon={faBars} size="xl" />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden pb-4">
                        {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                            <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className="block w-full text-left py-2 capitalize hover:text-blue-600 transition-colors"
                            >
                            {item}
                            </button>
                        ))}
                        </div>
                    )}
                </div>
            </nav>


            <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="text-center px-4">
                    <div className="mb-8">
                        <img
                        src={profileImg1}
                        alt="Profile"
                        className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg object-cover"
                        />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
                        Hi, I'm <span className="text-blue-600">Agung</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Turning ideas into impactful Web & Mobile apps — passionate about Software Development, clean code, and seamless experiences
                    </p>
                    <div className="flex justify-center space-x-4 mb-12">
                        <a href="https://github.com/agunglaksonoputra" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" className="text-gray-600 hover:text-blue-600 transition-colors" />
                        </a>
                        <a href="https://www.linkedin.com/in/agunglaksonoputra" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-gray-600 hover:text-blue-600 transition-colors" />
                        </a>
                    </div>
                    <button
                        onClick={() => scrollToSection('about')}
                        className="animate-bounce"
                    >
                        <FontAwesomeIcon icon={ faAngleDown} size="2x" className="text-gray-600 cursor-pointer" />
                    </button>
                </div>
            </section>

            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Hello! I'm Agung Laksono Putra
                            </h3>
                            <p className="text-gray-600 mb-6 text-justify">
                                I am a 6th-semester Information Technology student at Telkom University,
                                passionate about Software Development — especially in Web, Mobile, and IoT applications.
                                I enjoy turning complex problems into simple and elegant solutions. With strong communication skills and the ability to adapt quickly to new technologies,
                                I have experience working on various web projects using modern tools and frameworks.
                                I'm a collaborative team player committed to continuous learning and innovation.
                            </p>
                            <p className="text-gray-600 mb-6 text-justify">
                                When I'm not coding, I enjoy diving into programming concepts, exploring new tech stacks, and working on side projects.
                                Beyond the code, I stay curious by following trends and turning ideas into creative solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Get In Touch
                                </button>
                                <a
                                    href="/CV_AGUNG-LAKSONO-PUTRA.pdf"
                                    download
                                    className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors text-center"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                        <img
                            src={profileImg2}
                            alt="Working"
                            className="rounded-lg shadow-xl"
                        />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Skills */}
            <section id="skills" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 md:gap-4 lg:gap-8 gap-2">
                        {skills.map((skill, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex justify-between items-center">
                                <Icon icon={skill.icon} className="text-blue-600 w-6 h-6" />
                                {/* <FontAwesomeIcon icon={skill.icon} size="2x" className="text-blue-600" /> */}
                                <span className="font-medium text-gray-900">{skill.name}</span>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Project */}
            <section id="projects" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                            <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                            />
                            <div className="p-6 flex flex-col flex-grow justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 text-justify">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                            {tech}
                                        </span>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors" >
                                        <FontAwesomeIcon icon={faGithub} size='xl' className="text-gray-60 mr-1" />
                                    Code
                                </a>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Contact */}
            <section id="contact" className="py-20 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Let’s turn ideas into reality. If you have a project, a question, or just want to say hi — I’m just a message away!
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={ faEnvelope } size='xl' className="text-blue-400 mr-4" />
                                <span>agunglp@student.telkomuniversity.ac.id</span>
                            </div>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={ faGithub } size='xl' className="text-blue-400 mr-4" />
                                <a href="https://github.com/agunglaksonoputra" target="_blank" rel="noopener noreferrer">github.com/agunglaksonoputra</a>
                            </div>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={ faLinkedin } size='xl' className="text-blue-400 mr-4" />
                                <a href="https://www.linkedin.com/in/agunglaksonoputra" target="_blank" rel="noopener noreferrer">linkedin.com/in/agunglaksonoputra</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-black text-white py-4">
                <div className="flex justify-center px-4 sm:px-6 lg:px-8 text-center">
                    <FontAwesomeIcon icon={ faFaceSmileWink } size='xl' className="text-white mr-4" />
                    <p>Agung Laksono Putra</p>
                </div>
            </footer>
        </div>
        </>
    );
};

export default PersonalWebsite;