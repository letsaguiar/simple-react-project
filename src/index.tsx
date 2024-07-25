import {createRoot} from "react-dom/client";
import {App} from "./App";

function bootstrap() {
    document.body.innerHTML = '<div id="app"></div>';
    const root = createRoot(document.getElementById('app') as HTMLElement);
    root.render(<App />);
}

bootstrap();