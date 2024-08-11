import ChildComponent from './ChildComponent'; // Assuming ChildComponent is in the same directory

export default function ParentComponent() {
  const textToPass = "Hello from ParentComponent!";

  return (
    <div>
      <h1>This is the Parent Component</h1>
      <ChildComponent text={textToPass} />
    </div>
  );
}

