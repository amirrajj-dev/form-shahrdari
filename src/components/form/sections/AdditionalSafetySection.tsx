"use client";

import { UseFormRegister } from "react-hook-form";
import { BuildingInspectionFormData } from "@/src/lib/schema";
import { ADDITIONAL_SAFETY_ITEMS } from "@/src/data/data";

interface AdditionalSafetySectionProps {
  register: UseFormRegister<BuildingInspectionFormData>;
}

export default function AdditionalSafetySection({
  register,
}: AdditionalSafetySectionProps) {
  return (
    <div className="border-2 border-indigo-200 rounded-lg p-6 bg-indigo-50">
      <h2 className="text-2xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-300 pb-2">
        <span className="bg-indigo-100 px-3 py-1 rounded-lg">
          ۷. ایمنی اضافی 
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ADDITIONAL_SAFETY_ITEMS.map(({ field, label }) => (
          <div key={field} className="bg-white p-4 rounded-lg border">
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                {...register(field as keyof BuildingInspectionFormData)}
                className="checkbox checkbox-sm checkbox-info"
                id={`additional-${field}`}
              />
              <label
                htmlFor={`additional-${field}`}
                className="text-sm font-medium text-gray-700"
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
