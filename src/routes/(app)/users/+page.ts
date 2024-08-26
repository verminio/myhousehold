import { listUsers } from "$lib/users";

/** @type {import('./$types').PageLoad} */
export function load({ }) {
    return listUsers(1, 10).then((val) => val);
}