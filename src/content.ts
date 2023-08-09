import SignPageModel from "./model/SignPageModel";
import LocalStorageService from "./service/LocalStorageService";
import PersonalDataDto from "./dto/PersonalDataDto";

const pageModel = new SignPageModel();
const localStorageService = new LocalStorageService();

const loadPersonalData = () => {
    localStorageService.loadFromLocalStorage().then((personalDataDto: PersonalDataDto) => {
        pageModel.loadPersonalData(personalDataDto);
    }, (error) => console.log(error));
}

/* Listen to changes in local storage */
chrome.storage.local.onChanged.addListener(loadPersonalData);

loadPersonalData();

