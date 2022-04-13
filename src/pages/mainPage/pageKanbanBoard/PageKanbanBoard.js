import React from "react";
import Board from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";
import "./styles.css";

const board = {
  columns: [
    {
      id: 2,
      title: "TODO",
      cards: [
        {
          id: 2,
          title: "Registration",
          description: "LogIn API integration",
        },
      ],
    },
    {
      id: 3,
      title: "IN PROGRESS",
      cards: [],
    },
    {
      id: 4,
      title: "IN QA",
      cards: [],
    },
    {
      id: 5,
      title: "DONE",
      cards: [],
    },
  ],
};

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
  return (
    <div className="boardBox">
      <Board initialBoard={board} />
      <div className="callsBox">
        <Board initialBoard={calls}/>
      </div>
    </div>
  );
}

export default PageKanbanBoard;
