import { useState } from 'react'
import { ScaleCheckbox } from '@telekom/scale-components-react'

export function CheckboxWeirdness() {
  const [c1, setC1] = useState(false)
  const [c2, setC2] = useState(false)
  const [c3, setC3] = useState(false)

  function handleC1 () {
    setC1(!c1)
  }

  function handleC2 () {
    setC2(!c2)
  }

  function handleC3 () {
    setC3(!c3)
  }

  return <>
    <ScaleCheckbox disabled={undefined} checked={c1} onScaleChange={handleC1} label="c1" />
    <ScaleCheckbox disabled={undefined} checked={c2} onScaleChange={handleC2} label="c2" />
    <ScaleCheckbox disabled={undefined} checked={c3} onScaleChange={handleC3} label="c3" />

    <pre><code>{JSON.stringify({c1, c2, c3}, null, 2)}</code></pre>
  </>
}
