import ProfileCard from '../components/ProfileCard'
import GithubBioCard from '../components/GithubBioCard'
import BioTextContainer from '../components/BioTextContainer'

const AboutPage = () => {
    const content = {
        about: {
            title: 'About',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        skills: {
            title: 'Skills',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    }
    return (
        <div className="flex flex-col lg:flex-row lg:h-screen lg:px-10 pt-4 gap-4 m-2 md:m-0">
            <div className="w-full lg:w-1/3">
                <ProfileCard />
            </div>
            <div className="w-full lg:w-2/3 flex flex-col gap-4">
                <BioTextContainer title={content.about.title} content={content.about.content} />
                <span className='p-5'>-github squares incoming-</span>
            </div>
        </div>
    );
}

export default AboutPage;