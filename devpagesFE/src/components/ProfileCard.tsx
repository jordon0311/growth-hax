import GithubBioCard from "./GithubBioCard";
const ProfileCard = () => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">

            <a href="#">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img className="rounded-t-lg " src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                </div>
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">JOHN DOE</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">"Programming: where coffee and code create magic, errors, and the occasional existential crisis."</p>

            </div>
            <GithubBioCard />
        </div>
    )
}
export default ProfileCard;