/**
 * Created by Rod Nolan on 11/11/2016.
 */
import React, {PropTypes} from 'react';

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
    alert(`Saving course: ${this.state.course.title}`);
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

export default CoursesPage;

