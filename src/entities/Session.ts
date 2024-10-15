import { v4 as uuidv4 } from 'uuid';

class Session {
  id: string;
  userId: string;
  createdAt: Date;
  expiresAt: Date;

  constructor(userId: string, expiresInHours: number = 1) {
    this.id = this.generateId();
    this.userId = userId;
    this.createdAt = new Date();
    this.expiresAt = new Date(this.createdAt.getTime() + expiresInHours * 60 * 60 * 1000);
  }

  private generateId(): string {
    return uuidv4();
  }

  isValid(): boolean {
    return new Date() < this.expiresAt;
  }
}

export default Session;