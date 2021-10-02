import * as React from 'react'
import { Link } from 'gatsby'
import Vex from 'vexflow'
import { buildToneRowStrings } from './toneRowGenerator'
import Layout from '../components/layout'
import Seo from '../components/seo'

function buildMeasure(notes) {
	const vf = new Vex.Flow.Factory({ renderer: { elementId: 'staff' } })
	const score = vf.EasyScore()
	const system = vf.System()
	system
		.addStave({
			voices: [score.voice(score.notes(notes))],
		})
		.addClef('treble')

	vf.draw()
}

function IndexPage() {
  const [octave, setOctave] = React.useState(4)

  function handleChange(event) {
    setOctave(event.target.value)
  }

	React.useEffect(() => {
	  const toneRow = buildToneRowStrings(octave)
		toneRow.forEach(measure => buildMeasure(measure))
	}, [])

	return (
		<Layout>
			<Seo title="Home" />
			<div id="staff" />
      {/* Octave: <input type="number" min="4" max="5" value={octave} onChange={handleChange}/> */}
			<p>
				<Link to="/page-2/">Go to page 2</Link> <br />
			</p>
		</Layout>
	)
}

export default IndexPage
