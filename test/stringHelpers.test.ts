import {makeUppercase, replaceSpaces, limitLength} from "../scripts/helpers/stringHelpers"

it('test if its uppercase', ()=>{
    expect(makeUppercase("mariano")).toBe("MARIANO")
})

it('test if it replaceSpaces', ()=>{
    expect(replaceSpaces("pim pam pum")).toBe("pim_pam_pum")
})

it('test the limitLength', ()=>{
    expect(limitLength(6,"lalala")).toBe("lalala")
})