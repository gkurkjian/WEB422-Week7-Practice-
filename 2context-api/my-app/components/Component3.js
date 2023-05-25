export default function Component3(props) {
    console.log("Component(3) Rendered.");
    
    return (
        <>
            <h3>This coming from Component(3) </h3>
            Value: {props.count}
        </>
    );
}