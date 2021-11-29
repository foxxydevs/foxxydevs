import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import React from 'react';
import './_Code.scss';

type Props = {
  code: string;
  language: Language;
};

const CodeWrapper: React.FC<Props> = (props) => (
  <div className='wrapper-code'>
    <Highlight
      {...defaultProps}
      theme={theme}
      code={props.code}
      language={props.language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`pre ${className}`} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <span className='line-no'>{i + 1}</span>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  </div>
);

export default CodeWrapper;
