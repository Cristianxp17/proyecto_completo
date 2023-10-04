document.addEventListener("DOMContentLoaded", () => {
    const registroForm = document.getElementById("registroForm");

    registroForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nombres = registroForm.querySelector("#nombre").value;
        const apellidos = registroForm.querySelector("#apellido").value;
        const email = registroForm.querySelector("#email").value;
        const password = registroForm.querySelector("#password").value;
        const telefono = registroForm.querySelector("#telefono").value;
        const f_nacimiento = registroForm.querySelector("#fecha").value;
        const dni = registroForm.querySelector("#documento").value;

        const requestBody = {
            nombres,
            apellidos,
            email,
            password,
            telefono,
            f_nacimiento,
            dni
        };

        try {
            const response = await fetch("http://127.0.0.1:3002/register_client", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            const data = await response.json();

            if (response.ok) {
                // Registro exitoso
                alert("Registro exitoso. Ahora puedes iniciar sesión.");
                // Redirige al usuario a la página de inicio de sesión
                window.location.href = "login.html";
            } else {
                // Error en el registro
                alert(`Error: ${data.msg}`);
            }
        } catch (error) {
            console.error(error);
            alert("Error en el servidor");
        }
    });
});