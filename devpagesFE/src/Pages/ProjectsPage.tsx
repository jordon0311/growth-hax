import { useState } from 'react';
import { ReturnedDataType } from '../types.types';

const exampleProjects = [
    {
        title: "Project 1",
        description: "Project 1 description",
        image: "https://images.pexels.com/photos/19670/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Project 2",
        description: "Project 2 description",
        image: "https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Project 3",
        description: "Project 3 description",
        image: "https://images.pexels.com/photos/1227511/pexels-photo-1227511.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
]

const ProjectsPage = (props: { data: ReturnedDataType }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? exampleProjects.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === exampleProjects.length - 1 ? 0 : prev + 1));
    };

    return (
        <div id="projects" className="md:flex flex-col lg:h-screen border md:px-10 pt-4 md:bg-slate-100 ">
            <h1 className="text-4xl font-bold pt-5 mb-5 md:mb-0 text-center">Projects</h1>
            <div id="default-carousel" className="relative w-full h-[600px] hidden md:block" data-carousel="slide">
                <div className="flex flex-col justify-center items-center md:h-full">
                    {exampleProjects.map((project, index) => (
                        <div key={index} className={`block rounded-lg bg-white shadow-secondary-1 ${index === currentSlide ? 'block' : 'hidden'} border border-2 sm:min-w-[550px]`}>
                            <a href="#!">
                                <img
                                    className="rounded-t-lg h-[200px] w-full"
                                    src={project.image}
                                    alt="" />
                            </a>
                            <div className="p-6 text-surface flex flex-col justify-between">
                                <div >
                                    <h5 className="mb-2 text-xl font-medium leading-tight">{project.title}</h5>
                                    <p className="text-base text-wrap">
                                        {project.description}
                                    </p>
                                </div>
                                <a href="#!" className=''>
                                    <button className="bg-white hover:bg-gray-100 mt-5 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                        Visit project
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {exampleProjects.map((_, index) => (
                        <button key={index} type="button" className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-gray-900' : 'bg-gray-400'}`} aria-current={index === currentSlide} aria-label={`Slide ${index + 1}`} onClick={() => setCurrentSlide(index)}></button>
                    ))}
                </div>
                <button type="button" className="hidden md:block absolute top-0 start-0 z-30 flex md:items-center justify-center md:h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={handlePrev}>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="hidden md:block absolute top-0 end-0 z-30 flex items-center justify-center md:h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={handleNext}>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
            <div className="block md:hidden">
                {exampleProjects.map((project, index) => (
                    <div key={index} className="block rounded-lg bg-white shadow-secondary-1 border border-2 mb-4">
                        <a href="#!">
                            <img
                                className="rounded-t-lg h-[200px] w-full"
                                src={project.image}
                                alt="" />
                        </a>
                        <div className="p-6 text-surface flex flex-col justify-between">
                            <div >
                                <h5 className="mb-2 text-xl font-medium leading-tight">{project.title}</h5>
                                <p className="text-base text-wrap">
                                    {project.description}
                                </p>
                            </div>
                            <a href="#!" className=''>
                                <button className="bg-white hover:bg-gray-100 mt-5 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                    Visit project
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default ProjectsPage;