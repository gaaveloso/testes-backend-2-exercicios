import { UserBusiness } from "../../src/business/UserBusiness"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { DeleteUserInput } from "../../src/dtos/userDTO"

describe("delete", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("Deleta usuario", async () => {
        const input: DeleteUserInput = {token: "token-mock-admin", idToDelete: "id-mock"}

        const response = await userBusiness.deleteUser(input)

        // expect(response).toEqual({message: "Usuario deletado com sucesso"})
        expect(response.message).toBe("Usuario deletado com sucesso")

    })
})