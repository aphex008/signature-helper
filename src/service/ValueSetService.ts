export default class ValueSetService {
    public setStringValue(inputElement: HTMLInputElement, value: string) {
        inputElement.value = value;
        inputElement.click();
    }
    public setRadioChecked(inputElement: HTMLInputElement) {
        inputElement.checked = true;
        inputElement.click();
    }
}
