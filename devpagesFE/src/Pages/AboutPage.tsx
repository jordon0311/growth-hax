import ProfileCard from "../components/ProfileCard";
// import GithubBioCard from '../components/GithubBioCard'
import BioTextContainer from "../components/BioTextContainer";
import { ContributionChart } from "../components/ContributionChart/ContributionChart";
import { ContributionDay, ReturnedDataType } from "../types.types";

const AboutPage = (props: { data: ReturnedDataType }) => {

    return (
        <div className="flex flex-col lg:flex-row lg:h-screen lg:px-10 pt-4 gap-4 m-2 md:m-0">
            <div className="w-full lg:w-1/3">
                <ProfileCard data={props.data} />
            </div>
            <div className="w-full lg:w-2/3 flex flex-col gap-4">
                <BioTextContainer data={props.data} />
                {/* <GithubSquares data={props.data} /> */}
            </div>
        </div>
    );
}

export default AboutPage;
