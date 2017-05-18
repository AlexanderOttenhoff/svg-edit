import React from 'react';
import ReactDOM from 'react-dom';
import bulma from 're-bulma/build/css';
import insertCss from 'insert-css';

import Editor from './editor';
import './index.css';

if (document) {
  insertCss(bulma, { prepend: true });
}

ReactDOM.render(
  <Editor />,
  document.getElementById('root'),
);
