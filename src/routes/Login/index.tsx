import { useForm } from "react-hook-form";
import { LayoutForm } from "../../components/Form/LayoutForm";
import type { IUserFormValues } from "../../types/inputProps";

export default function Login() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<IUserFormValues>();

  function onSubmit(data: IUserFormValues) {
    console.log("Dados do login:", data);
  }

  return (
    <LayoutForm title="Login">
      <form onSubmit={handleSubmit(onSubmit)}>
       
      </form>
    </LayoutForm>
  );
}
