// Project stage options
export const PROJECT_STAGES = [
  "تخریب",
  "گودبرداری",
  "پی",
  "اسکلت",
  "سقف",
  "سفت کاری",
  "نازک‌کاری",
  "بهره‌برداری غیر مجاز",
];

// Structure type options
export const STRUCTURE_TYPES = ["بتنی", "فنزی", "بنیانی"];

// Construction phase options
export const CONSTRUCTION_PHASES = [
  "گودبرداری",
  "فونداسیون",
  "سفت چینی",
  "اسکلت",
  "نازک کاری",
  "اتمام عملیات",
];

// Insurance and certificates checklist items
export const INSURANCE_AND_CERTIFICATES_ITEMS = [
  {
    field: "hasValidInsurance",
    label: "ساختمان دارای بیمه نامه مسئولیت مدنی معتبر می‌باشد",
  },
  {
    field: "hasAdditionalInsurance",
    label: "در صورت افزایش بنا بیمه نامه متمم اخذ شده است",
  },
  {
    field: "hasSafetyCertificate",
    label: "مجری یا سرپرست کارگاه دارای گواهینامه ایمنی می‌باشد",
  },
  {
    field: "ownerUsesSafetyEquipment",
    label: "بهره‌گیری مالک از وسایل ایمنی",
  },
  {
    field: "contractorHasSafetyEquipment",
    label: "مجری یا سرپرست کارگاه مجهز به تجهیزات ایمنی می‌باشد",
  },
  {
    field: "workersHaveSafetyTraining",
    label: "استادکاران و شاغلین در کارگاه در دوره آموزش ایمنی شرکت کرده‌اند",
  },
  {
    field: "workersHaveSkillCards",
    label: "کارکنان کارگاه دارای کارت مهارت فنی می‌باشند",
  },
];

// Site safety checklist items (items 14-28)
export const SITE_SAFETY_ITEMS = [
  {
    field: "isSiteFenced",
    label: "کارگاه بطور مطمئن و ایمن محصور گردیده است",
  },
  {
    field: "hasWarningSigns",
    label: "تابلوها و علایم هشدار دهنده در اطراف کارگاه نصب شده است",
  },
  {
    field: "materialsProperlyStored",
    label: "وسایل و تجهیزات کار، مصالح ساختمانی در مکان مناسب دپو شده است",
  },
  {
    field: "hasProtectiveBarriers",
    label:
      "سرپوش حفاظتی با عرض و استحکام کافی از شبکه فلزی یا از جنس الوار چوبی با شرایط مناسب نصب گردیده است",
  },
  {
    field: "openHolesProtected",
    label:
      "کلیه پرتگاه‌ها و دهانه‌های باز در قسمت های مختلف کارگاه ساختمانی و محوطه آن که احتمال خطر سقوط افراد را در بر دارند محصور شده است",
  },
  {
    field: "respectsPowerLines",
    label:
      "مقررات مربوط به حریم خطوط انتقال و توزیع نیروی برق رعایت گردیده است",
  },
  {
    field: "powerSafetyMeasures",
    label:
      "اقدامات احتیاطی لازم از قبیل قطع جریان , تغیر موقت یا داعم مسیر یا روکش کردن خطوط برق مجاور ساختمان با مواد مناسب از قبیل لوله های پلی اتیلن یا شیلنگ های لاستیکی و غیره انجام شده است",
  },
  {
    field: "machinerySafeDistance",
    label: "ماشین آلات با رعایت حریم خطوط برق نصب گردیده است",
  },
  {
    field: "workersHavePPE",
    label: "کلیه کارگران مجهز به وسایل حفاظت فردی می‌باشند",
  },
  {
    field: "scaffoldingMaterialQuality",
    label: "اجزای داربست‌ها از مصالح مناسب و مرغوب می‌باشد",
  },
  {
    field: "usesUnsafeScaffoldingMaterials",
    label: "برای تکیه‌گاه داربست از مصالح نامطمئن استفاده شده است",
  },
  {
    field: "scaffoldingProperlyBuilt",
    label: "تکیه گاه و جایگاه کار طبق اصول فنی ساخته شده است",
  },
  {
    field: "adequateWorkPlatforms",
    label:
      "جایگاه کار به تعداد کافی موجود می‌باشد و عرض جایگاه کار متناسب با نوع انجام کار می باشد",
  },
  {
    field: "ladderQuality",
    label:
      "پایه‌ها و پله‌های نردبان چوبی از چوب مرغوب ساخته شده است و فاقد هرگونه عیب و ایراد ظاهری می باشد",
  },
  {
    field: "safeExcavationAccess",
    label:
      "برای رفت و آمد کارگران به محل گود برداری راه‌های ورودی و خروجی مناسب در نظر گرفته شده است",
  },
];

// Additional safety checklist items
export const ADDITIONAL_SAFETY_ITEMS = [
  {
    field: "deepExcavationProtected",
    label: "دیوارهای گودبرداری عمیق (بیش از ۱۲۰ سانتی‌متر) حفاظت شده‌اند",
  },
  {
    field: "excavationNearRoadsProtected",
    label: "اقدامات احتیاطی برای گودبرداری مجاور معابر عمومی انجام شده است",
  },
  {
    field: "concreteFormworkStrength",
    label: "کلیه اجزاء قالب بتن دارای استحکام و مقاومت کافی می‌باشد",
  },
  {
    field: "elevatorPitFilled",
    label: "کف چاله آسانسور با یونولیت پر شده است",
  },
  {
    field: "elevatorObstacles",
    label: "موانع در مسیر آسانسور وجود دارد",
  },
  {
    field: "elevatorAreaFenced",
    label: "فضای منتهی به آسانسور با مصالح مناسب محصور شده است",
  },
  {
    field: "stairsHaveKickPlates",
    label: "راه پله‌ها دارای پاخور حفاظتی می‌باشد",
  },
  {
    field: "stairsHaveHandrails",
    label: "راه پله‌ها دارای نرده حفاظتی از مصالح مناسب می‌باشد",
  },
  {
    field: "hoistBeltProtected",
    label: "تسمه بالابر دارای حفاظ می‌باشد",
  },
  {
    field: "hoistProperlyInstalled",
    label: "پایه‌های بالابر طبق اصول فنی به کف ساختمان متصل شده است",
  },
  {
    field: "scaffoldAccessLadder",
    label: "راه ایمنی برای بالاتر رفتن و پایین آمدن از داربست وجود دارد",
  },
  {
    field: "scaffoldDistanceFromBuilding",
    label: "فاصله داربست از ساختمان کمتر از ۳۵ سانتی‌متر است",
  },
  {
    field: "scaffoldBracesInstalled",
    label: "مهار کننده‌ها در انتهای داربست نصب شده‌اند",
  },
];

// Site status assessment options
export const SITE_STATUS_OPTIONS = [
  {
    value: "قابل قبول",
    desc: "حداقل موارد بهداشتی، ایمنی و محیط زیست رعایت شده است",
    color: "bg-success/50 border-success",
  },
  {
    value: "کم خطر",
    desc: "توقف عملیات اجرایی و فرصت یک هفته‌ای جهت رفع موارد",
    color: "bg-warning/50 border-warning",
  },
  {
    value: "پر خطر",
    desc: "اخطار کتبی و توقف عملیات اجرایی جهت اقدامات قانونی",
    color: "bg-error/50 border-error",
  },
];

// Evaluation result options
export const EVALUATION_RESULT_OPTIONS = [
  "کارگاه دارای وضعیت قابل قبول",
  "کارگاه دارای وضعیت کم خطر",
  "کارگاه دارای وضعیت پرخطر",
];

// Signature fields
export const SIGNATURE_FIELDS = [
  { field: "expertSignature", label: "کارشناس تخلفات ساختمان" },
  { field: "contractorSignature", label: "مجری پروژه" },
  { field: "supervisorSignature", label: "ناظر پروژه" },
  { field: "ownerSignature", label: "مالک پروژه" },
];
