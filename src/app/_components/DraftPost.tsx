
"use client"
import * as React from "react"

import { Button } from "~/components/ui/button"
import { Checkbox } from "~/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "~/components/ui/field"
import { Toggle } from "~/components/ui/toggle"
import { Calendar } from "~/components/ui/calendar"
import { LockIcon, LockOpenIcon, HashIcon } from "lucide-react"
import { useState } from "react"


export default function DraftPost() {

  const [date, setDate] = useState<Date | undefined>()

  React.useEffect(() => {
    setDate(new Date())
  }, [])

  return (
    <article className="text-gray-400 flex items-between gap-4 w-full ">
      <div className="w-140 h-30  p-3 outline rounded-md flex flex-col">
        <textarea
          className="h-30 resize-none outline-none text-sm"
          placeholder="do you remember?"
        />

        <div className="flex justify-end items-end hover:cursor-pointer">
          <FieldGroup className="mx-auto">
            <Field orientation="horizontal">
              <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" className="hover:cursor-pointer" />
              <FieldLabel htmlFor="terms-checkbox-basic" className="hover:cursor-pointer">
                i've dreamt this before
              </FieldLabel>
            </Field>
          </FieldGroup>

          <div className="flex justify-end items-center gap-2">
            <Button className="bg-white hover:bg-white hover:scale-130 hover:cursor-pointer text-gray-400 w-5 h-5 p-0 text-xs rounded-lg">
              <HashIcon></HashIcon>
            </Button>

            <Toggle aria-label="Toggle secret" className="h-6 w-6 m-0 p-0 group hover:scale-110 hover:cursor-pointer">
              <LockIcon className="w-3 h-3 opacity-70 hidden group-data-[state=on]:block" />
              <LockOpenIcon className="w-3 h-3 opacity-70 group-data-[state=on]:hidden" />
            </Toggle>

            <Button className="bg-gray-200 hover:bg-gray-300 hover:cursor-pointer w-9 h-6 p-0 text-xs rounded-lg">
              
            </Button>
          </div>
        </div>
      </div>

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-sm border  [&_button]:text-xs [&_button]:p-1 [&_day]:w-6 [&_day]:h-6 
          [&_[data-selected-single=true]]:bg-gray-400
          [&_[data-selected-single=true]]:text-white"
        captionLayout="dropdown"
      />
    </article>
  )
}