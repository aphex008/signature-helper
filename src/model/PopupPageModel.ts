import PersonalDataDto from "../dto/PersonalDataDto";

export default class PopupPageModel {
    nameElement: HTMLInputElement;
    phoneNumberElement: HTMLInputElement;
    personalCodeElement: HTMLInputElement;
    addressElement: HTMLInputElement;
    all: Array<HTMLInputElement>

    constructor() {
        this.nameElement = <HTMLInputElement>document.getElementById('name')!;
        this.phoneNumberElement = <HTMLInputElement>document.getElementById('phoneNumber')!;
        this.personalCodeElement = <HTMLInputElement>document.getElementById('personalCode')!;
        this.addressElement = <HTMLInputElement>document.getElementById('address')!;
        this.all = [];
        this.all.push(this.nameElement, this.phoneNumberElement, this.personalCodeElement, this.addressElement);
    }

    getPersonalData(): PersonalDataDto {
        const personalDataDto = new PersonalDataDto();
        personalDataDto.name = this.nameElement.value;
        personalDataDto.phoneNumber = this.phoneNumberElement.value;
        personalDataDto.personalCode = this.personalCodeElement.value;
        personalDataDto.address = this.addressElement.value;

        return personalDataDto;
    }

    loadPersonalData(personalDataDto: PersonalDataDto) {
        this.nameElement.value = personalDataDto.name;
        this.phoneNumberElement.value = personalDataDto.phoneNumber;
        this.personalCodeElement.value = personalDataDto.personalCode;
        this.addressElement.value = personalDataDto.address;
    }
}
