import PersonalDataDto from "../dto/PersonalDataDto";
import ValueSetService from "../service/ValueSetService";

export default class SignPageModel {
    creatorNameElement: HTMLInputElement;
    signerNameElement: HTMLInputElement;
    mobileSignatureChoiceElement: HTMLInputElement;
    phoneNumberElement: HTMLInputElement;
    personalCodeElement: HTMLInputElement;
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
        this.signerNameElement = signerBlock.querySelector('input')!;
        /* Pasirinkite pasirašymo tipą */
        const signatureTypeBlock = document.querySelectorAll('.signer-separator').item(4);
        this.mobileSignatureChoiceElement = signatureTypeBlock.querySelectorAll('input').item(1);
        this.phoneNumberElement = signatureTypeBlock.querySelectorAll('input').item(2);
        this.personalCodeElement = signatureTypeBlock.querySelectorAll('input').item(3);
    }

    loadPersonalData(personalDataDto: PersonalDataDto) {
        this.valueSetService.setStringValue(this.creatorNameElement, personalDataDto.name);
        this.valueSetService.setStringValue(this.creatorAddressElement, personalDataDto.address);
        this.valueSetService.setStringValue(this.signerNameElement, personalDataDto.name);
        this.valueSetService.setStringValue(this.phoneNumberElement, personalDataDto.phoneNumber);
        this.valueSetService.setStringValue(this.personalCodeElement, personalDataDto.personalCode);
        this.valueSetService.setRadioChecked(this.mobileSignatureChoiceElement);
    }
}
