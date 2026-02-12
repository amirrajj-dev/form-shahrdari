"use client";

import { UseFormRegister } from "react-hook-form";
import { BuildingInspectionFormData } from "@/src/lib/schema";
import { STRUCTURE_TYPES, CONSTRUCTION_PHASES } from "@/src/data/data";

interface BuildingSpecificationsSectionProps {
  register: UseFormRegister<BuildingInspectionFormData>;
}

export default function BuildingSpecificationsSection({
  register,
}: BuildingSpecificationsSectionProps) {
  return (
    <div className="border-2 border-amber-200 rounded-lg p-6 bg-amber-50">
      <h2 className="text-2xl font-bold text-amber-800 mb-6 border-b-2 border-amber-300 pb-2">
        <span className="bg-amber-100 px-3 py-1 rounded-lg">
          ۴. مشخصات ساختمان
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Structure Type */}
        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-700">
            نوع سازه *
          </label>
          <div className="space-y-2">
            {STRUCTURE_TYPES.map((type) => (
              <div key={type} className="flex items-center">
                <input
                  type="radio"
                  value={type}
                  {...register("structureType")}
                  className="radio radio-warning ml-2"
                  id={`structure-${type}`}
                />
                <label
                  htmlFor={`structure-${type}`}
                  className="text-sm font-medium text-gray-700"
                >
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Building Area */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">
            متراز ساختمان (مطابق پروانه) *
          </label>
          <div className="relative">
            <input
              type="text"
              {...register("buildingArea")}
              className="input input-bordered w-full focus:ring-2 focus:ring-amber-500"
              placeholder="متر مربع"
            />
            <span className="absolute left-3 top-3 text-gray-500">متر</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">
            تعداد سقف (مطابق پروانه) *
          </label>
          <input
            type="number"
            {...register("floorCount")}
            className="input input-bordered w-full focus:ring-2 focus:ring-amber-500"
            placeholder="تعداد طبقات"
            min="1"
          />
        </div>

        {/* Additional Construction */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">
            متراز ساختمان (در صورت افزایش پروانه)
          </label>
          <input
            type="text"
            {...register("additionalArea")}
            className="input input-bordered w-full focus:ring-2 focus:ring-amber-500"
            placeholder="متر مربع اضافه"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">
            تعداد سقف (مطابق اجرا)
          </label>
          <input
            type="number"
            {...register("additionalFloors")}
            className="input input-bordered w-full focus:ring-2 focus:ring-amber-500"
            placeholder="تعداد طبقات اجرا شده"
          />
        </div>

        {/* Construction Phase */}
        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-700">
            مرحله انجام کار *
          </label>
          <div className="space-y-2">
            {CONSTRUCTION_PHASES.map((phase) => (
              <div key={phase} className="flex items-center">
                <input
                  type="radio"
                  value={phase}
                  {...register("constructionPhase")}
                  className="radio radio-warning ml-2"
                  id={`phase-${phase}`}
                />
                <label
                  htmlFor={`phase-${phase}`}
                  className="text-sm font-medium text-gray-700"
                >
                  {phase}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
