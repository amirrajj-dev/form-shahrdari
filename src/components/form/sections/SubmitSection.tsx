"use client";

import { useState, useEffect, useRef } from "react";

interface SubmitSectionProps {
  isValid: boolean;
  onReset: () => void;
}

export default function SubmitSection({
  isValid,
  onReset,
}: SubmitSectionProps) {
  const [resetAfterPrint, setResetAfterPrint] = useState(false);
  const [showResetConfirmation, setShowResetConfirmation] = useState(false);
  const printDialogOpenedRef = useRef(false);

  useEffect(() => {
    const handleBeforePrint = () => {
      // Mark that print dialog was actually opened
      printDialogOpenedRef.current = true;
    };

    const handleAfterPrint = () => {
      // Only show confirmation if:
      // 1. User checked the reset checkbox
      // 2. Print dialog was actually opened (not just cancelled before opening)
      if (resetAfterPrint && printDialogOpenedRef.current) {
        // Show confirmation dialog after print dialog closes
        // This gives user a chance to cancel if they didn't actually print/save
        setShowResetConfirmation(true);
        printDialogOpenedRef.current = false; // Reset for next time
      }
    };

    // Listen for print events
    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);

    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, [resetAfterPrint]);

  const handleConfirmReset = () => {
    setShowResetConfirmation(false);
    onReset();
  };

  const handleCancelReset = () => {
    setShowResetConfirmation(false);
  };

  const handlePrint = () => {
    // Reset flag when print button is clicked
    // It will be set to true by beforeprint event if dialog actually opens
    printDialogOpenedRef.current = false;
    window.print();
  };

  return (
    <>
      {/* Reset Confirmation Modal */}
      {showResetConfirmation && (
        <div className="no-print bg-black/50 flex items-center justify-center z-50"
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, height: '100vh', width: '100vw' }}
        >
          <div className="bg-base-100 rounded-lg p-6 max-w-md mx-4 shadow-2xl">
            <h3 className="text-xl font-bold mb-4 text-center">بازنشانی فرم</h3>
            <p className="text-center mb-6">
              آیا فرم را چاپ کردید یا به عنوان PDF ذخیره کردید؟
              <br />
              در صورت تأیید، فرم بازنشانی خواهد شد.
            </p>
            <div className="flex gap-4 justify-center">
              <button onClick={handleConfirmReset} className="btn btn-primary">
                بله، بازنشانی کن
              </button>
              <button onClick={handleCancelReset} className="btn btn-soft">
                خیر، بازنشانی نکن
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="no-print bg-linear-to-l from-blue-500 to-purple-600 rounded-lg p-8 shadow-lg">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-2">آماده چاپ</h3>
          <p className="mb-6 opacity-90">
            برای چاپ فرم یا ذخیره به عنوان PDF، کلیک کنید
          </p>

          {/* Reset checkbox */}
          <div className="mb-6 flex items-center justify-center">
            <label className="flex items-center cursor-pointer gap-2">
              <input
                type="checkbox"
                checked={resetAfterPrint}
                onChange={(e) => setResetAfterPrint(e.target.checked)}
                className="checkbox checkbox-warning checkbox-lg"
              />
              <span className="text-white text-sm md:text-base">
                بازنشانی فرم پس از چاپ یا ذخیره PDF
              </span>
            </label>
          </div>

          <button
            type="button"
            onClick={handlePrint}
            disabled={!isValid}
            className={`btn btn-lg btn-outline btn-warning text-white px-10 py-4 text-lg ${
              !isValid ? "opacity-50 cursor-not-allowed" : ""
            }`}
            title={!isValid ? "لطفا تمامی فیلدهای الزامی را تکمیل کنید" : ""}
          >
            <svg
              className="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            چاپ فرم
          </button>
        </div>
      </div>
    </>
  );
}
