// STDEBAR
const menuItem = document.querySelectorAll(".menu-item");

// MESSAGES
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

//remove active  class from all menu item
const changeActiveItem = () => {
  menuItem.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notification-popup").style.display = "none";
    } else {
      document.querySelector(".notification-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

//==================messages================

// searches chats
const searchMessage = () => {
  const val = messageSearch.value.toLowercase();
  message.forEach(chat => {
    
    let name   = chat.querySelectorAll("h5").textcontent.toLowercase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

//search chat
messageSearch.addEventListener("keyup", searchMessage);

//highlight
messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

//THEME
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
//search chat
messageSearch.addEventListener("keyup", searchMessage);
//THEME/DISPLAY CUSTOMIZATION
//opens modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};
//closes modal
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};
//close modal

themeModal.addEventListener("click", closeThemeModal);
theme.addEventListener("click", openThemeModal);
fontSizes.forEach((size) => {
  let fontSize;
  if (size.classList.contains("font-size-1")) {
    fontSize = "10px";
  } else if (size.classList.contains("font-size-2")) {
    fontSize = "10px";
  }
});
