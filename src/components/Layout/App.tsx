import CodeWrapper from '../Code/CodeWrapper';

const exampleCode = `
  function Hello(){
    return <div>Hello World</div>
  }  

`;

function App() {
  return (
    <div>
      <CodeWrapper code={exampleCode} language={`jsx`} />
    </div>
  );
}

export default App;
