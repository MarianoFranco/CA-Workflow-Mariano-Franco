import {createProduct} from "../scripts/helpers/objectHelpers"

it('Create a product function',()=>{
    expect(createProduct(23, "Mariano", "Gracias por tu ayuda")).toStrictEqual({
        id:23,
        code: "MARIANO",
        title: "Gracias_por_"
    })
})