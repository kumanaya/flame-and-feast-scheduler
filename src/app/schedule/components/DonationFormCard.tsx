import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import CustomInputSelect from "@/components/CustomInputSelect";

import donationSchema from "@/validations/donationValidation";
import CustomInput from "@/components/CustomInput";
import generateUniqueId from "@/utils/generateUniqueId";

export interface IDonationForm {
  name: string;
  donatedAmount: number;
}

interface DonationFormCardProps {
  onAddRow: (newRow: IDonationForm) => void;
}

const defaultValues: IDonationForm = {
  name: "",
  donatedAmount: 0,
};

const OPTIONS = [
  { value: "50", label: "R$50.00" },
  { value: "100", label: "R$100.00" },
];

const DonationFormCard: React.FC<DonationFormCardProps> = ({ onAddRow }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDonationForm>({
    resolver: joiResolver(donationSchema),
    defaultValues: defaultValues,
  });

  const addRow = (data: IDonationForm) => {
    const rowId = generateUniqueId();
    const rowWithId = { ...data, id: rowId };
    onAddRow(rowWithId);
  };

  const handleFormSubmit = handleSubmit(addRow);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-black h-min		">
      <div className="flex flex-col space-y-4">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="name">Nome:</label>
            <CustomInput
              register={register}
              type="text"
              name="name"
              error={errors?.name}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="donatedAmount">Contribuir:</label>
            <CustomInputSelect
              register={register}
              name="donatedAmount"
              error={errors?.donatedAmount}
              options={OPTIONS}
            />
          </div>
          <div className="flex-col">
            <p className="text-xs mb-2 text-slate-400">R$ 50.00 (sem bebida)</p>
            <p className="text-xs text-slate-400">R$ 100.00 (com bebida)</p>
          </div>
          <button
            type="submit"
            className="bg-neutral-900 text-white p-2 rounded-md w-full mt-14"
          >
            Adicionar
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationFormCard;
