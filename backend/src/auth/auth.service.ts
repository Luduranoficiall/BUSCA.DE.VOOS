import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async signPayload(payload: any) {
    return this.jwtService.sign(payload);
  }

  async validateUser(payload: any) {
    // Lógica de validação de usuário
    return { userId: payload.sub, username: payload.username };
  }
}
