import { useForm } from "react-hook-form";
import { useCreateTodoMutation } from "../services/todosApi";

const AddTodo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [createTodo] = useCreateTodoMutation();

  const onSubmit = (data) => {
    createTodo(data)
      .unwrap()
      .then(() => {
        reset();
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title", { required: true })} />
        {errors.title && <span>This field is required</span>}
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
