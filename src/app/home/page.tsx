"use client";
import React, { useState, useEffect } from "react";
import Card from "@/app/home/components/Card";
import AddEventButton from "@/app/home/components/AddEventButton";
import SkeletonLoading from "./components/SkeletonLoading";

import useEvent from "@/hooks/useEvents";

import { IEvent } from "@/types";

const HomePage: React.FC = () => {
  const { events } = useEvent();

  const [cards, setCards] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (events) {
        const eventsWithParticipantsAndTotalRaised = events.map((event) => {
          const totalParticipants = event.rows.length;
          const totalRaised = event.rows.reduce(
            (acc, row) => acc + row.donatedAmount,
            0
          );
          return { ...event, participants: totalParticipants, totalRaised };
        });

        setCards(eventsWithParticipantsAndTotalRaised);
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("Ocorreu um erro ao carregar os eventos.");
    }
  }, [events]);

  if (error) {
    return (
      <div className="p-8">
        <p className="text-white">
          Não foi possível carregar o conteúdo. Recarregue a página!
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <SkeletonLoading />
          <SkeletonLoading />
          <AddEventButton />
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            id={card.id}
            emoji={card.emoji}
            title={card.title}
            date={card.date}
            participants={card.participants}
            totalRaised={card.totalRaised}
          />
        ))}
        <AddEventButton />
      </div>
    </div>
  );
};

export default HomePage;
