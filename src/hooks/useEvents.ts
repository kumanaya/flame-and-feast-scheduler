// useEvent.ts

import { useState, useEffect } from "react";
import { IRow, ISchedule } from "@/types";

function useEvent(): {
  events: ISchedule[];
  createEvent: (event: ISchedule) => void;
  addParticipant: (eventId: string, participant: IRow) => void;
  removeParticipant: (eventId: string, participantName: string) => void;
  findEventById: (eventId: string) => ISchedule | undefined;
} {
  const [events, setEvents] = useState<ISchedule[]>([]);

  // Carregar eventos do localStorage quando o hook é montado
  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  // Função para salvar eventos no localStorage
  const saveEventsToLocalStorage = (updatedEvents: ISchedule[]) => {
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  function findEventById(eventId: string): ISchedule | undefined {
    return events.find((event) => event.id === eventId);
  }

  function createEvent(event: ISchedule): void {
    const updatedEvents = [...events, event];
    setEvents(updatedEvents);
    saveEventsToLocalStorage(updatedEvents);
  }

  function addParticipant(eventId: string, participant: IRow): void {
    const updatedEvents = events.map((event) =>
      event.id === eventId
        ? { ...event, rows: [...event.rows, participant] }
        : event
    );

    console.log("analisando o updatedEvents");
    console.log(updatedEvents);
    
    setEvents(updatedEvents);
    saveEventsToLocalStorage(updatedEvents);
  }

  function removeParticipant(eventId: string, participantId: string): void {
    const updatedEvents = events.map((event) => {
      if (event.id === eventId) {
        const updatedRows = event.rows.filter(
          (row) => row.id !== participantId
        );
        return { ...event, rows: updatedRows };
      }
      return event;
    });
    setEvents(updatedEvents);
    saveEventsToLocalStorage(updatedEvents);
  }
  

  return {
    events,
    findEventById,
    createEvent,
    addParticipant,
    removeParticipant,
  };
}

export default useEvent;
