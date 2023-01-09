import {$host} from "./index";

export const sendMessage = async () => {
    await $host.post('/api/')
}