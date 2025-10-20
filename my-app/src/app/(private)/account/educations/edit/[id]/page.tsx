import { getEducationById } from "@/actions/educations";
import React from "react";
import EducationForm from "../../_components/education-form";

interface IEditeducationParams {
  id: string;
}

async function EditEducationPage({ params }: { params: IEditeducationParams }) {

  const { id } =  params;

  const educationResponse = await getEducationById(id);
  if (!educationResponse.success) {
    return <div>{educationResponse.message}</div>;
  }
  return (
    <div>
      <h1 className="text-xl font-bold">Edit Education</h1>
      <EducationForm initialValues={educationResponse.data} formType="edit" />
    </div>
  );
}

export default EditEducationPage;
