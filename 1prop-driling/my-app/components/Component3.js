import {useContext} from "react";  // As you see here, we did include the useContext straight, we could have include React and then on line 8
//we do React.useContext() 
import { CountContext } from "../pages/_app";

export default function Component3() {
    console.log("Component(3) Rendered.");
    
    const count = useContext(CountContext);
    return (
        <>
            <h3>This coming from Component(3) </h3>
            Value: {count}
        </>
    );
}