"use client";
import React, { useState, useEffect } from "react";
import DonationFormCard from "../components/DonationFormCard";
import SkeletonLoading from "../components/SkeletonLoading";
import { Emoji } from "emoji-picker-react";
import { PiMoneyLight, PiUsersThreeBold, PiXBold } from "react-icons/pi";
import { IRow, ISchedule } from "@/types";
import useEvent from "@/hooks/useEvents";
import { toast } from "react-toastify";

export default function SchedulePage({ params }: { params: { id: string } }) {
  const { findEventById, addParticipant, removeParticipant } = useEvent();

  const [event, setEvent] = useState<ISchedule>({
    id: "",
    emoji: "1f60a",
    title: "",
    date: "",
    description: "",
    rows: [],
  });
  const [rows, setRow] = useState<IRow[]>([]);
  const [totalDonated, setTotalDonated] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  const addRow = (newRow: IRow) => {
    try {
      addParticipant(event.id, newRow);
      setRow([...rows, newRow]);
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao adicionar o participante.");
    }
  };

  const removeRow = (index: number) => {
    try {
      const rowIdToRemove = rows[index].id;
      removeParticipant(event.id, rowIdToRemove || "");
      const updatedRows = [...rows];
      updatedRows.splice(index, 1);
      setRow(updatedRows);
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao remover o participante.");
    }
  };

  useEffect(() => {
    try {
      const storedEvent = findEventById(params.id);

      if (storedEvent) {
        setEvent(storedEvent);
        setRow(storedEvent.rows);
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("Ocorreu um erro ao carregar os dados.");
    }
  }, [findEventById, params.id]);

  useEffect(() => {
    const total = rows.reduce((acc, row) => acc + row.donatedAmount, 0);
    setTotalDonated(total);

    setIsEmpty(rows.length === 0);
  }, [rows]);

  if (error) {
    return (
      <div className="p-8 flex flex-col lg:flex-row">
        <div className="lg:w-1/4 lg:mb-4 mb-8 lg:mr-4 lg:self-start">
          <DonationFormCard onAddRow={addRow} />
        </div>
        <div className="lg:flex-1">
          <div className="bg-white w-full p-4 rounded-lg shadow-md text-black">
            <p className="mt-2 mb-8">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-8 flex flex-col lg:flex-row">
        <div className="lg:w-5/6 lg:mr-4 sm: mb-4">
          <SkeletonLoading />
        </div>
        <DonationFormCard onAddRow={addRow} />
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="p-8 flex flex-col lg:flex-row">
        <div className="lg:w-5/6 lg:mr-4 sm: mb-4">
          <div className="bg-white w-full p-4 rounded-lg shadow-md text-black">
            <div className="flex flex-col justify-between items-start lg:flex-row">
              <div className="flex items-center mb-4">
                <div className="mr-2">
                  <Emoji unified={event.emoji} size={30} />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{event?.title}</h2>
                  <p className="text-gray-500">{event?.date}</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <PiUsersThreeBold className="mr-2 mt-1" />
                  <p className="text-gray-500">{rows.length}</p>
                </div>
                <div className="flex items-center">
                  <PiMoneyLight className="mr-2 mt-1" />
                  <p className="text-gray-500">
                    R${totalDonated.toFixed(2) || "R$00.00"}
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-4 lg:mt-2 mb-4 lg:mb-8">{event?.description}</p>

            <div className="flex justify-between items-center border-b border-gray-300 py-2">
              <p className="truncate lg:w-32"></p>
            </div>
          </div>
        </div>
        <DonationFormCard onAddRow={addRow} />
      </div>
    );
  }

  return (
    <div className="p-8 flex flex-col lg:flex-row">
      <div className="lg:w-5/6 lg:mr-4 sm: mb-4">
        <div className="bg-white w-full p-4 rounded-lg shadow-md text-black">
          <div className="flex flex-col justify-between items-start lg:flex-row">
            <div className="flex items-center mb-4">
              <div className="mr-2">
                <Emoji unified={event.emoji} size={30} />
              </div>
              <div>
                <h2 className="text-xl font-bold">{event?.title}</h2>
                <p className="text-gray-500">{event?.date}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <PiUsersThreeBold className="mr-2 mt-1" />
                <p className="text-gray-500">{rows.length}</p>
              </div>
              <div className="flex items-center">
                <PiMoneyLight className="mr-2 mt-1" />
                <p className="text-gray-500">
                  R${totalDonated.toFixed(2) || "R$00.00"}
                </p>
              </div>
            </div>
          </div>
          <p className="mt-4 lg:mt-2 mb-4 lg:mb-8">{event?.description}</p>
          {rows.map((row, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-gray-300 py-2"
            >
              <p className="truncate lg:w-32">{row.name}</p>
              <p className="text-gray-500 lg:mr-4">
                R${row.donatedAmount.toFixed(2)}
              </p>
              <button
                name="btn-remove"
                onClick={() => removeRow(index)}
                className="text-red-500"
              >
                <PiXBold />
              </button>
            </div>
          ))}
        </div>
      </div>
      <DonationFormCard onAddRow={addRow} />
    </div>
  );
}
