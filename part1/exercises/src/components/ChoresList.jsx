import React from "react";
import classes from "./ChoresList.module.css";

class ChoresList extends React.Component {
  render() {
    const chores = [
      "Do the dishes",
      "Do the laundry",
      "Grocery shopping",
      "Sweep and mop",
    ];
    return (
      <div>
        <h3 className={classes.choresHeading}>Chores to Do</h3>
        <ol>
          <li className={classes.choresText}>{chores[0]}</li>
          <li className={classes.choresText}>{chores[1]}</li>
          <li className={classes.choresText}>{chores[2]}</li>
          <li className={classes.choresText}>{chores[3]}</li>
        </ol>
      </div>
    );
  }
}

export default ChoresList;

// export default function ChoresList() {
//   return <p>No content is here!</p>;
// }
