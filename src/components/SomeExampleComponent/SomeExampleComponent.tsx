import React from 'react';
import './SomeExampleComponent.css';

const SomeExampleComponent = () => {
    const a = "some text";

    return (
        <div className="someCssClass">
            Using some text from above: {a}
        </div>
    )
}

export default SomeExampleComponent;