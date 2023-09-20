"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import EmojiPicker, { Emoji, EmojiClickData } from "emoji-picker-react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import CustomInput from "@/components/CustomInput";

import formSchema from "@/validations/eventValidation";

import { ISchedule } from "@/types";

import generateUniqueId from "@/utils/generateUniqueId";
import useEvent from "@/hooks/useEvents";

interface IForm {
  title: string;
  date: string;
  description: string;
}

const defaultValues: IForm = {
  title: "",
  date: "",
  description: "",
};

const SchedulePage: React.FC = () => {
  const router = useRouter();

  const { createEvent } = useEvent();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: joiResolver(formSchema),
    defaultValues: defaultValues,
  });

  const [selectedEmoji, setSelectedEmoji] = useState("1f43c");
  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setSelectedEmoji(emojiData.unified);
    setIsEmojiPickerVisible(false);
  };

  const onSubmit = async (data: IForm) => {
    setIsLoading(true);

    try {
      Object.assign(data, { emoji: selectedEmoji });
      Object.assign(data, { rows: [] });

      const scheduleId = generateUniqueId();
      const formattedDate = dayjs(data.date).locale("pt-br").format("DD/MM");

      const scheduleWithId: ISchedule = {
        id: scheduleId,
        emoji: selectedEmoji,
        title: data.title,
        date: formattedDate,
        description: data.description,
        rows: [],
      };

      createEvent(scheduleWithId);

      setTimeout(() => {
        toast.success("New event!");
        router.push("/home");
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao salvar o formulário.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = handleSubmit(onSubmit);

  return (
    <div className="p-8 flex flex-col">
      <div className="bg-white w-full p-8 rounded-lg shadow-md text-black">
        <div className="mb-4">
          <label className="block mb-1">Emoji:</label>
          <button
            onClick={() => setIsEmojiPickerVisible(!isEmojiPickerVisible)}
            className={`p-2 rounded-sm ${
              isEmojiPickerVisible ? "bg-gray-400" : "bg-gray-200"
            }`}
          >
            <Emoji unified={selectedEmoji} size={50} />
          </button>
          {isEmojiPickerVisible && (
            <div className="z-50 absolute mt-2">
              <EmojiPicker
                onEmojiClick={handleEmojiClick}
                autoFocusSearch={false}
                lazyLoadEmojis={true}
              />
            </div>
          )}
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-1">
              Título:
            </label>
            <CustomInput
              register={register}
              type="text"
              name="title"
              error={errors?.title}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block mb-1">
              Data:
            </label>
            <CustomInput
              register={register}
              type="date"
              name="date"
              error={errors?.date}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-1">
              Descrição:
            </label>
            <CustomInput
              register={register}
              type="text"
              name="description"
              error={errors?.description}
            />
          </div>
          <div className="flex">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-neutral-900 text-white p-2 rounded-md w-full"
            >
              {isLoading ? "Carregando..." : "Criar Evento"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SchedulePage;
