import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {

    private customers: Customer[] = [
        {
            id: 1,
            email: 'email@email.email',
            name: 'steve',
        },
        {
            id: 2,
            email: 'email2@email.email',
            name: 'mael',
        },
        {
            id: 3,
            email: 'email3@email.email',
            name: 'jean',
        },
        {
            id: 4,
            email: 'email4@email.email',
            name: 'sonia',
        },
    ];

    findCustomerById(id: number){
        return this.customers.find((users) => users.id === id);
    }

    createCustomer(customerDto: CreateCustomerDto) {
        this.customers.push(customerDto);
    }

    getCustomer() {
        return this.customers;
    }
}
