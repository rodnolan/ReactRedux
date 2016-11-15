/**
 * Created by Rod Nolan on 11/11/2016.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: '' }
    };


    // React doesn't autobind in ES6 classes so you have to use bind to give 'this' the expected meaning
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    // it's best for performance to bind in the constructor, not in render()... calling bind in render causes
    // a new function to be created every time render() executes.
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    // so that, in the expression below, this.state doesn't try to read 'state' from the input
    //alert(`Saving course: ${this.state.course.title}`);
    this.props.dispatch(courseActions.createCourse(this.state.course));
    // this dispatch() function was injected by connect()
  }

  render () {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />
        /* 'this' is the input and it's that object that becomes 'this' within the context of the onTitleChange function */
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.coursesState
  }
  // ownProps is best for routing - related props which will be injected by react router... not necessary yet.
}

export default connect(mapStateToProps)(CoursesPage);
/*
const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
    // at this point, we don't want to expose any actions on the component so we remove that optional parameter from the connect call above
    // that means that a default dispatch property (a function) gets injected by connect() so that we can call dispatch() directly to fire off actions
    // that's a terrible idea because now the presentational components are not dumb any more
export default connectedStateAndProps(CoursesPage);
*/
