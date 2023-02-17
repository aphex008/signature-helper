export default class ValueSetService {
    public setStringValue(inputElement: HTMLInputElement, value: string) {
        inputElement.focus();
        inputElement.value = value;
    }
    public setRadioChecked(inputElement: HTMLInputElement) {
        inputElement.checked = true;
        inputElement.click();
    }
}
