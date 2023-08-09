import PersonalDataDto from "../dto/PersonalDataDto";

export default class PopupPageModel {
    firstNameElement: HTMLInputElement;
    lastNameElement: HTMLInputElement;
    phoneNumberElement: HTMLInputElement;
    personalCodeElement: HTMLInputElement;
    addressElement: HTMLInputElement;
    all: Array<HTMLInputElement>

    constructor() {
        this.firstNameElement = <HTMLInputElement>document.getElementById('firstName')!;
        this.lastNameElement = <HTMLInputElement>document.getElementById('lastName')!;
        this.phoneNumberElement = <HTMLInputElement>document.getElementById('phoneNumber')!;
        this.personalCodeElement = <HTMLInputElement>document.getElementById('personalCode')!;
        this.addressElement = <HTMLInputElement>document.getElementById('address')!;
        this.all = [];
        this.all.push(this.firstNameElement, this.lastNameElement, this.phoneNumberElement, this.personalCodeElement, this.addressElement);
    }

    getPersonalData(): PersonalDataDto {
        const personalDataDto = new PersonalDataDto();
        personalDataDto.firstName = this.firstNameElement.value;
        personalDataDto.lastName = this.lastNameElement.value;
        personalDataDto.phoneNumber = this.phoneNumberElement.value;
        personalDataDto.personalCode = this.personalCodeElement.value;
        personalDataDto.address = this.addressElement.value;
        personalDataDto.fullName = `${this.firstNameElement.value} ${this.lastNameElement.value}`;

        return personalDataDto;
    }

    loadPersonalData(personalDataDto: PersonalDataDto) {
        this.firstNameElement.value = personalDataDto.firstName;
        this.lastNameElement.value = personalDataDto.lastName;
        this.phoneNumberElement.value = personalDataDto.phoneNumber;
        this.personalCodeElement.value = personalDataDto.personalCode;
        this.addressElement.value = personalDataDto.address;
    }
}
