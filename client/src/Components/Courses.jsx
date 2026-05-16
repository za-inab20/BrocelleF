import React, { useEffect, useState } from "react";

import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

function Courses() {
  const [courses, setCourses] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");



  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("https://brocellef.onrender.com/courses");

        console.log(response.data);

     
        if (Array.isArray(response.data)) {
          setCourses(response.data);
        } else {
          setCourses([]);
        }
      } catch (error) {
        console.log(error);

        setCourses([]);
      }
    };

    fetchCourses();
  }, []);

 

  const filteredCourses = Array.isArray(courses)
    ? courses.filter((course) =>
        course?.title?.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : [];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">BORCELLE ONLINE COURSES</h1>

      

      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

  

      <div className="row">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div className="col-md-6 mb-4" key={course._id}>
              <div className="card shadow h-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="card-img-top"
                  style={{
                    height: "300px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">
                  <h3>{course.title}</h3>

                  <p className="text-muted">{course.duration}</p>

                  <p>{course.description}</p>

                  <button className="btn btn-outline-secondary">
                    Take the Course
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">No courses found.</p>
        )}
      </div>
    </div>
  );
}

export default Courses;
