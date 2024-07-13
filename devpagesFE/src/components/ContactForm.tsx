import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { ReturnedDataType } from '../types.types';

const ContactForm = (props: { data: ReturnedDataType }) => {
    const SocialLinks = props.data.data.socialLinks;

    return (
        <div className="shadow-2xl p-5 lg:w-1/2 lg:rounded-xl lg:m-4 lg:h-2/3">
            <form className="">
                <h2 className="text-3xl font-bold mb-5 flex flex-row justify-between">Contact Me <span className='flex gap-5 mb-5'>
                    {SocialLinks.map((link, index) => (
                        <a href={link.url} target="_blank" key={index}>
                            {link.provider === "github" && <GitHubIcon fontSize="inherit" style={{ fontSize: 38 }} />}
                            {link.provider === "linkedin" && <LinkedInIcon fontSize="inherit" style={{ fontSize: 40 }} />}
                            {link.provider === "twitter" && <TwitterIcon fontSize="inherit" style={{ fontSize: 40 }} />}
                        </a>
                    ))}
                </span></h2>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                    <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                        </div>
                        <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="name@flowbite.com" />
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Message</label>
                    <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

            </form>

        </div>
    )
}

export default ContactForm