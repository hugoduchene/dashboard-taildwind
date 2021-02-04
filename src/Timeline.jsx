
export const Timeline = ({infos}) => {
    return(
        <div className="overflow-x-scroll flex flex-nowrap bg-white min-h-timeline items-center pl-4">

            {infos.map((elt, i) => (
                <div className="text-center w-96 flex-shrink-0" key={i}>
                    <div className="w-1/2">
                        <div className="font-black italic">{elt.task}</div>
                        <div className="pt-2 italic text-xs">{elt.description}</div>
                    </div>
                    <div className="flex text-center">
                        <div className={i+1 !== infos.length ? "w-full pt-2 text-sm font-bold italic" : "w-1/2 pt-2 text-sm font-bold italic"}>{elt.date}</div>
                        <div className={i+1 !== infos.length ? "flex items-center w-full" : "hidden"}>
                            <div className="border-2 border-black h-0 w-full"></div>
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
    )
}