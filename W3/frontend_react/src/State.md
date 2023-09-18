# STATE (A Component's Memory )

Components often need to change what’s on the screen as a result of an interaction. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart. Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called state.

- #### *When a regular variable isn’t enough*
  - **Local variables don’t persist between renders**. 
  - **Changes to local variables won’t trigger renders.**
- #### *To update a component with new data, two things need to happen:*
  - **Retain** the data between renders.
  - **Trigger** React to render the component with new data (re-rendering).    
- #### *The `useState` Hook provides those two things:*
    - A **state variable** to retain the data between renders.
    - A **state setter function** to update the variable and trigger React to render the component again.

- ####  *To add a state variable, import useState from React at the top of the file:*
        import { useState } from 'react';

        const [index, setIndex] = useState(0);
- #### *When you call useState, you are telling React that you want this component to remember something:*
        const [index, setIndex] = useState(0);
    





   