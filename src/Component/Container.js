import React from 'react';
import '../index.css';
import SearchBox from './SearchBox';
import CardList from './CardList';
const Container = ({swatches,newItem,newCallback}) => {
	if(!swatches.length){
      return(
             <div className='loading swatch'>
              Loading...
             </div>
      )
    }
    else{
      return (
        <div className='swatch'>
          <SearchBox newItem={newItem} newCallback={newCallback}/>
	       	{/*console.log(swatches)*/}
	      <CardList swatches={swatches}/>
          {/*console.log(this.state.swatches)*/}
        </div>
      );
    }
}
export default Container;