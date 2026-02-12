"use client";

import { UseFormRegister } from "react-hook-form";
import { BuildingInspectionFormData } from "@/src/lib/schema";

interface PermitDocumentationSectionProps {
  register: UseFormRegister<BuildingInspectionFormData>;
}

export default function PermitDocumentationSection({
  register,
}: PermitDocumentationSectionProps) {
  return (
    <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
      <h2 className="text-2xl font-bold text-green-800 mb-6 border-b-2 border-green-300 pb-2">
        <span className="bg-green-100 px-3 py-1 rounded-lg">
          ۲. مستندات و پروانه
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              {...register("hasPermitImage")}
              className="checkbox checkbox-sm checkbox-success"
              id="permitImage"
            />
            <label
              htmlFor="permitImage"
              className="text-sm font-medium text-gray-700"
            >
              تصویر پروانه ساختمانی در کارگاه موجود است
            </label>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              {...register("hasSealedPlans")}
              className="checkbox checkbox-sm checkbox-success"
              id="sealedPlans"
            />
            <label
              htmlFor="sealedPlans"
              className="text-sm font-medium text-gray-700"
            >
              نقشه ساختمانی ممهور به مهر طراح و ناظر و نظام مهندسی می‌باشد
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
