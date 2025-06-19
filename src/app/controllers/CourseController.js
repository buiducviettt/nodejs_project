const Course = require('../models/Course');
class CourseController {
  //get all courses
  async index(req, res) {
    const courses = await Course.find();
    res.json(courses);
  }

  async create(req, res) {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  }
}
module.exports = new CourseController();
