import {createRoot} from "react-dom/client";
import {Router} from "./router";
import './translation'

function bootstrap() {
    document.body.innerHTML = '<div id="app"></div>';
    const root = createRoot(document.getElementById('app') as HTMLElement);
    root.render(<Router />);
}

bootstrap();