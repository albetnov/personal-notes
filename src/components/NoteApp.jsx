import React, { useEffect, useState } from "react";
import NoteBody from "./NoteBody";
import NoteHeader from "./NoteHeader";
import { getInitialData } from "../utils";

export default function NoteApp() {
  const [data, setData] = useState(getInitialData());
  const [filteredData, setFilteredData] = useState(data);

  const onSearchEventHandler = (event) => {
    if (event.target.value !== "") {
      setFilteredData((prevState) =>
        prevState.filter(
          (result) =>
            result.title
              .toLowerCase()
              .includes(event.target.value.toLowerCase()) ||
            result.body.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
    } else {
      setFilteredData(data);
    }
  };

  const onDataCreatedEventHandler = ({ title, body }) => {
    const addition = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date(),
    };
    setData((prevState) => [...prevState, addition]);
  };

  const onDataDeletedEventHandler = (id) => {
    setData((prevState) => prevState.filter((item) => item.id !== id));
  };

  const onDataMovedEventHandler = (id) => {
    setData((prevState) => [
      ...prevState.map((item) => {
        if (item.id === id) {
          return { ...item, archived: !item.archived };
        }
        return item;
      }),
    ]);
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <div>
      <NoteHeader onSearch={onSearchEventHandler} />
      <NoteBody
        data={filteredData}
        onCreate={onDataCreatedEventHandler}
        onDelete={onDataDeletedEventHandler}
        onMoved={onDataMovedEventHandler}
      />
    </div>
  );
}
