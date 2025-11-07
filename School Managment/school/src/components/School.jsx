

export default function School() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2 className="logo">UKI</h2>
        <div className="menu">
          <a href="#" className="p-3">Overview</a>
          <a href="#" className="p-3">Gallery</a>
          <a href="#" className="p-3">Courses</a>
          <a href="#" className="p-3">Purchase Course</a>
          <a href="#" className="p-3">Completed Courses</a>
          <a href="#" className="p-3">About us</a>
        </div>
        <div className="settings">
          <a href="#">Profile</a>
          <a href="#">Setting</a>
          <a href="#">Logout</a>
        </div>
      </div>

      <div className="content">
        <div className="header">
          <input type="text" placeholder="Search here" className="search" />
          <img src="" alt="profile" className="profile"/>
        </div>

        <div className="courses">
          <h3 className="my-3">School Managment</h3>
          <div className="course-grid">
            <div className="course-card">
              <h4>Teachers</h4>
              <p>Teachers details are here</p>
            </div>
            <div className="course-card">
              <h4>Non-Academic Staffs</h4>
              <p>Non-Academic Staffs details are here</p>
            </div>
            <div className="course-card">
              <h4>Students</h4>
              <p>Students details are here</p>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="activity">
            <h4>Students Activities</h4>
            <ul>
              <li>3 Students selected front-end</li>
              <li>3 Students selected back-end</li>
              <li>3 Students selected fullstack</li>
            </ul>
          </div>

          <div className="mentors">
            <h4>Top Mentors</h4>
            <ul>
              <li>Available teachers</li>
              <li>for back-end<a href="">Thisenthra</a></li>
              <li>for front-end<a href="">Varshini</a></li>
            </ul>
          </div>

          <div className="study">
            <p>Now studying <b>React<br/>MongoDB</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}
