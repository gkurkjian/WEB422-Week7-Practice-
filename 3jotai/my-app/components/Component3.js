import { useAtom } from "jotai";
import { countAtom } from "../store";


export default function Component3(props) {
    const [count, setCount] = useAtom(countAtom);
    console.log("Component(3) Rendered.");
    
    return (
        <>
            <h3>This coming from Component(3) </h3>
            Value: {count}
        </>
    )
}