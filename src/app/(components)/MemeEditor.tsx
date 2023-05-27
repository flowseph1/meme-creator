"use client";
import { useForm } from "react-hook-form";
import { MemeTemplate } from "../(data)/types";
import MemeDisplay from "./MemeDisplay";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const textValues = (template: MemeTemplate) => {
  return (
    template.textareas.reduce((values, ta) => ({
      ...values,
      [ta.id]: ta.text,
    })),
    {} as Record<string, string>
  );
};

function MemeEditor({ templates }: { templates: MemeTemplate[] }) {
  const { register, handleSubmit, watch, setValue } = useForm<{
    template: string;
    values: Record<string, string>;
  }>({
    defaultValues: {
      template: templates[0].id,
      values: textValues(templates[0])!,
    },
  });

  const templateId = watch("template");

  const values = watch("values");

  const template = templates.find((t) => t.id === templateId)!;

  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const onSubmit = async (data: {
    template: string;
    values: Record<string, string>;
  }) => {
    await fetch("http://localhost:3000/api/memes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        template: data.template,
        values: data.values,
      }),
    });

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid xs:grid-cols-1 md:grid-cols-[60%_40%]">
        <MemeDisplay {...template} values={values} />
        <div className="pl-2 text-white">
          <select
            className="select select-bordered w-full"
            value={templateId}
            onChange={(e) => {
              const newTemplate = templates.find(
                (t) => t.id === e.target.value
              )!;

              setValue("template", newTemplate.id);
              setValue("values", textValues(newTemplate));
            }}
          >
            {templates.map((t) => (
              <option key={t.id} value={t.id}>
                {t.id}
              </option>
            ))}
          </select>

          {template.textareas.map((ta) => (
            <div key={ta.id} className="mt-5">
              <label htmlFor={ta.id}>{ta.id}</label>
              <div>
                <input
                  className="input w-full input-bordered"
                  type="text"
                  {...register(`values.${ta.id}`)}
                />
              </div>
            </div>
          ))}

          <div className="flex justify-end">
            <button
              className="btn btn-accent mt-5 min-w-[200px]"
              type="submit"
              disabled={isPending}
            >
              Let&apos;s Go!
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default MemeEditor;
