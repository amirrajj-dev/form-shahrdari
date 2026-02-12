"use client";

import { UseFormRegister } from "react-hook-form";
import { BuildingInspectionFormData } from "@/src/lib/schema";
import {
  PROJECT_STAGES,
  SITE_STATUS_OPTIONS,
  EVALUATION_RESULT_OPTIONS,
  SIGNATURE_FIELDS,
} from "@/src/data/data";

interface MeetingMinutesSectionProps {
  register: UseFormRegister<BuildingInspectionFormData>;
  selectedStages: string[];
  onStageToggle: (stage: string) => void;
}

export default function MeetingMinutesSection({
  register,
  selectedStages,
  onStageToggle,
}: MeetingMinutesSectionProps) {
  return (
    <div className="border-2 border-gray-300 rounded-lg p-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-gray-400 pb-2">
        <span className="bg-gray-100 px-3 py-1 rounded-lg">
          ۸. صورتجلسه بازدید
        </span>
      </h2>

      <div className="space-y-6">
        {/* Coordinator Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">
              ناظر هماهنگ کننده
            </label>
            <input
              type="text"
              {...register("coordinatorName")}
              className="input input-bordered w-full"
              placeholder="نام ناظر هماهنگ کننده"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">
              نام مجری
            </label>
            <input
              type="text"
              {...register("contractorName")}
              className="input input-bordered w-full"
              placeholder="نام مجری پروژه"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">
              کد پروژه نظام مهندسی
            </label>
            <input
              type="text"
              {...register("engineeringSystemCode")}
              className="input input-bordered w-full"
              placeholder="کد نظام مهندسی"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">
              کد نوسازی / پلاک ثبتی
            </label>
            <input
              type="text"
              {...register("renovationCode")}
              className="input input-bordered w-full"
              placeholder="کد نوسازی"
            />
          </div>
        </div>

        {/* Building Details */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">
              عمق گودبرداری
            </label>
            <input
              type="text"
              {...register("buildingDepth")}
              className="input input-bordered w-full"
              placeholder="متر"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">
              گروه ساختمان
            </label>
            <input
              type="text"
              {...register("buildingGroup")}
              className="input input-bordered w-full"
              placeholder="گروه ساختمان"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">
              تاریخ صورتجلسه
            </label>
            <input
              type="date"
              {...register("meetingDate")}
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg border">
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  {...register("hasAdditionalConstruction")}
                  className="checkbox checkbox-primary checkbox-sm"
                  id="additionalConstruction"
                />
                <label
                  htmlFor="additionalConstruction"
                  className="text-sm font-medium text-gray-700"
                >
                  در مرحله اضافه بنا می‌باشد
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Project Stages Selection */}
        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-700">
            مرحله بازدید
          </label>
          <div className="flex flex-wrap gap-3">
            {PROJECT_STAGES.map((stage) => (
              <button
                key={stage}
                type="button"
                onClick={() => onStageToggle(stage)}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  selectedStages.includes(stage)
                    ? "bg-blue-100 border-blue-500 text-blue-700"
                    : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {stage}
              </button>
            ))}
          </div>
        </div>

        {/* Status Checkboxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border">
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                {...register("hasComplaintReport")}
                className="checkbox checkbox-sm checkbox-primary"
                id="complaintReport"
              />
              <label
                htmlFor="complaintReport"
                className="text-sm font-medium text-gray-700"
              >
                پروژه دارای گزارش شکایتی می‌باشد
              </label>
            </div>
          </div>
        </div>

        {/* Site Status Assessment */}
        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-700">
            ارزیابی وضعیت کارگاه
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SITE_STATUS_OPTIONS.map(({ value, desc, color }) => (
              <label
                key={value}
                className={`block p-4 rounded-lg border-2 cursor-pointer transition-all hover:scale-[1.02] ${color}`}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    value={value}
                    {...register("siteStatus")}
                    className="radio"
                  />
                  <span className={`mr-3 font-bold text-base-content`}>
                    {value}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-2 pr-8">{desc}</p>
              </label>
            ))}
          </div>
        </div>

        {/* Evaluation Result */}
        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-700">
            نتیجه ارزیابی کلی
          </label>
          <div className="flex flex-wrap gap-4">
            {EVALUATION_RESULT_OPTIONS.map((result) => (
              <div key={result} className="flex items-center">
                <input
                  type="radio"
                  value={result}
                  {...register("evaluationResult")}
                  className="radio radio-primary ml-2"
                  id={`result-${result}`}
                />
                <label
                  htmlFor={`result-${result}`}
                  className="text-sm font-medium text-gray-700"
                >
                  {result}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Notes */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700">
            توضیحات تکمیلی
          </label>
          <textarea
            {...register("additionalNotes")}
            className="textarea textarea-bordered w-full"
            placeholder="هر گونه توضیح اضافی یا نکات مهم..."
            rows={4}
          />
        </div>

        {/* Signatures */}
        <div className="space-y-4">
          <h3 className="font-bold text-gray-700">امضاء‌های مورد نیاز</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SIGNATURE_FIELDS.map(({ field, label }) => (
              <div key={field} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  {label}
                </label>
                <input
                  type="text"
                  {...register(field as keyof BuildingInspectionFormData)}
                  className="input input-bordered w-full"
                  placeholder="نام و نام خانوادگی"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
