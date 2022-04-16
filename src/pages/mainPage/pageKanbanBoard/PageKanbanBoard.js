import React, { useEffect, useState } from "react";
import { URL } from "../../../global";
import Board from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";
import "./styles.css";

const calls = {
  columns: [
    {
      id: 1,
      title: "CALLS",
      cards: [
        {
          id: 1,
          title: "Planning session",
          description: "17:00",
        },
      ],
    },
  ],
};

function PageKanbanBoard() {
  const board = {
    columns: [
      {
        id: 1,
        title: "TODO",
        cards: [],
      },
      {
        id: 2,
        title: "IN PROGRESS",
        cards: [],
      },
      {
        id: 3,
        title: "IN QA",
        cards: [],
      },
      {
        id: 4,
        title: "DONE",
        cards: [],
      },
    ],
  };
  const [tasks, setTasks] = useState();

  useEffect(() => {
    fetch(URL + "/api/task", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        result.map((item) => {
          for (let i = 0; i < board.columns.length; i++) {
            if (
              board.columns[i].title === "DONE" &&
              item.value.status === "Done"
            ) {
              board.columns[i].cards.push({
                id: Math.random(),
                title: item.value.title,
                description: item.value.description,
              });
            } else if (
              board.columns[i].title === "TODO" &&
              item.value.status === "To Do"
            ) {
              board.columns[i].cards.push({
                id: Math.random(),
                title: item.value.title,
                description: item.value.description,
              });
            } else if (
              board.columns[i].title === "IN PROGRESS" &&
              item.value.status === "In Progress"
            ) {
              board.columns[i].cards.push({
                id: Math.random(),
                title: item.value.title,
                description: item.value.description,
              });
            } else if (
              board.columns[i].title === "IN QA" &&
              item.value.status === "In Testing"
            ) {
              board.columns[i].cards.push({
                id: Math.random(),
                title: item.value.title,
                description: item.value.description,
              });
            }
          }
          return board;
        });
        setTasks(board);
        console.log("Успех:", result);
        console.log("Успех:", board);
      })
      .catch((error) => console.log("Ошибка:", error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="boardBox">
      <Board disableColumnDrag initialBoard={board}>
        {tasks}
      </Board>
      <div className="callsBox">
        <Board initialBoard={calls} disableColumnDrag disableCardDrag />
      </div>
    </div>
  );
}

export default PageKanbanBoard;
