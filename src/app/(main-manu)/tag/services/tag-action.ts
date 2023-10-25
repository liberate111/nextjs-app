'use server'

import { redirect } from "next/navigation";
import * as yup from "yup";

const tagSchema = yup.object().shape({
    id: yup.number().typeError('only number').positive('number')
})

export async function searchTagAction(formData: FormData) {
    const tag = formData.get('tag') as string;
    // console.log(tag);
    redirect('/tag?tag=' + tag)
}

export async function searchTagActionById(formData: FormData) {
    const id = formData.get('id') as string;
   if (!id) throw new Error('id not found');
   await tagSchema.validate({id})
   redirect('/tag/' + id)
}

