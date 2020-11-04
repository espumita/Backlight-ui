import * as React from 'react'
import './editorStyle.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/javascript/javascript'
import { UnControlled as CodeMirror } from 'react-codemirror2'

const Editor = () => {
    const entityTest = {"Name":"EntityName"}
    return (
      <div className="editor">
        <CodeMirror
            value={JSON.stringify(entityTest, null, 2)}
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
