import ComponentB from "./ComponentB";

export default function ComponentA(props) {
    console.log("Component(A) Rendered.");
    
    return (
        <>
            <ComponentB setCount={props.setCount}/>
        </>
    )
}