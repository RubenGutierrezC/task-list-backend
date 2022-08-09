import { test, skip } from "tap"
import { sendRequest } from "../helpers/sendRequest.mjs"

//mocks
const mockUser = {
    email: "rubdeivis@gmail.com",
    password: "12345"
}

const mockUserToRegister = {
    "email": "prueba@gmail.com",
    "name": "test",
    "lastName": "testinolio",
    "password": "12345"
}

test("Auth API", ({ end }) => {

    test("login API should work", async ({ equal, end, hasProp, pass }) => {

        const { response, data } = await sendRequest({
            path: "login",
            method: "POST",
            body: mockUser
        })

        equal(response.status, 200)
        hasProp(data, "token")
        pass("login API should works")
        end()
    })

    test("login API should show email error", async ({ equal, end, pass }) => {
        const { response, data } = await sendRequest({
            path: "login",
            method: "POST",
        })

        equal(response.status, 400)
        equal(data.error, "Debe enviar un correo")
        pass("login API show email error")
        end()
    })

    test("login API should show password error", async ({ equal, end, pass }) => {

        const { response, data } = await sendRequest({
            path: "login",
            method: "POST",
            body: {
                email: "rubdeivis@gmail.com"
            }
        })

        equal(response.status, 400)
        equal(data.error, "Debe enviar una contraseña")
        pass("login API show password error")
        end()
    })

    end()

})


test("Register API", ({ end }) => {

    test("register API should work", async ({ equal, end, pass }) => {
        const { response, data } = await sendRequest({
            path: "register",
            method: "POST",
            body: mockUserToRegister
        })
        equal(response.status, 200)
        await sendRequest({
            path: `delete/${mockUserToRegister.email}`,
            method: "DELETE",
        })
        pass("register API works")
        end()
    })

    test("register API should show repeated email error", async ({ equal, end, pass }) => {
        const { response, data } = await sendRequest({
            path: "register",
            method: "POST",
            body: mockUser
        })
        equal(response.status, 400)
        pass("register API show repeated error")
        end()
    })

    test("register API should show email error", async ({ equal, end, hasProp }) => {

        const {response, data} = await sendRequest({
            path: "register",
            method: "POST",
        })

        equal(response.status,400)
        hasProp(data, "error")
        end()
    })

    test("register API should show name error", async ({ equal, end, hasProp }) => {

        const {response, data} = await sendRequest({
            path: "register",
            method: "POST",
            body: {
                email: "rubdeivis@gmail.com",
            }
        })

        equal(response.status,400)
        hasProp(data, "error")
        end()
    })

    test("register API should show lastName error", async ({ equal, end, hasProp }) => {

        const {response, data} = await sendRequest({
            path: "register",
            method: "POST",
            body: {
                email: "rubdeivis@gmail.com",
                name: "test"
            }
        })

        equal(response.status,400)
        hasProp(data, "error")
        end()
    })

    test("register API should show password error", async ({ equal, end, hasProp }) => {

        const {response, data} = await sendRequest({
            path: "register",
            method: "POST",
            body: {
                email: "rubdeivis@gmail.com",
                name: "test",
                lastName: "testudo"
            }
        })

        equal(response.status,400)
        hasProp(data, "error")
        end()
    })

    end()

})