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
- #### *Giving a component multiple state variables:*  
     You can have as many state variables of as many types as you like in one component.    
- #### *State is isolated and private:*
  - State is local to a component instance on the screen. In other words, **if you render the same component twice, each copy will have completely isolated state!** Changing one of them will not affect the other. 
  - This is what makes state different from regular variables that you might declare at the top of your module. State is not tied to a particular function call or a place in the code, but it’s “local” to the specific place on the screen.
  - Unlike props, **state is fully private to the component declaring it**. The parent component can’t change it. This lets you add state to any component or remove it without impacting the rest of the components.

## Reference 
HandsOn State Docs:  [State In React](https://react.dev/learn/state-a-components-memory)






   