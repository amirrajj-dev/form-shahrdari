"use client";

import { UseFormRegister } from "react-hook-form";
import { BuildingInspectionFormData } from "@/src/lib/schema";
import { SITE_SAFETY_ITEMS } from "@/src/data/data";

interface SiteSafetySectionProps {
  register: UseFormRegister<BuildingInspectionFormData>;
}

export default function SiteSafetySection({
  register,
}: SiteSafetySectionProps) {
  return (
    <div className="border-2 border-red-200 rounded-lg p-6 bg-red-50">
      <h2 className="text-2xl font-bold text-red-800 mb-6 border-b-2 border-red-300 pb-2">
        <span className="bg-red-100 px-3 py-1 rounded-lg">
          ۶. ایمنی کارگاه
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SITE_SAFETY_ITEMS.map(({ field, label }) => (
          <div key={field} className="bg-white p-3 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                {...register(field as keyof BuildingInspectionFormData)}
                className="checkbox checkbox-sm checkbox-error"
                id={`safety-${field}`}
              />
              <label
                htmlFor={`safety-${field}`}
                className="text-xs font-medium text-gray-700"
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
