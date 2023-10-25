'use server'

import { redirect } from "next/navigation";

export async function searchTagAction(formData: FormData) {
    const tag = formData.get('tag') as string;
    // console.log(tag);
    redirect('/tag?tag=' + tag)
}

export async function searchTagActionById(formData: FormData) {
    const tag = formData.get('tag') as string;
    // console.log(tag);
    redirect('/tag?tag=' + tag)
  
}