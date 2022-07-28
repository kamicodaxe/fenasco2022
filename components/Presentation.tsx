

const Presentation: React.FC<{}> = ({ }) => {
    return (
        <section className="text-gray-800">
            <div className="container mx-auto my-16 lg:px-16">
                <div className="flex flex-col md:flex-row md:items-center lg:items-end">
                    <div className="flex justify-center items-center px-4 h-64 sm:h-96 md:w-[200%] md:px-0 bg-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-14 h-14" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p>Video</p>
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/7P_68VTEqYY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> */}
                    </div>
                    <div className="p-2 pb-4 md:pl-8 md:self-end">
                        <p className="text-gray-600 text-md">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Presentation