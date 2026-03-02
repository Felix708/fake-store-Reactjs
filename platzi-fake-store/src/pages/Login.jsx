import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { Toast, ToastToggle } from "flowbite-react";
import { HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Login() {
    const [formValue, setFormValue] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    function submitForm() {
        // console.log(formValue);
        if (formValue.email === "" || formValue.password === "") {
            setError("Gagal! Silahkan masukkan email dan password");
        } else {
            setError("");
            loginProcess();
        }
    }

    // perpindahan halaman
    const {updateToken} = useContext(AuthContext);

    const navigate = useNavigate();
    async function loginProcess() {
        const url = "https://api.escuelajs.co/api/v1/auth/login";
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formValue),
            });
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            // simpan token di applicattion local storage
            localStorage.setItem("access_token", result.access_token);
            localStorage.setItem("refresh_token", result.refresh_token);

            // panmggil func context
            updateToken(result.access_token);
            // console.log(result);
            navigate("/cart");
        } catch (error) {
            setError("Gagal! email atau password salah");
        }
    }

    return (
        <>
            {
                error != "" && (
                    <div className="w-full flex justify-end">
                        <Toast className="bg-red-100">
                            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                                <HiX className="h-5 w-5" />
                            </div>
                            <div className="ml-3 text-sm font-bold">{error}</div>
                            <ToastToggle />
                        </Toast>
                    </div>
                )
            }
            <div className="block mx-auto my-40 w-75">
                <h1 className="text-2xl font-bold mb-5">Login</h1>
                <form className="flex max-w-md flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" color="black">Your email</Label>
                        </div>
                        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required onKeyUp={(e) => setFormValue({ ...formValue, email: e.target.value })} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" color="black">Your password</Label>
                        </div>
                        <TextInput id="password1" type="password" required onKeyUp={(e) => setFormValue({ ...formValue, password: e.target.value })} />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember" color="black">Remember me</Label>
                    </div>
                    <Button type="button" onClick={submitForm}>Submit</Button>
                </form>
            </div>
        </>
    )
}