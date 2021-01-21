import React, {Suspense} from "react"
import { Preloader } from "../common/Preloader/Preloader"


export function withSuspense(Component: React.ComponentType) {
    return (props: any) => {
        return <Suspense fallback={<Preloader />}>
            <Component {...props} />
        </Suspense>
    }
}

