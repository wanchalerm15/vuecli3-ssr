import { createApp } from './main';
const { app, router } = createApp();
export default context => {
    router.push(context.url);
    return new Promise((resolve, reject) => {
        resolve(app);
    });
}