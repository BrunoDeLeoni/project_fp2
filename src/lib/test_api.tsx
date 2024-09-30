/* TEST API */

const test_token = { user: "bruno", password: "bruno", token: "token_bruno" };
const test_id = { token: "token_bruno", id: 1 };
const test_user = {
    id: 1,
    user: "bruno",
    email: "bruno@bruno",
    name: "bruno",
    lastname: "bruno",
    phone: "123",
};

const test_visit = [
    {
        id: 1,
        petName: "name_1",
        petInfo: "info_1",
        petContact: "owner_1",
        petPhoto: "photo_1",
    },
    {
        id: 2,
        petName: "name_2",
        petInfo: "info_2",
        petContact: "owner_2",
        petPhoto: "photo_2",
    },
    {
        id: 3,
        petName: "name_3",
        petInfo: "info_3",
        petContact: "owner_3",
        petPhoto: "photo_3",
    },
    {
        id: 4,
        petName: "name_4",
        petInfo: "info_4",
        petContact: "owner_4",
        petPhoto: "photo_4",
    },
    {
        id: 5,
        petName: "name_5",
        petInfo: "info_5",
        petContact: "owner_5",
        petPhoto: "photo_5",
    },
];

export function test_api_token(data) {
    return data.user === test_token.user &&
        data.password === test_token.password
        ? test_token.token
        : false;
}

export function test_api_id(token) {
    return token === test_id.token ? test_api_user(test_id.id) : false;
}

function test_api_user(id) {
    return test_user.id === id ? test_user : false;
}

export function test_api_register(data) {
    return true;
}

export function test_api_visit() {
    return test_visit;
}
