import React from 'react';
import CodeWrapper from '../Code/CodeWrapper';

const exampleCode = `
function someDemo() {
  var test = "Hello World!";
  console.log(test);
}`;

const Layout = () => {
  return (
    <div>
      <CodeWrapper code={exampleCode} />
    </div>
  );
};

export default Layout;
