export default function ComponentC(props) {
    console.log("Component(C) Rendered.");
    
    return (
        <>
            <h5>This coming from Component(C)</h5>
            <button onClick={e=>{console.log("Times Clicked")}}>Increase Value</button>
        </>
    )
}