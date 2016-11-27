import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'

const Main = React.createClass({

    render() {


    return (
      <div  >
        <h1>
          <Link to="/">Redux Tabular Dataset</Link>
        </h1>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
});

export default Main;
