import {createProduct} from "../scripts/helpers/objectHelpers"

it('Create a product function',()=>{
    expect(
        createProduct({
        id: 123,
        code: "password",
        title: "hola como estas",
      })
    ).toStrictEqual({
        id:123,
        code: "PASSWORD",
        title: "hola_como_es"
    })
})