import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import ProjectsTable from './_components/projects-table'
import { getCurrentUser } from '@/actions/users'
import { getProjectsByUserId } from '@/actions/projects'

const ProjectsPage = async() => {

    const userResponse: any = await getCurrentUser()

    if (!userResponse.success) {
    return <div>Failed to load user data</div>;
  }


  const projectsResponse = await getProjectsByUserId(userResponse?.data?.id!)

  if (!projectsResponse.success) {
    return <div>Failed to load projects</div>;
  }

  const projects:any = projectsResponse.data;

  return (
    <div>

        <div className="flex justify-between items-center">
            <h1 className="text-md font-bold md:text-2xl">Projects</h1>

            <Button size='sm'>
                 <Link href="/account/projects/add">Add Project</Link>
            </Button>
        </div>

        <ProjectsTable projects={projects}/>
    </div>
  )
}

export default ProjectsPage