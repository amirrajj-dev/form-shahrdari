"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { BuildingInspectionFormData } from "@/src/lib/schema";

interface BasicInformationSectionProps {
  register: UseFormRegister<BuildingInspectionFormData>;
  errors: FieldErrors<BuildingInspectionFormData>;
}

export default function BasicInformationSection({
  register,
  errors,
}: BasicInformationSectionProps) {
  return (
    <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 border-b-2 border-blue-300 pb-2">
        <span className="bg-blue-100 px-3 py-1 rounded-lg">
          ۱. اطلاعات پایه پروژه
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Row 1 */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">
            شهرستان *
          </label>
          <input
            type="text"
            {...register("city")}
            className="input input-bordered w-full focus:ring-2 focus:ring-blue-500"
            placeholder="نام شهرستان"
          />
          {errors.city && (
            <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">
            نام مالک *
          </label>
          <input
            type="text"
            {...register("ownerName")}
            className="input input-bordered w-full focus:ring-2 focus:ring-blue-500"
            placeholder="نام کامل مالک"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">
            شماره تماس *
          </label>
          <input
            type="tel"
            {...register("phoneNumber")}
            className="input input-bordered w-full focus:ring-2 focus:ring-blue-500"
            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
          />
        </div>

        {/* Row 2 */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">
            کد پروژه *
          </label>
          <input
            type="text"
            {...register("projectCode")}
            className="input input-bordered w-full focus:ring-2 focus:ring-blue-500"
            placeholder="مثال: ۱۴۰۳-۰۰۱"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">
            شماره پروانه *
          </label>
          <input
            type="text"
            {...register("permitNumber")}
            className="input input-bordered w-full focus:ring-2 focus:ring-blue-500"
            placeholder="شماره پروانه ساختمانی"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">
            تاریخ پروانه *
          </label>
          <input
            type="date"
            {...register("permitDate")}
            className="input input-bordered w-full focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Row 3 */}
        <div className="md:col-span-3 space-y-2">
          <label className="block text-sm font-bold text-gray-700">
            آدرس پروژه *
          </label>
          <textarea
            {...register("address")}
            className="textarea textarea-bordered w-full focus:ring-2 focus:ring-blue-500"
            placeholder="آدرس کامل پروژه"
            rows={3}
          />
        </div>
      </div>
    </div>
  );
}
