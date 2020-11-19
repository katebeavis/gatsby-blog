import React from 'react';
import hastToHyperscript from 'hast-to-hyperscript';

const renderHtmlToReact = (node: any) =>
  hastToHyperscript(React.createElement, node);

export default renderHtmlToReact;
