import React, { ChangeEvent, useEffect, useState } from 'react'
import { ScaleAppShell, ScaleTextField } from '@telekom/scale-components-react'
import { CheckboxWeirdness } from './CheckboxWeirdness'

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
        <p>This is a regular input field with regular react bindings ("a" characters will be removed via the useEffect above):</p>
        <p><input type="text" value={text} onChange={handleInputChange} /></p>
      </section>

      <section>
        <p>And this is a Scale TextField with custom event binding (but "a" characters are behaving REALLY weird):</p>
        <p><ScaleTextField value={text} onScaleChange={handleScaleInputChange} /></p>
      </section>

      <hr/>

      <section>
        <p>This is a regular input field where just the value is bound (making it a read-only field effectively):</p>
        <p><input type="text" value={text} /></p>
      </section>

      <section>
        <p>... and the Scale TextField only has the value bound, too (but you still can type in it and update its internal state):</p>
        <p><ScaleTextField value={text} /></p>
      </section>

      <hr/>

      <section>
        <p>These are three separate checkboxes each with their on value and change handler. Their "disabled" attribute is set to "undefined" (as is "allowed" when I'm looking at the typing. My expectation is that they are not disabled and work normally. However, take a look what happens when any of them is clicked for the first time:</p>
        <CheckboxWeirdness/>
      </section>

    </ScaleAppShell>
  </>
}
