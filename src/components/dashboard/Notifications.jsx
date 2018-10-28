import React from "react";
import moment from "moment";
const Notifications = props => {
  const { notifications } = props;
  console.log(notifications);
  return (
    <div className="card">
      <div className="card-header">Featured</div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          {notifications &&
            notifications.map(itemNotification => {
              return (
                <li className="list-group-item" key={itemNotification.id}>
                  <span className="text-success">{itemNotification.user}</span>{" "}
                  {itemNotification.content}
                  <p>
                    <span className="text-primary">
                      {moment(itemNotification.time.toDate()).fromNow()}
                    </span>
                  </p>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
