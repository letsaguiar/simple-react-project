import {createBrowserRouter, RouterProvider} from "react-router-dom";

const pages = require.context('./pages/', true, /index\.tsx$/);
const routes = createBrowserRouter(
    pages.keys().map(filename => {
        const path = filename.replace('./', '/').replace('index.tsx', '');
        const Element = pages(filename).default;

        return {
            path: path,
            element: <Element />
        }
    })
);

export function Router() {
    return (
        <RouterProvider router={routes} />
    )
}
