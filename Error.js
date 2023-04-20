import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Oops!</h1>
            <p>
                Something Went Wrong;
            </p>
            <h1>{err.status + ":" + err.statusText}</h1>
        </div>
    )

};

export default Error;