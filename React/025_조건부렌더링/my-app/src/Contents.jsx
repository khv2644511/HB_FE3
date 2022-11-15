export default function Contents({ listName }) {
  if (listName === "one") {
    return (
      <div>
        one Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        id sapiente porro facere voluptas ex, vel facilis repellendus rerum
        excepturi quam dolor amet at nam praesentium voluptate! Accusamus,
        maiores praesentium?
      </div>
    );
  } else if (listName === "two") {
    return (
      <div>
        two Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        id sapiente porro facere voluptas ex, vel facilis repellendus rerum
        excepturi quam dolor amet at nam praesentium voluptate! Accusamus,
        maiores praesentium?
      </div>
    );
  } else if (listName === "three") {
    return (
      <div>
        three Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Architecto id sapiente porro facere voluptas ex, vel facilis repellendus
        rerum excepturi quam dolor amet at nam praesentium voluptate! Accusamus,
        maiores praesentium?
      </div>
    );
  } else if (listName === "four") {
    return (
      <div>
        four Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        id sapiente porro facere voluptas ex, vel facilis repellendus rerum
        excepturi quam dolor amet at nam praesentium voluptate! Accusamus,
        maiores praesentium?
      </div>
    );
  } else if (listName === "five") {
    return (
      <div>
        five Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        id sapiente porro facere voluptas ex, vel facilis repellendus rerum
        excepturi quam dolor amet at nam praesentium voluptate! Accusamus,
        maiores praesentium?
      </div>
    );
  }
  return <div>404</div>;
}
