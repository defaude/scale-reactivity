import React, { ChangeEvent, useEffect, useState } from 'react'
import { ScaleAppShell, ScaleTextField } from '@telekom/scale-components-react'

export function App () {
  const [text, setText] = useState('')

  useEffect(() => {
    // reject "a" characters
    console.info('effect running', text)
    setText(text.replace(/a/gi, ''))
  }, [text])

  function handleInputChange (event: ChangeEvent<HTMLInputElement>) {
    console.info('handleInputChange', event)
    setText(event.target.value)
  }

  function handleScaleInputChange (event: CustomEvent) {
    console.info('handleScaleInputChange', event)
    setText(event.detail.value)
  }

  return <>
    <ScaleAppShell>
      <h1 className="scl-font-variant-heading-1">'ello 👋</h1>

      <section>
        <p>This is a regular input field with regular react bindings:</p>
        <p><input type="text" value={text} onChange={handleInputChange} /></p>
      </section>

      <section>
        <p>And this is a Scale TextField with custom event binding:</p>
        <p><ScaleTextField value={text} onScaleChange={handleScaleInputChange} /></p>
      </section>

      <section>
        <p>This is a regular input field where just the value is bound:</p>
        <p><input type="text" value={text} /></p>
      </section>

      <section>
        <p>... and the Scale TextField:</p>
        <p><ScaleTextField value={text} /></p>
      </section>
    </ScaleAppShell>
  </>
}
