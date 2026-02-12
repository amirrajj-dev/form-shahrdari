// app/lib/schema.ts
import { z } from 'zod';

// Define a base object with all required types
export const buildingInspectionSchema = z.object({
  // === Basic Information (Page 1) ===
  city: z.string().min(1, "شهرستان الزامی است"),
  ownerName: z.string().min(1, "نام مالک الزامی است"),
  phoneNumber: z.string().min(1, "شماره تماس الزامی است"),
  projectCode: z.string().min(1, "کد پروژه الزامی است"),
  address: z.string().min(1, "آدرس الزامی است"),
  permitNumber: z.string().min(1, "شماره پروانه ساختمانی الزامی است"),
  permitDate: z.string().min(1, "تاریخ پروانه الزامی است"),
  
  // Permit Checks
  hasPermitImage: z.boolean(),
  hasSealedPlans: z.boolean(),
  
  // Inspection Details
  inspectionDate: z.string().min(1, "تاریخ بازدید الزامی است"),
  inspectorName: z.string().min(1, "نام بازدید کننده الزامی است"),
  
  // Site Presence
  hasContractorOnSite: z.boolean(),
  hasLegalRepresentative: z.boolean(),
  
  // Building Structure
  structureType: z.enum(["بتنی", "فنزی", "بنیانی"]),
  buildingArea: z.string().min(1, "متراز ساختمان مطابق پروانه الزامی است"),
  floorCount: z.string().min(1, "تعداد سقف مطابق پروانه الزامی است"),
  additionalArea: z.string(),
  additionalFloors: z.string(),
  
  // Construction Phase
  constructionPhase: z.enum(["گودبرداری", "فونداسیون", "سفت چینی", "اسکلت", "نازک کاری", "اتمام عملیات"]),
  
  // Insurance
  hasValidInsurance: z.boolean(),
  hasAdditionalInsurance: z.boolean(),
  
  // Safety Certificates
  hasSafetyCertificate: z.boolean(),
  ownerUsesSafetyEquipment: z.boolean(),
  contractorHasSafetyEquipment: z.boolean(),
  
  // Training
  workersHaveSafetyTraining: z.boolean(),
  workersHaveSkillCards: z.boolean(),
  
  // Site Safety (1-11)
  isSiteFenced: z.boolean(),
  hasWarningSigns: z.boolean(),
  materialsProperlyStored: z.boolean(),
  hasProtectiveBarriers: z.boolean(),
  openHolesProtected: z.boolean(),
  respectsPowerLines: z.boolean(),
  powerSafetyMeasures: z.boolean(),
  machinerySafeDistance: z.boolean(),
  
  // Personal Protective Equipment
  workersHavePPE: z.boolean(),
  
  // Scaffolding (23-26)
  scaffoldingMaterialQuality: z.boolean(),
  usesUnsafeScaffoldingMaterials: z.boolean(),
  scaffoldingProperlyBuilt: z.boolean(),
  adequateWorkPlatforms: z.boolean(),
  ladderQuality: z.boolean(),
  safeExcavationAccess: z.boolean(),
  
  // === Additional Safety Checks (Page 3, 12-28) ===
  deepExcavationProtected: z.boolean(),
  excavationNearRoadsProtected: z.boolean(),
  concreteFormworkStrength: z.boolean(),
  elevatorPitFilled: z.boolean(),
  elevatorObstacles: z.boolean(),
  elevatorAreaFenced: z.boolean(),
  stairsHaveKickPlates: z.boolean(),
  stairsHaveHandrails: z.boolean(),
  hoistBeltProtected: z.boolean(),
  hoistProperlyInstalled: z.boolean(),
  scaffoldAccessLadder: z.boolean(),
  scaffoldDistanceFromBuilding: z.boolean(),
  scaffoldBracesInstalled: z.boolean(),
  
  // === Meeting Minutes (Page 2) ===
  coordinatorName: z.string(),
  contractorName: z.string(),
  engineeringSystemCode: z.string(),
  
  // Building Details
  renovationCode: z.string(),
  registeredPlate: z.string(),
  buildingDepth: z.string(),
  buildingGroup: z.string(),
  
  // Project Stage Selection
  projectStage: z.array(z.string()),
  
  // Status
  hasAdditionalConstruction: z.boolean(),
  hasComplaintReport: z.boolean(),
  
  // Site Status Assessment
  siteStatus: z.enum(["قابل قبول", "کم خطر", "پر خطر"]),
  
  // Evaluation Results
  evaluationResult: z.enum([
    "کارگاه دارای وضعیت قابل قبول",
    "کارگاه دارای وضعیت کم خطر",
    "کارگاه دارای وضعیت پرخطر"
  ]),
  
  // Additional Notes
  additionalNotes: z.string(),
  
  // Signatures
  expertSignature: z.string(),
  contractorSignature: z.string(),
  supervisorSignature: z.string(),
  ownerSignature: z.string(),
  
  // Meeting Date
  meetingDate: z.string(),
});

export type BuildingInspectionFormData = z.infer<typeof buildingInspectionSchema>;

// Create a separate function to get default values
export const getDefaultFormValues = (): BuildingInspectionFormData => ({
  // Basic Information
  city: "",
  ownerName: "",
  phoneNumber: "",
  projectCode: "",
  address: "",
  permitNumber: "",
  permitDate: "",
  
  // Boolean fields
  hasPermitImage: false,
  hasSealedPlans: false,
  hasContractorOnSite: false,
  hasLegalRepresentative: false,
  hasValidInsurance: false,
  hasAdditionalInsurance: false,
  hasSafetyCertificate: false,
  ownerUsesSafetyEquipment: false,
  contractorHasSafetyEquipment: false,
  workersHaveSafetyTraining: false,
  workersHaveSkillCards: false,
  isSiteFenced: false,
  hasWarningSigns: false,
  materialsProperlyStored: false,
  hasProtectiveBarriers: false,
  openHolesProtected: false,
  respectsPowerLines: false,
  powerSafetyMeasures: false,
  machinerySafeDistance: false,
  workersHavePPE: false,
  scaffoldingMaterialQuality: false,
  usesUnsafeScaffoldingMaterials: false,
  scaffoldingProperlyBuilt: false,
  adequateWorkPlatforms: false,
  ladderQuality: false,
  safeExcavationAccess: false,
  deepExcavationProtected: false,
  excavationNearRoadsProtected: false,
  concreteFormworkStrength: false,
  elevatorPitFilled: false,
  elevatorObstacles: false,
  elevatorAreaFenced: false,
  stairsHaveKickPlates: false,
  stairsHaveHandrails: false,
  hoistBeltProtected: false,
  hoistProperlyInstalled: false,
  scaffoldAccessLadder: false,
  scaffoldDistanceFromBuilding: false,
  scaffoldBracesInstalled: false,
  hasAdditionalConstruction: false,
  hasComplaintReport: false,
  
  // Enums with defaults
  structureType: "بتنی",
  constructionPhase: "گودبرداری",
  siteStatus: "قابل قبول",
  evaluationResult: "کارگاه دارای وضعیت قابل قبول",
  
  // Other fields
  buildingArea: "",
  floorCount: "",
  additionalArea: "",
  additionalFloors: "",
  projectStage: [],
  additionalNotes: "",
  coordinatorName: "",
  contractorName: "",
  engineeringSystemCode: "",
  renovationCode: "",
  registeredPlate: "",
  buildingDepth: "",
  buildingGroup: "",
  expertSignature: "",
  contractorSignature: "",
  supervisorSignature: "",
  ownerSignature: "",
  meetingDate: "",
  inspectionDate: new Date().toISOString().split('T')[0],
  inspectorName: "",
});