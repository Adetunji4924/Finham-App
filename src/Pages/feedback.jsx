import PrimaryButton from "../Components/Primary-Button"

const FeedbackForm = () => {
    return(
        <div className="flex justify-center items-center flex-col h-screen">
            <div className="p-8 w-[50%]">
            <h1 className="font-Bricolage text-[2rem] font-medium text-gray-900">Give Feedback To Microsoft</h1>
            <form action="" className="mt-4 space-y-4">
                <div>
                    <label htmlFor="" className="font-Inter text-gray-800 font-medium mb-2">Overall, how easy was it for you to change your timezone?</label>
                    <div className="flex gap-3">
                        <input className="px-14 py-4 bg-slate-200 rounded font-Inter text-[1rem]" type="button" value="1" />
                        <input className="px-14 py-4 bg-slate-200 rounded font-Inter text-[1rem]" type="button" value="2" />
                        <input className="px-14 py-4 bg-slate-200 rounded font-Inter text-[1rem]" type="button" value="3" />
                        <input className="px-14 py-4 bg-slate-200 rounded font-Inter text-[1rem]" type="button" value="4" />
                        <input className="px-14 py-4 bg-slate-200 rounded font-Inter text-[1rem]" type="button" value="5" />
                    </div>
                    <div className="flex justify-between">
                        <span className="font-Inter text-gray-500 text-[.9rem]">Extremely hard</span>
                        <span className="font-Inter text-gray-500 text-[.9rem]">Extremely easy</span>
                    </div>
                </div>

                <div>
                    <label htmlFor="" className="font-Inter text-gray-800 font-medium mb-2">Overall, how valuable did you find it to change your timezone?</label>
                    <div className="flex gap-3">
                        <input className="px-14 py-4 bg-slate-200 rounded font-Inter text-[1rem]" type="button" value="1" />
                        <input className="px-14 py-4 bg-slate-200 rounded font-Inter text-[1rem]" type="button" value="2" />
                        <input className="px-14 py-4 bg-slate-200 rounded font-Inter text-[1rem]" type="button" value="3" />
                        <input className="px-14 py-4 bg-slate-200 rounded font-Inter text-[1rem]" type="button" value="4" />
                        <input className="px-14 py-4 bg-slate-200 rounded font-Inter text-[1rem]" type="button" value="5" />
                    </div>
                    <div className="flex justify-between">
                        <span className="font-Inter text-gray-500 text-[.9rem]">Not valuable</span>
                        <span className="font-Inter text-gray-500 text-[.9rem]">Extremely valuable</span>
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="" className="font-Inter text-gray-800 font-medium mb-2">What could we be doing to improve the experience?(optional)</label>
                    <textarea name="" id="" cols="20" rows="5" className="focus:outline-none border border-gray-300 px-2 py-2 rounded text-gray-600"></textarea>
                </div>
            </form>
            <div className="mt-4">
                <p className="font-Inter text-gray-500"><span className="text-secondary-0">Privacy statement</span> By pressing submit, your feed will be used to improve Microsoft products and services. Your IT Admin will be able to collect this data.</p>
            </div>

            <div className="flex justify-end gap-4 mt-4">
                <PrimaryButton id="submit" value="Submit"/>
                <button className="border border-secondary-0 px-8 rounded font-Inter text-secondary-0">Cancel</button>
            </div>
            </div>
        </div>
    )
}

export default FeedbackForm