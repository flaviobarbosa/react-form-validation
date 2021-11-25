import { useForm } from "react-hook-form";

import "./styles.css";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ reValidateMode: "onBlur" });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <h1>Form validator</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First name:
          <input
            type="text"
            {...register("firstName", { required: true, minLength: 3 })}
          />
          {errors?.firstName?.type === "required" && <span>required</span>}
          {errors?.firstName?.type === "minLength" && <span>minLength</span>}
        </label>

        <label>
          Last name:
          <input
            type="text"
            {...register("lastName", { required: true, minLength: 3 })}
          />
          {errors?.lastName?.type === "required" && <span>required</span>}
          {errors?.lastName?.type === "minLength" && <span>minLength</span>}
        </label>

        <label>
          Birthday:
          <input type="date" {...register("birthday", { required: true })} />
          {errors?.birthday?.type === "required" && <span>required</span>}
        </label>

        <label>
          Phone:
          <input
            type="text"
            {...register("phone", {
              required: true,
              pattern: /^[0-9]{1}-[0-9]{4}-[0-9]{4}/i
            })}
          />
          {errors?.phone?.type === "required" && <span>required</span>}
          {errors?.phone?.type === "pattern" && <span>invalid pattern</span>}
        </label>

        <label>
          Email:
          <input
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i
            })}
          />
          {errors?.email?.type === "required" && <span>required</span>}
          {errors?.email?.type === "pattern" && <span>invalid email</span>}
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
