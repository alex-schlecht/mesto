class UserInfo {
  constructor(profileNameSelector, profileDescriptionSelector, avatarSelector) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileDescription = document.querySelector(profileDescriptionSelector);
    this._avatar = document.querySelector(avatarSelector);
  }
  getUserInfo() {
    return {name: this._profileName.textContent, about: this._profileDescription.textContent, id: this._id};
  }
  setUserInfo(name, about, id) {
    this._profileName.textContent = name;
    this._profileDescription.textContent = about;
    if (id !== undefined) {
      this._id = id;
    }
  }
  setUserAvatar(imgSrc) {
    this._avatar.src = imgSrc;
  }
}

export default UserInfo