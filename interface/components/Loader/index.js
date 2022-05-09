import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

export const CollectLoader = () => {
    return (
        <div className="collect-loader d-flex flex-column gap-1">
            <Skeleton className="ratio-1x1 ratio w-100"/>
            <Skeleton width={120} height={35} className="mx-2"/>
            <div className="text-center"><Skeleton width={180} height={25}/></div>
            <div className="text-center"><Skeleton width={180} height={25}/></div>
            <div className="text-center"><Skeleton width={180} height={25}/></div>
        </div>
    )
}