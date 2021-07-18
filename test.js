window.setInterval(function () {
  const selector = "'body > div.mainContentWrapper > window > div > div > div.heightTransitionContent > div > div > div.scrollContentOuterWrapper.disableScrolling > div > div > div > div > div > div > div > div > div > div > div.marginToScrollbar > button.animate.startRaid.clickable > div > span > span > span";
  const element = document.querySelector(selector);
  element.click();
  console.log('checked');
},600000);


window.setInterval(function () {
  const selector = "button";
  const element = document.getElementById(selector);
  element.click();
}, Math.floor(Math.random() * (100 - 50) + 50));

const cows = () => {
  const selector = "body > div.mainContentWrapper > window > div > div > div.heightTransitionContent > div > div > div.scrollContentOuterWrapper.disableScrolling > div > div > div > div > div > div > div > div.loadedTab.tabFarmList.activeTab.currentTab > div > div > div.marginToScrollbar > button.animate.startRaid.clickable";
  const element = document.querySelector(selector);
  element.click();
  console.log('checked');
};
const min = 10 * 60;
const max = 11 * 60;
const rand = Math.floor(Math.random() * (max - min + 1) + min); 
setTimeout(cows, rand * 1000);











const cows = () => {

  const selector = "body > div.mainContentWrapper > window > div > div > div.heightTransitionContent > div > div > div.scrollContentOuterWrapper.disableScrolling > div > div > div > div > div > div > div > div > div > div > div.marginToScrollbar > button.animate.startRaid.clickable > div > span > span > span";
  const min=10;
  const max = 11;
  const rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
  const button = document.querySelector(selector);
  button.click();
  console.log('click');
  setTimeout(cows, rand * 1000);

};


const cows = () => {
  const selector = "body > div.mainContentWrapper > window.modalWrapper.building > div > div > div.heightTransitionContent > div > div > div.scrollContentOuterWrapper.disableScrolling > div > div > div > div > div > div > div > div > div > div > div.marginToScrollbar > button.animate.startRaid.clickable > div > span > span > span";
  // const max = 10;
  // const min = 0;
  // const rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
  const button = document.querySelector(selector);
  button.click();
  console.log('click');

};

setTimeout(cows, 6000000);


setTimeout(() => {
  document.querySelector('body > div.mainContentWrapper > window > div > div > div.heightTransitionContent > div > div > div.scrollContentOuterWrapper.disableScrolling > div > div > div > div > div > div > div > div > div > div > div.marginToScrollbar > button.animate.startRaid.clickable > div > span > span > span').click();
  console.log('click')
}, 1000*60*10)



const selector = "body > div.mainContentWrapper > window.modalWrapper.building > div > div > div.heightTransitionContent > div > div > div.scrollContentOuterWrapper.disableScrolling > div > div > div > div > div > div > div > div > div > div > div.marginToScrollbar > button.animate.startRaid.clickable > div > span > span > span";

const button = document.querySelector(selector);
button.click();









document.getElementById('button').addEventListener('click', function (event) {
  console.log('CLICKED');
  clicked = true;
})







const cows = async () => {
  const slector = "button";
  const min = 1;
  const max = 10;
  const button = document.getElementById(slector);
  const rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
  button.addEventListener('click', async (event) => {
    click(button);
    await sleep(rand)
  })

}
const click = (button) => {
  button.click();
  console.log('CLICKED');
};

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}




document.getElementById('button').addEventListener('click', function (event) {
  console.log('CLICKED');
  clicked = true;
})