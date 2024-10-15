class AuthObj {
    username: string;
    password: string;
  
    constructor(username: string, password: string) {
      this.username = username;
      this.password = password;
    }
  
    // You can add methods to this class if needed
    validate(): boolean {
      // Example validation logic
      return this.username.length > 0 && this.password.length > 0;
    }
  }
  
  export default AuthObj;