import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
    griddata: state.griddata
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
