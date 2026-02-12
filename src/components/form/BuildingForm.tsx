"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  buildingInspectionSchema,
  BuildingInspectionFormData,
  getDefaultFormValues,
} from "@/src/lib/schema";
import { useState, useEffect, useRef } from "react";
import BasicInformationSection from "./sections/BasicInformationSection";
import PermitDocumentationSection from "./sections/PermitDocumentationSection";
import InspectionDetailsSection from "./sections/InspectionDetailsSection";
import BuildingSpecificationsSection from "./sections/BuildingSpecificationsSection";
import InsuranceCertificatesSection from "./sections/InsuranceCertificatesSection";
import SiteSafetySection from "./sections/SiteSafetySection";
import AdditionalSafetySection from "./sections/AdditionalSafetySection";
import MeetingMinutesSection from "./sections/MeetingMinutesSection";
import SubmitSection from "./sections/SubmitSection";

interface BuildingFormProps {
  onSubmit: (data: BuildingInspectionFormData) => void;
  onFormChange?: (data: BuildingInspectionFormData) => void;
}

export default function BuildingForm({
  onSubmit,
  onFormChange,
}: BuildingFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
    setValue,
  } = useForm<BuildingInspectionFormData>({
    resolver: zodResolver(buildingInspectionSchema),
    defaultValues: getDefaultFormValues(), // This will use all defaults from schema
    mode: "onChange", // Validate on change to enable real-time validation
  });

  const [selectedStages, setSelectedStages] = useState<string[]>([]);

  // Watch all form values and notify parent of changes
  const formValues = watch();
  const previousValuesRef = useRef<string>("");

  useEffect(() => {
    if (!onFormChange) return;

    // Serialize current values to compare
    const currentValuesString = JSON.stringify(formValues);

    // Only update if values actually changed
    if (currentValuesString !== previousValuesRef.current) {
      previousValuesRef.current = currentValuesString;
      onFormChange(formValues);
    }
  }, [formValues, onFormChange]);

  const handleStageToggle = (stage: string) => {
    const newStages = selectedStages.includes(stage)
      ? selectedStages.filter((s) => s !== stage)
      : [...selectedStages, stage];

    setSelectedStages(newStages);
    setValue("projectStage", newStages);
  };

  const handleFormSubmit = async (data: BuildingInspectionFormData) => {
    // Log all data for debugging
    console.log("Complete Form Data:", data);

    // Pass to parent
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-8 bg-white p-6 rounded-lg shadow-lg"
      dir="rtl"
    >
      <BasicInformationSection register={register} errors={errors} />
      <PermitDocumentationSection register={register} />
      <InspectionDetailsSection register={register} />
      <BuildingSpecificationsSection register={register} />
      <InsuranceCertificatesSection register={register} />
      <SiteSafetySection register={register} />
      <AdditionalSafetySection register={register} />
      <MeetingMinutesSection
        register={register}
        selectedStages={selectedStages}
        onStageToggle={handleStageToggle}
      />
      <SubmitSection isValid={isValid} />
    </form>
  );
}
