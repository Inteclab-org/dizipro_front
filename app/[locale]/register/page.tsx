import { createClient } from "@/utils/supabase/server";
import SubmitButton from "@/components/SubmitButton";
import { redirect } from "next/navigation";
import { Locale } from "@/i18n";

export default function Login({
  searchParams,
  params
}: {
  searchParams: { message: string };
  params: { locale: Locale };
}) {
  
  const signUp = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      redirect(`/${params.locale}/register?message=Could not register user`);
    } else {
      redirect(`/${params.locale}/register?message=Confirm your email`);
    }
  };

  return (
    <section className="flex flex-col max-w-[400px] w-full pt-[64px] pb-[153px]">
      <div className="flex-1 flex flex-col px-8 justify-center gap-2 space-y-8">
        <h2 className="tracking-[-1.04px] leading-[68px] text-center uppercase font-semibold text-[40px]">
          Register
        </h2>

        <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="email"
            placeholder="you@example.com"
            required
          />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <SubmitButton
            formAction={signUp}
            className="bg-gray-700 text-white rounded-md px-4 py-2 text-foreground mb-2"
            pendingText="Signing Up..."
          >
            Sign Up
          </SubmitButton>
          
          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
