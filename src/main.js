import modular from 'modujs';
import * as modules from './modules';

(function() {
    const app = new modular({
        modules: modules
    });
    app.init(app);
})();
