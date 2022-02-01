var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
   
    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        
        var data = {
        
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email : faker.internet.email(firstName),
            whatsapp: '11365489567',
            address: {
                postalcode: '06417010',
                street: 'Avenida Calil Mohamed Rahal',
                number: '236',
                details: 'Sala 01',
                district: 'Vila São Silvestre',
                city_state: 'Barueri/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
    
        return data
    }

}

