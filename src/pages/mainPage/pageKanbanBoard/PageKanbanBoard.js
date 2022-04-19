import React, { useEffect, useState, useMemo, useContext } from "react";
import { URL, MyContext } from "../../../global";
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
  const { reload, setReload } = useContext(MyContext);
  let board = useMemo(() => {
    return {
      columns: [
        {
          id: 1,
          title: "TODO",
          cards: [],
        },
        {
          id: 11,
          title: "IN PROGRESS",
          cards: [],
        },
        {
          id: 31,
          title: "IN QA",
          cards: [],
        },
        {
          id: 41,
          title: "DONE",
          cards: [],
        },
      ],
    };
  }, []);
  const [tasks, setTasks] = useState();

  useEffect(() => {
    if (reload === "b" || reload === "c") {
      for (var key in board) {
        delete board[key];
        board.columns = [
          {
            id: 1,
            title: "TODO",
            cards: [],
          },
          {
            id: 11,
            title: "IN PROGRESS",
            cards: [],
          },
          {
            id: 31,
            title: "IN QA",
            cards: [],
          },
          {
            id: 41,
            title: "DONE",
            cards: [],
          },
        ];
      }
    }
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
                id: item.value.id,
                title: item.value.title,
                description: item.value.description,
                loggedTime: item.value.loggedTime,
                estimatedTime: item.value.estimatedTime,
                typeId: item.value.typeId,
                statusId: item.value.statusId,
                projectId: item.value.projectId,
                reporterId: item.value.reporterId,
                assigneeId: item.value.assigneeId,
              });
            } else if (
              board.columns[i].title === "TODO" &&
              item.value.status === "To Do"
            ) {
              board.columns[i].cards.push({
                id: item.value.id,
                title: item.value.title,
                description: item.value.description,
                loggedTime: item.value.loggedTime,
                estimatedTime: item.value.estimatedTime,
                typeId: item.value.typeId,
                statusId: item.value.statusId,
                projectId: item.value.projectId,
                reporterId: item.value.reporterId,
                assigneeId: item.value.assigneeId,
              });
            } else if (
              board.columns[i].title === "IN PROGRESS" &&
              item.value.status === "In Progress"
            ) {
              board.columns[i].cards.push({
                id: item.value.id,
                title: item.value.title,
                description: item.value.description,
                loggedTime: item.value.loggedTime,
                estimatedTime: item.value.estimatedTime,
                typeId: item.value.typeId,
                statusId: item.value.statusId,
                projectId: item.value.projectId,
                reporterId: item.value.reporterId,
                assigneeId: item.value.assigneeId,
              });
            } else if (
              board.columns[i].title === "IN QA" &&
              item.value.status === "In Testing"
            ) {
              board.columns[i].cards.push({
                id: item.value.id,
                title: item.value.title,
                description: item.value.description,
                loggedTime: item.value.loggedTime,
                estimatedTime: item.value.estimatedTime,
                typeId: item.value.typeId,
                statusId: item.value.statusId,
                projectId: item.value.projectId,
                reporterId: item.value.reporterId,
                assigneeId: item.value.assigneeId,
              });
            }
          }
          return board;
        });

        if (reload === "a") {
          setTasks(board);
        } else {
          setTasks({});
          setTasks(board);
          setReload("c");
        }
        console.log("Успех:", result);
        console.log("Успех:", board);
      })
      .catch((error) => console.log("Ошибка:", error));
  }, [board, reload, setReload]);

  const onCardDragEnd = (board, card, destination) => {
    fetch(URL + `/api/task/${card.id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: card.id,
        title: card.title,
        description: card.description,
        loggedTime: card.loggedTime,
        estimatedTime: card.estimatedTime,
        typeId: card.typeId,
        statusId: destination.toColumnId,
        projectId: card.projectId,
        reporterId: card.reporterId,
        assigneeId: card.assigneeId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setTasks(board);
        console.log("Успех:", result);
      })
      .catch((error) => console.log("Ошибка:", error));
  };

  const onCardRemove = (card) => {
    fetch(URL + `/api/task/${card.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Успех:", result);
      })
      .catch((error) => {
        console.log("Ошибка:", error);
      });
  };

  return (
    <div className="boardBox">
      <Board
        disableColumnDrag
        onCardDragEnd={(board, card, source, destination) =>
          onCardDragEnd(board, card, destination)
        }
        allowRemoveCard
        onCardRemove={(board, column, card) => onCardRemove(card)}
        initialBoard={board}
      >
        {tasks}
      </Board>
      <div className="callsBox">
        <Board initialBoard={calls} disableColumnDrag disableCardDrag />
      </div>
    </div>
  );
}

export default PageKanbanBoard;
