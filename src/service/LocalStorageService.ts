import PersonalDataDto from "../dto/PersonalDataDto";

export default class LocalStorageService {
    key = 'personalDataDto'

    storeToLocalStorage(personalDataDto: PersonalDataDto) {
        chrome.storage.local.set({[this.key]: personalDataDto}).catch((reason) => console.log('Failed to store.', reason));
    }

    async loadFromLocalStorage(): Promise<PersonalDataDto> {
        return chrome.storage.local.get(this.key).then((data) => data[this.key])
    }
}
