import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { KeycloakService } from './keycloak/keycloak.service';

@Module({
  providers: [KeycloakService],
})
export class AuthModule implements NestModule {
  constructor(private readonly keycloakService: KeycloakService) {}

  configure(consumer: MiddlewareConsumer) {
    const keycloakInstance = this.keycloakService.getKeycloakInstance();
    
    if (keycloakInstance) {
      const keycloakMiddleware = keycloakInstance.middleware();
      consumer.apply(keycloakMiddleware).forRoutes('*');
    } else {
      throw new Error('Keycloak instance is not initialized correctly');
    }
  }
}
