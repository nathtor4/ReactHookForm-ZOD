import CadastroUsuario from "pages/CadastroUsuario";
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const { BrowserRouter, Route, Routes } = require("react-router-dom");

function AppRoutes() {
    return (
        <BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Routes>
                <Route path="/" element={<CadastroUsuario />} />
                <Route path="*" element={<PaginaNaoEncontrada />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;