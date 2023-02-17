import PopupPageModel from "./model/PopupPageModel";
import LocalStorageService from "./service/LocalStorageService";
import PersonalDataDto from "./dto/PersonalDataDto";

const popupModel = new PopupPageModel();
const localStorageService = new LocalStorageService();

/* Load stored data to popup */
localStorageService.loadFromLocalStorage().then(
    (personalDataDto: PersonalDataDto) => popupModel.loadPersonalData(personalDataDto),
    (error) => console.log(error))
;

/* Write popup changes to storage */
for (const element of popupModel.all) {
    element.addEventListener('keyup', () => {
        localStorageService.storeToLocalStorage(popupModel.getPersonalData());
    });
}


