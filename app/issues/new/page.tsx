"use client"

import { Button, Callout, TextField } from "@radix-ui/themes"
import axios from "axios"
import { useForm, Controller } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useState } from "react"

import SimpleMdeReact from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"

interface IssueForm {
   title: string
   description: string
}

export default function NewIssuePage() {
   const router = useRouter()
   const { register, control, handleSubmit } = useForm<IssueForm>()

   const [error, setError] = useState<string | null>(null)

   const onSubmit = async (data: IssueForm) => {
      try {
         console.log(data)
         await axios.post("/api/issues", data)
         router.push("/issues")
      } catch (error) {
         setError("Please fill out all fields / try again later")
      }
   }

   return (
      <div>
         {error && (
            <Callout.Root color="red" className="mb-6 max-w-xl">
               <Callout.Text>{error}</Callout.Text>
            </Callout.Root>
         )}

         <form className="max-w-xl space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <TextField.Root>
               <TextField.Input placeholder="Title" {...register("title")} />
            </TextField.Root>
            <Controller
               name="description"
               control={control}
               render={({ field }) => <SimpleMdeReact placeholder="Description" {...field} />}
            />
            <Button>Submit New Issue</Button>
         </form>
      </div>
   )
}
