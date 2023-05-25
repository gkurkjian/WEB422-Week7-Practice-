import Component1 from '../components/Component1'
import ComponentA from '../components/ComponentA'


export default function Home(props) {
  return (
    <>
      <h1>This is from context-api Practice Folder</h1>
      <h3>Here on each clicking the value, will render the all components. Do inspect and see the messages</h3>
      <Component1 count={props.count}/> <br />
      <ComponentA setCount={props.setCount}/>
    </>
  )
}
