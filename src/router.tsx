import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {TranslationProvider} from "./translation";

const pages = require.context('./pages/', true, /index\.tsx$/);
const routes = createBrowserRouter(
    pages.keys().map(filename => {
        const path = filename.replace('./', '/').replace('index.tsx', '');
        const namespace = '.'.concat(path);
        const Element = pages(filename).default;

        return {
            path: path,
            element: (
                <TranslationProvider namespace={namespace}>
                    <Element />
                </TranslationProvider>
            )
        }
    })
);

export function Router() {
    return (
        <RouterProvider router={routes} />
    )
}
