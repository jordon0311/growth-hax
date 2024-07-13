const BioTextContainer = ({ title, content, tags }: { title: string, content: string, tags?: boolean }) => {
    return (
        <div className="">
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                </a>
                {!tags &&
                    <p className="mb-3 font-normal text-gray-700">
                        {content}
                    </p>}
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Skills</h2>
                <div className="flex flex-wrap gap-2">

                    <span className="bg-blue-100 text-blue-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                    <span className="bg-gray-100 text-gray-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-3000">Dark</span>
                    <span className="bg-red-100 text-red-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Red</span>
                    <span className="bg-green-100 text-green-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Green</span>
                    <span className="bg-yellow-100 text-yellow-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Yellow</span>
                    <span className="bg-indigo-100 text-indigo-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">Indigo</span>
                </div>
            </div>
        </div>
    )
}

export default BioTextContainer