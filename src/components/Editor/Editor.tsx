import * as React from 'react'
import { useSelector } from 'react-redux'
import './editorStyle.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/javascript/javascript'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import { currentEntityValueSelector } from '../../selectors/currentEntitySelector'

const Editor = () => {
  const currentEntityValue = useSelector(currentEntityValueSelector)
    return (
      <div className="editor">
        <CodeMirror
            value={JSON.stringify(currentEntityValue, null, 2)}
            options={{
                mode: {name: "javascript", json: true},
                theme: 'dracula',
                lineNumbers: true
            }}
            onChange={(editor, data, value) => {

            }}
            />
      </div>
    )
  }

  export default Editor
