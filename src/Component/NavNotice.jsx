import React from "react";
import classNames from "classnames";

function NavNotice() {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number">4</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          you have 4 new Notifications
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              view all
            </span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="notification-item">
          <i className=" bi bi-exclamation-circle text-warning"></i>
          <div>
            <h4>lorem ipsum</h4>
            <p>dolerum mintos acegjuio aquida</p>
            <p>30 mins. ago </p>
          </div>
        </li>

        <li>
          <hr className="dropdowm-divider" />
        </li>
        <li className="notification-item">
          <i className=" bi bi-check-circle text-success"></i>
          <div>
            <h4>Dicta reprehenderit</h4>
            <p>Quae dolerium earu</p>
            <p>4 hrs. ago</p>
          </div>
        </li>
        <li>
          <hr className="dropdowm-divider" />
        </li>
        <li className="notification-item">
          <i className=" bi bi-exclamation-circle text-success"></i>
          <div>
            <h4>Dicta reprehenderit</h4>
            <p>Quae dolerium earu</p>
            <p>4 hrs. ago</p>
          </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="notification-item">
          <i className=" bi bi-x-circle text-danger"></i>
          <div>
            <h4>Dicta reprehenderit</h4>
            <p>Quae dolerium earu</p>
            <p>4 hrs. ago</p>
          </div>
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

export default NavNotice;
