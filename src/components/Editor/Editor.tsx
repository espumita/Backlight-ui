import * as React from 'react'
import { useSelector } from 'react-redux'
import './editorStyle.css'
import CodeMirror from '@uiw/react-codemirror'
import { json } from '@codemirror/lang-json'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { currentEntityValueSelector } from '../../selectors/currentEntitySelector'

const Editor = () => {
  const currentEntityValue = useSelector(currentEntityValueSelector)
    return (
      <div className="editor">
        <CodeMirror
            value={JSON.stringify(currentEntityValue, null, 2)}
            height="200px"
            theme={dracula}
            extensions={[json()]}
            />
      </div>
    )
  }

  export default Editor
