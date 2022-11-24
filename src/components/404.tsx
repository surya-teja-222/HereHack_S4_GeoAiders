import { errorProps } from "../types";

export default function NotFound(props: errorProps) {
    return (
        <>
            <h1 className="font-bold text-3xl text-red-600">
                Error {props.statusCode ? props.statusCode : 404}!
            </h1>

            <p>{props.error || "Error"}</p>
            <p>{props.errorMessage || "No Logs Available"}</p>
        </>
    );
}
