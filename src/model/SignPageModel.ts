import PersonalDataDto from "../dto/PersonalDataDto";
import ValueSetService from "../service/ValueSetService";

export default class SignPageModel {
    creatorNameElement: HTMLInputElement;
    signerFirstNameElement: HTMLInputElement;
    signerLastNameElement: HTMLInputElement;
    creatorAddressElement: HTMLInputElement;
    valueSetService: ValueSetService;

    constructor() {
        this.valueSetService = new ValueSetService();
        /* Dokumento sudarytojas */
        const creatorBlock = document.querySelectorAll('.signer-separator').item(1);
        this.creatorAddressElement = creatorBlock.querySelectorAll('input').item(4);
        this.creatorNameElement = creatorBlock.querySelectorAll('input').item(2);
        /* Pasirašantis asmuo */
        const signerBlock = document.querySelectorAll('.signer-separator').item(2);
        this.signerFirstNameElement = signerBlock.querySelectorAll('input')[0];
        this.signerLastNameElement = signerBlock.querySelectorAll('input')[1];
    }

    loadPersonalData(personalDataDto: PersonalDataDto) {
        this.valueSetService.setStringValue(this.creatorNameElement, personalDataDto.fullName);
        this.valueSetService.setStringValue(this.creatorAddressElement, personalDataDto.address);
        this.valueSetService.setStringValue(this.signerFirstNameElement, personalDataDto.firstName);
        this.valueSetService.setStringValue(this.signerLastNameElement, personalDataDto.lastName);
    }
}
