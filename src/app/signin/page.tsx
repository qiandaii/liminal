import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "~/components/ui/field"
import Link from "next/link";

export default async function SignIn() {

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <div className="border w-150 p-10 rounded-sm flex flex-col gap-4">
          <h1 className="font-bold text-2xl">Create an Account</h1>

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
              <Input id="fieldgroup-name" placeholder="Display Name" />
            </Field>

            <Field>
              <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
              <Input
                id="input-field-username"
                type="text"
                placeholder="Enter your username"
              />

              <FieldDescription>
                Choose a unique username for your account.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
              <Input
                id="fieldgroup-email"
                type="email"
                placeholder="name@example.com"
              />
            </Field>

            <Field orientation="horizontal">
              <Button type="reset" variant="outline">
                Reset
              </Button>
              <Button type="submit">Submit</Button>
            </Field>
          </FieldGroup>

          <hr className="m-4"></hr>
          <Link href="/api/auth/signin?callbackUrl=/homepage">
            <Button className="border bg-white text-black shadow shadow-gray p-1 rounded-md w-full hover:bg-gray-50">
              Sign in with Google
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
  
}

