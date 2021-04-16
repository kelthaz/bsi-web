import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import SvgUnion from '../../../../svgs/SvgUnion';
import 'draft-js/dist/Draft.css';
import styles from './text-editor.module.scss';

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onBoldClick = (e) => {
    e.preventDefault();
    const nextState = RichUtils.toggleInlineStyle(editorState, 'BOLD');
    setEditorState(nextState);
  };

  return (
    <div className="col-4 card-simple-blue-light">
      <h4 className="pb-2 color-blue-storm  bot-line">Notas</h4>
      <div className={styles.editor}>
        <Editor editorState={editorState} onChange={setEditorState} />
      </div>
      <div className={styles.top} />
      <button type="button" className={styles.button} onMouseDown={onBoldClick}>
        <SvgUnion />
      </button>
      <div className="row justify-content-center">
        <button type="button" className="mt-2 btn-small">
          Guardar
        </button>
      </div>
      <h5 className="pt-3 color-gray-light bot-line">Todas las notas</h5>
    </div>
  );
};

export default TextEditor;
