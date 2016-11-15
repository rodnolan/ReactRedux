/**
 * Created by Rod Nolan on 11/15/2016.
 */

export function createCourse(course) {
  //  return { type: 'CREATE_COURSE', course: course };
  //  if the right hand side matches the left hand side, you can omit the right hand side
  return { type: 'CREATE_COURSE', course};
  // also, the value of the type property should be specified as a constant, not a string
}
