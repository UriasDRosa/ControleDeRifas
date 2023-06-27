const media = require('./create')

test("CreateRifa() retorne 'Rifa criada com sucesso!' ", () => {
    expect(CriarRifa()).toBe('Rifa criada com sucesso!')
})