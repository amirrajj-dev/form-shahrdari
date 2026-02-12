"use client";

interface SubmitSectionProps {
  isValid: boolean;
}

export default function SubmitSection({ isValid }: SubmitSectionProps) {
  return (
    <div className="no-print bg-linear-to-l from-blue-500 to-purple-600 rounded-lg p-8 shadow-lg">
      <div className="text-center text-white">
        <h3 className="text-2xl font-bold mb-2">آماده چاپ</h3>
        <p className="mb-6 opacity-90">
          برای چاپ فرم یا ذخیره به عنوان PDF، کلیک کنید
        </p>
        <button
          type="button"
          onClick={() => window.print()}
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
  );
}
