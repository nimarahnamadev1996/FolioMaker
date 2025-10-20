import { getEducationById } from "@/actions/educations";
import React from "react";
import EducationForm from "../../_components/education-form";

async function EditEducationPage({ params }: { params: { id: string } }) {
  const { id } = params;

  let educationResponse;
  try {
    educationResponse = await getEducationById(id);
  } catch (error) {
    return <div>Failed to fetch education data.</div>;
  }

  if (!educationResponse?.success) {
    return <div>{educationResponse?.message || "No data found."}</div>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Edit Education</h1>
      <EducationForm initialValues={educationResponse.data} formType="edit" />
    </div>
  );
}

export default EditEducationPage;
