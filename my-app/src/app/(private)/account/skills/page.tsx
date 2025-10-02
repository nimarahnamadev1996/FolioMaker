'use client'

import React, { useEffect, useState } from 'react'



import { ISkill } from '@/interfaces';
import usersGlobalStore, { IUsersGlobalStore } from '@/global-store/users-store';
import { deleteSkillById, getSkillsByUserId } from '@/actions/skills';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import Spinner from '@/components/ui/spinner';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Pencil, Trash2 } from 'lucide-react';
import SkillForm from './_components/skill-form';


const SkillsPage = () => {

  const [openSkillForm, setOpenSkillForm] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<ISkill | null>(null);
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState([]);


  const {user} = usersGlobalStore() as IUsersGlobalStore


   const fetchData = async () => {
    try {

      setLoading(true);
      const response: any = await getSkillsByUserId(user?.id!);

      if (!response.success) {
        throw new Error(response.message);
      }
      setSkills(response.data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteSkillHandler = async (id: string) => {
    try {
      setLoading(true);

      const response = await deleteSkillById(id);
      if (!response.success) {
        throw new Error(response.message);
      }

      toast.success(response.message);

      fetchData();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = ["", "Name", "Level", "Actions"];

 

  return (
    <div className="flex flex-col gap-7">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Skills</h1>
        <Button size='sm' onClick={() => setOpenSkillForm(true)}>Add Skill</Button>
      </div>

      {loading && (
        <div className="flex justify-center items-center mt-40">
          <Spinner/>
        </div>
      )}

      {skills.length && !loading && (
        <Table className="border border-gray-400">
          <TableHeader className="bg-gray-200 font-semibold">
            <TableRow className="font-semibold">
              {columns.map((column, index) => (
                <TableHead className="font-bold" key={index}>
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {skills.map((skill: ISkill) => (
              <TableRow key={skill.id}>
                <TableCell>
                  {skill.image && (
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-20 h-20 rounded-sm"
                    />
                  )}
                </TableCell>
                <TableCell>{skill.name}</TableCell>
                <TableCell>{skill.level}</TableCell>
                <TableCell>
                  <div className="flex gap-5">
                    <Button
                      variant={"outline"}
                      size={"icon"}
                      onClick={() => deleteSkillHandler(skill.id)}
                    >
                      <Trash2 size={12} />
                    </Button>
                    <Button
                      variant={"outline"}
                      size={"icon"}
                      onClick={() => {
                        setSelectedSkill(skill);
                        setOpenSkillForm(true);
                      }}
                    >
                      <Pencil size={12} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {openSkillForm && (
        <SkillForm
          openSkillForm={openSkillForm}
          setOpenSkillForm={setOpenSkillForm}
          reloadData={fetchData}
          formType={selectedSkill ? "edit" : "add"}
          initialValues={selectedSkill}
        />
      )}
    </div>
  )
}

export default SkillsPage