import { ReturnedDataType } from "../types.types";
import GithubBioCard from "./GithubBioCard";

const ProfileCard = ({ data }: { data: ReturnedDataType }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img className="rounded-t-lg max-h-[300px] mx-auto" src={data.data.avatarUrl} alt="" />
                </div>
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data.data.name}</h5>
                </a>
                <p className="mb-3 font-sm text-gray-700">{data.data.quote}</p>
            </div>
            <GithubBioCard data={data} />
        </div>
    )
}
export default ProfileCard;