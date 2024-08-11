
import { useState } from "react";
import ParentComponent from "./ParentComponent";

export default function App() {
    // Declare a state variable called count and initialize it with the value 0
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount(count + 1);
    const decrementCount = () => count > 0 ? setCount(count - 1) : "0";

    return (
        <div>
            <div>
                <h2>What is State in React? And how can we use it to update the user interface?</h2>
                <p>State is a way to hold data that can change over time in a React component. It allows you to create interactive and dynamic applications. When you want to update the user interface based on changes in state, you can use the useState hook to update the state and re-render the component.</p>
                <p>Let's create a simple counter component to demonstrate the usage of state in React.</p>
                <h3>Current count: {count}</h3>
                <button onClick={incrementCount}>Increment</button>
                <button onClick={decrementCount}>Decrement</button>
                <br />
                <br />
                <h2>The code is:</h2>
                <code>
                    const [count, setCount] = useState(0); <br />
                    const incrementCount = () => setCount(count + 1); <br />
                    const decrementCount = () => count > 0 ? setCount(count - 1) : "0";
                    {/* return( */}
                    {/* <div>
                            <h3>Current count: {count}</h3>
                            <button onClick={incrementCount}>Increment</button>
                            <button onClick={decrementCount}>Decrement</button>
                        </div> */}
                    {/* ) */}
                </code>
                <p>This example shows how to use state to update the count when the increment and decrement buttons are clicked.</p>
            </div>
            <hr />
            <div>
                <h2>What are props in React? And how can we use them to pass data from parent components to child components?</h2>
                <p>Props are a way to pass data from a parent component to a child component in React. Props are read-only and immutable. When you pass props from a parent component to a child component, the child component can access the props and use them to render its UI.</p>
                <p>Let's create two components: a parent component ParentComponent and a child component ChildComponent.
                Use props to pass text from the parent component to the child component and display it
                </p>
                <ParentComponent />
                
              

            </div>
        </div>
    )
}