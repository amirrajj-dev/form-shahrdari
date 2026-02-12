"use client";

import { UseFormRegister } from "react-hook-form";
import { BuildingInspectionFormData } from "@/src/lib/schema";
import { INSURANCE_AND_CERTIFICATES_ITEMS } from "@/src/data/data";

interface InsuranceCertificatesSectionProps {
  register: UseFormRegister<BuildingInspectionFormData>;
}

export default function InsuranceCertificatesSection({
  register,
}: InsuranceCertificatesSectionProps) {
  return (
    <div className="border-2 border-emerald-200 rounded-lg p-6 bg-emerald-50">
      <h2 className="text-2xl font-bold text-emerald-800 mb-6 border-b-2 border-emerald-300 pb-2">
        <span className="bg-emerald-100 px-3 py-1 rounded-lg">
          ۵. بیمه و گواهینامه‌ها
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {INSURANCE_AND_CERTIFICATES_ITEMS.map(({ field, label }) => (
          <div key={field} className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                {...register(field as keyof BuildingInspectionFormData)}
                className="checkbox checkbox-sm checkbox-success"
                id={field}
              />
              <label
                htmlFor={field}
                className="text-sm font-medium text-gray-700 cursor-pointer"
              >
                {label}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
