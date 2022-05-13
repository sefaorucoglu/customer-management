import './App.css';
import CardHeader from "./components/card-header";
import Card from "./components/card";
import CardBody from "./components/card-body";
import Container from "./components/container";
import Input from "./components/Input";
import DropDownList from "./components/DropDownList";
import Button from "./components/Button";
import {useState} from "react";
import Customer from "./model/Customer";
import DropdownLogic from "./DropdownLogic";
import CustomerService from "./service/CustomerService";


function CreateCustomer() {
    const SECTORS=["SOFtWARE","ARM"]
    const customerService= new CustomerService();

    let[customer,setCustomer]=useState(new Customer());
    let[customers,setCustomers]=useState([]);

    function handleInputChange(event){
        let  newCustomer={...customer};
        const {name,value}=event.target;
        newCustomer[name]=value;
        setCustomer(newCustomer);
    }
    function customerSave(event) {

        customerService.addCustomer({...customer})
            .then(res=>{
               // if(res.status.toLowerCase()==='ok')
               // {
                 //   console.log("Kayıt başarılı")
               // }
                alert(res.companyName);
            });


    }

    function customerSaveCancel(event) {

    }

    return (

        <Container style={{width:450}}>

            <Card >

                <CardHeader title="Yeni Müşteri "> </CardHeader>
                <CardBody>
                    <Input id="companyName"
                           handleChange={handleInputChange}
                           value={customer.companyName}
                           label="Company Name">
                    </Input>
                    <Input id="phone"
                           handleChange={handleInputChange}
                           value={customer.phone}
                           label="Phone">
                    </Input>
                    <Input id="email"
                           handleChange={handleInputChange}
                           value={customer.email}
                           label="E-Mail">
                    </Input>
                    <Input id="sector"
                           handleChange={handleInputChange}
                           value={customer.sector}
                           label="Sektör">
                    </Input>
                    <DropDownList id="city"
                              handleChange={handleInputChange}
                              value={customer.city}
                              label="İl Seçiniz">
                    </DropDownList>
                    <DropDownList id="district"
                              handleChange={handleInputChange}
                              value={customer.district}
                              label="İlçe Seçiniz">
                    </DropDownList>
                    <DropdownLogic/>
                    <DropDownList id="taxAdmistrationCity"
                              handleChange={handleInputChange}
                              value={customer.taxAdmistrationCity}
                              label="Vergi Dairesi İli">
                    </DropDownList>

                    <Input id="taxNo"
                           handleChange={handleInputChange}
                           value={customer.taxNo}
                           label="Vergi Numarası">
                    </Input>

                    <div className="input-group"></div>
                    <span className="form-label"></span>
                    <Button id="save"
                            label="KAYDET"
                            className="btn-success"
                            onClick={customerSave}>
                    </Button>
                    <Button id="Cancel"
                            label="Vazgeç"
                            className="btn-close-white"
                            onClick={customerSaveCancel}>
                    </Button>
                </CardBody>
            </Card>


        </Container>
    );
}

export default CreateCustomer;

