import { useAtom } from "jotai";
import { countAtom } from "../store";


export default function ComponentC(props) {
    // const [count, setCount] = useAtom(countAtom);  // this line legit as well
    const setCount = useAtom(countAtom)[1];  // since we're not using the count we can define like this as well.

    console.log("Component(C) Rendered.");
    
    return (
        <>
            <h5>This coming from Component(C)</h5>
            <button onClick={e=>{setCount(count => count + 1)}}>Increase Value</button>
        </>
    )
}