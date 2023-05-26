import { useAtom } from "jotai";
import { countAtom } from "../store";


export default function Component3(props) {
    //const [count, setCount] = useAtom(countAtom);  // this is legit too but, we can do the line above as well
    const count = useAtom(countAtom);  // since we're not using the setCount

    console.log("Component(3) Rendered.");
    
    return (
        <>
            <h3>This coming from Component(3) </h3>
            Value: {count}
        </>
    )
}