import Component1 from '../components/Component1'
import ComponentA from '../components/ComponentA'


export default function Home(props) {
  return (
    <>
    <h2>We implemented like an Hierarchy <i>count</i> & <i>setCount</i> in pages/_app.js</h2>
    <h3>It's passing from Component1/Component2/Component3 to use the count by using React.countContext. <br />
    This goes the same on ComponentA to C applying React.countContext by using setCount. <br />
    For more info, please open up the _app.js and take a look.
    </h3> <br />
      <Component1 count={props.count}/> <br />
      <ComponentA setCount={props.setCount}/>
    </>
  )
}
