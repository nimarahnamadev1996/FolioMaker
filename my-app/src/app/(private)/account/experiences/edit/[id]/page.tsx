import { getExperienceById } from "@/actions/experineces";
import React from "react";
import ExperienceForm from "../../_components/experience-form";

interface IEditExperienceProps {
   id: string;
}

async function EditExperience({ params }: { params: IEditExperienceProps }) {
  const { id } = await params;
  const experienceResponse = await getExperienceById(id);
  if (!experienceResponse.success) {
    return <div>{experienceResponse.message}</div>;
  }
  return (
    <div>
      <h1 className="text-xl font-bold">Experiences</h1>
      <ExperienceForm initialValues={experienceResponse.data} formType="edit" />
    </div>
  );
}

export default EditExperience;
