import { Oval } from  'react-loader-spinner'
import css from "./Loader.module.css"

export function Loader(){
    return(
        <div className={css.loader}>
            <Oval
            height={50}
            width={50}
            color="#4455b0"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4455b0"
            strokeWidth={2}
            strokeWidthSecondary={2}
            />
        </div>
    )
}