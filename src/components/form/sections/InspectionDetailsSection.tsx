"use client";

import { UseFormRegister } from "react-hook-form";
import { BuildingInspectionFormData } from "@/src/lib/schema";

interface InspectionDetailsSectionProps {
  register: UseFormRegister<BuildingInspectionFormData>;
}

export default function InspectionDetailsSection({
  register,
}: InspectionDetailsSectionProps) {
  return (
    <div className="border-2 border-purple-200 rounded-lg p-6 bg-purple-50">
      <h2 className="text-2xl font-bold text-purple-800 mb-6 border-b-2 border-purple-300 pb-2">
        <span className="bg-purple-100 px-3 py-1 rounded-lg">
          ۳. اطلاعات بازدید
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">
            تاریخ بازدید *
          </label>
          <input
            type="date"
            {...register("inspectionDate")}
            className="input input-bordered w-full focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">
            نام بازدید کننده *
          </label>
          <input
            type="text"
            {...register("inspectorName")}
            className="input input-bordered w-full focus:ring-2 focus:ring-purple-500"
            placeholder="نام بازدید کننده"
          />
        </div>

        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              {...register("hasContractorOnSite")}
              className="checkbox checkbox-sm checkbox-primary"
              id="contractorOnSite"
            />
            <label
              htmlFor="contractorOnSite"
              className="text-sm font-medium text-gray-700"
            >
              حضور مجری در محل کارگاه
            </label>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              {...register("hasLegalRepresentative")}
              className="checkbox checkbox-sm checkbox-primary"
              id="legalRepresentative"
            />
            <label
              htmlFor="legalRepresentative"
              className="text-sm font-medium text-gray-700"
            >
              حضور نماینده قانونی و ذیصلاح مجری
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
