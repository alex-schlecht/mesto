class UserInfo {
  constructor({profileName, profileDescription}) {
    this._profileName = profileName;
    this._profileDescription = profileDescription;
  }
  getUserInfo() {
    return {name: this._profileName.textContent, description: this._profileDescription.textContent}
    
  }
  setUserInfo(name, description) {
    this._profileName.textContent = name;
    this._profileDescription.textContent = description;
    console.log(name);
  }
}

export default UserInfo