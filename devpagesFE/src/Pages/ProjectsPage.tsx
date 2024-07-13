import { useState } from 'react';
import { ReturnedDataType } from '../types.types';

const ProjectsPage = (props: { data: ReturnedDataType }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    console.log('projects', props.data.data.topProjects);
    const exampleProjects = props.data.data.topProjects;

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
                                    src={project.owner.imageUrl ? '' : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACUCAMAAADhypYgAAAAYFBMVEX///+8vb/+/v7Excb5+fns7O26vLvR0tPR09K+wL+5urz///26vsHz8/O8vcHW1tbm5ube3t6kpKTKy8yqqqq0tLSMjIxsbGycnZ2WlpaCgoJmZmZdXV5NTU1VVVV1dncCjcV5AAAHI0lEQVR4nO2dC5eqKhTHkYdeKQJFGus+5vt/ywuolSWKhoVn+Z+zVjWjtX/tB7B9HAB27dq1a9f3BfXPBqTNhFOGbgRkylANCg8HYP+1D/dn07+Ys+0bO0MPf3C0EXE8CoL/SpMNiFKaTYBkmwDR8gc56R/78KDT89u9amC309hup/47P2z7vFf/bf4IjxiiCRBoc4Si/Nu57FaOLIwXSMJwxGJ56g0yvtFXdQDYE+RkQezYGaP8QSL3CPxTQMAOEp12kNi0g8SmHSQ27SCxaQdZV7D34KPIQOycHLS9tlldwchAeu1COAclMhBo/QD1ypXheW3ayECsSSKTpp8gOZuzV0wgJpZYRim1HRH9iAj0zZWIQGxQiYT2mlUTzdy7IgIxH1T0MUwzDfsV4YhAdKLz145mivw+NiIQAIR64dAkE8a1igmE5QMcyYkKnxElIhDInxOkyZLEBNeWQNgQhkURHntHBCIGHWJA5HY8AqErshLPT44FRFuCnCCUbMkjGDkdYurW1DtEAqINHS6+WwOBrlFkgyA6tJxlazs5YiZambtqeSxMogGBh5eZ780hyGP+GwuIFnGmSOExk48IBA/GFk26o7ATe8cD4pqjUN72JEYVD4g2tRhaj1CJgcfCPR4Q87XLARDETGBtpvy21rykCU2J564xgegJV/bEof2xweaDkZD3AZ6iAvu2gD8I4mOQmaoQjkx3LkGZYD5nXDZaHcRM0Lktn94taYiJEfPJ8Zs+4BGGVFNBl+3uqfVBmEzzVPo0Qh4+cJYzrFYHwSjN89x22bxDK7oDPTpRWbsSN+Ozd2d9idYEMQcJZFdLNQk8rHi1wLqhdee4zZkW2jmpVUH6jRFzvvcGQ0tHEXvqVLV5so5XVgR55kgSW4VXyvi1QOBQ5zBNrU+25RGGBs6nTxO5Vp6sAqItJXKAI0/TLk+CawUQM2F9rLt9GZLD/BnIpNYJrZHOetJcdRPcK6uAkBGOtgoHT5Q1QF7r7hDJ+7b3FBoEDo0fDpKgMOFBpjnMyMhCZ0lgEB9/aOXhZ5ChPWLGwemr4FIzxocd4kOCwOk8v2tiBmkuW7VnCzHDa159DMRUVOIcBx0kzozXppthU7Qd02mSoKE1Ng4Ok4x5RIOIhLae+6BH5sTVg08c72U9YI8zUORV4QKCzOXQMlXYbaQwm5w8+79hQOzJiO4D/k6l7Rj/aqbND/3FHI9HP58E8sjgOsoDxLnSgo0/DIgmkexDB3o8x8EBECeJzY+jlVeeBPIIG1pHTSu3JIe7jYeuzoqcdg7pSGwQOqvX+yBmHaXjaolDrLouEexAzIuXQ9Xt3B86x5MAIObct8UY1kZ2AG18tR4Rr/610WWvyl0LpN9PXKT7+qQBeT6L+U7irtYBQJblec/G+1EH6w/XVuaUlJVAzPjxVly1NtqjDs2dZqCDoyFx1q53QWbNE93qVlpjHONV+D0Q+H5+tCC38aQwL03FfdLxeBr1yZsewUP9xAXSA0pmZ5CEukFOp5F55hsg9niUz3rQByRvzuZvz6sZAEmaX3XR9TKevAUSJj866W97JD9uW7VV+JlkOciy+e44id9WgyPjGx4JUXefbPTbanBkXA4y3hddU4MrrUUg5k2YVxysIEcVXgqyaB0VBuRkfRIEJMT8arFsaX4d45eBLFxHBQJpffKuRxb2GUKrzZPbeLIEJHzdXaLbyLg4tL5Xd/vq1oxLQUgEcdWoWWmBJSBex6M+p8eMnwkSaB0VSg9VeGZoxeQPU4bvJPNAYuJImvGkm63MAtEc7guhPq6jXdN1PsHWMj+QWOpuX23GY/vC766A0dTdvijiBefcPvfzSLSitLtPxDRIjEE1oHGQQ+weuetPAaFy9HDQdkBOox45HCAjG9HLCnjXrl27du3atWvXrvXUNWNvN/LEza32m7Mzmgs+Ieh+1fz/QAPnAkLniw/JmsXsDVkgxIDdLGmfMYVvl7DetocMQ0IAI+aqab1iwAwDQiAkEOt5+Zem5uaOkaJG2iiBzvxHEI5Fxjj5u2AS44xX2mIgOOYFLoqiuZWZ+EcW5yuqriWq/5XVf/y3wtcLQr+iqmt5Phdf4YBVJS5VrcRFaZCsvqgaXRT5m5d5XdG8LgUgl0ypWpX1pWQ4FQCXXEl4JRcKJAWiwgqJa14WSpzlmbPqKyAQ8FJ/7deyOEsFzvxKUclkxa6ixtdfQn7PGKAKlIX8kQmqBMy0h3KuEP7F/IxrASsOMgSSnwIqQc41QOo7OYJ5pRS5JOWVX8hVKsQVQwarSkulVKIQERdpPJJJqWxssbIqygsqS8oT4xCoapLloDgjXLLsJ5tzb9ZwIFBnhc5aVghcsIIQzggsCkgE4xhzwbDQf9UJIjBjOpNsceCcCQ4Ih4xBRgDmXCc9EFnBhM6nr4C05QgOPHNu35TrbvuHJ/f3W6z/ARfYdxawfx3/AAAAAElFTkSuQmCC'}
                                    alt="" />
                            </a>
                            <div className="p-6 text-surface flex flex-col justify-between">
                                <div >
                                    <h5 className="mb-2 text-xl font-medium leading-tight">{project.name}</h5>
                                    <p className="text-base text-wrap">
                                        {project.description}
                                    </p>
                                    <p>{project.language}</p>
                                </div>
                                <a href={project.url} className=''>
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