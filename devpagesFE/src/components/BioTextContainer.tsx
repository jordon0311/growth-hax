import GithubBioCard from "./GithubBioCard"
import { ReturnedDataType } from "../types.types"

const BioTextContainer = ({ data }: { data: ReturnedDataType }) => {
    const tagColors = ['bg-blue-100', 'bg-green-100', 'bg-red-100', 'bg-yellow-100', 'bg-indigo-100', 'bg-purple-100', 'bg-pink-100']
    return (
        <div className="">
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">About</h5>
                </a>
                <p className="mb-3 font-normal text-gray-7000">
                    {data.data.bio}
                </p>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-9000">Skills</h2>
                <div className="flex flex-wrap gap-2">
                    {data.data.skills.map((skill, index) => (
                        <span className={`${tagColors[index % tagColors.length]} text-blue-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded`}>{skill}</span>
                    ))}
                </div>
            </div>
            {/* TODO use styles to set the colors */}
            {/* <div className="flex flex-wrap gap-2">
                <span style={{ backgroundColor: data.data.colorPalette.primary }} className="text-[#fff] p-2 rounded-lg">hellloo</span>
                <span style={{ backgroundColor: data.data.colorPalette.accent }} className="text-[#fff] p-2 rounded-lg">h</span>
                <span style={{ backgroundColor: data.data.colorPalette.background }} className="text-[#fff] p-2 rounded-lg">h</span>
                <span style={{ backgroundColor: data.data.colorPalette.foreground }} className="text-black p-2 rounded-lg">h</span>
            </div> */}
            {/* <div className="mt-5">
                <GithubBioCard data={data} />
            </div> */}

        </div>
    )
}

export default BioTextContainer