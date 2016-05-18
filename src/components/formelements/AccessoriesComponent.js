import React from 'react';
import InputExerciseComponent from 'components/formelements/InputExerciseComponent.js';

class AccessoriesComponent extends React.Component {
  render() {
    return (
     <div>
		<InputExerciseComponent />
		<InputExerciseComponent />
	</div>
    );
  }
}

AccessoriesComponent.displayName = 'FormelementsAccessoriesComponent';

// Uncomment properties you need
// AccessoriesComponent.propTypes = {};
// AccessoriesComponent.defaultProps = {};

export default AccessoriesComponent;
