/**
 * Libraries
 */

import React,{
   Component
} from 'react';

/**
 * Components
 */

import ThreeDCard from './ThreeDCard/threeDCard';
import FadeText from './FadeText/fadeText';

/**
 * Styles
 */

import './app.scss'

/**
 * App component definition and export
 */
export class App extends Component {

   /**
     * Constructor
     */

    constructor(props) {
      super(props);
  }

   render(){
      return(
         <div className="abc">
               <ThreeDCard/>
               <FadeText/>
         </div>
      );
   }
}

export default App;
