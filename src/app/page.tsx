"use client";

import BuildingForm from "../components/form/BuildingForm";
import { BuildingInspectionFormData } from "../lib/schema";
import { format } from "date-fns-jalali";
import { faIR } from "date-fns-jalali/locale";
import { useState } from "react";

export default function Home() {
  const [pdfData, setPdfData] = useState<BuildingInspectionFormData | null>(
    null,
  );
  const [currentFormData, setCurrentFormData] =
    useState<BuildingInspectionFormData | null>(null);

  const handleFormSubmit = async (data: BuildingInspectionFormData) => {
    console.log("Complete Form Data Submitted:", data);
    // Simulate PDF generation delay
    setTimeout(() => {
      setPdfData(data);
    }, 1500);
  };

  const handleFormChange = (data: BuildingInspectionFormData) => {
    setCurrentFormData(data);
  };

  // Calculate form completion percentage (for progress bar)
  const calculateCompletion = (data: BuildingInspectionFormData | null) => {
    if (!data) return 0;

    const totalFields = Object.keys(data).length;
    const filledFields = Object.values(data).filter(
      (value) =>
        value !== null &&
        value !== undefined &&
        value !== "" &&
        value !== false &&
        (Array.isArray(value) ? value.length > 0 : true),
    ).length;

    return Math.round((filledFields / totalFields) * 100);
  };

  return (
    <div
      className="min-h-screen font-nazanin bg-base-content"
      dir="rtl"
    >
      <header className="no-print bg-linear-to-l from-primary to-accent text-primary-content shadow-xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-right mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                🏗️ سیستم گزارش‌گیری تخلفات ساختمانی
              </h1>
              <p className="text-primary-content/80">
                فرم جامع بازدید، ارزیابی و صورتجلسه کارگاه‌های ساختمانی
              </p>
            </div>
            <div className="text-center md:text-left bg-base-100 backdrop-blur-sm rounded-xl p-4">
              <div className="text-xl font-bold">
                {format(new Date(), "EEEE, d MMMM yyyy", {
                  locale: faIR,
                })}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Progress Indicator */}
          <div className="no-print mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-primary">
                مراحل تکمیل فرم
              </div>
              <div className="text-sm font-medium text-primary">
                {currentFormData || pdfData
                  ? `${calculateCompletion(currentFormData || pdfData)}% تکمیل شده`
                  : "آماده ثبت"}
              </div>
            </div>
            <div className="w-full bg-base-300 rounded-full h-2.5">
              <div
                className="bg-primary h-2.5 rounded-full transition-all duration-500"
                style={{
                  width: `${currentFormData || pdfData ? calculateCompletion(currentFormData || pdfData) : 0}%`,
                }}
              ></div>
            </div>
          </div>

          {/* Form Guide */}
          <div className="no-print bg-linear-to-l from-warning/10 to-warning/20 p-6 rounded-2xl border-2 border-warning/30 mb-8 shadow-lg">
            <div className="flex items-start">
              <div className="bg-warning/20 p-3 rounded-lg ml-4">
                <svg
                  className="w-8 h-8 text-warning"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-warning-content mb-3">
                  راهنمای جامع تکمیل فرم
                </h2>
                <ul className="space-y-2 text-warning-content">
                  <li className="flex items-center">
                    <span className="bg-warning text-warning-content rounded-full w-6 h-6 flex items-center justify-center ml-2">
                      ۱
                    </span>
                    لطفا تمامی فیلدهای الزامی (ستاره‌دار) را با دقت تکمیل نمایید
                  </li>
                  <li className="flex items-center">
                    <span className="bg-warning text-warning-content rounded-full w-6 h-6 flex items-center justify-center ml-2">
                      ۲
                    </span>
                    اطلاعات را مطابق با مستندات و واقعیت موجود وارد کنید
                  </li>
                  <li className="flex items-center">
                    <span className="bg-warning text-warning-content rounded-full w-6 h-6 flex items-center justify-center ml-2">
                      ۳
                    </span>
                    پس از تکمیل، گزارش PDF قابل دانلود و چاپ ایجاد خواهد شد
                  </li>
                  <li className="flex items-center">
                    <span className="bg-warning text-warning-content rounded-full w-6 h-6 flex items-center justify-center ml-2">
                      ۴
                    </span>
                    گزارش نهایی دارای اعتبار قانونی و قابل ارائه به مراجع ذیصلاح
                    می‌باشد
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Form */}
          <div className="print-form-container bg-base-100 rounded-2xl shadow-2xl overflow-hidden border border-base-300">
            <BuildingForm
              onSubmit={handleFormSubmit}
              onFormChange={handleFormChange}
            />
          </div>

          {/* Footer Note */}
          <div className="no-print mt-12 bg-neutral text-neutral-content rounded-xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="bg-neutral-focus p-3 rounded-lg ml-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">توجه مهم:</h3>
                <p className="text-neutral-content/90 text-sm leading-relaxed">
                  این فرم بر اساس دستورالعمل‌های ایمنی و حفاظت کارگاه‌های
                  ساختمانی وزارت راه و شهرسازی، سازمان نظام مهندسی و شهرداری
                  طراحی شده است. اطلاعات وارد شده صرفاً برای بررسی، ارزیابی و
                  بهبود ایمنی کارگاه استفاده می‌شود و نزد سازمان‌های ذیربط محفوظ
                  خواهد ماند.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
