import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import WeekComponent from 'components/week/WeekComponent';


function mapStateToProps(state) {
  return {
  	weightMeasure: state.controlpanel.weightMeasure
  }
}

function mapDispatchToProps(dispatch) {
  return {
	  actions: bindActionCreators(actions, dispatch)
  };
}

const WeekContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(WeekComponent);

export default WeekContainer;
