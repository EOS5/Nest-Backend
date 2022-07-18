import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response, Request } from 'express';
import { get } from 'http';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dot';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    
    constructor(private customersService: CustomersService) {}
    @Get(':id')
    getCustomers(
        @Param('id', ParseIntPipe) id: number, 
        @Req() req: Request, 
        @Res() res: Response
    ) {
        const customer = this.customersService.findCustomerById(id);
        if (customer) {
            res.send(customer);
        } else {
            res.status(400).send({msg: 'customer not found'})
        }
    }

    @Get('/search/:id')
    searchCustomerById(@Param('id', ParseIntPipe) id: number) {
        const customer = this.customersService.findCustomerById(id);
        if (customer) return customer;
        else throw new HttpException('Customer Not Found', HttpStatus.BAD_REQUEST);
    }

    @Get('')
    getAllCustomers(){
        return this.customersService.getCustomer();
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
        this.customersService.createCustomer(createCustomerDto);
    }
}

    