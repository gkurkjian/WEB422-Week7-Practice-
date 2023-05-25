import Component1 from '../components/Component1'
import ComponentA from '../components/ComponentA'


export default function Home() {
  return (
    <>
      <h1>This is from Jotai Practice Folder</h1>
      <h2>Here it's rendering only on Component(3) and Component(C) because we used a <i>Atom</i> from <i>Jotai</i>. To check to inspect and see the comments</h2> <br />
      <Component1 /> <br />
      <ComponentA />
    </>
  )
}
