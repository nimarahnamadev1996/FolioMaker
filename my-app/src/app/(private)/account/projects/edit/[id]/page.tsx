import React from "react";


import ProjectForm from "../../_components/project-form";
import { getProjectById } from "@/actions/projects";


interface IEditProjectPageParams {
    id: string;
}

async function EditProjectPage({ params }: { params: IEditProjectPageParams}) {

  const { id } =  params;

  const projectResponse = await getProjectById(id);
   
  if (!projectResponse.success) {
    return <div>Failed to load project data</div>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Edit Project</h1>
      <ProjectForm formType="edit" initialValues={projectResponse.data} />
    </div>
  );
}

export default EditProjectPage;