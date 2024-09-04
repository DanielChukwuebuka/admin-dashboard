import React from "react";

function NavMessage() {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-primary badge-number">3</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          you have 3 new messages
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              view all
            </span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="message-item">
          <a href="#">
            <img
              src="assets/img/messages-1.jpg"
              alt=""
              className="rounded-circle"
            />
            <div>
              <h4>Maria Hudson</h4>
              <p>
                velit Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <p>4 hrs ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="message-item">
          <a href="#">
            <img
              src="assets/img/messages-2jpg"
              alt=""
              className="rounded-circle"
            />
            <div>
              <h4>Maria Hudson</h4>
              <p>
                velit Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <p>4 hrs ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="message-item">
          <a href="#">
            <img
              src="assets/img/messages-3.jpg"
              alt=""
              className="rounded-circle"
            />
            <div>
              <h4>Maria Hudson</h4>
              <p>
                velit Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <p>4 hrs ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="dropdown-footer">
          <a href="#">show all notifications</a>
        </li>
      </ul>
    </li>
  );
}

export default NavMessage;
