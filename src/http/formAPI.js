import {$host} from "./index";

export const sendMessage = async (name, phone) => {
    await $host.post('/api/', {
        "name": name,
        "phone": phone
    })
}