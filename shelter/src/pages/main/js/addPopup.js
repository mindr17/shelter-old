import petsArr from '../../../assets/pets.json';
// const imgLinks = ((ctx) => ctx.keys().map(ctx))(
//   require.context("../../../assets/images", true, /.*/)
// );
// popupImg.src = `./src/assets/images/jennifer.png`;

const addPopup = () => {


  const buildPopup = (root, petName) => {
    const getPetObj = (petName) => {
      for (let i = 0; i < petsArr.length; i++) {
        if (petsArr[i].name === petName) {
          return petsArr[i];
        }
      }
    };
    const petObj = getPetObj(petName);

    const createNode = (tag, ...classes) => {
      const node = document.createElement(tag);
      node.classList.add(...classes);
      return node;
    };

    const popup = document.querySelector(".popup");

    let popupBackground = createNode('div', 'popup__background');
    popup.append(popupBackground);
    
    let popupWindow = createNode('div', 'popup__window');
    popupBackground.append(popupWindow);

    let popupImageWrapper = createNode('div', 'popup__image-wrapper');
    popupWindow.append(popupImageWrapper);
    let popupImg = document.createElement('img');
    popupImg.classList.add('popup__image');
    let imgSrc = petObj.img;
    imgSrc = imgSrc.slice(5, imgSrc.length);
    popupImg.src = `./src${imgSrc}`;
    popupImageWrapper.append(popupImg);

    let popupTextWrapper = createNode('div', 'popup__text-wrapper');
    popupWindow.append(popupTextWrapper);

    let popupText = createNode("div", "popup__text");
    popupTextWrapper.append(popupText);

    let popupTitle = createNode('h3', 'popup__title');
    popupTitle.textContent = `${petObj.name}`
    popupText.append(popupTitle);
    
    let popupSubTitle = createNode('h4', 'popup__subtitle');
    popupSubTitle.textContent = `${petObj.type} - ${petObj.breed}`;
    popupText.append(popupSubTitle);

    let popupDescription = createNode('h5', 'popup__description');
    popupDescription.textContent = `${petObj.description}`;
    popupText.append(popupDescription);

    let popupList = createNode('ul', 'popup__list');
    popupText.append(popupList);

    let itemPopup1 = createNode('li', 'popup__list-item', 'item-popup');
    popupList.append(itemPopup1);
    let itemPopupKey1 = createNode('span', 'item-popup__key');
    itemPopupKey1.textContent = 'Age: ';
    itemPopup1.append(itemPopupKey1);
    let itemPopupValue1 = createNode("span", "item-popup__value");
    itemPopupValue1.textContent = `${petObj.age}`;
    itemPopup1.append(itemPopupValue1);

    let itemPopup2 = createNode('li', 'popup__list-item', 'item-popup');
    popupList.append(itemPopup2);
    let itemPopupKey2 = createNode('span', 'item-popup__key');
    itemPopupKey2.textContent = "Inoculations: ";
    itemPopup2.append(itemPopupKey2);
    let itemPopupValue2 = createNode("span", "item-popup__value");
    let inoculations = 'none';
    if (petObj.inoculations) {
      inoculations = petObj.inoculations.join(", ");
    }
    itemPopupValue2.textContent = inoculations;
    itemPopup2.append(itemPopupValue2);
    
    let itemPopup3 = createNode('li', 'popup__list-item', 'item-popup');
    popupList.append(itemPopup3);
    let itemPopupKey3 = createNode('span', 'item-popup__key');
    itemPopupKey3.textContent = "Diseases: ";
    itemPopup3.append(itemPopupKey3);
    let itemPopupValue3 = createNode("span", "item-popup__value");
    let diseases = "none";
    if (petObj.diseases) {
      diseases = petObj.diseases.join(", ");
    }
    itemPopupValue3.textContent = diseases;
    itemPopup3.append(itemPopupValue3);

    let itemPopup4 = createNode('li', 'popup__list-item', 'item-popup');
    popupList.append(itemPopup4);
    let itemPopupKey4 = createNode('span', 'item-popup__key');
    itemPopupKey4.textContent = "Parasites: ";
    itemPopup4.append(itemPopupKey4);
    let itemPopupValue4 = createNode("span", "item-popup__value");
    let parasites = petObj.parasites.join(", ");
    itemPopupValue4.textContent = parasites;
    itemPopup4.append(itemPopupValue4);

    let popupClose = createNode("div", "popup__close");
    popupWindow.append(popupClose);
  };

  // try refactoring to events delegation
  const updatePetsListeners = () => {
    document.addEventListener("click", (event) => {
      const target = event.target;
      
      const body = document.querySelector("body");
      const popup = document.querySelector(".popup");
      const popupWindow = document.querySelector(".popup__window");
      const popupClose = document.querySelector(".popup__close");
      const petsItems = document.querySelectorAll(".pets__item");
  
      if (body.classList.contains("_popup-open")) {
        if (!popupWindow.contains(target) || target === popupClose) {
          body.classList.remove("_popup-open");
          popup.textContent = "";
        }
      }

      petsItems.forEach((petsItem) => {
        if (petsItem.contains(event.target)) {
          body.classList.add("_popup-open");
          // get petName from data attribute
          // const petName = "Jennifer"
          // const petName = "Sophia"
          const petName = "Woody"
          buildPopup(popup, petName);
        }
      });
    });
  }
  updatePetsListeners();

  document.addEventListener("click", (event) => {});
};

export default addPopup;