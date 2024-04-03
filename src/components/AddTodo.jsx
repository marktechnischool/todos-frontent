import { useForm } from "react-hook-form";

const AddTodo = ({ onAdd = () => { } }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const raw = JSON.stringify(data);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "POST",
            body: raw,
            redirect: "follow",
            headers: myHeaders
        };

        fetch(`${BASE_API_URL}/todos`, requestOptions)
            .then((response) => {
                if (response.ok) {
                    reset();
                    onAdd();
                } else {
                    console.error("Failed to add todo", response.statusText);
                }
            })
            .catch((error) => console.error(error));
    }

    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title", { required: true })} />
            {errors.title && <span>This field is required</span>}
            <button type="submit">Add</button>
        </form>
    </div>
}

export default AddTodo;